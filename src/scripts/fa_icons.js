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
} from "@fortawesome/free-brands-svg-icons";

const icons = [
  faBars,
  faXmark,
  faCircleHalfStroke,
  faEye,
  faImage,
  faVideo,
  faArrowRightLong,
  faArrowLeftLong,
  faArrowDownLong,
  faClone,
  faGithub,
  faFigma,
  faCss3Alt,
  faHtml5,
  faSass,
  faSquareJs,
  faGitAlt,
  faVuejs,
  faNodeJs,
  faAngular,
  faBootstrap,
  faAws,
  faReact,
  faCircleDown,
  faEnvelope,
  faMugHot,
  faLinkedin,
  faComputerMouse,
  faLaravel,
];

for (let i = 0; i < icons.length; i++) {
  library.add(icons[i]);
}
