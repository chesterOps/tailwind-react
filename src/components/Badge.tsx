import React from "react";

// Badge interface
interface IBadge extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "md" | "lg";
  children: React.ReactNode;
  color?: "primary" | "neutral";
  isPill?: boolean;
}

// Button sizes
const sizes = {
  md: "text-xs",
  lg: "text-sm",
};

// Button colors
const colors = {
  primary: "bg-primary text-white [&>svg]:fill-white",
  neutral: "bg-gray-100 text-gray-800 [&>svg]:fill-gray-700",
};

export default function Badge({
  children,
  size = "md",
  color = "primary",
  isPill = false,
  className = "",
}: IBadge) {
  return (
    <span
      className={`px-2.5 py-0.5 font-medium [&>svg]:w-2.5 [&>svg]:h-2.5 ${
        isPill ? "rounded-full" : "rounded-sm"
      } ${colors[color]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
}
