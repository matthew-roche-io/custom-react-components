import React, { FC, useState, useEffect, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  label: string;
  selected?: boolean;
  onClick: (selected: boolean) => void;
  disabled?: boolean;
  minHeight?: string;
  minWidth?: string;
  size?: string;
}

export const SelectableButton: FC<Props> = ({
  label,
  selected,
  onClick,
  disabled,
  minHeight,
  minWidth,
  size,
}): ReactNode => {
  const [isSelected, setIsSelected] = useState(selected);

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  if (!minHeight) {
    minHeight = "52px";
  }

  if (!minWidth) {
    minWidth = "150px";
  }

  if (!size) {
    size = "small";
  }

  const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    position: relative;
    min-width: ${minWidth};
    min-height: ${minHeight};
    box-shadow: none;
    border-radius: ${size === "small"
      ? "6px"
      : size === "medium"
        ? "10px"
        : "14px"};
    transition: all 0.4s;
    box-sizing: border-box;
    font-size: ${size === "small"
      ? "10px"
      : size === "medium"
        ? "16px"
        : "24px"};
    padding: ${size === "small"
      ? "3px 5px"
      : size === "medium"
        ? "8px 16px"
        : "12px 24px"};
    border: 2px solid rgb(200, 200, 200);
    border-width: ${size === "small" ? "2px" : "3px"};
    margin: 0 1px;

    * {
      font-family: sans-serif;
    }

    &:hover {
      background-color: #87cf90;
      /* color: #fff; */
    }

    &.selectable-button-selected {
      background-color: #87cf90;
      border: 2px solid #46804e;
      border-width: ${size === "small" ? "2px" : "3px"};
      * {
        z-index: 1;
      }
      &:hover {
        box-shadow: none !important;
      }
      &::before {
        background-color: rgba(175, 175, 175, 0.08);
      }
    }

    span: {
      text-align: center;
      line-height: 1em;
      font-size: ${size === "small"
        ? "10px"
        : size === "medium"
          ? "14px"
          : "18px"};
    }

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      z-index: 0;
      background-color: rgba(175, 175, 175, 0.3);
    }

    &:not(.configure):not(.selectable-button-disabled):hover {
      box-shadow: 0 5px 11px rgba(175, 175, 175, 0.55);
      &::before {
        background-color: rgba(175, 175, 175, 0.1);
      }
    }

    &:not(.selectable-button-disabled) {
      cursor: pointer;
    }

    &.selectable-button-disabled {
      border-color: rgba(175, 175, 175, 0.3);
      color: rgba(200, 200, 200, 0.8);
    }
  `;

  const handleClick = () => {
    setIsSelected(!isSelected);
    if (!disabled && onClick && typeof onClick === "function") {
      onClick(!isSelected);
    }
  };

  const classList = ["selectableButton"];

  if (isSelected) {
    classList.push("selectable-button-selected");
  }

  if (disabled) {
    classList.push("selectable-button-disabled");
  }

  return (
    <React.Fragment>
      <StyledDiv onClick={handleClick} className={classList.join(" ")}>
        <span className="cardTitle">{label}</span>
      </StyledDiv>
    </React.Fragment>
  );
};
