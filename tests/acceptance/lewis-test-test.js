import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | lewis test', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /lewis-test', async function(assert) {
    await visit('/lewis-test');

    assert.equal(currentURL(), '/lewis-test');
  });
});
