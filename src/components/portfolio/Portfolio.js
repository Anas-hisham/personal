import { Github, Radio } from "lucide-react";
import "./Portfolio.css";
import Title from "../common/Title/Title";

import Stream from "../../assets/imgs/portfolio/Stream Buddy.png";
import eCommerce from "../../assets/imgs/portfolio/Ecommerce App.png";
import Arch from "../../assets/imgs/portfolio/Architect Portfolio.png";
import Personal from "../../assets/imgs/portfolio/Personal Portfolio.png";
import Buisness from "../../assets/imgs/portfolio/Business Landing Page.png";
import Movie from "../../assets/imgs/portfolio/Movie App.png";

const projects = [
  {
    id: 1,
    title: "Stream Buddy",
    category: "Desktop",
    description:
      "A desktop tool for stream teams to manage and export structured JSON data for live overlays in OBS and vMix. Features include real-time editing, preset management, and customizable views.",
    image: Stream,
    technologies: ["Electron", "Node.js", "Vue.js 3", "Pinia", "Tailwind CSS"],
    githubUrl: "https://github.com/Anas-hisham/Set-Up-Project-Scaffold",
  },
  {
    id: 2,
    title: "Ecommerce App",
    category: "Web",
    description:
      "A full-stack eCommerce app with product management, user authentication, cart system, Stripe checkout, and order tracking, built with MERN and Next.js.",
    image: eCommerce,
    technologies: ["MERN", "Next.js", "Google Login", "Stripe API", "Tailwind CSS"],
    liveUrl: "https://anas-hisham.github.io/Crystal-Power-Investment/",
    githubUrl: "https://github.com/Anas-hisham/Crystal-Power-Investment",
  },
  {
    id: 3,
    title: "Ecommerce Mobile App",
    category: "Mobile",
    image:
      "https://images.pexels.com/photos/5632391/pexels-photo-5632391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "A feature-rich mobile companion app for Crystal Power Investment, enabling seamless on-the-go account management, payments, and transactions.",
    technologies: ["MERN", "Expo", "Stripe API", "Tailwind CSS"],
    githubUrl: "https://github.com/Anas-hisham/Crystal_Power_Investment_Mobile",
  },
  {
    id: 4,
    title: "Architect Portfolio",
    category: "Web",
    description:
      "A sleek and immersive portfolio website for an architect, designed to showcase their work through an elegant, interactive gallery. Built with responsive design to highlight architectural projects with visual impact.",
    image: Arch,
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://mohamedkhaled-architect.vercel.app/",
  },
  {
    id: 5,
    title: "Personal Portfolio",
    category: "Web",
    description:
      "A modern personal portfolio built with React and Bootstrap, featuring smooth animations, project showcases, and responsive design. Highlights my skills, experience, and development work with a clean, interactive interface.",
    image: Personal,
    technologies: ["React", "Bootstrap", "AOS Animation"],
    liveUrl: "https://anashisham.netlify.app/",
  },
  {
    id: 6,
    title: "Movie App",
    category: "Web",
    image: Movie,
    description:
      "A full-featured movie exploration platform where users can browse trending films, read/write reviews, and manage personalized watchlists. Integrated with TMDb API for real-time movie data and recommendations.",
    technologies: ["React", "Node.js", "MongoDB", "TMDb API"],
    liveUrl: "https://anas-hisham-movie.netlify.app/",
  },
  {
    id: 7,
    title: "NFT Marketplace",
    category: "Mobile",
    description:
      "A cutting-edge mobile NFT marketplace empowering digital artists to mint, buy, and sell unique digital assets with seamless wallet integration.",
    image:
      "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React Native", "Expo", "Tailwind CSS"],
    githubUrl: "https://github.com/Anas-hisham/NFT_MarketPlace",
  },
  {
    id: 8,
    title: "Movie App",
    category: "Mobile",
    image:
      "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "A dynamic mobile application for discovering trending movies and TV shows, featuring personalized recommendations powered by the TMDb API.",
    technologies: ["React Native", "Expo", "TMDb API", "Tailwind CSS"],
    githubUrl: "https://github.com/Anas-hisham/react-native-movie-app",
  },
  {
    id: 9,
    title: "Business Landing Page",
    category: "Web",
    description:
      "A high-conversion landing page designed to showcase products and services while maximizing customer engagement and sales potential. Built with performance and user experience in mind.",
    image: Buisness,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "https://nebula-x-task.netlify.app/",
  },
];

const introduction = {
  maintitle: "Portfolio",
  maintext: "Some of My Works.",
  text: "Explore a selection of my latest web, mobile, and desktop projects — from full-stack applications with clean architecture to cross-platform solutions. Each project reflects my expertise in the MERN stack, React Native, Electron, and modern UI/UX principles, delivering scalable, responsive, and user-centered digital products.",
};

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <Title introduction={introduction} />
        <div className="row gap-3">
          {projects.map(({ id, image, title, description, category, technologies, liveUrl, githubUrl }) => (
            <div key={id} className="col-lg-6 col-md-6 cardd" data-aos="zoom-in-up" data-aos-offset="300">
              <div className="image">
                <img src={image} alt={title} />
                <div className="code">
                  {liveUrl && (
                    <div className="live">
                      <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-black">
                        <div>
                          <Radio className="me-2 icon" />
                          Live Demo
                        </div>
                      </a>
                    </div>
                  )}
                  {githubUrl && (
                    <div className="github">
                      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-black">
                        <div>
                          <Github className="me-2 icon" />
                          Code
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="project-content">
                {category && <span className={`badge ${category.toLowerCase()}`}>{category}</span>}
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="technologies">
                  {technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
