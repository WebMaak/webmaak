 
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function TalibScheduler() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"lets-talk-about-your-project"});
      cal("ui", {"theme":"dark","cssVarsPerTheme":{"light":{"cal-brand":"#73b7ff"},"dark":{"cal-brand":"#73b7ff"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <Cal namespace="lets-talk-about-your-project"
    calLink="talib-ali/lets-talk-about-your-project"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
    config={{"layout":"month_view","theme":"dark"}}
  />;
};