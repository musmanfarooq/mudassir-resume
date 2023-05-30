import { HyperLink, Text } from "@/typography";
import convertToBold from "@/utlis/convertToBold";

interface ContactProp {
  data: any;
}

export default function Contact({ data }: ContactProp) {
  const contactdata = data;

  return (
    <>
      {contactdata && (
        <div className="text-right text-[#4aafda]">
          <Text>Address: {contactdata.address}</Text>
          <Text>State/PCode: {contactdata.state}</Text>
          <Text>Mobile: {contactdata.mobile}</Text>
          <Text className="inline">Email: </Text>
          <HyperLink className="inline" herf={`mailto:${contactdata.email}`}>
            {contactdata.email}
          </HyperLink>
        </div>
      )}
    </>
  );
}
