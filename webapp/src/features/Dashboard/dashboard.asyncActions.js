import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

export const fetchGrowthRate = createAsyncThunk(
	'api/growthRate',
	async ({ useCaching, noBusySpinner } = {}, thunkArgs) => {
		return await doAsync({
			url: 'api/growthRate?beginTime=2020-06-12&endTime=2020-06-20',
			useCaching,
			noBusySpinner,
			errorMessage: 'Unable to load growth rate. Please try again later.',
			...thunkArgs,
		})
	}
)
