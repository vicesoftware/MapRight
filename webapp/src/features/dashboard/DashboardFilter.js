import React, { useState } from 'react'
import { Col, Button, Form } from 'react-bootstrap'
import Cards from '../../widgets/cards'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './DashboardFilter.css'

const DashboardFilter = () => {
	const [startDate, setStartDate] = useState(
		new Date().setMonth(new Date().getMonth() - 1)
	)
	const [endDate, setEndDate] = useState(new Date())

	return (
		<Col className='pb-25' lg={4} xl={3}>
			<Cards title='Filter'>
				<Form.Group className='mb-15'>
					<Form.Label>start date</Form.Label>
					<DatePicker
						selected={startDate}
						onChange={(startDate) => setStartDate(startDate)}
						dateFormat='MMMM d, yyyy'
						className='form-control calender-input'
					/>
				</Form.Group>
				<Form.Group className='mb-15'>
					<Form.Label>end date</Form.Label>
					<DatePicker
						selected={endDate}
						onChange={(endDate) => setEndDate(endDate)}
						dateFormat='MMMM d, yyyy'
						className='form-control calender-input'
					/>
				</Form.Group>
				<Form.Group className='mb-15'>
					<Form.Label>plan</Form.Label>
					<Form.Control as='select'>
						<option>all plans</option>
					</Form.Control>
				</Form.Group>
				<Form.Group className='mb-15'>
					<Form.Label>subscription status</Form.Label>
					<Form.Control as='select'>
						<option>all status</option>
					</Form.Control>
				</Form.Group>
				<Button variant='secondary'>Update</Button>
			</Cards>
		</Col>
	)
}
export default DashboardFilter
