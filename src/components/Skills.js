import React from 'react';

const skillsData = {
    Tous: [
        'Python', 'Django', 'Flask',
        'React', 'Vue.js', 'HTML', 'CSS', 'JavaScript',
        'Git', 'Docker', 'Jupyter', 'Postman',
    ],
    Frontend: ['React', 'Vue.js', 'HTML', 'CSS', 'JavaScript'],
    Backend: ['Python', 'Django', 'Flask'],
    Outils: ['Git', 'Docker', 'Jupyter', 'Postman'],
};

function Skills({ filter, setFilter }) {
    const skillsToShow = filter === 'Tous' ? skillsData.Tous : skillsData[filter];

    return (
        <section id="skills" className="skills-section">
            <h2 className="presentation-title">Mes compétences</h2>
            <div className="skills-filters">
                {['Tous', 'Frontend', 'Backend', 'Outils'].map((cat) => (
                    <button
                        key={cat}
                        className={`filter-button rounded-button ${filter === cat ? 'active' : ''}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
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
