import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Cards from '../../widgets/Cards'
import classNames from 'classnames'

const UserInformation = ({ selectedUserInformation }) => {
	const userData = [
		{
			name: 'Lifetime Value',
			value: selectedUserInformation.lifetimeValue,
		},
		{
			name: 'Monthly Recurring Revenue',
			value: selectedUserInformation.total,
		},
		{
			name: 'Subscription Status',
			value: selectedUserInformation.status,
		},
		{
			name: 'Add-Ons',
			value: selectedUserInformation.addOns,
		},
		{
			name: 'Role',
			value: selectedUserInformation.role,
		},
		{
			name: 'Plan',
			value: selectedUserInformation.plan,
		},
		{
			name: 'Group',
			value: selectedUserInformation.group,
		},
	]
	return (
		<Cards className='mb-25' title='User Information'>
			<Row className='user-info'>
				{userData.map((user, index) => (
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
