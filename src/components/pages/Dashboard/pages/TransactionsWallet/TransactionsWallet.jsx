import React from 'react'
import Breadcrumbs from '../../../../UI/Breadcrumbs/Breadcrumbs';
import s from "./TransactionsWallet.module.css";

const TransactionsWallet = () => {
  return (
    <div className={s.trans_content}>
      <Breadcrumbs current_ctg={'Coin: обзор транзакций'} links={[{to:"/dashboard", name:"Coins"},{to:"/dashboard", name:"WalletName"}]} />
    
     Transactions title + add transaction<br />
     <br />
     transactions info<br />
     pagination<br />
    </div>
  )
}

export default TransactionsWallet