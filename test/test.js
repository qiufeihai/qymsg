const t = require('tap');
const QyMsg = require('../index');


t.test('单个key', async t => {
  let qyMsg = new QyMsg('fa14a5d5-4ad7-4104-9738-e03d0c2ea59f');
  await qyMsg.push('test');
  t.end();
})

t.test('push to all', async t => {
  let qyMsg = new QyMsg('fa14a5d5-4ad7-4104-9738-e03d0c2ea59f');
  await qyMsg.pushToAll('test');
  t.end();
})

t.test('push to someone', async t => {
  let qyMsg = new QyMsg('fa14a5d5-4ad7-4104-9738-e03d0c2ea59f');
  await qyMsg.push('test', ['13123456789']);
  t.end();
})


t.test('单个key', async t => {
  
  let qyMsg = new QyMsg({
    keys: {
      group1: 'fa14a5d5-4ad7-4104-9738-e03d0c2ea59f'
    }
  });
  await qyMsg.push('test');
  t.end();
})

t.test('push to all', async t => {
  let qyMsg = new QyMsg({
    keys: {
      group1: 'fa14a5d5-4ad7-4104-9738-e03d0c2ea59f'
    }
  });
  await qyMsg.pushToAll('test');
  t.end();
})

t.test('push to someone', async t => {
  let qyMsg = new QyMsg({
    keys: {
      group1: 'fa14a5d5-4ad7-4104-9738-e03d0c2ea59f',
    }
  });
  await qyMsg.push('test', ['13123456789']);
  t.end();
})



let marsdownContent = `
# 标题一
## 标题二
### 标题三
#### 标题四
##### 标题五
###### 标题六
**bold**
[这是一个链接](http://work.weixin.qq.com/api/doc)
\`code\`
> 引用文字
<font color="info">绿色</font>
<font color="comment">灰色</font>
<font color="warning">橙红色</font>
`

t.test('单个key', async t => {
  let qyMsg = new QyMsg('fa14a5d5-4ad7-4104-9738-e03d0c2ea59f');
  await qyMsg.markdown(marsdownContent);
  t.end();
})

t.test('单个key', async t => {
  
  let qyMsg = new QyMsg({
    keys: {
      group1: 'fa14a5d5-4ad7-4104-9738-e03d0c2ea59f'
    }
  });
  await qyMsg.markdown(marsdownContent);
  t.end();
})

