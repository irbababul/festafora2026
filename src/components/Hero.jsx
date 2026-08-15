import { useState, useEffect } from 'react'

export default function Hero() {
    const [countdown, setCountdown] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    })

    useEffect(() => {
        const targetDate = new Date('August 25, 2026 23:59:59').getTime()

        function updateCountdown() {
            const now = new Date().getTime()
            const difference = targetDate - now

            if (difference > 0) {
                setCountdown({
                    days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
                    hours: String(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
                    minutes: String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
                    seconds: String(Math.floor((difference % (1000 * 60)) / 1000)).padStart(2, '0')
                })
            }
        }

        updateCountdown()
        const interval = setInterval(updateCountdown, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
            {/* Background Image with Blue Overlay */}
            <div className="absolute inset-0 z-0">
                <img src="/assets/images/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark/90"></div>
            </div>

            {/* Decorative Blobs */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <div className="absolute top-1/3 right-10 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-lime/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-brand-orange/30 text-brand-amber text-xs sm:text-sm font-semibold mb-6 shadow-inner">
                    <span className="flex h-2 w-2 rounded-full bg-brand-orange animate-ping"></span>
                    <i className="fa-solid fa-cake-candles text-brand-gold"></i>
                    PERINGATAN HUT KE-9 FORMASI KIP-K UPN "VETERAN" JAWA TIMUR
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                    Festival Of Formasi <br className="hidden sm:block" />
                    <span className="gradient-text">FESTAFORA 2026</span>
                </h1>

                <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-10">
                    FESTAFORA kembali hadir untuk memperingati hari ulang tahun Formasi yang ke-9 pada tahun 2026 dengan mengangkat tema “Peran Generasi Muda dalam Menciptakan Masa Depan Berkelanjutan melalui Inovasi dan
                    Kolaborasi untuk Mendukung Pencapaian Sustainable Development Goals (SDGs)”.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <a href="#lomba" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-orange via-brand-amber to-brand-gold text-slate-950 font-bold text-base shadow-xl shadow-brand-orange/20 hover:scale-105 transition-all flex items-center justify-center gap-2">
                        <i className="fa-solid fa-trophy"></i> Jelajahi Lomba Lomba
                    </a>
                    <a href="#webinar" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-base transition-all flex items-center justify-center gap-2">
                        <i className="fa-solid fa-video text-brand-skyblue"></i> Ikuti Webinar
                    </a>
                </div>

                <div className="max-w-2xl mx-auto glass-card p-6 rounded-2xl shadow-2xl border border-slate-700/60">
                    <h3 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4">Pembukaan Pendaftaran Lomba Gelombang 1 dalam</h3>
                    <div className="grid grid-cols-4 gap-3 sm:gap-6 text-center" id="countdown">
                        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                            <span className="text-2xl sm:text-4xl font-extrabold text-brand-orange">{countdown.days}</span>
                            <span className="block text-[10px] sm:text-xs text-slate-400 mt-1 uppercase">Hari</span>
                        </div>
                        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                            <span className="text-2xl sm:text-4xl font-extrabold text-brand-gold">{countdown.hours}</span>
                            <span className="block text-[10px] sm:text-xs text-slate-400 mt-1 uppercase">Jam</span>
                        </div>
                        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                            <span className="text-2xl sm:text-4xl font-extrabold text-brand-lime">{countdown.minutes}</span>
                            <span className="block text-[10px] sm:text-xs text-slate-400 mt-1 uppercase">Menit</span>
                        </div>
                        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                            <span className="text-2xl sm:text-4xl font-extrabold text-brand-skyblue">{countdown.seconds}</span>
                            <span className="block text-[10px] sm:text-xs text-slate-400 mt-1 uppercase">Detik</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}