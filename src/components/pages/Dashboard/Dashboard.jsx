import React, { useRef, useState } from 'react';
import { BiHelpCircle } from 'react-icons/bi';
import { RiLogoutBoxRLine, RiSettings3Line } from 'react-icons/ri';
import useOutsideClickHide from '../../hooks/useOutsideClick';
import ShowImage from '../../utils/ShowImage';
import AsideBlock from './Components/Aside/Aside';
import s from './Dashboard.module.css';


const Dashboard = (props) => {

    return (
        <div className={s.dashboard_overlay}>
            <AsideBlock />
            <div className={s.dashboard_content}>
                <header className={s.header_dash}>
                    <span className={s.header_title}></span>

                    <SearchResults />
                    <LastNotifications />
                    <ProfSettings userData={props.userData} logOut={props.logOut} />
                </header>
                <main className={s.main_dash}>
                    <h1>Dashboard</h1>
                    <LastSectedItems items={props.last} />


                </main>
                <footer className={s.footer_dash}></footer>
            </div>

            <style>{"\
        body{\
          overflow:hidden;\
          height:100vh;\
        }\
      "}</style>
        </div>
    )
};

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


const SearchResults = (props) => {
    const [isShow, set] = useState(false);
    //hide results
    const e = useRef(null);
    useOutsideClickHide(e, set);

    return (
        <div className={s.dashboard_search} ref={e}>
            <input onFocus={() => set(true)} type="text" id="db_search" />
            <div className={`${s.search_results} ${isShow ? s.show_results : ''}`}>
                <div className={s.drop_overlay}><span className={s.drop_t}>Search:</span>
                    <div>ege</div>
                </div>
            </div>
        </div>
    )
}

const ProfSettings = ({logOut, userData}) => {
    const [isShow, set] = useState(false);
    //hide menu
    const e = useRef(null);
    useOutsideClickHide(e, set);
    return (
        <div className={`${s.dashboard_wrapper} ${isShow ? s.show_settings : ''}`} ref={e}>
            <div className={s.dashboard_cuser} onClick={() => set(!isShow)}>
                <div className={s.cuser_avatar}><img src="/img/user.svg" alt="User Avatar" /></div>
                <span className={s.cuser_name + ' ic-dropdown'}>{userData ? userData.username : ''}</span>
            </div>
            <div className={s.cuser_settings}>
                <div className={s.drop_overlay}><span className={s.drop_t}>Settings:</span>
                    <ul>
                        <li><button><RiSettings3Line />Profile Settings</button></li>
                        <li><button><BiHelpCircle />Help</button></li>
                        <li><button onClick={logOut}><RiLogoutBoxRLine />Log Out</button></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

const LastNotifications = () => {
    const [isShow, set] = useState(false);
    const e = useRef(null);
    useOutsideClickHide(e, set);

    return (
        <div ref={e} className={`${s.dashboard_notifications} ${isShow ? s.show_block : ''}`}>
            <button className={s.dash_notific} onClick={() => set(!isShow)}>Notifications</button>
            <div className={s.notif_block}>
                <div>egeee</div>
                <div>egeee</div>
                <div>egeee</div>
            </div>
        </div>
    )
}

export default Dashboard;