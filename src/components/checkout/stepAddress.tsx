import { CheckoutSteps } from "@/types/checkoutSteps";
import { Dispatch, SetStateAction } from "react";
import { Form, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { useCheckoutStore } from "@/store/checkoutStore";
import { FormField, FormLabel, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectValue, SelectTrigger} from "@/components/ui/select";


const formSchema = z.object({
  street: z.string().min( 2, 'Preencha seu endereço'),
  number: z.string().min( 2, 'Preencha o número'),
  complement: z.string().optional(),
  district: z.string().min( 2, 'Preencha o bairro'),
  city: z.string().min( 2, 'Preencha a cidade'),
  state: z.string().min( 2, 'Preencha o estado'),
});
type Props = {
  setStep: Dispatch<SetStateAction<CheckoutSteps>>;
}

export const StepAddress = ({setStep}: Props) => {

  const {address, setAddress} = useCheckoutStore(state => state);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...address }
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setAddress(values);
    setStep('finish');
  }
  return (
    <FormProvider {...form}>  
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="street"
            render={({field}) => (  
              <FormItem>
                <FormLabel>Rua</FormLabel>
                <FormControl>
                  <Input {...field}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="number"
            render={({field}) => (  
              <FormItem>
                <FormLabel>Numero</FormLabel>
                <FormControl>
                  <Input {...field}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="complement"
            render={({field}) => (  
              <FormItem>
                <FormLabel>Complemento</FormLabel>
                <FormControl>
                  <Input {...field}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="district"
            render={({field}) => (  
              <FormItem>
                <FormLabel>Bairro</FormLabel>
                <FormControl>
                  <Input {...field}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({field}) => (  
              <FormItem>
                <FormLabel>Cidade</FormLabel>
                <FormControl>
                  <Input {...field}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({field}) => (  
              <FormItem>
                <FormLabel>Estado</FormLabel>
                <FormControl >
                  <Select   
                    defaultValue={field.value} 
                    onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue  placeholder="Escolha seu estado"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BA">Bahia</SelectItem>
                      <SelectItem value="DF">Distrito Federal</SelectItem>
                      <SelectItem value="ES">Espírito Santo</SelectItem>
                      <SelectItem value="GO">Goiás</SelectItem>
                      <SelectItem value="MG">Minas Gerais</SelectItem>
                      <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                      <SelectItem value="RN">Rio Grande do Norte</SelectItem>
                      <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                      <SelectItem value="SC">Santa Catarina</SelectItem>
                      <SelectItem value="SP">São Paulo</SelectItem>
                    </SelectContent>       
                  </Select>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-between mt-4">
          <Button  variant="link" onClick={() => setStep('user')}>Voltar</Button>
          <Button type="submit">Concluir</Button>
        </div>
        
      </form>
      </FormProvider>
// Compare this snippet from src/components/checkout/stepFinish.tsx:
    
  )
}