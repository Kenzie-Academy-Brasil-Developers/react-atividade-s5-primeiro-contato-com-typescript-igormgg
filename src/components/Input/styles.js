import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  margin-bottom: 8px;

  label {
    font-size: 18px;
  }

  input {
    background-color: lightgray;
    border: none;
    border-radius: 5px;
    padding: 5px;
    padding-left: 10px;
    font-size: 16px;
  }
`;
