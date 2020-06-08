import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Page from './widgets/Page/Page'
import UserItem from './features/userItem'

export default function Routes() {
	return (
		<Switch>
			<PageRoute path='/userItem'>
				<UserItem />
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
