
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SectionHeading } from '../components/Shared';

// --- History Data ---
const HISTORY_DATA = [
    {
        year: "2024.01",
        title: "MEETING",
        description: "長崎 時津のスターバックスで知り合う",
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop"
    },
    {
        year: "2024.02",
        title: "START",
        description: "お互いに惹かれ合いお付き合いスタート",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
    },
    {
        year: "2024.09",
        title: "LONG DISTANCE",
        description: "大樹転職 大阪へ\n大阪と長崎の遠距離恋愛がスタート",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop"
    },
    {
        year: "2024.12",
        title: "PROPOSAL",
        description: "スタジアムシティホテル長崎にてプロポーズ",
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop"
    },
    {
        year: "2025.02",
        title: "FAMILY MEETING",
        description: "スタジアムシティホテル長崎にて両家顔合わせ",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
    },
    {
        year: "2025.03.03",
        title: "MARRIAGE",
        description: "入籍",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop"
    },
    {
        year: "2025.05",
        title: "NEW LIFE",
        description: "福岡にて新生活を始める",
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop"
    },
    {
        year: "2025.05",
        title: "WELCOME SHUMO",
        description: "シュモをお迎え\n家族4人で生活中!",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
    }
];

const HistorySection = () => {
    return (
        <section className="py-24 px-6 relative z-10 bg-[#0a0a0a]">
            <div className="max-w-4xl mx-auto">
                <SectionHeading subtitle="Our History">二人の軌跡</SectionHeading>

                <div className="relative mt-16">
                    {/* Center Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

                    <div className="space-y-24">
                        {HISTORY_DATA.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                            >
                                {/* Image Side */}
                                <div className="w-full md:w-1/2 relative group">
                                    <div className={`absolute top-4 ${index % 2 === 0 ? '-right-4' : '-left-4'} w-full h-full border border-white/10 transition-colors duration-500 group-hover:border-[#F39800]/50 hidden md:block`}></div>
                                    <div className="aspect-video overflow-hidden rounded-sm shadow-2xl relative z-10">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000 filter grayscale contrast-125 brightness-90 hover:brightness-100"
                                        />
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#0a0a0a] border-2 border-white rounded-full z-20 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-[#F39800] rounded-full"></div>
                                </div>

                                {/* Text Side */}
                                <div className={`w-full md:w-1/2 text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    <p className="font-zen text-2xl font-bold mb-2 text-[#F39800]">{item.year}</p>
                                    <h3 className="font-zen text-xl text-white mb-4 tracking-widest">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed font-shippori whitespace-pre-line">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Gallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#0a0a0a] min-h-screen pt-24 pb-12">
            {/* Header / Nav */}
            <div className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                <Link to="/" className="pointer-events-auto">
                    <motion.div
                        whileHover={{ x: -5 }}
                        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-zen tracking-widest text-sm">BACK TO TOP</span>
                    </motion.div>
                </Link>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <HistorySection />
            </motion.div>

            <footer className="text-center py-12 text-gray-600 text-xs font-shippori">
                &copy; 2026 Daiki & Maki Wedding Gallery.
            </footer>
        </div>
    );
};

export default Gallery;
