import Link from 'next/link';

export interface Social {
  name: string;
  icon: string;
  url: string;
}

const socials: Social[] = [
  {
    name: 'Github',
    icon: 'i-devicon-github',
    url: 'https://github.com/rifat0153',
  },
  {
    name: 'LinkedIn',
    icon: 'i-devicon-plain-linkedin',
    url: 'https://www.linkedin.com/in/mahbubur2/',
  },
  {
    name: 'LeetCode',
    icon: 'i-tabler-brand-leetcode',
    url: 'https://leetcode.com/rifat0153/',
  },
  {
    name: 'StackOverflow',
    icon: 'i-fa6-brands-stack-overflow',
    url: 'https://stackoverflow.com/users/10734390/mahbuburrahman-rifat',
  },
];

export default function SocialLinks() {
  return (
    <div className='mt-4 flex items-center justify-around gap-4 lg:justify-start lg:gap-10'>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.url} target='_blank'>
            <span
              className={`${social.icon} transform cursor-pointer text-xl transition-all duration-250 hover:scale-110 lg:text-3xl`}
            />
          </Link>
        );
      })}
    </div>
  );
}
