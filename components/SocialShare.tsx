import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faXTwitter,
  faReddit,
} from '@fortawesome/free-brands-svg-icons';

interface SocialShareProps {
  title: string;
  url: string;
}

export default function SocialShare({ title, url }: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'Facebook',
      icon: faFacebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      name: 'Twitter',
      icon: faXTwitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'hover:text-gray-950 dark:hover:text-gray-50',
    },
    {
      name: 'Reddit',
      icon: faReddit,
      url: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      color: 'hover:text-orange-600 dark:hover:text-orange-400',
    },
  ];

  return (
    <div className='flex flex-col items-center gap-2 my-6'>
      <div className='flex gap-4'>
        {shareLinks.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target='_blank'
            rel='noopener noreferrer'
            className={`text-gray-800 dark:text-gray-200 ${platform.color} transition-colors`}
            aria-label={`Share on ${platform.name}`}
          >
            <FontAwesomeIcon icon={platform.icon} className='w-6 h-6' />
          </a>
        ))}
      </div>
    </div>
  );
}
