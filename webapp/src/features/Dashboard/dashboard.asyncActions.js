import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

export const fetchLifeTimeValue = createAsyncThunk(
	'api/lifeTimeValue',
	async ({ useCaching, noBusySpinner } = {}, thunkArgs) => {
		return await doAsync({
			url: 'api/lifeTimeValue?beginTime=2020-07-03&endTime=2020-07-10',
			useCaching,
			noBusySpinner,
			errorMessage: 'Unable to load life time value. Please try again later.',
			...thunkArgs,
		})
	}
)
