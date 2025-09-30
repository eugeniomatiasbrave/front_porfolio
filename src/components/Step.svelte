<script>
    export let step;
</script>

<div class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-teal-400 text-center group hover:border-teal-700 duration-200 h-full">
    
    <!-- Contenedor flexible para título y descripción -->
    <div class="flex-1 flex flex-col justify-start gap-3 min-h-[180px]">
        <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">
            {step.name}
        </h3> 
        <p class="text-slate-400 text-sm sm:text-base md:text-lg flex-1">
            {step.description}
        </p>
    </div>
    
    <!-- Contenido fijo en la parte inferior -->
    <div class="flex flex-col gap-3">
        <!-- Tecnologías -->
        <div class="text-slate-300 text-sm sm:text-base md:text-lg min-h-[100px] flex flex-col justify-start">
            <p class="font-medium text-2xl mb-4">Tecnologías y Deploy</p>
            <ul class="flex flex-wrap gap-2 justify-center">
                {#each step.technologies as technology}
                    <li class="bg-teal-700 text-teal-100 px-2 py-1 rounded-md text-sm">{technology}</li>
                {/each}
            </ul>
        </div>

        <!-- Deployment -->
        <div class="text-slate-300 text-md sm:text-base md:text-lg min-h-[60px] flex flex-col justify-start">
            <ul class="flex flex-wrap gap-2 justify-center">
                {#each step.deployment as deploy}
                    <li class="bg-yellow-600 text-yellow-100 px-2 py-1 rounded-md text-sm">{deploy}</li>
                {/each}
            </ul>
        </div>

        <!-- codigo GitHub -->
        <div class="text-slate-300 text-sm sm:text-base md:text-lg min-h-[60px] flex flex-col justify-start">
            <ul class="flex flex-wrap gap-2 justify-center">
                {#if step.github.juntos}
                    <li>
                        <button
                            on:click={() => window.open(step.github.juntos, '_blank', 'noopener,noreferrer')}
                            class="border border-teal-900 text-teal-200 hover:border-teal-600 hover:text-teal-100 px-3 py-2 rounded-md text-sm underline hover:no-underline transition-all duration-300 bg-transparent"
                        >
                            Ir a GitHub ver código ...
                        </button>
                    </li>
                {/if}
                {#if step.github.front}
                    <li>
                        <button
                            on:click={() => window.open(step.github.front, '_blank', 'noopener,noreferrer')}
                            class="border border-teal-900 text-teal-200 hover:border-teal-600 hover:text-teal-100 px-3 py-2 rounded-md text-sm underline hover:no-underline transition-all duration-300 bg-transparent"
                        >
                           Ir a GitHub Front ...
                        </button>
                    </li>
                {/if}
                {#if step.github.back}
                    <li>
                        <button
                            on:click={() => window.open(step.github.back, '_blank', 'noopener,noreferrer')}
                            class="border border-teal-900 text-teal-200 hover:border-teal-600 hover:text-teal-100 px-3 py-2 rounded-md text-sm underline hover:no-underline transition-all duration-300 bg-transparent"
                        >
                            Ir a GitHub Back ...
                        </button>
                    </li>
                {/if}
            </ul>
        </div>

        <slot />
        
        <!-- Ver Proyecto Button -->
        <div class="mt-1">
            <button
                on:click={() => window.open(step.page, '_blank', 'noopener,noreferrer')}
                class="blueShadow px-10 py-4 bg-teal-900 text-teal-300 hover:bg-teal-700 hover:text-white rounded-md text-base sm:text-lg md:text-xl transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
                Ver Proyecto
            </button>
        </div>
    </div>
</div>