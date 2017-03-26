/**
 * @author: yanghuanzhou
 * @description:
 * @Date: 17/3/16 16:10
 */
var arr = [1, 4, 3, 6, 9, 7, 5, 8, 2, 0];


function bubbleSort() {
    var temp;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

bubbleSort();