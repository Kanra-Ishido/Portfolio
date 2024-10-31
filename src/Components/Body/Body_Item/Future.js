import React from 'react'
import './Future.css'
import img from './Images/Future_Img.jpg'

const Future = () => {
  return (
    <div className='Future'>
      <div className='Future_Title'>
        <h1>目標</h1>
      </div>
      <div className='Future_Main'>
        <div className='Future_Main_Items'>
          <div className='Future_Main_Items_Appeal'>
            <h1>プロダクトマネージャー</h1>
          </div>
          <div className='Future_Main_Items_Text'>
            <h3>理由</h3>
            <ul>
              <li>
                <h4><span>問題</span>に対して<span>自分でアイデア</span>を創出して<span>解決</span>を試みることが好き</h4>
              </li>
              <li>
                <h4>一つの目標に向かって、<span>仲間</span>と協力しながら<span>試行錯誤</span>することが好き</h4>
              </li>
              <li>
                <h4><span>IT技術</span>を駆使して、<span>自分のアイデア</span>を具体的な<span>システムとして生み出す</span>ことが得意</h4>
              </li>
            </ul>
          </div>
          <div className='Future_Main_Items_Text'>
            <h3>キッカケ</h3>
            <ul>
              <li>
                <h4><span>学会</span>や<span>Webアプリケーション開発大会</span>といった活動を通じて、社会問題や社会課題を<span>自分のアイデアで解決していく</span>ことの意義や魅力に気づいた</h4>
              </li>
              <li>
                <h4><span>グループ開発</span>での経験から、一つの目標に向かって<span>皆で試行錯誤</span>して<span>アイデアを生み出す</span>ことの重要さ、素晴らしさに気づいた</h4>
              </li>
              </ul>
          </div>
        </div>
        <div className='Future_Main_Img'>
          <img src={img}></img>
        </div>
      </div>
    </div>
  )
}

export default Future