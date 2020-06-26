import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './userItem.asyncActions'

const defaultActivityHistory = []

const initialState = {
	selectedUserItemModal: null,
	userInformation: {},
	billingHistory: {},
	activityHistory: defaultActivityHistory,
}

const slice = createSlice({
	name: 'userItem',
	initialState,
	reducers: {
		setSelectedUserItemModal(state, action) {
			state.selectedUserItemModal = action.payload || null
		},
	},
	extraReducers: {
		[asyncActions.fetchUserInformation.fulfilled]: (state, action) => {
			state.userInformation = action.payload
		},
		[asyncActions.fetchBillingHistory.fulfilled]: (state, action) => {
			state.billingHistory = action.payload
		},
		[asyncActions.fetchActivityHistory.fulfilled]: (state, action) => {
			state.activityHistory = action.payload || defaultActivityHistory
		},
	},
})

export default slice

export const {
	name,
	actions: { setSelectedUserItemModal },
	reducer,
} = slice
