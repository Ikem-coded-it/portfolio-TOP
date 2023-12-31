import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Admin from "../components/Admin";
import { useState, useEffect } from "react"
import { Context } from "../ContextProvider/context.js";
import { getProjects, getSkills } from "../firebase/index.js";

const Router = () => {
  const [projects, setProjects] = useState([])
  const [skills, setSkills] = useState([])
  const serverURL = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    async function getProjectsFromFirebase() {
      try {
        const projects = await getProjects()
        if(projects instanceof Error) {
          return alert(projects.message)
        }

        if (projects.length > 0) {
          return setProjects(projects)
        }
      } catch (error) {
        alert(error.message)
      }
    }

    // async function getProjectsFromMongodb() {
    //   try {
    //     const url = `${serverURL}/projects`;
    //     const response = await fetch(url);
    //     const data = await response.json();

    //     if (data.data) {
    //       setProjects(data.data)
    //     }

    //     if(data instanceof Error) {
    //       alert("Failed to get projects, check your network")
    //     }
    //   } catch(err) {
    //     if (err.message === "Failed to fetch" || err.message === "failed to fetch") {
    //       alert("Please check your internet connection and try again")
    //     } else {
    //       alert(err.message)
    //     }
    //   }
    // }

    async function getSkillsFromFirebase() {
      try {
        const skills = await getSkills()
        if(skills instanceof Error) {
          return alert(skills.message)
        }

        if (skills.length > 0) {
          return setSkills(skills)
        }
      } catch (error) {
        alert(error.message)
      }
    }

    // async function getSkillsFromMongodb() {
    //   try {
    //     const url = `${serverURL}/skills`;
    //     const response = await fetch(url);
    //     const data = await response.json();

    //     if (data.data) {
    //       setSkills(data.data)
    //     }

    //     if(data instanceof Error) {
    //       alert("Failed to get skills, check your network")
    //     }
    //   } catch(err) {
    //     if (err.message === "Failed to fetch" || err.message === "failed to fetch") {
    //       alert("Please check your internet connection and try again")
    //     } else {
    //       alert(err.message)
    //     }
    //   }
    // }

    // getProjectsFromMongodb()
    // getSkillsFromMongodb()
    getProjectsFromFirebase()
    getSkillsFromFirebase()
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      projects.length >= 0 && skills.length >= 0 &&
      <>
      <Context.Provider value={values}>
        <RouterProvider router={router} />
      </Context.Provider>
      </>
  );
};

export default Router;