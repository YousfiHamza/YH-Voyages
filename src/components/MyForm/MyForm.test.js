import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../assets/testing";
import MyForm from "./MyForm.component.jsx";

const setUp = (props = {}) => {
  const component = shallow(<MyForm {...props} />);
  return component;
};

describe("MyForm Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("Should render without errors", () => {
    const wrapper = findByTestAttr(component, "MyFormWrapper");
    expect(wrapper.length).toBe(1);
  });
});
