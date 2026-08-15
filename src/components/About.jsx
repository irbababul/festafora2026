import { useState, useEffect, useRef } from 'react'

export default function About() {
    const [showVideo, setShowVideo] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [hasAudio, setHasAudio] = useState(true)
    const videoRef = useRef(null)
    const audioRef = useRef(null)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowVideo(true)
        }, 5000)

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (showVideo) {
            if (videoRef.current && audioRef.current) {
                videoRef.current.currentTime = 0
                audioRef.current.currentTime = 0
                videoRef.current.play()
                audioRef.current.play()
            }
        } else {
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current.currentTime = 0
            }
        }
    }, [showVideo])

    const handleVideoEnded = () => {
        setShowVideo(false)
        if (audioRef.current) {
            audioRef.current.pause()
        }
    }

    const toggleMute = () => {
        const newMuted = !isMuted
        setIsMuted(newMuted)
        if (audioRef.current) {
            audioRef.current.muted = newMuted
        }
    }

    return (
        <section id="about" className="py-20 bg-slate-900/60 relative border-t border-slate-800">
            {/* Hidden Audio Element */}
            <audio 
                ref={audioRef} 
                src="/assets/videos/teaser-audio.mp3"
                muted={isMuted}
                onEnded={handleVideoEnded}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-orange via-brand-gold to-brand-lime opacity-30 blur-xl"></div>
                        <div className="relative glass-card rounded-3xl border border-slate-700/80 overflow-hidden">
                            {showVideo ? (
                                <div className="relative">
                                    <video 
                                        ref={videoRef}
                                        src="/assets/videos/teaser.mp4"
                                        className="w-full h-80 object-cover"
                                        muted={true}
                                        onEnded={handleVideoEnded}
                                    />
                                    {hasAudio && (
                                        <button 
                                            onClick={toggleMute}
                                            className="absolute bottom-3 right-3 bg-slate-900/80 hover:bg-slate-800 text-white p-3 rounded-full backdrop-blur transition-all flex items-center justify-center"
                                        >
                                            <i className={`fa-solid ${isMuted ? 'fa-volume-xmark' : 'fa-volume-high'} text-lg`}></i>
                                        </button>
                                    )}
                                </div>
                            ) : (
                                <div className="p-8 text-center">
                                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-tr from-brand-orange to-brand-gold p-1 shadow-xl">
                                        <img 
                                            src="/assets/images/logo-formasi.png" 
                                            alt="Logo Formasi KIP-K" 
                                            className="w-full h-full object-cover rounded-full bg-slate-900" 
                                        />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-2">Formasi KIP-K UPNVJT</h4>
                                    <p className="text-brand-amber font-medium text-sm mb-4">Forum Mahasiswa KIP-Kuliah UPN "Veteran" Jawa Timur</p>
                                    <div className="flex justify-center gap-3 text-xs font-semibold">
                                        <span className="px-3 py-1.5 rounded-lg bg-brand-orange/10 text-brand-orange border border-brand-orange/20">Semangat 9 Tahun</span>
                                        <span className="px-3 py-1.5 rounded-lg bg-brand-lime/10 text-brand-lime border border-brand-lime/20">Inovasi & Berprestasi</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-wider mb-4 border border-brand-orange/20">
                            Tentang Festafora 2026
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                            Merayakan hari ulang tahun ke-9 dengan penuh manfaat
                        </h2>
                        <p className="text-slate-300 text-base leading-relaxed mb-6">
                            <strong className="text-white">FESTAFORA (Festival of Formasi) 2026</strong> merupakan agenda tahunan terbesar yang diselenggarakan dalam rangka memperingati Hari Ulang Tahun ke-9 oleh departemen PSDM (pengembangan sumber daya manusia) Forum Mahasiswa KIP-Kuliah (Formasi) UPN "Veteran" Jawa Timur.
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed mb-8">
                            Di tahun 2026 ini, FESTAFORA mengajarkan potensi akademik generasi muda Indonesia melalui serangkaian lomba tingkat nasional dan webinar inspiratif.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0">
                                    <i className="fa-solid fa-graduation-cap text-lg"></i>
                                </div>
                                <div>
                                    <h5 className="font-bold text-white text-sm">Skala Nasional</h5>
                                    <p className="text-xs text-slate-400">Dapat diikuti oleh mahasiswa/umum se-Indonesia.</p>
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-brand-lime/20 text-brand-lime flex items-center justify-center shrink-0">
                                    <i className="fa-solid fa-award text-lg"></i>
                                </div>
                                <div>
                                    <h5 className="font-bold text-white text-sm">Benefit Participant</h5>
                                    <p className="text-xs text-slate-400">E-Sertifikat, piala, dan uang pembinaan.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}