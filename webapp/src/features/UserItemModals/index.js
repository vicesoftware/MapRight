import React from 'react'
import AddInvoiceModal from './AddInvoiceModal'
import CancelSubscriptionModal from './CancelSubscriptionModal'
import DeleteInvoiceModal from './DeleteInvoiceModal'
import { USERITEM_MODAL_TYPES } from './UserItemModals.constants'

const getUserItemModal = (modalName) => {
	switch (modalName) {
		case USERITEM_MODAL_TYPES.ADD_INVOICE_MODAL:
			return <AddInvoiceModal />
		case USERITEM_MODAL_TYPES.CANCEL_SUBSCRIPTION_MODAL:
			return <CancelSubscriptionModal />
		case USERITEM_MODAL_TYPES.DELETE_INVOICE_MODAL:
			return <DeleteInvoiceModal />
		default:
			return null
	}
}

export default getUserItemModal
