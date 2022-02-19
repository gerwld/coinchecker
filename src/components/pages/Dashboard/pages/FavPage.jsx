import React from 'react'
import ShowCoinsBlock from '../blocks/ShowCoinsBlock/ShowCoinsBlock'

const FavPage = ({ block_last}) => {
  return (
    <div>
      <ShowCoinsBlock items={block_last} title="Saved coins" />
    </div>
  )
}

export default FavPage