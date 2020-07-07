import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Cards from '../../widgets/Cards'
import classNames from 'classnames'

const UserInformation = () => {
	// TODO : Need to remove mockData while api integration
	const mockData = [
		{
			name: 'Total Revenue',
			value: '$2,050',
		},
		{
			name: 'Monthly Recurring Revenue',
			value: '$70',
		},
		{
			name: 'Subscription Status',
			value: 'Active',
		},
		{
			name: 'Add-Ons',
			value: '5 states',
		},
		{
			name: 'Role',
			value: 'Owner',
		},
		{
			name: 'Plan',
			value: 'Flex',
		},
		{
			name: 'Group',
			value: 'Brandcave',
		},
	]
	return (
		<Cards title='User Information'>
			<Row className='user-info'>
				{mockData.map((user) => (
					<Col
						md={6}
						key={user.name}
						className={classNames({
							'mb-30': user.name !== 'Group',
						})}
					>
						<h6 className='font-weight-bold mb-1 f-12 text-uppercase'>
							{user.name}
						</h6>
						<span className='gotham font-weight-normal'>{user.value}</span>
					</Col>
				))}
			</Row>
		</Cards>
	)
}
export default UserInformation
