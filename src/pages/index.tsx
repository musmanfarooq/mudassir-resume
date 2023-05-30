import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Contact from "@/components/contactInfo";
import { Divider, Heading } from "@/typography";
import CurrentJob from "@/components/currentJob";
import KeySkill from "@/components/keyskill";
import Qualification from "@/components/qualification";

const inter = Inter({ subsets: ["latin"] });

interface Data {
  name: string;
  contactInfo: {
    address: string;
    state: string;
    mobile: string;
    email: string;
  };
  csProfile: {
    name: string;
    points: any;
  };
  keyskills: {
    name: string;
    points: any;
  };
  qualification: {
    name: string;
    points: any;
  };
}

export default function Home() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch("/info.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Contact data={data?.contactInfo} />
      {data && <Heading>{data?.name}</Heading>}
      <Divider className="w-full" />
      <CurrentJob data={data?.csProfile} />
      <Divider className="w-full" />
      <KeySkill data={data?.keyskills} />
      <Divider className="w-full" />
      <Qualification data={data?.qualification} />
    </>
  );
}
