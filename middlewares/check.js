
module.exports = {
	checkLogin:ctx=>{
		if (!ctx.session || !ctx.session.username) {
      return false
    }else{
      return true
    }
	}
}
