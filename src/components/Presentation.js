import React from 'react';

function Presentation() {
    return (
        <section id="home" className="presentation-section">
            <h1 className="presentation-title">
                <strong>Bonjour, je suis </strong>
                <span className="violet-text">Mamoudou </span><br />
                <strong>NDONGO</strong>
            </h1>
            <p className="presentation-description">
                Développeur Full Stack Junior spécialisé en Data Science.<br />
                Je conçois des applications web modernes, performantes et centrées sur les données.<br />
                Grâce à ma double compétence en développement et en analyse de données, je crée des solutions innovantes qui transforment l'information en valeur.
            </p>
            <div className="cta-button">
                <button className="white-button rounded-button">Voir mon travail</button>
            </div>
            <h2 className="presentation-title sur-moi-title" style={{ marginTop: '50px' }}>
                <strong style={{ color: '#000' }}>Sur</strong> <span className="violet-text">moi</span>
            </h2>
            <p className="sur-moi-text">
                Passionné par le développement et la data science, je combine ces deux univers pour créer des solutions innovantes.
                Je suis toujours curieux d'apprendre de nouvelles technologies et d'améliorer mes compétences.
            </p>
            <div className="info-cards">
                <div className="info-card">
                    <h3>Développement Web</h3>
                    <p>Création de sites Web et d'applications Web réactifs avec des frameworks modernes.</p>
                </div>
                <div className="info-card">
                    <h3>Data Science</h3>
                    <p>Exploration et visualisation de données, création de modèles prédictifs, analyse statistique avancée.</p>
                </div>
            </div>
            <div className="presentation-buttons">
                <button
                    className="white-button rounded-button"
                    onClick={() => {
                        const contact = document.getElementById('contact');
                        if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    Entrer en contact
                </button>

                <button
                    className="white-button rounded-button"
                    onClick={() => {
                        window.open('/CV_ndongo_dataScience.pdf', '_blank');

                    }}
                >
                    Télécharger le CV
                </button>
            </div>

        </section>
    );
}

export default Presentation;
