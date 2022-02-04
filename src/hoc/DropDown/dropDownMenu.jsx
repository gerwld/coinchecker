import React from 'react';
import s from './DropDown.module.css';

const dropDownMenu = (Component, headText) => {
    class HOC extends React.Component {
        render() {
          return (
        <div className={s.drop_overlay}><span className={s.drop_t}>{headText}</span>
          <Component {...this.props}/>
          </div>
          )
        }
      }
      return HOC;
}

export default dropDownMenu;