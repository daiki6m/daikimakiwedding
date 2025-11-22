import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { SectionHeading } from '../components/Shared';

const Manga = () => {
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
                <section className="py-24 px-6 relative z-10 bg-black">
                    <div className="max-w-5xl mx-auto">
                        <SectionHeading subtitle="Manga">馴れ初め漫画</SectionHeading>

                        <div className="bg-[#1a1a1a] p-12 md:p-16 rounded-sm border border-white/10 text-center shadow-2xl">
                            <BookOpen className="w-16 h-16 mx-auto mb-8 text-gray-600" />
                            <h3 className="text-2xl font-zen text-white mb-6">Coming Soon...</h3>
                            <p className="text-gray-400 font-shippori text-lg leading-relaxed max-w-2xl mx-auto">
                                二人の出会いからこれまでを漫画にしました。<br />
                                現在制作中です。公開をお楽しみに！
                            </p>

                            <div className="mt-12 pt-12 border-t border-white/10">
                                <p className="text-sm text-gray-500 font-shippori">
                                    ※ 漫画が完成次第、こちらのページで公開いたします
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </motion.div>

            <footer className="text-center py-12 text-gray-600 text-xs font-shippori">
                &copy; 2026 Daiki & Maki Wedding Gallery.
            </footer>
        </div>
    );
};

export default Manga;
