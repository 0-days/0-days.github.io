<script setup>
import Footer from '../../components/FooterComponent.vue'
import Nav from '../../components/NavComponent.vue'
</script>

<template>
    <Nav />

    <main class="mt-16 bg-white dark:bg-gray-900">

        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <h1
                class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Our <span class="text-blue-600 dark:text-blue-500">Privacy</span> Policy.</h1>

            <p
                class="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">
                We utilize Google Analytics to gather anonymous data about website usage, such as page views and visitor
                interactions, in order to improve user experience and optimize our content. Google Analytics may collect
                information through cookies and other tracking technologies. </p>
            <p class="text-gray-500 dark:text-gray-400">However, no personally identifiable information is collected or
                stored through this process. By using this website, you consent to the collection and processing of data by
                Google Analytics for the purposes described above. If you wish to opt out of Google Analytics tracking, you
                can do so by adjusting your browser settings or installing the Google Analytics Opt-out Browser Add-on
                provided by Google. We are committed to maintaining the privacy and security of our users' information and
                will not share or sell any collected data to third parties.</p>

        </div>
    </main>

    <Footer />
</template>