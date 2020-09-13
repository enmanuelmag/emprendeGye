export default {
        labels: ['Agtech', 'Fintech', 'Biotech', 'Healthtech'],
        datasets: [
            {
                label: 'Inversionistas Ángeles',
                type: 'doughnut',
                backgroundColor: [
                    '#FFD87C',
                    '#FF6384',
                    '#4AB0F4',
                    '#FFAD5C'
                ],
                hoverBackgroundColor: [
                    '#FFB400',
                    '#FF2452',
                    '#007BCF',
                    '#FF7F00'
                ],
                data: [ 10, 50, 35, 20 ],
            }
        ]
}