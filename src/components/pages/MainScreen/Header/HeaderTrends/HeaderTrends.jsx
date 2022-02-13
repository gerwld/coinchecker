import Dinero from 'dinero.js';
import React from 'react';
import ShowImage from '../../../../../utils/ShowImage';
import s from './Trends.module.css';


const HeaderTrends = ({ headTrends }) => {
    return (
        <div className={`${s.header_section2} content-wrapper`}>

            <h2>Market trends</h2>
            <div className={s.sect2_blocks}>
                {headTrends.map(e => {
                    let price = Dinero({ amount: parseInt(e.price * 100), currency: 'USD' }).toFormat('$0,0.00');
                    return (<div key={e.id + e.name} className={s.sect2_block}>
                        <div className={s.sect2_block_subblock}>
                            <div className={s.icon}><ShowImage url={e.logoUrl} alt={e.ticker} newUrl="img/coin.svg" /></div>
                            <div className={s.name}>
                                <span className={s.ticker}>{e.ticker}</span>
                                <span className={s.fullname}>{e.name}</span>
                            </div>
                            <div className={s.trend}><img src="/img/arrow_up.svg" alt="Trend" /></div>
                        </div>
                        <div className={s.sect2_block_subblock}>
                            <div className={s.price_set}>
                                <span className={s.price}>{price}</span>
                                <span className={s.percent}>2.14%</span>
                            </div>
                            <div className={s.chart}><img src="/img/example-chart.svg" alt="Chart" /></div>
                        </div>
                    </div>)
                })}
            </div>

        </div>
    )
}

export default HeaderTrends;