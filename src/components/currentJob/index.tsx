import { Divider, SubHeading } from "@/typography";
import BulletPoints from "../bulletpoints";

interface CurrentJobProps {
  data: any;
}
export default function CurrentJob({ data }: CurrentJobProps) {
  return (
    <>
      {data && (
        <>
          <SubHeading className="mb-5">{data.title}</SubHeading>
          {data.points.map(({ description, index }: any) => (
            <div key={index}>
              <BulletPoints description={description}/>
            </div>
          ))}
        </>
      )}
      <Divider className="w-full" />
    </>
  );
}
