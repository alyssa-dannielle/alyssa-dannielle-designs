"use client";

interface NavItem {
  label: string;
  anchor: string;
}

interface PatternNavigationProps {
  sections: NavItem[];
}

export default function PatternNavigation({
  sections,
}: PatternNavigationProps) {
  const scrollToSection = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-xs">
      <h2 className="text-lg font-semibold mb-3">Pattern Sections</h2>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.anchor}>
            <button
              onClick={() => scrollToSection(section.anchor)}
              className="text-left w-full px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
