const d = [
  data.contact_presuare.II,
  data.contact_presuare.IS,
  data.contact_presuare.SI,
  data.contact_presuare.SS,
];
const plotData = d.map((y, i) => {
  return {
    y,
    type: "scatter",
    x: [26.968, 73.55, 122.6, 147],
    name: getTraceName(i),
  };
});

const plot = document.createElement("div");
plot.style.width = "600px";
plot.style.height = "500px";
document.body.appendChild(plot);

Plotly.newPlot(plot, plotData, {
  xaxis: {
    title: "Нагрузка, кН",
  },
  yaxis: {
    title: "Напряжение, MPa",
  },
});
