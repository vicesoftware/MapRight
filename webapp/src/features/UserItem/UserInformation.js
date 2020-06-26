import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Cards from '../../widgets/Cards'
import classNames from 'classnames'
import { selectUserInformation } from './userItem.selectors'
import { useSelector } from 'react-redux'
import BusyIndicator from '../../widgets/busyIndicator'

const UserInformation = () => {
	const selectedUserInformation = useSelector(selectUserInformation)
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
		<BusyIndicator>
			<Cards className='mb-25' title='User Information'>
				<Row className='user-info'>
					{userData.map((user) => (
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
		</BusyIndicator>
	)
}
export default UserInformation
