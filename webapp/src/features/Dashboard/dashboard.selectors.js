import slice from './dashboard.slice'

export const selectSlice = (state) => state[slice.name]

export const selectAllSubscriptions = (state) =>
	selectSlice(state).allSubscriptions

export const selectSearchType = (state) => selectSlice(state).type

export const selectSynchronize = (state) => selectSlice(state).synchronize

export const selectSearchFieldValue = (state) => selectSlice(state).value
