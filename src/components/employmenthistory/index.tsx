import { Divider, SubHeading, Text, TextBigger } from "@/typography";
import BulletPoints from "../bulletpoints";

interface HistoryProps {
  data: any;
}

export default function EmploymentHistory({ data }: HistoryProps) {
  const employment = data;
  return (
    <>
      {employment && <SubHeading>{employment.title}</SubHeading>}
      {employment?.data.map((job: any, index: any) => (
        <div key={index}>
          <div className="flex flex-col mb-2 justify-between gap-1 md:flex-row md:gap-3 md:items-center md:mb-0">
            <TextBigger className="mt-4 text-[#4aacc5] font-bold">
              {job.position}
            </TextBigger>
            <Text>{job.timeperiod}</Text>
          </div>
          <Text className="font-semibold">{job.company}</Text>
          <Text className="font-semibold italic my-2">{job.subheading}</Text>
          <ul>
            {job.points.map((point: any, idx: any) => (
              <BulletPoints description={point.data} key={idx} />
            ))}
          </ul>
        </div>
      ))}
      <Divider className="w-full" />
    </>
  );
}
