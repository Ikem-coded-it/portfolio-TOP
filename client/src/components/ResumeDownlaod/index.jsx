import styled from "styled-components";
import { Button } from "../styles/Button.Styled";
import { Context } from "../../ContextProvider/context";
import { useContext } from "react";

const DownloadBtn = styled(Button)`
  width: 100px;
  font-size: 12px;
  z-index: 111111111111;
  cursor: pointer;
  position: fixed;
  top: 10px;
  right: 10px;
`

const DownloadForm = styled.form`
  position: fixed;
  top: 10px;
  right: 10px;
  width: fit-content;
  height: fit-content;
  z-index: 111111111111;
`

export default function ResumeDownloadButton() {
  const context = useContext(Context);

  return (
    <DownloadForm action={context.serverURL + '/download-resume'}>
      <DownloadBtn bg="#334155">
        Download Resume
        <i className="fa-solid fa-download"></i>
      </DownloadBtn>
    </DownloadForm>
  )
}