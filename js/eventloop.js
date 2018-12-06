/*
执行栈
任务队列
事件循环

同步代码在栈中执行
异步代码会放在任务队列中  等到setTimeout设置的时间到了，
会立刻吧回调函数放入任务队列里面，等到栈中的同步代码执行完毕，会从队列头部一个一个的出去进入到栈中执行
onclick就类似setTimeout时间到了,吧回调函数放到任务队列尾部

除了setTimeout和setInterval这两个方法，
Node.js还提供了另外两个与"任务队列"有关的方法：process.nextTick和setImmediate。它们可以帮助我们加深对"任务队列"的理解。

process.nextTick方法可以在当前"执行栈"的尾部
----下一次Event Loop（主线程读取"任务队列"）之前----触发回调函数。也就是说，它指定的任务总是发生在所有异步任务之前。

process.nextTick
原因是任务队列分为 宏任务 和 microtasks，而Promise中的then方法的函数会被推入 microtasks 队列，
而setTimeout的任务会被推入 宏任务 队列。在每一次事件循环中，macrotask 只会提取一个执行，而 microtask 会一直提取，直到 microtasks 队列清空。


那么也就是说如果我的某个 microtask 任务又推入了一个任务进入 microtasks 队列，那么在主线程完成该任务之后，仍然会继续运行 microtasks 任务直到任务队列耗尽。

而事件循环每次只会入栈一个 宏任务 ，主线程执行完该任务后又会先检查 microtasks 队列并完成里面的所有任务后再执行 宏任务
*/
