import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Cards from '../../widgets/cards/Cards'
import Graph from '../../widgets/cards/Graph'
import Icons from '../../assets/icons'

const ReportCard = () => {
	const data = [
		{
			title: 'User Churn Rate',
			graphValue: '4.2%',
			range: '10.5%',
			successValue: '60.1%',
			icon: Icons.arrowUpIcon,
		},
		{
			title: 'Life Time Value',
			graphValue: '$149',
			range: '$555',
			successValue: '27.01',
			icon: Icons.arrowDownIcon,
		},
		{
			title: 'Average Revenue Per User',
			graphValue: '$200',
			range: '$100',
			successValue: '200%',
			icon: Icons.arrowUpIcon,
		},
		{
			title: 'Total MRR',
			graphValue: '$50.5K',
			range: '$50.4K',
			successValue: '00.2%',
			icon: Icons.arrowUpIcon,
		},
		{
			title: 'Active User Rate',
			graphValue: '89.12%',
			range: '78.50%',
			successValue: '13.17%',
			icon: Icons.arrowUpIcon,
		},
		{
			title: 'Growth Rate',
			graphValue: '25.5%',
			range: '24%',
			successValue: '4.17%',
			icon: Icons.arrowUpIcon,
		},
	]
	return (
		<div className='container-fluid'>
			<Row>
				<Col lg={8} xl={9}>
					<Row>
						{data.map((entry, index) => (
							<Cards
								key={entry.values}
								title={entry.title}
								graphValue={entry.graphValue}
								range={entry.range}
								successValue={entry.successValue}
								icon={entry.icon}
							>
								{<Graph />}
							</Cards>
						))}
					</Row>
				</Col>
			</Row>
		</div>
	)
}
export default ReportCard
