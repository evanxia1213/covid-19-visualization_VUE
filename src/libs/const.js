let baseUrl = 'http://localhost:5000'
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:5000'
} else {
  // API 地址，此处为本地。
  baseUrl = 'http://localhost:5000'
}

export default {
  baseUrl
}