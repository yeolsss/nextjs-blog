import { FaGithub } from 'react-icons/fa';
import { BsMailboxFlag } from 'react-icons/bs';
import { IconType } from 'react-icons';

export interface Links {
  url: string;
  icon: IconType;
}
export const links: Links[] = [
  { url: 'https://github.com/yeolsss', icon: FaGithub },
  { url: 'mailto: yeol8810@gmail.com', icon: BsMailboxFlag },
];
