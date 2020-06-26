import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Cards from '../../widgets/Cards'
import Graph from '../../widgets/Graph'
import Icons from '../../assets/icons'
import classNames from 'classnames'

const ReportCard = ({ lifeTimeValue }) => {
	const reportCardArray = [
		{ data: [] },
		{ data: [] },
		{ data: [] },
		{ data: [] },
		{ data: [] },
	]

	reportCardArray.splice(1, 0, lifeTimeValue)

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
				{reportCardArray.map((entry, index) => (
					<Col key={entry.title} md={6} lg={6} xl={4}>
						<Cards key={title[index]} title={title[index]}>
							<div className='d-flex align-items-center justify-content-between mb-20'>
								<div className='flex-fill d-flex'>
									<h4 className='mb-0 gotham f-24 font-weight-bold graph-value'>
										{entry.totalValue}
									</h4>
									<span className='f-12 align-self-end gotham opacity-50'>
										{`From ${entry.totalValuePrevious}`}
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
							<Graph lifeTimeValueGraph={lifeTimeValue} index={index} />
						</Cards>
					</Col>
				))}
			</Row>
		</Col>
	)
}
export default ReportCard
