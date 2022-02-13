import React from 'react'
import ShowImage from '../../../../utils/ShowImage';
import s from './LastSelected.module.css';

const LastSectedItems = ({ items }) => {

  //map items
  items = items.map(e => {
      let price = e.price.length <= 2 ? e.price + '.00' : e.price;
      return (
          <tr key={e.id} className={s.selected_item}>
              <td className={s.cell}>
                  <div className={s.prev}><ShowImage url={e.logoUrl} alt={e.alt} newUrl="img/coin.svg" /></div>
                  <span>{e.name}</span></td>
              <td className={s.cell}><span>${price}</span></td>
              <td className={s.cell}><span>{e.source}</span></td>
              <td className={s.cell}><span>{e.daychange.diff}{e.daychange.isUp ? ' +' : ' -'}</span></td>
              <td className={s.cell}><span>${e.holdings}</span></td>
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