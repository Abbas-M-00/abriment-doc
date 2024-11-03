import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type DatabaseItem = {
  title: string;
  type: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  link: string;
  // description: JSX.Element;
};

const FeatureList: DatabaseItem[] = [

  {
    title: 'MySQL',
    type: 'SQL Database',
    Svg: require('@site/static/img/service_catalog_logo/mysql_logo.svg').default,
    link: "dbaas/mysql",
    // description: (
    //   <>
    //     به کمک محصول سرور ابری ابریمنت ماشین مجازی خود را با منابع مورد نظرتان تنها با چند کلیک ایجاد کنید.
    //   </>
    // ),
  },
  {
    title: 'MariaDB',
    type: 'SQL Database',
    Svg: require('@site/static/img/service_catalog_logo/mariadb_logo.svg').default,
    link: "dbaas/mariadb"
  },
  {
    title: 'PostgreSQL',
    type: 'SQL Database',
    Svg: require('@site/static/img/service_catalog_logo/postgresql_logo.svg').default,
    link: "dbaas/postgresql"
  },
  {
    title: 'Redis',
    type: 'Cache',
    Svg: require('@site/static/img/service_catalog_logo/redis_logo.svg').default,
    link: "dbaas/redis"
  },
  {
    title: 'MongoDB',
    type: 'NoSQL Database',
    Svg: require('@site/static/img/service_catalog_logo/mongodb_logo.svg').default,
    link: "dbaas/mongodb"
  },

];

function DatabaseCard({ title, type, Svg, link }: DatabaseItem) {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={link}>
      <div className={styles.gridItem}>
        <Svg className={styles.appLogo} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>{title}</p>
          <p className={styles.type}>{type}</p>
        </div>
      </div>
    </Link>
  );
}

export default function DatabaseList(): JSX.Element {
  return (
    <div className={styles.responsiveGrid}>
      {FeatureList.map((props, idx) => (
        <DatabaseCard key={idx} {...props} />
      ))}
    </div>
  );
}
