import React from 'react'
import './page.css'
import Container from 'react-bootstrap/Container'

export default function Page({ children }) {
	return <Container fluid>{children}</Container>
}
