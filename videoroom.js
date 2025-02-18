import React, { useState } from 'react';

const VideoRoom = () => {
    const [username, setUsername] = useState('');
    const [videoJoinVisible, setVideoJoinVisible] = useState(false);
    const [videosVisible, setVideosVisible] = useState(false);

    const handleStart = () => {
        setVideoJoinVisible(true);
    };

    const handleRegister = () => {
        if (username.trim() === '') {
            alert('Please enter a display name');
            return;
        }
        setVideosVisible(true);
    };

    const checkEnter = (event) => {
        if (event.key === 'Enter') {
            handleRegister();
        }
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">Video Room Demo</div>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="header">
                            <h1>Video Room Demo
                                <button className="start-button" onClick={handleStart}>Start</button>
                            </h1>
                        </div>
                    </div>
                </div>

                {videoJoinVisible && (
                    <div className="video-join">
                        <div className="row">
                            <span className="badge">You</span>
                            <div className="controls">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        placeholder="Choose a display name"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        onKeyPress={checkEnter}
                                    />
                                    <button className="join-button" onClick={handleRegister}>Join the room</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {videosVisible && (
                    <div className="videos">
                        <div className="row">
                            <div className="video-card">
                                <div className="card-header">
                                    <span className="card-title">Local Video</span>
                                </div>
                                <div className="card-body" id="videolocal"></div>
                            </div>
                            <div className="video-card">
                                <div className="card-header">
                                    <span className="card-title">Remote Video #1</span>
                                </div>
                                <div className="card-body" id="videoremote1"></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <footer className="footer">
                <div className="footer-content">Video Room Demo Footer</div>
            </footer>
        </div>
    );
};

export default VideoRoom;
