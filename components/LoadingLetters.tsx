import React from "react";

interface LoadingLettersProps {
    text: string; // The text you want to display with random letters
    loadingDuration: number; // Total duration for the loading effect (in milliseconds)
    interval: number; // How often to change the letters (in milliseconds)
    className?: string; //Optional CSS class to apply for styling
    placeholderChar?: string //optional character to use as the placeholder
}


export function LoadingLetters({ text, loadingDuration, interval, className, placeholderChar = "_" }: LoadingLettersProps) {
    const [displayText, setDisplayText] = React.useState<string>(
        placeholderChar.repeat(text.length)
    );
    const [intervalId, setIntervalId] = React.useState<number | null>(null);
    const [timeoutId, setTimeoutId] = React.useState<number | null>(null);
    const validLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";  //Characters allowed


    React.useEffect(() => {
        let currentText = placeholderChar.repeat(text.length); // Start with placeholders
        let currentIndex = 0;

        const randomizeLetters = () => {
            // Create a new string with random characters *except* for the characters that have already been finalized.
            let newText = "";
            for (let i = 0; i < text.length; i++) {
                if (i < currentIndex) {
                    newText += text[i]; // Add the finalized character
                } else {
                    newText += validLetters[Math.floor(Math.random() * validLetters.length)]; // Add random char
                }
            }
            setDisplayText(newText); // Update the displayed text

            //check if the character at the current index is correct. If it is advance to the next character.
            if (currentText[currentIndex] === text[currentIndex]) {
                currentIndex++;
            }

            // Gradually build the correct string using the placeholder.
            currentText = currentText.substring(0, currentIndex) + text[currentIndex] + currentText.substring(currentIndex + 1);
        };



        const id = window.setInterval(randomizeLetters, interval);
        setIntervalId(id);

        const timeout = window.setTimeout(() => {
            window.clearInterval(id); // Stop the interval
            setIntervalId(null);
            setDisplayText(text); // Ensure the final text is displayed
        }, loadingDuration);
        setTimeoutId(timeout);

        // Cleanup function: Clear the interval and timeout when the component unmounts or when loadingDuration/interval changes
        return () => {
            if (intervalId) {
                window.clearInterval(intervalId);
            }
            if (timeoutId) {
                window.clearTimeout(timeoutId);
            }
        };
    }, [text, loadingDuration, interval, placeholderChar]); // Re-run the effect if these props change.  Crucial!

    return <span className={className}>{displayText}</span>;
}