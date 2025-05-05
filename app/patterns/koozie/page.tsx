import { GoogleAnalytics } from '@next/third-parties/google';
import { PatternLayout } from '../../components/pattern/layout';
import { PatternSchema } from '../../components/pattern/metadata';
import {
  PatternIntroduction,
  PatternSupplyList,
  PatternTechniquesList,
  PatternStepSection,
  PatternStep,
  PatternSectionHeading,
} from '../../components/pattern/elements';

export const metadata = {
  title: 'Drink Koozie Crochet Pattern',
  description:
    'Free crochet pattern for a drink koozie. Excellent for beginner crocheters who like to drink',
};

export default function DrinkKoozie() {
  const patternSections = [
    { label: 'Supplies Needed', anchor: 'supplies' },
    { label: 'Stitches & Techniques', anchor: 'stitches' },
    { label: 'Instructions', anchor: 'instructions' },
    { label: 'Base', anchor: 'base' },
    { label: 'Opening', anchor: 'opening' },
    { label: 'Body', anchor: 'body' },
  ];

  const supplies = [
    {
      text: '~50g (approx 90 yds) medium weight yarn (I used Red Heart Super Saver) any color',
    },
    { text: '5mm (H) crochet hook' },
    { text: 'Crochet notions:' },
    { text: 'Stitch marker', indent: true },
    { text: 'Scissors', indent: true },
    { text: 'Tapestry needle (optional)', indent: true },
  ];

  const techniques = [
    'Magic ring',
    'Chain - ch',
    'Half double crochet - hdc',
    'Half double crochet increase - hdcInc (2 hdc in 1 stitch)',
    'Single crochet - sc (optional)',
    'Invisible finish off (optional)',
  ];

  return (
    <>
      <PatternSchema
        title='Drink Koozie Crochet Pattern'
        description='Free crochet pattern for a drink koozie'
        tools={[
          '5mm (H) crochet hook',
          'Stitch marker',
          'Scissors',
          'Tapestry needle (optional)',
        ]}
        supplies={['Medium weight yarn (~50g/90 yds)']}
      />
      <PatternLayout title='Drink Koozie' sections={patternSections}>
        <PatternIntroduction
          author='Alyssa Dannielle'
          formLink='https://docs.google.com/forms/d/e/1FAIpQLSdQM8cCneOQsnqAGG5sEcVOmwl5F4ZJVaNQ-LMNYLtjTM4KEQ/viewform?usp=preview'
          introText='Hi and thanks for checking out my drink koozie crochet pattern! Currently this pattern contains written instructions only. Keep checking back while I continue to add to this pattern based on tester feedback. To leave your feedback, please fill out'
        />

        <PatternSupplyList supplies={supplies} />
        <PatternTechniquesList techniques={techniques} />

        <PatternSectionHeading id='instructions' heading='Instructions' />

        <PatternStepSection id='base' heading='Base'>
          <PatternStep
            text='With 2 strands of yarn, work 8 hdc in a magic ring'
            stitchCount='8'
          />
          <PatternStep
            text='Continuing around, work 1 hdcInc in each stitch around to end'
            stitchCount='16'
          />
          <PatternStep
            text='Continuing around, work 1 hdc in next stitch and 1 hdcInc in following stitch repeat instructions inside braces around to end'
            stitchCount='24'
          />
        </PatternStepSection>

        <PatternStepSection id='opening' heading='Opening'>
          <PatternStep
            text='Continuing around, work 1 hdc in next 4 stitches, ch 8, skip 8 hdc repeat instructions inside braces one more time to end'
            stitchCount='8 stitches, 16 chains'
          />
          <PatternStep
            text='Continuing around, work 1 hdc in next 4 stitches and 8 hdc in chain space repeat instruction inside braces one more time to end'
            stitchCount='24'
          />
        </PatternStepSection>

        <PatternStepSection id='body' heading='Body'>
          <PatternStep
            text='Continuing around, work 1 hdc in each stitch around'
            stitchCount='24'
          />
          <PatternStep
            text='Continuing around, repeat the previous round to desired height'
            stitchCount='24'
          />
          <PatternStep text="(optional) If your final row ends in the middle of the koozie and/or if you'd like a less abrupt finish, work single crochets to one side of koozie before finishing off" />
          <PatternStep text='Finish off (optional invisible finish) and weave in the tails.' />
        </PatternStepSection>
      </PatternLayout>
      <GoogleAnalytics gaId='G-3PNFXR7ZY5' />
    </>
  );
}
