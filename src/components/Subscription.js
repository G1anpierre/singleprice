import React from 'react'
import Modal from './Modal';
import './subscription.scss';

const Subscription = () => {

    const [show, setShow ] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <div className="subscription">
                <h3 className="subscription__title">Monthly Subscription</h3>
                <div className="subscription__amount">
                    <span className="price">$29</span>
                    <span className="month">per month</span>
                </div>
                <p className="subscription__text">Full access for less than $1 a day</p>
                <button onClick={handleShow} className=" btn btn-block subscription__button bg-success"> Sign Up</button>
                <Modal onDismiss={handleClose} onHide={show} showClose={true} collapseShowClose={true}>
                    <h1>Hello World from Modal</h1>
                </Modal>
            </div>  
        </React.Fragment>
    )
}


export default Subscription
