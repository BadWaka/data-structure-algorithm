/**
 * Created by BadWaka on 2017/2/14.
 */

// 栈

var Stack = function (size) {

    this.stack = new Array(size);   // 新建内存空间
    this.size = size;   // 栈容量
    this.top = 0;   // 栈顶

    var that = this;

    // 判断栈是否为空
    this.isStackEmpty = function () {
        return that.top === 0;
    };

    // 判断栈是否为满
    this.isStackFull = function () {
        return that.top === that.size;
    };

    // 清空一个栈
    this.clearStack = function () {
        that.top = 0;
        // that.stack.splice(0, that.stack.length); // 不是必要的，因为即使栈里有值也没有关系，只要栈顶为0了，之前的值就再也取不到了
    };

    // 获得栈的元素个数
    this.getStackLength = function () {
        return that.top;    // 栈顶的值即可以表示栈元素的多少
    };

    // 入栈
    this.push = function (element) {
        if (that.isStackFull()) {
            console.log('栈已满，入栈失败 element = ' + element);
            return false;
        }
        that.stack[that.top] = element;
        that.top++;
        return true;
    };

    // 出栈
    this.pop = function () {
        if (that.isStackEmpty()) {
            console.log('空栈，出栈失败');
            return false;
        }
        // 这里要注意，栈顶指向的是一个空的地方，用来放元素的；所以取得时候先top--，再取值
        that.top--;
        var element = that.stack[that.top];
        console.log('出栈成功 element = ' + element);
        return element;
    };

    /**
     * 遍历栈
     *
     * @param isFromTop    是否从栈顶开始
     * @param handler   处理函数
     */
    this.traverseStack = function (isFromTop, handler) {
        var stackStr = '';
        var i;
        if (isFromTop) {
            for (i = that.top - 1; i >= 0; i--) {
                stackStr += that.stack[i] + ' ';
                if (handler) {
                    handler(that.stack[i]);
                }
            }
        } else {
            for (i = 0; i < that.top; i++) {
                stackStr += that.stack[i] + ' ';
                if (handler) {
                    handler(that.stack[i]);
                }
            }
        }
        console.log('栈内所有元素为 stackStr = ' + stackStr);
    };
};