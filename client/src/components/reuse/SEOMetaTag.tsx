import { Helmet } from 'react-helmet-async';

interface MetaProps {
  title: string;
  description?: string;
  keywords?: string;
  imgsrc?: string;
  url?: string;
}

const MetaTag = (props: { item: MetaProps }) => {
  // props로 content 내용을 불러올 예정임

  // eslint-disable-next-line react/destructuring-assignment
  const { title, description, keywords, imgsrc, url } = props.item;
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgsrc} />
      <meta property="og:url" content={url} />

      {/* <link rel="canonical" href={props.url} /> */}
    </Helmet>
  );
};

export default MetaTag;
