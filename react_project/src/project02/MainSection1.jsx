import { useEffect } from 'react';
import './style/MainSection1.css';
export function MainSection1 ({ exposurePercentage = 100, loop = true })  {
  

  useEffect(() => {
    const handleScroll = () => {
      const counters = document.querySelectorAll('.scroll_on');

      counters.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const winHeight = window.innerHeight;
        const contentHeight = rect.bottom - rect.top;

        if (
          rect.top <= winHeight - (contentHeight * exposurePercentage / 100) &&
          rect.bottom >= (contentHeight * exposurePercentage / 100)
        ) {
          el.classList.add('active');
        } 
      });
    };

    window.addEventListener('scroll', handleScroll);

    // 초기 스크롤 위치에서도 체크합니다.
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [exposurePercentage, loop]);


  const contentHeaderStyle = {
    borderLeft: '4px solid black',
    paddingLeft: '15px'
  };

  const headingStyle = {
    marginBottom: '20px'
  };

  const subheadingStyle = {
    fontSize: '1.3em'
  };
  const containerStyle = {
    marginBottom: '50px',
    width: '800px',
    left: '100px',
    top: '10px',
    position: 'relative',
    zIndex: '-1'
  };


  return (
    <>
    <div style={containerStyle}>
    <h1 style={headingStyle}>회사소개 스타일1</h1>
  </div>
    <div className="main-section">
      <div className="content">
        <div className="content_header scroll_on" style={contentHeaderStyle}>
          <h1 style={headingStyle}>사람과 더불어 살아가야하는 세상을 만들고</h1>
          <h2 style={subheadingStyle}>
            함께 나누는 그라피코스 입니다. 현재에 안주하지 않으며 언제나 변화와 차별화, 창의적인 디자인을 향해 도전하고 있습니다.
          </h2>
        </div>
        <div className="content_section scroll_on">
          <h2>그라피코스 설립이념</h2>
          <p>
            <strong>그라피코스 디자인</strong>은 과거와 현재에 안주하지 않으며 언제나 변화와 차별화, 창의적인 디자인을 향해 도전하고 있습니다. 역동적인 디자인과 심플한 기능성으로 사용자의
            편의를 만족시켜드립니다.
          </p>
          <p>
            <strong>그라피코스 디자인</strong>은 웹표준을 따르는 작업 프로세스를 통하여 언제 어디서나 편하게 웹 서비스를 이용하실 수 있습니다.
          </p>
          <p>
            웹 비즈니스 업계에서 업무를 진행하면서 많은 실패와 성공을 경험해 왔습니다. 무엇이 성공의 가장 중요한 요소인가? 이 질문이 머리속에 떠오를 때는 언제나 하나의 대답이
            있었습니다. 신뢰를 기반으로 함께하는 파트너가 되어야 한다는 것입니다. 비즈니스를 함께 디자인 해야한다는 코자인의 철학을 언제나 실천하는 코자인이 되겠습니다.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

