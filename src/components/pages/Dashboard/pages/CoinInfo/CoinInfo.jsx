import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import s from "./Coin.module.css";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineStar, AiOutlineBell, AiOutlineShareAlt, AiFillStar } from "react-icons/ai";

import { getPageCoinTC, resPageCoin } from "../../../../../redux/reducers/dashboard-reducer";
import EmbeddedLoader from "../../../../UI/EmbeddedLoader/EmbeddedLoader";
import ErrorScreen from "../../../../UI/ErrorScreen/ErrorScreen";
import { fetchFavCoin } from "../../../../../api/BoardService";
import { changeTitle } from "../../../../../services/title";
import Chart from "./Chart";
import WalletService from "../../../../../api/WalletService";

const CoinInfo = () => {
  const currentId = useParams().coinId;
  const dispatch = useDispatch();
  const { data, error } = useSelector(({ dashboard }) => ({
    data: dashboard.pageCoinData,
    error: dashboard.pageCoinErr,
  }));
  const [isFav, setFav] = useState(false);
  const [rangePerc, setRange] = useState(0);
  const perc = data?.marketCapChangePercentage24h ? Math.abs(data.marketCapChangePercentage24h).toFixed(1) : 0;
  const isMoreOrEq0 = data?.marketCapChangePercentage24h ? data?.marketCapChangePercentage24h >= 0 : false;

  const onClickFav = () => {
    setFav(!isFav);
    fetchFavCoin(data.id, isFav);
  };

  useEffect(() => {
    dispatch(getPageCoinTC(currentId));
    return () => dispatch(resPageCoin);
  }, [currentId]);

  useEffect(() => {
    if (data) {
      setFav(data.favorite);
      setRange((data.currentPrice - data.low24h) / ((data.high24h - data.low24h) / 100));
      changeTitle(`${data.name} price, ${data.symbol.toUpperCase()} chart, and market cap / CoinChecker`)
    }
  }, [data]);

  if (data)
    return (
      <div>
        <div className={s.breadcrumbs}>
          <NavLink to="/dashboard">Coins</NavLink>
          <RiArrowRightSLine />
          <span>{data.name}</span>
        </div>
        <div className={s.content_block}>
          <div className={s.coin_maininfo}>
            <span className={s.rank}>Rank #{data.id}</span>
            <div className={s.maininfo_block}>
              <div className={s.icon}>
                <img src={data.image} alt={data.name} />
              </div>
              <span className={s.name}>
                {data.name} <span>({data.symbol})</span>
              </span>
            </div>
          </div>
          <div className={`${s.maininfo_block} ${s.price_block}`}>
            <span className={s.price}>${data.currentPrice}</span>
            <span className={`${s.price_dash} ${isMoreOrEq0 && s.priceup}`}>
              <MdArrowDropDown />
              {perc}%
            </span>
          </div>
          <div className={s.share_buttons}>
            <button>
              <AiOutlineShareAlt />
            </button>
            <button>
              <AiOutlineBell />
            </button>
            <button onClick={onClickFav}>{isFav ? <AiFillStar /> : <AiOutlineStar />}</button>
          </div>
          <div className={s.range_content}>
            <div className={s.range_block}>
              <div className={s.s24_range} style={{width: rangePerc + '%'}}></div>
            </div>
            <div className={s.range_subblock}>
              <span>${data.low24h}</span>
              <span>24H Range</span>
              <span>${data.high24h}</span>
            </div>
          </div>
          
          <div className={s.coin_info}>
            {data.marketCap && (
              <div className={s.info_block}>
                <span>Market Cap</span>
                <span>${data.marketCap}</span>
              </div>
            )}
            {data.fullyDilutedValuation && (
              <div className={s.info_block}>
                <span>Fully Diluted Valuation</span>
                <span>${data.fullyDilutedValuation}</span>
              </div>
            )}
            {data.maxSupply && (
              <div className={s.info_block}>
                <span>Max Supply</span>
                <span>{data.maxSupply}</span>
              </div>
            )}
            {data.totalSupply && (
              <div className={s.info_block}>
                <span>Total Supply </span>
                <span>{data.totalSupply}</span>
              </div>
            )}
            {data.circulatingSupply && (
              <div className={s.info_block}>
                <span>Circulating Supply</span>
                <span>{data.circulatingSupply}</span>
              </div>
            )}
          </div>
          <Chart name={data.name} chartId={data?.coinGeckoId}/>
        </div>
      </div>
    );
  else if (error) return <ErrorScreen error={error} withIcon />;
  return (
    <div className="dash_content_loader">
      <EmbeddedLoader />
    </div>
  );
};

export default CoinInfo;
