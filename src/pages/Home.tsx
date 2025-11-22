import { motion } from 'framer-motion';
import { MapPin, Calendar, ExternalLink, ArrowDown, PawPrint, Car, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COLORS, SoccerBall, SectionHeading, PhotoCard, CountdownTimer, INVITATION_URL } from '../components/Shared';

// --- Typewriter Component ---
const TypewriterVerticalText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
    const characters = Array.from(text);

    return (
        <motion.h1
            className={className}
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.2,
                        delayChildren: delay,
                    },
                },
            }}
        >
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    variants={{
                        hidden: { opacity: 0, filter: "blur(10px)" },
                        visible: { opacity: 1, filter: "blur(0px)" },
                    }}
                    transition={{ duration: 0.5 }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </motion.h1>
    );
};

const Home = () => {
    return (
        <>
            {/* --- HERO SECTION --- */}
            <section className="relative h-screen flex flex-col items-center justify-center p-8 z-10 overflow-hidden">
                <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-[#000B1F] via-[#000000] to-[#000000]">
                    {/* Background Text */}
                    <div className="absolute inset-0 z-20 flex items-start justify-center pt-[8.75rem] pointer-events-none overflow-hidden">
                        <motion.p
                            initial={{ opacity: 0, scale: 1, rotate: -5 }}
                            animate={{
                                opacity: [0, 1, 1, 1, 0, 0],
                                scale: [1, 1, 1.05, 1.05, 1.05, 1],
                                rotate: -5
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                                times: [0, 0.15, 0.4, 0.6, 0.75, 0.85]
                            }}
                            className="text-white/20 font-zen text-2xl md:text-5xl font-bold tracking-[0.2em] select-none drop-shadow-lg text-center"
                        >
                            感謝を胸に！<br />
                            行くぞ！最高の舞台へ！
                        </motion.p>
                    </div>
                </div>

                <div className="z-20 flex flex-row-reverse items-start justify-center h-[60vh] gap-8 md:gap-20 w-full max-w-4xl mx-auto mt-20">
                    {/* Groom Name */}
                    <div className="h-[35vh] border-l border-white/20 pl-6 py-4 relative">
                        <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{
                                scaleY: [1, 2.5, 1],
                                opacity: [0.6, 1, 0.6]
                            }}
                            transition={{
                                scaleY: {
                                    duration: 1,
                                    ease: "easeOut"
                                },
                                opacity: {
                                    duration: 1,
                                    ease: "easeOut"
                                }
                            }}
                            style={{ transformOrigin: 'top' }}
                            className="absolute top-0 left-[-1px] w-0.5 h-20 bg-gradient-to-b from-[#0D4FC7] to-transparent"
                        >
                            <motion.div
                                animate={{
                                    scaleY: [1, 2.5, 1],
                                    opacity: [0.6, 1, 0.6]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                style={{ transformOrigin: 'top' }}
                                className="absolute inset-0 bg-gradient-to-b from-[#0D4FC7] to-transparent"
                            />
                        </motion.div>
                        <TypewriterVerticalText
                            text="宝本 大樹"
                            className="text-3xl md:text-5xl text-white font-zen writing-vertical-rl tracking-[0.2em] drop-shadow-2xl"
                            delay={0.5}
                        />
                    </div>

                    {/* Bride Name */}
                    <div className="h-[35vh] mt-16 border-l border-white/20 pl-6 py-4 relative">
                        <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{
                                scaleY: [1, 2.5, 1],
                                opacity: [0.6, 1, 0.6]
                            }}
                            transition={{
                                scaleY: {
                                    duration: 1,
                                    delay: 1.5,
                                    ease: "easeOut"
                                },
                                opacity: {
                                    duration: 1,
                                    delay: 1.5,
                                    ease: "easeOut"
                                }
                            }}
                            style={{ transformOrigin: 'top' }}
                            className="absolute top-0 left-[-1px] w-0.5 h-20 bg-gradient-to-b from-[#F39800] to-transparent"
                        >
                            <motion.div
                                animate={{
                                    scaleY: [1, 2.5, 1],
                                    opacity: [0.6, 1, 0.6]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 2.5
                                }}
                                style={{ transformOrigin: 'top' }}
                                className="absolute inset-0 bg-gradient-to-b from-[#F39800] to-transparent"
                            />
                        </motion.div>
                        <TypewriterVerticalText
                            text="長谷川 真希"
                            className="text-3xl md:text-5xl text-white font-zen writing-vertical-rl tracking-[0.2em] drop-shadow-2xl"
                            delay={2.0}
                        />
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                    className="absolute bottom-4 flex flex-col items-center text-white z-20 w-full"
                >
                    {/* Wedding Title */}


                    {/* Date & Party Block */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 3.8, type: "spring", stiffness: 200, damping: 10 }}
                        className="flex flex-col items-center mb-4"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <p className="font-zen text-3xl md:text-4xl tracking-[0.1em] font-bold drop-shadow-lg">
                                2026<span style={{ color: COLORS.ORANGE }}>.</span>03<span style={{ color: COLORS.BLUE }}>.</span>21
                            </p>
                        </div>
                        <motion.p
                            animate={{
                                color: [COLORS.BLUE, COLORS.ORANGE, COLORS.BLUE]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="text-sm md:text-base font-bold tracking-[0.2em] mb-2"
                        >
                            Kick OFF!
                        </motion.p>
                        <div className="flex items-center gap-2">
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <SoccerBall className="w-5 h-5" color={COLORS.BLUE} />
                            </motion.div>
                            <p className="font-zen text-lg md:text-xl tracking-widest uppercase font-bold opacity-90">
                                WEDDING PARTY
                            </p>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <SoccerBall className="w-5 h-5" color={COLORS.ORANGE} />
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 4.5, duration: 1 }}
                        className="font-zen text-sm md:text-base tracking-widest mb-6 opacity-80"
                    >
                        Nagasaki StadiumCityHotel
                    </motion.p>

                    {/* Countdown Timer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 5.0, duration: 1 }}
                        className="mb-12"
                    >
                        <CountdownTimer targetDate="2026-03-21T11:30:00" />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <ArrowDown className="w-6 h-6 opacity-50" />
                    </motion.div>
                </motion.div>
            </section>



            {/* --- MOVIE SECTION (Moved) --- */}
            <section className="py-24 px-6 bg-black relative z-30">
                <div className="max-w-4xl mx-auto">
                    <SectionHeading subtitle="Movie">招待状ムービー</SectionHeading>
                    <div className="aspect-video bg-[#1a1a1a] rounded-sm border border-white/10 flex items-center justify-center relative overflow-hidden shadow-2xl">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Adz8W3q4sK-d-2_-"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute inset-0"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* --- GREETING --- */}
            <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#1a1a1a]/90 backdrop-blur-sm p-12 md:p-16 shadow-2xl border-t-2 relative overflow-hidden"
                    style={{ borderTopColor: COLORS.ORANGE }}
                >
                    <div className="absolute top-0 left-0 w-16 h-1" style={{ backgroundColor: COLORS.BLUE }}></div>
                    <div className="absolute bottom-0 right-0 w-16 h-1" style={{ backgroundColor: COLORS.ORANGE }}></div>

                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2 font-zen leading-8 text-justify tracking-wide text-gray-300">
                            <p className="mb-8">
                                謹啓<br />
                                師走の候<br />
                                皆様にはますますご清祥のことと<br />
                                お慶び申し上げます
                            </p>
                            <p className="mb-8">
                                私たちは2025年3月3日に<br />
                                入籍いたしました<br />
                                つきましては<br />
                                幾久しくご懇情賜りたく<br />
                                ご挨拶ならびに披露の小宴を<br />
                                催したいと存じます
                            </p>
                            <p>
                                ご多用中<br />
                                誠に恐縮ではございますが<br />
                                ご臨席いただきたく<br />
                                ご案内申し上げます<br />
                                <span className="block text-right mt-8 text-sm text-gray-500">敬白</span>
                            </p>
                        </div>
                        <div className="md:w-1/2 h-full min-h-[300px]">
                            <PhotoCard
                                src="https://images.unsplash.com/photo-1529636721647-7814db32543d?q=80&w=1974&auto=format&fit=crop"
                                alt="Couple Greeting"
                                className="h-full w-full object-cover rounded-sm transition-all duration-700 filter grayscale contrast-125 brightness-90"
                            />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* --- RSVP SECTION (Moved) --- */}
            <section className="py-24 px-6 bg-black relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-[#1a1a1a] p-12 md:p-16 rounded-sm border border-white/10 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-1" style={{ backgroundColor: COLORS.ORANGE }}></div>
                        <div className="absolute bottom-0 left-0 w-24 h-1" style={{ backgroundColor: COLORS.BLUE }}></div>

                        <h3 className="font-zen text-2xl font-bold mb-6 text-center text-white">Web招待状</h3>
                        <p className="text-center text-gray-400 mb-10 font-shippori leading-relaxed">
                            以下のリンクよりキックオフへの<br />
                            参加表明をお願い申し上げます
                        </p>
                        <motion.a
                            href={INVITATION_URL}
                            target="_blank"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="block w-full text-white text-center py-5 px-8 rounded-sm shadow-lg transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group"
                            style={{ backgroundColor: COLORS.BLUE }}
                        >
                            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                            <ExternalLink className="w-5 h-5" />
                            <span className="font-bold tracking-widest font-zen text-lg">ENTRY (回答する)</span>
                        </motion.a>
                        <p className="text-xs text-center text-gray-500 mt-8 font-shippori">回答期限：2026年02月20日</p>
                    </div>
                </div>
            </section>



            {/* --- PROFILE --- */}
            <section id="profile-section" className="py-24 px-6 bg-black relative z-10">
                <div className="max-w-6xl mx-auto">
                    <SectionHeading subtitle="Profile">プロフィール</SectionHeading>
                    <div className="grid md:grid-cols-2 gap-16 mt-16">
                        {/* Groom */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <motion.div
                                className="w-64 h-80 mb-8 relative group"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {/* Tracing Border Animation */}
                                <div className="absolute inset-0 translate-x-4 translate-y-4 z-0 pointer-events-none">
                                    <svg className="w-full h-full overflow-visible">
                                        <motion.rect
                                            x="0" y="0" width="100%" height="100%"
                                            fill="none"
                                            stroke={COLORS.BLUE}
                                            strokeWidth="1"
                                            initial={{ pathLength: 0, pathOffset: 0 }}
                                            animate={{ pathLength: [0, 1, 1, 1], pathOffset: [0, 0, 0, 1] }}
                                            transition={{
                                                duration: 7,
                                                times: [0, 0.15, 0.85, 1],
                                                ease: "easeInOut",
                                                repeat: Infinity,
                                                repeatDelay: 0
                                            }}
                                        />
                                    </svg>
                                </div>

                                <img
                                    src="/Daiki.png"
                                    alt="Daiki"
                                    className="w-full h-full object-cover relative z-10 filter grayscale contrast-125 brightness-90"
                                />

                                {/* Soccer Ball Icon */}
                                <div className="absolute -top-3 -left-3 z-30 bg-black rounded-full p-1 border border-white/10">
                                    <SoccerBall className="w-8 h-8 animate-[spin_10s_linear_infinite]" color={COLORS.BLUE} />
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                                    className="absolute top-4 left-8 text-3xl font-bold font-zen z-20 text-gray-400"
                                >
                                    Daiki
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                                    className="absolute top-4 right-1 text-3xl font-bold font-zen z-20 text-gray-400"
                                >
                                    23
                                </motion.div>
                            </motion.div>
                            <h3 className="text-2xl font-zen mb-1 text-white">宝本 大樹</h3>
                            <p className="text-sm mb-6 tracking-widest font-bold" style={{ color: COLORS.BLUE }}>HOUMOTO DAIKI</p>
                            <div className="flex items-center gap-4 mb-4 text-xs text-gray-500 tracking-widest border-b border-white/10 pb-2 w-full justify-center">
                                <span>佐賀県出身</span>
                                <span>|</span>
                                <span>1993.06.23</span>
                            </div>
                            <p className="text-center text-gray-400 leading-relaxed text-sm font-shippori">
                                冷静な判断力と情熱を併せ持つ。<br />
                                真希さんという最高のパートナーを得て<br />
                                人生のゴールを目指します。
                            </p>
                        </motion.div>

                        {/* Bride */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <motion.div
                                className="w-64 h-80 mb-8 relative group"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {/* Tracing Border Animation */}
                                <div className="absolute inset-0 translate-x-4 translate-y-4 z-0 pointer-events-none">
                                    <svg className="w-full h-full overflow-visible">
                                        <motion.rect
                                            x="0" y="0" width="100%" height="100%"
                                            fill="none"
                                            stroke={COLORS.ORANGE}
                                            strokeWidth="1"
                                            initial={{ pathLength: 0, pathOffset: 0 }}
                                            animate={{ pathLength: [0, 1, 1, 1], pathOffset: [0, 0, 0, 1] }}
                                            transition={{
                                                duration: 7,
                                                times: [0, 0.15, 0.85, 1],
                                                ease: "easeInOut",
                                                repeat: Infinity,
                                                delay: 0.5,
                                                repeatDelay: 0
                                            }}
                                        />
                                    </svg>
                                </div>

                                <img
                                    src="/Maki.png"
                                    alt="Maki"
                                    className="w-full h-full object-cover relative z-10 filter grayscale contrast-125 brightness-90"
                                />

                                {/* Soccer Ball Icon */}
                                <div className="absolute -top-3 -left-3 z-30 bg-black rounded-full p-1 border border-white/10">
                                    <SoccerBall className="w-8 h-8 animate-[spin_10s_linear_infinite]" color={COLORS.ORANGE} />
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                                    className="absolute top-4 left-8 text-3xl font-bold font-zen z-20 text-gray-400"
                                >
                                    Maki
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                                    className="absolute top-4 right-1 text-3xl font-bold font-zen z-20 text-gray-400"
                                >
                                    31
                                </motion.div>
                            </motion.div>
                            <h3 className="text-2xl font-zen mb-1 text-white">長谷川 真希</h3>
                            <p className="text-sm mb-6 tracking-widest font-bold" style={{ color: COLORS.ORANGE }}>HASEGAWA MAKI</p>
                            <div className="flex items-center gap-4 mb-4 text-xs text-gray-500 tracking-widest border-b border-white/10 pb-2 w-full justify-center">
                                <span>長崎県出身</span>
                                <span>|</span>
                                <span>1992.03.31</span>
                            </div>
                            <p className="text-center text-gray-400 leading-relaxed text-sm font-shippori">
                                明るい笑顔でチームを照らす存在。<br />
                                大樹さんと共に、笑顔の絶えない<br />
                                温かいホームを作っていきます。
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- PETS (Moved Back) --- */}
            <section className="py-24 px-6 relative z-10 bg-black">
                <div className="max-w-5xl mx-auto">
                    <SectionHeading subtitle="Beloved Pets">愛しい家族たち</SectionHeading>
                    <p className="text-center mb-16 font-zen text-gray-400">
                        チームに欠かせない可愛いマスコットたち。<br />
                        当日はユニフォーム姿で登場するかも？
                    </p>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Pet 1: Nemo */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            whileHover={{ y: -10 }}
                            className="bg-[#1a1a1a] p-8 shadow-xl rounded-t-full border-b-4 relative overflow-hidden"
                            style={{ borderColor: COLORS.ORANGE }}
                        >
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="aspect-square rounded-full overflow-hidden mb-8 border-4 border-[#262626] shadow-inner relative bg-black"
                            >
                                {/* Orange ball - right top */}
                                <div className="absolute inset-0 flex items-start justify-end pr-4 pt-8 opacity-30">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    >
                                        <SoccerBall className="w-16 h-16" color={COLORS.ORANGE} />
                                    </motion.div>
                                </div>
                                {/* White ball - left bottom */}
                                <div className="absolute inset-0 flex items-end justify-start pl-4 pb-8 opacity-30">
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    >
                                        <SoccerBall className="w-16 h-16" color={COLORS.WHITE} />
                                    </motion.div>
                                </div>
                                <img
                                    src="/Nemo.png"
                                    alt="Toy Poodle"
                                    className="w-full h-full object-contain relative z-10 filter grayscale contrast-110"
                                    style={{ objectPosition: '55% center', transform: 'scale(0.85)' }}
                                />
                            </motion.div>
                            <div className="text-center">
                                <PawPrint className="w-6 h-6 mx-auto mb-3 opacity-80" style={{ color: COLORS.ORANGE }} />
                                <h4 className="text-xl font-bold font-zen mb-2 text-white">ネモ (Nemo)</h4>
                                <p className="text-sm mb-4 opacity-80" style={{ color: COLORS.ORANGE }}>トイプードル / 女の子 / 3歳</p>
                                <p className="text-sm text-gray-400 leading-relaxed font-shippori">
                                    愛嬌たっぷりのチームのアイドル。<br />
                                    ボール遊びが大好きで、<br />
                                    ドリブルの才能があるかもしれません。
                                </p>
                            </div>
                        </motion.div>

                        {/* Pet 2: Shumo */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-[#1a1a1a] p-8 shadow-xl rounded-t-full border-b-4 relative overflow-hidden"
                            style={{ borderColor: COLORS.BLUE }}
                        >
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="aspect-square rounded-full overflow-hidden mb-8 border-4 border-[#262626] shadow-inner relative bg-black"
                            >
                                {/* Blue ball - left bottom */}
                                <div className="absolute inset-0 flex items-end justify-start pl-4 pb-8 opacity-30">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    >
                                        <SoccerBall className="w-16 h-16" color={COLORS.BLUE} />
                                    </motion.div>
                                </div>
                                {/* White ball - right top */}
                                <div className="absolute inset-0 flex items-start justify-end pr-4 pt-8 opacity-30">
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    >
                                        <SoccerBall className="w-16 h-16" color={COLORS.WHITE} />
                                    </motion.div>
                                </div>
                                <img
                                    src="/Shumo.png"
                                    alt="Miniature Schnauzer"
                                    className="w-full h-full object-contain relative z-10 filter grayscale contrast-110 scale-75"
                                />
                            </motion.div>
                            <div className="text-center">
                                <PawPrint className="w-6 h-6 mx-auto mb-3 opacity-80" style={{ color: COLORS.BLUE }} />
                                <h4 className="text-xl font-bold font-zen mb-2 text-white">シュモ (Shumo)</h4>
                                <p className="text-sm mb-4 opacity-80" style={{ color: COLORS.BLUE }}>ミニチュアシュナウザー / 男の子 / 当日1歳</p>
                                <p className="text-sm text-gray-400 leading-relaxed font-shippori">
                                    期待の大型（？）ルーキー。<br />
                                    結婚式の時にはちょうど1歳を迎えます。<br />
                                    元気いっぱいにフィールドを駆け回ります。
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- GALLERY CTA (Replaces History) --- */}
            <section className="py-24 px-6 bg-[#0a0a0a] relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <SectionHeading subtitle="Gallery">二人の軌跡</SectionHeading>
                    <p className="text-gray-400 mb-12 font-shippori">
                        これまでの歩みや、思い出の写真をギャラリーページにまとめました。<br />
                        ぜひご覧ください。
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link to="/gallery">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-4 border border-white/30 rounded-sm text-white hover:bg-white/10 transition-colors font-zen tracking-widest w-full md:w-auto"
                            >
                                VIEW GALLERY
                            </motion.button>
                        </Link>
                        <Link to="/manga">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-4 border border-white/30 rounded-sm text-white hover:bg-white/10 transition-colors font-zen tracking-widest w-full md:w-auto"
                            >
                                VIEW MANGA
                            </motion.button>
                        </Link >
                    </div >
                </div >
            </section >

            {/* --- INFORMATION & ACCESS (Moved) --- */}
            < section className="py-24 px-6 relative z-10 bg-black" >
                <div className="max-w-4xl mx-auto bg-[#1a1a1a] shadow-2xl overflow-hidden">
                    {/* Stadium Image Header */}
                    <div className="relative h-72">
                        <img
                            src="https://images.unsplash.com/photo-1510051640316-cee39563ddab?q=80&w=2070&auto=format&fit=crop"
                            alt="Soccer Stadium"
                            className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-75"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="border-2 p-4 text-center backdrop-blur-sm" style={{ borderColor: COLORS.WHITE }}>
                                <p className="text-white font-zen text-2xl tracking-widest">STADIUM</p>
                                <p className="text-white text-xs tracking-widest mt-1 opacity-80">ACCESS</p>
                            </div>
                        </div>
                    </div>

                    {/* Information Content */}
                    <div className="p-12 relative">
                        <div className="absolute top-0 right-0 w-20 h-1" style={{ backgroundColor: COLORS.ORANGE }}></div>
                        <div className="absolute bottom-0 left-0 w-20 h-1" style={{ backgroundColor: COLORS.BLUE }}></div>

                        {/* Match Day Info */}
                        <div className="mb-12">
                            <h3 className="font-zen text-xl font-bold mb-6 text-white border-l-4 pl-4" style={{ borderColor: COLORS.ORANGE }}>MATCH DAY</h3>
                            <div className="flex items-start mb-5">
                                <Calendar className="w-5 h-5 mr-4 mt-1 opacity-80" style={{ color: COLORS.ORANGE }} />
                                <div>
                                    <p className="font-bold text-white mb-1 text-lg">2026.03.21 (Sat)</p>
                                    <p className="text-sm text-gray-400">KICK OFF 11:30 (OPEN 11:00)</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 mr-4 mt-1 opacity-80" style={{ color: COLORS.BLUE }} />
                                <div>
                                    <p className="font-bold text-white mb-1">長崎スタジアムシティ</p>
                                    <p className="text-sm text-gray-400">※詳細は招待状をご確認ください</p>
                                </div>
                            </div>
                        </div>

                        {/* Parking Info */}
                        <div className="border-t border-white/10 pt-10">
                            <h3 className="font-zen text-xl text-white mb-6 flex items-center gap-2 border-l-4 pl-4" style={{ borderColor: COLORS.BLUE }}>
                                <Car className="w-6 h-6" />
                                PARKING
                            </h3>
                            <div className="text-gray-400 text-sm leading-relaxed space-y-4">
                                <p>
                                    <span className="text-white font-bold block mb-1">営業時間・収容台数</span>
                                    24時間営業（年中無休）<br />
                                    収容台数：934台（立体駐車場864台、商業棟駐車場70台）<br />
                                    ※高さ制限2.1mまで
                                </p>

                                {/* Hotel Access Route Visual Guide */}
                                <div className="p-6 bg-white/5 rounded border border-white/10">
                                    <span className="text-white font-bold block mb-4 flex items-center gap-2 text-lg">
                                        <MapPin className="w-5 h-5 text-[#F39800]" />
                                        ホテル宿泊者専用 入庫ルート
                                    </span>

                                    <div className="space-y-6 relative">
                                        {/* Connecting Line */}
                                        <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-white/10 z-0"></div>

                                        {/* Route Selection Tabs or Sections */}
                                        <div className="space-y-8">

                                            {/* Part 1: Approach from South/East */}
                                            <div>
                                                <h4 className="text-white font-bold mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                                                    <span className="text-[#F39800] text-xs border border-[#F39800] px-2 py-0.5 rounded">方面A</span>
                                                    長崎南部・東長崎出島有料道路方面から
                                                </h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <div className="aspect-video bg-[#262626] rounded border border-white/10 overflow-hidden relative">
                                                            <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-[10px] text-white font-bold">STEP 1</div>
                                                            <img src="/route_south_1.png" alt="八千代町交差点" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                                                        </div>
                                                        <p className="text-xs text-gray-400">八千代町交差点（ガソリンスタンド）を<span className="text-white font-bold">左折</span></p>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="aspect-video bg-[#262626] rounded border border-white/10 overflow-hidden relative">
                                                            <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-[10px] text-white font-bold">STEP 2</div>
                                                            <img src="/route_south_2.png" alt="JAF交差点" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                                                        </div>
                                                        <p className="text-xs text-gray-400">JAF長崎支店のある交差点を<span className="text-white font-bold">右折</span></p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Part 2: Approach from North */}
                                            <div>
                                                <h4 className="text-white font-bold mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                                                    <span className="text-[#2E7BF4] text-xs border border-[#2E7BF4] px-2 py-0.5 rounded">方面B</span>
                                                    長崎北部長崎バイパス方面から
                                                </h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <div className="aspect-video bg-[#262626] rounded border border-white/10 overflow-hidden relative">
                                                            <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-[10px] text-white font-bold">STEP 1</div>
                                                            <img src="/route_north_1.png" alt="県警交差点" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                                                        </div>
                                                        <p className="text-xs text-gray-400">長崎県警察署のある交差点を<span className="text-white font-bold">左折</span></p>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="aspect-video bg-[#262626] rounded border border-white/10 overflow-hidden relative">
                                                            <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-[10px] text-white font-bold">STEP 2</div>
                                                            <img src="/route_north_2.png" alt="JAF交差点" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                                                        </div>
                                                        <p className="text-xs text-gray-400">JAF長崎支店のある交差点を<span className="text-white font-bold">左折</span></p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Part 3: Common Route */}
                                            <div>
                                                <h4 className="text-white font-bold mb-4 border-b border-white/10 pb-2">
                                                    共通ルート（JAF交差点以降）
                                                </h4>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                    <div className="space-y-2">
                                                        <div className="aspect-video bg-[#262626] rounded border border-white/10 overflow-hidden relative">
                                                            <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-[10px] text-white font-bold">STEP 3</div>
                                                            <img src="/route_common_1.png" alt="ホテル分岐" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                                                        </div>
                                                        <p className="text-xs text-gray-400">ホテルが左手に見えるまで直進し、<span className="text-white font-bold">分岐を左へ</span></p>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="aspect-video bg-[#262626] rounded border border-white/10 overflow-hidden relative">
                                                            <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-[10px] text-white font-bold">STEP 4</div>
                                                            <img src="/route_common_2.png" alt="高架下左折" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                                                        </div>
                                                        <p className="text-xs text-gray-400">高架下を<span className="text-white font-bold">左折</span></p>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="aspect-video bg-[#262626] rounded border border-white/10 overflow-hidden relative">
                                                            <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-[10px] text-white font-bold">GOAL</div>
                                                            <img src="/route_common_3.png" alt="駐車場入口" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                                                        </div>
                                                        <p className="text-xs text-gray-400">右手に駐車場入口がございます</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-white/10 text-center">
                                        <a
                                            href="https://www.nagasakistadiumcity.com/parking/#area3-2"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-bold hover:underline transition-opacity hover:opacity-80 bg-[#2E7BF4] text-white px-6 py-3 rounded-full shadow-lg"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            公式マップで詳細ルートを確認
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hotel Info */}
                        <div className="border-t border-white/10 pt-10 mt-10">
                            <h3 className="font-zen text-xl text-white mb-6 flex items-center gap-2 border-l-4 pl-4" style={{ borderColor: COLORS.ORANGE }}>
                                <Building className="w-6 h-6" />
                                HOTEL
                            </h3>
                            <div className="text-gray-400 text-sm leading-relaxed space-y-4">
                                <p>
                                    <span className="text-white font-bold block mb-1">STADIUM CITY HOTEL NAGASAKI</span>
                                    日本初、サッカースタジアムビューホテル。<br />
                                    スタジアムシティ内に位置し、挙式・披露宴会場へのアクセスも抜群です。
                                </p>
                                <p>
                                    <span className="text-white font-bold block mb-1">宿泊者専用駐車場</span>
                                    利用可能時間：チェックイン日 14:00 ～ チェックアウト日 12:00<br />
                                    ※ご予約時に合わせてお申し込みください。
                                </p>
                                <div className="mt-4">
                                    <a
                                        href="https://www.nagasakistadiumcity.com/hotel/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm hover:underline transition-opacity hover:opacity-80"
                                        style={{ color: COLORS.ORANGE }}
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        公式サイトで詳細を見る
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- LINKS --- */}
            <section className="py-16 px-6 bg-[#0a0a0a] relative z-10 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <SectionHeading subtitle="Links">関連リンク</SectionHeading>
                    <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
                        <motion.a
                            href="https://www.nagasakistadiumcity.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-3 px-8 py-4 border border-white/20 rounded-sm text-white hover:bg-white/5 transition-colors group"
                        >
                            <ExternalLink className="w-4 h-4 text-[#0D4FC7] group-hover:text-white transition-colors" />
                            <span className="font-zen tracking-widest text-sm">長崎スタジアムシティ</span>
                        </motion.a>
                        <motion.a
                            href="https://www.nagasakistadiumcity.com/parking/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-3 px-8 py-4 border border-white/20 rounded-sm text-white hover:bg-white/5 transition-colors group"
                        >
                            <ExternalLink className="w-4 h-4 text-[#2E7BF4] group-hover:text-white transition-colors" />
                            <span className="font-zen tracking-widest text-sm">駐車場情報</span>
                        </motion.a>
                        <motion.a
                            href={INVITATION_URL}
                            target="_blank"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-3 px-8 py-4 border border-white/20 rounded-sm text-white hover:bg-white/5 transition-colors group"
                        >
                            <ExternalLink className="w-4 h-4 text-[#F39800] group-hover:text-white transition-colors" />
                            <span className="font-zen tracking-widest text-sm">Web招待状</span>
                        </motion.a>
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="bg-black text-gray-500 py-16 text-center relative z-10 border-t border-white/5">
                <div className="mb-8 flex justify-center items-center gap-4">
                    <div className="w-2 h-2 rounded-full opacity-80" style={{ backgroundColor: COLORS.BLUE }}></div>
                    <SoccerBall className="w-6 h-6 opacity-50" color={COLORS.ORANGE} />
                    <div className="w-2 h-2 rounded-full opacity-80" style={{ backgroundColor: COLORS.BLUE }}></div>
                </div>
                <h2 className="font-zen text-2xl text-white tracking-[0.2em] mb-3">Daiki & Maki</h2>
                <p className="font-shippori text-xs tracking-widest mb-10 opacity-70">Thank you for coming to our stadium.</p>
                <p className="text-[10px] opacity-30">&copy; 2026 Daiki & Maki Wedding.</p>
            </footer>

            {/* --- FLOATING INVITATION BUTTON --- */}
            <motion.a
                href={INVITATION_URL}
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 6, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-6 right-6 z-50 text-white py-3 px-6 rounded-full shadow-2xl flex items-center gap-2 font-zen tracking-wider text-sm font-bold"
                style={{ backgroundColor: COLORS.ORANGE }}
            >
                <ExternalLink className="w-4 h-4" />
                <span>招待状</span>
            </motion.a>
        </>
    );
};

export default Home;
