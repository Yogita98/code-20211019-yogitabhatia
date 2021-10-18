import styled from 'styled-components';
import defaultImg from '../../images/bcgHeroPic.jpg'

export const StyledHeroBackground = styled.div`
  min-height: calc(100vh - 66px);
  background: url(${defaultImg}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
