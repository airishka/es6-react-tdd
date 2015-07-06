import React from 'react';

class Page extends React.Component {
  render() {
    return (
      <ul>
        <li>Item 1</li>
      </ul>
    );
  }
}

import JSONLoader from './jsonLoader.js';
JSONLoader.loadRemoteFile(url, (err, {groups}) => {
  React.render(<Page groups={groups} />, document.getElementById('app'));
});
