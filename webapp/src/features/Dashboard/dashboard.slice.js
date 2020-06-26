import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './dashboard.asyncActions'

const initialState = {
	churnRate: {},
	lifeTimeValue: {},
	totalRevenue: {},
	activeUserRate: {},
	growthRate: {},
}

const slice = createSlice({
	name: 'dashboard',
	initialState,
	reducers: {},
	extraReducers: {
		[asyncActions.fetchChurnRate.fulfilled]: (state, action) => {
			state.churnRate = action.payload
		},
		[asyncActions.fetchLifeTimeValue.fulfilled]: (state, action) => {
			state.lifeTimeValue = action.payload
		},
		[asyncActions.fetchTotalRevenue.fulfilled]: (state, action) => {
			state.totalRevenue = action.payload
		},
		[asyncActions.fetchActiveUserRate.fulfilled]: (state, action) => {
			state.activeUserRate = action.payload
		},
		[asyncActions.fetchGrowthRate.fulfilled]: (state, action) => {
			state.growthRate = action.payload
		},
	},
})

export default slice

export const { name, actions, reducer } = slice
