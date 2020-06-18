import React from 'react'
import {
	Row,
	Col,
	Form,
	Image,
	InputGroup,
	Dropdown,
	Button,
	DropdownButton,
} from 'react-bootstrap'
import Table from '../../widgets/Table'
import './Dashboard.css'
import Icons from '../../assets/icons'
import classNames from 'classnames'
import { useHistory } from 'react-router-dom'
import SortingCustomIcon from '../../widgets/SortingCustomIcon'
import { useSelector } from 'react-redux'
import { selectAllSubscriptions } from './dashboard.selectors'
import BusyIndicator from '../../widgets/busyIndicator'

const SubscriptionTable = () => {
	const history = useHistory()
	const allSubscriptions = useSelector(selectAllSubscriptions)
	const viewButton = (cell, row) => (
		<div className='d-inline-flex align-items-center'>
			{row.userName === 'Test1' ? (
				<Button variant='link' className='btn-auto p-0'>
					<Image
						src={Icons.alertIcon}
						alt='alert-icon'
						width='20'
						className='ml-2'
					/>
				</Button>
			) : null}
			<Button
				variant='outline-primary'
				className='font-weight-normal btn-sm ml-3'
				onClick={() => history.push(`users/${row.id}`)}
			>
				View
			</Button>
		</div>
	)
	const NullCheckAlert = (row) => (
		<div className='d-flex align-items-center'>
			{row === 'Cody Miles' && (
				<Button variant='link' className='btn-auto p-0'>
					<Image
						src={Icons.alertIcon}
						alt='alert-icon'
						width='20'
						className='mr-1'
					/>
				</Button>
			)}
			{row}
		</div>
	)
	const columnGroupSortCaret = (order) => {
		return (
			<span className='order-arrow d-flex flex-column'>
				{(order === 'asc' || !order) && (
					<span className='arrow-up'>
						<Image
							src={Icons.caretIcon}
							alt='caret-icon'
							className='opacity-50 upArrow'
							width='10'
						/>
					</span>
				)}
				{(order === 'desc' || !order) && (
					<span className='arrow-down'>
						<Image
							src={Icons.caretIcon}
							alt='caret-icon'
							className='opacity-50'
							width='10'
						/>
					</span>
				)}
			</span>
		)
	}
	const columnGroupUserSortCaret = (order) => {
		return (
			<span className='order-arrow d-flex flex-column'>
				{(order === 'asc' || !order) && (
					<span className='arrow-up'>
						<Image
							src={Icons.caretDarkIcon}
							alt='caret-icon'
							className='opacity-50 upArrow'
							width='10'
						/>
					</span>
				)}
				{(order === 'desc' || !order) && (
					<span className='arrow-down'>
						<Image
							src={Icons.caretDarkIcon}
							alt='caret-icon'
							className='opacity-50'
							width='10'
						/>
					</span>
				)}
			</span>
		)
	}

	const groupColumn = [
		{
			dataField: 'groupName',
			text: 'Group Name',
			sort: true,
			sortCaret: SortingCustomIcon,
			formatter: NullCheckAlert,
		},
		{
			dataField: 'totalUsers',
			text: 'Total Users',
			sort: true,
			sortCaret: SortingCustomIcon,
		},
		{
			dataField: 'totalRevenue',
			text: 'Total Revenue',
			sort: true,
			sortCaret: SortingCustomIcon,
		},
		{
			dataField: 'mrr',
			text: 'Mrr',
			sort: true,
			sortCaret: SortingCustomIcon,
		},
		{
			dataField: 'arpu',
			text: 'Arpu',
			sort: true,
			sortCaret: SortingCustomIcon,
		},
		{
			dataField: 'churnRate',
			text: 'Churn Rate',
			sort: true,
			sortCaret: SortingCustomIcon,
		},
		{
			dataField: 'taxExempt',
			text: 'Tax Exempt?',
			sort: true,
			sortCaret: SortingCustomIcon,
		},
		{
			dataField: 'rate',
			text: 'Rate',
			sort: true,
			sortCaret: SortingCustomIcon,
		},
	]

	const groupUsersColumn = [
		{
			dataField: 'userName',
			text: 'User Name',
			sort: true,
			sortCaret: SortingCustomIcon,
			userColumn: true,
		},
		{
			dataField: 'subscriptionStatus',
			text: 'Subscription Status',
			sort: true,
			sortCaret: SortingCustomIcon,
			userColumn: true,
		},
		{
			dataField: 'plan',
			text: 'Plan',
			sort: true,
			sortCaret: SortingCustomIcon,
			userColumn: true,
		},
		{
			dataField: 'addOns',
			text: 'Add-Ons',
			sort: true,
			sortCaret: SortingCustomIcon,
			userColumn: true,
		},
		{
			dataField: 'totalRevenue',
			text: 'Total Revenue',
			sort: true,
			sortCaret: SortingCustomIcon,
			userColumn: true,
		},
		{
			dataField: 'userRole',
			text: 'User Role',
			sort: true,
			sortCaret: SortingCustomIcon,
			userColumn: true,
		},
		{
			dataField: 'view',
			text: '',
			formatter: viewButton,
		},
	]
	const expandRow = {
		// eslint-disable-next-line
		renderer: (row) => (
			<Table
				keyField='id'
				data={row.data}
				columns={groupUsersColumn}
				classes='bg-light m-0'
				headerWrapperClasses='f-12 text-uppercase'
			/>
		),
		showExpandColumn: true,
		expandColumnPosition: 'right',
		// eslint-disable-next-line
		expandByColumnOnly: true,
		// eslint-disable-next-line
		expandHeaderColumnRenderer: ({ isAnyExpands }) => <div></div>,
		// eslint-disable-next-line
		expandColumnRenderer: ({ expanded }) => {
			return (
				<Button
					variant='link'
					className='btn-auto p-0 d-inline-flex align-items-center'
				>
					{expanded ? 'CLOSE' : 'EXPAND'}
					<Image
						src={Icons.arrowDownDarkIcon}
						width='14'
						className={classNames('ml-2', { invertArrow: expanded })}
					/>
				</Button>
			)
		},
	}
	return (
		<>
			<Row className='py-30'>
				<Col lg={5} xl={7}>
					<h4 className='font-weight-bold f-24 mb-4 lh-40 gotham mb-lg-0'>
						Subscriptions
					</h4>
				</Col>
				<Col lg={7} xl={5}>
					<InputGroup className='search-block'>
						<DropdownButton
							as={InputGroup.Prepend}
							title='Search Groups'
							variant='primary'
							id='input-dropdown-basic'
						>
							<Dropdown.Item>Plan</Dropdown.Item>
							<Dropdown.Item>E-mail</Dropdown.Item>
						</DropdownButton>
						<div className='flex-fill position-relative'>
							<Form.Control type='text' placeholder='Search...' />
							<Image
								src={Icons.searchIcon}
								alt='search-icon'
								width='20'
								className='position-absolute search-icon'
							/>
						</div>
					</InputGroup>
				</Col>
			</Row>
			<BusyIndicator>
				<Table
					keyField='id'
					data={allSubscriptions}
					columns={groupColumn}
					expandRow={expandRow}
					classes='bg-white'
					headerWrapperClasses='f-12 text-uppercase bg-primary text-white'
					bodyClasses='f-14 font-weight-bold'
				/>
			</BusyIndicator>
		</>
	)
}

export default SubscriptionTable
