export default function ImageModal({ isOpen, onClose, imageSrc, title }) {
    if (!isOpen) return null

    return (
        <div 
            id="imageModal" 
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div className="relative max-w-3xl w-full max-h-[90vh] glass-card p-4 rounded-2xl flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                <div className="w-full flex justify-between items-center mb-3 px-2">
                    <h4 className="text-sm font-bold text-white">{title}</h4>
                    <button 
                        onClick={onClose}
                        className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-red-500 hover:text-white text-slate-300 flex items-center justify-center transition-colors"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="w-full h-full overflow-auto text-center flex items-center justify-center">
                    <img 
                        id="modalImg" 
                        src={imageSrc} 
                        alt={title} 
                        className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl" 
                    />
                </div>
            </div>
        </div>
    )
}