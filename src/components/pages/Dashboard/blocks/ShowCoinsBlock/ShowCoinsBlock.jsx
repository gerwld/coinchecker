import React, { useState } from 'react'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import s from './ShowCoinsBlock.module.css';
import ShowImage from '../../../../../utils/ShowImage';
import Loader from '../../../../UI/Loader/Loader';
import { fetchFavCoin } from '../../../../../api/BoardService';
import {FiRefreshCw} from "react-icons/fi"
import { useDispatch } from 'react-redux';
import { selectShowCount } from '../../../../../redux/reducers/dashboard-reducer';

import Pagination from 'rc-pagination';


const ShowCoinsBlock = ({ title, items, total, onRefresh, curr_pagination = 15, currPage, onChangePage }) => {
    const itemsMap = items?.map(coin => <ShowCoinsItem key={coin.id + coin.symbol} coin={coin} />)
    const dispatch = useDispatch();

    const onShowChange = (e) => {
        dispatch(selectShowCount(e.target.value));
    }

    return (
        <div className={`${s.content_block} ${s.last_view}`}>
            <header>
                <h2 className={s.title}>{title}</h2>
                <div className={s.prop_block}>
                    <div className={s.prop_search}>
                        <input type="text" id="search_last" placeholder="Search..." />
                    </div>
                    <div className={s.prop_last}>
                        <select defaultValue={curr_pagination} onChange={onShowChange}>
                        <option disabled>Show options:</option>
                            <option value={10}>Last 10 items</option>
                            <option value={15}>Last 15 items</option>
                            <option value={20}>Last 20 items</option>
                        </select>
                        {onRefresh && <button onClick={onRefresh} className={s.refresh}><FiRefreshCw/>Refresh</button>}
                    </div>
                </div>
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
                        </tr>
                        {items && itemsMap.length > 0 || total === 0 ? itemsMap : <tr><td colSpan="6" className={s.loader}><Loader /></td></tr>}
                        {total === 0 ? <tr><td colSpan="6" className={s.no_items}>No items to show.</td></tr> : null}
                    </tbody>
                </table>
            </div>
            <Pagination total={total} current={currPage} pageSize={curr_pagination} onChange={onChangePage} showPrevNextJumpers={false} />
        </div>
    )
}

const ShowCoinsItem = ({ coin }) => {
    let [isFav, setFav] = useState(coin.favorite);

    const perc = coin.priceChangePercentage24h || 0;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        // maximumSignificantDigits: 8
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

    return (
        <tr key={coin.id} className={s.last_row}>
            <td className={s.column_0}>
                <button onClick={setFavHandler} className={s.fav_btn}>{isFav ? <AiFillStar /> : <AiOutlineStar />}</button>
                <span className={s.id}>{coin.id}</span>
            </td>
            <td className={s.column_1}>
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
        </tr>
    );
}

export default ShowCoinsBlock;