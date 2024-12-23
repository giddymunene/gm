import React, { useState } from 'react';

const FloatingHelpBubble = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userMessage, setUserMessage] = useState("");

    const toggleHelp = () => {
        setIsOpen(!isOpen);
    };

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        alert("Thank You For Contacting Dantech Cyber");
        setUserMessage(""); // Clear the message box after submission
    };

    return (
        <>
            {/* Help Bubble */}
            <button 
                className="btn btn-primary rounded-circle shadow-lg position-fixed d-flex align-items-center justify-content-center" 
                style={{
                    width: '60px',
                    height: '60px',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 1000
                }}
                onClick={toggleHelp}
            >
                ?
            </button>

            {/* Help Modal */}
            {isOpen && (
                <div 
                    className="modal d-flex justify-content-center align-items-center" 
                    style={{
                        display: 'block',
                        background: 'rgba(0, 0, 0, 0.5)'
                    }}
                >
                    <div className="modal-dialog">
                        <div className="modal-content p-4">
                            <button 
                                type="button" 
                                className="btn-close position-absolute top-0 end-0 m-3" 
                                aria-label="Close"
                                onClick={toggleHelp}
                            ></button>
                            <h3 className="modal-title text-center mb-3">How Can I Help You?</h3>
                            <p className="text-muted">
                                This is your help assistant. Feel free to ask questions, provide feedback, 
                                or explore further support options.
                            </p>
                            <form onSubmit={handleMessageSubmit}>
                                <div className="mb-3">
                                    <textarea 
                                        className="form-control" 
                                        rows="4" 
                                        placeholder="Type your question or feedback here..." 
                                        value={userMessage}
                                        onChange={(e) => setUserMessage(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FloatingHelpBubble;
