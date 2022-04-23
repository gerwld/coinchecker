import React from 'react'
import useAxios from "axios-hooks";
import useWindowDimensions from '../../../../../hooks/useWindowDimensions/index.tsx';

import PrimaryChart from './Chart/PrimChart';
import SecondaryChart from './Chart/SecChart';

const Chart = ({chartId}) => {
  const { height } = useWindowDimensions();
  const [boxWidth, setBoxWidth] = React.useState(0);
  const gridItemRef = React.useRef(null);
  const MARKET_CHART_ID = chartId ? chartId : "bitcoin";

  const [{ data, loading, error }] = useAxios({
    url: `https://api.coingecko.com/api/v3/coins/${MARKET_CHART_ID}/market_chart?vs_currency=usd&days=${1}`,
    method: "GET",
  });

  const mappedData = React.useMemo(() => {
    return data?.prices
      ? data.prices.map((elem) => ({
          date: new Date(elem[0]),
          price: elem[1],
        }))
      : [];
  }, [data]);

  React.useEffect(() => {
    const handleResize = (width) => {
      setBoxWidth(width || 0);
    };

    handleResize(gridItemRef.current?.clientWidth || 0);

    window.addEventListener("resize", () =>
      handleResize(gridItemRef?.current?.clientWidth || 0)
    );

    return () => {
      window.removeEventListener("resize", () => handleResize());
    };
  }, [gridItemRef]);

  return (
  <div ref={gridItemRef}>
  {mappedData?.length && (
      <>
        <PrimaryChart
          data={mappedData ?? []}
          height={Math.floor(height * 0.4)}
          width={boxWidth}
          margin={{
            top: 16,
            right: 16,
            bottom: 40,
            left: 48,
          }}/>
        <SecondaryChart
          data={mappedData ?? []}
          height={Math.floor(height * 0.1)}
          width={boxWidth}
          margin={{
            top: 0,
            right: 16,
            bottom: 24,
            left: 48,
          }}/>
      </>)}
      </div>)
}

export default Chart