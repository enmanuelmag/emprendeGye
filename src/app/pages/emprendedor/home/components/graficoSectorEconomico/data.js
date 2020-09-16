export default {
        labels: [2014, 2015, 2016, 2017, 2018, 2019],
        datasets: [
            {
                label: "Fintech",
                type: "bar",
                stack: "Base",
                backgroundColor: "#eece01",
                data: [ 0, 1, 1, 2, 0, 1],
            }, 
            {
                label: "Agtech",
                type: "bar",
                stack: "Base",
                backgroundColor: "#87d84d",
                data: [ 1, 1, 2, 1, 1, 2 ],
            }, 
            {
                label: "Healthtech",
                type: "bar",
                stack: "Base",
                backgroundColor: "#f8981f",
                data: [ 1, 0, 1, 1, 1, 0 ],
            }, 
            {
                label: "Biotech",
                type: "bar",
                stack: "Base",
                backgroundColor: "#00b300",
                data: [ 1, 1, 1, 2, 1, 1 ]
            }
        ]
}