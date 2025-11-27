import {
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
} from "@chakra-ui/react"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toaster } from "../ui/toaster.tsx";

import z from "zod";

type FormValues = z.infer<typeof formSchema>;

// Схема валидации Zod
const formSchema = z.object({
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

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  // 3. Отправка данных (Formspree)
  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch('https://formspree.io/f/xeobknnq', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toaster.create({
          title: 'Заявка отправлена!',
          description: 'Мы свяжемся с вами в ближайшее время.',
          duration: 3000,
          closable: true,
          type: "success"
        });
      } else {
        throw new Error('Ошибка отправки');
      }
    } catch (err) {
      toaster.create({
        title: `Ошибка: ${err}`,
        description: 'Не удалось отправить заявку. Попробуйте ещё раз.',
        duration: 3000,
        closable: true,
        type: "error"
      });
    }
  };
  
    return (
    <Fieldset.Root size="lg" maxW="md" invalid>
      <Stack>
        <Fieldset.Legend>Contact details</Fieldset.Legend>
        <Fieldset.HelperText>
          Заполните форму — и мы оперативно свяжемся с вами
        </Fieldset.HelperText>
      </Stack>

      <Fieldset.Content>
        <Field.Root invalid={!!errors.name} required>
          <Field.Label>Имя</Field.Label>
          <Input 
            {...register('name')}
            placeholder="Ваше имя"
            autoFocus/>
            <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.email} required>
          <Field.Label>Email</Field.Label>
          <Input 
            {...register('email')}
            type="email"
            placeholder="example@domain.com"
            name="email" />
          <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.phone} required>
          <Field.Label>Телефон</Field.Label>
          <Input 
            {...register('phone')}
            placeholder="+7 XXX XXX XX XX"
            name="phone"
            type="number"/>
          <Field.ErrorText>{errors.phone?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.company}>
          <Field.Label>Компания</Field.Label>
          <Input 
            {...register('company')}
            placeholder="Название компании"/>
          <Field.ErrorText>{errors.company?.message}</Field.ErrorText>
        </Field.Root>
      </Fieldset.Content>

      <Button 
        type="submit" 
        alignSelf="center" 
        loading={isSubmitting}
        loadingText="Отправляю..."
        onClick={handleSubmit(onSubmit)}
        disabled={!!errors.company || !!errors.phone || !!errors.email || !!errors.name}
      >
        Получить консультацию
      </Button>
    </Fieldset.Root>
  )
};

export default Form;