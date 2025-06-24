
import biblioImage from '../images/biblio.jpg';
import acceuil from '../images/acceuil.PNG'
import pokemonImage from '../images/pokemon.jpg';
import olympicsImage from '../images/jo4.jpg';
import socialImage from '../images/twwet.PNG';

const projects = [
    {
        title: "GP Colis",
        imageUrl: acceuil,
        technologies: ['React', 'Nodejs', 'Html', 'CSS'],
        description: "GP Colis est une application web dédiée à la gestion et à la publication d'annonces de transport de colis entre le Sénégal et la France.",
        link: "https://gpoasis.netlify.app/"
    },
    {
        title: "Pokédex React",
        imageUrl: pokemonImage,
        technologies: ['React', 'JSON', 'CSS', 'JavaScript'],
        description: "Pokédex interactif développé avec React, utilisant un fichier JSON local. Il permet d'afficher la liste des Pokémon, d'ajouter, rechercher et supprimer des entrées facilement.",
        link: "https://pokemontypes.netlify.app/"
    },


    {
        title: "Jeux Olympiques – Analyse de données",
        imageUrl: olympicsImage,
        technologies: ['React', 'Flask', 'Python', 'Docker', 'MariaDB', 'Chart.js'],
        description: `Application complète d'analyse de données olympiques (1896-2022). 
        Visualisations interactives pour découvrir les tendances par sport, saison et pays.`,
        link: "https://jeuxolympics.netlify.app/",
        NB: 'En cour de finalisation',
    },
    {
        title: "SocialTweet – Réseau social intelligent",
        imageUrl: socialImage,
        technologies: ['React', 'Django', 'TypeScript', 'IA', 'BERT', 'Vite'],
        description: `Application de réseau social inspirée de Twitter, avec authentification, fil d'actualité, likes, réponses et favoris. 
        Une IA basée sur un modèle Transformer (type BERT simplifié) analyse les tweets pour identifier l’émotion dominante et proposer de nouvelles suggestions adaptées à chaque utilisateur.`,
        link: "https://socialtweet-ia.netlify.app/",
        NB: "En cours de finalisation"
    },


    {
        title: "Modèle prédictif",
        imageUrl: biblioImage,
        technologies: ['Scikit-learn', 'Python', 'Matplotlib'],
        description: "Système de prédiction basé sur apprentissage automatique et analyse statistique.",
    },
];

function Projects({ zoomedIndexes, setZoomedIndexes }) {
    const toggleZoom = (index) => {
        setZoomedIndexes((prev) =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    return (
        <section id="projects" className="projects-section">
            <h2 className="presentation-title">Projets en vedette</h2>
            <p className="projects-description">
                Voici quelques projets récents issus de ma formation en Data Science et Analyse de données.
            </p>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card-vertical">
                        <div
                            className={`project-image-container-vertical ${zoomedIndexes.includes(index) ? 'zoomed' : ''}`}
                            onClick={() => {
                                toggleZoom(index);
                                if (project.link) {
                                    window.open(project.link, "_blank");
                                }
                            }}
                            style={{ cursor: 'pointer' }}
                        >

                            <img src={project.imageUrl} alt={project.title} />
                        </div>
                        <div className="project-info-vertical">
                            <div className="project-tech">
                                {project.technologies.map((tech, i) => (
                                    <button key={i} className="project-tech-button">{tech}</button>
                                ))}
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
