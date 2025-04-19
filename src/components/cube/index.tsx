import {useState, useEffect, FC, useRef} from 'react';
import styled from 'styled-components';
import { CubeObjectInterface } from './cube-object.interface';

interface Props {
  width: number;
}

const StyledDiv = styled.div<Props>`
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    perspective: 2000px;
    perspective-origin: 50% 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    .cube {
      position: absolute;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 2s, scale 1.2s;
      transform-origin: 50% 50% -${props => 0.5 * props.width}px;
      transform-style: preserve-3d;
      opacity: 1;
      scale: 100%;

      &.pushedForward {
        opacity: 0;
        scale: 300%;
        transition: opacity 1s scale 1s;
      }

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
        height: ${(props => props.width)}px;
        width: ${props => props.width}px;
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
        transform: translateZ(-${(props => 0.5 * props.width)}px) 
         translateX(-${(props => 0.5 * props.width)}px) rotateY(270deg);
      }

      .bottom {
        background-color: rgba(0, 200, 200, 0.9);
        background-color: rgba(20, 20, 20, 0.92);
        transform: translateY(${(props => 0.5 * props.width)}px)
         translateZ(-${(props => 0.5 * props.width)}px) rotateX(270deg);
      }

      .top {
        background-color: rgba(200, 0, 200, 0.9);
        background-color: rgba(20, 20, 20, 0.92);
        transform: translateY(-${(props => 0.5 * props.width)}px)
         translateZ(-${(props => 0.5 * props.width)}px) rotateX(90deg);
      }

      .right {
        background-color: rgba(0, 0, 200, 0.9);
        background-color: rgba(20, 20, 20, 0.92);
        transform: translateX(${(props => 0.5 * props.width)}px) 
          translateZ(-${(props => 0.5 * props.width)}px) rotateY(90deg);
      }

      .back {
        background-color: rgba(130, 200, 74, 0.9);
        background-color: rgba(20, 20, 20, 0.92);
        transform: translateZ(-${(props => props.width)}px) rotateY(180deg);
      }
    }
  `;

interface MainProps {
  activeSide: string;
  width?: number;
  faces: CubeObjectInterface;
}

export const Cube: FC<MainProps> = ({activeSide='front', width=800, faces}) => {
  const [visibleSide, setVisibleSide]= useState<string>(activeSide);
  const [recessed, setRecessed] = useState<boolean>(false);
  const [pushedForward, setPushedForward] = useState<boolean>(true);
  const [sideLength, setSideLength] = useState(width);

  const cubeRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {

    window.addEventListener('resize', onWindowResize);

    return () => window.removeEventListener('resize', onWindowResize);    
  }, []);

  useEffect(() => {
    if(cubeRef === null){
      
      return;
    }

    const elementHeight: number = cubeRef.current!.offsetHeight * 0.9;
    const elementWidth: number = cubeRef.current!.offsetWidth * 0.9;
    setSideLength(Math.min(elementHeight, elementWidth, width));

  }, [cubeRef]);

  useEffect(() => {
    if(cubeRef.current === null){

      return;
    }
    
    cubeRef.current.style.opacity = "1";
    setPushedForward(false);
  }, []);

  useEffect(() => {
    if (!activeSide || activeSide === visibleSide) {

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

  function onWindowResize(){
      if(cubeRef.current){
        const elementHeight: number = cubeRef.current!.offsetHeight * 0.9;
        const elementWidth: number = cubeRef.current!.offsetWidth * 0.9;
        setSideLength(Math.min(elementHeight, elementWidth, width));
      }
  }

  return (
    <StyledDiv 
      ref={cubeRef}
      width={sideLength} 
      style={{transition: 'opacity 0.8s', opacity: 0}}
    >
      <div className={`cube ${visibleSide}-visible ${(recessed ? 'recessed' : '')} ${(pushedForward ? 'pushedForward' : '')}`}>
        <div className="side back" >
          {faces.back}
        </div>
        <div className="side left">
          {faces.left}
        </div>
        <div className="side right">
          {faces.right}
        </div>
        <div className="side top">
          {faces.top}
        </div>
        <div className="side bottom">
          {faces.bottom}
        </div>
        <div className="side front">
          {faces.front}
        </div>
      </div>
    </StyledDiv>
  );
};

