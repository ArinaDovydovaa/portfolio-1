import {Header} from '@/layout/header/Header';
import {Main} from '@/layout/sections/main/Main';
import {About} from '@/layout/sections/about/About';
import {Works} from '@/layout/sections/works/Works';
import {Contacts} from '@/layout/sections/contacts/Contacts';
import {Footer} from '@/layout/footer/Footer';
import {Skills} from '@/layout/sections/skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Main />
        <About />
        <Works />
        <Skills />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}

export default App
