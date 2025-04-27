// import { GoogleAnalytics } from '@next/third-parties/google';
// import PatternLayout from '../../components/PatternLayout';
// import PatternSchema from '../../../components/PatternSchema';
// import PatternIntroduction from '../../components/PatternIntroduction';
// import PatternSupplyList from '../../components/PatternSupplyList';
// import PatternTechniquesList from '../../components/PatternTechniquesList';
// import PatternSectionHeading from '../../../components/PatternSectionHeading';
// import PatternStepSection from '../../../components/PatternStepSection';
// import PatternStep from '../../../components/PatternStep';

// export const metadata = {
//   title: 'Crochet Pattern',
//   description: 'pattern description',
// };

// export default function PatternName() {
//   const patternSections = [
//     { label: 'Supplies Used', anchor: 'supplies' },
//     { label: 'Stitches & Techniques', anchor: 'stitches' },
//     { label: 'Instructions', anchor: 'instructions' },
//   ];

//   const supplies = [
//     { text: 'Your supplies here' },
//     { text: 'Crochet notions:' },
//     { text: 'Stitch marker', indent: true },
//     { text: 'Scissors', indent: true },
//   ];

//   const techniques = [
//     'Your techniques here',
//     'Chain - ch',
//     'Single crochet - sc',
//   ];

//   return (
//     <>
//       <PatternSchema
//         title='Pattern Title'
//         description='Pattern description'
//         tools={['5mm (H) crochet hook', 'Stitch marker', 'Scissors']}
//         supplies={['Your supplies here']}
//       />
//       <PatternLayout title='Pattern Title' sections={patternSections}>
//         <PatternIntroduction
//           author='Alyssa Dannielle'
//           formLink='google form link'
//           introText='Hi and thanks for checking out my {blank} crochet pattern! Currently this pattern contains written instructions only. Keep checking back while I continue to add to this pattern based on tester feedback. To leave your feedback, please fill out'
//         />
//         <PatternSupplyList supplies={supplies} />
//         <PatternTechniquesList techniques={techniques} />
//         <PatternSectionHeading id='instructions' heading='Instructions' />
//         <PatternStepSection id='anchor' heading='Label'>
//           <PatternStep text='some step' stitchCount='number of stitches' />
//         </PatternStepSection>
//       </PatternLayout>
//       <GoogleAnalytics gaId='G-3PNFXR7ZY5' />
//     </>
//   );
// }
