(() => {
  const dr = [
    data.fi.rail.II,
    data.fi.rail.IS,
    data.fi.rail.SI,
    data.fi.rail.SS,
  ];
  const dw = [
    data.fi.wheel.II,
    data.fi.wheel.IS,
    data.fi.wheel.SI,
    data.fi.wheel.SS,
  ];

  const plotDataR = dr.map((y, i) => {
    return {
      y: y.map((e) => e),
      type: "scatter",
      x: [26.968, 73.55, 122.6, 147],
      name: getTraceName(i),
    };
  });
  const plotDataW = dw.map((y, i) => {
    return {
      y: y.map((e) => e),
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
      title: "Опасный объем, mm³",
    },
  });
  Plotly.newPlot(plotW, plotDataW, {
    xaxis: {
      title: "Нагрузка, кН",
    },
    yaxis: {
      title: "Опасный объем, mm³",
    },
  });
})();
