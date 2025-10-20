import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface FullscreenImageProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}

export function FullscreenImage({ isOpen, onClose, src, alt }: FullscreenImageProps) {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-screen max-h-screen p-0 border-none bg-transparent">
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="w-full h-full p-4 flex items-center justify-center">
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}