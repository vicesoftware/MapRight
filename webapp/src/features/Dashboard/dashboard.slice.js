import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	selectedDashboardModal: null,
}

const slice = createSlice({
	name: 'dashboard',
	initialState,
	reducers: {
		setSelectedDashboardModal(state, action) {
			state.selectedDashboardModal = action.payload || null
		},
	},
})

export default slice

export const {
	name,
	actions: { setSelectedDashboardModal },
	reducer,
} = slice
