(() => {
  const dr = [
    data.psi.rail.II,
    data.psi.rail.IS,
    data.psi.rail.SI,
    data.psi.rail.SS,
  ];
  const dw = [
    data.psi.wheel.II,
    data.psi.wheel.IS,
    data.psi.wheel.SI,
    data.psi.wheel.SS,
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
      title: "Повреждаемость, mm³",
    },
  });
  Plotly.newPlot(plotW, plotDataW, {
    xaxis: {
      title: "Нагрузка, кН",
    },
    yaxis: {
      title: "Повреждаемость, mm³",
    },
  });
})();
