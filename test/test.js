const assert = require('assert');
const transform = require('trend-tech-task');
const samples = require('./samples')

describe("Transform array into string", function() {
    samples.forEach((item, index) => {
        it(`Example ${index + 1}`, function() {
            assert.equal(transform(item.array), item.result);
        });
    })
});
