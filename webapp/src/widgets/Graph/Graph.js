import React from 'react'
import { Line, defaults } from 'react-chartjs-2'
import moment from 'moment'

defaults.global.defaultFontSize = '8'

export const Graph = ({ data }) => {
	const labels = []
	const coordinates = []

	data &&
		data.forEach((each) => {
			labels.push(each.date)
			coordinates.push(each.value)
		})

	const formattedLabels = labels.map((eachDate) =>
		moment(eachDate).format('MMM Do').slice(0, -2)
	)

	const graphData = {
		labels: formattedLabels,
		datasets: [
			{
				label: '',
				fill: false,
				lineTension: 0.1,
				borderColor: 'rgba(44, 130, 201, 1)',
				borderWidth: 2,
				data: coordinates,
			},
		],
	}

	return (
		<div className='graph'>
			<Line
				data={graphData}
				options={{
					responsive: true,
					maintainAspectRatio: false,
					scales: {
						xAxes: [
							{
								gridLines: {
									display: false,
									drawBorder: false,
								},
							},
						],
						yAxes: [
							{
								gridLines: {
									display: false,
									drawBorder: false,
								},
								ticks: {
									suggestedMin: 1,
									suggestedMax: 16,
									stepSize: 2,
									beginAtZero: false,
								},
							},
						],
					},
					elements: {
						point: {
							radius: 0,
						},
					},
					legend: {
						display: false,
					},
				}}
			/>
		</div>
	)
}
