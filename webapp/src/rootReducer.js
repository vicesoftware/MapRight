import { combineReducers } from 'redux'
import * as busyIndicator from './widgets/busyIndicator'
import * as modal from './widgets/Modal'
import * as pendingRequest from './infrastructure/pendingRequest'
import * as notificationPopup from './infrastructure/notificationPopup'
import * as httpCache from './infrastructure/httpCache'
import * as dashboard from './features/Dashboard'

export default combineReducers({
	[busyIndicator.name]: busyIndicator.reducer,
	[modal.name]: modal.reducer,
	[pendingRequest.name]: pendingRequest.reducer,
	[notificationPopup.name]: notificationPopup.reducer,
	[httpCache.name]: httpCache.reducer,
	[dashboard.name]: dashboard.reducer,
})
