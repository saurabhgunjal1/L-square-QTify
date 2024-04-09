import React, { useState } from 'react';

const ErrorBoundary = ({ children }) => {
    const [hasError, setHasError] = useState(false);

    const handleOnError = (error, errorInfo) => {
        // You can log the error to an error reporting service
        console.error('Error Boundary caught an error:', error, errorInfo);
        setHasError(true);
    };

    if (hasError) {
        // Render custom fallback UI when an error occurs
        return <h1>Website under development. Please try again later.</h1>;
    }

    return children;
};

export default ErrorBoundary;
