'use strict';

import {createKataJson} from '../mock/kata-mock.js';

describe('katas json', function() {
  it('has a valid structure', function(){
    var katasJson = {
      groups: {
        "Template strings": {
          items: []
        }
      }
    };
    var validKatasJson = createKataJson('valid');
    expect(katasJson).toEqual(validKatasJson);
  });
  
});
