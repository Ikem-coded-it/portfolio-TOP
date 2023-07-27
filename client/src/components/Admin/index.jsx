import { FlexColumn, FlexRow } from "../styles/Container.Styled"
import { UploadForm } from "../styles/Form.Styled";
import { Button } from "../styles/Button.Styled";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProjectContainer } from "../styles/ProjectsSection.Styled";
import { Image } from "../styles/Image.Styled";
import SkillForm from "./SkillsForm";
import styled from "styled-components";

const AdminSection = styled(FlexRow)`
  @media(max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    gap: 40px;
    align-items: center;
    justify-content: flex-start;

    & form {
      width: 100%;
    }
  }
`

export default function Admin() {
  const [authorized, setAuthorized] = useState(false)
  const params = useParams()
  useEffect(() => {
    function checkPassword() {
      // eslint-disable-next-line no-undef
      if (params.password === import.meta.env.VITE_ADMIN_PASSWORD) {
        setAuthorized(true)
      }
    }
    checkPassword()
  })

  if(authorized === false) return <h1>You cannot go here bro</h1>

  return (
    <AdminSection 
      height="minmax(100vh, fit-content)"
      align="flex-start"
      justify="space-between"
      padding="40px 40px"
      gap="20px">
      <UploadForm>
        <FlexColumn width="100%" gap="10px">
          <label htmlFor="title">Project Title</label>
          <input type="text" id="title" name="title"/>
        </FlexColumn>
        <FlexColumn width="100%" gap="10px">
          <label htmlFor="description">Project Description</label>
          <textarea id="description" name="description"></textarea>
        </FlexColumn>
        <FlexColumn width="100%" gap="10px">
          <label htmlFor="live_url">Live URL</label>
          <input type="url" id="live_url" name="live_url"/>
        </FlexColumn>
        <FlexColumn width="100%" gap="10px">
          <label htmlFor="code_url">Code URL</label>
          <input type="url" id="code_url" name="code_url"/>
        </FlexColumn>
         <FlexColumn width="100%" gap="10px">
          <label htmlFor="screenshot_url">Screenshot URL</label>
          <input type="url" id="screenshot_url" name="screenshot_url"/>
        </FlexColumn>
        <FlexRow width="100%" gap="10px">
          <Button type="submit">Upload Project</Button>
        </FlexRow>
      </UploadForm>

      <SkillForm />
      
      <FlexColumn 
        gap="10px" 
        justify="center"
        >
        <h1>Uploaded Projects</h1>
        <AdminProject />
        <AdminProject />
        <AdminProject />
      </FlexColumn>
    </AdminSection>
  )
}

function AdminProject () {
  return (
    <ProjectContainer width="300px" height="400px">
      <Image  height="60%" width="100%" />
      <FlexColumn height="40%" width="100%" padding="15px">
        <FlexRow 
          justify="space-between"
          width="100%" 
          height="40px">
          <h3>Project</h3>
          <FlexRow 
            justify="space-between"
            gap="20px">
            <a target="_blank">
              <i className="devicon-github-original colored"></i>
            </a>
            <a target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>open-in-new</title><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" /></svg>
            </a>
          </FlexRow>
        </FlexRow>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse sint perspiciatis eveniet recusandae assumenda. Harum consequuntur.
        </p>
      </FlexColumn>
      <FlexRow justify="center" width="100%" height="fit-content">
        <Button type="button">Delete</Button>
      </FlexRow>
    </ProjectContainer>
  )
}