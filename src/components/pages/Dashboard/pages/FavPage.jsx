import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavCoins } from "../../../../redux/reducers/dashboard-reducer";
import ShowCoinsBlock from "../blocks/ShowCoinsBlock/ShowCoinsBlock";


const FavPage = ({ curr_pagination }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { total, elements } = useSelector(({ dashboard }) => ({
    elements: dashboard.favCoins.items,
    total: dashboard.favCoins.totalCount,
  }));

  useEffect(() => {
    window.scrollTo(0, 1);
  }, [])

  useEffect(() => {
    dispatch(getFavCoins(curr_pagination, page - 1));
  }, [curr_pagination, page]);

  return (
    <div>
      <ShowCoinsBlock
        curr_pagination={curr_pagination}
        total={total}
        currPage={page}
        onChangePage={setPage}

        items={elements}
        title="Saved coins"
      />
    </div>
  );
};


export default FavPage;
