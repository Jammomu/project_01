import { useEffect } from 'react';
import './style/MainSection4.css'
import box from './img/icon-box.png'
import people from './img/icon-peopleplus.png'
import internet from './img/icon-internet.png'
import down from './img/icon-down.png'
import bulb from './img/icon-bulb.png'

export function MainSection4({ exposurePercentage = 100, loop = true }){
    useEffect(() => {
        const handleScroll = () => {
        const counters = document.querySelectorAll('.scroll_on');
        
        counters.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const winHeight = window.innerHeight;
        const contentHeight = rect.bottom - rect.top;
        
        if (
        rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom>= (contentHeight * exposurePercentage
          / 100)
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
        


    return(
<div className="main-section4">
<div className="content">
    <div className="content_header scroll_on">
        <h1 style={{marginBottom:'10px', fontWeight:'bold' ,fontSize:'2em'}}>세상을 바꾸는 기술중심기업</h1>
    </div>
    <div className="content_header-2 scroll_on">
        <h2
            style={{fontSize:'2em',boxShadow:' inset 0 -0.4em 0 0 #f1f1f1' ,width:'710px' ,color:'rgba(0, 0, 0, .5)'}}>
            다양한 형태의 정보에 대한 기술을 연구하는 기업
        </h2>
    </div>
    <div className="content_section1">
        <div className="content-first scroll_on">
            <div className="content-first-text">
                <img style={{marginTop: '20px'}} src={box}alt=""/>
                <h3 style={{marginTop: '30px'}}>기술중심</h3>
                <p style={{marginTop: '15px'}}>미래지향적 기술중심기업
                    기술기업</p>
            </div>
        </div>
        <div className="content-second scroll_on">
            <div className="content-second-text">
                <img style={{marginTop:'20px'}} src={people} alt=""/>
                <h3 style={{marginTop: '30px'}}>인재중심</h3>
                <p style={{marginTop:' 15px'}}>미션·비전·열정을 인재 양성
                    인재중심
                </p>
            </div>
        </div>
        <div className="content-third scroll_on">
            <div className="content-third-text">
                <img style={{marginTop: '20px'}} src={internet} alt=""/>
                <h3 style={{marginTop: '30px'}}>글로벌경영</h3>
                <p style={{marginTop: '15px'}}>세계를향해 도약하는 글로벌경영
                    글로벌기업
                </p>
            </div>
        </div>
        <div id="down"className='scroll_on'><img src={down} alt=""/></div>
    </div>
    <div className="content-fourth scroll_on">
        <div id="content-fourth-box">
            <div id="content-fourth-text">
                <img src={bulb} alt=""/>
                <h1 style={{color: 'rgba(0, 0, 0, .5)'}}>더불어 함께하는</h1>
                <h1><strong>패스파인더기업</strong></h1>
            </div>
        </div>
    </div>
    <div className="content-fiveth">
        <div className="content-fiveth-first scroll_on">
            <div className="fiveth-left-text">
                <h2>
                    <border style={{borderTop: '3px solid'}}>당</border>신의 생각에</h2>
                    <h2><strong>도전하는 기업가치</strong></h2>
            </div>
            <div className="fiveth-right-text">
                <p>그라피코스 디자인은 과거와 현재에 안주하지 않으며 언제나 변화와 차별화, 창의적인 디자인을 향해 도전하고 있습니다. 역동적인 디자인과
                    심플한 기능성으로 사용자의 편의를 만족시켜드립니다.그라피코스 디자인은 웹표준을 따르는 작업 프로세스를 통하여 언제 어디서나 편하게 웹
                    서비스를 이용하실 수 있습니다.</p>
                <p>웹 비즈니스 업계에서 업무를 진행하면서 많은 실패와 성공을 경험해 왔습니다. 무엇이 성공의 가장 중요한 요소인가? 이 질문이 머리속에 떠오를 때는 언제나
                    하나의 대답이 있었습니다. 신뢰를 기반으로 함께하는 파트너가 되어야 한다는 것입니다. 비즈니스를 함께 디자인 해야한다는 코자인의 철학을 언제나 실천하는
                    코자인이 되겠습니다.</p>
            </div>
        </div>
        <div className="content-fiveth-second scroll_on">
            <div className="fiveth-left-text">
                <h2>
                    <border style={{borderTop: '3px solid'}}>생</border>각에 공감하며</h2>
                    <h2><strong>상생하는 기업가치</strong></h2>
            </div>
            <div className="fiveth-right-text">
                <p>과거와 현재에 안주하지 않으며 언제나 변화와 차별화, 창의적인 디자인을 향해 도전하고 있습니다. 역동적인 디자인과 심플한 기능성으로 사용자의 편의를
                    만족시켜드립니다.그라피코스 디자인은 웹표준을 따르는 작업 프로세스를 통하여 언제 어디서나 편하게 웹 서비스를 이용하실 수 있습니다.</p>
                <p>많은 실패와 성공을 경험해 왔습니다. 무엇이 성공의 가장 중요한 요소인가? 이 질문이 머리속에 떠오를 때는 언제나 하나의 대답이 있었습니다. 신뢰를
                    기반으로 함께하는 파트너가 되어야 한다는 것입니다. 비즈니스를 함께 디자인 해야한다는 코자인의 철학을 언제나 실천하는 코자인이 되겠습니다.</p>
            </div>
        </div>
        <div className="content-fiveth-third scroll_on">
            <div className="fiveth-left-text">
                <h2>
                    <border style={{borderTop: '3px solid'}}>당</border>신의 생각을</h2>
                    <h2><strong>존중하는 기업가치</strong></h2>
            </div>
            <div className="fiveth-right-text">
                <p>그라피코스 디자인은 과거와 현재에 안주하지 않으며 언제나 변화와 차별화, 창의적인 디자인을 향해 도전하고 있습니다. 역동적인 디자인과 심플한 기능성으로
                    사용자의 편의를 만족시켜드립니다.그라피코스 디자인은 웹표준을 따르는 작업 프로세스를 통하여 언제 어디서나 편하게 웹 서비스를 이용하실 수 있습니다.
                </p>
                <p>신뢰를 기반으로 함께하는 파트너가 되어야 한다는 것입니다. 비즈니스를 함께 디자인 해야한다는 코자인의 철학을 언제나 실천하는 코자인이 되겠습니다.

                </p>
            </div>
        </div>

    </div>
</div>
</div>
);
};
