import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Cards from '../../widgets/Cards'
import Graph from '../../widgets/Graph'
import Icons from '../../assets/icons'
import classNames from 'classnames'
import { selectChurnRate } from './dashboard.selectors'
import { useSelector } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import BusyIndicator from '../../widgets/busyIndicator'

const ReportCard = () => {
	const allChurnRate = useSelector(selectChurnRate)
	const reportCards = [
		{
			totalValue: 149,
			from: 555,
			successValue: 27.01,
			upgrade: true,
			data: [],
		},
		{ totalValue: 200, from: 100, successValue: 200, upgrade: true, data: [] },
		{
			totalValue: 50.5,
			from: 50.4,
			successValue: 0.2,
			upgrade: true,
			data: [],
		},
		{
			totalValue: 89.12,
			from: 78.5,
			successValue: 13.17,
			upgrade: true,
			data: [],
		},
		{ totalValue: 25.5, from: 24, successValue: 4.17, upgrade: true, data: [] },
	]
	!isEmpty(allChurnRate) && reportCards.splice(0, 0, allChurnRate)

	const title = [
		'User Churn Rate',
		'Lifetime Value',
		'Average Revenue Per User',
		'Total MRR',
		'Active User Rate',
		'Growth Rate',
	]

	return (
		<BusyIndicator>
			<Col lg={8} xl={9}>
				<Row>
					{reportCards.map((entry, index) => (
						<Col key={entry.totalValue} md={6} lg={6} xl={4}>
							<Cards key={title[index]} title={title[index]}>
								<div className='d-flex align-items-center justify-content-between mb-20'>
									<div className='flex-fill d-flex'>
										<h4 className='mb-0 gotham f-24 font-weight-bold graph-value'>
											{index === 0 || index === 4 || index === 5
												? `${entry.totalValue}%`
												: `$${entry.totalValue}`}
										</h4>
										<span className='f-12 align-self-end gotham opacity-50'>
											{index === 0 || index === 4 || index === 5
												? `From ${entry.from}%`
												: `From $${entry.from}`}
										</span>
									</div>
									<div className='d-flex align-items-center'>
										<h5
											className={classNames(
												'text-success gotham f-18 font-weight-bold mb-0 mr-1',
												{
													'text-danger': !entry.upgrade,
												}
											)}
										>
											{`${entry.successValue}%`}
										</h5>
										<div className='arrow-bubble position-relative rounded-circle overflow-hidden d-flex align-items-center justify-content-center'>
											<img
												src={
													!entry.upgrade
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
														'bg-danger': !entry.upgrade,
													}
												)}
											></span>
										</div>
									</div>
								</div>
								<Graph data={entry.data} index={index} />
							</Cards>
						</Col>
					))}
				</Row>
			</Col>
		</BusyIndicator>
	)
}
export default ReportCard
