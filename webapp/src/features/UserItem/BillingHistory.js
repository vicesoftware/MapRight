import React from 'react'
import { Button, Image } from 'react-bootstrap'
import Cards from '../../widgets/Cards'
import Table from '../../widgets/Table'
import Icons from '../../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUserItemModal } from './userItem.slice'
import {
	selectedUserItemModal,
	selectBillingHistory,
} from './userItem.selectors'
import { USERITEM_MODAL_TYPES } from '../UserItemModals/UserItemModals.constants'
import getUserItemModal from '../UserItemModals'
import moment from 'moment/moment'
import BusyIndicator from '../../widgets/busyIndicator'

const BillingHistory = () => {
	const dispatch = useDispatch()
	const selectedModal = useSelector(selectedUserItemModal)
	const selectedBillingHistory = useSelector(selectBillingHistory)

	const deleteButtonFormatter = (cell, row) => (
		<div className='d-inline-flex align-items-center'>
			{/* {row.revenue === '$115' && (
				<Button variant='link' className='btn-auto p-0'>
					<Image
						src={Icons.alertIcon}
						alt='alert-icon'
						width='20'
						className='ml-2'
					/>
				</Button>
			)} */}
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

	const dateFormatter = (row) => moment(row).format('L')
	const Column = [
		{
			dataField: 'invoice',
			text: 'invoice',
			sort: true,
		},
		{
			dataField: 'date',
			text: 'date',
			formatter: dateFormatter,
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
				<BusyIndicator>
					<Table
						keyField='id'
						data={selectedBillingHistory.data}
						columns={Column}
						classes='table-sidebar'
						headerWrapperClasses='f-12 text-uppercase text-secondary'
						bodyClasses='f-14 font-weight-normal'
					/>
				</BusyIndicator>
			</Cards>
		</>
	)
}
export default BillingHistory
