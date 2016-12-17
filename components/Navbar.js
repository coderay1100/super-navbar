import React from 'react';
import css from 'next/css';

const styles = {
  nav: css({
    background: '#2B3A42',
    padding: '0 1.5em',
    '& ul': {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      '& li': {
        display: 'inline-block',
        '& a': {
          color: 'white',
          textTransform: 'uppercase',
          textDecoration: 'none',
          fontFamily: "'Cabin', sans-serif",
          fontSize: '13px',
          padding: '1.5em 0.75em',
          display: 'block'
        },
      }
    }
  }),
  active: css({
    background: '#354851'
  }),
  right: css({
    '& ul': {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  })
};

const Navbar = props => {
  const children = React.Children.map(props.children, child => {
    return <li className={child.props.active && styles.active}>{child}</li>
  });
  return (
    <nav className={styles.nav}>
      <ul>
        {children}
      </ul>
    </nav>
  );
};

export default Navbar;