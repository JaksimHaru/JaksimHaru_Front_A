import { useState } from "react";
import styles from "./Checkbox.module.css";
import styled from "styled-components";
function Checkbox({ text }) {
  const [checkState, setCheckState] = useState(false);
  const handleToggle = () => {
    setCheckState((current) => !current);
  };

  return (
    <div>
      {/* <button
        className={checkState ? styles.on : styles.off}
        onClick={handleToggle}
      >
        {text}
      </button> */}

      <StyledLabel htmlFor={text}>
        <StyledInput type="checkbox" name={text} />
        {text}
      </StyledLabel>
    </div>
  );
}
export default Checkbox;

const StyledInput = styled.input`
  appearance: none;
  border-color: transparent;
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
  background-size: 100% 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-color: #a9a9a9;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1rem;
  &:checked {
    background-color: #684fca;
  }
`;
const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const Button = styled.button`
  display: block;
  padding: 6px 10px;
  color: #fff;
  font-size: 18px;
  border-radius: 3px;
  background-color: crimson;
  border: 0;
`;
