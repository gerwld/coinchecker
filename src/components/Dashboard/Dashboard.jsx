import React from 'react';
import AsideBlock from './Components/Aside/Aside';
import s from './Dashboard.module.css';


const Dashboard = (props) => {
    return (
        <div className={s.dashboard_overlay}>
            <AsideBlock />
            <div className={s.dashboard_content}>
                <header className={s.header_dash}>1123</header>
                <main className={s.main_dash}></main>
                <footer className={s.footer_dash}></footer>
            </div>
            {/* inline styles for body-fix */}
            <style>{"\
        body{\
          overflow:hidden;\
          height:100vh;\
        }\
      "}</style>
        </div>
    )
};

export default Dashboard;