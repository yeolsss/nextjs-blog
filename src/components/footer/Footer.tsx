import Contact from '@/feature/share/components/Contact';

const Footer = () => {
  return (
    <footer className="mb-[2rem] mt-[6rem] flex flex-col gap-10">
      <div className="flex justify-center gap-10">
        <Contact height={3} width={3} />
      </div>
      <p
        className={
          'w-full text-center text-[1.4rem] font-normal tracking-[0.07px] text-textColor'
        }
      >
        &copy;2023 권경열. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
