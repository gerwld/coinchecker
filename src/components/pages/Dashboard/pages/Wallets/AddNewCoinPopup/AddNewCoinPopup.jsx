import React from "react";
import { useDispatch } from "react-redux";

import s from "./Add.module.css";
import { useSelector } from "react-redux";
import withClickOutside from "../../../../../../hoc/withClickOutside";
import { earseSearch, getTransactionData, onTypeSearchTC } from "../../../../../../redux/reducers/dashboard-reducer";
import { IoCloseOutline } from "react-icons/io5";

const AddNewCoinPopup = withClickOutside(({ walletId, isShow, setShow, refE }) => {
  const dispatch = useDispatch();
  const { lastCoins, query, searchResult } = useSelector(({ dashboard }) => ({
    lastCoins: dashboard.last_coins,
    query: dashboard.searchQuery,
    searchResult: dashboard.searchResult,
  }));


  const isInit = query.length !== 0;

  const closePopup = () => {
    setShow(false);
    dispatch(earseSearch);
  };

  const onSelect = async (coin) => {
    dispatch(getTransactionData(coin, walletId));
    closePopup();
  };

  const onTypeInput = (e) => {
    dispatch(onTypeSearchTC(e.target.value));
  };

  return (
    <>
      <button onClick={setShow} className={s.btn_addcoin}>
        Add New Coin
      </button>
      {isShow && (
        <div className={s.popup_wrapper}>
          <div ref={refE} className={s.popup_content}>
            <button onClick={closePopup} className={s.btn_close}>
              <IoCloseOutline />
            </button>
            <h2>Search your favorite coin:</h2>
            <input type="text" onChange={onTypeInput} value={query} placeholder="Enter Coin Name" autoFocus />
            <div className={s.trending}>
              {isInit ? (
                searchResult?.length > 0 ? (
                  searchResult?.slice(0, 10).map((coin) => <SearchElem name={coin.name} icon={coin.image} id={coin.id} symb={coin.symbol} onSelect={onSelect} />)
                ) : (
                  <span className={s.no_res}>No Results Found.</span>
                )
              ) : (
                <>
                  <h3>Users often searched:</h3>
                  {lastCoins.slice(0, 10).map((coin) => (
                    <SearchElem name={coin.name} icon={coin.image} id={coin.id} symb={coin.symbol} onSelect={onSelect} coin={coin} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
});

const SearchElem = ({ coin, onSelect }) => {

  return (
    <div onClick={() => onSelect(coin)} className={s.search_elem}>
      <div className={s.icon}>
        <img src={coin.image} alt={coin.name} />
      </div>
      <span>
        {coin.name} <span className={s.symb}>({coin.symbol})</span>
      </span>
    </div>
  );
};

export default AddNewCoinPopup;
