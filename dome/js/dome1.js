var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!'
	}
})

var app2 = new Vue({
	el: '#app-2',
	data: {
		message: '页面加载于' + new Date().toLocaleString()
	}
})

// 显隐
var app3 = new Vue({
	el: '#app-3',
	data: {
		sean: false
	}
})

// 列表
var app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [{
				text: "todo 1"
			},
			{
				text: "todo 2"
			},
			{
				text: "todo 3"
			}
		]
	}
})

// 事件处理
var app5 = new Vue({
	el: '#app-5',
	data: {
		message: 'Hello Vue.js!'
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message.split('').reverse().join('')
		}
	}
})


var app6 = new Vue({
	el: '#app-6',
	data: {
		message: 'hello vue!'
	}
})


Vue.component('todo-item', {
	// todo-item 组件现在接受一个
	// "prop"，类似于一个自定义特性。
	// 这个 prop 名为 todo。
	props: ['todo'],
	template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
	el: '#app-7',
	data: {
		groceryList: [{
				id: 0,
				text: '蔬菜'
			},
			{
				id: 1,
				text: '奶酪'
			},
			{
				id: 2,
				text: '其他'
			},
		]
	}
})

var data = {
	a: 1
}
var vm = new Vue({
	el: '#app-8',
	data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

vm.$data.a = 3

vm.$watch('a', function(newVal, oldVal) {
	console.log('newVal:' + newVal + 'oldVal' + oldVal)
})


// 直接使用v-bind:class对class重写
var vm = new Vue({
	el: '#app-9',
	data: {
		msg: 333,
		color: 'blue',
		url: 'baidu.com'
	},
	methods: {
		doSometing: function(e) {
			console.log(e)
			console.log("@@@@@@@@@@@@@")
		}
	}
})

function doSometing() {
	console.log("%%%%%%%%%%%%%%%%")
}

var vm = new Vue({
	el: '#app-10',
	data: {
		message: 'message',
		firstName: 'ban',
		lastName: 'ming'
	},
	// 计算属性会把值缓存起来
	computed: {
		reverseMessage: function() {
			return this.message.split('').reverse().join('')
		},
		computedTime: function() {
			return Date.now().toLocaleString()
		},
		// get 、set方法
		fullName: {
			get: function() {
				return this.firstName + '-' + this.lastName
			},
			set: function(newVal) {
				var names = newVal.split('-')
				this.firstName = names[0]
				this.lastName = names[1]
			}
		}
	},
	methods: {
		methodTime: function() {
			return Date.now().toLocaleString()
		}
	}
})

// 动态修改class中的值
var vm = new Vue({
	el: '#app-11',
	data: {
		isActive: true,
		hasError: true,
		// 类型对象数据
		styleObject: {
			color: 'red',
			fontSize: '30px'
		}
	},
	computed: {
		classObject: function() {
			return {
				active: this.isActive,
				error: this.hasError
			}
		}
	}
})

// 条件渲染
var vm = new Vue({
	el: '#app-12',
	data: {
		awesome: true,
		pType: 1,
		loginType: 'username'
	},
	methods: {
		changeLoginType: function() {
			this.loginType = this.loginType == 'username' ? 'email' : 'username'
		}
	}
})
