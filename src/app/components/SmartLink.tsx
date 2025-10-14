"use client"
import React, { useState } from "react";

interface SmartLinkProps {
    text: string;
    url: string;
    type: "youtube" | "spotify" | "applemusic";
    children?: React.ReactNode;
}

export default function SmartLink({ text, url, type, children }: SmartLinkProps) {
    const [showPopUp, setShowPopUp] = useState(false);

    const isMobile = /iPhone|iPad|Android/i.test(
        typeof navigator !== "undefined" ? navigator.userAgent : ""
    );

    function getAppURL() {
        switch (type) {
            case "youtube":
                if (url.startsWith("https://youtu.be/")) {
                    const [base, query] = url.replace("https://youtu.be/", "").split("?");
                    const videoId = base;
                    const queryString = query ? `&${query}` : "";
                    return `youtube://www.youtube.com/watch?v=${videoId}${queryString}`;
                } else {
                    return url.replace("https://www.youtube.com", "youtube://www.youtube.com");
                }
            case "spotify":
                return url.replace("https://open.spotify.com/", "spotify:").replace(/\//g, ":");
            case "applemusic":
                return url.replace("https://music.apple.com", "music://music.apple.com");
            default:
                return url;
        }
    }

    function handleOpenApp() {
        const appURL = getAppURL();
        window.location.href = appURL;

        setTimeout(() => {
            window.location.href = url;
        }, 1000);
    }

    function handleOpenWeb() {
        window.location.href = url;
    }

    return (
        <>
            <button
                onClick={() => {
                    if (isMobile) {
                        setShowPopUp(true);
                    } else {
                        handleOpenWeb();
                    }
                }}
            >
                {children && <span>{children}</span>}
                {text && <span>{text}</span>}
            </button>

            {showPopUp && (
                <div>
                    <div>
                        <h2>Open in app?</h2>
                        <p>Do you want to open this link in the app or continue in your browser?</p>

                        <div>
                            <div>

                                <button
                                    onClick={() => {
                                        setShowPopUp(false);
                                        handleOpenApp();
                                    }}
                                >
                                    Open App
                                </button>
                                <button
                                    onClick={() => {
                                        setShowPopUp(false);
                                        handleOpenWeb();
                                    }}
                                >
                                    Continue in Browser
                                </button>
                            </div>
                            <p
                                onClick={() => setShowPopUp(false)}
                            >
                                Cancel
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}