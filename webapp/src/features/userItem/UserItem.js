import React, { useEffect } from 'react'
import ActivityHistory from './ActivityHistory'
import UserInformation from './UserInformation'
import BillingHistory from './BillingHistory'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import './UserItem.css'
import Icons from '../../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { DASHBOARD_MODAL_TYPES } from '../dashboardModals/dashboardModals.constants'
import { setSelectedUserItemModal } from './userItem.slice'
import { fetchUserInformation } from './userItem.asyncActions'
import {
	selectedUserItemModal,
	selectUserInformation,
} from './userItem.selectors'
import getDashboardModal from '../dashboardModals'

const UserItem = () => {
	const dispatch = useDispatch()
	const selectedModal = useSelector(selectedUserItemModal)
	const selectedUserInformation = useSelector(selectUserInformation)

	useEffect(() => {
		dispatch(fetchUserInformation())
	}, [dispatch])

	return (
		<>
			{selectedModal && getDashboardModal(selectedModal)}
			<Container fluid>
				<header className='py-30'>
					<Row>
						<Col md={4} lg={6} xl={6}>
							<h3 className='font-weight-bold f-28 mb-3 mb-md-0 lh-40 gotham'>
								Cody Miles
							</h3>
						</Col>

						<Col md={4} lg={3} xl={2} className='ml-auto mb-3 mb-md-0'>
							<Button
								variant='outline-primary'
								className='d-flex align-items-center justify-content-between w-100'
								onClick={() =>
									dispatch(
										setSelectedUserItemModal(
											DASHBOARD_MODAL_TYPES.MANAGE_SUBSCRIPTION_MODAL
										)
									)
								}
							>
								Edit Subscription
								<Image
									src={Icons.editBlueIcon}
									alt='edit-blue-icon'
									width='20'
								/>
							</Button>
						</Col>
						<Col md={4} lg={3} xl={2}>
							<Button
								variant='outline-primary'
								className='d-flex align-items-center justify-content-between w-100'
								onClick={() =>
									dispatch(
										setSelectedUserItemModal(
											DASHBOARD_MODAL_TYPES.CANCEL_SUBSCRIPTION_MODAL
										)
									)
								}
							>
								Cancel Subscription
								<Image src={Icons.closeIcon} alt='close-icon' width='20' />
							</Button>
						</Col>
					</Row>
				</header>
				<Row>
					<Col lg={4}>
						<UserInformation
							selectedUserInformation={selectedUserInformation}
						/>
						<BillingHistory />
					</Col>
					<Col lg={8}>
						<ActivityHistory />
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default UserItem
