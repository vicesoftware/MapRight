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

const BillingHistory = ({ isGroupSubscription, selectedBillingHistory }) => {
	const dispatch = useDispatch()
	const selectedModal = useSelector(selectedUserItemModal)

	const deleteButtonFormatter = (cell, row) => (
		<div className='d-inline-flex align-items-center'>
			{row.alert && (
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
						setSelectedUserItemModal({
							modalName: USERITEM_MODAL_TYPES.DELETE_INVOICE_MODAL,
							id: row.invoice,
						})
					)
				}
			>
				<Image src={Icons.binIcon} alt='bin-icon' width='20' className='ml-2' />
			</Button>
			<Button
				variant='link'
				className='btn-auto p-0'
				onClick={() =>
					dispatch(
						setSelectedUserItemModal({
							modalName: USERITEM_MODAL_TYPES.UPDATE_INVOICE_MODAL,
							id: row.invoice,
						})
					)
				}
			>
				<Image
					src={Icons.arrowRightDarkIcon}
					alt='arrow-right-dark-icon'
					width='20'
					className='ml-2'
				/>
			</Button>
		</div>
	)

	const Column = [
		{
			dataField: 'invoiceNumber',
			text: 'invoice',
			sort: true,
		},
		{
			dataField: 'invoiceDate',
			text: 'Date',
		},
		{
			dataField: 'revenue',
			text: 'Revenue',
		},
		{
			dataField: 'button',
			text: '',
			formatter: isGroupSubscription ? deleteButtonFormatter : null,
		},
	]

	return (
		<>
			{selectedModal &&
				getUserItemModal(selectedModal.modalName, selectedModal.id)}
			<Cards
				className='mb-25'
				title='Billing History'
				buttonText={isGroupSubscription ? 'Add Invoice' : ''}
			>
				<Table
					keyField='id'
					data={selectedBillingHistory}
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
