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

export const fetchLifeTimeValue = createAsyncThunk(
	'api/lifeTimeValue',
	async (filters, thunkArgs, { noBusySpinner } = {}) => {
		const filterQs = createFilterString(filters)
		const fullQs = filterQs ? `?${filterQs}` : ''
		return await doAsync({
			url: `api/lifeTimeValue${fullQs}`,
			useCaching: true,
			noBusySpinner,
			errorMessage: 'Unable to load life time value. Please try again later.',
			...thunkArgs,
		})
	}
)

export const fetchTotalRevenue = createAsyncThunk(
	'api/totalRevenue',
	async (filters, thunkArgs, { noBusySpinner } = {}) => {
		const filterQs = createFilterString(filters)
		const fullQs = filterQs ? `?${filterQs}` : ''
		return await doAsync({
			url: `api/revenue${fullQs}`,
			useCaching: true,
			noBusySpinner,
			errorMessage: 'Unable to load total revenue. Please try again later.',
			...thunkArgs,
		})
	}
)

export const fetchActiveUserRate = createAsyncThunk(
	'api/activeUserRate',
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

export const fetchGrowthRate = createAsyncThunk(
	'api/growthRate',
	async (filters, thunkArgs, { noBusySpinner } = {}) => {
		const filterQs = createFilterString(filters)
		const fullQs = filterQs ? `?${filterQs}` : ''
		return await doAsync({
			url: `api/growthRate${fullQs}`,
			useCaching: true,
			noBusySpinner,
			errorMessage: 'Unable to load growth rate. Please try again later.',
			...thunkArgs,
		})
	}
)

export const fetchAllSubscriptions = createAsyncThunk(
	'subscriptions',
	async (filters, thunkArgs, { noBusySpinner } = {}) => {
		const filterQs = createFilterString(filters)
		const fullQs = filterQs ? `?${filterQs}` : ''
		return await doAsync({
			url: `api/subscriptions${fullQs}`,
			useCaching: true,
			noBusySpinner,
			errorMessage: 'Unable to load subscription data. Please try again later.',
			...thunkArgs,
		})
	}
)
