import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import withClickOutside from '../../../../hoc/withClickOutside';
import { earseSearch, onTypeSearchTC } from '../../../../redux/reducers/dashboard-reducer';
import SearchCoin from '../../../UI/SearchCoin/SearchCoin';
import s from "./../Dashboard.module.css";


const SearchResultsDropDown = React.memo(
 withClickOutside(({ refE, setShow, isShow }) => {
   return (
     <div className={s.dashboard_search} ref={refE}>
       <SearchHeader setShow={setShow} isShow={isShow} />
     </div>
   );
 })
);

const SearchHeader = ({ setShow, isShow }) => {
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const onTypeInput = (e) => {
   dispatch(onTypeSearchTC(e.target.value));
 };

 const onBlurSearch = (e) => {
   setTimeout(() => {
       dispatch(earseSearch);
   }, 120);
   e.target.value = "";
   
 };

 const onSelect = (coin) => {
   navigate(`/dashboard/coins/${coin.id}`);
   setShow(false);
 };

 return (
   <>
     <input onFocus={() => setShow(true)} onBlur={onBlurSearch} onChange={onTypeInput} type="text" id="db_search" autoComplete="new-password" autoComplete="off" />
     <div className={`${s.search_results} ${isShow ? s.show_results : ""}`}>
       <div className={s.drop_overlay}>
         <SearchCoin onSelect={onSelect} isHeader />
       </div>
     </div>
   </>
 );
};

export default SearchResultsDropDown;