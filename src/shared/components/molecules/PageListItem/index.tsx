type Props = {
  text: string;
};

export default function PageListItem({ text }: Props) {
  return (
    <li>
      <div className="page-list-icon">
        <svg className="nav-icon">
          <use href="/assets/icons/sprite.svg#icon-tick2"></use>
        </svg>
      </div>
      <div className="page-list-text">
        <p>{text}</p>
      </div>
    </li>
  );
}
