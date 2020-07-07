import slice from './dashboard.slice'

export const selectSlice = (state) => state[slice.name]

export const selectAllSubscriptions = (state) =>
	selectSlice(state).allSubscriptions

export const selectSearchType = (state) => selectSlice(state).searchType

export const selectOutdatedSubscriptions = (state) =>
	selectSlice(state).outdatedSubscriptions

export const selectSearchValue = (state) => selectSlice(state).searchValue
