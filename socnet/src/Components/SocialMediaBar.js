import "../index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const SocialMediaBar = () => {
  return (
    <div className="socialMedia">
      <a href="#" className="fa fa-github">
      <FontAwesomeIcon icon={faGithub}/>
      </a>
      <a href="#" className="fa fa-linkedin">
        <FontAwesomeIcon icon={faLinkedin}/>
      </a>
    </div>
  );
};

export default SocialMediaBar;
