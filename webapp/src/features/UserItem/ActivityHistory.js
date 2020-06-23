import React, { useState } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Icons from '../../assets/icons'
import Table from '../../widgets/Table'
import classNames from 'classnames'
import { setSelectedEventType } from './userItem.slice'
import { useDispatch } from 'react-redux'

const ActivityHistory = () => {
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
	const [dropdownTitle, setDropdownTitle] = useState('Filter by Event Type')
	const dispatch = useDispatch()
	const handleClick = (e) => {
		setDropdownTitle(e)
		dispatch(setSelectedEventType({ eventType: e }))
	}

	return (
		<>
			<Row className='mb-20'>
				<Col md={6} xl={6}>
					<h4 className='font-weight-bold f-24 mb-4 lh-40 gotham mb-md-0'>
						Activity History
					</h4>
				</Col>
				<Col md={6} lg={4} xl={3} className='ml-auto'>
					<DropdownButton
						variant='outline-primary'
						className='d-flex align-items-center justify-content-between w-100'
						title={
							<div>
								{dropdownTitle}
								<Image
									src={Icons.arrowDownDarkIcon}
									alt='arrow-down-dark'
									width='20'
								/>
							</div>
						}
					>
						<Dropdown.Menu>
							<Dropdown.Item
								eventKey='Subscription Creation'
								onSelect={handleClick}
							>
								Subscription Creation
							</Dropdown.Item>
							<Dropdown.Item eventKey='Invoices paid' onSelect={handleClick}>
								Invoices paid
							</Dropdown.Item>
							<Dropdown.Item
								eventKey='Upgrading or downgrading'
								onSelect={handleClick}
							>
								Upgrading or downgrading
							</Dropdown.Item>
							<Dropdown.Item eventKey='Churn' onSelect={handleClick}>
								Churn
							</Dropdown.Item>
							<Dropdown.Item eventKey='Refunds' onSelect={handleClick}>
								Refunds
							</Dropdown.Item>
							<Dropdown.Item eventKey='Credits' onSelect={handleClick}>
								Credits
							</Dropdown.Item>
						</Dropdown.Menu>
					</DropdownButton>
				</Col>
			</Row>
			<Table
				keyField='id'
				data={mockActivityHistory}
				columns={activityHistoryColumn}
				classes='bg-white'
				headerWrapperClasses='f-12 text-uppercase bg-primary text-white'
				bodyClasses='f-14 font-weight-bold'
			/>
		</>
	)
}

export default ActivityHistory
