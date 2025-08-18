// Card props
type CardProps = {
  image?: React.ReactElement;
  children: React.ReactNode;
  className?: string;
  orientation?: "horizontal" | "vertical";
};

export default function Card({
  image,
  children,
  className = "",
  orientation = "vertical",
}: CardProps) {
  return (
    <div
      className={`flex ${
        orientation === "vertical" ? "flex-col" : "items-center"
      } bg-white border overflow-hidden border-gray-200 rounded-lg shadow-sm ${className}`}
    >
      {image && <div>{image}</div>}
      <div className="p-5 size-full">{children}</div>
    </div>
  );
}
