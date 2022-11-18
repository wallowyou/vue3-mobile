import './style.css'
import './style.less'
import './style.scss'
function component() {
  const element = document.createElement('div');
  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = `<span class="hello hello-font hello-hover">Hello Wolrd!</span>`;
  return element;
}
document.body.appendChild(component());