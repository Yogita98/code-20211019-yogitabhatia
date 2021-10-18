import { Wrapper } from './Title.styles';

type Props = {
  title: string;
};

const Title: React.FC<Props> = ({ title }) => {
  return (
    <Wrapper className="section-title">
      <h4>{title}</h4>
    </Wrapper>
  );
};

export default Title;
