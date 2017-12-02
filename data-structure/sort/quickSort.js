function quickSort2(array, left, right) {
    var i = left,
        j = right;
    var x = array[left];    // 第一个坑

    while (i < j) {

        while (i < j && array[j] >= x) {
            j--;
        }

        if (i < j) {
            array[i] = array[j];
        }

        while (i < j && array[i] <= x) {
            i++;
        }

        if (i < j) {
            array[j] = array[i];
        }
    }

    // 退出时，i等于j。将x填到这个坑中
    array[i] = x;

    return i;   // 返回调整后基准数的位置
}

function quickSort(array, left, right) {
    if (left < right) {
        var baseNum = quickSort2(array, left, right);
        quickSort2(array, left, baseNum - 1);
        quickSort2(array, baseNum + 1, right);
    }
}

