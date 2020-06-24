import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './dashboard.asyncActions'

const allSubscriptionsDefault = []

const initialState = {
	allSubscriptions: allSubscriptionsDefault,
}

const slice = createSlice({
	name: 'dashboard',
	initialState,
	reducers: {},
	extraReducers: {
		[asyncActions.fetchAllSubscriptions.fulfilled]: (state, action) => {
			state.allSubscriptions = action.payload || allSubscriptionsDefault
		},
	},
})

export default slice

export const { name, actions, reducer } = slice
