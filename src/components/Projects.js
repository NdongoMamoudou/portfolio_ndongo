import React from 'react';
import { useTranslation } from 'react-i18next';
import acceuil from '../images/acceuil.PNG';
import pokemonImage from '../images/pokemon.jpg';
import olympicsImage from '../images/jo4.jpg';
import socialImage from '../images/twwet.PNG';
import mlprojectsImage from '../images/kmeans_clusters_poissons.png';
import deepLearningImage from '../images/mnist_accuracy.png';
import tweetimage from '../sentiment-analysis.jpg/';

function Projects({ zoomedIndexes, setZoomedIndexes }) {
    const { t } = useTranslation();

    // Images associées dans l’ordre des projets
    const images = [
        acceuil,
        pokemonImage,
        olympicsImage,
        mlprojectsImage,
        socialImage,
        deepLearningImage,
        tweetimage
    ];

    // Fonction pour zoomer/dézoomer les images
    const toggleZoom = (index) => {
        setZoomedIndexes((prev) =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    // Récupération de la liste des projets depuis les fichiers de traduction
    const translatedProjects = t('projects.list', { returnObjects: true });

    return (
        <section id="projects" className="projects-section">
            <h2 className="presentation-title">{t('projects.title')}</h2>
            <p className="projects-description">{t('projects.subtitle')}</p>
            <div className="projects-grid">
                {translatedProjects.map((project, index) => (
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
                            <img src={images[index]} alt={project.title} />
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
