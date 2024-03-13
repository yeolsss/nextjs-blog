export class CreateBadge {
  name: string;
  color: string;
  logoColor: string;
  constructor(name: string, color: string, logoColor: string) {
    this.name = name;
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
      new CreateBadge('HTML5', 'FFFCEC', 'black'),
      new CreateBadge('CSS3', 'FFFCEC', 'black'),
      new CreateBadge('JavaScript', 'FFFCEC', 'black'),
      new CreateBadge('Typescript', 'FFFCEC', 'black'),
      new CreateBadge('Java', 'FFFCEC', 'black'),
    ],
    ['Library / Framework']: [
      new CreateBadge('React', 'FFFCEC', 'black'),
      new CreateBadge('Next.js', 'FFFCEC', 'black'),
      new CreateBadge('Gatsby', 'FFFCEC', 'black'),
      new CreateBadge('JSP', 'FFFCEC', 'black'),
      new CreateBadge('Redux', 'FFFCEC', 'black'),
      new CreateBadge('Redux toolkit', 'FFFCEC', 'black'),
      new CreateBadge('Zustand', 'FFFCEC', 'black'),
      new CreateBadge('Recoil', 'FFFCEC', 'black'),
      new CreateBadge('reactquery', 'FFFCEC', 'black'),
      new CreateBadge('styledcomponents', 'FFFCEC', 'black'),
      new CreateBadge('tailwindcss', 'FFFCEC', 'black'),
      new CreateBadge('Axios', 'FFFCEC', 'black'),
      new CreateBadge('framer', 'FFFCEC', 'black'),
    ],
  };
};
