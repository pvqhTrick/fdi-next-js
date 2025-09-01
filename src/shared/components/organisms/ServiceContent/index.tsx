'use client';

import { useState } from 'react';
import { Image } from '../../atoms';
import type { ServiceContentProps } from './type';

export const ServiceContent: React.FC<ServiceContentProps> = ({ services, className = '' }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`${className}`}>
      <div className="flex gap-6 flex-wrap flex-row justify-center">
        {services.map((s, idx) => (
          <div
            key={idx}
            className={`item cursor-pointer flex-row flex flex-1 ${activeIndex === idx ? 'active flex-2' : ''}`}
            onClick={() => setActiveIndex(idx)}>
            <Image src={s.img} alt={s.alt} width={280} height={300} className="w-full rounded-xl" />
            {activeIndex === idx && (
              <div className="cont mt-4">
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
