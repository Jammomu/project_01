import '../styles/subPage2_2_1.css';

export function subPage2_2_1() {

  return (
    <>
      <div id="productSurvice">
        {/* <!-- 왼쪽 메뉴 --> */}
        <div id="main-content">
          <div className="main-nav">
            <ul className="main-nav-index">
              <a href="./productPage.html" className="main-nav-title"><br />제품서비스</a>
              <ul style={{margin: 0, padding: 0}}>
                <li className="main-nav-box nav-main not-select"><a href="./productPage.html">서비스소개 +</a></li>
                <li className="main-nav-box hidden"><a href="./productPage.html">서비스소개 스타일1</a></li>
                <li className="main-nav-box hidden"><a href="./productPage_1_2.html">서비스소개 스타일2</a></li>
                <li className="main-nav-box hidden"><a href="#">서비스소개 스타일3</a></li>
              </ul>
              <ul id="nav-second" style={{margin: 0, padding: 0}}>
                <li className="main-nav-box nav-main this-page"><a href="./productPage_2_1.html">제품안내 +</a></li>
                <li className="main-nav-box"><a href="./productPage_2_1.html" id="this-page" style={{color: '#676ba7'}}>제품안내 스타일1</a></li>
              </ul>
            </ul>
          </div>
        </div>

        {/* <!-- 컨텐츠존 --> */}
        <div id="contentZone">
          {/* <!-- 컨텐츠 네비 --> */}
          <div id="content_nav">
            <ul>
              <li><a href="#"><img src="img/home.png" alt="" /></a></li>
              <li><a href="./productPage.html"><img src="img/arrow.png" alt="" /> 제품서비스</a></li>
              <li><a href="./productPage.html"><img src="img/arrow.png" alt="" /> 제품안내</a></li>
              <li><a href="./productPage_1_2.html"><img src="img/arrow.png" alt="" /> 제품안내 스타일2</a></li>
            </ul>
          </div>
          {/* <!-- 컨텐츠 타이틀 --> */}
          <div id="content_title"><h2>제품안내 스타일1</h2></div>
          <div id="content_menu">
            {/* <!-- 컨텐츠 메뉴1 --> */}
            <div className="content_paragraph">
              {/* <!-- 컨텐츠 왼쪽 텍스트 --> */}
              <div className="content_menu_txt txt_style3">
                <div className="txt_overline"></div>
                <h3>갤럭시 Z 폴드3 5G</h3>
                <p>갤럭시 폴드 사상 가장 얇고 휴대성이 뛰어난 동시에, 외부와 내부 모두에 풀스크린 디스플레이를 탑재했습니다. 접으면 일반 스마트폰처럼 한 손에 쏙 들어오지만 펼치면 광활한 시야가 당신의 것이 되죠.</p>
                <div>
                  <button className="btn01">제품스팩</button>
                  <button className="btn01">카달로그</button>
                </div>
              </div>
              {/* <!-- 컨텐츠 오른쪽 사진 --> */}
              <img src="./img/picture_250x250.png" alt="" />
            </div>
          </div>
          {/* <!-- 중앙 상자들 --> */}
          <div className="content_whiteBox">
            <img src="./img/home.png" alt="" />
              <div className="txt_overline2"></div>
              <h5>갤럭시 Z폴드3 블랙</h5>
          </div>
        </div>
      </div>
    </>
  );
}