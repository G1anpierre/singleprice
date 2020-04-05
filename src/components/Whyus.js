import React from 'react'
import './whyus.scss'

const Whyus = () => {
    return (
        <React.Fragment>
            <div className="whyus"> 
                <h3 className="whyus__title">Why Us</h3>
                <ul className="whyus__group list-group">
                    <li>Tutorials by Industry experts</li>
                    <li>Peer & expert code review</li>
                    <li>Coding exercises</li>
                    <li>Access to our Github repos</li>
                    <li>Community forum</li>
                    <li>Flashcard decks</li>
                    <li>New videos every week</li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Whyus
