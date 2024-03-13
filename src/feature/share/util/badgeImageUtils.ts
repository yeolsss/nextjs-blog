export class CreateBadge {
  name: string;
  displayName: string;
  color: string;
  logoColor: string;
  constructor(
    name: string,
    displayName: string,
    color: string,
    logoColor: string,
  ) {
    this.name = name;
    this.displayName = displayName;
    this.color = color;
    this.logoColor = logoColor;
  }
}

type SkillStack = {
  [key: string]: CreateBadge[];
};

export const CreateSkillStack = (): SkillStack => {
  return {
    Languages: [
      new CreateBadge('HTML5', 'Html5', 'FFFCEC', 'black'),
      new CreateBadge('CSS3', 'CSS3', 'FFFCEC', 'black'),
      new CreateBadge('JavaScript', 'Javascript', 'FFFCEC', 'black'),
      new CreateBadge('Typescript', 'Typescript', 'FFFCEC', 'black'),
      new CreateBadge('Java', 'Java', 'FFFCEC', 'black'),
    ],
    ['Library / Framework']: [
      new CreateBadge('React', 'React', 'FFFCEC', 'black'),
      new CreateBadge('Next.js', 'Next.js', 'FFFCEC', 'black'),
      new CreateBadge('Gatsby', 'Gatsby', 'FFFCEC', 'black'),
      new CreateBadge('JSP', 'JSP', 'FFFCEC', 'black'),
      new CreateBadge('Redux', 'Redux', 'FFFCEC', 'black'),
      new CreateBadge('Redux toolkit', 'Redux-toolkit', 'FFFCEC', 'black'),
      new CreateBadge('Zustand', 'Zustand', 'FFFCEC', 'black'),
      new CreateBadge('Recoil', 'Recoil', 'FFFCEC', 'black'),
      new CreateBadge('reactquery', 'React-Query', 'FFFCEC', 'black'),
      new CreateBadge(
        'styledcomponents',
        'Styled-Components',
        'FFFCEC',
        'black',
      ),
      new CreateBadge('tailwindcss', 'Tailwind CSS', 'FFFCEC', 'black'),
      new CreateBadge('Axios', 'Axios', 'FFFCEC', 'black'),
      new CreateBadge('framer', 'Framer-motion', 'FFFCEC', 'black'),
    ],
  };
};
