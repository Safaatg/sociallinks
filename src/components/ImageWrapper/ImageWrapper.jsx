import "./ImageWrapper.css";
import profile from "../../assets/avatar-jessica.jpeg";
function ImageWrapper() {
  return (
    <div id="container">
      <div id="profilImg">
        <img src={profile} />
        <div id="txt">
          <h1>Jessica Randall</h1>
          <span>London, United Kingdom</span>
        </div>
        <p>"Front-end developer and avid reader."</p>

        <div id="Links">
          <button>GitHub</button>
          <button>Frontend Mentor</button>
          <button>LinkedIn</button>
          <button>Twitter</button>
          <button>Instagram</button>
        </div>
      </div>
    </div>
  );
}
export default ImageWrapper;
