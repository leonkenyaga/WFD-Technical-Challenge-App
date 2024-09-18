import * as React from "react";
import Dreamshare from "../dreamshare_login_signup/dreamshare";
import ShareHolidayMessage from "./share_holiday_message";
import FindPartnerMessage from "./find_partner_message";
import FindPartnerButton from "./find_partner_button";

export default function ShareHoliday() {
  return (
    <section className="w-full mt-[110px] md:mt-[140px]">
      <div className="flex justify-center md:hidden">
        <Dreamshare />
      </div>
      <ShareHolidayMessage />
      <FindPartnerMessage />
      <FindPartnerButton />
    </section>
  );
}
