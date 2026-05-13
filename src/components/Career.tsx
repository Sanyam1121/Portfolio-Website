import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary Education</h4>
                <h5>Innocent Hearts School, Jalandhar</h5>
              </div>
              <h3>Completed</h3>
            </div>
            <p>
              Completed higher secondary education with a focus on foundational subjects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications (BCA)</h4>
                <h5>DAV Institute of Engineering & Technology (DAVIET), Jalandhar</h5>
              </div>
              <h3>Pursuing</h3>
            </div>
            <p>
              Currently pursuing BCA with a focus on computer applications and technology.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor & Graphic Designer</h4>
                <h5>Freelance & Local Studio Work</h5>
              </div>
              <h3>2–3 Years</h3>
            </div>
            <p>
              Designed promotional and social media content for local clients and brands. Edited cinematic videos, reels, and documentaries using Adobe Premiere Pro and After Effects. Delivered high-quality graphics using Photoshop, CorelDRAW, and Figma. Worked collaboratively with clients to understand their vision and deliver engaging visual solutions. Balanced multiple projects with efficiency and attention to detail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
