import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

export const fetchUserInformation = createAsyncThunk(
	'api/userInformation',
	async ({ useCaching, noBusySpinner } = {}, thunkArgs) => {
		return await doAsync({
			url: 'api/userInformation?subscriptionId=n0il5aple0be',
			useCaching,
			noBusySpinner,
			errorMessage: 'Unable to load user information. Please try again later.',
			...thunkArgs,
		})
	}
)
