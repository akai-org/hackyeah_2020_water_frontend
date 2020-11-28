import React, { useEffect } from "react";
import SEO from "../../seo";
import { getAchievements } from "../../api";
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
      <SEO title="Questions" />
      <div style={{ textAlign: "center" }}>questions</div>
    </>
  );
}
