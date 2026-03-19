import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { Instagram, Play, Heart, MessageCircle, Share2 } from 'lucide-react';

const ReelCard = ({ reel, index, isPlaying, onToggle }) => {
    const videoRef = React.useRef(null);

    React.useEffect(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.play().catch(err => console.error("Playback failed", err));
            } else {
                videoRef.current.pause();
            }
        }
    }, [isPlaying]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onToggle(reel.id)}
            className="group relative aspect-[9/16] w-[280px] sm:w-[320px] rounded-[2rem] overflow-hidden bg-navy shadow-xl cursor-pointer"
        >
            {/* video source */}
            <video
                ref={videoRef}
                src={reel.video}
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${isPlaying ? 'opacity-100' : 'opacity-70 group-hover:opacity-90'}`}
                loop
                playsInline
                preload="none"
            />

            {/* Overlays */}
            <div className={`absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent transition-opacity ${isPlaying ? 'opacity-30' : 'opacity-60'}`}></div>

            {/* Play/Pause Icon */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white"
                >
                    {isPlaying ? (
                        <div className="flex gap-1">
                            <div className="w-1.5 h-6 bg-white rounded-full"></div>
                            <div className="w-1.5 h-6 bg-white rounded-full"></div>
                        </div>
                    ) : (
                        <Play className="w-6 h-6 fill-current ml-1" />
                    )}
                </motion.div>
            </div>

            {/* Content */}
            <div className={`absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 ${isPlaying ? 'translate-y-full' : 'translate-y-0'}`}>
                <h3 className="text-white font-bold text-xl mb-4">
                    {reel.title}
                </h3>
            </div>

            {/* Resume Hint when paused */}
            {!isPlaying && (
                <div className="absolute top-8 right-8">
                    <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10px] text-white font-bold uppercase tracking-widest">
                        Click to Play
                    </div>
                </div>
            )}
        </motion.div>
    );
};

const InstagramShowcase = () => {
    const [playingId, setPlayingId] = React.useState(null);

    const handleTogglePlay = (id) => {
        setPlayingId(prevId => prevId === id ? null : id);
    };

    const reels = [
        {
            id: 1,
            video: "/WhatsApp Video 2026-03-16 at 7.22.53 PM.mp4",
            title: "Our Pediatric Excellence"
        },
        {
            id: 2,
            video: "/WhatsApp Video 2026-03-16 at 7.25.02 PM.mp4",
            title: "Expert Newborn Care"
        },
        {
            id: 3,
            video: "/WhatsApp Video 2026-03-16 at 7.26.21 PM.mp4",
            title: "Patient Success Stories"
        }
    ];

    return (
        <SectionWrapper id="showcase" bg="cream" fullWidth={true} className="!px-0">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 px-6 md:px-12 lg:px-24">
                <div>
                    <div className="flex items-center gap-2 text-primary font-bold mb-4">
                        <Instagram size={24} />
                        <span className="uppercase tracking-widest text-sm">On Instagram</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-navy">
                        Moments of <span className="text-secondary">Care & Joy</span>
                    </h2>
                </div>
                <p className="text-navy/60 max-w-md text-lg italic">
                    Follow us @shankarchildrenshospital for daily updates and heartwarming stories.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
                {reels.map((reel, index) => (
                    <ReelCard 
                        key={reel.id} 
                        reel={reel} 
                        index={index} 
                        isPlaying={playingId === reel.id}
                        onToggle={handleTogglePlay}
                    />
                ))}
            </div>

            <div className="mt-8 text-center px-4">
                <motion.a
                    href="https://www.instagram.com/shankar_childrens_hospital/reels/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-white text-navy px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all border border-navy/5"
                >
                    <Instagram size={20} className="text-primary" />
                    Visit Our Portfolio
                </motion.a>
            </div>
        </SectionWrapper>
    );
};

export default InstagramShowcase;
