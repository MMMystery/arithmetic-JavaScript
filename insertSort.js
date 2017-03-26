/**
 * Created by hayzroyanghuanzhou on 2017/3/26.
 */
var arr = [1, 4, 3, 6, 9, 7, 5, 8, 2, 0];

function insertSort(arr) {
    for (var i = 1; i < arr.length; i++)//第0位独自作为有序数列，从第1位开始向后遍历
    {
        if (arr[i] < arr[i - 1])//0~i-1位为有序，若第i位小于i-1位，继续寻位并插入，否则认为0~i位也是有序的，忽略此次循环，相当于continue
        {
            var temp = arr[i];//保存第i位的值
            var k = i - 1;
            for (var j = k; j >= 0 && temp < arr[j]; j--)//从第i-1位向前遍历并移位，直至找到小于第i位值停止
            {
                arr[j + 1] = arr[j];
                k--;
            }
            arr[k + 1] = temp;//插入第i位的值
        }
    }
    return arr;
}

insertSort(arr);