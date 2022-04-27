import React from 'react'
import s from "./Settings.module.css";

const Settings = () => {
  React.useEffect(() => {
    window.scrollTo(0, 1);
  }, [])
  return (
  <div className={s.content_block}>
    <h2 className={s.title}>Settings</h2>
  </div>
  )
}

export default Settings;