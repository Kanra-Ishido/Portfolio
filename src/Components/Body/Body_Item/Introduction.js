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
          <div className='Introduction_Main_Text_Item'>
            <h2>名前</h2>
            <h3>石戸莞楽</h3>
          </div>
          <div className='Introduction_Main_Text_Item'>
            <h2>モットー</h2>
            <h3><span>なせば成る、なさねば成らぬ、何事も、成らぬは人のなさぬなりけり</span></h3>
          </div>
          <div className='Introduction_Main_Text_Item'>
            <h2>所属大学</h2>
            <h3>武蔵野大学　データサイエンス学部　データサイエンス学科3年</h3>
          </div>
          <div className='Introduction_Main_Text_Item'>
            <h2>所属ゼミ</h2>
            <h3>中村ゼミ</h3>
          </div>
          <div className='Introduction_Main_Text_Item'>
            <h2>研究内容</h2>
            <h3>自然言語による生成系AIとの対話形式で行うバーチャル空間自動生成に関する研究</h3>
          </div>
          <div className='Introduction_Main_Text_Item'>
            <h2>課外活動</h2>
            <h3><span>学会</span>，<span>Webアプリケーション開発大会</span>，学生団体のWebサイト運営 etc</h3>
          </div>
          <div className='Introduction_Main_Text_Item'>
            <h2>趣味</h2>
            <h3>ドライブ，銭湯巡り，Webアプリケーション開発 etc</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction