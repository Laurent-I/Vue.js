const vm = Vue.createApp({
    data(){
        return {
            firstName: 'Irakarama',
            middleName: '',
            lastName: 'Laurent',
            url: 'https://www.vuejs.org',
            raw_url: '<a href="https://www.vuejs.org" target="_blank">VueJS</a>',
            age: 17
        }
    },
    methods: {
        fullName(){
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },
        increment(){
            this.age++
        },
        updateLastName(msg,event){
			console.log(msg);
            this.lastName = event.target.value
        },
        updateMiddleName(event){
            this.middleName = event.target.value
        }
    }
    //Mount is used to insert a vue application in a document
}).mount('#app');

// setTimeout(() => {
//     vm.firstName = 'Bob'
// }, 3000)