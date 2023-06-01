import { Divider, SubHeading, Text } from "@/typography";
import BulletPoints from "../bulletpoints";

interface achivementProps {
  data: any;
}

export default function Achivement({ data }: achivementProps) {
  const achievement = data;
  return (
    <div>
      {achievement && <SubHeading className="my-4">{achievement.title}</SubHeading>}
      {achievement?.data.map((achievement: any, index: number) => (
        <BulletPoints key={index} description={achievement.description} />
      ))}
      <Divider className="w-full" />
    </div>
  );
}
