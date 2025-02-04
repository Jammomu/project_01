import { Bread } from './Bread';
import { MainNav } from './mainnav';
import { MainSection1 } from './MainSection1-1';
import { MainSection2 } from './MainSection1-2';
import { MainSection3 } from './MainSection1-3';
import { MainSection4 } from './MainSection2-1';
import { MainSection5 } from './MainSection2-2';

export function MainContent({mainsection, setMainsection}) {
  const mainsectionpage = () => {
    switch (mainsection) {
      case 1:
        return <MainSection1 />;
      case 2:
        return <MainSection2 />;
      case 3:
        return <MainSection3 />;
      case 4:
        return <MainSection4 />;
      case 5:
        return <MainSection5 />;
      default:
        return <div>Section not found</div>;
    }
  };

  return (
    <div className="main-content">
      <MainNav setMainsection={setMainsection}/>
      <Bread />
      {mainsectionpage()}
    </div>
  );
}