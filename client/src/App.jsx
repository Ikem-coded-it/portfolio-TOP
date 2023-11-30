import GlobalStyles from './components/styles/Global'
import Header from './components/Header/index'
import Skills from './components/Skills'
import ProjectsContainer from './components/Projects'
import Contacts from './components/Contacts'
import { useContext, useEffect } from 'react';
import { Context } from './ContextProvider/context'
import './App.css'

function App() {
  const { serverURL } = useContext(Context);
  useEffect(() => {
    async function startServer() {
      await fetch(serverURL + '/start')
    }
    startServer()
  })
  return (
      <>
      <GlobalStyles />
      <Header />
      <Skills />
      <ProjectsContainer />
      <Contacts />
     </>
  )
}

export default App
