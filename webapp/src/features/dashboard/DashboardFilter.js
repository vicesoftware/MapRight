import React from 'react'
import { Col, Button, Form } from 'react-bootstrap'
import Cards from '../../widgets/cards'

const DashboardFilter = () => {
	return (
		<Col className='pb-25' lg={4} xl={3}>
			<Cards title='Filter'>
				<Form.Group className='mb-15'>
					<Form.Label>STARTING DATE</Form.Label>
					<Form.Control
						className='calender-input'
						type='text'
						name=''
						placeholder=''
						value='APRIL 1, 2020'
					/>
				</Form.Group>
				<Form.Group className='mb-15'>
					<Form.Label>END DATE</Form.Label>
					<Form.Control
						className='calender-input'
						type='text'
						name=''
						placeholder=''
						value='APRIL 30, 2020'
					/>
				</Form.Group>
				<Form.Group className='mb-15'>
					<Form.Label>PLAN</Form.Label>
					<Form.Control as='select'>
						<option>All PLANS</option>
					</Form.Control>
				</Form.Group>
				<Form.Group className='mb-15'>
					<Form.Label>SUBSCRIPTION STATUS</Form.Label>
					<Form.Control as='select'>
						<option>All STATUS</option>
					</Form.Control>
				</Form.Group>
				<Button variant='secondary'>Update</Button>
			</Cards>
		</Col>
	)
}
export default DashboardFilter
