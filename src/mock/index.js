import Mock from 'mockjs'

const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}
Mock.setup({
  timeout: '200-600'
})
Mock.mock(/\/user\/login/, 'post', (config) => {
  const { userName } = JSON.parse(config.body).loginForm
  const token = tokens[userName]
  if (!token) {
    return {
      code: 60204,
      data: config.body,
      message: 'Account or password is incorrect!'
    }
  }
  else {
    return {
      code: 200,
      data: token
    }
  }
})
export default Mock