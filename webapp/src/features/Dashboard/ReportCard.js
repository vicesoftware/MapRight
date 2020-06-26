import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Cards from '../../widgets/Cards'
import Graph from '../../widgets/Graph'
import Icons from '../../assets/icons'
import classNames from 'classnames'
import {
	selectChurnRate,
	selectLifeTimeValue,
	selectTotalRevenue,
	selectActiveUserRate,
	selectGrowthRate,
	selectAverageRevenue,
} from './dashboard.selectors'
import { useSelector } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import BusyIndicator from '../../widgets/busyIndicator'

const ReportCard = () => {
	const allChurnRate = useSelector(selectChurnRate)
	const allLifeTimeValue = useSelector(selectLifeTimeValue)
	const allTotalRevenue = useSelector(selectTotalRevenue)
	const allAverageRevenue = useSelector(selectAverageRevenue)
	const allActiveUserRate = useSelector(selectActiveUserRate)
	const allGrowthRate = useSelector(selectGrowthRate)
	const reportCards = []
	!isEmpty(allChurnRate) && reportCards.splice(0, 0, allChurnRate)
	!isEmpty(allLifeTimeValue) && reportCards.splice(1, 0, allLifeTimeValue)
	!isEmpty(allAverageRevenue) && reportCards.splice(2, 0, allAverageRevenue)
	!isEmpty(allTotalRevenue) && reportCards.splice(3, 0, allTotalRevenue)
	!isEmpty(allActiveUserRate) && reportCards.splice(4, 0, allActiveUserRate)
	!isEmpty(allGrowthRate) && reportCards.splice(5, 0, allGrowthRate)

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
												? `From ${entry.totalValuePrevious}%`
												: `From $${entry.totalValuePrevious}`}
										</span>
									</div>
									<div className='d-flex align-items-center'>
										<h5
											className={classNames(
												'text-success gotham f-18 font-weight-bold mb-0 mr-1',
												{
													'text-danger':
														entry.totalValue < entry.totalValuePrevious,
												}
											)}
										>
											{`${entry.successValue}%`}
										</h5>
										<div className='arrow-bubble position-relative rounded-circle overflow-hidden d-flex align-items-center justify-content-center'>
											<img
												src={
													entry.totalValue < entry.totalValuePrevious
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
														'bg-danger':
															entry.totalValue < entry.totalValuePrevious,
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
