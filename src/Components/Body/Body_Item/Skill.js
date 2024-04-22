import React from 'react'
import './Skill.css'

const Skill = () => {
  return (
    <div className='Skill'>
      <div className='Skill_Title'>
        <h1>スキル</h1>
      </div>
      <div className='Skill_Main'>
        <div className='Skill_Main_Item'>
          <h2>Python</h2>
          <p>Scikit-learn，TensorFlow，PyTorch，Flask，FastAPI，Streamlit，GPTAPI，etc</p>
        </div>
        <div className='Skill_Main_Item'>
          <h2>JavaScript</h2>
          <p>React，Next.js，A-Frame</p>
        </div>
        <div className='Skill_Main_Item'>
          <h2>HTML</h2>
          <p></p>
        </div>
        <div className='Skill_Main_Item'>
          <h2>CSS</h2>
          <p></p>
        </div>
        <div className='Skill_Main_Item'>
          <h2>Unreal Engine 5</h2>
          <p>Blueprint</p>
        </div>
        <div className='Skill_Main_Item'>
          <h2>AWS</h2>
          <p>EC2</p>
        </div>
      </div>
    </div>
  );
};

export default Skill