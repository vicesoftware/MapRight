import React, { useEffect } from 'react'
import ActivityHistory from './ActivityHistory'
import UserInformation from './UserInformation'
import BillingHistory from './BillingHistory'
import { Row, Col, Button, Image } from 'react-bootstrap'
import './UserItem.css'
import Icons from '../../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectUserItemModal } from './userItem.slice'
import {
	selectUserItemModal,
	selectBillingHistory,
	selectUserInformation,
} from './userItem.selectors'
import getUserItemModal from '../UserItemModals'
import { USERITEM_MODAL_TYPES } from '../UserItemModals/UserItemModals.constants'
import {
	fetchUserInformation,
	fetchActivityHistory,
	fetchBillingHistory,
} from './userItem.asyncActions'
import { useParams } from 'react-router'

const UserItem = () => {
	const dispatch = useDispatch()
	const selectedModal = useSelector(selectUserItemModal)
	const selectedBillingHistory = useSelector(selectBillingHistory)
	const selectedUserInformation = useSelector(selectUserInformation)
	const { userId } = useParams()
	useEffect(() => {
		dispatch(fetchUserInformation(userId))
		dispatch(fetchActivityHistory(userId))
		dispatch(fetchBillingHistory(userId))
	}, [dispatch, userId])
	return (
		<>
			{selectedModal && getUserItemModal(selectedModal)}
			<header className='py-30'>
				<Row>
					<Col md={4} lg={6} xl={6}>
						<h3 className='font-weight-bold f-28 mb-3 mb-md-0 lh-40 gotham'>
							Cody Miles
						</h3>
					</Col>

					<Col md={4} lg={3} xl={2} className='ml-auto mb-3 mb-md-0'></Col>
					<Col md={4} lg={3} xl={2}>
						<Button
							variant='outline-primary'
							className='d-flex align-items-center justify-content-between w-100'
							onClick={() =>
								dispatch(
									setSelectUserItemModal(
										USERITEM_MODAL_TYPES.CANCEL_SUBSCRIPTION_MODAL
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
					<UserInformation selectedUserInformation={selectedUserInformation} />
					<BillingHistory
						isGroupSubscription={true}
						selectedBillingHistory={selectedBillingHistory}
					/>
				</Col>
				<Col lg={8}>
					<ActivityHistory isGroupSubscription={false} />
				</Col>
			</Row>
		</>
	)
}

export default UserItem
