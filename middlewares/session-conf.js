const store = {
  // session池
  SESSION_STORE: {},
  // 用户名字作为key，token作为value，保证一个用户登陆
  USER_STORE: {},
  get(key) {
    return this.SESSION_STORE[key]
  },
  set(key, session) {
    let ONLY_KEY = this.USER_STORE[session.username]
    if(ONLY_KEY && ONLY_KEY !== key){
      this.destroy(ONLY_KEY)
    }
    this.USER_STORE[session.username] = key
    this.SESSION_STORE[key] = session
    console.log(this.SESSION_STORE)
    console.log(this.USER_STORE)
  },
  destroy(key){
    delete this.SESSION_STORE[key]
  }
}
// 晚上零点清空session
const start = new Date(new Date(new Date().toLocaleDateString()).getTime()+24*60*60*1000-1);
setTimeout(()=>{
  setInterval(()=>{
    store.SESSION_STORE={}
    store.USER_STORE={}
  }, 1000*60*60*24)
}, start - new Date())

const SESSION_CONF = {
  key: 'user_id',
  maxAge: 1000*60*60*24,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
  store
}
module.exports = SESSION_CONF
