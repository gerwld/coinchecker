import React from 'react'
import ShowImage from '../../../../utils/ShowImage';
import s from './LastSelected.module.css';

const LastSectedItems = ({ block_last }) => {

    function getChangeClass(price) {
        const priceSign = Math.sign(price);
        if (priceSign === 1) return "change_green";
        else if (priceSign === -1) return "change_red";
    }

    //map items
    const items = block_last.map(coin => {
        const perc = coin.priceChangePercentage24h ? coin.priceChangePercentage24h : 0;
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
      
        });
        return (
            <tr key={coin.id} className={s.last_row}>
                <td className={s.column_0}>
                    <span>{coin.id}.</span>
                </td>
                <td className={s.column_1}>
                    <div className={s.coin_img}>
                        <ShowImage url={coin.image} alt={coin.symbol} newUrl="img/coin.svg" />
                    </div>
                    <span>{coin.name}</span>
                    <span>{coin.symbol}</span>
                </td>

                <td className={s.column_2}><span>${coin.currentPrice}</span></td>

                <td className={`${s.column_3} ${getChangeClass(perc)}`}>
                    <span>{perc.toFixed(2)} %</span>
                </td>
                <td className={s.column_4}><span>{formatter.format(coin.totalVolume).replace(/\D00$/, '')}</span></td>
                <td className={s.column_5}><span>{formatter.format(coin.marketCap).replace(/\D00$/, '')}</span></td>
            </tr>
        );
    })
    return (
        <div className={`${s.content_block} ${s.last_view}`}>
            <header>
                <h2 className={s.title}>Top 20 Cap Coins</h2>
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
                            <th><span>Coin</span></th>
                            <th><span>Price</span></th>
                            <th><span>24h</span></th>
                            <th><span>24h Volume</span></th>
                            <th><span>Capitalization</span></th>
                        </tr>
                        {items}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LastSectedItems;