import PageListItem from '../PageListItem';

type Props = {
  children: React.ReactNode;
};

export function PageList({ children }: Props) {
  return <ul className="page-list">{children}</ul>;
}

// gắn Item vào PageList để dùng kiểu <PageList.Item ... />
PageList.Item = PageListItem;
