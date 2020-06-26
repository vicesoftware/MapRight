import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './dashboard.asyncActions'

const allSubscriptionsDefault = []

const initialState = {
	churnRate: {},
	lifeTimeValue: {},
	totalRevenue: {},
	averageRevenue: {},
	activeUserRate: {},
	growthRate: {},
	allSubscriptions: allSubscriptionsDefault,
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
		[asyncActions.fetchAverageRevenue.fulfilled]: (state, action) => {
			state.averageRevenue = action.payload
		},
		[asyncActions.fetchActiveUserRate.fulfilled]: (state, action) => {
			state.activeUserRate = action.payload
		},
		[asyncActions.fetchGrowthRate.fulfilled]: (state, action) => {
			state.growthRate = action.payload
		},
		[asyncActions.fetchAllSubscriptions.fulfilled]: (state, action) => {
			state.allSubscriptions = action.payload || allSubscriptionsDefault
		},
	},
})

export default slice

export const { name, actions, reducer } = slice
