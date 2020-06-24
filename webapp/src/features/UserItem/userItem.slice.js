import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './userItem.asyncActions'

const defaultActivityHistory = []

const initialState = {
	selectedUserItemModal: null,
	activityHistory: defaultActivityHistory,
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
		[asyncActions.fetchActivityHistory.fulfilled]: (state, action) => {
			state.activityHistory = action.payload || defaultActivityHistory
		},
	},
})

export default slice

export const {
	name,
	actions: { setSelectUserItemModal },
	reducer,
} = slice
