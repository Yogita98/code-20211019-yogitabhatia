import styled from 'styled-components';

export const StyledSection = styled.section`
margin-top: 0;
  background: #f1f1ec;
  text-align: center;
  h6 {
    letter-spacing: 3px;
    text-transform: capitalize;
  }
  p {
    width: 80%;
    margin: 0 auto;
  }
`;

export const StyledSpan = styled.span`
  display: inline-block;
  color: #af9a7d;
  font-size: 2rem;
`;
export const StyledDiv = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 50px;
`;
