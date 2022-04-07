import { connect } from 'react-redux';
import React from 'react'
import { useEffect } from 'react'
import { getFavCoins } from '../../../../redux/reducers/dashboard-reducer';
import ShowCoinsBlock from '../blocks/ShowCoinsBlock/ShowCoinsBlock'

const FavPage = ({ getFavCoins, favCoins, totalCount }) => {
  useEffect(() => {
    getFavCoins();
  }, []);

  return (
    <div>
      <ShowCoinsBlock items={favCoins} total={totalCount} title="Saved coins" />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    favCoins: state.dashboard.favCoins.items,
    totalCount: state.dashboard.favCoins.totalCount
  }
}

export default connect(mapStateToProps, { getFavCoins })(FavPage);