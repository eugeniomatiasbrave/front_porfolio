<script>
    export let y;

    export let tabs = [
        { name: "Inicio", link: "#home" },
        { name: "Acerca de mí", link: "#about" },
        { name: "Proyectos", link: "#projects" },
        { name: "Contacto", link: "#contact" },
    ];
</script>

<header 
class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
        (y > 0
            ? "py-6 bg-gradient-to-r from-teal-900 via-teal-900 to-slate-900 backdrop-blur-sm shadow-lg border-teal-900"
            : "py-6 bg-transparent border-teal-700")}
>
    <h1 class="font-medium text-lg sm:text-xl">
        <b class="font-bold poppins text-teal-400">Eugenio M.</b> <span class="text-gray-200">Brave</span>
    </h1>
    <nav class="sm:flex items-center gap-6 hidden">
        {#each tabs as tab}
            <a
                href={tab.link}
                class="text-gray-300 hover:text-teal-400 duration-200 text-sm sm:text-base"
            >
                {tab.name}
            </a>
        {/each}
    </nav>
    <div class="flex items-center gap-4">
        <!-- GitHub Icon -->
        <a
            href="https://github.com/eugeniomatiasbrave"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-300 hover:text-teal-400 duration-200"
            aria-label="GitHub Profile"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-6 h-6"
            >
                <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.263.793-.587 0-.287-.012-1.243-.018-2.253-3.338.725-4.042-1.613-4.042-1.613-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.082-.729.082-.729 1.204.087 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.997.107-.775.418-1.305.762-1.605-2.665-.305-5.467-1.333-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.623-5.48 5.92.43.37.814 1.102.814 2.222 0 1.606-.015 2.902-.015 3.293 0 .325.192.705.798.586C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"
                />
            </svg>
        </a>
        <!-- LinkedIn Icon -->
        <a
            href="https://www.linkedin.com/in/eugeniobrave/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-300 hover:text-teal-400 duration-200"
            aria-label="LinkedIn Profile"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-6 h-6"
            >
                <path
                    d="M22.23 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.729V1.729C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.432a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM20.452 20.452h-3.56v-5.604c0-1.337-.027-3.06-1.865-3.06-1.865 0-2.15 1.456-2.15 2.96v5.704h-3.56V9h3.42v1.56h.05c.477-.9 1.637-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.292z"
                />
            </svg>
        </a>
    </div>
</header>