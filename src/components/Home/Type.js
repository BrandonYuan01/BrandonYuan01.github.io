import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Software Developer",
                    "University of Virginia Student",
                    "Computer Science Major",
                    "Data Science Minor"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
                delay: 75,
            }}
        />
    );
}

export default Type;