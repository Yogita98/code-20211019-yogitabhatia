import { Wrapper } from './Title.styles';

type Props = {
  title: string;
};

const Title: React.FC<Props> = ({ title }) => {
  return (
    <Wrapper>
      <h4>{title}</h4>
    </Wrapper>
  );
};

export default Title;
