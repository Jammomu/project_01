import React, { useState } from 'react';

export function MainNav({setMainsection}) {
  const [isVisionHovered, setIsVisionHovered] = useState(false);

  // 회사비전 항목에 마우스 오버 시 상태 업데이트
  const handleVisionMouseEnter = () => {
    setIsVisionHovered(true);
  };

  // 회사비전 항목에서 마우스가 떠날 때 상태 업데이트
  const handleVisionMouseLeave = () => {
    setIsVisionHovered(false);
  };

  // 회사비전 스타일 항목에 마우스 오버 시 상태 유지
  const handleSubItemsMouseEnter = () => {
    setIsVisionHovered(true);
  };

  // 회사비전 스타일 항목에서 마우스가 떠날 때 상태 업데이트
  const handleSubItemsMouseLeave = () => {
    setIsVisionHovered(false);
  };

  return (
    <div className="main-nav">
      <ul className="main-nav-index">
        <a href="./sub-page1-1-1.html" className="main-nav-title">
          <br />회사소개
        </a>
        <ul style={{ margin: 0, padding: 0 }}>
          <li className="main-nav-box this-page nav-main">
            <a href="./sub-page1-1-1.html" onClick={(event)=>{event.preventDefault(); setMainsection(1)} }>회사소개 +</a>
          </li>
          <li className="main-nav-box">
            <a id="this-page" style={{ color: '#676ba7' }} href="./sub-page1-1-1.html" onClick={(event)=>{event.preventDefault(); setMainsection(1)} }>회사소개 스타일1</a>
          </li>
          <li className="main-nav-box">
            <a href="./sub-page1-1-2.html" onClick={(event)=>{event.preventDefault(); setMainsection(2)} }>회사소개 스타일2</a>
          </li>
          <li className="main-nav-box">
            <a href="./sub-page1-1-3.html" onClick={(event)=>{event.preventDefault(); setMainsection(3)} }>회사소개 스타일3</a>
          </li>
        </ul>
        <ul 
          id="nav-second" 
          style={{ margin: 0, padding: 0 }}
          onMouseEnter={handleVisionMouseEnter}
          onMouseLeave={handleVisionMouseLeave}
        >
          <li 
            className="main-nav-box nav-main not-select" 
            onMouseEnter={handleVisionMouseEnter}
            onMouseLeave={handleVisionMouseLeave}
          >
            <a href="./sub-page1-2-1.html" onClick={(event)=>{event.preventDefault(); setMainsection(4)} }>회사비전 +</a>
          </li>
          <li 
            className={`main-nav-box ${isVisionHovered ? '' : 'hidden'}`}
            onMouseEnter={handleSubItemsMouseEnter}
            onMouseLeave={handleSubItemsMouseLeave}
          >
            <a href="./sub-page1-2-1.html" onClick={(event)=>{event.preventDefault(); setMainsection(4)} }>회사비전 스타일1</a>
          </li>
          <li 
            className={`main-nav-box ${isVisionHovered ? '' : 'hidden'}`}
            onMouseEnter={handleSubItemsMouseEnter}
            onMouseLeave={handleSubItemsMouseLeave}
          >
            <a href="./sub-page1-2-2.html"onClick={(event)=>{event.preventDefault(); setMainsection(5)} }>회사비전 스타일2</a>
          </li>
        </ul>
        <li className="main-nav-box nav-main not-select">
          <a href="#">회사연혁</a>
        </li>
        <li className="main-nav-box nav-main not-select">
          <a href="#">조직소개</a>
        </li>
        <li className="main-nav-box nav-main not-select">
          <a href="#">오시는길</a>
        </li>
      </ul>
    </div>
  );
}