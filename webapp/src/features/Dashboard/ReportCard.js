import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Cards from '../../widgets/Cards'
import Graph from '../../widgets/Graph'
import Icons from '../../assets/icons'
import classNames from 'classnames'

const ReportCard = () => {
	const mockData = [
		{
			title: 'User Churn Rate',
			graphValue: '4.2%',
			range: '10.5%',
			successValue: '60.1%',
		},
		{
			title: 'Lifetime Value',
			graphValue: '$149',
			range: '$555',
			successValue: '27.01%',
		},
		{
			title: 'Average Revenue Per User',
			graphValue: '$200',
			range: '$100',
			successValue: '200%',
		},
		{
			title: 'Total MRR',
			graphValue: '$50.5K',
			range: '$50.4K',
			successValue: '00.2%',
		},
		{
			title: 'Active User Rate',
			graphValue: '89.12%',
			range: '78.50%',
			successValue: '13.17%',
		},
		{
			title: 'Growth Rate',
			graphValue: '25.5%',
			range: '24%',
			successValue: '4.17%',
		},
	]

	return (
		<Col lg={8} xl={9}>
			<Row>
				{mockData.map((entry, index) => (
					<Col key={entry.title} md={6} lg={6} xl={4}>
						<Cards key={entry.title} title={entry.title}>
							<div className='d-flex align-items-center justify-content-between mb-20'>
								<div className='flex-fill d-flex'>
									<h4 className='mb-0 gotham f-24 font-weight-bold graph-value'>
										{entry.graphValue}
									</h4>
									<span className='f-12 align-self-end gotham opacity-50'>
										{`From ${entry.range}`}
									</span>
								</div>
								<div className='d-flex align-items-center'>
									<h5
										className={classNames(
											'text-success gotham f-18 font-weight-bold mb-0 mr-1',
											{
												'text-danger': entry.successValue === '27.01%',
											}
										)}
									>
										{entry.successValue}
									</h5>
									<div className='arrow-bubble position-relative rounded-circle overflow-hidden d-flex align-items-center justify-content-center'>
										<img
											src={
												entry.successValue === '27.01%'
													? Icons.arrowDownIcon
													: Icons.arrowUpIcon
											}
											alt=''
											height='16'
										/>
										<span className='bg-success position-absolute h-100 w-100'></span>
									</div>
								</div>
							</div>
							<Graph />
						</Cards>
					</Col>
				))}
			</Row>
		</Col>
	)
}
export default ReportCard
