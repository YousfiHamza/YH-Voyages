import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../assets/testing";
import FromTo from "./From-To.component.jsx";

const setUp = (props = {}) => {
  const component = shallow(<FromTo {...props} />);
  return component;
};

describe("Form Inputs Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("Should render without errors", () => {
    const wrapper = findByTestAttr(component, "FromToWrapper");
    expect(wrapper.length).toBe(1);
  });
});
