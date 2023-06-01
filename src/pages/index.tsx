import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Contact from "@/components/contactInfo";
import { Divider, Heading } from "@/typography";
import CurrentJob from "@/components/currentJob";
import KeySkill from "@/components/keyskill";
import Qualification from "@/components/qualification";
import EmploymentHistory from "@/components/employmenthistory";
import Achivement from "@/components/achivement";

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
  employment: {
    name: string;
    data: {
      position: string;
      timeperiod: string;
      company: string;
      subheading: string;
      points: {
        data: string;
      };
    };
  };
  achievement: {
    title: string;
    data: {
      decription: string;
    };
  };
  license: {
    title: string;
    data: {
      decription: string;
    };
  };
  referee: {
    title: string;
    data: {
      decription: string;
    };
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
      {data && <Heading className="mt-5">{data?.name}</Heading>}
      <Divider className="w-full" />
      <CurrentJob data={data?.csProfile} />
      <KeySkill data={data?.keyskills} />
      <Qualification data={data?.qualification} />
      <EmploymentHistory data={data?.employment} />
      <Achivement data={data?.achievement} />
      <Divider className="w-full" />
      <Achivement data={data?.license} />
      <Achivement data={data?.referee} />
    </>
  );
}
