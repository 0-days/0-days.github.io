<template>
    <div class=" ">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <a href="https://github.com/hallofcodes"
                class="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
                <span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">New</span> <span
                    class="text-sm font-medium">Relaunching of Hall of Codes Github Organization</span>
                <svg class="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 9 4-4-4-4" />
                </svg>
            </a>
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span
                    class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <slot name="title-colored"></slot>
                </span>
                <slot name="title"></slot>
            </h1>
            <p class="my-4 text-lg text-gray-500">
                <slot name="headline"></slot>
            </p>
            <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                <slot name="description"></slot>
            </p>
            <a href="#" class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline">
                <slot name="action"></slot>
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
        </div>
    </div>
</template>