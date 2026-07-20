interface SectionHeadingProps {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-20">
      <span className="uppercase tracking-[5px] text-orange-500">
        {badge}
      </span>

      <h2 className="text-5xl font-bold mt-5">
        {title}
        {highlight && (
          <span className="text-orange-500">
            {" "}
            {highlight}
          </span>
        )}
      </h2>

      <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
}