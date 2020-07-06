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
import { useDispatch, useSelector } from 'react-redux'
import {
	selectAllSubscriptions,
	selectOutdatedSubscriptions,
} from './dashboard.selectors'
import BusyIndicator from '../../widgets/busyIndicator'
import {
	setSelectedSearchType,
	setSelectedOutdatedSubscriptions,
	setSelectedSearchValue,
} from './dashboard.slice'
import { SEARCH_TYPE } from './dashboard.constants'

const SubscriptionTable = () => {
	const history = useHistory()
	const allSubscriptions = useSelector(selectAllSubscriptions)
	const outdatedSubscription = useSelector(selectOutdatedSubscriptions)
	const dispatch = useDispatch()
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
							{SEARCH_TYPE.map((eachType) => (
								<Dropdown.Item
									key={eachType.label}
									eventKey={eachType.value}
									onSelect={(ev) => dispatch(setSelectedSearchType(ev))}
								>
									{eachType.label}
								</Dropdown.Item>
							))}
						</DropdownButton>
						<div className='flex-fill position-relative'>
							<Form.Control
								type='text'
								placeholder='Search...'
								onChange={(ev) =>
									dispatch(setSelectedSearchValue(ev.target.value))
								}
							/>
							<Image
								src={Icons.searchIcon}
								alt='search-icon'
								width='20'
								className='position-absolute search-icon'
							/>
						</div>
					</InputGroup>
					<Form>
						<Form.Check
							type='switch'
							id='custom-search'
							label='Outdated Subscriptions'
							onChange={() =>
								dispatch(
									setSelectedOutdatedSubscriptions(!outdatedSubscription)
								)
							}
						/>
					</Form>
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
