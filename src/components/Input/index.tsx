import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
  type?: string;
}

const Input = ({ label, placeholder, ...rest }: InputProps) => {
  return (
    <InputContainer>
      {label && <label>{label}</label>}
      <input placeholder={placeholder} {...rest} />
    </InputContainer>
  );
};

export default Input;
