import React, { useEffect } from 'react'
import Modal, { hideModal, showModal } from '../../widgets/modal'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setSelectedDashboardModal } from '../dashboard/dashboard.slice'
import { setSelectedUserItemModal } from '../userItem/userItem.slice'

const ManageSubscriptionModal = () => {
	const dispatch = useDispatch()
	const resetModal = () => {
		dispatch(setSelectedDashboardModal(null))
		dispatch(setSelectedUserItemModal(null))
	}

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
			<Button variant='secondary'>Update</Button>
			<Button variant='outline-primary' onClick={handleClose}>
				Go Back
			</Button>
		</>
	)
	return (
		<Modal
			title='Manage Subscription'
			footer={footer}
			reset={resetModal}
			size='md'
		>
			<label className='f-14 font-weight-bold d-block mb-25'>
				Edit the plan and add-ons of the subscription.
			</label>

			<Row className='mb-25'>
				<Col md={6} className='mb-4 mb-md-0'>
					<Form.Control as='select' name='unlimited-plan'>
						<option>Unlimited Plan</option>
					</Form.Control>
				</Col>
				<Col md={6}>
					<Form.Control as='select' name='add-ons'>
						<option>Add-Ons</option>
					</Form.Control>
				</Col>
			</Row>
		</Modal>
	)
}

export default ManageSubscriptionModal
