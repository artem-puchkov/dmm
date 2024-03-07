import { ThemeProvider } from "@mui/material"
import { Header } from "./components/Header/Header"
import theme from "./util/theme"
import { Footer } from "./components/Footer/Footer"
// import { MainPage } from "./pages/Main/MainPage"
// import { ContactsPage } from "./pages/Contacts/ContactsPage"
import { AllPostsPage } from "./pages/AllPosts/AllPostsPage"

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Header/>
        <AllPostsPage/>
        <Footer/>
    </ThemeProvider>
  )
}

export default App
