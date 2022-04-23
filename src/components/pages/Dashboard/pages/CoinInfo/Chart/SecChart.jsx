import React from "react";
import AreaChart from "./AreaChart/AreaChart.jsx";
import { scaleLinear, scaleTime } from "@visx/scale";
import { LinearGradient } from "@visx/gradient";
import { Brush } from "@visx/brush";
import BaseBrush from "@visx/brush/lib/BaseBrush";
import { max, min, extent } from "d3-array";
import { theme } from "./theme.tsx";

const SecondaryChart = ({
  data,
  width = 10,
  height,
  margin = { top: 0, right: 0, bottom: 0, left: 0 },
}) => {
  const [filteredDataState, setFilteredData] = React.useState(0);

  const brushRef = React.useRef<BaseBrush | null>(null);

  // bounds
  const xMax = Math.max(width - margin.left - margin.right, 0);
  const yMax = Math.max(height - margin.top - margin.bottom, 0);

  // accessors
  const getDate = (d) => new Date(d.date);
  const getStockValue = (d) => d.price;

  // scales
  const dateScale = React.useMemo(() => {
    return scaleTime({
      range: [0, xMax],
      domain: extent(data, getDate),
    });
  }, [xMax, data]);
  const priceScale = React.useMemo(() => {
    return scaleLinear({
      range: [yMax + margin.top, margin.top],
      domain: [min(data, getStockValue) || 0, max(data, getStockValue) || 0],
      nice: true,
    });
    //
  }, [margin.top, yMax, data]);

  const initialBrushPosition = React.useMemo(
    () => ({
      start: { x: dateScale(getDate(data[0])) },
      end: { x: dateScale(getDate(data[data.length - 1])) },
    }),
    [dateScale, data]
  );

  React.useEffect(() => {
    if (data.length) {
      setFilteredData(data);
    }
  }, [data, setFilteredData]);

  const onBrushChange = (domain) => {
    if (!domain) return;
    const { x0, x1, y0, y1 } = domain;
    const filteredData = data.filter((s) => {
      const x = getDate(s).getTime();
      const y = getStockValue(s);
      return x > x0 && x < x1 && y > y0 && y < y1;
    });

    setFilteredData(filteredData);
  };

  return (
    <div style={{ position: "relative" }}>
      <svg width={width} height={height}>
        <AreaChart
          hideLeftAxis
          data={data}
          width={width}
          margin={{ ...margin }}
          yMax={yMax}
          xScale={dateScale}
          yScale={priceScale}
          gradientColor={theme.colors.lapislazuli}
        >
          <Brush
            innerRef={brushRef}
            xScale={dateScale}
            yScale={priceScale}
            width={xMax}
            height={yMax}
            margin={{ ...margin }}
            handleSize={8}
            resizeTriggerAreas={["left", "right"]}
            brushDirection="horizontal"
            initialBrushPosition={initialBrushPosition}
            onChange={onBrushChange}
            onClick={() => {
              setFilteredData(data);
            }}
            selectedBoxStyle={{
              fill: `url(#brush-gradient)`,
              stroke: theme.colors.primary,
            }}
          />
        </AreaChart>
      </svg>
    </div>
  );
};

export default SecondaryChart;
