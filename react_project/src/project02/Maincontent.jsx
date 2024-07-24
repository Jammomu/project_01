import './style/MainContent.css'
import { Bread } from './Bread';
import { MainNav } from './MainNav';
export function MainContent(){
  return(
    <div className="main-content">
      <MainNav/>
      <Bread/>
  </div>
  );
}