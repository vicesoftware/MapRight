import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './dashboard.asyncActions'

const initialState = {
	selectedDashboardModal: null,
	activeUserRate: {},
}

const slice = createSlice({
	name: 'dashboard',
	initialState,
	extraReducers: {
		[asyncActions.fetchActiveUserRate.fulfilled]: (state, action) => {
			state.activeUserRate = action.payload
		},
	},
})

export default slice

export const { name, actions, reducer } = slice
