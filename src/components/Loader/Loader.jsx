import loader from "../../assets/loader.svg";
import "./Loader.css";

const Loader = ({ title }) => (
  <div className="loader-container">
    <img src={loader} alt="loader" className="loader-image" />
    <h1 className="loader-title">
      {title || 'Loading...'}
    </h1>
  </div>
);

export default Loader;
