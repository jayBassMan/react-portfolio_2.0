import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Jonathan Johnson</h1>
          <PText>
            A freelance web designer and developer from Omaha, Nebraska. I
            always make websites that have unique designs and also has a good
            performance rate.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '(402)889-8906',
                path: 'tel:(402)889-8906',
              },
              {
                title: 'jonathandila680@gmail.com',
                path: 'mailto:jonathandila680@gmail.com',
              },
              {
                title: 'Dallas, Texas',
                path:
                  'https://www.google.com/maps/place/Dallas,+TX/@32.8203525,-97.0117449,10z/data=!3m1!4b1!4m5!3m4!1s0x864c19f77b45974b:0xb9ec9ba4f647678f!8m2!3d32.7757287!4d-96.7977905',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'LinkedIn',
                path:
                  'https://www.linkedin.com/in/jonathan-johnson-b7259437?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZ2LzjqVOTfOoMF6VPC7LbQ%3D%3D',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/Jonatha68167194',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/jayBassMan',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2022 - Jonathan Johnson | Designed By{'Jonathan Johnson '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://jaybassman.github.io/my-portfolio/"
            >
              web
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
