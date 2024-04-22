import React from 'react'
import './Record.css'

const Record = () => {
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  return (
    <div className='Record'>
      <div className='Record_Title'>
        <h1>実績</h1>
      </div>
      <div className='Record_Main'>
        <div className='Record_Main_Items'>
          <div className='Record_Main_Items_Item'>
            <h2>未来創造PJ：学科賞受賞</h2>
            <h3>2023年2月</h3>
            <p>1年次の学内研究成果報告会にて学科賞をいただきました。内容としては、VRライブを盛り上げる研究でであり、ユーザがペンライトとして使用するVRコントローラの加速度などからライブの演出を変える機能を実装し、能動的なVRライブシステムを実現しました。</p>
          </div>
          <div className='Record_Main_Items_Item'>
            <h2>ハッカソン：ウイングアーク1st受賞</h2>
            <h3>2023年7月</h3>
            <p>株式会社サポーターズ様主催の技育CAMPハッカソンを5人チームで参加し、ウイングアーク1st株式会社様から企業賞をいただきました。受賞作品の内容としては、「クーポンGO」というクーポンの管理Webアプリケーションをなどを用いて開発しました。</p>
          </div>
          <div className='Record_Main_Items_Item'>
            <h2>オープンキャンパス：展示物作成のサポート</h2>
            <h3>2023年8月</h3>
            <p>2023年度のオープンキャンパスの学生展示物でWebアプリケーション作成を希望する下級生の開発の指導を行いました。作成を指導したWebアプリケーションの内容としては、写真を画像認識AIで各項目に分類し各フォルダに保存するものであり、フロントエンドやバックエンド、接続の概念から実装方法まで多岐に渡り指導をしました。</p>
          </div>
        </div>
        <div className='Record_Main_Items'>
          <div className='Record_Main_Items_Item'>
            <h2>BohPJ：Webサイト作成</h2>
            <h3>2023年12月</h3>
            <p>学内の参加団体である「BohPJ」のWebサイトの構築を4人チームで行いました。Next.jsを用いてWebサイトに取り組み、私は3ページある中の1ページ目である「Home」の部分を担当しました。</p>
          </div>
          <div className='Record_Main_Items_Item'>
            <h2>IPSJ情報処理学会全国大会：出場</h2>
            <h3>2024年3月</h3>
            <p>2024年3月に行われたIPSJ情報処理学会全国大会に論文を執筆し、出場しました。タイトルは「3次元Web空間制作支援のための大規模言語モデルを用いた3Dモデル自動選択手法の提案」であり、内容としては生成系AIへ指示を送るだけで自動でバーチャル空間内に3Dモデルを提示するシステムを構築し、提案しました。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Record