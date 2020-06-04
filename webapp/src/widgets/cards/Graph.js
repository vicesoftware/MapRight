import React from 'react'
import { Line } from 'react-chartjs-2'

const data = {
	labels: ['January', 'February', 'March', 'April', 'May'],
	datasets: [
		{
			label: '',
			fill: false,
			lineTension: 0.5,
			backgroundColor: 'rgba(75,192,192,1)',
			borderColor: 'rgba(0,0,0,1)',
			borderWidth: 2,
			data: [65, 59, 80, 81, 56],
		},
	],
}

export default function Graph() {
	return (
		<div className='graph'>
			<Line
				data={data}
				options={{
					title: {
						display: true,
						text: 'Average Rainfall per month',
						fontSize: 5,
					},
					maintainAspectRatio: false,
					legend: {
						display: true,
						position: 'right',
					},
				}}
			/>
		</div>
	)
}
