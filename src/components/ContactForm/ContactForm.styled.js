import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const Title = styled.h1`
  display: block;
  text-align: center;
  font-size: 40px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Div = styled.div`
  display: table-caption;
  margin-bottom: 30px;
`;

export const FormFiled = styled(Form)`
  display: table;
`;
export const Label = styled.label`
  display: flex;
  gap: 10px;
  flex-direction: column;
  font-size: 26px;
  font-weight: 700;
  color: #eae8d9;
  margin-bottom: 10px;
`;

export const Input = styled(Field)`
  outline: none;
  width: 250px;
  height: 25px;
  font-size: 20px;
  font-weight: 500;
  border-radius: 10px;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Button = styled.button`
  font-size: 20px;
  margin-top: 30px;
  width: fit-content;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
  :hover {
    background-color: aliceblue;
  }
  :active {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.8);
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  font-weight: 400;
  color: red;
  font-size: 10px;
`;
