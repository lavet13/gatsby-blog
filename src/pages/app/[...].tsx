import React, { FC } from 'react';
import { Router } from '@reach/router';
import NotFoundPage from '../404';
import type { RouteComponentProps } from '@reach/router';
import type { PageProps } from 'gatsby';

const HelloWorld: FC<RouteComponentProps> = () => {
  return <h1>Hello World!</h1>;
};

const App: FC<PageProps> = ({ params }) => {
  console.log({ params });

  return (
    <Router basepath='/app'>
      <HelloWorld path='/' />

      <NotFoundPage default />
    </Router>
  );
};

export default App;
