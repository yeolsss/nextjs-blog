interface Props {
  category: [string, number];
  categoryUrl: string;
  type: string;
}
export const Category = ({ category, categoryUrl, type }: Props) => {
  return (
    <p
      className={`text-[1.4rem] ${type === 'posts' && 'hover:font-bold'} ${
        category[0] === categoryUrl ? 'opacity-1 font-bold' : 'opacity-75 '
      }`}
    >
      {category[0]}({category[1]})
    </p>
  );
};
