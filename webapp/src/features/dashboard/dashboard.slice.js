import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './dashboard.asyncActions'

const initialState = {
	churnRate: {},
}

const slice = createSlice({
	name: 'dashboard',
	initialState,
	extraReducers: {
		[asyncActions.fetchChurnRate.fulfilled]: (state, action) => {
			state.churnRate = action.payload.data
		},
	},
})

export default slice

export const { name, actions, reducer } = slice
