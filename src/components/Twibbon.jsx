import { useState } from 'react'

export default function Twibbon() {
    const [imgError, setImgError] = useState(false)

            const twibbonImg = '/assets/images/twibbon.png'
    const fallbackImg = 'https://placehold.co/400x400/0f172a/f27a22?text=Twibbon+FESTAFORA+2026'

    return (
        <section id="twibbon" className="py-20 bg-slate-900/60 border-t border-slate-800 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-card rounded-3xl p-8 sm:p-12 border border-brand-orange/20 relative overflow-hidden">
                    <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-3 flex justify-center">
                            <div className="relative group">
                                <img 
                                    src={imgError ? fallbackImg : twibbonImg} 
                                    alt="Twibbon FESTAFORA 2026" 
                                    className="w-48 h-48 object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-300"
                                    onError={() => setImgError(true)}
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
                                <i className="fa-solid fa-link"></i> Twibbon,Pamflet, dan Caption
                            </div>
                            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
                                Unduh Twibbon Resmi & Pamflet FESTAFORA 2026
                            </h3>
                            <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                Dukung dan semarakkan HUT ke-9 Formasi KIP-K UPN "Veteran" Jawa Timur dengan memasang Twibbon di media sosialmu! Kamu juga bisa mengunduh booklet petunjuk lengkap di sini.
                            </p>
                        </div>

                        <div className="lg:col-span-4 flex flex-col gap-3">
                            <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-amber text-slate-950 font-bold text-sm text-center shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
                                <i className="fa-solid fa-image"></i> Download Twibbon (GDrive)
                            </a>
                            {/* <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm text-center border border-slate-700 transition-all flex items-center justify-center gap-2">
                                <i className="fa-solid fa-folder-open text-brand-gold"></i> Guidebook Lengkap Event
                            </a>
                            <a href="https://canva.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs text-center border border-slate-700 transition-all flex items-center justify-center gap-2">
                                <i className="fa-solid fa-pen-nib text-brand-skyblue"></i> Template Canva Frame Twibbon
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}