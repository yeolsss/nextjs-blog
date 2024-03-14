import { links } from '@/feature/share/util/contactLink';

interface Props {
  height: number;
  width: number;
}
const Contact = ({ height, width }: Props) => {
  return (
    <>
      {links.map((item, index) => (
        <a key={index} href={`${item.url}`} target="_blank">
          <item.icon
            className={`h-[${height}rem] w-[${width}rem] text-textColor`}
          />
        </a>
      ))}
    </>
  );
};

export default Contact;
