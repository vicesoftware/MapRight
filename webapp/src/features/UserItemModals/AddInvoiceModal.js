import React, { useEffect } from 'react'
import Modal, { hideModal, showModal } from '../../widgets/Modal'
import { Button, Row, Col, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setSelectedUserItemModal } from '../UserItem/userItem.slice'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Formik } from 'formik'
import { ADD_INVOICE_MODAL } from './UserItemModals.constants'
import { saveInvoice } from '../UserItem/userItem.asyncActions'

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

	const initialValues = {
		date: '',
		invoiceNumber: '',
		basePlanCost: '',
		addOnsCost: '',
		basePlan: '',
		invoiceStatus: '',
		numberOfAddOns: '',
	}
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				dispatch(saveInvoice({ ...values })).then(() => {
					handleClose()
					resetForm()
					setSubmitting(false)
				})
			}}
		>
			{({ values, handleChange, handleSubmit, setFieldValue }) => {
				const footer = (
					<>
						<Button variant='secondary' onClick={() => handleSubmit()}>
							Save
						</Button>
						<Button variant='outline-primary' onClick={handleClose}>
							Go Back
						</Button>
					</>
				)
				return (
					<Modal title='Manage Invoice' footer={footer} reset={resetModal}>
						<Form onSubmit={handleSubmit}>
							<label className='mb-15 font-weight-bold f-14'>
								Invoice Details
							</label>
							<Row className='mb-30'>
								<Col md={6}>
									<Form.Group>
										<DatePicker
											selected={values.date && new Date(values.date)}
											onChange={(value) => setFieldValue('date', value)}
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
										<Form.Control
											type='text'
											name='invoiceNumber'
											placeholder='Invoice Number'
											value={values.invoiceNumber}
											onChange={handleChange}
										/>
									</Form.Group>
								</Col>
								<Col md={6}>
									<Form.Group>
										<Form.Control
											as='select'
											name='invoiceStatus'
											onChange={handleChange}
										>
											{ADD_INVOICE_MODAL.INVOICE_STATUS.map((each) => (
												<option key={each.value} value={each.value}>
													{each.option}
												</option>
											))}
										</Form.Control>
									</Form.Group>
								</Col>
							</Row>

							<label className='mb-15 font-weight-bold f-14'>
								Base Plan Cost
							</label>
							<Row className='mb-30'>
								<Col md={6}>
									<Form.Group>
										<Form.Control
											as='select'
											name='basePlan'
											onChange={handleChange}
										>
											{ADD_INVOICE_MODAL.PLANS.map((each) => (
												<option key={each.value} value={each.value}>
													{each.option}
												</option>
											))}
										</Form.Control>
									</Form.Group>
								</Col>
								<Col md={6}>
									<Form.Group>
										<Form.Control
											type='text'
											name='basePlanCost'
											onChange={handleChange}
											value={values.basePlanCost}
										/>
									</Form.Group>
								</Col>
							</Row>

							<label className='mb-15 font-weight-bold f-14'>Add-on Cost</label>
							<Row>
								<Col md={6}>
									<Form.Group>
										<Form.Control
											as='select'
											name='numberOfAddOns'
											onChange={handleChange}
										>
											{ADD_INVOICE_MODAL.ADD_ONS.map((each) => (
												<option key={each.value} value={each.value}>
													{each.option}
												</option>
											))}
										</Form.Control>
									</Form.Group>
								</Col>
								<Col md={6}>
									<Form.Group>
										<Form.Control
											type='text'
											name='addOnsCost'
											onChange={handleChange}
											value={values.addOnsCost}
										/>
									</Form.Group>
								</Col>
							</Row>
						</Form>
					</Modal>
				)
			}}
		</Formik>
	)
}

export default AddInvoiceModal
