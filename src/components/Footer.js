import React from 'react';
import '../Footer.css';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <p>{t('footer.copyright')}</p>
        </footer>
    );
}

export default Footer;
