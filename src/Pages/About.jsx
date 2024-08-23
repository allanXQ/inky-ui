import React from "react";
import ImageGrid from "../Components/ImageGrid";

const About = () => {
  return (
    <main id="about" className="flex flex-col gap-5 w-[100vw]">
      <div
        id="about-hero"
        className="flex flex-col justify-center text-white gap-2 pl-5  md:pl-52 pt-10 sm:bg-fixed"
      >
        <div className="flex  gap-2 text-5xl anton-larger">
          <p className="text-[#F6C228]">WHO IS</p>
          <p>MD?</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-10 pt-10">
        <div className="flex flex-col gap-5 max-w-[95vw] md:max-w-[80vw]">
          <p className="about-text font-bold">
            MD brings a rich reservoir of experience and proficiency, boasting a
            distinguished history of triumph in leadership development and
            business growth strategies, MD has finely tuned his skills through
            years of devoted study, hands-on application, and coaching diverse
            teams and leaders across industries and institutions. Acknowledged
            for his knack for sparking transformation, MD is a highly
            sought-after speaker and trainer. His educational background
            includes a master's degree in strategic management, a bachelor's
            degree in entrepreneurship, and a plethora of additional
            certificates from esteemed institutions. These include
            certifications in people management, corporate governance, business
            analysis and process modeling, and trainer of trainers, among
            others.
          </p>
          <p className="about-text">
            Throughout his illustrious career spanning over a decade, he has
            successfully worked with national and international corporations,
            steadily progressing from a subordinate position to ultimately
            becoming a respected business leader. MD's narrative within the
            business sector exudes confidence and highlights exponential
            development prospects. He captivates his audience by emphasizing the
            importance of avoiding complacency and aiming high, demonstrating
            how one can achieve great success and positively impact others. It
            is not only his impressive personality but also his exceptional way
            with words and life-changing anecdotes that inspire people to take
            unprecedented action.
          </p>
          <p className="about-text">
            MD's remarkable credentials, combined with his inspiring stories and
            ability to convey his message effectively, make him a truly
            influential figure who motivates individuals to reach new heights
            and make a lasting difference in their lives, the lives of others
            and that of the organization. With a fervent dedication to achieving
            excellence in every endeavor and a consistent history of remarkable
            accomplishments,
          </p>
        </div>
        <div
          id="about-midbg"
          className="about-text h-[50vh] w-[100%] sm:h-[80vh] sm:bg-fixed md:max-w-[80vw]"
        ></div>
        <div className="flex flex-col gap-5 max-w-[95vw] md:max-w-[80vw]">
          <p className="about-text">
            MD offers a rich reservoir of knowledge and experience poised to
            elevate any project or initiative. He brings a relentless commitment
            to excellence, a keen eye for detail, and a collaborative spirit
            that fosters synergy and drives results. His track record speaks
            volumes, characterized by a string of successes and accolades that
            underscore his ability to deliver tangible value and exceed
            expectations. As He embark on new ventures, He remains steadfast in
            his pursuit of excellence, poised to make a lasting impact and
            inspire positive change. MD stands as a towering figure in the
            realms of speaking and training, basking in widespread acclaim and
            recognition garnered through a multitude of avenues.
          </p>
          <p className="about-text">
            From delivering spellbinding keynote addresses at prestigious
            conferences to making impactful appearances in the media spotlight,
            MD's influence resonates far and wide. Testimonials from esteemed
            executives serve as a testament to the transformative power of MD's
            teachings, with clients hailing the lasting change and exceptional
            results they have witnessed firsthand. Through a seamless blend of
            expertise, charisma, and unwavering dedication, MD continues to
            leave an indelible mark on individuals and organizations alike,
            shaping futures and inspiring greatness with each engagement.
          </p>
        </div>
      </div>
      <div>
        <ImageGrid />
      </div>
    </main>
  );
};

export default About;
