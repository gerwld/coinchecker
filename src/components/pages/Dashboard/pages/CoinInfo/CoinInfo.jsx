import React, { useEffect } from 'react'
import {NavLink} from "react-router-dom";
import { useDispatch } from 'react-redux';

import s from "./Coin.module.css";
import { RiArrowRightSLine } from 'react-icons/ri';
import { MdArrowDropDown } from 'react-icons/md';

import { getPageCoinTC } from '../../../../../redux/reducers/dashboard-reducer';
import { useSelector } from 'react-redux';
import EmbeddedLoader from '../../../../UI/EmbeddedLoader/EmbeddedLoader';

const CoinInfo = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(({dashboard}) => ({
    data: dashboard.pageCoinData
  }))
  const perc = Math.abs(data.marketCapChangePercentage24h).toFixed(1);
  useEffect(() => {
    dispatch(getPageCoinTC(2));
  }, [])
  const isMoreOrEq0 = data.marketCapChangePercentage24h >= 0;
  console.log(data);
  if(data) return (
    <div className={s.content_block}>
      <div className={s.breadcrumbs}>
        <NavLink to="/dashboard">Coins</NavLink>
        <RiArrowRightSLine/>
        <span>{data.name}</span>
      </div>
      <div className={s.coin_maininfo}>
      <span className={s.rank}>Rank #{data.id}</span>
      <div className={s.maininfo_block}>
        <div className={s.icon}><img src={data.image} alt={data.name} /></div>
        <span className={s.name}>{data.name} <span>({data.symbol})</span></span>
      </div>
      </div>
      <div className={`${s.maininfo_block} ${s.price_block}`}>
      <span className={s.price}>${data.currentPrice}</span>
      <span className={`${s.price_dash} ${isMoreOrEq0 && s.priceup}`}><MdArrowDropDown />{perc}%</span>
      </div>
      USDprice (+-)
      ShareBtns

      coininfo

      Info

      coin to

    </div>
  );
  return <div className="dash_content_loader"><EmbeddedLoader /></div>
}

export default CoinInfo;