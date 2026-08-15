export default function Timeline() {
    const colorMap = {
        1: { bg: '#F27A22', text: '#F27A22' },       // brand-orange
        2: { bg: '#F59E0B', text: '#F59E0B' },       // brand-gold
        3: { bg: '#84CC16', text: '#84CC16' },       // brand-lime
        4: { bg: '#38BDF8', text: '#38BDF8' },       // brand-skyblue
        5: { bg: '#0284C7', text: '#0284C7' },       // brand-blue
        6: { bg: '#4D7C0F', text: '#4D7C0F' },       // brand-olive
        7: { bg: '#FB923C', text: '#FB923C' },       // brand-amber
    }

    const stages = [
        {
            num: 1,
            date: '25 Agustus - 9 September 2026',
            title: 'Pendaftaran & Pengumpulan Karya Gelombang 1',
            description: 'Pendaftaran dibuka dengan biaya pendaftaran early bird untuk seluruh cabang lomba FESTAFORA 2026.',
        },
        {
            num: 2,
            date: '10 - 25 September 2026',
            title: 'Pendaftaran & Pengumpulan Karya Gelombang 2',
            description: 'Pendaftaran reguler dan batas akhir pengunggahan berkas karya peserta kompetisi.',
        },
        {
            num: 3,
            date: '26 September - 01 Oktober 2026',
            title: 'Penilaian Dewan Juri & Kurasi Finalis',
            description: 'Proses penilaian independen oleh tim juri profesional untuk memilih karya terbaik.',
        },
        {
            num: 4,
            date: '02 Oktober 2026',
            title: 'Pengumuman Finalis 5 Besar',
            description: 'Pengumuman Finalis 5 besar akan diumumkan melalui grup Whatsapp masing masing lomba dan Instagram festafora2k26.',
        },
        {
            num: 5,
            date: '4 Oktober 2026',
            title: 'Webinar Nasional',
            description: 'Puncak acara peringatan ulang tahun ke-9 Formasi KIP-K UPNVJT, Webinar Nasional yang diadakan secara daring.',
        },
        {
            num: 6,
            date: '4 Oktober 2026',
            title: 'Technical Meeting Finalis',
            description: 'Technical meeting finalis akan dilakukan secara daring melalui zoom meeting.',
        },
        {
            num: 7,
            date: '10 Oktober 2026',
            title: 'Presentasi Finalis dan Pengumuman Juara',
            description: 'Presentasi dilakukan secara offline di kampus UPN "Veteran" Jawa Timur beserta pengumuman juara lomba.',
        }
    ]

    return (
        <section id="timeline" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-wider mb-3 border border-brand-gold/20">
                        <i className="fa-solid fa-calendar-days"></i> Timeline Kegiatan
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">Rangkaian Alur FESTAFORA 2026</h2>
                    <p className="text-slate-400 text-sm sm:text-base">Catat tanggal penting agar tidak ketinggalan setiap tahapan acara.</p>
                </div>

                <div className="max-w-4xl mx-auto relative border-l-2 border-slate-800 pl-6 sm:pl-10 space-y-10">
                    {stages.map((stage) => (
                        <div key={stage.num} className="relative group">
                            <div 
                                className="absolute -left-[31px] sm:-left-[47px] top-0 w-8 h-8 rounded-full text-slate-950 flex items-center justify-center font-bold text-xs ring-8 ring-brand-dark"
                                style={{ backgroundColor: colorMap[stage.num].bg }}
                            >
                                {stage.num}
                            </div>
                            <div className="glass-card p-6 rounded-2xl border border-slate-800 group-hover:border-orange-400/40 transition-all">
                                <span 
                                    className="text-xs font-bold uppercase tracking-wider"
                                    style={{ color: colorMap[stage.num].text }}
                                >
                                    {stage.date}
                                </span>
                                <h4 className="text-lg font-bold text-white mt-1">{stage.title}</h4>
                                <p className="text-slate-400 text-xs mt-2">{stage.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}