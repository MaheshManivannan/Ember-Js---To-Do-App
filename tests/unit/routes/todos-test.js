import { module, test } from 'qunit';
import { setupTest } from 'to-do-app/tests/helpers';

module('Unit | Route | todos', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:todos');
    assert.ok(route);
  });
});
