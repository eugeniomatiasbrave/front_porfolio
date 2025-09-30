<script >
    import Step from "./Step.svelte";
	export let form;
	console.log(form);

    let steps = [
        {
            name:"Ecommerce Toys",
            description:"Aplicación web desarrollada con Node.js, Express y Handlebars para la gestión y visualización de productos de una tienda de juguetes. Incluye paginación, diseño responsivo y una interfaz moderna que facilita la experiencia de compra del usuario.",
            technologies:["JavaScript","Handlebars", "Node.js", "Express.js", "MongoDB"],
            deployment:["Vercel"],
            github:{
                juntos:"https://github.com/eugeniomatiasbrave/EcommerceToys-coderhouse"
            },
            page:"https://ecommerce-toys-coderhouse.vercel.app",
        },
        {
            name:"Landing Blanqueria",
            description:"Desarrollo de una landing page para una blanquería, utilizando SvelteKit para una experiencia de usuario fluida y API REST en Node.js. La página destaca por su diseño atractivo y funcionalidad optimizada para captar clientes.",
            technologies: ["JavaScript","SvelteKit","MySQL","Node.js","Express.js"],
            deployment: ["Vercel", "Railway"],
            github: {
                front:"https://github.com/eugeniomatiasbrave/front_blanqueria",
                back:"https://github.com/eugeniomatiasbrave/back_blanqueria"
            },
            page:"https://brave-blanqueria.vercel.app/",
        },
        {
            name:"Porfolio Personal",
            description:"Desarrollo de un porfolio personal utilizando SvelteKit para mostrar proyectos y habilidades.Diseño y responsivo. Uso de Mailing SendGrid en Backpara contacto.",
            technologies: ["JavaScript","SvelteKit","Node.js","Express.js"],
            deployment: ["Vercel","Railway"],
            github: {
                front:"https://github.com/eugeniomatiasbrave/front_porfolio",
                back:"https://github.com/eugeniomatiasbrave/back_porfolio"
            },
            page:"https://brave-porfolio.vercel.app/",   
        },
    ];

</script>
<div id="home"></div>

<main class="flex flex-col flex-1 p-4">
   <!--section 1-->
<section  class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-16 sm:py-24 mb-12">
    <!-- Columna izquierda: Contenido -->
    <div class="flex flex-col justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
        <h2 class="font-bold text-4xl sm:text-6xl md:text-6xl leading-tight">
            EUGENIO MATÍAS BRAVE
            <br />
            <span class="poppins text-2xl sm:text-4xl text-teal-600">Full Stack Developer</span>
        </h2>
        <p class="text-gray-400 text-base  sm:text-lg md:text-xl">
            Diseño y desarrollo aplicaciones web modernas y escalables, aportando tanto en la programación como en la estrategia de cada proyecto.
        </p>
        <a
        href="#projects"
        class="blueShadow mt-6 mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-8 py-4 group rounded-full bg-teal-900 text-teal-300 hover:bg-teal-700 transition-colors duration-200"
    >
        <div class="absolute top-0 right-full w-full h-full bg-leal-600 opacity-20 group-hover:translate-x-full z-0 duration-200">
        </div>
        <h4 class="relative z-9">Explorar Proyectos &rarr;</h4>
    </a>
    </div>

    <!-- Columna derecha: Imagen -->
    <div class="flex justify-center items-center">
        <img
            src="/perfil.png"
            alt="Imagen de perfil de Eugenio Matias Brave"
            class="w-75 max-w-md lg:max-w-lg rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
        />
    </div>
</section>

<div id="about" class="border-t border-gray-700 opacity-50 my-8"></div>

   <!--section 2-->
<section  class=" flex flex-col pt-10 sm:pt-16 sm:pb-12 gap-8 text-center justify-end h-full">
    <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Acerca de mí...
    </h3>
    <p class="text-center w-2/3 sm:text-lg md:text-xl text-teal-500 mx-auto">
        Aquí encontrarás más información sobre mí, lo que hago y mis habilidades actuales principalmente en términos de programación, tecnología y formación académica.
    </p>
</section>

<!-- Sección Conóceme - Ancho completo y centrado -->
<section class="py-10 sm:py-14 bg-gray-800/50 p-4 rounded-lg">
    <div class="flex flex-col gap-6 md:gap-8 lg:gap-10 text-center">
        <p class="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
            Soy Desarrollador Full Stack Web con formación en SvelteKit, React.js, Node.js, Express.js, AWS, MongoDB y SQL.
            Hoy me dedico a diseñar y desarrollar aplicaciones web modernas, escalables y seguras, aportando tanto en la programación como en la estrategia de cada proyecto.
            Mi recorrido profesional combina lo técnico con la gestión: durante más de 10 años emprendí y administré empresas, lo que me brindó una visión integral de negocio.
            También trabajé en el sector farmacéutico, donde adquirí experiencia en procesos administrativos, control de stock y cumplimiento normativo, fortaleciendo mi capacidad de trabajar con precisión y responsabilidad.  
        </p>
    </div>
