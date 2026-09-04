"use client";

import Link from "next/link";

export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  disabled = false,
  loading = false,
  onClick,
  fullWidth = false,
  className = "",
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 cursor-pointer rounded-md px-6 py-3.5 text-sm font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50";

  const variants = {
    primary: "bg-blue-700 text-white hover:bg-blue-600 disabled:bg-blue-700/50",
    secondary:
      "border border-white/15 text-white hover:border-white/30 hover:bg-white/5 disabled:border-white/10 disabled:text-white/40",
  };

  const classes = `${baseClasses} ${variants[variant]} ${
    fullWidth ? "w-full" : ""
  } ${disabled || loading ? "cursor-not-allowed" : ""} ${className}`;

  const content = (
    <>
      {loading && <i className="fas fa-spinner fa-spin text-xs" />}
      {children}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        aria-disabled={disabled || loading}
        className={`${classes} ${
          disabled || loading ? "pointer-events-none" : ""
        }`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
    >
      {content}
    </button>
  );
}
