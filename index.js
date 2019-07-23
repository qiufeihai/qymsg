const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/json';

class QyMsg {
  constructor(options, isProduction) {
    if (typeof options == 'string') {
      let key = options
      options = { keys: { defaultGroup: key } }
    }
    this.keys = options.keys || {};
    this.onlyOneKey = Object.keys(this.keys).length == 1;
    this.keys.defaultGroup = this.keys[Object.keys(this.keys)[0]];
    this.baseURL = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=';
    this.log = options.log

    axios.interceptors.request.use(function (config) {
      if (options.log) console.log('config->', config)
      return config;
    }, function (error) {
      return Promise.reject(error);
    });
    console.log('QyMsg注册信息：', this.keys);
  }

  async push(groupName, content, users = []) {
    if (this.onlyOneKey) {
      users = content;
      content = groupName;
      groupName = 'defaultGroup';
    } else if (arguments.length == 1 || (arguments.length == 2 && Array.isArray(content))) {
      throw new Error('缺少groupName参数');
    }
    if (!this.keys[groupName]) throw new Error(`缺少${groupName}的key`);

    if (!isProduction) {
      console.log(`[qymsg] 非生产模式：`, content)
    } else {
      await axios.post(this.baseURL + this.keys[groupName], {
        msgtype: 'text',
        text: {
          content,
          mentioned_mobile_list: users
        }
      })    
    }
  }

  async pushToAll(groupName, content) {
    if (this.onlyOneKey) {
      content = groupName;
      groupName = 'defaultGroup';
    } else if (arguments.length == 1) {
      throw new Error('缺少groupName参数');
    }
    if (!this.keys[groupName]) throw new Error(`缺少${groupName}的key`);

    if (!isProduction) {
      console.log(`[qymsg] 非生产模式：`, content)
    } else {
      await axios.post(this.baseURL + this.keys[groupName], {
        msgtype: 'text',
        text: {
          content,
          mentioned_mobile_list: ['@all']
        }
      })    
    }
  }

  async markdown(groupName, content) {
    if (this.onlyOneKey) {
      content = groupName;
      groupName = 'defaultGroup';
    } else if (arguments.length == 1) {
      throw new Error('缺少groupName参数');
    }
    if (!this.keys[groupName]) throw new Error(`缺少${groupName}的key`);

    if (!isProduction) {
      console.log(`[qymsg] 非生产模式：`, content)
    } else {
      await axios.post(this.baseURL + this.keys[groupName], {
        msgtype: 'markdown',
        markdown: {
          content
        }
      })    
    }
  }
}

module.exports = QyMsg;