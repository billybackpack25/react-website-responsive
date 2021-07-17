import React from 'react';
import Button from './Button';
import './Footer.css';
import {Link} from 'react-router-dom';

const LINKS = [
    {
        title: 'About Us',
        links: [
            {to: '/sign-up', text: 'How it works'},
            {to: '/', text: 'Testimonials'},
            {to: '/', text: 'Investors'},
            {to: '/', text: 'Terms of Service'},

        ]
    },{
        title: 'Contact Us',
        links: [
            {to: '/sign-up', text: 'How it works'},
            {to: '/', text: 'Testimonials'},
            {to: '/', text: 'Investors'},
            {to: '/', text: 'Terms of Service'},

        ]
    },{
        title: 'Social Media',
        links: [
            {to: '/', text: 'Instagram'},
            {to: '/', text: 'Facebook'},
            {to: '/', text: 'YouTube'},
            {to: '/', text: 'Twitter'},

        ]
    }
]

const SOCIAL_ICONS = [
    {
        link_class: 'facebook',
        to: '/',
        target: '_blank',
        'aria-label': 'Facebook',
        icon_class: 'fa-facebook-f'
    },{
        link_class: 'instagram',
        to: '/',
        target: '_blank',
        'aria-label': 'Instagram',
        icon_class: 'fa-instagram'
    },{
        link_class: 'twitter',
        to: '/',
        target: '_blank',
        'aria-label': 'Twitter',
        icon_class: 'fa-twitter'
    },{
        link_class: 'linkedin',
        to: '/',
        target: '_blank',
        'aria-label': 'LinkedIn',
        icon_class: 'fa-linkedin'
    }
]

const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to recieve our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at anytime
                </p>
                <div className="input-areas">
                    <form>
                        <input 
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            className="footer-input"
                        />
                        <Button 
                            buttonStyle='btn--outline'
                        >Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                {
                    LINKS.slice(0, 2).map((item, key) => (
                        <div className="footer-link-wrapper" key={`links_${key}`}>
                            <div className="footer-link-items" >
                                <h2>{item.title}</h2>
                                {item.links.map((link, link_key) => (
                                    <Link to={link.to} key={`link_${link_key}`}>{link.text}</Link>
                                ))}
                            </div>
                        </div>
                    ))
                }
                {
                    LINKS.slice(2, 3).map((item, key) => (
                        <div className="footer-link-wrapper" key={`links_${key}`}>
                            <div className="footer-link-items" >
                                <h2>{item.title}</h2>
                                {item.links.map((link, link_key) => (
                                    <Link to={link.to} key={`link_${link_key}`}>{link.text}</Link>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>

            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo" to='/'>
                            TRVL <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights">TRVL ©️ 2021</small>
                    <div className="social-icons">
                        {
                            SOCIAL_ICONS.map((link, key) => (
                                <Link 
                                    className={`social-icon-link ${link.link_class}`}
                                    to={link.to}
                                    target={link.target}
                                    aria-label={link["aria-label"]}
                                    key={`social_link_${key}`}
                                >
                                    <i className={`fab ${link.icon_class}`}></i>
                                </Link>
                            ))    
                        }
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Footer;