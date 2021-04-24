// 栈（Stack）——只用 pop 和 push 完成增删的“数组”

// 初始状态， 空
const stack = [];
//  入栈过程
stack.push(1);
stack.push(2);
stack.push(3);

// 出栈过程，栈不为空时才执行
while(stack.length) {
    // 单纯访问栈顶元素（不出栈）
    const top = stack[stack.length - 1];
    console.log('现在出栈的是', top)  
    // 将栈顶元素出栈
    stack.pop();
}

// 栈空
stack // []