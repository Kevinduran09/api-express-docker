const { z, object } = require('zod');

const activitySchema = {
    createActivity: z.object({
        code: z.string()
            .length(9, 'El código debe contener 9 caracteres')
            .regex(/^[0-9]+$/, 'El formato del código es incorrecto'),
        name: z.string()
            .min(3, 'El nombre debe contener al menos 3 caracteres')
            .max(20, 'El nombre debe contener como máximo 20 caracteres'),
        clientCed: z.string()
            .length(9, 'La cedula del cliente debe contener 9 caracteres')
            .regex(/^[0-9]+$/, 'Formato de cedula incorrecto'),
        date: z.string().refine((val) => !isNaN(new Date(val).getTime())),
        coste: z.number()
            .int('El costo debe ser un número entero')
            .min(10000, 'El costo debe ser al menos 10,000')
            .max(100000, 'El costo debe ser como máximo 100,000'),
        description: z.string()
            .min(3, 'La descripción debe contener al menos 3 caracteres')
            .max(300, 'La descripción debe contener como máximo 300 caracteres'),
    }),

    updateActivity: z.object({
        code: z.string()
            .length(9, 'El código debe contener 9 caracteres')
            .regex(/^[0-9]+$/, 'El formato del código es incorrecto'),
        name: z.string()
            .min(3, 'El nombre debe contener al menos 3 caracteres')
            .max(20, 'El nombre debe contener como máximo 20 caracteres')
            .optional(),
        date: z.string().refine((val) => !isNaN(new Date(val).getTime())).optional(),
        coste: z.number()
            .int('El costo debe ser un número entero')
            .min(10000, 'El costo debe ser al menos 10,000')
            .max(100000, 'El costo debe ser como máximo 100,000')
            .optional(),
        description: z.string()
            .min(3, 'La descripción debe contener al menos 3 caracteres')
            .max(300, 'La descripción debe contener como máximo 300 caracteres')
            .optional(),
    }),

    deleteActivity: z.object({
        code: z.string()
            .length(9, 'El codigo debe contener 9 caracteres')
            .regex(/^[0-9]+$/, 'Formato de codigo incorrecto'),
    }),

    getById: z.object({
        code: z.string()
            .length(9, 'El codigo debe contener 9 caracteres')
            .regex(/^[0-9]+$/, 'Formato de codigo incorrecto'),
    }),
};

module.exports = activitySchema;
