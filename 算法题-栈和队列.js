// 题目描述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
// 用一个 map 来维护左括号和右括号的对应关系
const leftToRight = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  
  /**
   * @param {string} s
   * @return {boolean}
   */
  const isValid = function(s) {
    // 结合题意，空字符串无条件判断为 true
    if (!s) {
      return true;
    }
    // 初始化 stack 数组
    const stack = [];
    // 缓存字符串长度
    const len = s.length;
    // 遍历字符串
    for (let i = 0; i < len; i++) {
      // 缓存单个字符
      const ch = s[i];
      // 判断是否是左括号，这里我为了实现加速，没有用数组的 includes 方法，直接手写判断逻辑
      if (ch === "(" || ch === "{" || ch === "[") stack.push(leftToRight[ch]);
      // 若不是左括号，则必须是和栈顶的左括号相配对的右括号
      else {
        // 若栈不为空，且栈顶的左括号没有和当前字符匹配上，那么判为无效
        if (!stack.length || stack.pop() !== ch) {
          return false;
        }
      }
    }
    // 若所有的括号都能配对成功，那么最后栈应该是空的
    return !stack.length;
  }; 



const dailyTemperatures = function(T) {
    const len = T.length // 缓存数组的长度 
    const stack = [] // 初始化一个栈   
    const res = (new Array(len)).fill(0) //  初始化结果数组，注意数组定长，占位为0
    for(let i=0;i<len;i++) {
      // 若栈不为0，且存在打破递减趋势的温度值
      while(stack.length && T[i] > T[stack[stack.length-1]]) {
        // 将栈顶温度值对应的索引出栈
        const top = stack.pop()  
        // 计算 当前栈顶温度值与第一个高于它的温度值 的索引差值
        res[top] = i - top 
      }
      // 注意栈里存的不是温度值，而是索引值，这是为了后面方便计算
      stack.push(i)
    }
    // 返回结果数组
    return res 
};

// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))


const MinStack = function() {
    this.stack = [];
    // 定义辅助栈
    this.stack2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    // 若入栈的值小于当前最小值，则推入辅助栈栈顶
    if(this.stack2.length == 0 || this.stack2[this.stack2.length-1] >= x){
        this.stack2.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // 若出栈的值和当前最小值相等，那么辅助栈也要对栈顶元素进行出栈，确保最小值的有效性
    if(this.stack.pop() == this.stack2[this.stack2.length-1]){
        this.stack2.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // 辅助栈的栈顶，存的就是目标中的最小值
    return this.stack2[this.stack2.length-1];
};

// let minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin())
// minStack.pop();
// console.log(minStack.top());
// console.log(minStack.getMin()); 



// 
const MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
}

MyQueue.prototype.push = function(val) {
    this.stack1.push(val);
}

MyQueue.prototype.pop = function() {
    if(this.stack2.length === 0) {
        while(this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }

    }
    return this.stack2.pop();
}
MyQueue.prototype.peek = function() {
    if(this.stack2.length === 0) {
        while(this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }

    }
    return this.stack2[this.stack2.length - 1];
}

MyQueue.prototype.empty = function() {
    return !this.stack1.length && !this.stack2.length 
}

const maxSlidingWindow = function (nums, k) {
    let result = [];
    let quene = [];
    for(let i=0; i<nums.length; i++) {
        while (quene.length && nums[quene[quene.length-1]] < nums[i]) {
            quene.pop();
        }
        quene.push(i);

        while (quene[0] <= i-k) {
            quene.shift();
        }

        if(i >= k-1 ) {
            result.push(nums[quene[0]]) 
        }
    }
    return result;
 
} 

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))