import { ThemeProvider } from "@mui/material"
import { Header } from "./components/Header/Header"
import theme from "./util/theme"
import { Footer } from "./components/Footer/Footer"
import { MainPage } from "./pages/Main/MainPage"
import { ContactsPage } from "./pages/Contacts/ContactsPage"
import { AllPostsPage } from "./pages/AllPosts/AllPostsPage"
import { PostCard } from "./components/PostCard/PostCard"
import { useState } from "react"
import { ModalWindow } from "./components/ModalWindow/ModalWindow"

function App() {
  const [registerModal, setRegisterModal] = useState<boolean>(false);
  const handleRegisterOpen = () => setRegisterModal(true);
  const handleRegisterClose = () => setRegisterModal(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header handleRegisterOpen={handleRegisterOpen}/>
        <MainPage/>
        <Footer/>
      </ThemeProvider>
      <ModalWindow open={registerModal} handleClose={handleRegisterClose}/>
    </>
  )
}

export default App
