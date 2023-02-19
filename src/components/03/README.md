# 03 CSS Variable
- 生效：filter: `blur(${this.blurValue}px)`
- 不生效：filter: blur(this.blurValue + 'px')
  - 原因：it calls the global window.blur() function, passing it a size in pixels, which is just ignores.

## 问题
- :root ？