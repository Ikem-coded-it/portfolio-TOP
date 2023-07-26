import styled from "styled-components";

export const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;

  & input {
    width: 90%;
    height: 50px;
    border: 1px solid green;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
    font-family: Roboto;
    color: var(--font-dark-dark);
  }

  & textarea {
    width: 90%;
    max-height: 90px;
    min-height: 90px;
    border: 1px solid green;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
    font-family: Roboto;
    color: var(--font-dark-dark);
  }

  & label {
    font-family: "Playfair display";
    font-size: 16px;
  }

`