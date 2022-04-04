'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareDefault(a, b) {
    const first = String(a);
    const second = String(b);

    if (first > second) {
      return 1;
    } else if (first < second) {
      return -1;
    } else {
      return 0;
    }
  };

  [].__proto__.sort2 = function(compareFunction = compareDefault) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const first = this[i - 1];
        const second = this[i];

        if (compareFunction(first, second) > 0) {
          this[i - 1] = second;
          this[i] = first;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
