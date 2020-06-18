import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Cards from '../../widgets/Cards'
import Graph from '../../widgets/Graph'
import Icons from '../../assets/icons'
import classNames from 'classnames'

const ReportCard = ({ totalRevenue }) => {
	const mockData = [
		{
			graphValue: '4.2%',
			range: '10.5%',
			successValue: '60.1%',
		},
		{
			graphValue: '$149',
			range: '$555',
			successValue: '27.01%',
		},
		{
			graphValue: '$200',
			range: '$100',
			successValue: '200%',
		},
		{
			graphValue: '$50.5K',
			range: '$50.4K',
			successValue: '00.2%',
		},
		{
			graphValue: '89.12%',
			range: '78.50%',
			successValue: '13.17%',
		},
		{
			graphValue: '25.5%',
			range: '24%',
			successValue: '4.17%',
		},
	]

	const title = [
		'User Churn Rate',
		'Lifetime Value',
		'Average Revenue Per User',
		'Total MRR',
		'Active User Rate',
		'Growth Rate',
	]

	return (
		<Col lg={8} xl={9}>
			<Row>
				{mockData.map((entry, index) => (
					<Col key={entry.title} md={6} lg={6} xl={4}>
						<Cards key={title[index]} title={title[index]}>
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
										<span
											className={classNames(
												'bg-success position-absolute h-100 w-100',
												{
													'bg-danger': entry.successValue === '27.01%',
												}
											)}
										></span>
									</div>
								</div>
							</div>
							<Graph totalRevenue={totalRevenue} index={index} />
						</Cards>
					</Col>
				))}
			</Row>
		</Col>
	)
}
export default ReportCard
