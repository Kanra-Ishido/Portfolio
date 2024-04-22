import React from 'react'
import './Introduction.css'
import img from './Images/Icon.jpg'

const Introduction = () => {
  return (
    <div className='Introduction'>
      <div className='Introduction_Title'>
        <h1>自己紹介</h1>
      </div>
      <div className='Introduction_Main'>
        <div className='Introduction_Main_Icon'>
          <img src={img}></img>
        </div>
        <div className='Introduction_Main_Text'>
          <p>武蔵野大学データサイエンス学部データサイエンス学科3年の石戸莞楽です。</p>
          <p>大学では主にPythonを用いた機械学習・深層学習やWebアプリケーション開発などを学習しております。</p>
          <p>また、所属するゼミでは Unreal Engine 5 と GPTAPI を用いて、自然言語の対話形式だけでバーチャルイベントなどで用意されるバーチャル空間を生成する試みを行なっております。</p>
          <p>さらに、学外活動で学会への参加や、Webアプリケーションの開発大会に参加、参加団体のWebサイトの運営なども行なっております。</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction