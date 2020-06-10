import React from 'react'
import {
	Row,
	Col,
	Form,
	Image,
	InputGroup,
	Dropdown,
	Button,
} from 'react-bootstrap'
import Table from '../../widgets/Table'
import './Dashboard.css'
import Icons from '../../assets/icons'
import { setSelectedDashboardModal } from './dashboard.slice'
import { selectedDashboardModal } from './dashboard.selectors'
import getDashboardModal from '../DashboardModals'
import { useDispatch, useSelector } from 'react-redux'
import { DASHBOARD_MODAL_TYPES } from '../DashboardModals/DashboardModals.constants'
import classNames from 'classnames'

const SubscriptionTable = () => {
	const dispatch = useDispatch()
	const selectedModal = useSelector(selectedDashboardModal)
	const viewButton = () => (
		<div className='d-inline-flex align-items-center'>
			<Button
				variant='link'
				className='btn-auto p-0'
				onClick={() =>
					dispatch(
						setSelectedDashboardModal(
							DASHBOARD_MODAL_TYPES.MANAGE_SUBSCRIPTION_MODAL
						)
					)
				}
			>
				<Image src={Icons.editBlueIcon} width='20' className='ml-2' />
			</Button>
			<Button
				variant='link'
				className='btn-auto p-0'
				onClick={() =>
					dispatch(
						setSelectedDashboardModal(
							DASHBOARD_MODAL_TYPES.CANCEL_SUBSCRIPTION_MODAL
						)
					)
				}
			>
				<Image src={Icons.closeIcon} width='20' className='ml-2' />
			</Button>
			<Button
				variant='outline-primary'
				className='font-weight-normal btn-sm ml-3'
			>
				View
			</Button>
		</div>
	)
	const manageRate = (row) => (
		<div className='d-flex align-items-center'>
			<Button
				variant='link'
				className='btn-auto p-0'
				onClick={() =>
					dispatch(
						setSelectedDashboardModal(
							DASHBOARD_MODAL_TYPES.MANAGE_SUBSCRIPTION_RATE_MODAL
						)
					)
				}
			>
				<Image
					src={Icons.editDarkIcon}
					alt='edit-dark-icon'
					width='14'
					className='mr-1'
				/>
			</Button>
			{row}
		</div>
	)
	const mockTableGroupData = [
		{
			id: 1,
			groupName: 'Cody Miles',
			totalUsers: 5,
			totalRevenue: '$20205',
			mrr: '$400',
			arpu: '$50',
			churnRate: '11%',
			taxExempt: 'No',
			rate: '$25',
		},
		{
			id: 2,
			groupName: 'Any Miles',
			totalUsers: 5,
			totalRevenue: '$20205',
			mrr: '$400',
			arpu: '$50',
			churnRate: '11%',
			taxExempt: 'No',
			rate: '$25',
		},
		{
			id: 3,
			groupName: 'Kaylie Meek',
			totalUsers: 5,
			totalRevenue: '$20205',
			mrr: '$400',
			arpu: '$50',
			churnRate: '11%',
			taxExempt: 'No',
			rate: '$25',
		},
		{
			id: 4,
			groupName: 'AbbyNash',
			totalUsers: 5,
			totalRevenue: '$20205',
			mrr: '$400',
			arpu: '$50',
			churnRate: '11%',
			taxExempt: 'Yes',
			rate: '$25',
		},
	]

	const mockTableGroupUsersData = [
		{
			id: 1,
			userName: 'Test1',
			subscriptionStatus: 'active',
			plan: 'Flex',
			addOns: 5,
			totalRevenue: 2050,
			userRole: 'Owner',
		},
		{
			id: 2,
			userName: 'Test2',
			subscriptionStatus: 'active',
			plan: 'Flex',
			addOns: 5,
			totalRevenue: 2050,
			userRole: 'Owner',
		},
		{
			id: 3,
			userName: 'Test3',
			subscriptionStatus: 'active',
			plan: 'Flex',
			addOns: 5,
			totalRevenue: 2050,
			userRole: 'Owner',
		},
	]

	const groupColumn = [
		{
			dataField: 'groupName',
			text: 'Group Name',
			sort: true,
		},
		{
			dataField: 'totalUsers',
			text: 'Total Users',
			sort: true,
		},
		{
			dataField: 'totalRevenue',
			text: 'Total Revenue',
			sort: true,
		},
		{
			dataField: 'mrr',
			text: 'Mrr',
			sort: true,
		},
		{
			dataField: 'arpu',
			text: 'Arpu',
			sort: true,
		},
		{
			dataField: 'churnRate',
			text: 'Churn Rate',
			sort: true,
		},
		{
			dataField: 'taxExempt',
			text: 'Tax Exempt?',
			sort: true,
		},
		{
			dataField: 'rate',
			text: 'Rate',
			sort: true,
			formatter: manageRate,
		},
	]

	const groupUsersColumn = [
		{
			dataField: 'userName',
			text: 'User Name',
			sort: true,
		},
		{
			dataField: 'subscriptionStatus',
			text: 'Subscription Status',
			sort: true,
		},
		{
			dataField: 'plan',
			text: 'Plan',
			sort: true,
		},
		{
			dataField: 'addOns',
			text: 'Add-Ons',
			sort: true,
		},
		{
			dataField: 'totalRevenue',
			text: 'Total Revenue',
			sort: true,
		},
		{
			dataField: 'userRole',
			text: 'User Role',
			sort: true,
		},
		{
			dataField: 'view',
			text: '',
			formatter: viewButton,
		},
	]
	const expandRow = {
		// eslint-disable-next-line
		renderer: () => (
			<Table
				keyField='id'
				data={mockTableGroupUsersData}
				columns={groupUsersColumn}
				classes='bg-light'
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
			{selectedModal && getDashboardModal(selectedModal)}
			<Row className='py-30'>
				<Col lg={5} xl={7}>
					<h4 className='font-weight-bold f-24 mb-4 lh-40 gotham mb-lg-0'>
						Subscriptions
					</h4>
				</Col>
				<Col lg={7} xl={5}>
					<InputGroup className='search-block'>
						<InputGroup.Prepend>
							<Dropdown>
								<Dropdown.Toggle
									variant='primary'
									data-toggle='dropdown'
									aria-haspopup='true'
									aria-expanded='false'
								>
									Search Groups
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item>Action</Dropdown.Item>
									<Dropdown.Item>Another action</Dropdown.Item>
									<Dropdown.Item>Something else here</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item>Separated link</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</InputGroup.Prepend>
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
			<Table
				keyField='id'
				data={mockTableGroupData}
				columns={groupColumn}
				expandRow={expandRow}
				classes='bg-white'
				headerWrapperClasses='f-12 text-uppercase bg-primary text-white'
				bodyClasses='f-14 font-weight-bold'
			/>
		</>
	)
}

export default SubscriptionTable
