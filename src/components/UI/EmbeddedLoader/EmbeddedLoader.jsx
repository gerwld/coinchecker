import React from 'react';
import s from './EmbeddedLoader.module.css';

function EmbeddedLoader() {
  return (
      <div className={s.preloader}>
        <div className={s.preloader_ld}>
          <div className={s.loader}></div>
        </div>
      </div>
  )
}

export default EmbeddedLoader;