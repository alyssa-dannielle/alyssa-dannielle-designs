import { GoogleAnalytics } from '@next/third-parties/google';
import { PatternLayout } from '../../components/pattern/layout';
import { PatternSchema } from '../../components/pattern/metadata';
import {
  PatternIntroduction,
  PatternSupplyList,
  PatternTechniquesList,
  PatternSectionHeading,
  PatternStepSection,
  PatternStep,
  PatternImage,
} from '../../components/pattern/elements';
import Image from 'next/image';

export const metadata = {
  title: 'Pokéball Crochet Pattern',
  description:
    "Free crochet pattern for a Pokéball. Perfect for crocheters who gotta catch 'em all!",
};

export default function Pokeball() {
  const patternSections = [
    { label: 'Supplies Used', anchor: 'supplies' },
    { label: 'Stitches & Techniques', anchor: 'stitches' },
    { label: 'Instructions', anchor: 'instructions' },
    { label: 'Button', anchor: 'button' },
    { label: 'Top', anchor: 'top' },
    { label: 'Bottom', anchor: 'bottom' },
    { label: 'Assembly', anchor: 'assembly' },
  ];

  const supplies = [
    { text: 'Medium weight acrylic yarn' },
    { text: 'Red - 24 grams or 46 yards', indent: true },
    { text: 'White - 25 grams or 50 yards', indent: true },
    { text: 'Black - 9 grams or 12 yards', indent: true },
    { text: 'Polyfil ~30 grams' },
    { text: '5mm (H) crochet hook' },
    { text: 'Crochet notions:' },
    { text: 'Stitch marker', indent: true },
    { text: 'Scissors', indent: true },
    { text: 'Tapestry needle (optional)', indent: true },
  ];

  const techniques = [
    'Magic ring',
    'Yarn over - yo',
    'Chain - ch',
    'Slip stitch - slst',
    'Half double crochet - hdc',
    'Half double crochet increase - hdcInc (2 hdc in 1 stitch)',
    'Join (slst in first stitch of round)',
    'Special stitch - ss (Ch 1 w/black, yo w/main color, insert hook, yo & pull up main color, yo w/black, & pull through)',
  ];

  return (
    <>
      <PatternSchema
        title='Pokéball Crochet Pattern'
        description='Free crochet pattern for a Pokéball.'
        tools={[
          '5mm (H) crochet hook',
          'Stitch marker',
          'Scissors',
          'Tapestry needle',
        ]}
        supplies={[
          'Red acrylic yarn - 46 yards',
          'White acrylic yarn - 50 yards',
          'Black acrylic yarn - 12 yards',
          'Polyfil - 30 grams',
        ]}
      />
      <PatternLayout title='Pokéball' sections={patternSections}>
        <PatternIntroduction
          author='Alyssa Dannielle'
          formLink='https://docs.google.com/forms/d/e/1FAIpQLSeIeBSmj8wTg811x8V7tk9ork0neYhv20DQ7Zb5glu1KjkKqg/viewform?usp=preview'
          introText='Hi and thanks for checking out my Pokéball crochet pattern! Currently this pattern contains written instructions only. Keep checking back while I continue to add to this pattern based on tester feedback. To leave your feedback, please fill out'
        />

        <div className='my-8 flex justify-center'>
          <div className='relative aspect-square w-[280px] overflow-hidden'>
            <Image
              src='/pokeball_not_started.jpg'
              alt='An unfinished crochet pokeball. All the pieces are there, but they have not been sewn together'
              fill
              className='rounded-2xl object-cover shadow-lg hover:scale-105 transition-transform duration-300'
              priority
            />
          </div>
        </div>

        <PatternSupplyList supplies={supplies} />
        <PatternTechniquesList techniques={techniques} />

        <PatternSectionHeading id='instructions' heading='Instructions' />

        <PatternStepSection id='button' heading='Button'>
          <PatternImage
            src='/pokeball_button.jpg'
            alt='Close up of the crocheted Pokéball button piece'
            isCircular
          />
          <PatternStep
            text='Using 2 strands of white, work 8 hdc in a magic ring, join'
            stitchCount='8'
          />
          <PatternStep
            text='Work 2 ss in each stitch around to end, join'
            stitchCount='16'
          />
          <PatternStep text='Invisible finish and leave a long black tail for sewing' />
          <PatternStep
            text='Thread tapestry needle with tail and embroider a circle
                between 1st and 2nd rounds'
          />
        </PatternStepSection>

        <PatternStepSection id='top' heading='Top'>
          <PatternImage
            src='/pokeball_top.jpg'
            alt='Close up of the crocheted Pokéball top piece'
            isCircular
          />
          <PatternStep
            text='Using 2 strands of red, work 8 hdc in a magic ring'
            stitchCount='8'
          />
          <PatternStep
            text='Continuing around, work 1 hdcInc in each stitch around to end'
            stitchCount='16'
          />
          <PatternStep
            text='Repeat { 1 hdc in next stitch and 1 hdcInc in next stitch } around to end'
            stitchCount='24'
          />
          <PatternStep
            text='Work 1 hdc in next stitch, repeat { 1 hdc in next 2 stitches and 1 hdcInc in next stitch } around, working 1 hdc in second to last stitch and one hdcinc in last stitch'
            stitchCount='32'
          />
          <PatternStep
            text='Repeat { 1 hdc in next 3 stitches and 1 hdcInc in next stitch } around to end'
            stitchCount='40'
          />
          <PatternStep
            text='Work 1 hdc in each stitch around to end, join'
            stitchCount='40'
          />
          <PatternStep
            text='Work 1 ss in each stitch around to end, join'
            stitchCount='40'
          />
          <PatternStep text='Invisible finish and leave a long black tail for sewing' />
        </PatternStepSection>

        <PatternStepSection id='bottom' heading='Bottom'>
          <PatternImage
            src='/pokeball_bottom.jpg'
            alt='Close up of the crocheted Pokéball bottom piece'
            isCircular
          />
          <PatternStep
            text='Using 2 strands of white, work 8 hdc in a magic ring'
            stitchCount='8'
          />
          <PatternStep
            text='Continuing around, work 1 hdcInc in each stitch around to end'
            stitchCount='16'
          />
          <PatternStep
            text='Repeat { 1 hdc in next stitch and 1 hdcInc in next stitch } around to end'
            stitchCount='24'
          />
          <PatternStep
            text='Work 1 hdc in next stitch, repeat { 1 hdc in next 2 stitches and 1 hdcInc in next stitch } around to end, work 1 hdc in last stitch'
            stitchCount='32'
          />
          <PatternStep
            text='Repeat { 1 hdc in next 3 stitches and 1 hdcInc in next stitch } around to end'
            stitchCount='40'
          />
          <PatternStep
            text='Work 1 hdc in each stitch around to end, join'
            stitchCount='40'
          />
          <PatternStep
            text='Work 1 ss in each stitch around to end, join'
            stitchCount='40'
          />
          <PatternStep text='Invisible finish and leave a long black tail for sewing' />
        </PatternStepSection>

        <PatternStepSection id='assembly' heading='Assembly'>
          <PatternStep text='Thread tapestry needle with tail from either top or bottom of pokeball' />
          <PatternStep text='Stitch top and bottom of pokeball together leaving a small opening to fill with polyfil and any other secrets or surprises' />
          <PatternStep text='After stuffing, finish stitching pokeball closed' />
          <PatternStep text='With any tail, stitch button on to pokeball directly between top and bottom' />
          <PatternStep text='Hide all tails inside the pokeball' />
        </PatternStepSection>
      </PatternLayout>
      <GoogleAnalytics gaId='G-3PNFXR7ZY5' />
    </>
  );
}
