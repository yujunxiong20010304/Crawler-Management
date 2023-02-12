import { defineStore} from 'pinia'

//defineStore( ) 方法的第一个参数：相当于为容器起一个名字。注意：这里的名字必须唯一，不能重复。
// defineStore( ) 方法的第二个参数：可以简单理解为一个配置对象，里边是对容器仓库的配置说明。当然这种说明是以对象的形式。
// state 属性： 用来存储全局的状态的，这里边定义的，就可以是为SPA里全局的状态了。
// getters属性： 用来监视或者说是计算状态的变化的，有缓存的功能。
// actions属性： 对state里数据变化的业务逻辑，需求不同，编写逻辑不同。说白了就是修改state全局状态数据的。

export const mainStore = defineStore('main',{
  state:()=>{
    return {}
  },
  getters:{},
  actions:{}
})
