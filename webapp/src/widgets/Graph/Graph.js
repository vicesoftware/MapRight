import React from 'react'
import { Line, defaults } from 'react-chartjs-2'
import moment from 'moment'

defaults.global.defaultFontSize = '8'

export const Graph = ({ growthRate, index }) => {
	const label = []
	const formattedLabels = []
	const growthRateArray = []
	const length = growthRate.data && growthRate.data.length
	const labelCount = 5
	let increment = Math.round(length / labelCount)
	increment = increment === 1 ? increment + 1 : increment

	growthRate.data &&
		(length > 5
			? growthRate.data.map((entry, index) => {
					if (Math.floor(index % increment) === 0) {
						return (
							label.push(growthRate.data[index].Date),
							growthRateArray.push(growthRate.data[index].GrowthRate)
						)
					}
					return null
			  })
			: growthRate.data.map((entry, index) => {
					return (
						label.push(growthRate.data[index].Date),
						growthRateArray.push(growthRate.data[index].GrowthRate)
					)
			  }))

	label.map((date) => formattedLabels.push(moment(date).format('MMM Do')))

	const handleData = (index) => {
		switch (index) {
			case 6:
				return growthRateArray
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
