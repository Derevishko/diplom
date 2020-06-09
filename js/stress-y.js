(() => {
  const dr = [
    data.stress.y.rail.II,
    data.stress.y.rail.IS,
    data.stress.y.rail.SI,
    data.stress.y.rail.SS,
  ];
  const dw = [
    data.stress.y.wheel.II,
    data.stress.y.wheel.IS,
    data.stress.y.wheel.SI,
    data.stress.y.wheel.SS,
  ];

  const plotDataR = dr.map((y, i) => {
    console.log(getTraceName(i));
    return {
      y,
      type: "scatter",
      x: [26.968, 73.55, 122.6, 147],
      name: getTraceName(i),
    };
  });
  const plotDataW = dw.map((y, i) => {
    console.log(getTraceName(i));
    return {
      y,
      type: "scatter",
      x: [26.968, 73.55, 122.6, 147],
      name: getTraceName(i),
    };
  });

  const plotR = document.createElement("div");
  plotR.style.width = "600px";
  plotR.style.height = "500px";
  document.body.appendChild(plotR);

  const plotW = document.createElement("div");
  plotW.style.width = "600px";
  plotW.style.height = "500px";
  document.body.appendChild(plotW);

  Plotly.newPlot(plotR, plotDataR, {
    xaxis: {
      title: "Нагрузка, кН",
    },
    yaxis: {
      title: "Напряжение, MPa",
    },
  });
  Plotly.newPlot(plotW, plotDataW, {
    xaxis: {
      title: "Нагрузка, кН",
    },
    yaxis: {
      title: "Напряжение, MPa",
    },
  });
})();