</section>

<!-- Skills y Formación Académica en la misma línea -->
<section class="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 sm:py-14">
    <!-- Columna izquierda: Formación Académica -->
    <div class="flex flex-col lg:justify-start text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
        <div class="flex flex-col gap-2 text-center">
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-4xl">
                Formación Académica
            </h3>
        </div>

        <div class="space-y-4">
            <div class="bg-gray-800/50 p-4 rounded-lg">
                <h4 class="text-xl font-semibold text-teal-400">Licenciatura en Negocios en Diseño y Comunicación</h4>
                <p class="text-gray-400">Universidad de Palermo • 2017</p>
                <p class="text-gray-300 mt-2">Estrategia y análisis de Negocios. Gestión de Proyectos</p>
            </div>
            
            <div class="bg-gray-800/50 p-4 rounded-lg">
                <h4 class="text-xl font-semibold text-teal-400">Full Stack Developer</h4>
                <p class="text-gray-400">CoderHouse • 2023</p>
                <p class="text-gray-300 mt-2">Desarrollador web full stack con enfoque en el desarrollo de aplicaciones modernas</p>
            </div>
        </div>
    </div>

    <!-- Columna derecha: Skills -->
    <div class="flex flex-col lg:justify-start text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
        <!-- Título -->
        <div class="flex flex-col gap-2 text-center">
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-4xl">
                Mis Skills
            </h3>
        </div>

        <!-- Habilidades principales -->
        <div class="flex flex-wrap gap-3 justify-center">
            <p class="px-4 py-2 bg-teal-900 text-teal-200 rounded-md text-sm sm:text-base md:text-lg cursor-pointer text-center">
                HTML
            </p>
            <p class="px-4 py-2 bg-teal-900 text-teal-200 rounded-md text-sm sm:text-base md:text-lg cursor-pointer text-center">
                CSS
            </p>
            <p class="px-4 py-2 bg-teal-900 text-teal-200 rounded-md text-sm sm:text-base md:text-lg cursor-pointer text-center">
                JavaScript
            </p>
            <p class="px-4 py-2 bg-teal-900 text-teal-200 rounded-md text-sm sm:text-base md:text-lg cursor-pointer text-center">
                React.js
            </p>
            <p class="px-4 py-2 bg-teal-900 text-teal-200 rounded-md text-sm sm:text-base md:text-lg cursor-pointer text-center">
                SvelteKit
            </p>
            <p class="px-4 py-2 bg-teal-900 text-teal-200 rounded-md text-sm sm:text-base md:text-lg cursor-pointer text-center">
                Node.js
            </p>
            <p class="px-4 py-2 bg-teal-900 text-teal-200 rounded-md text-sm sm:text-base md:text-lg cursor-pointer text-center">
                Express.js
            </p>
            <p class="px-4 py-2 bg-teal-900 text-teal-200 rounded-md text-sm sm:text-base md:text-lg cursor-pointer text-center">
                MongoDB
            </p>
            <p class="px-4 py-2 bg-teal-900 text-teal-200 rounded-md text-sm sm:text-base md:text-lg cursor-pointer text-center">
                MySQL
            </p>
            <p class="px-4 py-2 bg-teal-900 text-teal-200 rounded-md text-sm sm:text-base md:text-lg cursor-pointer text-center">
                Typescript
            </p>
        </div>

        <!-- Subtítulo para otras habilidades -->
        <div class="flex flex-col gap-1 text-center">
            <h4 class="font-semibold text-2xl pt-0 sm:text-2xl md:text-2xl text-gray-300">
                Otras habilidades
            </h4>
        </div>
        <!-- Otras habilidades -->
        <div class="flex flex-wrap gap-2 justify-center">
            <p class="px-4 py-2 bg-gray-700 text-gray-300 rounded-md text-sm sm:text-base md:text-lg hover:bg-gray-500 transition-colors duration-200 cursor-pointer text-center">
                Docker
            </p>
            <p class="px-4 py-2 bg-gray-700 text-gray-300 rounded-md text-sm sm:text-base md:text-lg hover:bg-gray-500 transition-colors duration-200 cursor-pointer text-center">
                Testing
            </p>
            <p class="px-4 py-2 bg-gray-700 text-gray-300 rounded-md text-sm sm:text-base md:text-lg hover:bg-gray-500 transition-colors duration-200 cursor-pointer text-center">
                Swagger
            </p>
            <p class="px-4 py-2 bg-gray-700 text-gray-300 rounded-md text-sm sm:text-base md:text-lg hover:bg-gray-500 transition-colors duration-200 cursor-pointer text-center">
                GIT
            </p>
            <p class="px-4 py-2 bg-gray-700 text-gray-300 rounded-md text-sm sm:text-base md:text-lg hover:bg-gray-500 transition-colors duration-200 cursor-pointer text-center">
                Looger
            </p>
            <p class="px-4 py-2 bg-gray-700 text-gray-300 rounded-md text-sm sm:text-base md:text-lg hover:bg-gray-500 transition-colors duration-200 cursor-pointer text-center">
                Artillery
            </p>
            <p class="px-4 py-2 bg-gray-700 text-gray-300 rounded-md text-sm sm:text-base md:text-lg hover:bg-gray-500 transition-colors duration-200 cursor-pointer text-center">
                SCRUM
            </p>
        </div>
    </div>
