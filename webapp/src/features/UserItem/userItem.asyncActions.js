import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

export const fetchBillingHistory = createAsyncThunk(
	'billingHistory',
	async (accountId, { useCaching, noBusySpinner } = {}, thunkArgs) => {
		return await doAsync({
			url: `/accounts/${accountId}/invoices`,
			httpMethod: 'get',
			useCaching,
			noBusySpinner,
			errorMessage: 'Unable to load billing history. Please try again later.',
			...thunkArgs,
		})
	}
)

export const saveInvoice = createAsyncThunk(
	'saveInvoice',
	async (invoice, thunkArgs, { useCaching, noBusySpinner } = {}) => {
		return await doAsync({
			url: 'api/user/invoice',
			httpMethod: 'post',
			httpConfig: {
				body: JSON.stringify(invoice),
			},
			useCaching,
			noBusySpinner,
			errorMessage: 'Unable to save invoice details. Please try again later.',
			...thunkArgs,
		})
	}
)

export const deleteInvoice = createAsyncThunk(
	'deleteInvoice',
	async (invoiceId, thunkArgs, { useCaching, noBusySpinner } = {}) => {
		return await doAsync({
			url: `api/user/invoice/${invoiceId}`,
			httpMethod: 'delete',
			useCaching,
			noBusySpinner,
			errorMessage: 'Unable to delete invoice. Please try again later.',
			...thunkArgs,
		})
	}
)

export const updateInvoice = createAsyncThunk(
	'updateInvoice',
	async ({ invoices, id }, thunkArgs, { useCaching, noBusySpinner } = {}) => {
		return await doAsync({
			url: `users/invoices/${id}`,
			httpMethod: 'patch',
			httpConfig: {
				body: JSON.stringify({ invoices }),
			},
			useCaching,
			noBusySpinner,
			errorMessage:
				'Unable to update user information. Please try again later.',
			...thunkArgs,
		})
	}
)
