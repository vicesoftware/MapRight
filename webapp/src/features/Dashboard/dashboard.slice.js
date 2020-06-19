import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './dashboard.asyncActions'

const initialState = {
	selectedDashboardModal: null,
	growthRate: {},
}

const slice = createSlice({
	name: 'dashboard',
	initialState,
	extraReducers: {
		[asyncActions.fetchGrowthRate.fulfilled]: (state, action) => {
			state.growthRate = action.payload
		},
	},
})

export default slice

export const { name, actions, reducer } = slice
