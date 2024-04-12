<template>
    <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
        <img :src="profilePhoto" class="rounded-full h-40" alt="Profile Photo">
        <span
            class="mt-10 bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
            <slot name="position"></slot>
        </span>
        <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
            <slot name="name"></slot>
        </h2>
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
            <slot name="bio"></slot>
        </p>
        <a :href="website"
            class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Website
            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
        </a>
    </div>
</template>
<script>
export default {
    props: {
        profilePhoto: {
            type: String,
            default: ''
        },
        website: {
            type: String,
            default: ''
        }
    }
};
</script>