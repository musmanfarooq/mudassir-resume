import { Text } from "@/typography";

interface BulletPointsProps {
  description: string;
  title?: string;
}

export default function BulletPoints({
  title,
  description,
}: BulletPointsProps) {
  return (
    <div className="flex gap-4 items-baseline pb-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" id="point">
        <path
          fill="#4aafda"
          fill-rule="evenodd"
          d="M4.415 8.829A4.423 4.423 0 0 0 8.83 4.414C8.829 1.983 6.846 0 4.415 0S0 1.983 0 4.415a4.423 4.423 0 0 0 4.415 4.414z"
          clip-rule="evenodd"
        />
      </svg>
      <div className="w-[100%]">
        <Text className="inline font-bold">{title}</Text>
        <Text className="inline  text-justify">{description}</Text>
      </div>
    </div>
  );
}
