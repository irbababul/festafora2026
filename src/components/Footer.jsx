export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-12 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
                    
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-orange to-brand-gold p-0.5">
                                <div className="w-full h-full bg-brand-dark rounded-[10px] flex items-center justify-center font-extrabold text-brand-orange text-lg">
                                    F9
                                </div>
                            </div>
                            <span className="text-xl font-extrabold text-white">FESTAFORA <span className="text-brand-orange">2026</span></span>
                        </div>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                            Festival of Formasi 2026 - Peringatan Hari Ulang Tahun ke-9 Formasi (Forum Mahasiswa KIP-Kuliah) Universitas Pembangunan Nasional "Veteran" Jawa Timur.
                        </p>
                        <div className="flex items-center gap-3">
                            <a href="https://www.instagram.com/festafora2k26?igsi=MWJrM3czOG16cGhsNw==" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-orange hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all">
                                <i className="fa-brands fa-instagram text-base"></i>
                            </a>
                            <a href="https://www.tiktok.com/@formasi_belanegara?_r=1&_t=ZS-99Aymt7uxoz" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-orange hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all">
                                <i className="fa-brands fa-tiktok text-base"></i>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-orange hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all">
                                <i className="fa-brands fa-youtube text-base"></i>
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Navigasi</h5>
                        <ul className="space-y-2 text-xs text-slate-400">
                            <li><a href="#home" className="hover:text-brand-orange transition-colors">Beranda</a></li>
                            <li><a href="#about" className="hover:text-brand-orange transition-colors">Tentang Formasi</a></li>
                            <li><a href="#lomba" className="hover:text-brand-orange transition-colors">Cabang Lomba</a></li>
                            <li><a href="#webinar" className="hover:text-brand-orange transition-colors">Webinar Nasional</a></li>
                            <li><a href="#twibbon" className="hover:text-brand-orange transition-colors">Twibbon & Drive</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Contact Person / Helpdesk</h5>
                        <p className="text-xs text-slate-400 mb-4">Ada pertanyaan seputar pendaftaran atau kendala pendaftaran?</p>
                        <div className="space-y-2">
                            <a href="https://wa.me/6285731446292?text=Halo%20Panitia%20FESTAFORA%202026,%20saya%20ingin%20bertanya..." target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 flex items-center justify-between group transition-all">
                                <div className="flex items-center gap-3">
                                    <i className="fa-brands fa-whatsapp text-emerald-400 text-lg"></i>
                                    <div className="text-left">
                                        <span className="block text-xs font-bold text-white">CP Lomba (Kak Ella)</span>
                                        <span className="block text-[10px] text-slate-400">+62 857-3144-6292</span>
                                    </div>
                                </div>
                                <i className="fa-solid fa-chevron-right text-xs text-slate-500 group-hover:text-emerald-400 transition-colors"></i>
                            </a>

                            <a href="https://wa.me/6283833344707?text=Halo%20Panitia%20FESTAFORA%202026,%20saya%20ingin%20bertanya%20mengenai%20webinar..." target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 flex items-center justify-between group transition-all">
                                <div className="flex items-center gap-3">
                                    <i className="fa-brands fa-whatsapp text-emerald-400 text-lg"></i>
                                    <div className="text-left">
                                        <span className="block text-xs font-bold text-white">CP Webinar (Kak Salas)</span>
                                        <span className="block text-[10px] text-slate-400">+62 838-3334-4707</span>
                                    </div>
                                </div>
                                <i className="fa-solid fa-chevron-right text-xs text-slate-500 group-hover:text-emerald-400 transition-colors"></i>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left">
                    <p>&copy; 2026 FESTAFORA - Forum Mahasiswa KIP-K UPN "Veteran" Jawa Timur. All rights reserved.</p>
                    <p>HUT Ke-9 Formasi KIP-K UPNVJT</p>
                </div>
            </div>
        </footer>
    )
}
