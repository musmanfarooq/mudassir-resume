import { Divider, SubHeading } from "@/typography";
import BulletPoints from "../bulletpoints";

interface CurrentJobProps {
  data: any;
}
export default function Qualification({ data }: CurrentJobProps) {
  return (
    <>
      {data && (
        <>
          <SubHeading className="mb-5">{data.title}</SubHeading>
          {data.points.map(({ description, index, title }: any) => (
            <div key={index}>
              <BulletPoints title={title} description={description}/>
            </div>
          ))}
        </>
      )}
      <Divider className="w-full" />
    </>
  );
}
