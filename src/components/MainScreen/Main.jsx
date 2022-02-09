import React from 'react';
import s from './Main.module.css';
import HeaderMain from './Header/Header';

const Main = (props) => {
    return (
        <div>
            <HeaderMain headTrends={props.headTrends}/>
            <div className={`${s.main_content} content-wrapper`}>
                <h1>Header title</h1>
                <div className={s.container_1}></div>
                <div className={s.container_1}></div>
                <div className={s.container_1}></div>
                <div className={s.container_1}></div>
                <div className={s.container_1}></div>
            </div>
        </div>
    )
}

export default Main;