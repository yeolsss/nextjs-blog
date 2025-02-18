interface Props {
  category: [string, number];
  categoryUrl: string;
  type: string;
}
const Category = ({ category, categoryUrl, type }: Props) => {
  return (
    <p
      className={`text-[1.6rem] ${type === 'posts' && 'hover:font-bold'} ${
        category[0] === categoryUrl
          ? 'opacity-1 font-bold text-accentColor'
          : 'opacity-75 '
      }`}
    >
      {category[0]}({category[1]})
    </p>
  );
};
export default Category;
