import React from "react";
import styled from "@emotion/styled";

const ContenedorFrase = styled.div`
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 600px;

  @media (min-width: 992px) {
    margin-top: 10rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-size: 1.5rem;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

const Quote = ({ quote }) => {
  return (
    <ContenedorFrase>
      <h1>{quote.quote} </h1>
      <p>- {quote.author} </p>
    </ContenedorFrase>
  );
};

export default Quote;
