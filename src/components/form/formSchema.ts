import z from "zod";

export type FormValues = z.infer<typeof formSchema>;

// Схема валидации Zod
export const formSchema = z.object({
  name: z
    .string()
    .min(2, 'Имя должно быть не короче 2 символов')
    .max(30, 'Имя не может быть длиннее 30 символов'),
  email: z.email('Введите корректный email'),
  phone: z
    .string()
    .min(11, 'Некорректный номер телефона')
    .regex(/^\+?[1-9]\d{1,14}$/, 'Некорректный номер телефона'),
  company: z
    .string()
    .max(30, 'Название компании не может быть длиннее 30 символов').optional(),
});