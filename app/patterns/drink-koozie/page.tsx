import Link from "next/link";
import Footer from "../../layout/footer";
import styles from "../pattern.module.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import PatternNavigation from "../../../components/PatternNavigation";

export const metadata = {
  title: "Drink Koozie Crochet Pattern",
  description:
    "Free crochet pattern for a drink koozie. Excellent for beginner crocheters who like to drink",
};

export default function DrinkKoozie() {
  const patternSections = [
    { label: "Supplies Needed", anchor: "supplies" },
    { label: "Stitches & Techniques", anchor: "stitches" },
    { label: "Instructions", anchor: "instructions" },
    { label: "Base", anchor: "base" },
    { label: "Opening", anchor: "opening" },
    { label: "Body", anchor: "body" },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <div className="flex gap-8 w-full max-w-7xl">
        <PatternNavigation sections={patternSections} />
        <article className={styles.patternArticleContainer}>
          <h1 className={styles.patternTitle}>Drink Koozie</h1>
          <h2 className={styles.patternSubtitle}>Crochet Test Pattern</h2>
          <p className={`dark:text-gray-300 ${styles.patternTermsAndAuthor}`}>
            Written in US Terms by Alyssa Dannielle
          </p>
          <p className={styles.patternText}>
            Hi and thanks for checking out my drink koozie crochet pattern!
            Currently this pattern contains written instructions only. Keep
            checking back while i continue to add to this pattern based on
            tester feedback. To leave your feedback, please fill out{" "}
            <Link
              target="_blank"
              rel="noreferrer"
              className="text-blue-600"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdQM8cCneOQsnqAGG5sEcVOmwl5F4ZJVaNQ-LMNYLtjTM4KEQ/viewform?usp=preview"
            >
              this questionnaire!
            </Link>
          </p>
          <h2 id="supplies" className={styles.patternSectionHeading}>
            Supplies Needed:
          </h2>
          <ul className={styles.patternList}>
            <li>
              ~50g (approx 90 yds) medium weight yarn (I used Red Heart Super
              Saver) any color
            </li>
            <li>5mm (H) crochet hook</li>
            <li>Crochet notions:</li>
            <li className="ml-6">Stitch marker</li>
            <li className="ml-6">Scissors</li>
            <li className="ml-6">Tapestry needle (optional)</li>
          </ul>
          <h2 id="stitches" className={styles.patternSectionHeading}>
            Stitches & Techniques Used:
          </h2>
          <ul className={styles.patternList}>
            <li>Magic ring</li>
            <li>Chain - ch</li>
            <li>Half double crochet - hdc</li>
            <li>Half double crochet increase - hdcInc (2 hdc in 1 stitch)</li>
            <li>Single crochet - sc (optional)</li>
            <li>Invisible finish off (optional)</li>
          </ul>
          <h2 id="instructions" className={styles.patternSectionHeading}>
            Instructions:
          </h2>
          <h3 id="base" className={styles.patternSubsectionHeading}>
            Base:
          </h3>
          <ol className={styles.patternStepSet}>
            <li>
              <div className={styles.patternStep}>
                <span className="flex-1">
                  With 2 strands of yarn, work 8 hdc in a magic ring
                </span>
                <span
                  className={`dark:text-gray-400 ${`dark:text-gray-400 ${styles.patternStitchCount}`}`}
                >
                  ... 8 stitches
                </span>
              </div>
            </li>
            <li>
              <div className={styles.patternStep}>
                <span className="flex-1">
                  Continuing around, work 1 hdcInc in each stitch around to end
                </span>
                <span
                  className={`dark:text-gray-400 ${`dark:text-gray-400 ${styles.patternStitchCount}`}`}
                >
                  ... 16 stitches
                </span>
              </div>
            </li>
            <li>
              <div className={styles.patternStep}>
                <span className="flex-1">
                  Continuing around, {"{"}work 1 hdc in next stitch and 1 hdcInc
                  in following stitch{"}"} repeat instructions inside {"{"}
                  braces
                  {"}"} around to end
                </span>
                <span
                  className={`dark:text-gray-400 ${`dark:text-gray-400 ${styles.patternStitchCount}`}`}
                >
                  ... 24 stitches
                </span>
              </div>
            </li>
          </ol>
          <h3 id="opening" className={styles.patternSubsectionHeading}>
            Opening:
          </h3>
          <ol className={styles.patternStepSet}>
            <li>
              <div className={styles.patternStep}>
                <span className="flex-1">
                  Continuing around, {"{"}work 1 hdc in next 4 stitches, ch 8,
                  skip 8 hdc{"}"} repeat instructions inside {"{"}braces{"}"}{" "}
                  one more time to end
                </span>
                <span
                  className={`dark:text-gray-400 ${styles.patternStitchCount}`}
                >
                  ... 8 stitches, 16 chains
                </span>
              </div>
            </li>
            <li>
              <div className={styles.patternStep}>
                <span className="flex-1">
                  Continuing around, {"{"}work 1 hdc in next 4 stitches and 8
                  hdc in chain space{"}"} repeat instruction inside {"{"}braces
                  {"}"} one more time to end
                </span>
                <span
                  className={`dark:text-gray-400 ${styles.patternStitchCount}`}
                >
                  ... 24 stitches
                </span>
              </div>
            </li>
          </ol>
          <h3 id="body" className={styles.patternSubsectionHeading}>
            Body:
          </h3>
          <ol className={styles.patternStepSet}>
            <li>
              <div className={styles.patternStep}>
                <span className="flex-1">
                  Continuing around, work 1 hdc in each stitch around
                </span>
                <span
                  className={`dark:text-gray-400 ${styles.patternStitchCount}`}
                >
                  ... 24 stitches
                </span>
              </div>
            </li>
            <li>
              <div className={styles.patternStep}>
                <span className="flex-1">
                  Continuing around, repeat the previous round to desired height
                </span>
                <span
                  className={`dark:text-gray-400 ${styles.patternStitchCount}`}
                >
                  ... 24 stitches
                </span>
              </div>
            </li>
            <li>
              <div className={styles.patternStep}>
                <span className="flex-1">
                  (optional) If your final row ends in the middle of the koozie
                  and/or if you’d like a less abrupt finish, work single
                  crochets to one side of koozie before finishing off
                </span>
              </div>
            </li>
            <li>
              <div className={styles.patternStep}>
                <span className="flex-1">
                  Finish off (optional invisible finish) and weave in the tails.
                </span>
              </div>
            </li>
          </ol>
        </article>
      </div>
      <Footer />
      <GoogleAnalytics gaId="G-3PNFXR7ZY5" />
    </main>
  );
}
