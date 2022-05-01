import { AxisBottom, AxisLeft } from "@visx/axis";
import { Group } from "@visx/group";
import { LinePath } from "@visx/shape";
import React from "react";
import { AXIS_BOTTOM_TICK_LABEL_PROPS, AXIS_COLOR, AXIS_LEFT_TICK_LABEL_PROPS } from "./constants.ts";


const LineChart = ({ data, width, yMax, margin, xScale, yScale, hideBottomAxis = false, hideLeftAxis = false, stroke, top, left, xTickFormat, children }) => {
  if (!data) return null;
  // accessors
  const getDate = (d) => new Date(d?.date);
  const getStockValue = (d) => d?.price;

  if (width < 10) return null;
  return (
    <Group left={left || margin.left} top={top || margin.top}>
      <LinePath data={data} x={(d) => xScale(getDate(d)) || 0} y={(d) => yScale(getStockValue(d)) || 0} strokeWidth={1.5} stroke={stroke} />
      {!hideBottomAxis && <AxisBottom top={yMax + margin.top} scale={xScale} numTicks={width > 520 ? 10 : 5} stroke={AXIS_COLOR} tickStroke={AXIS_COLOR} tickLabelProps={() => AXIS_BOTTOM_TICK_LABEL_PROPS} />}
      {!hideLeftAxis && (
        <AxisLeft
          scale={yScale}
          numTicks={5}
          stroke={AXIS_COLOR}
          tickStroke={AXIS_COLOR}
          tickLabelProps={() => AXIS_LEFT_TICK_LABEL_PROPS}
          tickFormat={(d) => {
            return xTickFormat ? xTickFormat(d) : d;
          }}
        />
      )}
      {children}
    </Group>
  );
};

export default LineChart;
