import '../styles/subPage2_1_1.css';
import { subPage2_1_1 } from './subPage2_1_1';
import { subPage2_2_1 } from './subPage2_2_1';

export function subPage2_1_2() {

  return (
    <>
      <div id="productSurvice">
        {/* <!-- 왼쪽 메뉴 --> */}
        <div id="main-content">
          <div className="main-nav">
            <ul className="main-nav-index">
              <a href="#" className="main-nav-title"><br />제품서비스</a>
              <ul style="margin: 0; padding: 0;">
                <li className="main-nav-box this-page nav-main"><a href={subPage2_1_1}>서비스소개 +</a></li>
                <li className="main-nav-box"><a href={subPage2_1_1}>서비스소개 스타일1</a></li>
                <li className="main-nav-box"><a id="this-page" style="color: #676ba7;" href="#">서비스소개 스타일2</a></li>
                <li className="main-nav-box"><a href="#">서비스소개 스타일3</a></li>
              </ul>
              <ul id="nav-second" style="margin: 0; padding: 0;">
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
              <li><a href="#"><img src="img/home.png" alt="" /></a></li>
              <li><a href={subPage2_1_1}><img src="img/arrow.png" alt="" /> 제품서비스</a></li>
              <li><a href={subPage2_1_1}><img src="img/arrow.png" alt="" /> 서비스소개</a></li>
              <li><a href="#"><img src="img/arrow.png" alt="" /> 서비스소개 스타일2</a></li>
            </ul>
          </div>
          {/* <!-- 컨텐츠 타이틀 --> */}
          <div id="content_title"><h2>서비스소개 스타일2</h2></div>
          <div id="content_menu">

            {/* <!-- 컨텐츠 메뉴1 --> */}
            <div className="content_paragraph">
              {/* <!-- 컨텐츠 왼쪽 사진 --> */}
              <img src="img/home.png" alt="" />
                {/* <!-- 컨텐츠 우측 텍스트 --> */}
                <div className="content_menu_txt txt_style2">
                  <h3>업무인테리어</h3>
                  <p>국내 최초의 인텔리전트 빌딩인 연세재단 빌딩을 건설하면서 오피스 시장의 강자로 떠오른 대우건설은 산업은행 본점과 강남역의 랜드마크인 서초 교보타워 등을 건설하며 명성을 쌓았습니다. 또한 국내 최대 규모 오피스인 옛 대우센터 빌딩을 리모델링, 최첨단 시설을 갖춘 서울스퀘어로 재탄생시켰습니다.</p>
                  <div>
                    <button className="btn01">상세보기</button>
                    <button className="btn01">브로슈</button>
                  </div>
                </div>
            </div>

            {/* <!-- 컨텐츠 메뉴2 --> */}
            <div className="content_paragraph">
              {/* <!-- 컨텐츠 왼쪽 사진 --> */}
              <img src="img/home.png" alt="" />
                {/* <!-- 컨텐츠 우측 텍스트 --> */}
                <div className="content_menu_txt txt_style2">
                  <h3>업무인테리어</h3>
                  <p>국내 최초의 인텔리전트 빌딩인 연세재단 빌딩을 건설하면서 오피스 시장의 강자로 떠오른 대우건설은 산업은행 본점과 강남역의 랜드마크인 서초 교보타워 등을 건설하며 명성을 쌓았습니다. 또한 국내 최대 규모 오피스인 옛 대우센터 빌딩을 리모델링, 최첨단 시설을 갖춘 서울스퀘어로 재탄생시켰습니다.</p>
                  <div>
                    <button className="btn01">상세보기</button>
                    <button className="btn01">브로슈</button>
                  </div>
                </div>
            </div>

            {/* <!-- 컨텐츠 메뉴3 --> */}
            <div className="content_paragraph">
              {/* <!-- 컨텐츠 왼쪽 사진 --> */}
              <img src="img/home.png" alt="" />
                {/* <!-- 컨텐츠 우측 텍스트 --> */}
                <div className="content_menu_txt txt_style2">
                  <h3>업무인테리어</h3>
                  <p>국내 최초의 인텔리전트 빌딩인 연세재단 빌딩을 건설하면서 오피스 시장의 강자로 떠오른 대우건설은 산업은행 본점과 강남역의 랜드마크인 서초 교보타워 등을 건설하며 명성을 쌓았습니다. 또한 국내 최대 규모 오피스인 옛 대우센터 빌딩을 리모델링, 최첨단 시설을 갖춘 서울스퀘어로 재탄생시켰습니다.</p>
                  <div>
                    <button className="btn01">상세보기</button>
                    <button className="btn01">브로슈</button>
                  </div>
                </div>
            </div>

            {/* <!-- 컨텐츠 메뉴4 --> */}
            <div className="content_paragraph">
              {/* <!-- 컨텐츠 왼쪽 사진 --> */}
              <img src="img/home.png" alt="" />
                {/* <!-- 컨텐츠 우측 텍스트 --> */}
                <div className="content_menu_txt txt_style2">
                  <h3>업무인테리어</h3>
                  <p>국내 최초의 인텔리전트 빌딩인 연세재단 빌딩을 건설하면서 오피스 시장의 강자로 떠오른 대우건설은 산업은행 본점과 강남역의 랜드마크인 서초 교보타워 등을 건설하며 명성을 쌓았습니다. 또한 국내 최대 규모 오피스인 옛 대우센터 빌딩을 리모델링, 최첨단 시설을 갖춘 서울스퀘어로 재탄생시켰습니다.</p>
                  <div>
                    <button className="btn01">상세보기</button>
                    <button className="btn01">브로슈</button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}