</section>

<!-- Botones de acción DESPUÉS de toda la información -->
<section class="py-8 text-center">
    <div class="flex flex-wrap justify-center gap-4">
        <a 
            href="#contact" 
            class="blueShadow px-6 py-3 bg-teal-900 text-teal-300 hover:bg-teal-700 hover:text-white rounded-md text-base sm:text-lg md:text-xl transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
            Contáctame &rarr;
        </a>
        <a 
            href="/CV_Eugenio_Brave.pdf" 
            target="_blank" 
            class="px-6 py-3 border border-teal-600 text-teal-300 hover:bg-yellow-600 hover:text-white rounded-md text-base sm:text-lg md:text-xl transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
            Ver CV en PDF &rarr;
        </a>
    </div>
</section>

<div id="projects" class="border-t border-gray-700 opacity-50 my-8"></div>

    <!--section 3-->
    <section  class="py-16 lg:py-20 flex flex-col gap-10">
        <div class="flex flex-col gap-8 text-center">
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Mis <span class="poppins text-teal-600"> proyectos</span>
            </h3>
            <p class="text-gray-400 text-base sm:text-lg md:text-xl">
                Aquí encontrarás una selección de proyectos personales que reflejan mi experiencia como Desarrollador
                Full Stack Junior, con un enfoque en backend. Cada proyecto incluye la descripcion y destaca el uso de tecnologías.
            </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 pt-16">
            <Step step={steps[0]}>
            </Step>
            <Step step={steps[1]}>
            </Step>
            <Step step={steps[2]}>
            </Step>
        </div>
    </section>

    <div id="contact" class="border-t border-gray-700 opacity-50 my-8"></div>

    <!--section 4-->
    <section  class="py-16 lg:py-20 flex flex-col gap-16 md:gap-20 relative">
        <div class="flex flex-col gap-8 text-center">
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Contáctame
            </h3>
            <p class="text-gray-400 text-base sm:text-lg md:text-xl">
                ¿Tienes alguna pregunta o estás buscando un desarrollador para tu equipo?
                No dudes en enviarme un mensaje. Soy capaz de aportar valor con mis habilidades.
            </p>
        </div>

        <!-- Formulario -->
        <form class="flex flex-col gap-6 max-w-3xl mx-auto w-full px-4" method="POST" action="?/submitForm">
            <!-- Campo de Nombre -->
            <div class="flex flex-col gap-2">
                <label for="name" class="text-sm sm:text-base text-gray-400">Nombre</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={form?.name ?? ''}
                    placeholder="Escribe tu nombre"
                    class="px-6 py-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-base sm:text-lg text-gray-700"
                />
            </div>
        
            <!-- Campo de Email -->
            <div class="flex flex-col gap-2">
                <label for="email" class="text-sm sm:text-base text-gray-400">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={form?.email ?? ''}
                    placeholder="Escribe tu email"
                    class="px-6 py-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-base sm:text-lg text-gray-700"
                />
            </div>
        
            <!-- Campo de Mensaje -->
            <div class="flex flex-col gap-2">
                <label for="message" class="text-sm sm:text-base text-gray-400">Mensaje</label>
                <textarea
                    type="text"
                    id="message"
                    name="message"
                    value={form?.message ?? ''}
                    placeholder="Por favor, escribe tu mensaje"
                    rows="6"
                    class="px-6 py-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-base sm:text-lg text-gray-700"
                ></textarea>
            </div>
        
            <!-- Botón de Enviar -->
            <button
                type="submit"
                class="blueShadow px-6 py-3 bg-teal-900 text-teal-300 hover:bg-teal-700 hover:text-white rounded-md text-base sm:text-lg md:text-xl transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                Enviar Mensaje
            </button>
        </form>
    </section>

    <!--section 5-->
    <section id="footer" class="py-8 text-center">
        <!-- Footer content -->
    </section>
</main>