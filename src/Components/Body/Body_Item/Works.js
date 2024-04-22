import React from 'react'
import './Works.css'

const Works = () => {
  const handleGitHubClick = () => {
    window.open("https://github.com/Kanra-Ishido/Portfolio.git", "_blank");
  };

  return (
    <div className='Works'>
      <div className='Works_Title'>
        <h1>制作物</h1>
      </div>
      <div className='Works_Main'>
        <div className='Works_Main_Item'>
          <button onClick={handleGitHubClick}>
            GitHub<br />
            https://github.com/Kanra-Ishido/Portfolio.git
          </button>
        </div>
      </div>
    </div>
  );
};

export default Works