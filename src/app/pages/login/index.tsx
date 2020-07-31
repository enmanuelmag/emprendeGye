import React from 'react';

import Page from './page';

export default function Index() {
  const [email, setEmail] = React.useState('-');

  const updateEmail = (event) => {
    console.log('Seteo');
    setEmail(event.target.value);
  };

  const login = (event) => {
    event.preventDefault();
    console.log(email);
  };

  const func = { login, updateEmail };

  return <Page func={func} />;
}
