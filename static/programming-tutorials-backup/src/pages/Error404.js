import React from "react";
import { BackButton } from "../components/common";
import { Container } from "reactstrap";

const Error404 = () => (
  <div>
    <Container className="text-center">
      <h1>
        The page you are trying to find either does not exist yet or is in the
        works of being made. Please be patient!
      </h1>
      <BackButton />
    </Container>
  </div>
);

export { Error404 };
