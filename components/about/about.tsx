import Image from 'next/image';
import Link from 'next/link';
import aboutImg from '../../assets/images/mave.jpeg';
import { tools } from '../../assets/icons';

const skills = [
  { name: 'HTML', icon: tools.html5 },
  { name: 'CSS/SCSS', icon: tools.scss },
  { name: 'TailwindCSS', icon: tools.tailwind },
  { name: 'Javascript', icon: tools.javascript },
  { name: 'Typescript', icon: tools.typescript },
  { name: 'VueJS', icon: tools.vuejs },
  { name: 'React/React Native', icon: tools.react },
  { name: 'Redux', icon: tools.redux },
  { name: 'GraphQL', icon: tools.graphql },
  { name: 'Webpack', icon: tools.webpack },
  { name: 'NodeJS', icon: tools.nodejs },
  { name: 'Firebase', icon: tools.firebase },
  { name: 'Postgres', icon: tools.postgres },
  { name: 'MongoDB', icon: tools.mongodb },
  { name: 'Docker', icon: tools.docker },
  { name: 'AWS', icon: tools.aws },
  { name: 'Kubernetes', icon: tools.k8s },
  { name: 'Git', icon: tools.git },
  { name: 'Software Testing', icon: tools.jest },
];

export const About: React.FC = () => {
  return (
    <section className="about section" id="about">
      <div className="about__img">
        <Image
          src={aboutImg}
          alt="Maverick"
          className="about__img--img"
          placeholder="blur"
        />
      </div>

      <div className="about__content">
        <h2 className="about__heading">
          A little <span>About Me</span>
        </h2>
        <p>
          I started Software Development in 2015 as a hobby, just out of
          curiosity after reading that video games are made from computer
          programming.
        </p>
        <p>
          I&apos;ve been working professionally as a Software Developer for the
          last ~4 years. I&apos;m currently a Frontend Engineer at{' '}
          <Link href="https://neighborhoods.com">Neighborhoods.com™</Link> (a
          real estate resource company in Chicago).
        </p>
        <p>Here are some technologies I enjoy working with:</p>
        <ul className="tools">
          {skills.map((skill) => (
            <li key={skill.name} className="tools__tool">
              <span className="tools__tool--icon">{skill.icon}</span>
              <span className="tools__tool--name">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
