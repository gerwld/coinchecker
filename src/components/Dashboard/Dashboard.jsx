import React from 'react';
import AsideBlock from './Components/Aside/Aside';
import s from './Dashboard.module.css';

const Dashboard = (props) => {
    return (
        <div className={s.dashboard_overlay}>
            <AsideBlock />
            <header className={s.header_dash}></header>
            <main className={s.main_dash}></main>
            <footer className={s.footer_dash}></footer>
        </div>
    )
};

export default Dashboard;