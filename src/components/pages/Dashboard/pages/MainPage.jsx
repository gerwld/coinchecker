import React from 'react'
import ShowCoinsBlock from '../blocks/ShowCoinsBlock/ShowCoinsBlock';

const MainPage = ({ block_last }) => {
  return (
    <div>
      <ShowCoinsBlock items={block_last} title="Top 20 Cap Coins"/>
    </div>
  )
}

export default MainPage;