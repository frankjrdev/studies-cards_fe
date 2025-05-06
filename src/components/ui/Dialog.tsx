import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  ({ isOpen, onClose, title, children, className, ...props }, ref) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="fixed inset-0 bg-black/50 transition-opacity"
          onClick={onClose}
        />
        <div
          ref={ref}
          className={cn(
            "relative z-50 w-full max-w-lg rounded-lg bg-background p-6 shadow-lg",
            className
          )}
          {...props}
        >
          <div className="flex items-center justify-between mb-4">
            {title && (
              <h2 className="text-lg font-semibold text-titles">{title}</h2>
            )}
            <button
              onClick={onClose}
              className="rounded-full p-1 hover:bg-grey-100 transition-colors"
            >
              <X className="h-5 w-5 text-grey-500" />
            </button>
          </div>
          {children}
        </div>
      </div>
    );
  }
);

Dialog.displayName = "Dialog";

export { Dialog };
