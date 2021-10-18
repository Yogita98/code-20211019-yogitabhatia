import { StyledHeroDiv } from './Banner.styles';

type Props = {
  children: React.ReactChild;
  title: string;
  subtitle: string;
};

const Banner: React.FC<Props> = ({ children, title, subtitle }) => {
  return (
    <StyledHeroDiv>
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </StyledHeroDiv>
  );
};

export default Banner;
