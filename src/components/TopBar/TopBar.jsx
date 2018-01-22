import * as React from 'react';
import * as styles from './TopBar.scss';

export default class TopBar extends React.Component {
  render() {
    return (
      <header className={styles.TopBar}>
        <h1 className="App-title">Welcome to Reactsfds</h1>
      </header>
    );
  }
}
