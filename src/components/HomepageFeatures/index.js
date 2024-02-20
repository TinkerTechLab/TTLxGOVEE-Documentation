import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Welcome!',
    description: (
      <>
        Control your GOVEE Devices across multiple platforms with the TTLxGOVEE online controller!
      </>
    ),
  },
  {
    title: 'Get Support',
    description: (
      <>
        Our Discord server allows users to receve support with any issues they may find while using the platform
      </>
    ),
  },
  {
    title: 'Read the docs',
    description: (
      <>
        Learn more about our integrations and using our POST API
      </>
    ),
  },
];


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
