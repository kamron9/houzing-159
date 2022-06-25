import React,{forwardRef} from "react";
import { Container,Icon, SearchInput } from "./style";

const Input = forwardRef((
    {
      width,
      height,
      mt,
      mb,
      mr,
      ml,
      placeholder,
      onChange,
      pl,
      defaultValue,
      name,
      type,
      children
    }
  ,ref)=>{


  return (
    <Container
      width={width}
      height={height}
      mt={mt}
      mb={mb}
      mr={mr}
      ml={ml}
    >
      <Icon>{children}</Icon>
      <SearchInput 
      placeholder={placeholder} 
      onChange={onChange}
      pl={pl}
      defaultValue={defaultValue}
      name={name}
      type="text"
      ref={ref}
      />
     
    </Container>
  );
})
export default Input;

