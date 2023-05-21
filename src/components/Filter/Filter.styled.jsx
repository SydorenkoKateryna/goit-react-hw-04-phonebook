import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
