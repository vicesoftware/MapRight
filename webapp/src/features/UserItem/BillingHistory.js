import React from 'react'
import { Button, Image } from 'react-bootstrap'
import Cards from '../../widgets/Cards'
import Table from '../../widgets/Table'
import Icons from '../../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUserItemModal } from './userItem.slice'
import { selectedUserItemModal } from './userItem.selectors'
import { USERITEM_MODAL_TYPES } from '../UserItemModals/UserItemModals.constants'
import getUserItemModal from '../UserItemModals'

const BillingHistory = () => {
	const dispatch = useDispatch()
	const selectedModal = useSelector(selectedUserItemModal)

	const deleteButtonFormatter = (cell, row) => (
		<div className='d-inline-flex align-items-center'>
			{row.revenue === '$115' && (
				<Button variant='link' className='btn-auto p-0'>
					<Image
						src={Icons.alertIcon}
						alt='alert-icon'
						width='20'
						className='ml-2'
					/>
				</Button>
			)}
			<Button
				variant='link'
				className='btn-auto p-0'
				onClick={() =>
					dispatch(
						setSelectedUserItemModal(USERITEM_MODAL_TYPES.DELETE_INVOICE_MODAL)
					)
				}
			>
				<Image src={Icons.binIcon} alt='bin-icon' width='20' className='ml-2' />
			</Button>
			<Button variant='link' className='btn-auto p-0'>
				<Image
					src={Icons.arrowRightDarkIcon}
					alt='arrow-right-dark-icon'
					width='20'
					className='ml-2'
				/>
			</Button>
		</div>
	)

	const mockTableData = [
		{
			id: 1,
			invoice: '#123456789',
			date: '01/01/22',
			revenue: '$115',
		},
		{
			id: 2,
			invoice: '#123456789',
			date: '01/01/22',
			revenue: '$105',
		},
		{
			id: 3,
			invoice: '#123456789',
			date: '01/01/22',
			revenue: '$120',
		},
		{
			id: 4,
			invoice: '#123456789',
			date: '01/01/22',
			revenue: '$220',
		},
		{
			id: 5,
			invoice: '#123456789',
			date: '01/01/22',
			revenue: '$50',
		},
	]

	const Column = [
		{
			dataField: 'invoice',
			text: 'invoice',
			sort: true,
		},
		{
			dataField: 'date',
			text: 'date',
		},
		{
			dataField: 'revenue',
			text: 'Revenue',
		},
		{
			dataField: 'button',
			text: '',
			formatter: deleteButtonFormatter,
		},
	]

	return (
		<>
			{selectedModal && getUserItemModal(selectedModal)}
			<Cards className='mb-25' title='Billing History' buttonText='Add Invoice'>
				<Table
					keyField='id'
					data={mockTableData}
					columns={Column}
					classes='table-sidebar'
					headerWrapperClasses='f-12 text-uppercase text-secondary'
					bodyClasses='f-14 font-weight-normal'
				/>
			</Cards>
		</>
	)
}
export default BillingHistory
