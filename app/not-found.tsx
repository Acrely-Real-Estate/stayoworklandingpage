import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-surface-container-lowest justify-center items-center py-32 px-4 md:px-8">
      <div className="max-w-2xl text-center flex flex-col items-center">
        <span className="font-headline text-[120px] md:text-[180px] font-bold text-on-surface-variant/20 leading-none mb-6 block">
          404
        </span>
        <h1 className="font-headline text-4xl md:text-5xl font-medium text-on-surface mb-6">
          This page doesn't exist.
        </h1>
        <p className="text-xl text-on-surface-variant font-medium mb-12 max-w-lg mx-auto">
          The page you're looking for may have moved or is no longer available.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/" className={cn(buttonVariants("crystal", "lg"), "group w-full sm:w-auto")}>
            Return to WorkStay
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
          <Link href="/solutions" className={cn(buttonVariants("outline", "lg"), "group w-full sm:w-auto")}>
            Explore Solutions
          </Link>
        </div>
      </div>
    </div>
  );
}
