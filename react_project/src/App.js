import { Header } from "./project02/header";
import { Footer } from "./project02/footer";
import { useState } from "react";
import { MainContent } from "./project02/Maincontent";
import './project02/style/MainContent.css'

function App() {
  const [mainsection,setMainsection] = useState(1);
  return (
    <>
    <Header setMainsection={setMainsection}/>
    <MainContent mainsection={mainsection} setMainsection={setMainsection}/>
    <Footer/>
    </>
  );
}

export default App;
