import Link from 'next/link';

const MENU_LIST = [
  { text: 'Home', href: '/' },
  { text: 'Front-end', href: '/frontend' },
  { text: 'Back-end', href: '/backend' },
  { text: 'Fullstack', href: '/fullstack' },
  { text: 'About Us', href: '/about' },
  { text: 'Contact', href: '/contact' },
];

const NavItem = ({ setIsOpen }) => {
  return (
    <>
      {MENU_LIST.map((item) => {
        return (
          <Link href={item.href} onClick={() => setIsOpen(false)}>
            {item.text}
          </Link>
        );
      })}
    </>
  );
};

export default NavItem;
