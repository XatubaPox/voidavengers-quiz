import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://discord.gg/qS5P2bqHGb">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1a523cb6-7366-4f8d-a46c-7c944da1854b/d8n9x2g-4420b2ea-ed1c-40f6-8064-d6021763e0f9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMWE1MjNjYjYtNzM2Ni00ZjhkLWE0NmMtN2M5NDRkYTE4NTRiXC9kOG45eDJnLTQ0MjBiMmVhLWVkMWMtNDBmNi04MDY0LWQ2MDIxNzYzZTBmOS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.VEIRwUcilpgtZ7lkQAcRDeVvHrNsgRnulZZegyDxNTA" alt="Discord Void Avengers" />
      </a>
      <p>
        <a href="https://discord.gg/qS5P2bqHGb">
          <span>Entre no nosso discord</span>
        </a>
        {' '}
        seja
        {' '}
        e venha festejar com os discípulos de Nulgath
      </p>
    </FooterWrapper>
  );
}
