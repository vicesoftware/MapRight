import slice from './dashboard.slice'

export const selectSlice = (state) => state[slice.name]

export const selectAllSubscriptions = (state) =>
	selectSlice(state).allSubscriptions

export const selectEventType = (state) => selectSlice(state).eventType

export const selectSwitchToggle = (state) => selectSlice(state).switchToggle

export const selectSearchFieldValue = (state) =>
	selectSlice(state).searchFieldValue
