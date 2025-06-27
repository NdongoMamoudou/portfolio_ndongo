import React from 'react';
import { useTranslation } from 'react-i18next';

const skillsData = {
    Tous: [
        'Python', 'Django', 'Flask',
        'React', 'Vue.js', 'HTML', 'CSS', 'JavaScript',
        'Git', 'Docker', 'Jupyter', 'Postman',
    ],
    Frontend: ['React', 'Vue.js', 'HTML', 'CSS', 'JavaScript'],
    Backend: ['Python', 'Django', 'Flask', 'Node.js'],
    Outils: ['Git', 'Docker', 'Jupyter', 'Postman'],
};



function Skills({ filter, setFilter }) {
    const { t } = useTranslation();

    const categories = ['Tous', 'Frontend', 'Backend', 'Outils'];

    const skillsToShow = filter === 'Tous' ? skillsData.Tous : skillsData[filter];

    return (
        <section id="skills" className="skills-section">
            <h2 className="presentation-title">{t('skills.title')}</h2>

            <div className="skills-filters">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`filter-button ${filter === cat ? 'active' : ''}`}
                        onClick={() => setFilter(cat)}
                    >
                        {t(`skills.categories.${cat}`)}
                    </button>
                ))}
            </div>

            <div className="skills-grid">
                {skillsToShow.map((skill) => (
                    <div key={skill} className="skill-item">{skill}</div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
