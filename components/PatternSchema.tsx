import { JsonLd } from 'react-schemaorg';

interface PatternSchemaProps {
  title: string;
  description: string;
  tools: string[];
  supplies: string[];
  author?: string;
}

interface HowTo {
  '@context': 'https://schema.org';
  '@type': 'HowTo';
  name: string;
  description: string;
  author: {
    '@type': 'Person';
    name: string;
  };
  tool: string[];
  supply: string[];
}

export default function PatternSchema({
  title,
  description,
  tools,
  supplies,
  author = 'Alyssa Dannielle',
}: PatternSchemaProps) {
  return (
    <JsonLd
      item={{
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: title,
        description: description,
        author: {
          '@type': 'Person',
          name: author,
        },
        tool: tools,
        supply: supplies,
      } as HowTo}
    />
  );
}
