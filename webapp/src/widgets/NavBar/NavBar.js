import React from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Icons from '../../assets/icons'
import logo from '../../assets/logoWhite.png'

export default function NavBar() {
	return (
		<Navbar bg='primary' expand='md' variant='dark' className='static-top p-0'>
			<Container fluid>
				<LinkContainer to='/'>
					<Navbar.Brand className='pt-0 mr-30'>
						<Image src={logo} alt='map-right-logo' width='200' />
					</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse className='collapse'>
					<Nav className='mr-auto align-items-lg-center'>
						<Nav.Item className='active'>
							<LinkContainer to='/'>
								<Nav.Link className='px-40'>Revenue Dashboard</Nav.Link>
							</LinkContainer>
							<span className='sr-only'>(current)</span>
						</Nav.Item>
					</Nav>
					<Nav className='nav-bar-right'>
						<Nav.Item>
							<LinkContainer to=''>
								<Nav.Link className='d-flex align-items-center'>
									Return To Admin
									<Image
										src={Icons.arrowRightIcon}
										alt='arrow-right-icon'
										width='15'
										className='ml-2'
									/>
								</Nav.Link>
							</LinkContainer>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
