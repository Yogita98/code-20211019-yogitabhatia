import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
  padding-top: 4rem;
  margin: auto;
  width: 60%;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 10px;
  color: white;
`;

export const StyledCircularProgressDiv = styled.div`
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;