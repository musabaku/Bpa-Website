import React from 'react';
import './Contact.css';
import {
  RiHome2Fill,
  RiBuilding2Fill,
  RiMoneyEuroCircleFill,
  RiHandHeartFill,
  RiYoutubeFill,
  RiFacebookFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
} from 'react-icons/ri';


const Contact = () => {
  const contactData = [
    {
      icon: <RiYoutubeFill />,
      title: 'Youtube',
      link: 'https://www.youtube.com/channel/UCS6Nnhau3lGqoGIlcPf_EhA/', // Add the YouTube URL here
    },
    {
      icon: <RiFacebookFill />,
      title: 'Facebook',
      link: 'https://www.facebook.com/bigpropertyagency/', // Add the Facebook URL here
    },
    {
      icon: <RiLinkedinBoxFill />,
      title: 'Linkedin',
      link: 'https://www.linkedin.com/company/bigpropertyagency', // Add the LinkedIn URL here
    },
    {
      icon: <RiInstagramFill />,
      title: 'Instagram',
      link: 'https://www.instagram.com/bigpropertyagency/?hl=tr', // Add the Instagram URL here
    },
  ];
  const branchData = [
    {
      icon: <RiHome2Fill />,
      title: 'Main Office',
      description: (
        <div>
          <p>
            Ataköy D-100 Güney Yanyolu Nef Ataköy 22 B blok Kat:14
            Ataköy İstanbul
          </p>
          <br></br>

          <p>+90 532 255 23 65</p>
        </div>
      ),
    },
    {
      icon: <RiBuilding2Fill />,
      title: 'Sales Office',
      description: (
        <div>
          <p>
            Ataköy D-100 Güney Yanyolu Nef Ataköy 22 B blok Kat:14
            Ataköy İstanbul
          </p>
          <br></br>

          <p>+90 532 255 23 65</p>
        </div>
      ),
    },
    {
      icon: <RiMoneyEuroCircleFill />,
      title: 'Maslak Sales Office',
      description: (
        <div>
          <p>
            Ataköy D-100 Güney Yanyolu Nef Ataköy 22 B blok Kat:14
            Ataköy İstanbul
          </p>
          <br></br>
          <p>+90 532 255 23 65</p>
        </div>
      ),
    },
    {
      icon: <RiHandHeartFill />,
      title: 'Basın Sales Office',
      description: (
        <div>
          <p>
            Ataköy D-100 Güney Yanyolu Nef Ataköy 22 B blok Kat:14
            Ataköy İstanbul
          </p>
          <br></br>

          <p>+90 532 255 23 65</p>
        </div>
      ),
    },
  ];

  return (
    <div>
       <div className="contacts">
        <h2>Our Offices</h2>
        <div className="contacts-container">
          {branchData.map((contact, index) => (
            <div className="contact-card" key={index}>
              <div className="contact-icon">{contact.icon}</div>
              <h3>{contact.title}</h3>
              <p>{contact.description}</p>
            </div>
          ))}
        </div>
        <div className="bouncing-dots">
        {branchData.map((_, index) => (
          <span className="dot" style={{ '--dot-index': index }} key={index}></span>
        ))}
      </div>
      </div>
      <div className="contacts sm">
        <h2 className="smh2">Social Media</h2>
        <div className="contacts-container">
          {contactData.map((contact, index) => (
            <div className="contact-card" key={index}>
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
             
              <div className={`sm-contact-icon ${contact.title.toLowerCase()}SvgIcon`}>
                {contact.icon}
              </div>
              </a>
              <h3 className={`sm-title ${contact.title.toLowerCase()}SvgIconT`}>{contact.title}</h3>
            </div>
          ))}
        </div>
        <div className="bouncing-dots">
          {contactData.map((_, index) => (
            <span className="dot" style={{ '--dot-index': index }} key={index}></span>
          ))}
        </div>
      </div>
    
    
  </div>
  );
};

export default Contact;
