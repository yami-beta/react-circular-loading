import React from "react";
import styled, { keyframes } from "styled-components";

const CircularLoadingRoot = styled.div`
  display: inline-block;
`;

const getDotsAnimation = (dots, options) => {
  let animations = [];
  for (let i = 0; i < options.num; i++) {
    const percentage = 100 * i / options.num;
    const shadow = dots
      .map((dot, j) => {
        let color = options.dotColor0;
        if (i === j) {
          color = options.dotColor2;
        } else if (i === j - 1 || i === j + 1) {
          color = options.dotColor1;
        }
        return `${dot.x}em ${dot.y}em ${dot.blur}em ${color}`;
      })
      .join(",");

    animations.push({
      percentage,
      boxShadow: shadow
    });
  }
  animations.push({
    percentage: 100,
    boxShadow: animations[0].boxShadow
  });

  return keyframes`${animations
    .map(a => `${a.percentage}% { box-shadow: ${a.boxShadow}; }`)
    .join("\n")}`;
};

const getCircleLoadingDots = options => {
  let dots = [];
  for (let i = 0; i < options.num; i++) {
    const percentage = 100 * i / options.num;
    const deg = 360 * i / options.num - 90; // start from top
    const rad = deg * (Math.PI / 180);
    let color = options.dotColor0;
    if (i === 0) {
      color = options.dotColor2;
    } else if (i === 1 || i === options.num - 1) {
      color = options.dotColor1;
    }

    dots.push({
      x: (options.distance * Math.cos(rad)).toFixed(2),
      y: (options.distance * Math.sin(rad)).toFixed(2),
      blur: 0,
      color: color
    });
  }

  const dotsAnimation = getDotsAnimation(dots, options);

  return styled.span`
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: ${options.dotSize}em;
    height: ${options.dotSize}em;
    border-radius: 50%;
    margin: ${options.distance}em;
    box-shadow: ${dots
      .map(dot => `${dot.x}em ${dot.y}em ${dot.blur}em ${dot.color}`)
      .join(",")};
    animation: ${dotsAnimation} ${options.speed}ms infinite linear;
  `;
};

const circularLoading = params => {
  const options = Object.assign(
    {},
    {
      distance: 4,
      num: 8,
      dotSize: 1,
      dotColor0: `rgba(50, 51, 52, 0.1)`,
      dotColor1: `rgba(50, 51, 52, 0.2)`,
      dotColor2: `rgba(50, 51, 52, 1.0)`,
      speed: 1000
    },
    params
  );

  return props => {
    const CircularLoadingDots = getCircleLoadingDots(options);
    return (
      <CircularLoadingRoot>
        <CircularLoadingDots />
      </CircularLoadingRoot>
    );
  };
};

export { circularLoading };
