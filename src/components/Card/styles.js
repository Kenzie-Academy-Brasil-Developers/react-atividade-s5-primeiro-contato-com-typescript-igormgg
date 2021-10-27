import styled from "styled-components";

export const CardDiv = styled.div`
  min-width: 100px;
  min-height: 100px;
  border: 1px solid gray;
  background-color: gray;
  color: white;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  h1 {
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    color: rgb(84, 225, 253);
  }

  h2 {
    font-size: 16px;
    font-weight: bold;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
  }
`;
