import React, { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
        <button
          ref={ref}
          disabled={disabled || loading}
          className={`
            px-4 py-2 font-medium cursor-pointer rounded-md 
            focus:outline-none focus:ring-2 
            focus:ring-indigo-500 focus:ring-offset-2
            flex items-center justify-center gap-2
            ${disabled || loading ? "opacity-60 cursor-not-allowed" : ""}
            ${className}
          `}
          {...props}
        >
          {/* Spinner */}
          {loading && (
            <span
              className="
                w-4 h-4 border-2 border-white border-t-transparent 
                rounded-full animate-spin
              "
            />
          )}

          {/* Left icon (hidden when loading) */}
          {!loading && leftIcon && <span className="">{leftIcon}</span>}

          {/* Button text */}
          <span className="">{loading ? "Loading..." : children}</span>

          {/* Right icon (hidden when loading) */}
          {!loading && rightIcon && <span>{rightIcon}</span>}
        </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
