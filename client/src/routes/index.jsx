import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Admin from "../components/Admin";
import { useState, useEffect } from "react"
import { Context } from "../ContextProvider/context.js";

const Router = () => {
  const [projects, setProjects] = useState([])
  const [skills, setSkills] = useState([])
  const serverURL = "https://portfolioapi-ry6g.onrender.com/api/v1";

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
        if (err.message === "Failed to fetch" || err.message === "failed to fetch") {
          alert("Please check your internet connection and try again")
        } else {
          alert(err.message)
        }
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
        if (err.message === "Failed to fetch" || err.message === "failed to fetch") {
          alert("Please check your internet connection and try again")
        } else {
          alert(err.message)
        }
      }
    }

    getProjects()
    getSkills()
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