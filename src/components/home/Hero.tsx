import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:items-center">
          <div className="max-w-xl">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
              New Collection
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
              Discover Our <span className="text-teal-600 dark:text-teal-500">Latest</span> Collection
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Explore our curated selection of high-quality products designed to elevate your lifestyle. From fashion to electronics, we have everything you need.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                onClick={() => navigate('/products')}
                size="lg"
              >
                Shop Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/about')}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg md:mx-0">
            <img
              src="https://images.pexels.com/photos/5868722/pexels-photo-5868722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Featured Collection"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="inline-block rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gray-900">
                Up to 40% Off
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-gray-950"></div>
    </section>
  );
};

export default Hero;