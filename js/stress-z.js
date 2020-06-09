(() => {
  const dr = [
    data.stress.z.rail.II,
    data.stress.z.rail.IS,
    data.stress.z.rail.SI,
    data.stress.z.rail.SS,
  ];
  const dw = [
    data.stress.z.wheel.II,
    data.stress.z.wheel.IS,
    data.stress.z.wheel.SI,
    data.stress.z.wheel.SS,
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
