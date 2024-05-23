import React from 'react'
import './Skill.css'
import img_1 from './Images/Skill_Img_1.png'
import img_2 from './Images/Skill_Img_2.png'
import img_3 from './Images/Skill_Img_3.png'
import img_4 from './Images/Skill_Img_4.png'
import img_5 from './Images/Skill_Img_5.png'
import img_6 from './Images/Skill_Img_6.png'
import img_7 from './Images/Skill_Img_7.png'

const Skill = () => {
  return (
    <div className='Skill'>
      <div className='Skill_Title'>
        <h1>スキル</h1>
      </div>
      <div className='Skill_Main'>
        <div className='Skill_Main_Items'>
          <div className='Skill_Main_Items_Item'>
            <div className='Skill_Main_Items_Item_img'>
              <img src={img_1}></img>
            </div>
            <div className='Skill_Main_Items_Item_text'>
              <h2>Python</h2>
              <h3>Scikit-learn，TensorFlow，PyTorch，Flask，FastAPI，Streamlit，GPTAPI，etc</h3>
              <p>主に機械学習や深層学習、データ分析、Webアプリケーションのバックエンドなどで扱います。</p>
            </div>
          </div>
          <div className='Skill_Main_Items_Item'>
            <div className='Skill_Main_Items_Item_img'>
              <img src={img_2}></img>
            </div>
            <div className='Skill_Main_Items_Item_text'>
              <h2>JavaScript</h2>
              <h3>React，Next.js，A-Frame</h3>
              <p>主にWebページの動的な画面の作成などで扱います。</p>
            </div>
          </div>
        </div>
        <div className='Skill_Main_Items'>
          <div className='Skill_Main_Items_Item'>
            <div className='Skill_Main_Items_Item_img'>
              <div className='Skill_Main_Items_Item_img_1'>
                <img src={img_3}></img>
              </div>
              <div className='Skill_Main_Items_Item_img_2'>
                <img src={img_4}></img>
              </div>
            </div>
            <div className='Skill_Main_Items_Item_text'>
              <h2>HTML / CSS</h2>
              <h3></h3>
              <p>主にWebページの構造やデザインの作成などで扱います。</p>
            </div>
          </div>
          <div className='Skill_Main_Items_Item'>
            <div className='Skill_Main_Items_Item_img'>
              <img src={img_5}></img>
            </div>
            <div className='Skill_Main_Items_Item_text'>
              <h2>SQL</h2>
              <h3>postgreSQL</h3>
              <p>主にデータベースの構築や操作などで扱います。</p>
            </div>
          </div>
        </div>
        <div className='Skill_Main_Items'>
          <div className='Skill_Main_Items_Item'>
            <div className='Skill_Main_Items_Item_img'>
              <img src={img_6}></img>
            </div>
            <div className='Skill_Main_Items_Item_text'>
              <h2>Unreal Engine 5</h2>
              <h3>Blueprint</h3>
              <p>主にバーチャル空間などといった3DCGの操作画面やシステムの作成などで扱います。</p>
            </div>
          </div>
          <div className='Skill_Main_Items_Item'>
            <div className='Skill_Main_Items_Item_img'>
              <img src={img_7}></img>
            </div>
            <div className='Skill_Main_Items_Item_text'>
              <h2>AWS</h2>
              <h3>EC2，Route 53，RDS</h3>
              <p>主に自作のWebアプリケーションをインターネット上へのデプロイなどで扱います。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill