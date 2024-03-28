export const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

export const borderForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  return progress >= 0 && progress < 1;
};
