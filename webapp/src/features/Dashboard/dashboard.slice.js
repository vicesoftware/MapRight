import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './dashboard.asyncActions'

const allSubscriptionsDefault = []

const initialState = {
	allSubscriptions: allSubscriptionsDefault,
	searchType: 'group',
	outdatedSubscriptions: false,
	searchValue: '',
	churnRate: {},
	growthRate: {},
	activeUserRate: {},
	totalRevenue: {},
	lifeTimeValue: {},
	averageRevenue: {},
	filter: {
		startDate: new Date('2020-06-01'),
		endDate: new Date(),
		plan: '',
		subscriptionStatus: '',
	},
	plans: [],
}

const slice = createSlice({
	name: 'dashboard',
	initialState,
	reducers: {
		setSelectedSearchType(state, action) {
			state.searchType = action.payload
		},
		setSelectedOutdatedSubscriptions(state, action) {
			state.outdatedSubscriptions = action.payload
		},
		setSelectedSearchValue(state, action) {
			state.searchValue = action.payload
		},
		updateFilter(state, action) {
			state.filter = action.payload || {}
		},
	},
	extraReducers: {
		[asyncActions.fetchAllSubscriptions.fulfilled]: (state, action) => {
			state.allSubscriptions = action.payload || allSubscriptionsDefault
		},
		[asyncActions.fetchChurnRate.fulfilled]: (state, action) => {
			state.churnRate = action.payload || []
		},
		[asyncActions.fetchGrowthRate.fulfilled]: (state, action) => {
			state.growthRate = action.payload || []
		},
		[asyncActions.fetchActiveUserRate.fulfilled]: (state, action) => {
			state.activeUserRate = action.payload || []
		},
		[asyncActions.fetchTotalRevenue.fulfilled]: (state, action) => {
			state.totalRevenue = action.payload || []
		},
		[asyncActions.fetchLifeTimeValue.fulfilled]: (state, action) => {
			state.lifeTimeValue = action.payload || []
		},
		[asyncActions.fetchAverageRevenue.fulfilled]: (state, action) => {
			state.averageRevenue = action.payload || []
		},
		[asyncActions.fetchPlans.fulfilled]: (state, action) => {
			state.plans = action.payload || []
		},
	},
})

export default slice

export const {
	name,
	actions: {
		setSelectedSearchType,
		setSelectedOutdatedSubscriptions,
		setSelectedSearchValue,
		updateFilter,
	},
	reducer,
} = slice
