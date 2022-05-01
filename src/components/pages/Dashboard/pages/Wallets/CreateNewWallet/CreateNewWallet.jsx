import React from 'react';
import { useDispatch } from 'react-redux';
import WalletService from '../../../../../../api/WalletService';
import { getAllWalletsTC } from '../../../../../../redux/reducers/wallets-reducer';
import s from "../Wallets.module.css";


export const CreateWalletBtn = ({name}) => {
 const dispatch = useDispatch();
 const onCreateWallet = async () => {
   await WalletService.createWallet("My Portfolio");
   dispatch(getAllWalletsTC());
 };
 return <button onClick={onCreateWallet} type="button">{name}</button>
}

const CreateNewWallet = () => {
 return (
   <div className={s.create_new}>
     <h2>You haven't created wallets yet. Create a new one?</h2>
     <CreateWalletBtn name={"Create Free Wallet"}/>
   </div>
 );
};

export default CreateNewWallet;