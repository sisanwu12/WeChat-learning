// pages/cate/cate.js
Page({
  // 小程序页面中所需要使用的数据均来自data对象
  data:{
    school:"安信工",
    obj:{
      name:"tom",
      age:"18"
    },
    num: 1,
    user:{},
    value: "123",
    isChecked: flase
  },

  // 更新 num
  updataNUM() {
    // 更新数据并驱动视图更新
    this.setData({
      num:this.data.num+1
    })
  },

  // 更新 user
  updateUSER(){
    this.setData({
      // 如果给对象新增属性，可以将 key 写成数据路径的方式
      "user.name":"tom",
      "user.age": 19
    })

    // ES6 提供的展开运算符更改数据
    // const user = {
    //   ...this.data.user,
    //   name:"jerry",
    //   age:"8"
    // }

    // object.assign() 将多个对象合并为一个对象
    const user = Object.assign(this.data.user,{name:"jerry"},{age:"8"})

    this.setData({
      user:user
    })
  },

  // 删除 user属性
  deleteUSER(){
    delete this.data.user.age
    this.setData({
      user:this.data.user
    })

    // rest 剩余参数
    const {age,...rest} = this.data.user

    this.setData({
      user:rest
    })
  }
})