// Button interface
interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  isPill?: boolean;
  icon?: React.ReactElement;
  iconPos?: "left" | "right";
  loading?: boolean;
  color?: "default" | "outline";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

// Button sizes
const sizes = {
  xs: "px-3 py-2 text-xs [&>svg]:w-3 [&>svg]:h-3",
  sm: "px-3 py-2 text-sm [&>svg]:w-3 [&>svg]:h-3",
  md: "px-5 py-2.5 text-sm [&>svg]:w-4 [&>svg]:h-4",
  lg: "px-5 py-3 text-base [&>svg]:w-4 [&>svg]:h-4 [&>svg.spinner]:h-6 [&>svg.spinner]:w-6",
  xl: "px-6 py-3.5 text-base [&>svg]:w-4 [&>svg]:h-4 [&>svg.spinner]:h-6 [&>svg.spinner]:w-6",
};

// Button colors
const colors = {
  default:
    "bg-primary text-white hover:bg-primary-hover disabled:bg-primary [&>svg]:fill-white",
  outline: "",
};

export default function Button({
  isPill = false,
  size = "md",
  color = "default",
  icon,
  iconPos = "left",
  className = "",
  children,
  loading = false,
  ...rest
}: IButton) {
  return (
    <button
      className={`${
        isPill ? "rounded-full" : "rounded-lg"
      } font-medium relative text-center ease-in-out transition-all cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 ${
        sizes[size]
      } ${colors[color]} ${className}`}
      {...rest}
    >
      <span
        className={`flex gap-2 items-center ${
          iconPos === "right" ? "flex-row-reverse" : ""
        } ${loading ? "invisible" : ""}`}
      >
        {icon && icon}
        {children}
      </span>
      {loading && (
        <svg
          className="absolute top-1/2 left-1/2 translate-[-50%] animate-spin spinner"
          viewBox="0 0 24 24"
        >
          <path d="M4.979 4.879l-.05.05c-3.903 3.903-3.903 10.239 0 14.142s10.239 3.903 14.142 0c3.903-3.903 3.903-10.239 0-14.142l-.152-.149-2.122 2.122a7.004 7.004 0 01.153 10.049 7.002 7.002 0 01-9.899 0 7.004 7.004 0 010-9.9l.051-.05L4.981 4.88z" />
        </svg>
      )}
    </button>
  );
}
