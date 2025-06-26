import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


function Contact() {
    const { t } = useTranslation();
    return (
        <section id="contact" className="contact-section">
            <h2 className="presentation-title">{t('contactTitle')}</h2>
            <div className="contact-items">
                <div className="contact-item">
                    <div className="icon-circle"><FaEnvelope className="icon" /></div>
                    <p className="contact-label">{t('email')}</p>
                    <p className="contact-value">mamoudoundongo78@gmail.com</p>
                </div>
                <div className="contact-item">
                    <div className="icon-circle"><FaPhoneAlt className="icon" /></div>
                    <p className="contact-label">{t('phone')}</p>
                    <p className="contact-value">07 60 67 95 44</p>
                </div>
                <div className="contact-item">
                    <div className="icon-circle"><FaMapMarkerAlt className="icon" /></div>
                    <p className="contact-label">{t('location')}</p>
                    <p className="contact-value">Lyon, Metz (France)</p>
                </div>
            </div>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/mamoudou-ndongo/" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
                </a>
                <a href="https://github.com/NdongoMamoudou" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
                </a>
            </div>
        </section>
    );
}

export default Contact;
