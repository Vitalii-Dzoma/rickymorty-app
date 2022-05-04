import styled from 'styled-components';

export const Img = styled.img`
  display: inline;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
`;

export const Div = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  margin-left: 10px;
  min-height: 80px;
  border-bottom: 1px solid #2a363b;
  padding: 12px 24px;
  color: #2a363b;
  background-color: rgb(63, 81, 181);
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  width: 100vw;
`;

export const Button = styled.button`
  background-color: #008cba; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
