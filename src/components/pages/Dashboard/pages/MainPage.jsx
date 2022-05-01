import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoinOutput } from "../../../../redux/reducers/dashboard-reducer";
import ShowCoinsBlock from "../blocks/ShowCoinsBlock/ShowCoinsBlock";

const MainPage = ({ curr_pagination }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const {total, items} = useSelector(({dashboard}) => ({
    items: dashboard.last_coins,
    total: dashboard.totalLastCount
  }))

  const onGetCoinOutput = useCallback(() => {
    dispatch(getCoinOutput(curr_pagination, page - 1));
  });

  React.useEffect(() => {
    onGetCoinOutput();
  }, [curr_pagination, page]);

  React.useEffect(() => {
    window.scrollTo(0, 1);
  }, [])

  return (
    <ShowCoinsBlock
      curr_pagination={curr_pagination}
      total={total}
      currPage={page}
      onChangePage={setPage}

      items={items}
      onRefresh={onGetCoinOutput}
      title="Cryptocurrency Prices by Market Cap"
    />
  );
};

export default MainPage;
