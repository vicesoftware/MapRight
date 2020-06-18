import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

export const fetchTotalRevenue = createAsyncThunk(
	'api/totalRevenue',
	async ({ useCaching, noBusySpinner } = {}, thunkArgs) => {
		return await doAsync({
			url: 'api/revenue?beginTime=2020-06-16&endTime=2020-07-16',
			useCaching,
			noBusySpinner,
			errorMessage: 'Unable to load total revenue. Please try again later.',
			...thunkArgs,
		})
	}
)
