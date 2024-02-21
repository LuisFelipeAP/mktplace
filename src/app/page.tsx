import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    description: "get your deliveries right away"
  },
  {
    name: "Guaranteed Quality",
    icon: CheckCircle,
    description: "items verified"
  },
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="">
            Your marketplace for
            <span className="text-blue-600"> digital assets</span>
          </h1>
          <div className="mt-6 flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()} >Browse Trending</Link>
          </div>
        </div>


      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
    
  );
}
