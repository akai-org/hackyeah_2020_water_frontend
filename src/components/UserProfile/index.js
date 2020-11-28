import React, { useEffect, useState } from "react";
import Link from "next/link";
// import Highcharts from "highcharts";
// import exporting from "highcharts/modules/exporting";
import { useAuth } from "../../context/AuthProvider";
import { getUserInfo } from "../../api";

function index() {
  const { user } = useAuth();

  useEffect(() => {
    console.log('Fetching Data')
  }, []);

  console.log(user);
  return (
    <>
      <div></div>
    </>
  );
}

export default index;
