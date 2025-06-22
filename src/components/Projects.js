import React, { useState } from 'react';
import biblioImage from '../images/biblio.jpg';

const projects = [
    {
        title: "Analyse des ventes",
        imageUrl: biblioImage,
        technologies: ['Python', 'Pandas', 'Jupyter'],
        description: "Dashboard interactif d’analyse des données de ventes avec visualisations dynamiques.",
    },
    {
        title: "Dashboard interactif",
        imageUrl: "https://via.placeholder.com/400x200",
        technologies: ['React', 'API REST', 'Docker'],
        description: "Application web moderne pour le suivi en temps réel des indicateurs clés.",
    },
    {
        title: "Modèle prédictif",
        imageUrl: "https://via.placeholder.com/400x200",
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
                            onClick={() => toggleZoom(index)}
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
