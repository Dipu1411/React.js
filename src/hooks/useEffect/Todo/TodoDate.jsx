import React, { useState, useEffect } from "react";

export default function TodoDate() {
    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const formattedDate = date.toLocaleDateString();
            const formattedTime = date.toLocaleTimeString();
            setDateTime(`${formattedDate} - ${formattedTime}`);
        }, 1000);

        // Cleanup interval on unmount
        return () => clearInterval(interval);
    }, []);

    // Correction: Added the return statement to display the date/time.
    return (
        <div>
            <h2 className="date-time">{dateTime}</h2>
        </div>
    );
}