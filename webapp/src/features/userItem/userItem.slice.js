import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './userItem.asyncActions'

const initialState = {
	selectedUserItemModal: null,
	billingHistory: {},
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
		[asyncActions.fetchBillingHistory.fulfilled]: (state, action) => {
			state.billingHistory = action.payload
		},
	},
})

export default slice

export const {
	name,
	actions: { setSelectedUserItemModal },
	reducer,
} = slice
