import Link from 'next/link';

const MENU_LIST = [
  { text: 'Home', href: '/' },
  { text: 'Front-end', href: '/frontend' },
  { text: 'Back-end', href: '/backend' },
  { text: 'Fullstack', href: '/fullstack' },
  { text: 'About Us', href: '/about' },
  { text: 'Contact', href: '/contact' },
];

const NavItem = () => {
  return (
    <>
      {MENU_LIST.map((item, key) => {
        return (
          <Link key={key} href={item.href} >
            {item.text}
          </Link>
        );
      })}
    </>
  );
};

export default NavItem;
