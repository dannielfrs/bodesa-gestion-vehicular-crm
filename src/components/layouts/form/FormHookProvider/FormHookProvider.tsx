import { FormProvider, UseFormReturn } from 'react-hook-form';
import { ReactNode } from 'react';

interface FormHookProviderProps {
  methods: UseFormReturn;
  method?: string;
  onSubmit: (...args: any[]) => any; // Define el tipo del evento de envío según tus necesidades
  className?: string;
  children: ReactNode;
}

const FormHookProvider: React.FC<FormHookProviderProps> = ({ methods, method = 'post', onSubmit, className = '', children }) => {
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        method={method}
        className={className}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default FormHookProvider;
