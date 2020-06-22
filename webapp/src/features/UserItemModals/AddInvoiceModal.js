import React, { useEffect } from 'react'
import Modal, { hideModal, showModal } from '../../widgets/Modal'
import { Button, Row, Col, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setSelectedUserItemModal } from '../UserItem/userItem.slice'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const AddInvoiceModal = () => {
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
			<Button variant='secondary'>Save</Button>
			<Button variant='outline-primary' onClick={handleClose}>
				Go Back
			</Button>
		</>
	)
	return (
		<Modal title='Manage Invoice' footer={footer} reset={resetModal}>
			<label className='mb-15 font-weight-bold f-14'>Invoice Details</label>
			<Row className='mb-30'>
				<Col md={6}>
					<Form.Group>
						<DatePicker
							showPopperArrow={false}
							dateFormat='MMMM d, yyyy'
							className='form-control calender-input'
							placeholderText='Invoice Date'
							popperModifiers={{
								preventOverflow: {
									enabled: true,
								},
							}}
						/>
					</Form.Group>
				</Col>
				<Col md={6}>
					<Form.Group>
						<Form.Control type='text' placeholder='Invoice Number' />
					</Form.Group>
				</Col>
				<Col md={6}>
					<Form.Group>
						<Form.Control as='select'>
							<option>Invoice Status</option>
						</Form.Control>
					</Form.Group>
				</Col>
			</Row>

			<label className='mb-15 font-weight-bold f-14'>Base Plan Cost</label>
			<Row className='mb-30'>
				<Col md={6}>
					<Form.Group>
						<Form.Control as='select'>
							<option>Unlimited Plan</option>
						</Form.Control>
					</Form.Group>
				</Col>
				<Col md={6}>
					<Form.Group>
						<Form.Control type='text' placeholder='' value='$15' />
					</Form.Group>
				</Col>
			</Row>

			<label className='mb-15 font-weight-bold f-14'>Add-on Cost</label>
			<Row>
				<Col md={6}>
					<Form.Group>
						<Form.Control as='select'>
							<option>7 Add-Ons</option>
						</Form.Control>
					</Form.Group>
				</Col>
				<Col md={6}>
					<Form.Group>
						<Form.Control type='text' placeholder='' value='$15' />
					</Form.Group>
				</Col>
			</Row>
		</Modal>
	)
}

export default AddInvoiceModal
