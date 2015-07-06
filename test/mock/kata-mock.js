export function createKataJson(mockType) {

  var mocks = {};

  mocks.invalid = 'invalid';
  mocks.valid = {
    "groups": {
      "Template strings": {
        "items": []
      }
    }
  };
  mocks.item = {
    "name": sinon.match.string,
    "description": sinon.match.string,
    "path": sinon.match.string,
    "level": sinon.match.string,
    "requiresKnowledgeFrom": sinon.match.array,
    "groupName": sinon.match.string,
    "id": sinon.match.number
  };

  return mocks[mockType];
};
