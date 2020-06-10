import Dashboard from './Dashboard'
import slice from './dashboard.slice'

export const {
	name,
	actions: { setSelectedDashboardModal },
	reducer,
} = slice
export default Dashboard
