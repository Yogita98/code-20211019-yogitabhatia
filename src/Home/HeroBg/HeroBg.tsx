import { StyledHeroBackground } from './HeroBg.styles';

type Props = {
  children: React.ReactChild;
};

const HeroBackground: React.FC<Props> = ({ children }) => {
  return <StyledHeroBackground>{children}</StyledHeroBackground>;
};

export default HeroBackground;
