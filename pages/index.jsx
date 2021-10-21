import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";

const index = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/login");
  }, []);
  return <div />;
};

export default index;
