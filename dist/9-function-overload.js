"use strict";
function makeData(mOrT, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, d, mOrT);
    }
    else {
        return new Date(mOrT);
    }
}
