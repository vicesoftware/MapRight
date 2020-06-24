import React from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap'
import Icons from '../../assets/icons'
import Table from '../../widgets/Table'
import classNames from 'classnames'
import SortingCustomIcon from '../../widgets/SortingCustomIcon'
import { EVENTS } from './userItem.constants'
import { useSelector } from 'react-redux'
import { selectActivityHistory } from './userItem.selectors'
import moment from 'moment/moment'

const ActivityHistory = () => {
	const allActivityHistory = useSelector(selectActivityHistory)
	const eventIconFormatter = (row) => {
		let iconName = ''
		let iconClass = ''
		switch (true) {
			case row.includes(EVENTS.CREDIT):
				iconName = 'orangeDollarIcon'
				iconClass = 'bg-warning'
				break
			case row.includes(EVENTS.REFUNDED):
				iconName = 'blueDollarIcon'
				iconClass = 'bg-secondary'
				break
			case row.includes(EVENTS.DOWNGRADED):
				iconName = 'redArrowDownIcon'
				iconClass = 'bg-danger'
				break
			case row.includes(EVENTS.PAID):
			case row.includes(EVENTS.SUBSCRIPTION_CREATION):
				iconName = 'greenDollarIcon'
				iconClass = 'bg-success'
				break
			case row.includes(EVENTS.CHURN):
				iconName = 'redDollarIcon'
				iconClass = 'bg-danger'
				break
			case row.includes(EVENTS.UPGRADED):
				iconName = 'greenArrowUpIcon'
				iconClass = 'bg-success'
				break
			default:
				break
		}
		return (
			<div className='d-flex align-items-center'>
				<div className='arrow-bubble bubble-sm position-relative rounded-circle overflow-hidden d-flex align-items-center justify-content-center mr-2'>
					<Image src={Icons[iconName]} alt='events-icon' />
					<span
						className={classNames(iconClass, 'position-absolute h-100 w-100')}
					></span>
				</div>
				{row}
			</div>
		)
	}
	const dateFormatter = (row) => moment(row).format('LL')
	const activityHistoryColumn = [
		{
			dataField: 'event',
			text: '',
			formatter: eventIconFormatter,
		},
		{
			dataField: 'eventDate',
			text: 'Event Date',
			classes: 'event-date',
			sort: true,
			sortCaret: SortingCustomIcon,
			formatter: dateFormatter,
		},
	]
	return (
		<>
			<Row className='mb-20'>
				<Col md={6} xl={6}>
					<h4 className='font-weight-bold f-24 mb-4 lh-40 gotham mb-md-0'>
						Activity History
					</h4>
				</Col>
				<Col md={6} lg={4} xl={3} className='ml-auto'>
					<Button
						variant='outline-primary'
						className='d-flex align-items-center justify-content-between w-100'
					>
						Filter by Event Type
						<Image
							src={Icons.arrowDownDarkIcon}
							alt='arrow-down-dark'
							width='20'
						/>
					</Button>
				</Col>
			</Row>
			<Table
				keyField='id'
				data={allActivityHistory}
				columns={activityHistoryColumn}
				classes='bg-white'
				headerWrapperClasses='f-12 text-uppercase bg-primary text-white'
				bodyClasses='f-14 font-weight-bold'
			/>
		</>
	)
}

export default ActivityHistory
