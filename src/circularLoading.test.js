import React from "react";
import { shallow } from "enzyme";
import { circularLoading } from "./circularLoading";

const defaultOptions = {
  distance: 4,
  num: 8,
  dotSize: 1,
  dotColor0: `rgba(50, 51, 52, 0.1)`,
  dotColor1: `rgba(50, 51, 52, 0.2)`,
  dotColor2: `rgba(50, 51, 52, 1.0)`,
  speed: 1000
};
const CircularLoading = circularLoading();

describe("circularLoading()", () => {
  test("should return function", () => {
    expect(typeof CircularLoading).toBe("function");
  });
});

describe("<CircularLoading />", () => {
  const defaultDom = shallow(<CircularLoading />);

  test("should render <div /> as root component", () => {
    expect(defaultDom.name()).toBe("styled.div");
  });

  test("should render a <CircularLoadingDots />", () => {
    expect(defaultDom.find("CircularLoadingDots").length).toBe(1);
  });

  test("<CircularLoadingDots /> should has default props", () => {
    const dotsDom = defaultDom.find("CircularLoadingDots");
    const dotsProps = dotsDom.props();
    for (let k of Object.keys(defaultOptions)) {
      expect(dotsProps[k]).toBe(defaultOptions[k]);
    }
  });
});
