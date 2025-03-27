
import { useCheckoutStore } from "@/store/checkoutStore";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { generateMessege } from "@/lib/generate-messege";

export const StepFinish = () => {

  const {name} = useCheckoutStore(state => state);
  const menssage = generateMessege();
  const linkZap = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(menssage)}`;
  return ( 
    <div className="flex text-center flex-col gap-5">
      <h2 className="text-2xl font-semibold">Obrigado, {name}!</h2>
      <p className="text-lg">Sua compra foi realizada com sucesso!</p>
      <p>Agora envie seu pedido ao WhatsApp para concluir.</p>
      <p>Nosso atendente irá te guiar sobre o andamento do pedido.</p>
      <Button>
        <Link target="_blank" href={linkZap}>Enviar para o WhatsApp</Link>
      </Button>
    </div>
  )
}