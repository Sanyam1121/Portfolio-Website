import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "YouTube Video Production",
    category: "Video Editing",
    tools: "Premiere Pro, After Effects, YouTube Player",
    image: "https://img.youtube.com/vi/WlE-PoZVhoM/maxresdefault.jpg",
    link: "https://youtu.be/WlE-PoZVhoM?si=aD58b0X8ukpckJRZ",
    youtubeId: "WlE-PoZVhoM",
  },
  {
    title: "YouTube Shorts / Reels",
    category: "Short-form Video",
    tools: "CapCut, Premiere Pro, Vertical Video",
    image: "https://img.youtube.com/vi/w0p4zUA1L54/hqdefault.jpg",
    link: "https://youtube.com/shorts/w0p4zUA1L54?si=sMX2S5FbSxy4rDb-",
    youtubeId: "w0p4zUA1L54",
  },
  {
    title: "Trading Video Production",
    category: "Motion Graphics / Reel",
    tools: "After Effects, Premiere Pro",
    image: "/images/trading-thumbnail 2.jpg",
    link: "https://www.instagram.com/p/DRR7-Y2E_yC/?hl=en",
  },
  {
    title: "Motion Graphics / VFX Reel",
    category: "Instagram Reel",
    tools: "After Effects, Premiere Pro",
    image: "/images/trading-thumbnail.jpg",
    link: "https://www.instagram.com/reel/DQ_3bFoEzM1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Gaming thumbnail",
    category: "Photography",
    tools: "Lightroom, Photoshop",
    image: "/images/Thumbnail 1.png",
  },
  {
    title: "Gaming Thumbnail",
    category: "Thumbnail Design",
    tools: "Photoshop, Lightroom",
    image: "/images/Thumbnail 3.png",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box || box.length === 0) return;
      const workContainer = document.querySelector(".work-container");
      if (!workContainer) return;
      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentElement = box[0].parentElement;
      if (!parentElement) return;
      const parentWidth = parentElement.getBoundingClientRect().width;
      const computedStyle = window.getComputedStyle(box[0]);
      let padding: number =
        parseInt(computedStyle.paddingLeft || computedStyle.padding || "80") / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => {
          setTranslateX();
          return `+=${translateX}`;
        },
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
                youtubeId={project.youtubeId}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
