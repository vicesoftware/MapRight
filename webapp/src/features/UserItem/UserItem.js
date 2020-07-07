import React from 'react'
import ActivityHistory from './ActivityHistory'
import UserInformation from './UserInformation'
import BillingHistory from './BillingHistory'
import { Row, Col, Button, Image } from 'react-bootstrap'
import './UserItem.css'
import Icons from '../../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectUserItemModal } from './userItem.slice'
import { selectUserItemModal } from './userItem.selectors'
import getUserItemModal from '../UserItemModals'
import { USERITEM_MODAL_TYPES } from '../UserItemModals/UserItemModals.constants'

const UserItem = () => {
	const dispatch = useDispatch()
	const selectedModal = useSelector(selectUserItemModal)
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
					<UserInformation />
					<BillingHistory />
				</Col>
				<Col lg={8}>
					<ActivityHistory />
				</Col>
			</Row>
		</>
	)
}

export default UserItem
