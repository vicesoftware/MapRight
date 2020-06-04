import React from 'react'
import ManageSubscriptionModal from './ManageSubscriptionModal'
import { DASHBOARD_MODAL_TYPES } from './dashboardModals.constants'

const getDashboardModal = (modalName) => {
	switch (modalName) {
		case DASHBOARD_MODAL_TYPES.MANAGEMENT_SUBSCRIPTION_MODAL:
			return <ManageSubscriptionModal />
		default:
			return null
	}
}

export default getDashboardModal
