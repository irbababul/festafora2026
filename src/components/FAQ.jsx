import { useState } from 'react'

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: 'Siapa saja yang boleh mengikuti lomba di FESTAFORA 2026?',
            answer: 'Seluruh mahasiswa aktif (D3/D4/S1) perguruan tinggi se-Indonesia, baik penerima KIP-Kuliah maupun non-KIP-Kuliah, dapat mengikuti cabang lomba FESTAFORA 2026 sesuai dengan syarat di guidebook masing-masing lomba.'
        },
        {
            question: 'Apakah Webinar FESTAFORA 2026 dipungut biaya?',
            answer: 'Webinar FESTAFORA 2026 100% Gratis dan terbuka untuk umum. Seluruh peserta yang mendaftar dan mengikuti sesi hingga selesai akan mendapatkan E-Certificate resmi secara gratis.'
        },
        {
            question: 'Bagaimana cara mengunggah bukti pendaftaran dan karya?',
            answer: 'Pengunggahan berkas dilakukan langsung saat mengisi Google Form Pendaftaran masing-masing lomba. Pastikan file format PDF/JPG/MP4 sesuai instruksi pada Guidebook.'
        },
        {
            question: 'Jika mengalami kendala, siapa yang bisa dihubungi?',
            answer: 'Anda dapat menghubungi Helpdesk / Contact Person melalui tombol WhatsApp yang tersedia di bagian bawah website ini.'
        }
    ]

    return (
        <section id="faq" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-skyblue/10 text-brand-skyblue text-xs font-bold uppercase tracking-wider mb-3 border border-brand-skyblue/20">
                        <i className="fa-solid fa-circle-question"></i> FAQ
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Pertanyaan Sering Diajukan</h2>
                    <p className="text-slate-400 text-sm">Informasi penting terkait pendaftaran dan keikutsertaan FESTAFORA 2026.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="glass-card rounded-2xl border border-slate-800 overflow-hidden">
                            <button 
                                className="faq-toggle w-full p-5 text-left font-bold text-white flex justify-between items-center gap-4 hover:text-brand-orange transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span>{faq.question}</span>
                                <i className={`fa-solid fa-chevron-down text-sm transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}></i>
                            </button>
                            <div className={`${openIndex === index ? 'block' : 'hidden'} px-5 pb-5 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/60 pt-3`}>
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
