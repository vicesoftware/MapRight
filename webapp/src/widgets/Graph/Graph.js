import React from 'react'
import { Line, defaults } from 'react-chartjs-2'

defaults.global.defaultFontSize = '8'

const mockData = {
	label: ['April 1', 'April 6', 'April 11', 'April 16', 'April 21', 'April 21'],
	coordinatesData: [3, 10.0, 5.0, 9.0],
}

const data = {
	labels: mockData.label,
	datasets: [
		{
			label: '',
			fill: false,
			lineTension: 0.1,
			borderColor: 'rgba(44, 130, 201, 1)',
			borderWidth: 2,
			data: mockData.coordinatesData,
		},
	],
}

export default function Graph() {
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
