import { FaGithub } from 'react-icons/fa';
import { BsMailboxFlag } from 'react-icons/bs';
import { GrDocumentUser } from 'react-icons/gr';
import { IconType } from 'react-icons';

interface ILinks {
  url: string;
  icon: IconType;
}

const ProfileInfo = () => {
  const links: ILinks[] = [
    { url: 'https://github.com/yeolsss', icon: FaGithub },
    { url: 'mailto: yeol8810@gmail.com', icon: BsMailboxFlag },
    { url: '#', icon: GrDocumentUser },
  ];
  return (
    <>
      <h2 className={'text-textColor text-[1.4rem] font-normal opacity-[0.75]'}>
        저에 대해 소개 합니다.
      </h2>
      <div className={'flex items-center gap-x-[0.8rem]'}>
        <h1 className={'font-sans text-[2.4rem] font-bold'}>권 경열</h1>
        {links.map((item, index) => (
          <a key={index} href={`${item.url}`} target="_blank">
            <item.icon className="text-textColor h-[2.4rem] w-[2.4rem]" />
          </a>
        ))}
      </div>
    </>
  );
};

export default ProfileInfo;
