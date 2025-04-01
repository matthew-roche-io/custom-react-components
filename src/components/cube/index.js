import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

// import './index.scss';
let StyledDiv;

export const Cube = ({activeSide, width=800}) => {
  const [visibleSide, setVisibleSide] = useState();
  const [recessed, setRecessed] = useState(false);

  useEffect(() => {
    StyledDiv = getCubeStyledDiv(width);
  }, []);

  useEffect(() => {
    if (!activeSide) {
      return;
    }
    setRecessed(true);
    window.setTimeout(() => {
      setVisibleSide(activeSide);
      window.setTimeout(()=> {
        setRecessed(false);
      }, 1000);
    }, 600);
  }, [activeSide]);

  if (!StyledDiv) {
    return null;
  }

  return (
    <StyledDiv>
      <div className={`cube ${visibleSide}-visible ${(recessed ? 'recessed' : '')}`}>
        <div className="side back">
          <span>This is the back side</span>
        </div>
        <div className="side left">
          <span>This is the left side</span>
        </div>
        <div className="side right">
          <span>This is the right side</span>
        </div>
        <div className="side top">
          <span>This is the top</span>
        </div>
        <div className="side bottom">
          <span>This is the bottom</span>
        </div>
        <div className="side front">
          <span>This is the front side</span>
        </div>
      </div>
    </StyledDiv>
  );
};

const getCubeStyledDiv = (width) => {
  return styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: -1;
    perspective: 2000px;
    perspective-origin: 50% 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px solid green;
     box-sizing: border-box;

    .cube {
      position: absolute;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 2s, scale 1.2s;
      transform-origin: 50% 50% -${0.5 * width}px;
      transform-style: preserve-3d;

      &.recessed {
        scale: 50%;
        transition: all 1.2s;
      }

      &.front-visible {
        transform: rotateY(0);
      }

      &.back-visible {
        transform: rotateY(180deg);
      }

      &.bottom-visible {
        transform: rotateX(90deg);
      }

      &.top-visible {
        transform: rotateX(-90deg)
      }

      &.right-visible {
        transform: rotateY(-90deg);
      }

      &.left-visible {
        transform: rotateY(90deg);
      }

      .side {
        height: ${width}px;
        width: ${width}px;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
        color: #fff;
        border: 2px solid #fff;
        box-sizing: border-box;
      }

      .front {
        background-color: rgba(200, 0, 0, 0.9);
        background-color: rgba(20, 20, 20, 0.92);
      }

      .left {
        background-color: rgba(200, 200, 0, 0.9);
        background-color: rgba(20, 20, 20, 0.92);
        transform: translateZ(-${ 0.5 * width}px) translateX(-${ 0.5 * width}px) rotateY(270deg);
      }

      .bottom {
        background-color: rgba(0, 200, 200, 0.9);
        background-color: rgba(20, 20, 20, 0.92);
        transform: translateY(${ 0.5 * width}px) translateZ(-${ 0.5 * width}px) rotateX(270deg);
      }

      .top {
        background-color: rgba(200, 0, 200, 0.9);
        background-color: rgba(20, 20, 20, 0.92);
        transform: translateY(-${ 0.5 * width}px) translateZ(-${ 0.5 * width}px) rotateX(90deg);
      }

      .right {
        background-color: rgba(0, 0, 200, 0.9);
        background-color: rgba(20, 20, 20, 0.92);
        transform: translateX(${ 0.5 * width}px) translateZ(-${ 0.5 * width}px) rotateY(90deg);
      }

      .back {
        background-color: rgba(130, 200, 74, 0.9);
        background-color: rgba(20, 20, 20, 0.92);
        transform: translateZ(-${width}px) rotateY(180deg);
      }
    }
  `;
};


