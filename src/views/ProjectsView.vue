<script setup>
import Footer from '../components/FooterComponent.vue'
import Nav from '../components/NavComponent.vue'
import Project from '../components/ProjectComponent.vue'
</script>

<template>
    <Nav />

    <main class="bg-white dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">

            <h1 class="flex items-center text-5xl font-extrabold dark:text-white">Open-Source<span
                    class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">Projects</span>
            </h1>
            <p class="mt-2 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">We love open-source here at Hall
                of
                Codes and here are the few examples of the open-source projects developed by our members.</p>

            <div class="mt-10 grid md:grid-cols-3 gap-8">

                <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                    Submit your project

                    <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Requirements:</h2>
                    <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>
                            Repository must be open-source
                        </li>
                        <li>
                            You own the project
                        </li>
                        <li>
                            Must not own by an organization
                        </li>
                        <li>
                            Must not be fork
                        </li>
                    </ul>

                </div>

                
                <!-- Project 1 -->
                <Project :source="source_orion" :website="website_orion" :projectPhoto="photo_orion">
                    <template #category>Social</template>
                    <template #name>Orion Chatbot</template>
                    <template #description>Meet the lightning-fast Facebook Messenger chatbot, seamlessly managing multiple
                        accounts with access to 271 commands.</template>
                </Project>

            </div>
        </div>
    </main>

    <Footer />
</template>
<script>
export default {
    components: {
        Project
    },
    data() {
        return {
            // Project 1
            photo_orion: 'https://media1.giphy.com/media/fDers1vZjjKFy/200w.gif?cid=6c09b952e92hgyhehjv0g9bc7tvk9kkqcet2rvxi8tg8f4ao&ep=v1_gifs_search&rid=200w.gif&ct=g',
            source_orion: 'https://github.com/mrepol742/project-orion',
            website_orion: 'https://mrepol742.github.io/project-orion'
        };
    }
};
</script>