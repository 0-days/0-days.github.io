<script setup>
import Footer from '../components/Footer.vue'
import Nav from '../components/Nav.vue'
import TimelineItem from '../components/TimelineItem.vue'
import Header from '../components/Header.vue'

</script>

<template>
    <Nav />

    <main class="bg-white dark:bg-gray-900">
        <Header>
            <template #title-colored>Merging Programmers</template>
            <template #title> Beyond Conflicts.</template>
            <template #headline>We revolutionizes development by fostering cohesion among teams,
                transcending
                conflicts to drive collective innovation. Harnessing the synergy of diverse talents, we pave the way for
                seamless
                collaboration, ensuring projects thrive in an environment of unity and progress.</template>
            <template #description>Join us in revolutionizing the landscape of
                programming, where conflicts dissolve, and collaboration flourishes. Experience the synergy of innovation
                and
                unity with Hall of Codes.</template>
            <template #action>Learn more</template>
        </Header>

        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">

            <div class="mx-auto max-w-screen-xl my-auto text-center lg:py-16">
                <h1
                    class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Why Hall of Codes?</h1>
                <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                    Be part of a vibrant community where innovation thrives and collaboration is key. With access to
                    cutting-edge projects and a supportive network, you'll accelerate your growth and make a real impact
                    in the world of technology.
                </p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a href="#"
                        class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Get started
                        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>

            <div class="">
                <h2
                    class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                    <span
                        class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">History</span>
                </h2>

                <ol class="relative border-s border-gray-200 dark:border-gray-700">

                    <TimelineItem>
                        <template #date>Sometime in 2019</template>
                        <template #heading>This group has been established</template>
                        <template #description>It's former name was Android Developer
                            then after 2 more years it was changed to Google Developers</template>
                    </TimelineItem>

                    <TimelineItem>
                        <template #date>Sometime in 2021</template>
                        <template #heading>The community has been rebranded to Hall of
                            Codes</template>
                        <template #description>Till this day the group is still thriving and
                            active</template>
                    </TimelineItem>

                    <TimelineItem>
                        <template #date>November 2021</template>
                        <template #heading>Hall of Codes first Github Org</template>
                        <template #description></template>
                    </TimelineItem>

                    <TimelineItem>
                        <template #date>December 2021</template>
                        <template #heading>Hall of Codes first Facebook Page</template>
                        <template #description>As of now it has 4.5K likes and followers</template>
                    </TimelineItem>

                </ol>
            </div>
        </div>

    </main>

    <Footer />
</template>