import { module, test } from 'qunit';
import { setupTest } from 'to-do-app/tests/helpers';

module('Unit | Controller | todos', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:todos');
    assert.ok(controller);
  });
});
