import profilePic1 from '../../public/images/pexels-andrea-piacquadio-762020.jpg';
import profilePic2 from '../../public/images/pexels-daniel-xavier-1239288.jpg'
import profilePic3 from '../../public/images/pexels-italo-melo-2379004.jpg'

const profiles = [
  {
    id:1,
    name: "Helena",
    img: profilePic1,
    titel: "Front-end Developer",
    skills: [
      "Javascript",
      "React",
      "Tailwind",
    ]
  },
  {
    id:2,
    name: "Sofie",
    img:  profilePic2 ,
    titel: "Back-end Developer",
    skills: [
      "Php",
      "Laravel",
      "MySql",
    ]
  },
  {
    id:3,
    name: "John",
    img:  profilePic3 ,
    titel: "Full-stack Developer",
    skills: [
      "Node",
      "React",
      "Sass",
    ]
  },
]

// console.log(profiles)

export default profiles;