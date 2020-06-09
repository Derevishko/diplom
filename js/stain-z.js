const dr = [
  data.stain.z.rail.II,
  data.stain.z.rail.IS,
  data.stain.z.rail.SI,
  data.stain.z.rail.SS,
];
const dw = [
  data.stain.z.wheel.II,
  data.stain.z.wheel.IS,
  data.stain.z.wheel.SI,
  data.stain.z.wheel.SS,
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
