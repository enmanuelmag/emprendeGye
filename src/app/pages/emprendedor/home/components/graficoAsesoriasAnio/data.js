export default {
  labels: [2017, 2018, 2019],
  datasets: [
    {
      label: 'Mentor: Luis Gutierrez',
      type: 'bar',
      stack: 'Base',
      backgroundColor: '#57BC82',
      hoverBackgroundColor: '#00CD57',
      data: [
        Math.random() * (50 - 20) + 20,
        Math.random() * (70 - 10) + 10,
        Math.random() * (80 - 30) + 30,
      ],
    },
  ],
}
