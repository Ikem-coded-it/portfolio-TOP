import { FlexColumn, FlexRow } from "../styles/Container.Styled"
import { Button } from "../styles/Button.Styled";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProjectContainer } from "../styles/ProjectsSection.Styled";
import { Image } from "../styles/Image.Styled";
import ProjectForm from "./ProjectForm";
import SkillForm from "./SkillsForm";
import { Skill } from "../Skills";
import { Context } from "../../ContextProvider/context";
import { useContext } from "react";
import LoaderSpinner from "../Loader";
import PropTypes from 'prop-types';
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
  const [uploading, setUploading] = useState(false)
  // const [projects, setProjects] = useState([])
  // const [skills, setSkills] = useState([])
  const params = useParams()
  const context = useContext(Context);

  useEffect(() => {
    function checkPassword() {
      // eslint-disable-next-line no-undef
      if (params.password === "IDONTknow2") {
        setAuthorized(true)
        return true
      }
    }

    checkPassword();
   
  }, [params])

  const handleProjectUpload = async(e) => {
    e.preventDefault();
    try {
      setUploading(true)

      const title = e.target.title.value
      const description = e.target.description.value
      const liveURL = e.target.live_url.value
      const codeURL = e.target.code_url.value
      const screenshot = e.target.screenshot.files[0]

      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('liveURL', liveURL);
      formData.append('codeURL', codeURL);
      formData.append('screenshot', screenshot);

      const url = `${context.serverURL}/projects/create`;
  
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      })
      const data = await response.json();
      if (data.data) {
        setUploading(false)
        context.setProjects([data.data, ...context.projects])
      }

      if (data instanceof Error) {
        alert(data.message)
        setUploading(false)
      }

      e.target.title.value = '';
      e.target.description.value = '';
      e.target.live_url.value = '';
      e.target.code_url.value = '';
    } catch(err) {
      alert(err.message)
      setUploading(false)
    }
  }

  const handleSkillUpload = async(e) => {
    e.preventDefault();
    try {
      setUploading(true)

      const newSkill = {
        name: e.target.name.value,
        iconClassName: e.target.icon_class_name.value
      }
      
      const url = `${context.serverURL}/skills/create`
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(newSkill),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await response.json()

      
      if(data.success === false) {
        alert(data.message)
        setUploading(false)
      }

      if (data.success === true) {
        context.setSkills([...context.skills, data.data])
        setUploading(false)
      }

      e.target.name.value = '';
      e.target.icon_class_name.value = '';
    } catch(err) {
      alert(err.message)
      setUploading(false)
    }
  }

  if(authorized === false) return <h1>You cannot go here bro</h1>

  return (
    <>
    {uploading === true && <LoaderSpinner /> }

    <AdminSection 
      height="minmax(100vh, fit-content)"
      align="flex-start"
      justify="space-between"
      padding="40px 40px"
      gap="20px"
      >
      
      <FlexRow>
        <ProjectForm onSubmit={handleProjectUpload} />
        <SkillForm onSubmit={handleSkillUpload} />
      </FlexRow>
      
      <FlexRow 
      align="flex-start"
      gap="20px">
        <FlexColumn 
          gap="10px" 
          columns="70px"
          rows="70px"
          >
          <h1>Uploaded Skills</h1>
          {
            context.skills.length &&
            context.skills.map((skill) => {
              return <Skill
                width="100px"
                key={skill._id}
                name={skill.name}
                iconClassName={skill.iconClassName}
              />
            })
          }
        </FlexColumn>

        <FlexColumn 
          gap="10px" 
          justify="center"
          >
          <h1>Uploaded Projects</h1>
          {
            context.projects.length &&
            context.projects.map((project) => {
              return <AdminProject 
                key={project._id}
                id={project._id}
                title={project.title}
                description={project.description}
                liveURL={project.liveURL}
                codeURL={project.codeURL}
                screenshotURL={project.screenshotURL}
              />
            })
          }
        </FlexColumn>
      </FlexRow>
    </AdminSection>
    </>
  )
}

function AdminProject ({ id, title, description, liveURL, codeURL, screenshotURL}) {
  const context = useContext(Context)

  const handleDelete = async() => {
    try {
      const url = `${context.serverURL}/projects/delete/${id}`;
      const response = await fetch(url, {method: 'DELETE'});
      const data = await response.json();

      if(data.success === true) {
        context.setProjects(prev => {
          return prev.filter(project => project._id !== id)
        })
        alert(data.message)
      } else {
        alert(data.message)
      }
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <ProjectContainer width="300px" height="400px">
      <Image 
      src={screenshotURL} 
      height="60%" 
      width="100%"
      loading="lazy"
      />
      <FlexColumn height="40%" width="100%" padding="15px">
        <FlexRow 
          justify="space-between"
          width="100%" 
          height="40px">
          <h3>{title}</h3>
          <FlexRow 
            justify="space-between"
            gap="20px">
            <a 
            target="_blank" 
            rel="noreferrer" 
            href={codeURL}>
              <i className="devicon-github-original colored"></i>
            </a>
            <a 
            target="_blank" 
            rel="noreferrer" 
            href={liveURL}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>open-in-new</title><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" /></svg>
            </a>
          </FlexRow>
        </FlexRow>
        <p>
          {description}
        </p>
      </FlexColumn>
      <FlexRow justify="center" width="100%" height="fit-content">
        <Button 
        type="button"
        onClick={handleDelete}>
          Delete
        </Button>
      </FlexRow>
    </ProjectContainer>
  )
}


AdminProject.propTypes = {
  id:  PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  liveURL: PropTypes.string,
  codeURL: PropTypes.string,
  screenshotURL: PropTypes.string,
};