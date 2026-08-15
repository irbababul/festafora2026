import { useState } from 'react'

export default function Webinar({ onOpenModal }) {
    const [imgError, setImgError] = useState(false)
    
    const webinarImg = '/src/assets/images/pamflet-webinar.png'
    const fallbackImg = 'https://placehold.co/600x850/0f172a/f27a22?text=PAMFLET+WEBINAR+NASIONAL+FESTAFORA+2026'

    return (
        <section id="webinar" className="py-20 bg-slate-900/80 border-t border-b border-slate-800 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    <div className="lg:col-span-5 relative">
                        <div className="glass-card p-3 rounded-2xl border border-brand-orange/30 shadow-2xl">
                            <div className="relative group rounded-xl overflow-hidden">
                                <img 
                                    src={imgError ? fallbackImg : webinarImg} 
                                    alt="Pamflet Webinar Festafora 2026" 
                                    className="w-full h-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                                    onError={() => setImgError(true)}
                                />
                                <button 
                                    onClick={() => onOpenModal(imgError ? fallbackImg : webinarImg, 'Webinar Nasional Festafora 2026')}
                                    className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold gap-2 transition-opacity duration-300"
                                >
                                    <i className="fa-solid fa-magnifying-glass-plus text-xl"></i> Perbesar Pamflet Webinar
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-skyblue/10 text-brand-skyblue text-xs font-bold uppercase tracking-wider mb-4 border border-brand-skyblue/20">
                            <i className="fa-solid fa-video"></i> Webinar Nasional Spesial HUT KE-9
                        </div>
                        
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                            “Youth for Sustainability: Kolaborasi Generasi Muda dalam Mewujudkan Inovasi Berkelanjutan Menuju SDGs 2030”
                        </h2>

                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                            Saksikan pemaparan dari narasumber nasional terkemuka yang akan mengupas tuntas strategi pengembangan potensi, karier, dan inovasi bagi generasi muda Indonesia.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
                                <span className="block text-[10px] text-slate-400 uppercase font-semibold">Tanggal</span>
                                <span className="text-xs sm:text-sm font-bold text-white"><i className="fa-regular fa-calendar text-brand-orange mr-1"></i> 4 Okt 2026</span>
                            </div>
                            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
                                <span className="block text-[10px] text-slate-400 uppercase font-semibold">Waktu</span>
                                <span className="text-xs sm:text-sm font-bold text-white"><i className="fa-regular fa-clock text-brand-gold mr-1"></i> 08.00 WIB - Selesai</span>
                            </div>
                            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60 col-span-2 sm:col-span-1">
                                <span className="block text-[10px] text-slate-400 uppercase font-semibold">Platform</span>
                                <span className="text-xs sm:text-sm font-bold text-white"><i className="fa-solid fa-desktop text-brand-skyblue mr-1"></i> Zoom meeting</span>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">Benefit Peserta:</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-medium text-slate-200 border border-slate-700"><i className="fa-solid fa-certificate text-brand-lime mr-1.5"></i> E-Certificate Nasional</span>
                                {/* <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-medium text-slate-200 border border-slate-700"><i className="fa-solid fa-gift text-brand-orange mr-1.5"></i> Doorprize & E-Wallet</span> */}
                                <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-medium text-slate-200 border border-slate-700"><i className="fa-solid fa-file-powerpoint text-brand-skyblue mr-1.5"></i> Pengalaman & Ilmu</span>
                                <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-medium text-slate-200 border border-slate-700"><i className="fa-solid fa-users text-brand-gold mr-1.5"></i> Relasi & Grup Diskusi</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-orange via-brand-amber to-brand-gold text-slate-950 font-bold text-sm shadow-lg shadow-brand-orange/20 hover:scale-105 transition-all text-center flex items-center justify-center gap-2">
                                <i className="fa-solid fa-user-plus"></i> Daftar Webinar Gratis (GForm)
                            </a>
                            <a href="https://chat.whatsapp.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-sm transition-all text-center flex items-center justify-center gap-2">
                                <i className="fa-brands fa-whatsapp text-lg"></i> Gabung Grup WA Peserta
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}