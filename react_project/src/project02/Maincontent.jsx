import { Bread } from './Bread';
import { MainNav } from './MainNav';
import { MainSection } from './Mainsection';
import {CompanyIntro} from './contentintro'
export function MainContent(){
  return(
    <div className="main-content">
      <MainNav/>
      <Bread/>
      <CompanyIntro/>
      <MainSection/>
  </div>
  );
}