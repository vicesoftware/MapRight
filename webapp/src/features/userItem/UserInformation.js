import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Cards from '../../widgets/cards'
import classNames from 'classnames'

const UserInformation = ({ selectedUserInformation }) => {
	const userData = [
		{
			name: 'Lifetime Value',
			value:
				selectedUserInformation.data !== undefined &&
				selectedUserInformation.data[0].LifetimeValue,
		},
		{
			name: 'Monthly Recurring Revenue',
			value:
				selectedUserInformation.data !== undefined &&
				selectedUserInformation.data[0].MRR,
		},
		{
			name: 'Subscription Status',
			value:
				selectedUserInformation.data !== undefined &&
				selectedUserInformation.data[0].Status,
		},
		{
			name: 'Add-Ons',
			value:
				selectedUserInformation.data !== undefined &&
				selectedUserInformation.data[0].Addons,
		},
		{
			name: 'Role',
			value:
				selectedUserInformation.data !== undefined &&
				selectedUserInformation.data[0].Role,
		},
		{
			name: 'Plan',
			value:
				selectedUserInformation.data !== undefined &&
				selectedUserInformation.data[0].Plan,
		},
		{
			name: 'Group',
			value:
				selectedUserInformation.data !== undefined &&
				selectedUserInformation.data[0].Group,
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
