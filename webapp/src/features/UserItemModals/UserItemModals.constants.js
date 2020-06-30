export const USERITEM_MODAL_TYPES = {
	ADD_INVOICE_MODAL: 'addInvoiceModal',
	CANCEL_SUBSCRIPTION_MODAL: 'cancelSubscriptionModal',
	DELETE_INVOICE_MODAL: 'deleteInvoiceModal',
}

export const ADD_INVOICE_MODAL = {
	INVOICE_STATUS: [
		{ option: 'Invoice Status', value: '' },
		{ option: 'Pending', value: 'Pending' },
		{ option: 'Past Due', value: 'Past Due' },
		{ option: 'Processing', value: 'Processing' },
		{ option: 'Paid', value: 'Paid' },
		{ option: 'Failed', value: 'Failed' },
	],
	PLANS: [
		{ option: 'Plans', value: '' },
		{ option: 'Unlimited Plan', value: 'Unlimited' },
		{ option: 'Flex Plan', value: 'Flex' },
	],
	ADD_ONS: [
		{ option: 'Number Of Add-Ons', value: '' },
		{ option: '7 Add-Ons', value: 7 },
		{ option: '5 Add-Ons', value: 5 },
	],
}
