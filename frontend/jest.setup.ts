// jest.setup.js
import '@testing-library/jest-dom';

// Suppress specific Radix UI warning in test environment
const originalConsoleError = console.error;
const originalConsoleWarning = console.warn;

console.error = (...args) => {
    if (
        typeof args[0] === 'string' &&
        args[0].includes("for the component to be accessible for screen reader users")) {
        // Suppress the specific DialogTitle warning in test environment
        return;
    }
    originalConsoleError(...args);
};

console.warn = (...args) => {
    if (
        typeof args[0] === 'string' &&
        args[0].includes("Missing `Description` or `aria-describedby=")) {
        // Suppress the specific DialogTitle warning in test environment
        return;
    }
    originalConsoleWarning(...args);
};