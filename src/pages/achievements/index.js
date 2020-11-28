import React, { useEffect } from "react";
import SEO from "../../seo";
import { getAchievements } from "../../api";
const list = [];
const Box=()=>{
  <div>
    
  </div>
}
export default function Home() {
  useEffect(() => {
    (async () => {
      console.log('start')
      const resp = await getAchievements();
      console.log(resp);
    })();
  }, []);
  return (
    <>
      <SEO title="Achievements" />
      <div style={{ textAlign: "center" }}>achivements</div>
    </>
  );
}
