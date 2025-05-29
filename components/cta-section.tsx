import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

function CTASection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="rounded-3xl border bg-gradient-to-r from-primary/10 to-green-500/10 p-12 text-center backdrop-blur-sm">
        <h2 className="text-4xl font-bold tracking-tight mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground mb-8">
          Let's discuss how our technology solutions can help you achieve your
          business goals.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-green-500 transition-all hover:opacity-90"
            >
              <span className="relative z-10 flex items-center text-lg">
                Book Your Free Session
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -z-10 bg-white/20 opacity-0 blur-lg transition-all group-hover:opacity-100 group-hover:blur-xl" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
