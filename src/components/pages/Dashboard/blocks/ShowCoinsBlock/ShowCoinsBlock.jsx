import Pagination from 'rc-pagination';
import React, { useState } from 'react';
import { AiFillStar, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai';
import { FiRefreshCw } from "react-icons/fi";
import { RiArrowRightSLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { fetchFavCoin } from '../../../../../api/BoardService';
import { getTransactionData, selectShowCount } from '../../../../../redux/reducers/dashboard-reducer';
import { onlyNumAfter } from '../../../../../services/onlynumafter';
import ShowImage from '../../../../../utils/ShowImage';
import Loader from '../../../../UI/Loader/Loader';
import TransactionPopup from '../../../../UI/popups/TransactionPopup/TransactionPopup';
import s from './ShowCoinsBlock.module.css';





const ShowCoinsBlock = ({ title, items, total, onRefresh, curr_pagination = 15, currPage, onChangePage, isWallet, walletId, isShow }) => {
    const dispatch = useDispatch();
    
    const itemsMap = items?.map(coin => {
        if(isWallet)
        return <ShowCoinsItem key={coin.coin.id + coin.coin.symbol} coin={coin.coin} amount={coin.amount} walletId={walletId} isWallet={true} isShow={isShow}/>;
        return <ShowCoinsItem key={coin.id + coin.symbol} coin={coin} isShow={isShow}/>
    });

    const isEmpty = !items || items.length === 0;

    const onShowChange = (e) => {
        dispatch(selectShowCount(e.target.value));
    }

    return (
        <div className={`${s.content_block} ${s.last_view} ${isWallet && s.wallet_styles}`}>
            <header>
                <h2 className={s.title}>{title}</h2>
               {!isWallet && <div className={s.prop_block}>
                    <div className={s.prop_search}>
                        <input type="text" id="search_last" placeholder="Search..." disabled={isEmpty}/>
                    </div>
                    <div className={s.prop_last}>
                        <div className="select-wrapper">
                        <select defaultValue={curr_pagination} onChange={onShowChange} disabled={isEmpty}>
                        <option disabled>Show options:</option>
                            <option value={10}>Last 10 items</option>
                            <option value={15}>Last 15 items</option>
                            <option value={20}>Last 20 items</option>
                        </select>
                        </div>
                        {onRefresh && <button onClick={onRefresh} className={s.refresh}><FiRefreshCw/>Refresh</button>}
                    </div>
                </div>}
            </header>
            <div className={s.last_overlay}>
                <table className={s.last_list}>
                    <tbody>
                        <tr className={s.last_head}>
                            <th className={s.head_0}><span>#</span></th>
                            <th className={s.head_1}><span>Coin</span></th>
                            <th className={s.head_2}><span>Price</span></th>
                            <th className={s.head_3}><span>24h</span></th>
                            <th className={s.head_4}><span>24h Volume</span></th>
                            <th className={s.head_5}><span>Capitalization</span></th>
                            {isWallet && <th className={s.head_6}><span>Holdings</span></th>}
                        </tr>
                        {items && itemsMap.length > 0 || total === 0 ? itemsMap : <tr><td colSpan={isWallet ? 8 : 6} className={s.loader}><Loader /></td></tr>}
                        {total === 0 ? <tr><td colSpan={isWallet ? 8 : 6} className={s.no_items}>No items to show.</td></tr> : null}
                    </tbody>
                </table>
            </div>
            {total !== 0 && <Pagination total={total} current={currPage} pageSize={curr_pagination} onChange={onChangePage} showPrevNextJumpers={false} />}
            <TransactionPopup/>
        </div>
    )
};

const ShowCoinsItem = React.memo(({ coin, amount, walletId, isWallet, isShow }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let [isFav, setFav] = useState(coin.favorite);
    const am_usd = amount * coin.currentPrice;

    const perc = coin.priceChangePercentage24h || 0;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    function setFavHandler() {
        setFav(!isFav);
        fetchFavCoin(coin.id, isFav);
    }

    function changeClass(price) {
        const priceSign = Math.sign(price);
        if (priceSign === 1) return "change_green";
        else if (priceSign === -1) return "change_red";
    }
    function onGetTransactionData() {
        dispatch(getTransactionData(coin, walletId, amount));
    }

    const navToCoinHandler = () => {
        navigate(`/dashboard/coins/${coin.id}`);
    }

      const navToTransHandler = () => {
        navigate(`/dashboard/wallet/ts/${walletId}/${coin.id}`);
    }

    return (
        <tr key={coin.id} className={s.last_row}>
            <td className={s.column_0}>
                <button onClick={setFavHandler} className={s.fav_btn}>{isFav ? <AiFillStar /> : <AiOutlineStar />}</button>
                <span className={s.id}>{coin.id}</span>
            </td>
            <td className={s.column_1} onClick={navToCoinHandler}>
                <div className={s.coin_img}>
                    <ShowImage url={coin.image} alt={coin.symbol} newUrl="img/coin.svg" />
                </div>
                <span>{coin.name}</span>
                <span className={s.coin_symb}>{coin.symbol}</span>
            </td>

            <td className={s.column_2}><span>${coin.currentPrice && coin.currentPrice.toString().substring(0, 7)}</span></td>

            <td className={`${s.column_3} ${changeClass(perc)}`}>
                <span>{perc.toFixed(1)} %</span>
            </td>
            <td className={s.column_4}><span>{formatter.format(coin.totalVolume).replace(/\D00(?=\D*$)/, '')}</span></td>
            <td className={s.column_5}><span>{formatter.format(coin.marketCap).replace(/\D00(?=\D*$)/, '')}</span></td>
            {amount && 
            <td className={s.column_6} onClick={navToTransHandler}>
                <div>
                    <span className={s.am_doll}>{isShow ? "$" + onlyNumAfter(am_usd, 2) : "...$"}</span>
                    <span className={s.am_coin}>{isShow ? onlyNumAfter(amount, 5) : "-"} {coin.symbol}</span>
                </div>
            </td>}
            <td className={s.column_7}>
                <button onClick={onGetTransactionData} title="Add transaction"><AiOutlinePlus /></button>
                {isWallet && <NavLink to={`/dashboard/wallet/ts/${walletId}/${coin.id}`} title="View transactions"><RiArrowRightSLine /></NavLink>}
            </td>
        </tr>
    );
});



export default ShowCoinsBlock;