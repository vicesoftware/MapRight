import React from 'react'
import ManageSubscriptionModal from './ManageSubscriptionModal'
import ManageSubscriptionRateModal from './ManageSubscriptionRateModal'
import CancelSubscriptionModal from './CancelSubscriptionModal'
import { DASHBOARD_MODAL_TYPES } from './DashboardModals.constants'

const getDashboardModal = (modalName) => {
	switch (modalName) {
		case DASHBOARD_MODAL_TYPES.MANAGE_SUBSCRIPTION_MODAL:
			return <ManageSubscriptionModal />
		case DASHBOARD_MODAL_TYPES.MANAGE_SUBSCRIPTION_RATE_MODAL:
			return <ManageSubscriptionRateModal />
		case DASHBOARD_MODAL_TYPES.CANCEL_SUBSCRIPTION_MODAL:
			return <CancelSubscriptionModal />
		default:
			return null
	}
}

export default getDashboardModal
