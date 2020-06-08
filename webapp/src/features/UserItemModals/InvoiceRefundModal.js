import React, { useEffect } from 'react'
import Modal, { hideModal, showModal } from '../../widgets/modal'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setSelectedUserItemModal } from '../userItem/userItem.slice'

const InvoiceRefundModal = () => {
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
			<Button variant='secondary'>Yes,Refund Invoice</Button>
			<Button variant='outline-primary' onClick={handleClose}>
				Go Back
			</Button>
		</>
	)
	return (
		<Modal title='Refund Invoice' footer={footer} reset={resetModal} size='md'>
			<label className='f-14 font-weight-bold d-block mb-25'>
				Are you sure you want to refund this invoice? This action cannot be
				undone.
			</label>
		</Modal>
	)
}

export default InvoiceRefundModal
