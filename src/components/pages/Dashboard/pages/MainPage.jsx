import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoinOutput } from "../../../../redux/reducers/dashboard-reducer";
import ShowCoinsBlock from "../blocks/ShowCoinsBlock/ShowCoinsBlock";

const MainPage = ({ block_last }) => {
  const dispatch = useDispatch();
  const {show_last} = useSelector(({dashboard}) => ({
    show_last: dashboard.show_last 
}))

  const onGetCoinOutput = () => {
    dispatch(getCoinOutput(show_last));
  };

  React.useEffect(() => {
    onGetCoinOutput();
  }, [show_last]);

  return <ShowCoinsBlock items={block_last} onRefresh={onGetCoinOutput} show_last={show_last} title="Cryptocurrency Prices by Market Cap" />;
};

export default MainPage;
