import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const baseStyles = "px-8 py-3 rounded-full font-semibold transition-all duration-300 active:scale-95 text-center cursor-pointer";

    const variants = {
        primary: "bg-primary text-white hover:bg-opacity-90 shadow-lg hover:shadow-xl",
        secondary: "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white",
        outline: "bg-transparent text-navy border-2 border-navy hover:bg-navy hover:text-white",
        peach: "bg-accent text-white hover:bg-opacity-90 shadow-lg",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
