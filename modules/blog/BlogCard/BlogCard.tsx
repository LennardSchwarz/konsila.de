import Link from 'next/link';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import cn from 'classnames';

export type Blog = {
  title: string;
  slug: string;
  date: Date;
  excerpt?: string;
  featuredImage?: StaticImageData;
  layout?: 'inline' | 'stacked';
};

export const BlogCard: React.FC<Blog> = ({
  title,
  slug,
  featuredImage,
  date,
  excerpt,
  layout,
}) => {
  const isInline = layout === 'inline';
  const isStacked = layout === 'stacked';

  return (
    <div
      className={cn('blog-card', {
        'blog-card-inline': isInline,
        'blog-card-stacked': isStacked,
      })}
      key={slug}
    >
      <div className="blog-card__info">
        {title && (
          <h3 className="blog-card__title">
            <Link href={slug}>{title}</Link>
          </h3>
        )}

        {excerpt && <p className="blog-card__excerpt">{excerpt}</p>}

        {date && (
          <p className="blog-card__date">
            <span>
              {date.toLocaleDateString('en-us', {
                dateStyle: 'full',
              })}
            </span>
          </p>
        )}
      </div>

      {featuredImage && isStacked && (
        <div className="blog-card__cover">
          <Image
            src={featuredImage}
            className="blog-card__cover--img"
            alt={title}
            title={title}
          />
        </div>
      )}

      {featuredImage && isInline && (
        <a className="blog-card__cover" href={slug}>
          <Image
            src={featuredImage}
            className="blog-card__cover--img"
            alt={title}
            title={title}
          />
        </a>
      )}
    </div>
  );
};
