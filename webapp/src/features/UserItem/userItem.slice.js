import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './userItem.asyncActions'

const initialState = {
	selectedUserItemModal: null,
	invoice: {},
	billingHistory: [],
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
	actions: { setSelectedUserItemModal },
	reducer,
} = slice
