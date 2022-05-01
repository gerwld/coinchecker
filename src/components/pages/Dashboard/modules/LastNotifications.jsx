import React from 'react';
import withClickOutside from '../../../../hoc/withClickOutside';
import s from "./../Dashboard.module.css";


const LastNotifications = React.memo(
 withClickOutside(({ refE, setShow, isShow }) => {
   return (
     <div ref={refE} className={`${s.dashboard_notifications} ${isShow ? s.show_block : ""}`}>
       <button className={s.dash_notific} onClick={() => setShow(!isShow)}>
         Notifications
       </button>
       <div className={s.notif_block}>
         <div>No new notifications.</div>
       </div>
     </div>
   );
 })
);

export default LastNotifications;