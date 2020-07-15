import React, { useState } from 'react'
import { Col, Button, Form } from 'react-bootstrap'
import Cards from '../../widgets/Cards'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { updateFilter } from './dashboard.slice'
import { useDispatch } from 'react-redux'

const DashboardFilters = ({ plans }) => {
	const [startDate, setStartDate] = useState(new Date('2020-06-17'))
	const [endDate, setEndDate] = useState(new Date())
	const [plan, setPlan] = useState('')
	const [subscriptionStatus, setSubscriptionStatus] = useState('')

	const dispatch = useDispatch()

	const handleUpdate = () => {
		dispatch(
			updateFilter({
				startDate: startDate,
				endDate: endDate,
				plan: plan,
				subscriptionStatus: subscriptionStatus,
			})
		)
	}

	return (
		<Col className='pb-25' lg={4} xl={3}>
			<Cards title='Filter'>
				<Form.Group className='mb-15'>
					<Form.Label>Start Date</Form.Label>
					<DatePicker
						showPopperArrow={false}
						selected={startDate}
						onChange={(startDate) => setStartDate(startDate)}
						dateFormat='MMMM d, yyyy'
						className='form-control calender-input'
						popperModifiers={{
							preventOverflow: {
								enabled: true,
							},
						}}
					/>
				</Form.Group>
				<Form.Group className='mb-15'>
					<Form.Label>End Date</Form.Label>
					<DatePicker
						showPopperArrow={false}
						selected={endDate}
						onChange={(endDate) => setEndDate(endDate)}
						dateFormat='MMMM d, yyyy'
						className='form-control calender-input'
						popperModifiers={{
							preventOverflow: {
								enabled: true,
							},
						}}
					/>
				</Form.Group>
				<Form.Group className='mb-15'>
					<Form.Label>Plan</Form.Label>
					<Form.Control as='select' onChange={(e) => setPlan(e.target.value)}>
						{plans.map((plan) => (
							<option key={plan}>{plan}</option>
						))}
					</Form.Control>
				</Form.Group>
				<Form.Group className='mb-15'>
					<Form.Label>Subscription Status</Form.Label>
					<Form.Control
						as='select'
						onChange={(e) => setSubscriptionStatus(e.target.value)}
					>
						<option>All Status</option>
						<option>Active</option>
						<option>Churn</option>
						<option>Expired</option>
					</Form.Control>
				</Form.Group>
				<Button variant='secondary' onClick={handleUpdate}>
					Update
				</Button>
			</Cards>
		</Col>
	)
}
export default DashboardFilters
