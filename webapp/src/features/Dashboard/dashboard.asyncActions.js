import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'
import { createFilterString } from './dashboard.utils'

export const fetchChurnRate = createAsyncThunk(
	'api/users/chrunRate',
	async (filters, thunkArgs, { noBusySpinner } = {}) => {
		const filterQs = createFilterString(filters)
		const fullQs = filterQs ? `?${filterQs}` : ''
		return await doAsync({
			url: `api/users/churnRate${fullQs}`,
			useCaching: true,
			noBusySpinner,
			errorMessage:
				'Unable to load subscription plans. Please try again later.',
			...thunkArgs,
		})
	}
)
