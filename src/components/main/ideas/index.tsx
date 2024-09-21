import * as React from "react";
import Idea from "./Idea";
import SectionTitle from "../../shared_components/sectiontitle";

export default function Ideas() {
  return (
    <section className="w-[300px] md:w-[748px] lg:w-[940px] mt-[95px] mb-[36px] flex flex-wrap md:justify-between justify-center gap-[20px]">
      <SectionTitle>Discover holiday activity ideas</SectionTitle>
      <Idea
        idea="Sports and Activities"
        imgUrl="https://images.ctfassets.net/wqi5si2lylwp/1Gd1S28jjXjDO9itu9DRJV/935e3afa3e94fb9705f01778b8f0437e/Bitmap_3_.png"
      />
      <Idea
        idea="Wellness and Health"
        imgUrl="https://images.ctfassets.net/wqi5si2lylwp/7G7avaW9Q5s9Hv3psqrfEQ/09e2bfc58bfa79943850f0242c27e0d9/Bitmap_4_.png"
      />
      <Idea
        idea="Extreme Sports and Expedictions"
        imgUrl="https://images.ctfassets.net/wqi5si2lylwp/2MWk5Un2q6wvxSCpiHe1v3/8c3732fc53c618eabfaf57028d9d772d/Bitmap_5_.png"
      />
      <Idea
        idea="Games"
        imgUrl="https://images.ctfassets.net/wqi5si2lylwp/2P3Ty1gefqmkrkeoxky26w/abb6e578fe92f8d300c8331539828c80/Bitmap_6_.png"
      />
      <Idea
        idea="Culture and Education"
        imgUrl="https://images.ctfassets.net/wqi5si2lylwp/TMnVbvX9NN8y5iKE42eET/e25abd0528396c5cbcc129bb5c044515/Bitmap_7_.png"
        big={true}
      />
      <Idea
        idea="Enjoyment and Relaxation"
        imgUrl="https://images.ctfassets.net/wqi5si2lylwp/30SZQ55uUjToBvLdAfkgag/3caee35fde4cceb56f7fb4937383e9d1/Bitmap_8_.png"
        big={true}
      />
      <Idea
        idea="Travelling"
        imgUrl="https://images.ctfassets.net/wqi5si2lylwp/45NbxKdRY49To3JiBXGrKh/955804af5936ace408b2502d7620ee66/Bitmap_9_.png"
      />
    </section>
  );
}
