import React from 'react';
import KataGroups from './kataGroups.js';

class Page extends React.Component {
  render() {
    const {groups} = this.props;
    const groupNames = Object.keys(groups);

    return <KataGroups groupNames={groupNames}/>;
  }
}

class KataGroup extends React.Component {
  render() {
    const {name,count} = this.props;
    return <li>{name} ({count})</li>
  }
}

import {katas} from '../vendor/__grouped__.js';

console.log(React.renderToString(<Page groups={katas} />)); //plus header footer
