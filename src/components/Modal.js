import React, { Children } from 'react';
import {Modal as BootstrapModal} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './modal.scss'

const Modal = (props) => {
    
    const { children, onDismiss, onHide, showClose, collapseShowClose } = props;
    console.log(onHide);
    return (
        <BootstrapModal
        show={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
       
        dialogClassName={collapseShowClose ? 'dialog' : ''}
        >
            <BootstrapModal.Body>
                {showClose && (
                    <div className="row justify-content-end">
                        <div className="href" onClick={onDismiss}>
                            <FontAwesomeIcon icon="coffee" />
                        </div>
                    </div>
                )}
                {children}


            </BootstrapModal.Body>
            
        </BootstrapModal>
    )
}


export default Modal;