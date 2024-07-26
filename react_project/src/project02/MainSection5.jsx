import { useEffect } from 'react';
import './style/MainSection5.css';
import down from './img/icon-down.png'
import bulb from './img/icon-bulb.png'
import blackdown from './img/icon-blackdown.png'
export function MainSection5 ({ exposurePercentage = 100, loop = true })  {


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


  return (
    <div class="main-section5">
    <div class="white-section">
        <h1 style={{fontSize:'50px'}}>도약의 2021</h1>
        <h4>그라피코스 <strong>HISTORY</strong></h4>
    </div>

    <div class="main-content-first scroll_on">
        <div class="main-content-first-head">
            <div class="main-first-icon main-icon-box scroll_on">
                <img class='main-content-icon scroll_on' src="#" alt=" "/>
                <h2>
                    <span>그린에너지</span>
                    <strong>지속사업</strong>
                </h2>
            </div>

            <div class="main-second-icon main-icon-box scroll_on">
                <img class='main-content-icon' src="#" alt=" "/>
                <h2>
                    <span>미래천연광물</span>
                    <strong>개발사업</strong>
                </h2>
            </div>
            <div class="main-third-icon main-icon-box scroll_on">
                <img class='main-content-icon' src="#" alt=" "/>
                <h2>
                    <span>친환경에너지</span>
                    <strong>미래사업</strong>
                </h2>
            </div>
        </div>
        <div id="down">
            <img style={{position: 'relative', left: '47%', top: '50px'}} src={down} alt=""/>
        </div>

        <div class="main-content-first-body">
            <h2 style={{color: 'rgba(0, 0, 0, .5)' ,fontSize: '35px'}}><img src={bulb}
                    alt=""/> 더불어 함께하는 <strong style={{color:'black'}}> 패스파인더기업</strong></h2>
        </div>

    </div>
    <div class="main-content-second">
        <div class='main-content-second-head'>
            <div class="blackSquare first-Square scroll_on">
                <div class="text-box">
                    <h4 style={{fontSize: '1.2rem', borderBottom: '1px solid white', paddingBottom: '5px'}}>
                        인도네시아 L프로젝트</h4>
                    <p>2020.08.28</p>
                </div>
            </div>
            <div class="blackSquare second-Square scroll_on">
                <div class="text-box ">
                    <h4 style={{fontSize: '1.2rem' ,borderBottom: '1px solid white', paddingBottom: '5px'}}>
                        쿠알라룸프 L프로젝트</h4>
                    <p>2020.08.28</p>
                </div>
            </div>
            <div class="blackSquare third-Square scroll_on">
                <div class="text-box ">
                    <h4 style={{fontSize: '1.2rem', borderBottom:'1px solid white' ,paddingBottom: '5px'}}>
                        베트남 호치민</h4>
                    <p>2021.08.28</p>
                </div>
            </div>

        </div>


        <div class="main-content-second-body">
            <div class="second-body-left">
                <div class="body-left-wrap">
                    <h1>
                        <border style={{borderTop: '1px solid black'}}>그</border>라피코스
                    </h1>
                    <h1><strong>기업정보</strong></h1>
                    <a href="#">공시정보<img src={blackdown}alt=""/></a>
                </div>

            </div>
            <style>
            </style>
            <div class="second-body-right">
                <table>
                    <tr>
                        <th>회사명</th>
                        <td>그래피코스 스튜디오</td>
                    </tr>
                    <tr>
                        <th>대표이사</th>
                        <td>신영빈</td>
                    </tr>
                    <tr>
                        <th>주소</th>
                        <td>서울시 노원구 공릉2동 117 삼육대학교 창업보육센터 5007</td>
                    </tr>
                    <tr>
                        <th>연락처</th>
                        <td>대표번호 - 02-6924-3114 , FAX - 070-1548-5184</td>
                    </tr>
                    <tr>
                        <th>재무사항</th>
                        <td>매출액: 1조 2,826억원</td>
                    </tr>
                    <tr>
                        <th>영업이익</th>
                        <td>1,598억원 (2020년 K-IFRS 연결 기준)</td>
                    </tr>
                </table>
            </div>
            
        </div>
    </div>
    <div class="main-content-second">
        <div class='main-content-second-head'>
            <div class="blackSquare first-Square scroll_on">
                <div class="text-box">
                    <h4 style={{fontSize:'1.2rem' ,borderBottom: '1px solid white', paddingBottom: '5px'}}>
                        아르헨티나 L프로젝트</h4>
                    <p>2020.08.28</p>
                </div>
            </div>
            <div class="blackSquare second-Square scroll_on">
                <div class="text-box ">
                    <h4 style={{fontSize: '1.2rem', borderBottom: '1px solid white', paddingBottom: '5px'}}>
                        수단 K프로젝트</h4>
                    <p>2020.08.28</p>
                </div>
            </div>
            <div class="blackSquare third-Square scroll_on">
                <div class="text-box ">
                    <h4 style={{fontSize: '1.2rem', borderBottom: '1px solid white', paddingBottom: '5px'}}>
                        러시아 모스크바</h4>
                    <p>2021.08.28</p>
                </div>
            </div>

        </div>



        <div class="main-content-second-body">
            <div class="second-body-left">
                <div class="body-left-wrap">
                    <h1>
                        <border style={{borderTop: '1px solid black'}}>그</border>라피코스
                    </h1>
                    <h1><strong>기업정보</strong></h1>
                    <a href="#">공시정보<img src={blackdown} alt=""/></a>
                </div>

            </div>

            <div class="second-body-right">
                <table>
                    <tr>
                        <th>회사명</th>
                        <td>그래피코스 스튜디오</td>
                    </tr>
                    <tr>
                        <th>대표이사</th>
                        <td>신영빈</td>
                    </tr>
                    <tr>
                        <th>주소</th>
                        <td>서울시 노원구 공릉2동 117 삼육대학교 창업보육센터 5007</td>
                    </tr>
                    <tr>
                        <th>연락처</th>
                        <td>대표번호 - 02-6924-3114 , FAX - 070-1548-5184</td>
                    </tr>
                    <tr>
                        <th>재무사항</th>
                        <td>매출액: 1조 2,826억원</td>
                    </tr>
                    <tr>
                        <th>영업이익</th>
                        <td>1,598억원 (2020년 K-IFRS 연결 기준)</td>
                    </tr>
                </table>
            </div>
            
        </div>
    </div>


</div>  );
};

