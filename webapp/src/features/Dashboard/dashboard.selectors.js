import slice from './dashboard.slice'

export const selectSlice = (state) => state[slice.name]

export const selectfilter = (state) => selectSlice(state).filter

export const selectPlans = (state) => selectSlice(state).plans
