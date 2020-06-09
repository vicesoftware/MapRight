import Dashboard from './Dashboard'
import slice from './dashboard.slice'

export const {
	name,
	actions: { fetchAllSubscription },
	reducer,
} = slice
export default Dashboard
