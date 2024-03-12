import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Web Audio Modules 2 are audio plugins for the modern web"
    >
      <header
        className={clsx("hero", styles.heroBanner)}
        style={{ height: "570px" }}
      >
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Learn More
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/examples"
            >
              Examples
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}
