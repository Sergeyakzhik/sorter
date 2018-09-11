/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(a) {
    let count = 0;
    let i = 0;

    for(i = 0; i < a.length; i++) {
        if(a[a[a[i] - 1] - 1] == i + 1) {
            count++;
        }
    }

    return Math.floor(count / 3);
};
