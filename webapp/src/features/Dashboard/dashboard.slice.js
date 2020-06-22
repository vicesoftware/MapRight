import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './dashboard.asyncActions'

const initialState = {
	selectedDashboardModal: null,
	filter: {
		startDate: '',
		endDate: '',
		plan: '',
		subscriptionStatus: '',
	},
	plans: [],
}

const slice = createSlice({
	name: 'dashboard',
	initialState,
	reducers: {
		updateFilter(state, action) {
			state.filter = action.payload
		},
	},
	extraReducers: {
		[asyncActions.fetchPlans.fulfilled]: (state, action) => {
			state.plans = action.payload
		},
	},
})

export default slice

export const { name, actions, reducer } = slice
