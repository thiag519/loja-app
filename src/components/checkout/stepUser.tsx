import { CheckoutSteps } from "@/types/checkoutSteps";
import { Dispatch, SetStateAction } from "react";
import { Form, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { useCheckoutStore } from "@/store/checkoutStore";
import { 
  FormField, 
  FormLabel, 
  FormItem, 
  FormControl, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min( 2, 'Preencha seu nome')
});

type Props = {
  setStep: Dispatch<SetStateAction<CheckoutSteps>>;
}

export const StepUser = ({setStep}: Props) => {

  const {name, setName} = useCheckoutStore(state => state);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name }
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setName(values.name);
    setStep('address');
    console.log(values);
  }
  return (
    
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (  
            <FormItem>
              <FormLabel>Seu nome</FormLabel>
              <FormControl>
                <Input
                  autoFocus
                  placeholder="Qual seu nome?"
                  {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button type="submit" variant="outline">Próximo</Button>
      </div>
      </form>
    </FormProvider>
// Compare this snippet from src/components/checkout/stepFinish.tsx:
    
  )
}