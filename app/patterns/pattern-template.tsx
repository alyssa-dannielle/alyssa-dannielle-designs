export default function PatternName() {
  const patternSections = [
    { label: 'Supplies Used', anchor: 'supplies' },
    { label: 'Stitches & Techniques', anchor: 'stitches' },
    { label: 'Instructions', anchor: 'instructions' },
  ];

  const supplies = [
    { text: 'Your supplies here' },
    { text: 'Crochet notions:' },
    { text: 'Stitch marker', indent: true },
    { text: 'Scissors', indent: true },
  ];

  const techniques = [
    'Your techniques here',
    'Chain - ch',
    'Single crochet - sc',
  ];

  return (
    <>
      <PatternSchema
        title='Pattern Title'
        description='Pattern description'
        tools={['5mm (H) crochet hook', 'Stitch marker', 'Scissors']}
        supplies={['Your supplies here']}
      />
      <PatternLayout title='Pattern Title' sections={patternSections}>
        {/* Your pattern content here */}
      </PatternLayout>
    </>
  );
}
