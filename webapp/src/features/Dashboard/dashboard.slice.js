import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './dashboard.asyncActions'

const allSubscriptionDefault = []

const initialState = {
	allSubscriptions: allSubscriptionDefault,
}

const slice = createSlice({
	name: 'dashboard',
	initialState,
	reducers: {},
	extraReducers: {
		[asyncActions.fetchAllSubscriptions.fulfilled]: (state, action) => {
			state.allSubscriptions = action.payload || allSubscriptionDefault
		},
	},
})

export default slice

export const { name, actions, reducer } = slice
