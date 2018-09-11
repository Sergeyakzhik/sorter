'use strict';
var b;
var comp = (left, right) => left - right;
class Sorter {
    constructor() {
       b = new Array();
    }

    add(element) {
        b.push(element);
    }

    at(index) {
        return b[index];
    }

    get length() {
        return b.length;
    }

    toArray() {
        return b;
    }

    sort(indices) {
        var buf = [];

        for(var i = 0; i < indices.length; i++){
            buf[i] = b[indices[i]];
        }

        buf.sort(comp);
        indices.sort();

        for(var i = 0; i < indices.length; i++){
            b[indices[i]] = buf[i];
        }
    }

    setComparator(compareFunction) {
        comp = compareFunction;
    }

}

module.exports = Sorter;
