import React from 'react';
import '../Certifiant.css';

export default function Certifiant() {
    return (
        <section className="certifications-section">
            <h2 className="certifications-title">Certificats</h2>
            <ul className="certifications-list">
                <li>
                    <a href="/Certificats/CertificatDaccomplissement_Python_La_visualisation_des_donnees.pdf" target="_blank" rel="noopener noreferrer">
                        Certificat Python - La visualisation des données
                    </a>
                </li>
                <li>
                    <a href="/Certificats/CertificatDaccomplissement_Python_Lanalyse_de_donnees.pdf" target="_blank" rel="noopener noreferrer">
                        Certificat Python - L'analyse de données
                    </a>
                </li>
                <li>
                    <a href="/Certificats/CertificatDaccomplissement_Python_Niveau_avance.pdf" target="_blank" rel="noopener noreferrer">
                        Certificat Python - Niveau avancé
                    </a>
                </li>
                <li>
                    <a href="/Certificats/CertificatDaccomplissement_pandas_pour_la_data_science.pdf" target="_blank" rel="noopener noreferrer">
                        Certificat Pandas pour la data science
                    </a>
                </li>
                <li>
                    <a href="/Certificats/ScrumFundamentalsCertified-MamoudouNdongo-1050242.pdf" target="_blank" rel="noopener noreferrer">
                        Scrum Fundamentals Certified
                    </a>
                </li>
            </ul>
        </section>
    );
}
