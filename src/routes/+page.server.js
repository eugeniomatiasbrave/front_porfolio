
import { fail } from "@sveltejs/kit";

const API_URL = process.env.VITE_API_URL;
console.log('API_URL:', API_URL); // Log para depuración

export const actions = {
    submitForm: async ({ request }) => { 
            const formData = await request.formData();
            const name = formData.get('name');
            const email = formData.get('email');
            const menssage = formData.get('menssage');

            // Validación básica
            if (!name) {
                return fail(400, { name, missing: true });
            }
            if (!email) {
                return fail(400, { email, missing: true });
            }
            if (!menssage) {
                return fail(400, { menssage, missing: true });
            }

            const body = {
                name: name,
                email: email,
                menssage: menssage,
            };

            // Envío de los datos a la API
            const res = await fetch(`${API_URL}/api/contacts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            
            const resBody = await res.json();
            console.log('Respuesta de la API:', resBody); // Log para depuración


            // Retorno en caso de éxito
            return { 
                success: true,
                menssage: "Mensaje enviado correctamente",
                data: resBody,
            };
        }
};