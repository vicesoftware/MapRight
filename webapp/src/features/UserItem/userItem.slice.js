import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './userItem.asyncActions'

const defaultActivityHistory = []

const initialState = {
	selectedUserItemModal: null,
	userInformation: {},
	activityHistory: defaultActivityHistory,
	invoice: {},
	billingHistory: [],
}

const slice = createSlice({
	name: 'userItem',
	initialState,
	reducers: {
		setSelectUserItemModal(state, action) {
			state.selectedUserItemModal = action.payload || null
		},
	},
	extraReducers: {
		[asyncActions.fetchUserInformation.fulfilled]: (state, action) => {
			state.userInformation = action.payload
		},
		[asyncActions.fetchActivityHistory.fulfilled]: (state, action) => {
			state.activityHistory = action.payload || defaultActivityHistory
		},
		[asyncActions.saveInvoice.fulfilled]: (state, action) => {
			state.invoice = action.payload
		},
		[asyncActions.updateInvoice.fulfilled]: (state, action) => {
			state.invoice = action.payload
		},
		[asyncActions.fetchBillingHistory.fulfilled]: (state, action) => {
			state.billingHistory = action.payload || null
		},
	},
})

export default slice

export const {
	name,
	actions: { setSelectUserItemModal },
	reducer,
} = slice
