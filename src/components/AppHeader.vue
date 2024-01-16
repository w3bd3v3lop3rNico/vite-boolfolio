<script>
import { router } from '../router';

</script>
<template>
    <div class="container">
        <nav>
            <ul>
                <li>
                    <router-link :to="{ name: 'home' }">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'projects.index' }">
                        Portfolio
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'contacts' }">
                        Contact Us
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>

</template>
<style>
</style>