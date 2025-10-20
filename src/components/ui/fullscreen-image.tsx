import { X } from "lucide-react";

interface FullscreenImageProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}

export function FullscreenImage({ isOpen, onClose, src, alt }: FullscreenImageProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
      >
        <X className="w-6 h-6" />
      </button>
      <div 
        className="w-full h-full p-4 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-full w-auto h-auto object-contain"
        />
      </div>
    </div>
  );
}