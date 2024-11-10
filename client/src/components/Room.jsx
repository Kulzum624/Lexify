import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


const Room = () => {
    const { roomId } = useParams();
    const [userType, setUserType] = useState('');
    const [digit, setDigit] = useState('');
    const elementRef = useRef(null);

    const isLoggedIn = async () => {
        try {
            const res = await fetch('/userType', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            if (res.status === 200) {
                const result = await res.json();
                setUserType(result.userType);
                setDigit(result.id);
            }
        } catch (error) {
            console.log(error);
            setUserType("");
        }
    }

    useEffect(() => {
        isLoggedIn();
    }, []);

    useEffect(() => {
        if (!userType || !digit) {
            return;
        }
    
        let zp;
        const appID = 2025890391;
        const serverSecret = "9f4e4bad25c51edbc1150ee2f495f9f0";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, userType, "Umair");
    
        try {
            zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container: elementRef.current,
                scenario: {
                    mode: ZegoUIKitPrebuilt.VideoConference,
                },
            });
        } catch (error) {
            console.error("Error joining room:", error);
        }
    
        return () => {
            if (zp) {
                zp.destroy();
            }
        };
    }, [roomId, userType, digit]);
    

    return (
        <div>
        <div ref={elementRef} />
    </div>         
    )
}

export default Room;
