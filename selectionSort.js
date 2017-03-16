/**
 * @author: yanghuanzhou
 * @description:
 * @Date: 17/3/16 17:03
 */

var arr = [1, 4, 3, 6, 9, 7, 5, 8, 2, 0];

function selectionSort() {
    var minIndex = 0;
    var temp = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

selectionSort();