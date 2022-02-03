import React from 'react';
import s from './Main.module.css';

const Main = (props) => {
    return (
        <div className={`${s.main_content} content-wrapper`}>
            <h1>Header title</h1>
           <container className={s.container_1}></container>
           <container className={s.container_1}></container>
           <container className={s.container_1}></container>
           <container className={s.container_1}></container>
           <container className={s.container_1}></container>
        </div>
    )
}

export default Main;