import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAllProducts } from "@/services/product"
import { Product } from "@/types/product";
import { ProductEmpty } from "./ProductEmpty";
import { ProductItem } from "./Item";

type Tab ={
  title: string;
  value: string;
  products: Product[];
}

export const ProductsTab = async () => {
  const products = await getAllProducts();
  const tabs: Tab[] = [
    {
      title: 'Sushi',
      value: 'sushi',
      products: products.filter(item => item.category === 'sushi')
    },
    {
      title: 'Temaki',
      value: 'temaki',
      products: products.filter(item => item.category === 'temaki')

    },
    {
      title: 'Combos',
      value: 'combo',
      products: products.filter(item => item.category === 'combo')

    },
    {
      title: 'Bebidas',
      value: 'bebida',
      products: products.filter(item => item.category === 'bebida')

    },
    {
      title: 'Especiais',
      value: 'especial',
      products: products.filter(item => item.category === 'especial')

    }
  ]
  return (
    <Tabs defaultValue="sushi">
      <TabsList className="flex">
        {tabs.map(item => (
          <TabsTrigger 
            key={item.value}
            value={item.value}
            className="flex-1"
          >{item.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map(item => (
        <TabsContent 
          key={item.value}
          value={item.value} 
          className="mt-6"
        >
          {item.products.length > 0 &&
            <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
              {item.products.map(product => (
                <ProductItem key={product.id} item={product}/>
              ))}
            </div>
          }
          {item.products.length === 0 && <ProductEmpty/>}
        </TabsContent>
      ))

      }
      
    </Tabs>
  )
}