
const list = [
    { id:1, name:'John Doe', email:'john.doe@gmail.com', status:'active' },
    { id:2, name:'Alice Smith', email:'alicesmith@outlook.com', status:'active' },
    { id:3, name:'Sheldon Cooper', email:'sheldon.cooper@warner.com', status:'active' },
    { id:4, name:'Leonard Hofstadter', email:'leo.hofstadter@warner.com', status:'active' },
    { id:5, name:'Howard Wolowitz', email:'howard.wolo@warner.com', status:'active' },
    { id:6, name:'Amy Farrah Fowler', email:'amy.fowler@warner.com', status:'inactive' },
    { id:7, name:'Rajesh Koothrappali', email:'raj.koothrappali@warner.com', status:'active' },
    { id:8, name:'Penny', email:'penny@warner.com', status:'inactive' },
    { id:9, name:'Abdoral Gusmao', email:'abdoralgusmao@yahho.com', status:'inactive' },
    { id:10, name:'Bernadette Rostenkowski', email:'bernadette@warner.com', status:'inactive' },

    { id:11, name:'John Doe', email:'john.doe@gmail.com', status:'active' },
    { id:12, name:'Alice Smith', email:'alicesmith@outlook.com', status:'active' },
    { id:13, name:'Sheldon Cooper', email:'sheldon.cooper@warner.com', status:'active' },
    { id:14, name:'Leonard Hofstadter', email:'leo.hofstadter@warner.com', status:'active' },
    { id:15, name:'Howard Wolowitz', email:'howard.wolo@warner.com', status:'active' },
    { id:16, name:'Amy Farrah Fowler', email:'amy.fowler@warner.com', status:'inactive' },
    { id:17, name:'Rajesh Koothrappali', email:'raj.koothrappali@warner.com', status:'active' },
    { id:18, name:'Penny', email:'penny@warner.com', status:'inactive' },
    { id:19, name:'Abdoral Gusmao', email:'abdoralgusmao@yahho.com', status:'inactive' },
    { id:20, name:'Bernadette Rostenkowski', email:'bernadette@warner.com', status:'inactive' },

    { id:21, name:'John Doe', email:'john.doe@gmail.com', status:'active' },
    { id:22, name:'Alice Smith', email:'alicesmith@outlook.com', status:'active' },
    { id:23, name:'Sheldon Cooper', email:'sheldon.cooper@warner.com', status:'active' },
    { id:24, name:'Leonard Hofstadter', email:'leo.hofstadter@warner.com', status:'active' },
    { id:25, name:'Howard Wolowitz', email:'howard.wolo@warner.com', status:'active' },
    { id:26, name:'Amy Farrah Fowler', email:'amy.fowler@warner.com', status:'inactive' },
    { id:27, name:'Rajesh Koothrappali', email:'raj.koothrappali@warner.com', status:'active' },
    { id:28, name:'Penny', email:'penny@warner.com', status:'inactive' },
    { id:29, name:'Abdoral Gusmao', email:'abdoralgusmao@yahho.com', status:'inactive' },
    { id:30, name:'Bernadette Rostenkowski', email:'bernadette@warner.com', status:'inactive' },

    { id:31, name:'John Doe', email:'john.doe@gmail.com', status:'active' },
    { id:32, name:'Alice Smith', email:'alicesmith@outlook.com', status:'active' },
    { id:33, name:'Sheldon Cooper', email:'sheldon.cooper@warner.com', status:'active' },
    { id:34, name:'Leonard Hofstadter', email:'leo.hofstadter@warner.com', status:'active' },
    { id:35, name:'Howard Wolowitz', email:'howard.wolo@warner.com', status:'active' },
    { id:36, name:'Amy Farrah Fowler', email:'amy.fowler@warner.com', status:'inactive' },
    { id:37, name:'Rajesh Koothrappali', email:'raj.koothrappali@warner.com', status:'active' },
    { id:38, name:'Penny', email:'penny@warner.com', status:'inactive' },
    { id:39, name:'Abdoral Gusmao', email:'abdoralgusmao@yahho.com', status:'inactive' },
    { id:40, name:'Bernadette Rostenkowski', email:'bernadette@warner.com', status:'inactive' },

    { id:41, name:'John Doe', email:'john.doe@gmail.com', status:'active' },
    { id:42, name:'Alice Smith', email:'alicesmith@outlook.com', status:'active' },
    { id:43, name:'Sheldon Cooper', email:'sheldon.cooper@warner.com', status:'active' },
    { id:44, name:'Leonard Hofstadter', email:'leo.hofstadter@warner.com', status:'active' },
    { id:45, name:'Howard Wolowitz', email:'howard.wolo@warner.com', status:'active' },
    { id:46, name:'Amy Farrah Fowler', email:'amy.fowler@warner.com', status:'inactive' },
    { id:47, name:'Rajesh Koothrappali', email:'raj.koothrappali@warner.com', status:'active' },
    { id:48, name:'Penny', email:'penny@warner.com', status:'inactive' },
    { id:49, name:'Abdoral Gusmao', email:'abdoralgusmao@yahho.com', status:'inactive' },
    { id:50, name:'Bernadette Rostenkowski', email:'bernadette@warner.com', status:'inactive' }
]

const contacts = {
    data: [],

    clear() {
        this.data = []
        return { contacts: this.data }
    },

    load() {
        this.data = list.concat([])
        return { contacts: this.data }
    },

    state() {
        return { contacts: this.data }
    }
}

export default contacts
