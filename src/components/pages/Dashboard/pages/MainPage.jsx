import React from 'react'
import { useDispatch } from 'react-redux';
import { getCoinOutput } from '../../../../redux/reducers/dashboard-reducer';
import ShowCoinsBlock from '../blocks/ShowCoinsBlock/ShowCoinsBlock';

const MainPage = ({ block_last }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getCoinOutput());
    console.log('я родился');
  }, [])
  return (
    <div>
      <ShowCoinsBlock items={block_last} title="Top 20 Cap Coins"/>
    </div>
  )
}

export default MainPage;