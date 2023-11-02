// -------------------------Portadas------------------
import karku from "./Assets/Imagesprojects/karku.png";
import nabijash from "./Assets/Imagesprojects/nabijash.png";
import TimeApp from "./Assets/Imagesprojects/time-app.png";
import videogame from "./Assets/Imagesprojects/individualP.png";
import Drone from "./Assets/Imagesprojects/droner.png";
import Store from "./Assets/Imagesprojects/store.png";
import Nails from "./Assets/Imagesprojects/nailsturn.png";
import AdvancePortada from "./Assets/Imagesprojects/ecomerce.png";
import proceso from "./Assets/Imagesprojects/proceso.png";
import tecno2 from "./Assets/Imagesprojects/tecno2.png";
// -------------------------Portadas------------------



const DBProyect = [
  {
    title: "Karku",
    shortDescription:
      "Plataforma E-Comerce para productos de cosmetica natural complementada con Landingpage.",
    longDescription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aperiam, blanditiis minus consectetur nihil sit, cupiditate magnam ducimus placeat eius voluptatem voluptas officia ad ratione corporis mollitia ullam quaerat ipsam!",
    PortadaProject: karku,
    MediaProject: [],
    videoProject: "",
    tecnologies: ["•ReactJs", "•CSS", "•NodeJs", "•MongoDB"],
    deploy: true,
    linkGitHub: "",
    linkDeploy: "https://karku-cosmetics.vercel.app/",
  },
  {
    title: "Advance_detailer",
    shortDescription:
      "Desarrollo de LandingPage complementada con E-comerce. Dirigida a rubro de detailing de vehiculos.",
    PortadaProject: AdvancePortada,
    MediaProject: [
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1697634902/portfolio/advance/wjh1hndl9utczdll3yfh.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1697634900/portfolio/advance/mqlzqitq7voc7c6r8b8r.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1697634899/portfolio/advance/am7qrtgqp7mjhidrlzw3.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1697634891/portfolio/advance/qqjihsams84cx39g0733.png",
    ],
    // videoProject: advanceVideo,
    videoProject:
      "https://res.cloudinary.com/dbu2biawj/video/upload/v1697636201/portfolio/advance/bddljmo0wner2mtciq68.mp4",

    longDescription:
      " E-Comerce con LandingPage realizado para el rubro automotriz especificamente en la estetica, aportando informacion al usuario a cerca de trabajos realizados, venta de productos y compra de los mismos utilizando mercado Pago.",
    tecnologies: [
      "•NextJS",
      "•CSS",
      "•Typescript",
      "•NodeJs",
      "•MongoDB",
      "•Mercado Pago",
    ],
    deploy: false,
    linkGitHub: "https://github.com/ignacio-nicoletti/Advance_detailer",
    linkDeploy: "",
  },
  {
    title: "NABIJASH",
    shortDescription:
      "Plataforma desarrollada en el Bootcamp SoyHenry para evalucion final y grupal.",
    longDescription:
      " Proyecto evaluativo grupal realizado en la carrera de programación, teniendo como objetivo la construccion de una pagina E-comerce, usando metodología Scrum, MongoDB y Typescript con nodeJs.   ",
    PortadaProject: nabijash,
    MediaProject: [],
    videoProject:
      "https://res.cloudinary.com/dbu2biawj/video/upload/v1697636635/portfolio/nabijash/dxmuv60bxuyob6y368tq.mp4",
    tecnologies: [
      "•NodeJs",
      "•ExpressJs",
      "•MongoDB",
      "•ReactJs",
      "•Redux",
      "•Typescript",
    ],
    deploy: true,
    linkGitHub: "",
    linkDeploy: "https://nabijash.vercel.app/",
  },
  {
    title: "VideoGames SPA",
    shortDescription:
      "Proyecto creado en SoyHenry como evalacion individual de los conocimientos aprendidos.",
    longDescription:
      "Proyecto evaluativo individual en la que se ponía a prueba lo aprendido en la carrera de programacion, realizando un CRUD con nodeJs y postgreSQL para luego ser defendido oralmente ante profesionales.",
    PortadaProject: videogame,
    MediaProject: [
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1697635008/portfolio/pi/e8awsqlnqoqwchobzjtm.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1697635010/portfolio/pi/ypsdem2fjr3jccoipjgn.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1697635009/portfolio/pi/uunijkpsr5o61lxstgfp.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1697635007/portfolio/pi/brgjyac5ok38untlpjf2.png",
    ],
    videoProject:
      "https://res.cloudinary.com/dbu2biawj/video/upload/v1697634026/portfolio/lqnzcc4l2van5gnwg3f5.mp4",
    tecnologies: ["•ReactJs", "•Redux", "•NodeJs", "•Sequelize", "•PostgreSQL"],
    deploy: false,
    linkGitHub: "https://github.com/ignacio-nicoletti/proyecto_individual",
    linkDeploy: "",
  },
  {
    title: "Juego de cartas",
    shortDescription:
      "Juego de cartas por turnos creado con sockets para jugar online.",
    longDescription:
      "Juego creado para continuar con el aprendizaje de socketIo basado en repartija de cartas, turnos y apuesta de ganadas, comenzando 1 carta hasta 7 por jugador.",
    PortadaProject: proceso,
    MediaProject: [
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1697635116/portfolio/berenjena/gi609xkyjk95bgec7h96.png",
    ],

    videoProject: "",
    tecnologies: ["•NextJs", "•JavaScript", "•CSS", "•Socket.io"],
    deploy: false,
    linkGitHub: "https://github.com/ignacio-nicoletti/Ta-Te-Ti-con-react-",
    linkDeploy: "",
  },
  {
    title: "Ta - Te - Ti",
    shortDescription:
      "El famoso y tradicional juego de cruces y circulos desarrollado con ReactJs.",
    longDescription:
      "Juego creado para la práctica de libreria socketIo, basado en turnos y lograr completar un 3 en linea antes que el rival lo consiga.",
    PortadaProject: proceso,
    MediaProject: [],
    videoProject: "",
    tecnologies: ["•ReactJs", "•JavaScript", "•CSS", "•Socket.io"],
    deploy: false,
    linkGitHub: "https://github.com/ignacio-nicoletti/Ta-Te-Ti-con-react-",
    linkDeploy: "",
  },
  {
    title: "Time-APP",
    shortDescription:
      "Aplicación de consumo de API y renderizado del tiempo con ReactJs.",
    longDescription:
      "Proyecto realizado como estudio, para práctica de consumo de API y mapeo de la información obtenida, en ella se puede buscar una lugar en específico y saber el clima de la semana. ",
    PortadaProject: TimeApp,
    MediaProject: [
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1697637691/portfolio/weatherapp/c9enunroeowma61jdysv.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1697637690/portfolio/weatherapp/bxnb8lay3yxlj7fzy3a0.png",
    ],
    videoProject: "",
    tecnologies: ["•ReactJs", "•JavaScript", "•CSS", "HTML"],
    deploy: false,
    linkGitHub: "https://github.com/ignacio-nicoletti/TimeApp",
    linkDeploy: "",
  },
  {
    title: "Portfolio-Droner",
    shortDescription:
      "Portfolio realizado para un Droner y utilizado para su publicidad",
    longDescription:
      "Portfolio diseñado para una persona especializada en el manejo de drones, aportando videos de sus proyectos y una descripcion de si.",
    PortadaProject: Drone,
    MediaProject: [],
    videoProject: "",
    tecnologies: ["•ReactJs", "•CSS", "•TypeScript", "•EmailJs"],
    deploy: false,
    linkGitHub: "https://github.com/ignacio-nicoletti/Drone-",
    linkDeploy: "",
  },
  {
    title: "Store",
    shortDescription: "Aprendiendo NextJs creando una store con formato SPA.",
    longDescription:
      "Aplicación desarrollada para interiorizarme en el uso del Framework NextJs, en ella se puede visualizar productos de venta, poder agregarlos a un carrito o en su defecto eliminarlos del carrito y saber el total a pagar.",
    PortadaProject: Store,
    MediaProject: [],
    videoProject: "",
    tecnologies: ["•NextJS", "•CSS", "•JavaScript", "HTML"],
    deploy: false,
    linkGitHub: "https://github.com/ignacio-nicoletti/storeAPP-nextJS",
    linkDeploy: "",
  },
  {
    title: "App de turnos",
    shortDescription:
      "Desarrollo de una app para reservar turno, marcando dÍa y horario.",
    longDescription:
      "Aplicación desarrollada para comercio de estética, en el cual dispone la posibilidad de marcar el servicio, fecha y horario, esta envía un email al admin para luego confirmar el turno.",
    PortadaProject: Nails,
    MediaProject: [],
    videoProject: "",
    tecnologies: ["•NextJS", "•CSS", "•JavaScript", "•Emailjs"],
    deploy: false,
    linkGitHub: "https://github.com/ignacio-nicoletti/nailsPage",
    linkDeploy: "",
  },
  {
    title: "Proyecto final tecnología II",
    shortDescription:
      "Proyecto grupal desarrollado con Processing y TuioTracker.",
    longDescription:
      "Se realizó un proyecto grupal utilizando Processing y Tuio, programa que mediante un patrón trackea su posición entre ciertos parámetros. El juego consiste en derrotar una hydra de 3 cabezas, cubriendo/esquivando sus ataques y disparando flechas.",
    PortadaProject: tecno2,
    MediaProject: [],
    videoProject: "https://res.cloudinary.com/dbu2biawj/video/upload/v1697640815/portfolio/tecno2/cbh9psaj0v11bobqanwi.mp4",
    tecnologies: ["•Processing", "•Java", "•Tuio", "•POO"],
    deploy: false,
    linkGitHub: "https://github.com/ignacio-nicoletti/tecnologia-2FBA",
    linkDeploy: "",
  },
];

export default DBProyect;
