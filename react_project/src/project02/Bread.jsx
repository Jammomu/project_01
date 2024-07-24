import React from 'react';
import Homeimg from './img/home.png'
import arrow from './img/arrow.png'

export function Bread (){
  return (
    <div className="breadcrumb">
      <ul className="breadcrumb_content">
        <li className="breadcrumb_item home">
          <a href="https://mwpdemo12348.mycafe24.com/">
            <img id="home" src="./img/home.png" alt="" />
          </a>
        </li>
        <li className="breadcrumb_item">
          <a href="#">
            <img src={Homeimg} alt="" /> 회사소개
          </a>
        </li>
        <li className="breadcrumb_item">
          <a href="#">
            <img src={arrow} alt="" /> 회사소개
          </a>
        </li>
        <li className="breadcrumb_item">
          <img src={arrow} alt="" /> 회사소개 스타일1
        </li>
      </ul>
    </div>
  );
};

