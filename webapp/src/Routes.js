import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Page from './widgets/Page/Page'
import Dashboard from './features/dashboard'
export default function Routes() {
	return (
		<Switch>
			<PageRoute path='/'>
				<Dashboard />
			</PageRoute>
		</Switch>
	)
}

function PageRoute({ children, ...rest }) {
	return (
		<Route {...rest}>
			<Page>{children}</Page>
		</Route>
	)
}
