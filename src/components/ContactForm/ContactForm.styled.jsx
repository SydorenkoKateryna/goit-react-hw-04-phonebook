import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 250px;
  height: 40px;
  padding: 6px 12px;
  border: 1px solid #000000;
  border-radius: 5px;
  font-size: 14px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:focus {
    border-color: rgb(60, 60, 253);
    outline: transparent;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  height: 20px;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid #000000;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  ${props => {
    if (!props.disabled) {
      return `&:hover {
    background-color: rgb(60, 60, 253);
    border-color: rgb(60, 60, 253);
  }`;
    }
  }}
`;
