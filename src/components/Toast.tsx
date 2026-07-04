import { useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";

interface ToastProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Toast({ message, isOpen, onClose }: ToastProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in max-w-sm w-full bg-brand-forest border border-brand-emerald/30 shadow-2xl shadow-brand-emerald/10 rounded-xl p-4 flex items-start gap-3 backdrop-blur-md">
      <div className="bg-brand-emerald/10 p-1.5 rounded-lg text-brand-emerald">
        <CheckCircle2 className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-white">Sukses disalin!</p>
        <p className="text-xs text-gray-400 mt-0.5">{message}</p>
      </div>
      <button 
        onClick={onClose}
        className="text-gray-500 hover:text-white transition-colors p-0.5 rounded-md"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
