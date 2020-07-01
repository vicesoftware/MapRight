import React, { useState } from 'react'
import { Row, Col, Image, Dropdown } from 'react-bootstrap'
import Icons from '../../assets/icons'
import Table from '../../widgets/Table'
import classNames from 'classnames'
import { EVENTS_TYPE } from './userItem.constants'

const ActivityHistory = () => {
	const [dropdownTitle, setDropdownTitle] = useState('')

	const eventIconFormatter = (row) => {
		let credit = false
		let refunded = false
		let downgraded = false
		let paid = false
		let churn = false
		let upgraded = false
		let creation = false
		if (row.includes('Credit')) {
			credit = true
		} else if (row.includes('Refunded')) {
			refunded = true
		} else if (row.includes('Downgraded')) {
			downgraded = true
		} else if (row.includes('Paid')) {
			paid = true
		} else if (row.includes('Churn')) {
			churn = true
		} else if (row.includes('Upgraded')) {
			upgraded = true
		} else if (row.includes('Subscription Creation')) {
			creation = true
		}
		return (
			<div className='d-flex align-items-center'>
				<div className='arrow-bubble bubble-sm position-relative rounded-circle overflow-hidden d-flex align-items-center justify-content-center mr-2'>
					{credit && (
						<Image src={Icons.orangeDollarIcon} alt='orange-dollar-icon' />
					)}
					{refunded && (
						<Image src={Icons.blueDollarIcon} alt='blue-dollar-icon' />
					)}
					{downgraded && (
						<Image src={Icons.redArrowDownIcon} alt='red-arrow-down-icon' />
					)}
					{(paid || creation) && (
						<Image src={Icons.greenDollarIcon} alt='green-dollar-icon' />
					)}
					{churn && <Image src={Icons.redDollarIcon} alt='red-dollar-icon' />}
					{upgraded && (
						<Image src={Icons.greenArrowUpIcon} alt='green-arrow-up-icon' />
					)}
					<span
						className={classNames(
							{
								'bg-warning': credit,
								'bg-secondary': refunded,
								'bg-danger': downgraded || churn,
								'bg-success': paid || upgraded || creation,
							},
							'position-absolute h-100 w-100'
						)}
					></span>
				</div>
				{row}
			</div>
		)
	}
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
		},
	]
	const mockActivityHistory = [
		{
			id: 1,
			event: '$100 Credit',
			eventDate: 'May 24, 2020',
		},
		{
			id: 2,
			event: 'Refunded $70 from Invoice #123456789',
			eventDate: 'May 24, 2020',
		},
		{
			id: 3,
			event: 'Downgraded Account to Flex Plan',
			eventDate: 'May 24, 2020',
		},
		{
			id: 4,
			event: 'Paid $70',
			eventDate: 'May 24, 2020',
		},
		{
			id: 5,
			event: 'Involuntary Churn',
			eventDate: 'May 24, 2020',
		},
		{
			id: 6,
			event: 'Upgraded Account to Unlimited Plan',
			eventDate: 'May 24, 2020',
		},
		{
			id: 7,
			event: 'Subscription Creation',
			eventDate: 'May 24, 2020',
		},
	]
	const filteredMockActivityHistory = mockActivityHistory.filter((each) =>
		each.event.includes(dropdownTitle)
	)

	return (
		<>
			<Row className='mb-20'>
				<Col md={6} xl={6}>
					<h4 className='font-weight-bold f-24 mb-4 lh-40 gotham mb-md-0'>
						Activity History
					</h4>
				</Col>
				<Col md={6} lg={4} xl={3} className='ml-auto'>
					<Dropdown>
						<Dropdown.Toggle
							variant='outline-primary'
							className=' d-flex align-items-center justify-content-between w-100'
						>
							{dropdownTitle || 'Filter by Event Type'}
							<Image
								src={Icons.arrowDownDarkIcon}
								alt='arrow-down-dark-icon'
								width='20'
							/>
						</Dropdown.Toggle>
						<Dropdown.Menu className='dropdown-menu-right f-14 text-dark'>
							{EVENTS_TYPE.map((each) => (
								<Dropdown.Item
									eventKey={each}
									onSelect={(ev) => setDropdownTitle(ev)}
								>
									{each}
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
				</Col>
			</Row>
			<Table
				keyField='id'
				data={dropdownTitle ? filteredMockActivityHistory : mockActivityHistory}
				columns={activityHistoryColumn}
				classes='bg-white'
				headerWrapperClasses='f-12 text-uppercase bg-primary text-white'
				bodyClasses='f-14 font-weight-bold'
			/>
		</>
	)
}

export default ActivityHistory
