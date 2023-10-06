import CanvasJSReact from "@canvasjs/react-charts";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Transactionchart() {
  const user = useSelector((state) => state.user.user);

  const transactions = user
    ? user.transactions.map((t) => ({
        y: parseInt(t.amount),
        x: new Date(t.timestamp),
      }))
    : "";

  var CanvasJS = CanvasJSReact.CanvasJS;
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const options = {
    animationEnabled: true,
    zoomEnabled: true,
    theme: "light2",
    title: {
      text: "Transactions Chart",
    },
    axisX: {
      valueFormatString: "DD MMM ",
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
      },
    },
    axisY: {
      valueFormatString: "Rs ##0",
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
        labelFormatter: function (e) {
          return "" + CanvasJS.formatNumber(e.value, "##0.00");
        },
      },
    },
    data: [
      {
        type: "area",
        xValueFormatString: "DD MMM",
        yValueFormatString: "##0.00",
        dataPoints: transactions,
      },
    ],
  };

  return (
    <div className="h-[500px]">
      <CanvasJSChart options={options}></CanvasJSChart>
    </div>
  );
}

export default Transactionchart;
