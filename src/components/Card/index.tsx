import { CardDiv } from "./styles";

interface CardProps {
  name: string;
  age: number;
  hobby: string;
}

const Card = ({ name, age, hobby }: CardProps) => {
  return (
    <CardDiv>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{hobby}</h3>
    </CardDiv>
  );
};

export default Card;
