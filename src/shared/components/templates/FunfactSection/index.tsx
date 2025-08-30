// FunfactSection.tsx

import { FunfactItem } from '../../molecules/FunfactItem';

const funfacts = [
  {
    icon: 'icon-piechart',
    title: 'Qualified Instructor',
    description: 'Lorem ipsum amet quam miss nestibulum drana fermen.',
  },
  {
    icon: 'icon-piechart',
    title: 'Modern Facilities',
    description: 'Et malesuada fames ac turpis egestas integer eget.',
  },
  {
    icon: 'icon-piechart',
    title: 'Great Community',
    description: 'Viverra suspendisse potenti nullam ac tortor vitae purus.',
  },
];

export function FunfactSection() {
  return (
    <section data-title="funfact" className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {funfacts.map((fact, idx) => (
            <FunfactItem key={idx} {...fact} />
          ))}
        </div>
      </div>
    </section>
  );
}
