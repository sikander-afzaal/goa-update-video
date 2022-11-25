import React from "react";
import team1 from "../../assets/team/team (1).png";
import team5 from "../../assets/team/team (5).png";
import thecrow from "../../assets/team/test.png";
import tim from "../../assets/team/Tim.png";
import c9 from "../../assets/team/c9.png";
import phil from "../../assets/team/phil.png";
import walshy from "../../assets/team/walshy.png";
import asg from "../../assets/team/asg.png";
import she from "../../assets/team/sheriff.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import TeamCard from "../../components/TeamCard/TeamCard";
import Fade from "react-reveal/Fade";
function Team() {
  return (
    <div className="cont">
      <Fade duration={1500}>
        <div id="team" className="team">
          <h1>Core Team</h1>
          <Splide
            options={{
              interval: 4000,
              autoplay: true,
              gap: "20px",
              rewind: true,
              loop: true,
              perPage: 3,
              height: "auto",
              width: "100%",
              arrows: true,
              focus: "center",
              pagination: false,
              drag: true,
              type: "loop",
              perMove: 1,
              flickMaxPages: 1,
              flickPower: 500,
              breakpoints: {
                1192: {
                  width: "100%",
                  perPage: 2,
                },

                630: {
                  perPage: 1,
                  width: "95%",
                },
              },
            }}
          >
            <SplideSlide className="swiper-lazy">
              <TeamCard
                img={team5}
                name={"Atomyc"}
                role={"Project and Community Manager"}
              />
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <TeamCard
                img={team1}
                name={"Db009"}
                role={"President/CEO/Lead Developer"}
              />
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <TeamCard
                img={c9}
                name={"Canine Gaming LLC"}
                role={"Vice President/COO"}
              />
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <TeamCard
                img={thecrow}
                name={"Issa Hussein"}
                role={"Unity Developer"}
              />
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <TeamCard
                img={asg}
                name={"TJ"}
                role={"Unity Developer"}
              />
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <TeamCard
                img={she}
                name={"SheriffGOA"}
                role={"Marketing/ Developer"}
              />
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <TeamCard
                img={tim}
                name={"Tim Murosky"}
                role={"3D Modeling"}
              />
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <TeamCard
                img={walshy}
                name={"Walshy.GoA"}
                role={"Solidity/Frontend Developer"}
              />
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <TeamCard
                img={phil}
                name={"Walk_walsh.GoA "}
                role={"Solidity/Frontend Developer"}
              />
            </SplideSlide>
          </Splide>
        </div>
      </Fade>
    </div>
  );
}

export default Team;
