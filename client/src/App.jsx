import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'
import Header from './components/Header/index'
import ProjectsContainer from './components/Projects'
import Contacts from './components/Contacts'
import './App.css'

const theme = {
  colors: {
    lightBg: "#fff",
    darkBg: "#020617"
  },
  mobile: "500px",
  tablet: "950px",
}

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
      <Header />
      <ProjectsContainer />
      <Contacts />
     </>
    </ThemeProvider>
  )
}

export default App
