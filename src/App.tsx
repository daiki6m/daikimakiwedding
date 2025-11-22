import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { COLORS, FontLink, SakuraBackground, LoadingScreen } from './components/Shared';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Manga from './pages/Manga';

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
        return (
            <>
                <FontLink />
                <LoadingScreen onComplete={() => setIsLoading(false)} />
            </>
        );
    }

    return (
        <Router>
            <div className="bg-[#0a0a0a] min-h-screen relative overflow-hidden font-shippori text-gray-200 selection:text-white">
                <style>{`::selection { background: ${COLORS.ORANGE}; color: white; }`}</style>
                <style>{`
                    .writing-vertical-rl {
                        writing-mode: vertical-rl;
                        -webkit-writing-mode: vertical-rl;
                        -ms-writing-mode: tb-rl;
                    }
                    .text-orientation-upright {
                        text-orientation: upright;
                    }
                `}</style>

                <FontLink />
                <SakuraBackground />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/manga" element={<Manga />} />
                </Routes>
            </div>
        </Router>
    );
}
