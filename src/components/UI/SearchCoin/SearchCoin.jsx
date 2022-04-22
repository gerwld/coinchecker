import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCoinOutput } from "../../../redux/reducers/dashboard-reducer";
import s from "./Search.module.css";

const SearchCoin = ({ onSelect, isHeader }) => {
  const dispatch = useDispatch();
  const { lastCoins, query, searchResult } = useSelector(({ dashboard }) => ({
    lastCoins: dashboard.last_coins,
    query: dashboard.searchQuery,
    searchResult: dashboard.searchResult,
  }));

  useEffect(() => {
    if(!lastCoins) {
      dispatch(getCoinOutput());
    }
  }, [])

  const isInit = query.length !== 0;

  return (
    <div className={`${s.trending} ${isHeader && s.header_styles}`}>
      {(isHeader && isInit) && <h3 className={s.drop_t}>Search:</h3>}
      {isInit ? (
        searchResult?.length > 0 ? (
          searchResult?.slice(0, 10).map((coin, i) => <SearchElem key={coin.name + "_searchselect_" + i} name={coin.name} icon={coin.image} id={coin.id} symb={coin.symbol} onSelect={onSelect} coin={coin} />)
        ) : (
          <span className={s.no_res}>No Results Found.</span>
        )
      ) : (
        <>
          {lastCoins && (
            <>
              <h3>Users often searched:</h3>
              {lastCoins.slice(0, 10).map((coin) => (
                <SearchElem key={coin.name + coin.image} name={coin.name} icon={coin.image} id={coin.id} symb={coin.symbol} onSelect={onSelect} coin={coin} isHeader={isHeader} />
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

const SearchElem = ({ name, icon, symb, onSelect, coin }) => {
  return (
    <div onClick={() => onSelect(coin)} className={s.search_elem}>
      <div className={s.icon}>
        <img src={icon} alt="" />
      </div>
      <span>
        {name} <span className={s.symb}>({symb})</span>
      </span>
    </div>
  );
};

export default SearchCoin;
