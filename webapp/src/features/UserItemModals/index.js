import React from 'react'
import InvoiceRefundModal from './InvoiceRefundModal'
import { USERITEM_MODAL_TYPES } from '../userItem/userItemModals.constants'

const getUserItemModal = (modalName) => {
	switch (modalName) {
		case USERITEM_MODAL_TYPES.INVOICE_REFUND_MODAL:
			return <InvoiceRefundModal />
		default:
			return null
	}
}

export default getUserItemModal
