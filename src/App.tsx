import {Header} from "@/layout/header/Header";
import {Main} from "@/layout/sections/main/Main";
import {About} from "@/layout/sections/about/About.tsx";
import {Works} from "@/layout/sections/works/Works";
import {Contacts} from "@/layout/sections/contacts/Contacts";
import {Footer} from "@/layout/footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Works />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App

