import React from 'react'
import { Line, defaults } from 'react-chartjs-2'
import moment from 'moment'

defaults.global.defaultFontSize = '8'

export const Graph = ({ totalRevenue, index }) => {
	const label = []
	const formattedLabels = []
	const totalRevenueArray = []
	const length = totalRevenue.data && totalRevenue.data.length
	const labelCount = 5
	const increment = Math.round(length / labelCount)

	totalRevenue.data &&
		(length > 5
			? totalRevenue.data.map((entry, index) => {
					if (Math.floor(index % increment) === 0) {
						return (
							label.push(totalRevenue.data[index].endDate),
							totalRevenueArray.push(totalRevenue.data[index].revenueAtEndDate)
						)
					}
					return null
			  })
			: totalRevenue.data.map((entry, index) => {
					return (
						label.push(totalRevenue.data[index].endDate),
						totalRevenueArray.push(totalRevenue.data[index].revenueAtEndDate)
					)
			  }))

	label.map((date) => formattedLabels.push(moment(date).format('MMM Do')))

	const handleData = (index) => {
		switch (index) {
			case 4:
				return totalRevenueArray
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
