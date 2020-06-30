import React, { useEffect } from 'react'
import Modal, { hideModal, showModal } from '../../widgets/Modal'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setSelectedUserItemModal } from '../UserItem/userItem.slice'
import { deleteInvoice } from '../UserItem/userItem.asyncActions'

const DeleteInvoiceModal = ({ invoiceId }) => {
	const dispatch = useDispatch()
	const resetModal = () => dispatch(setSelectedUserItemModal(null))

	useEffect(() => {
		dispatch(showModal())
		return () => {
			dispatch(hideModal())
		}
	}, [dispatch])

	const handleClose = () => {
		dispatch(hideModal())
		resetModal()
	}

	const footer = (
		<>
			<Button
				variant='secondary'
				onClick={() => {
					dispatch(deleteInvoice(invoiceId.slice(1)))
					handleClose()
				}}
			>
				Confirm Deletion
			</Button>
			<Button variant='outline-primary' onClick={handleClose}>
				Go Back
			</Button>
		</>
	)
	return (
		<Modal title='Delete Invoice' footer={footer} reset={resetModal} size='md'>
			<label className='f-14 font-weight-bold d-block mb-25'>
				Deleting this invoice will only affect values in the Revenue Dashboard.
			</label>
		</Modal>
	)
}

export default DeleteInvoiceModal
