import React from 'react'
import s from './Loader.module.css';

function EmbeddedLoader() {
  return (
      <div className={s.preloader}>
        <span className={s.preloader_ld}></span>
      </div>
  )
}

export default EmbeddedLoader;