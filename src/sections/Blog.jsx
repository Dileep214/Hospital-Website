import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const Blog = () => {
    const posts = [
        {
            title: "Common Symptoms in Newborns: What Parents should know",
            excerpt: "Understanding the early signs of health in your newborn can help you stay calm and act fast when needed.",
            date: "Mar 15, 2026",
            author: "Dr. Shankar",
            category: "Newborn Care"
        },
        {
            title: "The Importance of Regular Vaccination for Children",
            excerpt: "Stay updated on the latest immunization schedule to protect your child from preventable diseases.",
            date: "Mar 10, 2026",
            author: "Health Team",
            category: "Health Tips"
        },
        {
            title: "Managing Food Allergies in Toddlers",
            excerpt: "A guide for parents to identify and manage common food allergies in young children.",
            date: "Mar 05, 2026",
            author: "Pediatric Team",
            category: "Nutrition"
        }
    ];

    return (
        <SectionWrapper id="blog" bg="white">
            <SEO 
                title="Pediatric Health Blog | Shankar Children's Hospital"
                description="Expert health tips, symptoms guides, and treatment advice from the leading pediatricians in Tuni."
                canonical="/blog"
            />
            <div className="text-center mb-16">
                <span className="text-primary font-bold tracking-widest uppercase text-sm">Health Insights</span>
                <h2 className="text-3xl md:text-5xl font-bold text-navy mt-4 mb-6">Expert Advice for <br />Healthy Children.</h2>
                <p className="text-navy/70 max-w-2xl mx-auto text-lg leading-relaxed">
                    Our blog features helpful articles, symptoms guides, and expert advice to help you navigate your child's developmental journey.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {posts.map((post, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className="bg-cream/20 rounded-[40px] overflow-hidden border border-gray-100 shadow-sm flex flex-col"
                    >
                        <div className="p-8 flex-1">
                            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-6">
                                {post.category}
                            </span>
                            <h3 className="text-2xl font-bold text-navy mb-4 leading-tight hover:text-primary transition-colors cursor-pointer">
                                {post.title}
                            </h3>
                            <p className="text-navy/60 text-sm leading-relaxed mb-8">
                                {post.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between text-[11px] font-bold text-navy/40 uppercase tracking-widest mt-auto">
                                <div className="flex items-center gap-2">
                                    <Calendar size={14} className="text-secondary" />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User size={14} className="text-secondary" />
                                    <span>{post.author}</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-white border-t border-gray-50">
                            <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-4 transition-all uppercase tracking-widest">
                                Read More <ArrowRight size={16} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Blog;
