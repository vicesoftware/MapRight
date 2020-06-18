import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './dashboard.asyncActions'

const initialState = {
	selectedDashboardModal: null,
	totalRevenue: {},
}

const slice = createSlice({
	name: 'dashboard',
	initialState,
	extraReducers: {
		[asyncActions.fetchTotalRevenue.fulfilled]: (state, action) => {
			state.totalRevenue = action.payload
		},
	},
})

export default slice

export const { name, actions, reducer } = slice
