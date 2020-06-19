import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './dashboard.asyncActions'

const initialState = {
	selectedDashboardModal: null,
	lifeTimeValue: {},
}

const slice = createSlice({
	name: 'dashboard',
	initialState,
	extraReducers: {
		[asyncActions.fetchLifeTimeValue.fulfilled]: (state, action) => {
			state.lifeTimeValue = action.payload
		},
	},
})

export default slice

export const { name, actions, reducer } = slice
