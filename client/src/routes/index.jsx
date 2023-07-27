import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Admin from "../components/Admin";
import { useState, useEffect } from "react"
import { Context } from "../ContextProvider/context.js";

const Router = () => {
  const [projects, setProjects] = useState([])
  const [skills, setSkills] = useState([])
  const serverURL = "http://localhost:3001/api/v1"

  useEffect(() => {
    async function getProjects() {
      try {
        const url = `${serverURL}/projects`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.data) {
          setProjects(data.data)
        }

        if(data instanceof Error) {
          alert("Failed to get projects, check your network")
        }
      } catch(err) {
        alert(err.message)
      }
    }

    async function getSkills() {
      try {
        const url = `${serverURL}/skills`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.data) {
          setSkills(data.data)
        }

        if(data instanceof Error) {
          alert("Failed to get skills, check your network")
        }
      } catch(err) {
        alert(err.message)
      }
    }

    getProjects()
    getSkills()
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "admin/:password",
      element: <Admin />,
    },
  ]);
 
  const values = {
    projects: projects,
    skills: skills,
    setProjects: setProjects,
    setSkills: setSkills,
    serverURL: serverURL
  }

  return (
      projects.length && skills.length &&
      <>
      <Context.Provider value={values}>
        <RouterProvider router={router} />
      </Context.Provider>
      </>
  );
};

export default Router;