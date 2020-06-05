import React, { useEffect } from 'react'
import Modal, { hideModal, showModal } from '../../widgets/modal'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setSelectedDashboardModal } from '../dashboard/dashboard.slice'

const ManageSubscriptionRateModal = () => {
	const dispatch = useDispatch()
	const resetModal = () => dispatch(setSelectedDashboardModal(null))

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
			title='Manage Subscription Rate'
			footer={footer}
			reset={resetModal}
			size='md'
		>
			<Row className='mb-25'>
				<Col md={6} className='mb-4 mb-md-0'>
					<label className='f-14 font-weight-bold d-block mb-25'>
						Edit the subscription rate of this account.
					</label>
					<Form.Control type='text' value='$25' />
				</Col>
			</Row>
		</Modal>
	)
}

export default ManageSubscriptionRateModal
