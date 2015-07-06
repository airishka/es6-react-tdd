import React from 'react';
import KataGroups from './kataGroups.js';

class Page extends React.Component {
  render() {
    const {groups} = this.props;
    const groupNames = Object.keys(groups);

    return <KataGroups groupNames={groupNames}/>;
  }
}

import {katas} from '../vendor/__grouped__.js';

const {groups} = katas;
React.render(<Page groups={groups} />, document.getElementById('app'));
