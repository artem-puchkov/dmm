import { ThemeProvider } from "@mui/material"
import { Header } from "./components/Header/Header"
import theme from "./util/theme"
import { Footer } from "./components/Footer/Footer"
import { MainPage } from "./pages/Main/MainPage"
import { ContactsPage } from "./pages/Contacts/ContactsPage"
import { AllPostsPage } from "./pages/AllPosts/AllPostsPage"
import { PostCard } from "./components/PostCard/PostCard"

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Header/>
        <PostCard/>
        <Footer/>
    </ThemeProvider>
  )
}

export default App
