import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { Card, CardContent } from "@/app/components/ui/card";
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "The team delivered our enterprise application on time and under budget. Their expertise in both front-end and back-end development was invaluable.",
    author: "Sarah Johnson",
    position: "CTO, Enterprise Solutions Inc.",
    rating: 5,
  },
  {
    quote: "Their data engineering team transformed our analytics capabilities. We now have real-time insights that drive our business decisions.",
    author: "Michael Chen",
    position: "Data Director, Insight Analytics",
    rating: 5,
  },
  {
    quote: "Working with them on our AWS migration was seamless. Their cloud expertise saved us considerable time and resources.",
    author: "Jennifer Lopez",
    position: "VP of Technology, CloudFirst",
    rating: 5,
  },
  {
    quote: "They built a progressive web app that increased our mobile conversions by 45%. Exceptional front-end development skills.",
    author: "David Wilson",
    position: "Marketing Director, E-Commerce Leaders",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We pride ourselves on delivering exceptional service and results for our clients. Here's what they have to say.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4 flex">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                          </svg>
                        ))}
                      </div>
                      <blockquote className="text-lg italic mb-6 flex-grow">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <p className="font-bold">{testimonial.author}</p>
                        <p className="text-sm text-foreground/70">{testimonial.position}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};