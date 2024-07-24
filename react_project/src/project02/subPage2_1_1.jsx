import '../styles/subPage2_1_1.css';
import { subPage2_1_2 } from './subPage2_1_2';
import { subPage2_2_1 } from './subPage2_2_1';
import { useEffect } from 'react';

export function subPage2_1_1() {
  useEffect(()=>{
    const items = document.querySelectorAll('.content_paragraph');
    const observerOptions = {
      threshold: 0.1
    }
    const observerCallback = (entries, observer)=>{
      entries.forEach(entry => {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    items.forEach(item => {
      observer.observe(item);
    });

    return ()=>{
      items.forEach(item => {
        observer.unobserve(item);
      });
    }
  }, []);

  return (
    <>
      <div id="productSurvice">
        {/* <!-- 왼쪽 메뉴 --> */}
        <div id="main-content">
          <div className="main-nav" style={{zIndex: 1}}>
            <ul className="main-nav-index">
              <a href="#" className="main-nav-title"><br />제품서비스</a>
              <ul style={{margin: 0, padding: 0}}>
                <li className="main-nav-box this-page nav-main"><a href="#">서비스소개 +</a></li>
                <li className="main-nav-box"><a id="this-page" href="#" style={{color: '#676ba7'}}>서비스소개 스타일1</a></li>
                <li className="main-nav-box"><a href={subPage2_1_2}>서비스소개 스타일2</a></li>
                <li className="main-nav-box"><a href="#">서비스소개 스타일3</a></li>
              </ul>
              <ul id="nav-second" style={{margin: 0, padding: 0}}>
                <li className="main-nav-box nav-main not-select"><a href={subPage2_2_1}>제품안내 +</a></li>
                <li className="main-nav-box hidden"><a href={subPage2_2_1}>제품안내 스타일1</a></li>
              </ul>
            </ul>
          </div>
        </div>

        {/* <!-- 컨텐츠존 --> */}
        <div id="contentZone">
          {/* <!-- 컨텐츠 네비 --> */}
          <div id="content_nav">
            <ul>
              <li><a href="./index.html"><img src="img/home.png" alt="" /></a></li>
              <li><a href="./productPage.html"><img src="img/arrow.png" alt="" /> 제품서비스</a></li>
              <li><a href="./productPage.html"><img src="img/arrow.png" alt="" /> 서비스소개</a></li>
              <li><a href="./productPage.html"><img src="img/arrow.png" alt="" /> 서비스소개 스타일1</a></li>
            </ul>
          </div>
          {/* <!-- 컨텐츠 타이틀 --> */}
          <div id="content_title"><h2>서비스소개 스타일1</h2></div>
          <div id="content_menu">

            {/* 여기에 .content_paragraph 클래스를 가진 요소들을 추가하세요 */}
            <p className="content_paragraph">Paragraph 1</p>
            <p className="content_paragraph">Paragraph 2</p>
            <p className="content_paragraph">Paragraph 3</p>

            {/* <!-- 컨텐츠 메뉴1 --> */}
            <div className="content_paragraph">
              {/* <!-- 컨텐츠 왼쪽 상자 --> */}
              <div className="whiteBox">
                <a href="#">
                  <div className="boxInfo">
                    <h6>영국 SILVERTOWN</h6>
                    <p>2032.08.28</p>
                  </div>
                </a>
              </div>
              {/* <!-- 컨텐츠 우측 텍스트 --> */}
              <div className="content_menu_txt">
                <h3>ECO Business</h3>
                <p>Resource Circularity를 기반으로 한 3R (Reduce : 소각ㆍ매립, Reuse : 수처리, Recycle : Wasted Material) 중심의 Waste to Resource 사업을 실행하는 종합 환경 Platform으로 성장을 지속하고 있습니다.</p>
                <ul>
                  <li>친환경 관리솔루션 E/C분야 1위</li>
                  <li>투자개발 12,000억원</li>
                </ul>
              </div>
            </div>

            {/* <!-- 컨텐츠 메뉴2 --> */}
            <div className="content_paragraph">
              {/* <!-- 컨텐츠 왼쪽 상자 --> */}
              <div className="whiteBox">
                <a href="#">
                  <div className="boxInfo">
                    <h6>싱가포르 JAC</h6>
                    <p>2032.08.28</p>
                  </div>
                </a>
              </div>
              {/* <!-- 컨텐츠 우측 텍스트 --> */}
              <div className="content_menu_txt">
                <h3>환경기초시설</h3>
                <p>각은 폐기물의 부피를 감소시키고, 유해성을 안정화시키는 가장 직접적인 방법입니다. 소각을 통해 버려지는 폐기물을 저감하고, 환경을 위한 에너지로 전환하고 있습니다. 지역 주민에게 냉난방과 전기를 공급하고 있으며, 엄격한 오염물질의 관리를 통해 지역 사회의 신뢰성을 구축하고 있습니다.</p>
                <ul>
                  <li>상세보기</li>
                </ul>
              </div>
            </div>

            {/* <!-- 컨텐츠 메뉴3 --> */}
            <div className="content_paragraph">
              {/* <!-- 컨텐츠 왼쪽 상자 --> */}
              <div className="whiteBox">
                <a href="#">
                  <div className="boxInfo">
                    <h6>인도네시아 L프로젝트</h6>
                    <p>2032.08.28</p>
                  </div>
                </a>
              </div>
              {/* <!-- 컨텐츠 우측 텍스트 --> */}
              <div className="content_menu_txt">
                <h3>EMC 사업영역</h3>
                <p>시설에 대한 장기적인 관리 관점에서 잠재적인 영향성을 차단하고, 미래 세대를 위해 지역 환경을 안전하게 보존하고 있습니다. 매립 폐기물의 적정 처리와 관리 시스템을 통해 폐기물의 친환경적 자원 순환을 선도하겠습니다.</p>
                <ul>
                  <li>친환경 관리솔루션 E/C분야 1위</li>
                  <li>투자개발 12,000억원</li>
                </ul>
              </div>
            </div>

            {/* <!-- 컨텐츠 메뉴4 --> */}
            <div className="content_paragraph">
              {/* <!-- 컨텐츠 왼쪽 상자 --> */}
              <div className="whiteBox">
                <a href="#">
                  <div className="boxInfo">
                    <h6>영월 연료전지 1단계</h6>
                    <p>2032.08.28</p>
                  </div>
                </a>
              </div>
              {/* <!-- 컨텐츠 우측 텍스트 --> */}
              <div className="content_menu_txt">
                <h3>OTO Platform</h3>
                <p>업전략과 연계된 R&D 전략을 수립하고 친환경 기술/정책/시장 동향을 분석하여 R&D 포트폴리오를 구축하고 있으며, 요소기술에 대한 기술/시장 분석을 토대로 기술로드맵을 수립하고 있습니다.</p>
                <ul>
                  <li>SV11 Power Tower 1 Project</li>
                  <li>2020.12 ~ 2021.12</li>
                  <li>규모 - 4.0MW</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}