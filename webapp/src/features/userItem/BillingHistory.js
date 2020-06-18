import React from 'react'
import { Button } from 'react-bootstrap'
import Cards from '../../widgets/cards'
import Table from '../../widgets/Table'
import Icons from '../../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUserItemModal } from './userItem.slice'
import { selectedUserItemModal } from './userItem.selectors'
import { USERITEM_MODAL_TYPES } from './userItemModals.constants'
import getUserItemModal from '../UserItemModals'
import './BillingHistory.css'

const BillingHistory = ({ selectedBillingHistory }) => {
	const dispatch = useDispatch()
	const selectedModal = useSelector(selectedUserItemModal)

	const viewButtonFormatter = (cell, row) => (
		<div className='d-inline-flex align-items-center'>
			{row.status === 'Paid' && (
				<Button
					className='btn-auto'
					onClick={() =>
						dispatch(
							setSelectedUserItemModal(
								USERITEM_MODAL_TYPES.INVOICE_REFUND_MODAL
							)
						)
					}
				>
					<img src={Icons.refundIcon} alt='' width='20' className='ml-2' />
				</Button>
			)}
			<Button className='btn-auto'>
				<img src={Icons.downloadIcon} alt='' width='20' className='ml-2' />
			</Button>
		</div>
	)

	const Column = [
		{
			dataField: 'InvoiceId',
			text: 'Invoice',
			sort: true,
		},
		{
			dataField: 'StartDate',
			text: 'Date',
		},
		{
			dataField: 'Revenue',
			text: 'Revenue',
		},
		{
			dataField: 'button',
			text: '',
			formatter: viewButtonFormatter,
		},
	]

	return (
		<>
			{selectedModal && getUserItemModal(selectedModal)}
			<Cards className='mb-25' title='Billing History'>
				<Table
					keyField='id'
					data={selectedBillingHistory.data}
					columns={Column}
				/>
			</Cards>
		</>
	)
}
export default BillingHistory
