import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	selectedDashboardModal: null,
}

const slice = createSlice({
	name: 'dashboard',
	initialState,
	reducers: {},
})

export default slice

export const { name, actions, reducer } = slice
