(() => {
  const dr = [
    data.stain.y.rail.II,
    data.stain.y.rail.IS,
    data.stain.y.rail.SI,
    data.stain.y.rail.SS,
  ];
  const dw = [
    data.stain.y.wheel.II,
    data.stain.y.wheel.IS,
    data.stain.y.wheel.SI,
    data.stain.y.wheel.SS,
  ];
  const multiplier = 100000;

  const plotDataR = dr.map((y, i) => {
    return {
      y: y.map((e) => e / multiplier),
      type: "scatter",
      x: [26.968, 73.55, 122.6, 147],
      name: getTraceName(i),
    };
  });
  const plotDataW = dw.map((y, i) => {
    return {
      y: y.map((e) => e / multiplier),
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
      title: "Деформации",
    },
  });
  Plotly.newPlot(plotW, plotDataW, {
    xaxis: {
      title: "Нагрузка, кН",
    },
    yaxis: {
      title: "Деформации",
    },
  });
})();
