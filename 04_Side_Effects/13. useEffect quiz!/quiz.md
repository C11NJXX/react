1. In what way are React components meant to be "pure functions"

我的答案：
1.same inputs same outputs
2.no side effect

正确答案：
React 组件是纯函数，因为它们在相同的输入下总是产生相同的输出，并且不会产生副作用。

2. What is a "side effect" in React? What are some examples?

我的答案：
things that can't be handled by react
fetch data, set localStorage 

正确答案：
副作用是指在组件渲染过程中无法直接处理的操作，例如数据获取、设置 localStorage、订阅或手动更改 DOM 等。

3. What is NOT a "side effect" in React? Examples?

我的答案：
state

正确答案：
状态更新和计算衍生状态不是副作用，因为它们是 React 的核心功能，直接在渲染过程中处理。

4. When does React run your useEffect function? When does it NOT run
   the effect function?
   
我的答案：
first run
when dependencies changed it will run useEffect

正确答案：
React 在组件首次渲染后和依赖项数组中的任何值发生变化时运行 useEffect 函数。如果依赖项数组为空，则只在组件首次渲染后运行一次。

5. How would you explain what the "dependecies array" is?

我的答案：

正确答案：
依赖项数组是 useEffect 钩子中的第二个参数。它告诉 React 仅在数组中的依赖项发生变化时才运行 effect。如果数组为空，effect 只会在组件挂载和卸载时运行一次。