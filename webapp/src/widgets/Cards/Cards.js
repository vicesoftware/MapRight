import React from 'react'
import { Card } from 'react-bootstrap'
import classNames from 'classnames'
import './Cards.css'

const Cards = ({ ...props }) => {
	return (
		<Card
			className={classNames('mb-25', {
				'h-100': props.title === 'Filter',
			})}
		>
			<Card.Body className='p-15'>
				<Card.Title className='gotham  lh-25 mb-15'>{props.title}</Card.Title>
				{props.children}
			</Card.Body>
		</Card>
	)
}
export default Cards
