# QyMsg
> 企业微信机器人，推送消息
## Installing

Using npm:

```bash
$ npm install qymsg
```

## Example

```js
 // 新建群组，添加机器人，查看机器人详情，获取key
 let isProduction = true; // 生产模式才真正地发送
 // 单个key
 let qyMsg = new QyMsg('fa14a5d5-4ad7-4104-9738-e03d0c2ea59f', isProduction);

 // 多个群
 let qyMsg = new QyMsg({
   keys: {
     group1: 'fa14a5d5-4ad7-4104-9738-e03d0c2ea59f',
     group2: 'fa14a5d5-4ad7-4104-9738-e03d0c2ea59f'
   }
 }, isProduction);
```


```js
 // 新建群组，添加机器人，查看机器人详情，获取key
 let isProduction = true; // 生产模式才真正地发送
 // 单个key
 let qyMsg = new QyMsg('fa14a5d5-4ad7-4104-9738-e03d0c2ea59f', isProduction);

 qyMsg.push('content'); // 单个机器人单条消息 
 qyMsg.push('content', ['13123456789']); // @某人，指定手机号
 qyMsg.pushToAll('content'); // @all
 qyMsg.markdown(`markdownContent`); // markdown格式


 // 多个key
 let qyMsg = new QyMsg({
   keys: {
     group1: 'fa14a5d5-4ad7-4104-9738-e03d0c2ea59f',
     group2: 'fa14a5d5-4ad7-4104-9738-e03d0c2ea59f'
   }
 }, isProduction);

 // 多个key的要指定groupName 
 qyMsg.push('group1', 'content'); // 单个机器人单条消息 
 qyMsg.push('group1', 'content', ['13123456789']); // @某人，指定手机号
 qyMsg.pushToAll('group1', 'content'); // @all
 qyMsg.markdown('group1', `markdownContent`); // markdown格式
```
