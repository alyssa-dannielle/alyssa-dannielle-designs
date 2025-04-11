export const metadata = {
  title: "Drink Koozie Crochet Pattern",
  description:
    "Free crochet pattern for a drink koozie. Excellent for beginner crocheters who like to drink",
};

export default function DrinkKoozie() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <article className="max-w-4xl w-full">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2">
          Drink Koozie
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
          Crochet Test Pattern
        </h2>
        <p className="text-sm sm:text-md md:text-lg text-gray-700 mb-4">
          Written in US Terms by Alyssa Dannielle
        </p>
        <p className="text-sm sm:text-md md:text-lg mb-4">
          Hi and thanks for checking out my drink koozie crochet pattern!
          Currently this pattern contains written instructions only. Keep
          checking back while i continue to add to this pattern based on tester
          feedback. Interested in becoming a pattern tester? DM me on{" "}
          <a
            className="text-blue-600"
            href="https://www.instagram.com/alyssadannielle.design"
          >
            Instagram!
          </a>
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
          Supplies Needed:
        </h2>
        <ul className="list-disc space-y-2 text-sm sm:text-md md:text-lg ml-6">
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
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
          Stitches & Techniques Used:
        </h2>
        <ul className="list-disc space-y-2 text-sm sm:text-md md:text-lg ml-6">
          <li>Magic ring</li>
          <li>Chain - ch</li>
          <li>Half double crochet - hdc</li>
          <li>Half double crochet increase - hdcInc (2 hdc in 1 stitch)</li>
          <li>Single crochet - sc (optional)</li>
          <li>Invisible finish off (optional)</li>
        </ul>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
          Instructions:
        </h2>
        <h3 className="text-lg sm:text-xl mb:text-2xl font-medium mb-3">
          Base:
        </h3>
        <ol className="list-decimal space-y-4 text-sm sm:text-md md:text-lg ml-6">
          <li>
            <div className="flex flex-row justify-between items-center">
              <span className="flex-1">
                With 2 strands of yarn, work 8 hdc in a magic ring
              </span>
              <span className="text-gray-600 italic ml-4">... 8 stitches</span>
            </div>
          </li>
          <li>
            <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:items-center">
              <span className="sm:flex-1">
                Continuing around, work 1 hdcInc in each stitch around to end
              </span>
              <span className="text-gray-600 italic self-end sm:ml-4">
                ... 16 stitches
              </span>
            </div>
          </li>
        </ol>
      </article>
    </main>
  );
}
