import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

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
    link: "docs/paas",
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
    link: "docs/dbaas"
  },
  {
    title: 'PostgreSQL',
    type: 'SQL Database',
    Svg: require('@site/static/img/service_catalog_logo/postgresql_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Redis',
    type: 'Cache',
    Svg: require('@site/static/img/service_catalog_logo/redis_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'MongoDB',
    type: 'NoSQL Database',
    Svg: require('@site/static/img/service_catalog_logo/grafana_logo.svg').default,
    link: "docs/dbaas"
  },

];

function DatabaseCard({ title, type, Svg, link }: DatabaseItem) {
  return (
    <div className={styles.gridItem}>
      <Svg className={styles.appLogo}/>
      <div className={styles.infoContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.type}>{type}</p>
      </div>
    </div>
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
