import { GoogleAnalytics } from '@next/third-parties/google';
import PatternLayout from '../../components/PatternLayout';
import PatternSchema from '../../../components/PatternSchema';
import PatternIntroduction from '../../components/PatternIntroduction';
import PatternSupplyList from '../../components/PatternSupplyList';
import PatternTechniquesList from '../../components/PatternTechniquesList';
import PatternStepSection from '../../../components/PatternStepSection';
import PatternStep from '../../../components/PatternStep';
import PatternSectionHeading from '../../../components/PatternSectionHeading';

export const metadata = {
  title: 'Axolotl Crochet Pattern',
  description:
    'Free crochet pattern for an adorable amigurumi axolotl. Great for an experienced crocheter who loves amphibians',
};

export default function Axolotl() {
  const patternSections = [
    { label: 'Supplies Used', anchor: 'supplies' },
    { label: 'Stitches and Techniques', anchor: 'stitches' },
    { label: 'Instructions', anchor: 'instructions' },
    { label: 'Head', anchor: 'head' },
    { label: 'Tail and Body', anchor: 'body' },
    { label: 'Dorsal Fin', anchor: 'fin' },
    { label: 'Legs', anchor: 'legs' },
    { label: 'External Gills', anchor: 'gills' },
    { label: 'Eyes', anchor: 'eyes' },
    { label: 'Assembly', anchor: 'assembly' },
  ];

  const supplies = [
    { text: 'Medium weight yarn in two shades of the same color' },
    { text: 'Light weight fuzzy yarn in similar shade' },
    { text: '5mm (H) crochet hoox' },
    { text: 'Safety eyes (or you can embroider eyes if preferred)' },
    {
      text: 'Small amount of felt to match darker shade of yarn for around safety eyes (not applicable if embroidering eyes)',
    },
    { text: 'Crochet notions:' },
    { text: 'Stitch marker', indent: true },
    { text: 'Tapestry needle (optional)', indent: true },
    { text: 'Scissors', indent: true },
  ];

  const techniques = [
    'Magic ring',
    'Chain - ch',
    'Slip Stitch - slst',
    'Single Crochet - sc',
    'Half double crochet - hdc',
    'Half double crochet increase - hdcInc (2 hdc in 1 stitch)',
    'Half double crochet decrease - hdcDec (2 hdc together)',
    'Foundation single crochet - fsc',
    'Foundation double crochet - fdc',
  ];

  return (
    <>
      <PatternSchema
        title='Axolotl Crochet Pattern'
        description='Free crochet pattern for an amigurumi axolotl'
        tools={[
          '5mm (H) crochet hook',
          'Stitch marker',
          'Tapestry needle',
          'Scissors',
        ]}
        supplies={[
          'Medium weight yarn in two shades of same color',
          'Light weight fuzzy yarn in similar shade',
        ]}
      />
      <PatternLayout title='Axolotl' sections={patternSections}>
        <PatternIntroduction
          author='Alyssa Dannielle'
          formLink='https://docs.google.com/forms/d/e/1FAIpQLSe6jeUU173vjjEKUlRTkVUN6heifFE5XGEdWTJMUswfoaP7Lg/viewform'
          introText='Hi and thanks for checking out my axolotl crochet pattern! Currently this pattern contains written instructions only. Keep checking back while I continue to add to this pattern based on tester feedback. To leave your feedback, please fill out'
        />
        <PatternSupplyList supplies={supplies} />
        <PatternTechniquesList techniques={techniques} />
        <PatternSectionHeading id='instructions' heading='Instructions' />
        <PatternStepSection id='head' heading='Head'>
          <PatternStep
            text='Using two strands of the lighter shade, work 8 hdc in a magic ring'
            stitchCount='8'
          />
          <PatternStep
            text='Continuing around, work 1 hdcInc in each stitch around to end'
            stitchCount='16'
          />
          <PatternStep
            text='Repeat { 1 hdc in next 3 stitches and 1 hdcInc in next stitch } around to end, close ring'
            stitchCount='20'
          />
          <PatternStep
            text='Repeat { 1 hdc in next 4 stitches and 1 hdcInc in next stitch } around to end'
            stitchCount='24'
          />
          <PatternStep
            text='Repeat { 1 hdc in next 5 stitches and 1 hdcInc in next stitch } around to end'
            stitchCount='28'
          />
          <PatternStep
            text='Repeat { 1 hdc in next 5 stitches and 1 hdcDec in next stitch } around to end'
            stitchCount='24'
          />
          <PatternStep
            text='Repeat { 1 hdc in next 4 stitches and 1 hdcDec in next stitch } around to end'
            stitchCount='20'
          />
        </PatternStepSection>

        <PatternStepSection id='body' heading='Tail and Body'>
          <PatternStep
            text='Using two strands of the lighter shade, work 4 hdc in a magic ring'
            stitchCount='4'
          />
          <PatternStep
            text='Continuing around, repeat { 1 hdc in next stitch and 1 hdcInc in next stitch } around to end'
            stitchCount='6'
          />
          <PatternStep
            text='Repeat { 1 hdc in next 2 stitches and 1 hdcInc in next stitch } around to end'
            stitchCount='8'
          />
          <PatternStep
            text='Repeat { 1 hdc in next 3 stitches and 1 hdcInc in next stitch } around to end'
            stitchCount='10'
          />
          <PatternStep
            text='Repeat { 1 hdc in next 4 stitches and 1 hdcInc in next stitch } around to end'
            stitchCount='12'
          />
          <PatternStep
            text='Repeat { 1 hdc in next 2 stitches and 1 hdcInc in next stitch } around to end'
            stitchCount='16'
          />
          <PatternStep
            text='Repeat { 1 hdc in next 3 stitches and 1 hdcInc in next stitch } around to end'
            stitchCount='20'
          />
          <PatternStep
            text='Repeat { 1 hdc in next 9 stitches and 1 hdcInc in next stitch } around to end'
            stitchCount='22'
          />
          <PatternStep
            text='Work 1 hdc in each stitch around to end for 4 rounds'
            stitchCount='22'
          />
          <p className='text-right dark:text-gray-400 text-gray-600 italic mt-1'>
            and 12 rounds
          </p>
          <PatternStep
            text='Repeat { 1 hdc in next 9 stitches and 1 hdcDec in next stitch } around to end'
            stitchCount='20'
          />
          <p className='text-right dark:text-gray-400 text-gray-600 italic mt-1'>
            and 13 rounds
          </p>
        </PatternStepSection>
        <PatternStepSection id='fin' heading='Dorsal Fin'>
          <PatternStep text='Using a single strand of the darker shade, fcs, sc in same ch, repeat { fdc, dc in same ch } 13 times or until desired length' />
        </PatternStepSection>
        <PatternStepSection id='legs' heading='Legs (make 4)'>
          <PatternStep
            text='Using 2 strands of the lighter shade, work 8 hdc in a magic ring'
            stitchCount='8'
          />
          <PatternStep
            text='Continuing around, work 1 hdcInc in each stitch around to end'
            stitchCount='16'
          />
          <PatternStep
            text='Work 1 hdcDec in next 2 stitches around to end'
            stitchCount='8'
          />
          <PatternStep
            text='Work 1 hdc in each stitch around to end'
            stitchCount='8'
          />
          <PatternStep
            text='Repeat { 1 hdc in next 2 stitches and 1 hdcDec in next stitch } around to end'
            stitchCount='6'
          />
          <PatternStep
            text='Work 1 hdc in each stitch around to end for 2 rounds'
            stitchCount='6'
          />
          <p className='text-right dark:text-gray-400 text-gray-600 italic mt-1'>
            and 7 rounds
          </p>
        </PatternStepSection>
        <PatternStepSection id='gills' heading='External Gills (make 2)'>
          <PatternStep text='Using a single strand of the darker shade and a single strand of the fuzzy, ch 5, slst in 2nd ch from hook and next 2 chs, sc in last ch, repeat { ch 6, slst in 2nd ch and next 2 chs, sc } 2 times' />
        </PatternStepSection>
        <PatternStepSection id='eyes' heading='Eyes (make 2)'>
          <PatternStep text='With a piece of felt slightly larger than the safety eye, cut a hole in the center, insert the safety eye, trim the felt in a circle around the safety eye' />
        </PatternStepSection>
        <PatternStepSection id='assembly' heading='Assembly'>
          <p className='mb-4'>You can assemble any way that works for you</p>
          <PatternStep text='Attach eyes and sew mouth' />
          <PatternStep text='Attach gills to each side of face' />
          <PatternStep text='Attach dorsal fin to center of back' />
          <PatternStep text='Attach legs' />
          <PatternStep text='Attach head to body leaving small opening to fill body with stuffing and any other secrets or surprises, closing hole after stuffing' />
          <PatternStep text='Hide all ends' />
        </PatternStepSection>
      </PatternLayout>
      <GoogleAnalytics gaId='G-3PNFXR7ZY5' />
    </>
  );
}
