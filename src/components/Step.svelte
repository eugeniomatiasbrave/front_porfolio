<script>
    export let step;
</script>

<a
    href={step.href}
    target="_blank"
    class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-teal-400 text-center cursor-pointer group hover:border-teal-700 duration-200">
    <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">
        {step.name}
    </h3>
    <p class="text-slate-400 text-sm sm:text-base md:text-lg">
        {step.description}
    </p>
    <div class="text-slate-300 mb-2 text-sm sm:text-base md:text-lg">
        <p class="font-medium">Tecnologías:</p>
        <ul class="flex flex-wrap gap-2 justify-center">
            {#each step.technologies as technology}
            <li class="bg-yellow-600 text-yellow-100 px-2 py-1 rounded-md text-sm">{technology}</li>
            {/each}
        </ul>
    </div>
    <slot />
    <div class="flex justify-between gap-4 items-end">
        <button
            on:click={() => window.open(step.github, '_blank', 'noopener,noreferrer')}
            class="px-4 py-2 bg-teal-900 text-teal-200 hover:bg-teal-700 hover:text-white rounded-md text-sm sm:text-base md:text-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
            Ver GitHub
        </button>
        <button
            on:click={() => window.open(step.page, '_blank', 'noopener,noreferrer')}
            class="px-4 py-2 bg-teal-900 text-teal-200 hover:bg-teal-700 hover:text-white rounded-md text-sm sm:text-base md:text-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
            Ver Proyecto
        </button>
    </div>
</a>