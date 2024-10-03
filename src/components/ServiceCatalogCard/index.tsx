import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type ServiceCatalogItem = {
  title: string;
  type: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  link: string;
  // description: JSX.Element;
};

const FeatureList: ServiceCatalogItem[] = [

  {
    title: 'MySQL',
    type: 'Database',
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
    type: 'Database',
    Svg: require('@site/static/img/service_catalog_logo/mariadb_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'PostgreSQL',
    type: 'Database',
    Svg: require('@site/static/img/service_catalog_logo/postgresql_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Redis',
    type: 'Database',
    Svg: require('@site/static/img/service_catalog_logo/redis_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Grafana',
    type: 'Monitoring',
    Svg: require('@site/static/img/service_catalog_logo/grafana_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Elasticsearch',
    type: 'Database',
    Svg: require('@site/static/img/service_catalog_logo/elasticsearch_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'MongoDB',
    type: 'Database',
    Svg: require('@site/static/img/service_catalog_logo/mongodb_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Kafka',
    type: 'Data Management',
    Svg: require('@site/static/img/service_catalog_logo/kafka_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'CMAK',
    type: 'Data Management',
    Svg: require('@site/static/img/service_catalog_logo/cmak_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'HDFS',
    type: 'Data Management',
    Svg: require('@site/static/img/service_catalog_logo/hdfs_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Code Server',
    type: 'Coding',
    Svg: require('@site/static/img/service_catalog_logo/codeserver_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Zookeeper',
    type: 'Data Management',
    Svg: require('@site/static/img/service_catalog_logo/zookeeper_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Cassandra',
    type: 'Database',
    Svg: require('@site/static/img/service_catalog_logo/cassandra_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'MSSQL',
    type: 'Database',
    Svg: require('@site/static/img/service_catalog_logo/mssql_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'OmniDB',
    type: 'Database',
    Svg: require('@site/static/img/service_catalog_logo/omnidb_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Graylog',
    type: 'Data Management',
    Svg: require('@site/static/img/service_catalog_logo/graylog_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Nifi',
    type: 'Data Management',
    Svg: require('@site/static/img/service_catalog_logo/nifi_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Logforwarder',
    type: 'Data Management',
    Svg: require('@site/static/img/service_catalog_logo/logforwarder_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Trino',
    type: 'Data Management',
    Svg: require('@site/static/img/service_catalog_logo/trino_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'RabbitMQ',
    type: 'Data Management',
    Svg: require('@site/static/img/service_catalog_logo/rabbitmq_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Kibana',
    type: 'Database',
    Svg: require('@site/static/img/service_catalog_logo/kibana_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Nexus',
    type: 'Data Management',
    Svg: require('@site/static/img/service_catalog_logo/nexus_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Kafka UI',
    type: 'Data Management',
    Svg: require('@site/static/img/service_catalog_logo/kafkaui_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Hazelcast',
    type: 'Database',
    Svg: require('@site/static/img/service_catalog_logo/hazelcast_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Zabbix',
    type: 'Monitoring',
    Svg: require('@site/static/img/service_catalog_logo/zabbix_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Cloudbeaver',
    type: 'Database',
    Svg: require('@site/static/img/service_catalog_logo/cloudbeaver_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'MinIO',
    type: 'Data Management',
    Svg: require('@site/static/img/service_catalog_logo/minio_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Nginx',
    type: 'Data Management',
    Svg: require('@site/static/img/service_catalog_logo/nginx_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'phpMyAdmin',
    type: 'Data Management',
    Svg: require('@site/static/img/service_catalog_logo/phpmyadmin_logo.svg').default,
    link: "docs/dbaas"
  },

];

function ServiceCatalogCard({ title, type, Svg, link }: ServiceCatalogItem) {
  return (
    <div className={styles.gridItem}>
      <Svg className={styles.appLogo}/>
      <p className={styles.title}>{title}</p>
      <p className={styles.type}>{type}</p>
    </div>
  );
}

export default function ServiceCatalogList(): JSX.Element {
  return (
      <div className={styles.responsiveGrid}>
          {FeatureList.map((props, idx) => (
            <ServiceCatalogCard key={idx} {...props} />
          ))}
      </div>
  );
}
