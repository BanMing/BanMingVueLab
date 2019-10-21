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
