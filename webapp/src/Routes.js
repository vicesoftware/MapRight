import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Page from './widgets/Page/Page'
import ReportCard from './features/reportCard'
export default function Routes() {
	return (
		<Switch>
			<PageRoute path='/'>
				<ReportCard />
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
