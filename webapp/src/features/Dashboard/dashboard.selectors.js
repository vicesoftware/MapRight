import slice from './dashboard.slice'

export const selectSlice = (state) => state[slice.name]

export const selectedDashboardModal = (state) =>
	selectSlice(state).selectedDashboardModal
