import React from "react";
import { useDispatch } from "react-redux";
import { getCoinOutput } from "../../../../redux/reducers/dashboard-reducer";
import ShowCoinsBlock from "../blocks/ShowCoinsBlock/ShowCoinsBlock";

const MainPage = ({ block_last, show_last }) => {
  const dispatch = useDispatch();

  const onGetCoinOutput = () => {
    dispatch(getCoinOutput(show_last));
  };

  React.useEffect(() => {
    onGetCoinOutput();
  }, [show_last]);

  return (
    <ShowCoinsBlock
      items={block_last}
      onRefresh={onGetCoinOutput}
      show_last={show_last}
      title="Cryptocurrency Prices by Market Cap"
    />
  );
};

export default MainPage;
