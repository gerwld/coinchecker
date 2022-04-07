import React, { useState } from 'react'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import s from './ShowCoinsBlock.module.css';
import ShowImage from '../../../../../utils/ShowImage';
import Loader from '../../../../UI/Loader/Loader';
import { fetchFavCoin } from '../../../../../api/BoardService';


const ShowCoinsBlock = ({ title, items, total }) => {
    const itemsMap = items?.map(coin => <ShowCoinsItem key={coin.id + coin.symbol} coin={coin} />)

    return (
        <div className={`${s.content_block} ${s.last_view}`}>
            <header>
                <h2 className={s.title}>{title}</h2>
                <div className={s.prop_block}>
                    <div className={s.prop_search}>
                        <input type="text" id="search_last" placeholder="Search..." />
                    </div>
                    <div className={s.prop_last}>
                        "buttons or dropdown menu"
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
        </div>
    )
}

const ShowCoinsItem = ({ coin }) => {
    let [isFav, setFav] = useState(coin.favorite);

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

            <td className={s.column_2}><span>${coin.currentPrice}</span></td>

            <td className={`${s.column_3} ${changeClass(perc)}`}>
                <span>{perc.toFixed(2)} %</span>
            </td>
            <td className={s.column_4}><span>{formatter.format(coin.totalVolume).replace(/\D00$/, '')}</span></td>
            <td className={s.column_5}><span>{formatter.format(coin.marketCap).replace(/\D00$/, '')}</span></td>
        </tr>
    );
}

export default ShowCoinsBlock;