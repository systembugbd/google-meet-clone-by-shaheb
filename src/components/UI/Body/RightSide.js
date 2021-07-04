import React from "react";
import Slider from "react-slick";
import("./RightSide.scss");
import("slick-carousel/slick/slick.css");
import("slick-carousel/slick/slick-theme.css");

function RightSide() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="rightside">
      <Slider {...settings}>
        <div>
          <img
            alt=""
            src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg"
          />
          <div className="alert-info">
            <div class="heading">Get a link you can share</div>
            <div class="disc">
              Click <strong>New meeting</strong> to get a link you can send to
              people you want to meet with
            </div>
          </div>
        </div>
        <div>
          <img
            alt=""
            src="https://www.gstatic.com/meet/user_edu_brady_bunch_light_81fa864771e5c1dd6c75abe020c61345.svg"
                      />
                        <div className="alert-info">
            <div class="heading">See everyone together</div>
            <div class="disc">
            To see more people at the same time, go to Change layout in the More options menu
            </div>
          </div>
        </div>
        <div>
          <img
            alt=""
            src="https://www.gstatic.com/meet/user_edu_scheduling_light_b352efa017e4f8f1ffda43e847820322.svg"
                      />
                        <div className="alert-info">
            <div class="heading">Plan ahead</div>
            <div class="disc">
          Click <strong>New meeting</strong> to schedule meetings in Google Calendar and send invites to participants
            </div>
          </div>
        </div>
        <div>
          <img
            alt=""
            src="https://www.gstatic.com/meet/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg"
                      />
                        <div className="alert-info">
            <div class="heading">Your meeting is safe</div>
            <div class="disc">
            No one can join a meeting unless invited or admitted by the host
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default RightSide;
