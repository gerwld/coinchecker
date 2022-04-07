import React from "react";
import { useDispatch } from "react-redux";
import { getCoinOutput } from "../../../../redux/reducers/dashboard-reducer";
import ShowCoinsBlock from "../blocks/ShowCoinsBlock/ShowCoinsBlock";

const MainPage = ({ block_last }) => {
  const dispatch = useDispatch();

  const onGetCoinOutput = () => {
    dispatch(getCoinOutput());
  };

  React.useEffect(() => {
    onGetCoinOutput();
  }, []);

  return <ShowCoinsBlock items={block_last} onRefresh={onGetCoinOutput} title="Top 20 Cap Coins" />;
};

export default MainPage;
