import { Footer } from "@/components/Footer";
import { Hearder } from "@/components/Header";
import { TabSkeleton } from "@/components/products/Skeleton";
import { ProductsTab } from "@/components/products/Tab";
import { Suspense } from "react";


const Page = () => {
  return (
    <div className="w-full max-w-4xl mx-auto ">
      <Hearder/>
      <div className="mx-3" >
        <Suspense fallback={<TabSkeleton/>}>
          <ProductsTab/>
        </Suspense>   
      </div>
      <Footer/>  
    </div>
  )
}

export default Page ;
