import { fail } from '@sveltejs/kit'; 

const API_URL = "https://backporfolio-production.up.railway.app"; // cambiar cuando esté en producción por la ruta del backend


export const actions = {
    submitForm: async ({ request }) => { 
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        //console.log('Datos recibidos del formulario:', { name, email, message });...ok

        // Validar nombre de forma simple
        if (!name || name.trim().length === 0) {
            return fail(400, { errors: { name: 'El nombre es requerido' }, formData: { name, email, message } });
        }

        // Validar email de forma simple
        if (!email || email.trim().length === 0) {
            return fail(400, { errors: { email: 'El email es requerido' }, formData: { name, email, message } });
        }

        // Validar mensaje
        if (!message || message.trim().length === 0) {
            return fail(400, { errors: { message: 'El mensaje es requerido' }, formData: { name, email, message } });
        }
        
        const body = { name, email, message };

        //console.log('Cuerpo a enviar a la API:', body); ...ok

        try {
            // Envío de los datos a la API
            const res = await fetch(`${API_URL}/api/contacts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            const resBody = await res.json();

            // Manejar errores del servidor
            if (!res.ok) {
                console.error('Error de la API:', resBody);
                
                if (res.status === 429) {
                    return fail(429, { 
                        error: 'Has enviado demasiados mensajes. Por favor, espera antes de enviar otro.',
                        formData: { name, email, message }
                    });
                }
                
                return fail(res.status, { 
                    error: resBody.message || 'Error al enviar el mensaje',
                    formData: { name, email, message }
                });
            }

            console.log('Respuesta exitosa de la API:', resBody);

            // Retorno en caso de éxito
            return { 
                success: true,
                message: resBody.message || "Mensaje enviado correctamente",
                data: resBody,
            };
            
        } catch (error) {
            console.error('Error de conexión:', error);
            
            return fail(500, { 
                error: 'Error de conexión. Por favor, verifica tu conexión a internet e intenta nuevamente.',
                formData: { name, email, message }
            });
        }
        }
};