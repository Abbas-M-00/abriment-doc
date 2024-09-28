import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type ServiceCatalogItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  link: string;
  // description: JSX.Element;
};

const FeatureList: ServiceCatalogItem[] = [

  {
    title: 'MySQL',
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
    Svg: require('@site/static/img/service_catalog_logo/mariadb_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'PostgreSQL',
    Svg: require('@site/static/img/service_catalog_logo/postgresql_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Redis',
    Svg: require('@site/static/img/service_catalog_logo/redis_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Grafana',
    Svg: require('@site/static/img/service_catalog_logo/grafana_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Elasticsearch',
    Svg: require('@site/static/img/service_catalog_logo/elasticsearch_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'MongoDB',
    Svg: require('@site/static/img/service_catalog_logo/mongodb_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Kafka',
    Svg: require('@site/static/img/service_catalog_logo/kafka_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'CMAK',
    Svg: require('@site/static/img/service_catalog_logo/cmak_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'HDFS',
    Svg: require('@site/static/img/service_catalog_logo/hdfs_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Code Server',
    Svg: require('@site/static/img/service_catalog_logo/codeserver_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Zookeeper',
    Svg: require('@site/static/img/service_catalog_logo/zookeeper_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Cassandra',
    Svg: require('@site/static/img/service_catalog_logo/cassandra_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'MSSQL',
    Svg: require('@site/static/img/service_catalog_logo/mssql_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'OmniDB',
    Svg: require('@site/static/img/service_catalog_logo/omnidb_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Graylog',
    Svg: require('@site/static/img/service_catalog_logo/graylog_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Nifi',
    Svg: require('@site/static/img/service_catalog_logo/nifi_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Logforwarder',
    Svg: require('@site/static/img/service_catalog_logo/logforwarder_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Trino',
    Svg: require('@site/static/img/service_catalog_logo/trino_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'RabbitMQ',
    Svg: require('@site/static/img/service_catalog_logo/rabbitmq_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Kibana',
    Svg: require('@site/static/img/service_catalog_logo/kibana_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Nexus',
    Svg: require('@site/static/img/service_catalog_logo/nexus_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Kafka UI',
    Svg: require('@site/static/img/service_catalog_logo/kafkaui_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Hazelcast',
    Svg: require('@site/static/img/service_catalog_logo/hazelcast_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Zabbix',
    Svg: require('@site/static/img/service_catalog_logo/zabbix_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Cloudbeaver',
    Svg: require('@site/static/img/service_catalog_logo/cloudbeaver_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'MinIO',
    Svg: require('@site/static/img/service_catalog_logo/minio_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Nginx',
    Svg: require('@site/static/img/service_catalog_logo/nginx_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'phpMyAdmin',
    Svg: require('@site/static/img/service_catalog_logo/phpmyadmin_logo.svg').default,
    link: "docs/dbaas"
  },
  {
    title: 'Gitlab runner',
    Svg: require('@site/static/img/service_catalog_logo/gitlabrunner_logo.svg').default,
    link: "docs/dbaas"
  },

];

function ServiceCatalogCard({ title, Svg, link }: ServiceCatalogItem) {
  return (
    <div className={styles.gridItem}>
      <Svg className={styles.appSvg} role="img" />
      <p>{title}</p>
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
