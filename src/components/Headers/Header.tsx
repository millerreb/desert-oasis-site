import React from 'react';

interface Props {
  title: string;
  subtitle?: string; 
}

const Header = ({ title, subtitle }: Props) => {
  return (
    <section className="border-b bg-sand">
      <div className="container py-12 text-center md:py-20">
        <h1 className="mx-auto max-w-4xl text-4xl font-normal leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">{title}</h1>
        {subtitle && ( 
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default Header;
