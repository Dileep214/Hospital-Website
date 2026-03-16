import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({
    children,
    id,
    className = '',
    bg = 'transparent',
    fullWidth = false
}) => {
    return (
        <section
            id={id}
            className={`py-20 px-6 md:px-12 lg:px-24 overflow-hidden bg-${bg} ${className}`}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={fullWidth ? "w-full" : "max-w-7xl mx-auto"}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
