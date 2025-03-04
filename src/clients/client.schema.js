const {z} = require('zod');

const clientSchema = {
    createClient: z.object({
        name: z.string().min(3,'El nombre debe contener al menos 3 caracteres').max(20,'El nombre debe contener como máximo 20 caracteres'),
        lastname: z.string().min(3,'El apellido debe contener mas de 3 caracteres').max(40,'El apellido debe contener como máximo 40 caracteres'),
        email: z.string().email('El email debe ser un email valido'),
        cedula: z.string().length(9,'La cedula debe contener 9 caracteres').regex(/^[0-9]+$/,'Formato de cedula incorrecto'),
    }),
    updateClient: z.object({
        name: z.string().min(3, 'El nombre debe contener al menos 3 caracteres').max(20, 'El nombre debe contener como máximo 20 caracteres').optional(),
        lastname: z.string().min(3, 'El apellido debe contener mas de 3 caracteres').max(40, 'El apellido debe contener como máximo 40 caracteres').optional(),
        email: z.string().email('El email debe ser un email valido').optional(),
        cedula: z.string().length(9, 'La cedula debe contener 9 caracteres').regex(/^[0-9]+$/, 'Formato de cedula incorrecto'),
    }),
    deleteClient:z.object({
        cedula: z.string().length(9,'La cedula debe contener 9 caracteres').regex(/^[0-9]+$/,'Formato de cedula incorrecto')
    }),
    getById: z.object({
        cedula: z.string().length(9,'La cedula debe contener 9 caracteres').regex(/^[0-9]+$/,'Formato de cedula incorrecto')
    }) 
}

module.exports = clientSchema;


