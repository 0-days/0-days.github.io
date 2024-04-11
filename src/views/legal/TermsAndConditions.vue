<script setup>
import Footer from '../../components/Footer.vue'
import Nav from '../../components/Nav.vue'
</script>

<template>
    <Nav />

    <main class="mt-16 bg-white dark:bg-gray-900">

        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <h1
                class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Our Terms &<span class="text-blue-600 dark:text-blue-500">Conditions.</span></h1>

            <p
                class="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">
                By accessing and using this website, you agree to be bound by these terms and conditions. This website is
                provided on an "as is" and "as available" basis. We do not guarantee the accuracy, completeness, or
                reliability of any information or content on this website. </p>
            <p class="text-gray-500 dark:text-gray-400">You agree to use this website at your own risk. We reserve the right
                to modify or discontinue any aspect of this website at any time without prior notice. Your continued use of
                this website constitutes acceptance of any such changes. We are not liable for any damages or losses
                resulting from your use of this website.</p>

        </div>
    </main>

    <Footer />
</template>