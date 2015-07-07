import React from 'react';
import KataGroups from './katagroups.js';
import Page from './component/page.js';
import {katas as rawKataData} from '../vendor/__grouped__.js';

let kataGroups = KataGroups.fromRawKataData(rawKataData.groups);
React.render(<Page kataGroups={kataGroups}/>, document.getElementById('app'));
