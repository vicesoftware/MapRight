import slice from './dashboard.slice'

export const selectSlice = (state) => state[slice.name]

export const selectChurnRate = (state) => selectSlice(state).churnRate
