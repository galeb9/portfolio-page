import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faXmark,
  faCircleHalfStroke,
  faEye,
  faImage,
  faVideo,
  faArrowRightLong,
  faArrowLeftLong,
  faArrowDownLong,
  faCircleDown,
  faEnvelope,
  faMugHot,
  faComputerMouse,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { faClone } from "@fortawesome/free-regular-svg-icons";
import {
  faFigma,
  faCss3Alt,
  faHtml5,
  faSass,
  faSquareJs,
  faGitAlt,
  faVuejs,
  faNodeJs,
  faGithub,
  faAngular,
  faBootstrap,
  faAws,
  faReact,
  faLinkedin,
  faLaravel,
  faPython,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";

const solidIcons = [
  faBars,
  faXmark,
  faCircleHalfStroke,
  faEye,
  faImage,
  faVideo,
  faArrowRightLong,
  faArrowLeftLong,
  faArrowDownLong,
  faCircleDown,
  faEnvelope,
  faMugHot,
  faComputerMouse,
  faDatabase,
];

const regularIcons = [faClone];

const brandIcons = [
  faFigma,
  faCss3Alt,
  faHtml5,
  faSass,
  faSquareJs,
  faGitAlt,
  faVuejs,
  faNodeJs,
  faGithub,
  faAngular,
  faBootstrap,
  faAws,
  faReact,
  faLinkedin,
  faLaravel,
  faPython,
  faPhp,
];

library.add(...solidIcons, ...regularIcons, ...brandIcons);
