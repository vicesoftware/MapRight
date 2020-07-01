import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './dashboard.asyncActions'

const allSubscriptionsDefault = []

const initialState = {
	allSubscriptions: allSubscriptionsDefault,
	eventType: '',
	switchToggle: false,
	searchFieldValue: '',
}

const slice = createSlice({
	name: 'dashboard',
	initialState,
	reducers: {
		setSelectedEventType(state, action) {
			state.eventType = action.payload
		},
		setSelectedSwitchToggle(state, action) {
			state.switchToggle = action.payload
		},
		setSelectedSearchFieldValue(state, action) {
			state.searchFieldValue = action.payload
		},
	},
	extraReducers: {
		[asyncActions.fetchAllSubscriptions.fulfilled]: (state, action) => {
			state.allSubscriptions = action.payload || allSubscriptionsDefault
		},
	},
})

export default slice

export const {
	name,
	actions: {
		setSelectedEventType,
		setSelectedSwitchToggle,
		setSelectedSearchFieldValue,
	},
	reducer,
} = slice
