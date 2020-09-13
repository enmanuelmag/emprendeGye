export default {
        labels: [2014, 2015, 2016, 2017, 2018, 2019],
        datasets: [
            {
                label: "Fintech",
                type: "bar",
                stack: "Base",
                backgroundColor: "#eece01",
                data: [ 2000, 3000, 4000, 5000, 6000, 8000],
            }, 
            {
                label: "Agtech",
                type: "bar",
                stack: "Base",
                backgroundColor: "#87d84d",
                data: [ 500, 1000, 1500, 2000, 2500, 3000 ],
            }, 
            {
                label: "Healthtech",
                type: "bar",
                stack: "Base",
                backgroundColor: "#f8981f",
                data: [ 1500, 3000, 4000, 5500, 5700, 6000 ],
            }, 
            {
                label: "Biotech",
                type: "bar",
                stack: "Base",
                backgroundColor: "#00b300",
                data: [ 700, 1000, 1400, 2000, 2300, 3000 ]
            }
        ]
}