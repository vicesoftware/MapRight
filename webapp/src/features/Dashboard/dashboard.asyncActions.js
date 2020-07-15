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

export const fetchStartDate = createAsyncThunk(
	'startDate',
	async ({ useCaching, noBusySpinner } = {}, thunkArgs) => {
		return await doAsync({
			url: 'filter/start-date',
			useCaching,
			noBusySpinner,
			errorMessage: 'Unable to fetch start date. Please try again later.',
			...thunkArgs,
		})
	}
)
