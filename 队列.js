// 队列（Queue）——只用 push 和 shift 完成增删的“数组”

// 初始状态， 空
const queue = [];
//  入队过程
queue.push(1);
queue.push(2);
queue.push(3);

// 出队过程，队列不为空时才执行
while(queue.length) {
    // 单纯访问队头元素（不出队）
    const top = queue[0];
    console.log('现在出队的是', top)  
     // 将队头元素出队
    queue.shift();
}

// 队空
queue // []