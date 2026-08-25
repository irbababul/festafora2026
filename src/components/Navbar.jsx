import { useState } from 'react'

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navLinks = [
        // { href: '#about', label: 'Tentang' },
        { href: '#lomba', label: 'Lomba' },
        // { href: '#webinar', label: 'Webinar' },
        { href: '#timeline', label: 'Jadwal Event' },
        { href: '#twibbon', label: 'Twibbon & Link' },
        { href: '#faq', label: 'FAQ' },
    ]

    return (
        <header id="navbar" className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-brand-dark/80 backdrop-blur-md border-b border-slate-800">
            <div className="w-full px-6 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    <a href="#home" className="flex items-center gap-3 group -ml-2 md:-ml-4 lg:-ml-10">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-orange via-brand-gold to-brand-lime p-0.5 shadow-lg shadow-brand-orange/20 transition-transform group-hover:scale-105">
                            <img src="/assets/images/logo-formasi.png" alt="Logo Festafora" className="w-full h-full object-cover rounded-[10px]" />
                        </div>
                        <div>
                            <span className="text-xl font-extrabold tracking-tight text-white block leading-none">FESTAFORA <span className="text-brand-orange">2026</span></span>
                        </div>
                    </a>

                    <nav className="hidden min-[1250px]:flex items-center space-x-8 text-sm font-medium">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="text-slate-300 hover:text-brand-orange transition-colors">
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden min-[1250px]:flex items-center gap-3">
                        <a href="#lomba" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold text-slate-950 font-bold text-sm shadow-lg shadow-brand-orange/25 hover:shadow-brand-orange/40 hover:scale-105 transition-all">
                            Daftar Sekarang <i className="fa-solid fa-arrow-right ml-1"></i>
                        </a>
                    </div>

                    <button 
                        id="mobileMenuBtn" 
                        type="button"
                        className="min-[1250px]:hidden text-slate-300 hover:text-white p-2 text-2xl focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Navigation"
                    >
                        <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </div>

            <div id="mobileMenu" className={`${mobileMenuOpen ? 'block' : 'hidden'} min-[1250px]:hidden bg-brand-cardBg border-b border-slate-800 px-4 pt-2 pb-6 space-y-3`}>
                {/* <a href="#about" className="mobile-nav-link block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-brand-orange">Tentang Festafora</a> */}
                <a href="#lomba" className="mobile-nav-link block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-brand-orange">Lomba</a>
                {/* <a href="#webinar" className="mobile-nav-link block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-brand-orange">Webinar Nasional</a> */}
                <a href="#timeline" className="mobile-nav-link block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-brand-orange">Jadwal Event</a>
                <a href="#twibbon" className="mobile-nav-link block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-brand-orange">Twibbon & Akses Link</a>
                <a href="#faq" className="mobile-nav-link block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-brand-orange">FAQ</a>
                <div className="pt-2">
                    <a href="#lomba" className="block w-full text-center px-5 py-3 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold text-slate-950 font-bold text-sm shadow-md">
                        Daftar Event
                    </a>
                </div>
            </div>
        </header>
    )
}
