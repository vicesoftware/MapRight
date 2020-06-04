import React from 'react'
import { Col, Card } from 'react-bootstrap'
import './Cards.css'
import Icons from '../../assets/icons'

const Cards = ({ ...props }) => {
	console.log('props', props)
	return (
		<Col md={6} lg={6} xl={4}>
			<Card>
				<Card.Body>
					<Card.Title> {props.title} </Card.Title>
					<div className='d-flex align-items-center justify-content-between mb-20'>
						<div className='flex-fill d-flex'>
							<h4 className='mb-0 gotham f-24 font-weight-bold graph-value'>
								{props.graphValue}
							</h4>
							<span className='f-12 align-self-end gotham opacity-50'>
								{`From ${props.range}`}
							</span>
						</div>

						<div className='d-flex align-items-center'>
							<h5 className='text-success gotham f-18 font-weight-bold mb-0 mr-1'>
								{props.successValue}
							</h5>
							<div className='arrow-bubble position-relative rounded-circle overflow-hidden d-flex align-items-center justify-content-center'>
								<img src={props.icon} alt='' height='16' />
								<span className='bg-success position-absolute h-100 w-100'></span>
							</div>
						</div>
					</div>
					<div>{props.children}</div>
				</Card.Body>
			</Card>
		</Col>
	)
}
export default Cards
