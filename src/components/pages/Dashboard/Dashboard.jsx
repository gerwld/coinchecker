import React from 'react';
import { BiHelpCircle } from 'react-icons/bi';
import { RiLogoutBoxRLine, RiSettings3Line } from 'react-icons/ri';
import withClickOutside from '../../../hoc/withClickOutside';
import AsideBlock from '../../UI/Aside/Aside';
import LastSectedItems from './blocks/LastSelected';
import s from './Dashboard.module.css';


const Dashboard = ({block_last, ...props}) => {
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
                    {/* <h1>Dashboard</h1> */}
                    <LastSectedItems block_last={block_last} />

                </main>
                <footer className={s.footer_dash}></footer>
            </div>
        </div>
    )
};


const SearchResults = withClickOutside(({refE, setShow, isShow, ...props}) => {
    return (
        <div className={s.dashboard_search} ref={refE}>
            <input onFocus={() => setShow(true)} type="text" id="db_search" />
            <div className={`${s.search_results} ${isShow ? s.show_results : ''}`}>
                <div className={s.drop_overlay}><span className={s.drop_t}>Search:</span>
                    <div>ege</div>
                </div>
            </div>
        </div>
    )
});

const ProfSettings = withClickOutside(({refE, setShow, isShow, userData, logOut, ...props}) => {
    return (
        <div className={`${s.dashboard_wrapper} ${isShow ? s.show_settings : ''}`} ref={refE}>
            <div className={s.dashboard_cuser} onClick={() => setShow(!isShow)}>
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
});

const LastNotifications = withClickOutside(({refE, setShow, isShow, ...props}) => {
    return (
        <div ref={refE} className={`${s.dashboard_notifications} ${isShow ? s.show_block : ''}`}>
            <button className={s.dash_notific} onClick={() => setShow(!isShow)}>Notifications</button>
            <div className={s.notif_block}>
                <div>egeee</div>
                <div>egeee</div>
                <div>egeee</div>
            </div>
        </div>
    )
})

export default Dashboard;