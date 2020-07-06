import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './dashboard.asyncActions'

const allSubscriptionsDefault = []

const initialState = {
	allSubscriptions: allSubscriptionsDefault,
	type: 'group',
	synchronize: false,
	value: '',
}

const slice = createSlice({
	name: 'dashboard',
	initialState,
	reducers: {
		setSelectedSearchType(state, action) {
			state.type = action.payload
		},
		setSelectedSynchronize(state, action) {
			state.synchronize = action.payload
		},
		setSelectedSearchValue(state, action) {
			state.value = action.payload
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
		setSelectedSearchType,
		setSelectedSynchronize,
		setSelectedSearchValue,
	},
	reducer,
} = slice
