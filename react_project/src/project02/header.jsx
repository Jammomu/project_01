import logoWhite from './img/logo_white.png';
import { MyComponent } from './img/Arrowdown';
export function Header({setMainsection}) {
  return (
    <>
      <header>
        <nav>
          <div className="top">
            <ul className="top-menu">
              <li><a href="#">연구센터</a></li>
              <li><a href="#">소식마당</a></li>
              <li><a href="#">로그인</a></li>
            </ul>
          </div>

          <div className="head">
            <div className="logo">
              <a href="./index.html">
                <img src={logoWhite} alt="logo" />
              </a>
            </div>

            <div className="head-menu">
            <ul class="head-main-menu">
                            <li>
                                <a href="./index.html"> 메인페이지 </a>
                            </li>
                            <li>
                                <a href="./sub-page1-1-1.html"   onClick={(event)=>{event.preventDefault(); setMainsection(1)} }
                                > 회사소개 <MyComponent/> </a>
                                <ul class='head-sub-menu'>
                                    <li><a href="./sub-page1-1-1.html"   onClick={(event)=>{event.preventDefault(); setMainsection(1)} }
                                    > 회사소개 </a>
                                        <ul class='head-sub-menu-sub'>
                                            <li><a href="./sub-page1-1-1.html"   onClick={(event)=>{event.preventDefault(); setMainsection(1)} }
                                            > 회사소개 스타일1 </a></li>
                                            <li><a href="./sub-page1-1-2.html"   onClick={(event)=>{event.preventDefault(); setMainsection(2)} }
                                            > 회사소개 스타일2 </a></li>
                                            <li><a href="./sub-page1-1-3.html"   onClick={(event)=>{event.preventDefault(); setMainsection(3)} }
                                            > 회사소개 스타일3 </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="./sub-page1-2-1.html"   onClick={(event)=>{event.preventDefault(); setMainsection(4)} }
                                    > 회사비전  </a>
                                        <ul class="head-sub-menu-sub">
                                            <li><a href="./sub-page1-2-1.html"   onClick={(event)=>{event.preventDefault(); setMainsection(4)} }
                                            > 회사비전 스타일1 </a></li>
                                            <li><a href="#"   onClick={(event)=>{event.preventDefault(); setMainsection(5)} }
                                            > 회사비전 스타일2 </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#"> 회사연혁 </a></li>
                                    <li><a href="#"> 조직소개 </a></li>
                                    <li><a href="#"> 오시는 길 </a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="./productPage.html"> 제품서비스<MyComponent/></a>
                                <ul class="head-sub-menu">
                                    <li><a href="./productPage.html"> 서비스소개</a>
                                        <ul class="head-sub-menu-sub">
                                            <li><a href="./productPage.html"> 서비스소개 스타일1 </a></li>
                                            <li><a href="./productPage_1_2.html"> 서비스소개 스타일2 </a></li>
                                            <li><a href="#"> 서비스소개 스타일3 </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="./productPage_2_1.html"> 제품안내</a>
                                        <ul class="head-sub-menu-sub">
                                            <li><a href="#"> 제품안내 스타일1 </a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="./gallery.html"> 갤러리<MyComponent/></a>
                                <ul class="head-sub-menu">
                                    <li><a href="./gallery.html"> 갤러리 스타일1</a></li>
                                    <li><a href="./gallery.html"> 갤러리 스타일2</a></li>
                                    <li><a href="./gallery.html"> 갤러리 스타일3</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="./newsPage_11.html"> 뉴스센터<MyComponent/></a>
                                <ul class="head-sub-menu">
                                    <li><a href="./newsPage_11.html"> 고객센터</a></li>
                                    <li><a href="#"> 미디어</a></li>
                                    <li><a href="#"> 자주묻는 질문</a></li>
                                    <li><a href="#"> Contact Us</a></li>
                                </ul>
                            </li>
                        </ul>

              <ul className="icon">
                <li>
                  <a id="search" href="#">
                    <img src="https://mwpdemo12348.mycafe24.com/wp-content/themes/ktheme_biz_fabric/images/icon_search.svg" alt="" />
                    <img src="https://mwpdemo12348.mycafe24.com/wp-content/themes/ktheme_biz_fabric/images/icon_search_black.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="https://mwpdemo12348.mycafe24.com/wp-content/themes/ktheme_biz_fabric/images/icon_full_menu.svg" alt="" />
                    <img src="https://mwpdemo12348.mycafe24.com/wp-content/themes/ktheme_biz_fabric/images/icon_full_menu_black.svg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="head-search">
          <input className="head-search-bar" type="text" name="s" placeholder="검색하기" />
        </div>

        <div className="head-toggle-menu"></div>
      </header>

      <div className="title-page">
        <div id="main-title-area">
          <h1 id="main-title1" className="main-title">
            Electronic Data Research Center
            <span style={{ borderTop: '3px solid white' }}>er</span>
          </h1>
          <h3 id="main-title2" className="main-title">
            EDRC는 대한민국의 데이터 산업의 기틀을 마련하기 위한 기틀을 마련합니다
          </h3>
        </div>
      </div>


    </>
  );
}