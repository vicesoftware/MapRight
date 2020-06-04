import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from 'react-router-bootstrap'

export default function NavBar() {
	return (
		<Navbar bg='dark' variant='dark'>
			<LinkContainer to='/'>
				<Navbar.Brand>REVENUE DASHBOARD</Navbar.Brand>
			</LinkContainer>
		</Navbar>
	)
}
