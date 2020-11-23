import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../assets/testing";
import Header from "./Header.component.jsx";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  describe("Checking PropTypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        title: "test Title",
        subTitle: "test SubTitle",
      };
      const propsError = checkProps(Header, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Have No Props", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    it("should not render", () => {
      const wrapper = findByTestAttr(component, "HeaderWrapper");
      expect(wrapper.length).toBe(0);
    });
  });

  describe("Have Props", () => {
    let component;
    beforeEach(() => {
      const props = {
        title: "title",
        subTitle: "subTitle",
      };
      component = setUp(props);
    });
    it("should render without errors", () => {
      const wrapper = findByTestAttr(component, "HeaderWrapper");
      expect(wrapper.length).toBe(1);
    });
    it("should render a Title", () => {
      const wrapper = findByTestAttr(component, "title");
      expect(wrapper.length).toBe(1);
    });
    it("should render a SubTitle", () => {
      const wrapper = findByTestAttr(component, "subTitle");
      expect(wrapper.length).toBe(1);
    });
  });
});
