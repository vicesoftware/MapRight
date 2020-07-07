import slice from './dashboard.slice'

export const selectSlice = (state) => state[slice.name]

export const selectTotalRevenue = (state) => selectSlice(state).totalRevenue
