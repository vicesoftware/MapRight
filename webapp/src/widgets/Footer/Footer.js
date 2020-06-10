import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => (
	<footer className='py-30'>
		<Container fluid>
			<span className='f-14'>
				Copyright {new Date().getFullYear()} Mapright
			</span>
		</Container>
	</footer>
)

export default Footer
