import React, { useState } from 'react';

const LogoutModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogout = () => {
        
        console.log('Logged out!');
        setShow(false); 
    };

    return (
        <>
            <button className="btn btn-outline-warning" onClick={handleShow}>
                Log Out
            </button>
            {show && (
                <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Log Out</h5>
                                <button type="button" className="btn-close" onClick={handleClose}></button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to log out?</p>
                                <p>You have unsaved changes. Choose an action:</p>
                                <ul>
                                    <li>Save and Log Out</li>
                                    <li>Log Out Without Saving</li>
                                    <li>Cancel</li>
                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-danger" onClick={handleLogout}>
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default LogoutModal;
