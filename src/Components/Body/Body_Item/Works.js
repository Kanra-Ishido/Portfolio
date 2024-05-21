import React from 'react'
import './Works.css'
import img from './Images/Works_Img.png'

const Works = () => {
  const handleGitHubClick = () => {
    window.open("https://github.com/Kanra-Ishido", "_blank");
  };

  return (
    <div className='Works'>
      <div className='Works_Title'>
        <h1>制作物</h1>
      </div>
      <div className='Works_Main'>
        <div className='Works_Main_Item'>
          <button onClick={handleGitHubClick}>
            <div className='Works_Main_Item_img'>
              <img src={img}></img>
            </div>
            <div className='Works_Main_Item_text'>
              <p>GitHub</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Works