import { connect } from 'react-redux';
import React from 'react'
import { useEffect } from 'react'
import { getFavCoins } from '../../../../redux/reducers/dashboard-reducer';
import ShowCoinsBlock from '../blocks/ShowCoinsBlock/ShowCoinsBlock'

const FavPage = ({ getFavCoins, favCoins, totalCount, show_last }) => {
  useEffect(() => {
    getFavCoins(show_last);
  }, [show_last]);

  return (
    <div>
      <ShowCoinsBlock items={favCoins} total={totalCount} show_last={show_last} title="Saved coins" />
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