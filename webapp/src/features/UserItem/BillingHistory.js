import React from 'react'
import { Button, Image } from 'react-bootstrap'
import Cards from '../../widgets/Cards'
import Table from '../../widgets/Table'
import Icons from '../../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectUserItemModal } from './userItem.slice'
import { selectUserItemModal } from './userItem.selectors'
import { USERITEM_MODAL_TYPES } from '../UserItemModals/UserItemModals.constants'
import getUserItemModal from '../UserItemModals'

const BillingHistory = () => {
	const dispatch = useDispatch()
	const selectedModal = useSelector(selectUserItemModal)

	const deleteButtonFormatter = (cell, row) => (
		// TODOs : Need to update the condition for the alert icon.
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
						setSelectUserItemModal(USERITEM_MODAL_TYPES.DELETE_INVOICE_MODAL)
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

	// TODO : Need to remove mockTableData while api integration
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
			<Cards shouldShowTitle={false}>
				<div className='d-flex align-items-center'>
					<span className='font-weight-normal d-block gotham lh-25 mb-15'>
						Billing History
					</span>
					<Button
						variant='secondary'
						className='ml-auto btn-small'
						onClick={() =>
							dispatch(
								setSelectUserItemModal(USERITEM_MODAL_TYPES.ADD_INVOICE_MODAL)
							)
						}
					>
						Add Invoice
					</Button>
				</div>
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
