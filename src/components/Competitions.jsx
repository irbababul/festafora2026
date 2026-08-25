import { useState } from 'react'

export default function Competitions({ onOpenModal }) {
    const [imgErrors, setImgErrors] = useState({})

    const handleImgError = (key) => {
        setImgErrors(prev => ({ ...prev, [key]: true }))
    }

    const placeholderImg = (color) => `https://placehold.co/600x800/1e293b/${color}?text=Pamflet`

    const competitions = [
        {
            id: 1,
            title: 'Business Plan Competition (BPC)',
            deadline: '9 September 2026',
            type: 'Tim (3 Orang)',
            badge: null,
            typeColor: 'bg-brand-orange',
            image: '/assets/images/pamflet-bpc.png',
            fallback: placeholderImg('f27a22'),
            imgKey: 'bpc',
            description: 'Economic Transformation for Tomorrow: Inovasi Bisnis Berkelanjutan dan Inklusif Menuju SDGs 2030.',
            gradient: 'from-brand-orange to-brand-amber',
            formLink: 'https://bit.ly/BPCFestafora2026',
            guideLink: 'https://bit.ly/GuideBookBPCFestafora2026'
        },
        {
            id: 2,
            title: 'Lomba Poster',
            deadline: '9 September 2026',
            type: 'Individu',
            badge: 'Nasional',
            typeColor: 'bg-brand-lime',
            image: 'public/assets/images/pamflet-poster.png',
            fallback: placeholderImg('84cc16'),
            imgKey: 'poster',
            description: 'Visualizing Green Action: Inovasi Generasi Muda dalam Edukasi Kreatif Menuju SDGs 2030 dalam Menghadapi Krisis Lingkungan.',
            gradient: 'from-brand-lime to-emerald-500',
            formLink: 'https://bit.ly/PosterFestafora2026',
            guideLink: 'https://bit.ly/GuideBookPosterFestafora2026'
        },
        {
            id: 3,
            title: 'Lomba Essay',
            deadline: '9 September 2026',
            type: 'Tim/individu (max 2 Orang)',
            badge: null,
            typeColor: 'bg-brand-skyblue',
            image: '/assets/images/pamflet-essay.png',
            fallback: placeholderImg('38bdf8'),
            imgKey: 'essay',
            description: 'Sinergi Generasi Muda: Jembatan Keadilan, Kesetaraan Gender, dan Kedaulatan Pangan demi Kesejahteraan Masa Depan Menuju SDGs 2030.',
            gradient: 'from-brand-skyblue to-brand-blue',
            formLink: 'https://bit.ly/EssayFestafora2026',
            guideLink: 'https://bit.ly/GuideBookEssayFestafora2026'
        }
    ]

    return (
        <section id="lomba" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-lime/10 text-brand-lime text-xs font-bold uppercase tracking-wider mb-3 border border-brand-lime/20">
                        <i className="fa-solid fa-trophy"></i> Cabang Lomba
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">Lomba - Lomba FESTAFORA 2026</h2>
                    <p className="text-slate-400 text-sm sm:text-base">
                        Tunjukkan bakat, gagasan, dan karya terbaikmu. Pilih cabang lomba yang sesuai dan daftar sekarang sebelum penutupan!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="lombaGrid">
                    {competitions.map((comp) => (
                        <div key={comp.id} className="lomba-item glass-card glass-card-hover rounded-2xl overflow-hidden transition-all duration-300 flex flex-col">
                            <div className="relative h-64 bg-slate-800 overflow-hidden group">
                                <img 
                                    src={imgErrors[comp.imgKey] ? comp.fallback : comp.image} 
                                    alt={`Pamflet ${comp.title}`} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={() => handleImgError(comp.imgKey)}
                                />
                                <div className={`absolute top-3 left-3 ${comp.typeColor} text-slate-950 text-xs font-bold px-3 py-1 rounded-full shadow`}>
                                    {comp.badge || (comp.type.includes('Tim') ? 'Nasional' : comp.type)}
                                </div>
                                <button 
                                    onClick={() => onOpenModal(imgErrors[comp.imgKey] ? comp.fallback : comp.image, comp.title)}
                                    className="absolute bottom-3 right-3 bg-slate-900/80 hover:bg-brand-orange hover:text-slate-950 text-white p-2.5 rounded-lg text-xs font-semibold backdrop-blur transition-all flex items-center justify-center gap-1"
                                >
                                    <i className="fa-solid fa-expand"></i> Lihat Pamflet
                                </button>
                            </div>

                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between text-xs text-brand-gold font-semibold mb-2">
                                        <span><i className="fa-regular fa-calendar-check mr-1"></i> Dl: {comp.deadline}</span>
                                        <span><i className={`fa-solid ${comp.type.includes('Tim') ? 'fa-users' : 'fa-user'} mr-1`}></i> {comp.type}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{comp.title}</h3>
                                    <p className="text-slate-400 text-xs leading-relaxed mb-4">{comp.description}</p>
                                </div>

                                <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
                                    <a 
                                        href={comp.formLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className={`w-full py-2.5 px-4 rounded-xl bg-gradient-to-r ${comp.gradient} hover:brightness-110 text-slate-950 font-bold text-xs text-center flex items-center justify-center gap-2 transition-all`}
                                    >
                                        <i className="fa-solid fa-pen-to-square"></i> Daftar {comp.title.split('(')[0].trim()} (Google Form)
                                    </a>
                                    <a 
                                        href={comp.guideLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="w-full py-2 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs text-center flex items-center justify-center gap-2 transition-all border border-slate-700"
                                    >
                                        <i className="fa-solid fa-file-pdf text-red-400"></i> Download Guidebook (Drive)
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
