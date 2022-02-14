import React from 'react'
import ShowImage from '../../../../utils/ShowImage';
import s from './LastSelected.module.css';

const LastSectedItems = ({ block_last }) => {

  //map items
  const items = block_last.map(coin => {
      return (
          <tr key={coin.id} className={s.selected_item}>
              <td className={s.cell}>
                  <div className={s.prev}><ShowImage url={coin.image} alt={coin.symbol} newUrl="img/coin.svg" /></div>
                  <span>{coin.name}</span></td>
              <td className={s.cell}><span>${coin.currentPrice}</span></td>
              {/* <td className={s.cell}><span>{coin.source}</span></td> */}
              {/* <td className={s.cell}><span>{coin.daychange.diff}{coin.daychange.isUp ? ' +' : ' -'}</span></td> */}
              {/* <td className={s.cell}><span>${coin.holdings}</span></td> */}
          </tr>
      );
  })
  return (
      <div className={`${s.content_block} ${s.selected_view}`}>
          <header>
              <h2 className={s.title}>Last added positions:</h2>
              <div className={s.prop_block}>
                  <div className={s.prop_search}>
                      <input type="text" id="search_selected" placeholder="Search..." />
                  </div>
                  <div className={s.prop_selected}>
                      "buttons or dropdown menu"
                  </div>
              </div>
          </header>
          <div className={s.selected_overlay}>
              <table className={s.selected_list}>
                  <tbody>
                      <tr className={s.selected_head}>
                          <th className={s.cell}><span>Coin</span></th>
                          <th className={s.cell}><span>Price</span></th>
                          <th className={s.cell}><span>Source</span></th>
                          <th className={s.cell}><span>24h</span></th>
                          <th className={s.cell}><span>Holdings</span></th>
                      </tr>
                      {items}
                  </tbody>
              </table>
          </div>
      </div>
  )
}

export default LastSectedItems;