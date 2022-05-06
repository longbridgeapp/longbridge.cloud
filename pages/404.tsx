import Head from "next/head";
import { useEffect } from "react";

type Props = {
  statusCode: number;
  title: string;
};

const NotFound = ({ statusCode, title }: Props) => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <div className="flex items-center justify-center h-screen">
        <main className="text-center">
          <img
            className="mb-6 w-60"
            src="https://pub.lbkrs.com/files/202202/LUisghVEyxmcNfUm/error.png"
            alt="error"
          />
        </main>
      </div>
    </>
  );
};

export default NotFound;
