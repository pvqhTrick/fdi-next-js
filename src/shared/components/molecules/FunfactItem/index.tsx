import type { FunfactItemProps } from './type';
export const FunfactItem: React.FC<FunfactItemProps> = ({ icon, title, description }) => {
  return (
    <div className="item flex gap-4 p-4">
      <svg className="nav-icon w-16 h-16 text-primary-500">
        <use href={`/assets/icons/sprite.svg#${icon}`} />
      </svg>
      <div className="cont">
        <h5 className="font-bold text-lg">{title}</h5>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};
