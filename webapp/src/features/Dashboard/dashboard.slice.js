import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './dashboard.asyncActions'

const allSubscriptionsDefault = []

const initialState = {
	allSubscriptions: allSubscriptionsDefault,
	searchType: 'group',
	outdatedSubscriptions: false,
	searchValue: '',
	churnRate: {},
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
	},
	extraReducers: {
		[asyncActions.fetchAllSubscriptions.fulfilled]: (state, action) => {
			state.allSubscriptions = action.payload || allSubscriptionsDefault
		},
		[asyncActions.fetchChurnRate.fulfilled]: (state, action) => {
			state.churnRate = action.payload
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
	},
	reducer,
} = slice
