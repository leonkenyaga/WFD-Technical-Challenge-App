import * as React from "react";
import Dreamshare from "../dreamshare_login_signup/dreamshare";
import ShareHolidayMessage from "./share_holiday_message";
import FindPartnerMessage from "./find_partner_message";
import DreamshareButton from "../../shared_components/dreamsharebutton";

export default function ShareHoliday() {
  return (
    <section className="w-full mt-[110px] md:mt-[140px]">
      <div className="flex justify-center md:hidden">
        <Dreamshare />
      </div>
      <ShareHolidayMessage />
      <FindPartnerMessage />
      <div className="flex justify-center mt-[20px] md:mt-[33px]">
      <div>
        <DreamshareButton filled={true}>Find your holiday partner</DreamshareButton>
      </div>
    </div>
    </section>
  );
}
