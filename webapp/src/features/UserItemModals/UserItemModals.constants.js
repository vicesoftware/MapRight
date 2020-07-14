export const USERITEM_MODAL_TYPES = {
	ADD_INVOICE_MODAL: 'addInvoiceModal',
	CANCEL_SUBSCRIPTION_MODAL: 'cancelSubscriptionModal',
	DELETE_INVOICE_MODAL: 'deleteInvoiceModal',
	UPDATE_INVOICE_MODAL: 'updateInvoiceModal',
}

export const ADD_INVOICE_MODAL = {
	INVOICE_STATUS: [
		{ option: 'Invoice Status', value: '' },
		{ option: 'Charge Invoice', value: 'Charge Invoice' },
		{ option: 'Credit Invoice', value: 'Credit Invoice' },
	],
	CHARGE_INVOICE_STATUS: [
		{ option: 'Pending', value: 'Pending' },
		{ option: 'Past Due', value: 'Past Due' },
		{ option: 'Processing', value: 'Processing' },
		{ option: 'Paid', value: 'Paid' },
		{ option: 'Failed', value: 'Failed' },
	],
	CREDIT_INVOICE_STATUS: [
		{ option: 'Open', value: 'Open' },
		{ option: 'Processing', value: 'Processing' },
		{ option: 'Closed', value: 'Closed' },
		{ option: 'Voided', value: 'Voided' },
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
