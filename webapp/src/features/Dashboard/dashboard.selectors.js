import slice from './dashboard.slice'

export const selectSlice = (state) => state[slice.name]

export const selectAllSubscriptions = (state) =>
	selectSlice(state).allSubscriptions
