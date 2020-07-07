import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Icons from '../../assets/icons'
// import logo from '../../assets/logoWhite.png'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'

export default function NavBar() {
	const [selectedNav, setSelectedNav] = useState('')
	const location = useLocation()
	useEffect(() => {
		const path = location.pathname.replace(/\//g, '')
		setSelectedNav(path)
	}, [location])
	return (
		<Navbar bg='primary' expand='md' variant='dark' className='static-top p-0'>
			<Container fluid>
				<LinkContainer to='/'>
					<Navbar.Brand className='pt-0 mr-30'>
						<Image src={Icons.logoWhiteIcon} alt='map-right-logo' width='200' />
					</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse className='collapse'>
					<Nav className='mr-auto align-items-lg-center'>
						<Nav.Item className={classNames({ active: !selectedNav })}>
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
