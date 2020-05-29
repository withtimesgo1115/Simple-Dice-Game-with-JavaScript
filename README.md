# Simple-Dice-Game-with-JavaScript
This is a simple dice game implemented by JavaScript and DOM. Honestly, I am aimed at practicing manipulating DOM by means of JS.
The game requires two players to join and the basic rules are shown below:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

## HTML Technical Summary  (English version listed in the end)
*Chinese Version*
- div 可定义文档中的分区或节（division/section）, <div> 标签可以把文档分割为独立的、不同的部分。配合id class使用更加有效。<div> 是一个块级元素。这意味着它的内容自动地开始一个新行。实际上，换行是 <div> 固有的唯一格式表现。可以对同一个 <div> 元素应用 class 或 id 属性，但是更常见的情况是只应用其中一种。这两者的主要差异是，class 用于元素组（类似的元素，或者可以理解为   某一类元素），而 id 用于标识单独的唯一的元素。
- UTF-8
HTML<head>部分常用的charset被设置为UTF-8等。 UTF-8和Unicode不同，前者是编码规则（将码位转换为字节序列的规则），类似加密解密技术，而后者则是字符集（为每一个字符分配一个独一无二的16进制数字）。另外，最早的是ASCII码，只能显示英文、数字和符号，各国开发自己语言的字符集，我国的是GB2312，为了统一各种语言，开发了Unicode，但是Unicode对于使用英文的场景来说占用无意义的资源太大，所以出现了UTF-8等（可变长编码）。
- head中加载CSS文件和字体库等库文件，但不要加载JS文件，JS文件一般放在Body里，且在最后面。浏览器加载页面是按从上到下顺序加载的。加载 JS 并执行的时候，会阻塞其他资源的加载。这是因为JS 可能会有 DOM 、样式等等操作，所以浏览器要先加载这段 JS 并执行，再加载放在它后面的 HTML、CSS。因此，加入一段    巨大的 JS 放在最上面，浏览器首先要下载并执行，这段时间里面，页面是空白的。所以要避免这种情况发生。
- i /i 用于设置button的图标。

## JavaScript Technical Summary
*Chinese Version*
- 注意全局变量的使用， 可以先声明并用于后面的函数中
- DON'T REPEAT YOURSELF 重复性代码写到一个函数里，用的时候直接调用即可
- 注意元素侦听事件时有匿名函数和非匿名函数两种，匿名函数即作为DOM形参的的函数，不可被其他域调用，因为没有名字；而非匿名函数和普通函数一样，要先声明好，之后在DOM调用时直接传入名字即可。
- DOM元素的提取可以使用document.querySelector() 或者 document.getElementByID(),后者更快，优先使用。
- DOM元素提取后可以继续对其操作，常用的方法如
  1. classlist 主要用于切换同一元素的CSS样式 方法有add\remove\toggle(有的话删除，无的话添加)
  2. style 主要用于CSS属性的重写 方法有display等
  3. addEventLisener 主要用于添加事件侦听 一般用在按钮上
  4. textContent 主要负责修改元素文本内容
