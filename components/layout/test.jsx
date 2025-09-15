import React from "react";

const test = () => {
  return (
    <div>
      <head>
        <meta charset="utf-8" />
        <link
          crossorigin=""
          href="https://fonts.gstatic.com/"
          rel="preconnect"
        />
        <link
          as="style"
          href="https://fonts.googleapis.com/css2?display=swap&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&amp;family=Public+Sans%3Awght%40400%3B500%3B700%3B900"
          onload="this.rel='stylesheet'"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <title>PollPulse</title>
        <link href="data:image/x-icon;base64," rel="icon" type="image/x-icon" />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
      </head>
      <body
        class="bg-slate-50 text-slate-800"
        style='font-family: "Public Sans", "Noto Sans", sans-serif;'
      >
        <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
          <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
              <div class="flex h-16 items-center justify-between">
                <div class="flex items-center gap-8">
                  <a class="flex items-center gap-2 text-xl font-bold" href="#">
                    <svg
                      class="h-6 w-6 text-[var(--primary-color)]"
                      fill="none"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>PollPulse</span>
                  </a>
                  <nav class="hidden md:flex items-center gap-6">
                    <a
                      class="text-sm font-medium text-slate-600 hover:text-[var(--primary-color)]"
                      href="#"
                    >
                      Home
                    </a>
                    <a
                      class="text-sm font-medium text-slate-600 hover:text-[var(--primary-color)]"
                      href="#"
                    >
                      Politics
                    </a>
                    <a
                      class="text-sm font-medium text-slate-600 hover:text-[var(--primary-color)]"
                      href="#"
                    >
                      Sports
                    </a>
                    <a
                      class="text-sm font-medium text-slate-600 hover:text-[var(--primary-color)]"
                      href="#"
                    >
                      Entertainment
                    </a>
                    <a
                      class="text-sm font-medium text-slate-600 hover:text-[var(--primary-color)]"
                      href="#"
                    >
                      Events
                    </a>
                  </nav>
                </div>
                <div class="flex items-center gap-4">
                  <button class="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100">
                    <span class="material-symbols-outlined">search</span>
                  </button>
                  <button class="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md bg-[var(--primary-color)] px-4 text-sm font-bold text-white shadow-md hover:bg-opacity-90">
                    <span class="truncate">Log In</span>
                  </button>
                </div>
              </div>
            </div>
          </header>
          <main class="flex-grow">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div class="text-center mb-12">
                <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                  Vote on the Issues That Matter
                </h1>
                <p class="mt-3 max-w-md mx-auto text-lg text-slate-500 sm:text-xl md:mt-5 md:max-w-3xl">
                  Join the conversation and make your voice heard. Explore
                  trending polls and discover what the world thinks.
                </p>
              </div>
              <section class="mb-16">
                <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-6">
                  Trending Polls
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div class="group flex cursor-pointer flex-col gap-3 overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <div class="relative">
                      <div
                        class="h-48 w-full bg-cover bg-center"
                        style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuADp8kBscyT7-SLPgbeYfF9kLQmv4GFrJDmdBSBvOzf1YbtEU9FJaYeuz039DLxMKgs8khj1nHwo1FmxXm1G0qwp_MC_YEsmX0UveSP7uhpRiu61Eb9a3WDLTo3v_HOYYzCKMxWtGJUwpMK81cK3apPx_QMBAGc7juoHmWKQ7WyLFXxqxTy4zTI-loH__u79qYgbP7sZ-fEDwWxd7x_McbZNKJBlhxcnd4rC5XqDRkEidEheVJJs55XVkYQfQCFOFb2FtvKTMwIsFVj");'
                      ></div>
                      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div class="absolute bottom-0 left-0 p-4">
                        <span class="inline-block bg-[var(--primary-color)] px-2 py-1 text-xs font-semibold uppercase text-white rounded-md">
                          Politics
                        </span>
                      </div>
                    </div>
                    <div class="p-4">
                      <h3 class="text-lg font-semibold leading-tight text-slate-800 group-hover:text-[var(--primary-color)]">
                        Presidential Election Poll
                      </h3>
                      <p class="mt-1 text-sm text-slate-500">
                        Vote for your preferred candidate
                      </p>
                      <div class="mt-4 h-2 w-full rounded-full bg-slate-200">
                        <div
                          class="h-2 rounded-full bg-[var(--primary-color)]"
                          style="width: 65%"
                        ></div>
                      </div>
                      <p class="mt-1 text-xs text-slate-400">65% Voted</p>
                    </div>
                  </div>
                  <div class="group flex cursor-pointer flex-col gap-3 overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <div class="relative">
                      <div
                        class="h-48 w-full bg-cover bg-center"
                        style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2tXgPtAEIb8sfsrT9Wvhoe0bN6CuSma06G2FRZvdlak_Fk-OggW8Iw_AuGJejIJLrc5NymrL_fW_LAf5e9VC2TUzNjuZ6vOwvC_fK0r6-kFrUM2phoY4VUvQjVeR0SGT1iNLnzcDLq2eFk3PxSCAVyJcCiRgfNJ9zDILcvXVdgF8ouATDBOrHhF1Wj35zlw3C1Nq5L1XUAZp9f_tbUbdknEeO3DhLK228ufaH4spGWMNcgd-c3g2UqWfyzlmse7FSYpmWbFfkMnT2");'
                      ></div>
                      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div class="absolute bottom-0 left-0 p-4">
                        <span class="inline-block bg-green-500 px-2 py-1 text-xs font-semibold uppercase text-white rounded-md">
                          Sports
                        </span>
                      </div>
                    </div>
                    <div class="p-4">
                      <h3 class="text-lg font-semibold leading-tight text-slate-800 group-hover:text-[var(--primary-color)]">
                        Championship Game Poll
                      </h3>
                      <p class="mt-1 text-sm text-slate-500">
                        Predict the winner of the game
                      </p>
                      <div class="mt-4 h-2 w-full rounded-full bg-slate-200">
                        <div
                          class="h-2 rounded-full bg-green-500"
                          style="width: 82%"
                        ></div>
                      </div>
                      <p class="mt-1 text-xs text-slate-400">82% Voted</p>
                    </div>
                  </div>
                  <div class="group flex cursor-pointer flex-col gap-3 overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <div class="relative">
                      <div
                        class="h-48 w-full bg-cover bg-center"
                        style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrdnYT4HFteNQ3dUdHJK4Ochu7EO-T98eVwMf0H1k21FqI3JRW-qPsJ8Tv28WMvMf2D09nMUIpiYBbwMd0OxI2Jp-q_QHJC7vT3LRYgabVwD4JxdP1boG9FAaR-K66Y9u5WrrYFwS_XBWFyJbaP2Z2Tyq_1GRIJ_5Pc4LImG-SQoSKeygGZcwY6rFzc9wgnYwFX1EHdg3sTiP4yiijryWd9XgkmQL1DhZ9zNHkorBl2DO2almCI5ZiDKTkLBX7lUaM14F7wn6rFFyP");'
                      ></div>
                      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div class="absolute bottom-0 left-0 p-4">
                        <span class="inline-block bg-pink-500 px-2 py-1 text-xs font-semibold uppercase text-white rounded-md">
                          Entertainment
                        </span>
                      </div>
                    </div>
                    <div class="p-4">
                      <h3 class="text-lg font-semibold leading-tight text-slate-800 group-hover:text-[var(--primary-color)]">
                        Awards Show Poll
                      </h3>
                      <p class="mt-1 text-sm text-slate-500">
                        Choose your favorite performance
                      </p>
                      <div class="mt-4 h-2 w-full rounded-full bg-slate-200">
                        <div
                          class="h-2 rounded-full bg-pink-500"
                          style="width: 47%"
                        ></div>
                      </div>
                      <p class="mt-1 text-xs text-slate-400">47% Voted</p>
                    </div>
                  </div>
                  <div class="group flex cursor-pointer flex-col gap-3 overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <div class="relative">
                      <div
                        class="h-48 w-full bg-cover bg-center"
                        style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDn4387NKLLooQmnRDy_GvR5ikbHq1g_vNxz9GRfG9IvesKLIJzvtopbJ5FQ8ITKMAILIi0OWqPk3sSNevy6kso9EH7dBY7ak6K0IDbqmGlrXouIRRvVfpdNSam5YE3bIOYPoiU9xhdXx6V5L7s8ASjBVFcL5N0cPpmjUu1E3OwG01o4hE5drSjBbWivutDUMYn5l8_WAY9c7LsdExuf09jnCoul63wFg25tBO3uxkuCQmfBoNdchAgRn3P_L3hYxk-SQr8bms6wQYz");'
                      ></div>
                      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div class="absolute bottom-0 left-0 p-4">
                        <span class="inline-block bg-purple-500 px-2 py-1 text-xs font-semibold uppercase text-white rounded-md">
                          Events
                        </span>
                      </div>
                    </div>
                    <div class="p-4">
                      <h3 class="text-lg font-semibold leading-tight text-slate-800 group-hover:text-[var(--primary-color)]">
                        Local Event Poll
                      </h3>
                      <p class="mt-1 text-sm text-slate-500">
                        Rate the event's success
                      </p>
                      <div class="mt-4 h-2 w-full rounded-full bg-slate-200">
                        <div
                          class="h-2 rounded-full bg-purple-500"
                          style="width: 91%"
                        ></div>
                      </div>
                      <p class="mt-1 text-xs text-slate-400">91% Voted</p>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-6">
                  Active Polls
                </h2>
                <div class="border-b border-slate-200">
                  <nav aria-label="Tabs" class="-mb-px flex space-x-8">
                    <a
                      class="border-[var(--primary-color)] text-[var(--primary-color)] whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                      href="#"
                    >
                      Politics
                    </a>
                    <a
                      class="border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                      href="#"
                    >
                      Sports
                    </a>
                    <a
                      class="border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                      href="#"
                    >
                      Entertainment
                    </a>
                    <a
                      class="border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                      href="#"
                    >
                      Events
                    </a>
                  </nav>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-8">
                  <div class="group flex cursor-pointer flex-col gap-3 overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <div
                      class="h-40 w-full bg-cover bg-center"
                      style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDw4aBS1_M_cBD4AZrgLn8-Sh5bZgozGU3ltylvWqBsO3n1DGHjxlw92iJxnx64phSStvqfHpzHX4AgmQJ42e_Pmwy4RgfJkjtQQAA5OPSSRW5BoXQ22jKAItS7JLsoRJhaK4Jdq8itxTOHJ83F-Rhgbn7PGdfbM1I8ul_RXzU-9FyuuDVfZ6I2_-bovy5zXFOTR0hI10VCqdIt-fleP_2ZRnVSbVCpXMq2CLexJQVn-PvL-2HSJOH6llw5Z6xKdu7DMyPjUSgY9Juq");'
                    ></div>
                    <div class="p-4">
                      <h3 class="text-base font-semibold leading-tight text-slate-800 group-hover:text-[var(--primary-color)]">
                        Local Election Poll
                      </h3>
                      <p class="mt-1 text-sm text-slate-500">
                        Vote for your local representatives
                      </p>
                    </div>
                  </div>
                  <div class="group flex cursor-pointer flex-col gap-3 overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <div
                      class="h-40 w-full bg-cover bg-center"
                      style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTlq4uLB9WbltCjYwIoIFq9LrIC0ZrMSGvPW9jbKBN4wUC7b_xLZ_BQ11FA07N69oeft8V57aESFgNVSNIh32sMoECg5ofoTBeBRSaee7bpmH7bZdX3Kou2njXe-mhzc_Bs8aNnDxAySdHNSm3QlTGY1_AXMmZ4URU1U-65HN8azte8RVI7TNN34lgq_Jgn6lhBb_AQq9xHgKexx6ck8uOhURWeBSxMmDx3ctWmJUkzbGB8yFAu-77nubm7VWCEBQ-ISsX33JFVZTW");'
                    ></div>
                    <div class="p-4">
                      <h3 class="text-base font-semibold leading-tight text-slate-800 group-hover:text-[var(--primary-color)]">
                        Basketball Game Poll
                      </h3>
                      <p class="mt-1 text-sm text-slate-500">
                        Predict the outcome of the basketball game
                      </p>
                    </div>
                  </div>
                  <div class="group flex cursor-pointer flex-col gap-3 overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <div
                      class="h-40 w-full bg-cover bg-center"
                      style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwKYACNbCGe_OJ4hbvAGz8jVn3JF9_3uU-g_yvGdaBVzCNT1Gexv9xtKE0lKpx5L871Gku_g3Xt-CLe7IdBvjTWj44krxf4JqAExaTBd_OfrxZibp_wPsYnHks13Swsl7aZcgvSrcvvpOPBWTr8vBM5jQGUBrkVfXEamJJjILvkgRw1wib5QViGxJ-9m6-u1uZejq866qKdpK8ccFCYP77dP5temtxDEGmoYI2VbAzZhRo695P5zjYQaukmpCMl1wc8_HckOARMz5u");'
                    ></div>
                    <div class="p-4">
                      <h3 class="text-base font-semibold leading-tight text-slate-800 group-hover:text-[var(--primary-color)]">
                        Movie Awards Poll
                      </h3>
                      <p class="mt-1 text-sm text-slate-500">
                        Vote for your favorite movie
                      </p>
                    </div>
                  </div>
                  <div class="group flex cursor-pointer flex-col gap-3 overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <div
                      class="h-40 w-full bg-cover bg-center"
                      style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqrYFoToOPh9HoRsGPWgNFLSNI64vrqEy67Y6Hc-aQ-kZFlUIqIMAh4KAO_IzZQ8p1kc6ttp0G2vgTVgMH-AmxOZzV332P5wCpXBHiM9Pwr0cBDQyHgxMKMaYzYEg50cLNaGvb24zxkviJSjNleghOcXGhfgjgGVWjkc6Hcxv_VJmWgSuXGtwdc4eLkl4HaVi6e9dkiY3k9ToU0IaLy6F-ydCGZenLVjk6hktr8L86imxwqacM31VhbmLz7PWgHuXc2z2Hhsnfttr0");'
                    ></div>
                    <div class="p-4">
                      <h3 class="text-base font-semibold leading-tight text-slate-800 group-hover:text-[var(--primary-color)]">
                        Community Festival Poll
                      </h3>
                      <p class="mt-1 text-sm text-slate-500">
                        Rate the community festival
                      </p>
                    </div>
                  </div>
                  <div class="group flex cursor-pointer flex-col gap-3 overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <div
                      class="h-40 w-full bg-cover bg-center"
                      style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWO24vOy8k9GTeO0ZKQIiteFeoOeUFT5nLTz2IEj9b7oA0NkbB7vlXL0zIC420Q1db1-dhlDdZTVJGKGNaY-bmjFRYuen40HlwytHilm3R5vVDcxbxqqBBXNblX9mrbfakB90DsPwKZLyDBwdtokYBdwvGKGzp59ojWfMh5uOaP0cVfHOTLnmY9pX0fIKm6dOLJQP3hSs6iUYqYBIu6O5j-WG2e8PHFZxaj59XytzR4Y91lXU0s45SWVYuIx6W0LHS3rE78PL-FZ4K");'
                    ></div>
                    <div class="p-4">
                      <h3 class="text-base font-semibold leading-tight text-slate-800 group-hover:text-[var(--primary-color)]">
                        National Election Poll
                      </h3>
                      <p class="mt-1 text-sm text-slate-500">
                        Vote for the next president
                      </p>
                    </div>
                  </div>
                  <div class="group flex cursor-pointer flex-col gap-3 overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <div
                      class="h-40 w-full bg-cover bg-center"
                      style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXn-7NcTkmUoaMdvhtGlfGR2kyimekQ5WeujhZBcfpCUIAopvKuHrnXR9XzE5CsSFfCNVJGEMDfmhN5dBKvGNRl78fFuCrgGnvbYU5ujp0KQokzKEEHKCl9lADaZmpOwOqJvaSVbxeya5Ul7n_GaPaTsMt_4x4rPbhpeEPUmjGyPqTihlAlO8g7alpEc9mNJZqmJ7g6qb634NKGo9CCwMkfG8LTNB76VuHDIghUYujVYkxO3Q94ZGF1zqK50H2bryt8FJhJNGHCTtb");'
                    ></div>
                    <div class="p-4">
                      <h3 class="text-base font-semibold leading-tight text-slate-800 group-hover:text-[var(--primary-color)]">
                        Soccer Match Poll
                      </h3>
                      <p class="mt-1 text-sm text-slate-500">
                        Predict the winner of the soccer match
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
          <footer class="bg-slate-100 border-t border-slate-200">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div class="flex flex-col md:flex-row items-center justify-between">
                <div class="flex items-center gap-2 text-lg font-bold">
                  <svg
                    class="h-5 w-5 text-[var(--primary-color)]"
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span>PollPulse</span>
                </div>
                <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 md:mt-0">
                  <a
                    class="text-sm text-slate-500 hover:text-[var(--primary-color)]"
                    href="#"
                  >
                    About
                  </a>
                  <a
                    class="text-sm text-slate-500 hover:text-[var(--primary-color)]"
                    href="#"
                  >
                    Contact
                  </a>
                  <a
                    class="text-sm text-slate-500 hover:text-[var(--primary-color)]"
                    href="#"
                  >
                    Terms of Service
                  </a>
                  <a
                    class="text-sm text-slate-500 hover:text-[var(--primary-color)]"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </nav>
                <div class="flex justify-center gap-4 mt-4 md:mt-0">
                  <a
                    class="text-slate-400 hover:text-[var(--primary-color)]"
                    href="#"
                  >
                    <svg
                      fill="currentColor"
                      height="24"
                      viewBox="0 0 256 256"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
                    </svg>
                  </a>
                  <a
                    class="text-slate-400 hover:text-[var(--primary-color)]"
                    href="#"
                  >
                    <svg
                      fill="currentColor"
                      height="24"
                      viewBox="0 0 256 256"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                    </svg>
                  </a>
                  <a
                    class="text-slate-400 hover:text-[var(--primary-color)]"
                    href="#"
                  >
                    <svg
                      fill="currentColor"
                      height="24"
                      viewBox="0 0 256 256"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="mt-8 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
                <p>© 2024 PollPulse. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </div>
  );
};

export default test;
