import React from 'react'
import s from './Loader.module.css';

function Loader() {
  return (
      <div class={s.preloader}>
        <span class={s.preloader_ld}></span>
      </div>
  )
}

export default Loader