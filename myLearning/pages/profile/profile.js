// pages/profile/profile.js
Page({
  // 授权登录
  login(){
    // 获取临时登录凭证code
    wx.login({
      success: ({code}) => {
        if(code){
          
        }else{

        }
      },
    })
  }
})