import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

export const fetchUserInformation = createAsyncThunk(
	'api/userInformation',
	async ({ noBusySpinner } = {}, thunkArgs) => {
		return await doAsync({
			url: 'api/userInformation?subscriptionId=n1baut0n8wua',
			useCaching: true,
			noBusySpinner,
			errorMessage: 'Unable to load user information. Please try again later.',
			...thunkArgs,
		})
	}
)

export const fetchBillingHistory = createAsyncThunk(
	'api/billingHistory',
	async ({ noBusySpinner } = {}, thunkArgs) => {
		return await doAsync({
			url: 'api/billingHistory?subscriptionId=n1baut0n8wua',
			useCaching: true,
			noBusySpinner,
			errorMessage: 'Unable to load billing history. Please try again later.',
			...thunkArgs,
		})
	}
)

export const fetchActivityHistory = createAsyncThunk(
	'activityHistory',
	async (accountId, thunkArgs, { noBusySpinner } = {}) =>
		await doAsync({
			url: `api/accounts/${accountId}/history`,
			useCaching: true,
			noBusySpinner,
			errorMessage:
				'Unable to load user activity history data. Please try again later.',
			...thunkArgs,
		})
)
