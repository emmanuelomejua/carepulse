import { forwardRef, type TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  wrapperClass?: string;
}

// Reusable TextArea field incase of scaling application
export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", wrapperClass = "", ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-2 ${wrapperClass}`}>
        {label && (
          <label className="text-sm font-medium text-[#FFFFFF]">
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          className={`
            w-full rounded-lg border outline-none transition-all 
            ${error ? "border-red-500" : ""} 
            ${className}
          `}
          {...props}
        />

        {error && (
          <p className="text-xs text-red-500 -mt-0.5">
            {error}
          </p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
