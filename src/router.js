import { createRouter, createWebHistory } from 'vue-router';

import Homepage from './pages/Homepage.vue';
import ProjectIndex from './pages/projects/Index.vue'
import ContactUs from './pages/ContactUs.vue'
import ProjectShow from './pages/projects/Show.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage,
        },
        {
			path: '/portfolio',
			name: 'projects.index',
			component: ProjectIndex,
		},
        {
			path: '/contatti',
			name: 'contacts',
			component: ContactUs,
		},
        // {
		// 	path: '/portfolio/:slug',
		// 	name: 'projects.show',
		// 	props: true,
		// 	component: ProjectShow,
		// },
    ]
})

export { router }