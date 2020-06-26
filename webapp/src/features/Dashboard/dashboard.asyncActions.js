import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'
import { createFilterString } from './dashboard.utils'

export const fetchActiveUserRate = createAsyncThunk(
	'api/users/activeRate',
	async (filters, thunkArgs, { noBusySpinner } = {}) => {
		const filterQs = createFilterString(filters)
		const fullQs = filterQs ? `?${filterQs}` : ''
		return await doAsync({
			url: `api/users/activeRate${fullQs}`,
			useCaching: true,
			noBusySpinner,
			errorMessage: 'Unable to load active user rate. Please try again later.',
			...thunkArgs,
		})
	}
)
