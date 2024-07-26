import { Header } from "./project02/header";
import { Footer } from "./project02/footer";
import { useState } from "react";
import { MainContent } from "./project02/Maincontent";
// import { SubPage2_1_1 } from "./project02/SubPage2_1_1";
import './project02/style/MainContent.css'

function App() {
  const [mainsection,setMainsection] = useState(1);
  return (
    <>
    <Header setMainsection={setMainsection}/>
    <MainContent mainsection={mainsection} setMainsection={setMainsection}/>
    <Footer/>
    {/* <SubPage2_1_1/> */}
    </>
  );
}

export default App;
