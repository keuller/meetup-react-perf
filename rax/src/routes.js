import SimpleForm from 'components/SimpleForm'
import TablePerf from 'components/TablePerf'
import About from 'components/About'
import Resume from 'components/Resume'

const routes = [
    { path: '/', component: SimpleForm },
    { path: '/table', component: TablePerf },
    { path: '/about', component: About },
    { path: '/resume/:name', component: Resume }
]

export default routes
