import React from 'react'
import { Card } from 'react-bootstrap'
import classNames from 'classnames'
import './Cards.css'

const Cards = ({ shouldShowTitle = true, ...props }) => {
	return (
		<>
			<Card
				className={classNames('shadow-sm border-0 mb-25', {
					'h-100': props.title === 'Filter',
				})}
			>
				<Card.Body className='p-15'>
					{shouldShowTitle && (
						<Card.Title className='font-weight-normal d-block gotham lh-25 mb-15'>
							{props.title}
						</Card.Title>
					)}
					{props.children}
				</Card.Body>
			</Card>
		</>
	)
}
export default Cards
