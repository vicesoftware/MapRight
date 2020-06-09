import React, { useState } from 'react'
import { Col, Button, Form } from 'react-bootstrap'
import Cards from '../../widgets/cards'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './DashboardFilters.css'

const DashboardFilters = () => {
	const [startDate, setStartDate] = useState(
		new Date().setMonth(new Date().getMonth() - 1)
	)
	const [endDate, setEndDate] = useState(new Date())

	return (
		<Col className='pb-25' lg={4} xl={3}>
			<Cards title='Filter'>
				<Form.Group className='mb-15'>
					<Form.Label>Start Date</Form.Label>
					<DatePicker
						selected={startDate}
						onChange={(startDate) => setStartDate(startDate)}
						dateFormat='MMMM d, yyyy'
						className='form-control calender-input'
					/>
				</Form.Group>
				<Form.Group className='mb-15'>
					<Form.Label>End Date</Form.Label>
					<DatePicker
						selected={endDate}
						onChange={(endDate) => setEndDate(endDate)}
						dateFormat='MMMM d, yyyy'
						className='form-control calender-input'
					/>
				</Form.Group>
				<Form.Group className='mb-15'>
					<Form.Label>Plan</Form.Label>
					<Form.Control as='select'>
						<option>All Plans</option>
					</Form.Control>
				</Form.Group>
				<Form.Group className='mb-15'>
					<Form.Label>Subscription Status</Form.Label>
					<Form.Control as='select'>
						<option>All Status</option>
					</Form.Control>
				</Form.Group>
				<Button variant='secondary'>Update</Button>
			</Cards>
		</Col>
	)
}
export default DashboardFilters
