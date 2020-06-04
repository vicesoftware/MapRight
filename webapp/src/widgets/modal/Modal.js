import React from 'react'
import { Modal, Image, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { selectShowModal } from './modal.selectors'
import { actions } from './modal.slice'
import './Modal.css'
import Icons from '../../assets/icons'

const { hideModal } = actions

const MapRightModal = ({
	children,
	header,
	footer,
	title,
	reset,
	size = 'lg',
}) => {
	const show = useSelector(selectShowModal)
	const dispatch = useDispatch()

	const handleClose = () => {
		dispatch(hideModal())
		if (reset) reset()
	}
	return (
		<Modal
			show={show}
			onHide={handleClose}
			dialogClassName='modal-dialog-centered'
			size={size}
		>
			<Modal.Header className='border-0'>
				{header || (
					<Modal.Title className='f-16 gotham font-weight-normal lh-25'>
						{title}
					</Modal.Title>
				)}
				<Button className='close p-0 pr-2' onClick={handleClose}>
					<Image src={Icons.closeIcon} alt='close-icon' width='25' />
				</Button>
			</Modal.Header>
			<Modal.Body className='pt-0'>{children}</Modal.Body>
			<Modal.Footer className='justify-content-start border-0'>
				{footer}
			</Modal.Footer>
		</Modal>
	)
}

export default MapRightModal
