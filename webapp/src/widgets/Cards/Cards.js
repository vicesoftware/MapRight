import React from 'react'
import { Card, Button } from 'react-bootstrap'
import classNames from 'classnames'
import './Cards.css'
import { USERITEM_MODAL_TYPES } from '../../features/UserItemModals/UserItemModals.constants'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUserItemModal } from '../../features/UserItem/userItem.slice'
import { selectedUserItemModal } from '../../features/UserItem/userItem.selectors'
import getUserItemModal from '../../features/UserItemModals'

const Cards = ({ ...props }) => {
	const dispatch = useDispatch()
	const selectedModal = useSelector(selectedUserItemModal)
	return (
		<>
			{selectedModal && getUserItemModal(selectedModal)}
			<Card
				className={classNames('shadow-sm border-0 mb-25', {
					'h-100': props.title === 'Filter',
				})}
			>
				<Card.Body className='p-15'>
					{props.title === 'Billing History' &&
					props.buttonText === 'Add Invoice' ? (
						<div className='d-flex align-items-center'>
							<span className='font-weight-normal d-block gotham lh-25 mb-15'>
								{props.title}
							</span>
							<Button
								variant='secondary'
								className='ml-auto btn-small'
								onClick={() =>
									dispatch(
										setSelectedUserItemModal(
											USERITEM_MODAL_TYPES.ADD_INVOICE_MODAL
										)
									)
								}
							>
								{props.buttonText}
							</Button>
						</div>
					) : (
						<Card.Title className='font-weight-normal d-block gotham lh-25 mb-15'>
							{props.title}
						</Card.Title>
					)}
					{props.children}
				</Card.Body>
			</Card>
		</>
	)
}
export default Cards
