import React from "react";
import styled from "styled-components";

interface FormButtonProps {
  name?: string;
  link: string;
}

const StyledWrapper = styled.div`
  .btn-17 {
    position: relative;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: button;
    background-color: #DDDDDD;
    color: #fff;
    cursor: pointer;
    font-size: 100%;
    line-height: 1.5;
    margin: 0;
    font-weight: 500;
    text-transform: capitalize;
    overflow: hidden;
    border: 2px solid transparent;
    z-index: 0;
    transition: all 0.3s ease;
  }

  .btn-17 .text-container {
    display: block;
    overflow: hidden;
    position: relative;
  }

  .btn-17 .text {
    display: block;
    position: relative;
  }

  .btn-17:hover .text {
    animation: move-up-alternate 0.3s forwards;
  }

  @keyframes move-up-alternate {
    0% { transform: translateY(0); }
    50% { transform: translateY(80%); }
    51% { transform: translateY(-80%); }
    100% { transform: translateY(0); }
  }

  .btn-17:after,
  .btn-17:before {
    --skew: 0.2;
    background: #fff;
    content: "";
    display: block;
    height: 102%;
    left: calc(-50% - 50% * var(--skew));
    pointer-events: none;
    position: absolute;
    top: -104%;
    transform: skew(calc(150deg * var(--skew))) translateY(var(--progress, 0));
    transition: transform 0.2s ease;
    width: 100%;
  }

  .btn-17:after { --progress: 0%; left: calc(50% + 50% * var(--skew)); top: 102%; z-index: -1; }
  .btn-17:hover:before { --progress: 100%; }
  .btn-17:hover:after { --progress: -102%; }
`;

const FormButton: React.FC<FormButtonProps> = ({ name = "Open Form", link }) => {
  const handleClick = () => {
    window.open(link, "_blank"); // opens form in a new tab
  };

  return (
    <StyledWrapper>
      <button className="btn-17" onClick={handleClick}>
        <span className="text-container">
          <span className="text w-tab-link " style={{backgroundColor: "transparent"}}>{name}</span>
        </span>
      </button>
    </StyledWrapper>
  );
};

export default FormButton;
