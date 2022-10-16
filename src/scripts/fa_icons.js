import { library } from "@fortawesome/fontawesome-svg-core";

import { 
    faBars,
    faXmark,
    faCircleHalfStroke
} from "@fortawesome/free-solid-svg-icons";

import {
    faFigma,
    faCss3Alt,
    faHtml5,
    faSass,
    faSquareJs,
    faGitAlt,
    faVuejs,
    faNodeJs

} from "@fortawesome/free-brands-svg-icons";

const icons = [    
    faBars,
    faXmark,
    faCircleHalfStroke,
    faFigma,
    faCss3Alt,
    faHtml5,
    faSass,
    faSquareJs,
    faGitAlt,
    faVuejs,
    faNodeJs
]

for(let i = 0; i < icons.length; i++){
    library.add(icons[i])
}




