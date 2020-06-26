import React from 'react'
import { Line, defaults } from 'react-chartjs-2'
import moment from 'moment'

defaults.global.defaultFontSize = '8'

export const Graph = ({ lifeTimeValueGraph, index }) => {
	const label = []
	const formattedLabels = []
	const lifeTimeValueArray = []

	lifeTimeValueGraph.data &&
		lifeTimeValueGraph.data.map((entry, index) => {
			return (
				label.push(lifeTimeValueGraph.data[index].date),
				lifeTimeValueArray.push(lifeTimeValueGraph.data[index].LifetimeValue)
			)
		})

	label.map((date) => formattedLabels.push(moment(date).format('MMM Do')))

	const handleData = (index) => {
		switch (index) {
			case 2:
				return lifeTimeValueArray
			default:
				return null
		}
	}

	const data = {
		labels: formattedLabels,
		datasets: [
			{
				label: '',
				fill: false,
				lineTension: 0.1,
				borderColor: 'rgba(44, 130, 201, 1)',
				borderWidth: 2,
				data: handleData(index + 1),
			},
		],
	}

	return (
		<div className='graph'>
			<Line
				data={data}
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
