import React, { Component } from 'react';
import Title from './Title/Title';
import {
  DirectionsCar,
  LocalCarWash,
  SupervisorAccount,
} from '@mui/icons-material';
import { StyledSection, StyledSpan, StyledDiv } from './Services.styles';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <DirectionsCar fontSize="large" />,
        title: 'Test drive our cars!',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, illum?',
      },
      {
        icon: <LocalCarWash fontSize="large" />,
        title: 'Visit anytime for a quick Car Wash',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, illum?',
      },
      {
        icon: <SupervisorAccount fontSize="large" />,
        title: '24/7 Technical Consultation available',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, illum?',
      },
    ],
  };

  render() {
    let { services } = this.state;

    const servicesList = services.map((service, index) => {
      let { icon, title, info } = service;

      return (
        <article key={index}>
          <StyledSpan>{icon}</StyledSpan>
          <h5>{title}</h5>
          <p>{info}</p>
        </article>
      );
    });

    return (
      <StyledSection>
        <Title title="Our Services" />
        <StyledDiv className="services-center">{servicesList}</StyledDiv>
      </StyledSection>
    );
  }
}
