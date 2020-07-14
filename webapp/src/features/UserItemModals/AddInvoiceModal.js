import React, { useEffect } from 'react'
import Modal, { hideModal, showModal } from '../../widgets/Modal'
import { Button, Row, Col, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUserItemModal } from '../UserItem/userItem.slice'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Formik } from 'formik'
import { ADD_INVOICE_MODAL } from './UserItemModals.constants'
import { saveInvoice, updateInvoice } from '../UserItem/userItem.asyncActions'
import { selectedUserItemModal } from '../UserItem/userItem.selectors'

const mockTableData = [
	{
		id: 1,
		invoice: 123456789,
		date: '01/01/22',
		revenue: '$115',
		alert: false,
	},
	{
		id: 2,
		invoice: 12345678,
		date: '01/01/22',
		revenue: '$105',
		alert: false,
	},
	{
		id: 3,
		invoice: 1234567,
		date: '01/01/22',
		revenue: '$120',
		alert: true,
	},
	{
		id: 4,
		invoice: 123456,
		date: '01/01/22',
		revenue: '$220',
		alert: false,
	},
	{
		id: 5,
		invoice: 12345,
		date: '01/01/22',
		revenue: '$50',
		alert: false,
	},
]

const AddInvoiceModal = () => {
	const invoice = useSelector(selectedUserItemModal)
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

	const selectedInvoice = mockTableData.filter(
		(obj) => obj.invoice === invoice.id
	)
	if (selectedInvoice.length !== 0) {
		initialValues.date = selectedInvoice[0].date
		initialValues.invoiceNumber = selectedInvoice[0].invoice
		initialValues.basePlanCost = selectedInvoice[0].revenue
	}
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				if (invoice.modalName === 'addInvoiceModal') {
					dispatch(saveInvoice({ ...values })).then(() => {
						handleClose()
						resetForm()
						setSubmitting(false)
					})
				} else {
					dispatch(
						updateInvoice({
							invoices: values,
							id: selectedInvoice[0].id,
						})
					).then(() => {
						handleClose()
						resetForm()
						setSubmitting(false)
					})
				}
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
								<Col md={6}>
									<Form.Group>
										<Form.Control
											as='select'
											name='invoiceSubStatus'
											onChange={handleChange}
										>
											<option
												key='Invoice Sub Status'
												value='Invoice Sub Status'
											>
												Invoice Sub Status
											</option>
											{values.invoiceStatus === 'Charge Invoice' &&
												ADD_INVOICE_MODAL.CHARGE_INVOICE_STATUS.map((each) => (
													<option key={each.value} value={each.value}>
														{each.option}
													</option>
												))}
											{values.invoiceStatus === 'Credit Invoice' &&
												ADD_INVOICE_MODAL.CREDIT_INVOICE_STATUS.map((each) => (
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
