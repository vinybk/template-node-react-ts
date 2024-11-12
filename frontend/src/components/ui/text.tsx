import React from 'react';
import clsx from 'clsx';

type TextProps = React.HTMLAttributes<HTMLElement> & {
    children: React.ReactNode;
    as?: React.ElementType; // HTML tag (e.g., 'p', 'h1')
    variant?: "body" | "title" | "subtitle" | "caption"; // Text styles
    className?: string; // Additional classes for customization
    onClick?: () => void; // Optional onClick handler
};

const Text = ({ children, as: Component = 'p', variant = "body", className, onClick, ...rest }: TextProps) => {
    // Define Tailwind classes for each variant
    const variantClasses = {
        body: "text-base text-gray-800",               // Standard body text
        title: "text-2xl font-bold text-gray-900",     // Large title text
        subtitle: "text-lg font-semibold text-gray-700", // Subtitle text
        caption: "text-sm text-gray-500",              // Small caption text
    };

    // Additional hover style if onClick is present (indicating a clickable text)
    const clickableStyles = onClick ? "cursor-pointer text-blue-600 hover:text-blue-800" : "";

    return (
        <Component
            className={clsx(variantClasses[variant], clickableStyles, className)}
            onClick={onClick}
            {...rest} // Spread the remaining props (e.g., id, aria-* attributes)
        >
            {children}
        </Component>
    );
};

export default Text;
