import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import css from 'next/css';
import Navbar from '../components/Navbar';

import 'glamor/reset';

css.global('*', { boxSizing: 'border-box' });

class Index extends Component {
  render() {
    return (
      <div>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" />
        </Head>

        <Navbar>
          <Link active={true} href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">contact us</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Sign in</Link>
          <Link href="#">Register</Link>
        </Navbar>
      </div>
    );
  }
}

export default Index;