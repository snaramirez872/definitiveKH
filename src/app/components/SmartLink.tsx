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
            case "youtube": {
                if (url.startsWith("https://youtu.be/")) {
                    const [base, query] = url.replace("https://youtu.be/", "").split("?");
                    const videoId = base;
                    const queryString = query ? `?${query}` : "";
                    return `vnd.youtube://${videoId}${queryString}`;
                }
                // Full YouTube URLs
                const match = url.match(/[?&]v=([^&]+)/);
                if (match) {
                    return `vnd.youtube://${match[1]}`;
                }
                return url;
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
            window.open(url, "_blank");
        }, 1000);
    }

    function handleOpenWeb() {
        window.open(url, "_blank");
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
                className="
                    cursor-pointer border-0 py-2
                    w-[60%] hover:w-[45%]
                    bg-black text-white hover:text-black hover:bg-yellow-400
                    md:w-[20%] md:hover:w-[15%]
                "
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