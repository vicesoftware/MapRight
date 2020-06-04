import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { useSelector } from 'react-redux'
import { selectShowModal } from './modal.selectors'
import { actions } from './modal.slice'

const { useHideModal } = actions

export default function MapRightModal({ children }) {
	const show = useSelector(selectShowModal)
	const hideModal = useHideModal()

	return (
		<Modal show={show} onHide={hideModal}>
			{children}
		</Modal>
	)
}
