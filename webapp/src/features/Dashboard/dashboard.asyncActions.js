import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

export const fetchPlans = createAsyncThunk(
	'api/plans',
	async ({ useCaching, noBusySpinner } = {}, thunkArgs) => {
		return await doAsync({
			url: 'api/plans',
			useCaching,
			noBusySpinner,
			errorMessage: 'Unable to load plans. Please try again later.',
			...thunkArgs,
		})
	}
)
