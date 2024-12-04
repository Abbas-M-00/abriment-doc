import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type PaaSItem = {
  title: string;
  description: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  link: string;
  // description: JSX.Element;
};

const FeatureList: PaaSItem[] = [

  {
    title: 'کانتینر ایمیج',
    description: 'شما یک کانتینر بر روی یک Image Registry خصوصی و یا عمومی مانند DockerHub دارید',
    Svg: require('@site/static/img/Docker.svg').default,
    link: 'paas/cantainerimage'

  },
  {
    title: 'سرویس کاتالوگ',
    description: 'یکی از نرم‌افزارهای آماده به استفاده موجود در کاتالوگ را انتخاب کرده و در چند ثانیه آن را قابل استفاده کنید',
    Svg: require('@site/static/img/Service Catalog.svg').default,
    link: 'paas/service-catalog'
  },
  {
    title: ' گیت  (CI/CD) ',
    description: 'با استفاده از داکر فایل source code اپلیکیشن خود را متناسب با آن چیزی که می‌خواهید بسازید',
    Svg: require('@site/static/img/Git.svg').default,
    link: 'paas/git'
  },
  {
    title: 'آپلود منیفست',
    description: 'ساخت اپ از طریق آپلود فایل YAML',
    Svg: require('@site/static/img/Manifest.svg').default,
    link: 'paas/manifest'
  },
  {
    title: 'خط فرمان  (CLI)',
    description: 'با استفاده از خط فرمان یک اپلیکیشن بسازید',
    Svg: require('@site/static/img/Command line.svg').default,
    link: 'paas/cli'
  },

];

function PaaSCard({ title, description, Svg, link }: PaaSItem) {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={link}>
      <div className={styles.gridItem}>
        <Svg className={styles.appLogo} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>{title}</p>
          <p className={styles.type}>{description}</p>
        </div>
      </div>
    </Link>

  );
}

export default function PaaSList(): JSX.Element {
  return (
    <div className={styles.responsiveGrid}>
      {FeatureList.map((props, idx) => (
        <PaaSCard key={idx} {...props} />
      ))}
    </div>
  );
}
