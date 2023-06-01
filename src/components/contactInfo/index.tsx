import { HyperLink, Text } from "@/typography";
import { removeBoldTags } from "@/utlis/convertToBold";

interface ContactProp {
  data: any;
}

export default function Contact({ data }: ContactProp) {
  return (
    <>
      {data?.contactdata.map(({ description, index, title }: any) => {
        return (
          <div className="flex gap-2 justify-end" key={index}>
            <Text>{title}</Text>
            <Text>
              <span
                dangerouslySetInnerHTML={{
                  __html: removeBoldTags(description),
                }}
              />
            </Text>
          </div>
        );
      })}
      {data?.hyperlink.map(({ description, index, title }: any) => (
        <div className="flex gap-2 justify-end" key={index}>
          <Text>{title}</Text>
          <HyperLink herf={`mailto:${description}`}>{description}</HyperLink>
        </div>
      ))}
    </>
  );
}
