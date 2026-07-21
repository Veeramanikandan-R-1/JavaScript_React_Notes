const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

function ensureDir(dir) {
  fs.mkdirSync(path.join(root, dir), { recursive: true });
}

function writeFile(file, content) {
  const target = path.join(root, file);
  ensureDir(path.dirname(file));
  fs.writeFileSync(target, content.trimEnd() + "\n", "utf8");
}

function codeBlock(language, code) {
  return "```" + language + "\n" + code.trim() + "\n```";
}

function list(items) {
  return items.map((item) => `* ${item}`).join("\n");
}

function numbered(items) {
  return items.map((item, index) => `${index + 1}. ${item}`).join("\n");
}

function table(rows) {
  const header = "| Concept | Practical meaning |\n| ------- | ----------------- |";
  return [header, ...rows.map(([a, b]) => `| ${a} | ${b} |`)].join("\n");
}

function topicArea(topic) {
  if (topic.folder.includes("CSS")) return "CSS";
  if (topic.folder.includes("HTML")) return "HTML";
  if (topic.folder.includes("JavaScript")) return "JavaScript";
  if (topic.folder.includes("DOM")) return "Browser";
  if (topic.folder.includes("Async")) return "Async";
  if (topic.folder.includes("Tooling")) return "Tooling";
  if (topic.folder.includes("React") || topic.folder.includes("Routing") || topic.folder.includes("State")) return "React";
  if (topic.folder.includes("Testing")) return "Testing";
  if (topic.folder.includes("Performance")) return "Performance";
  if (topic.folder.includes("Accessibility")) return "Accessibility";
  if (topic.folder.includes("Interview")) return "Interview";
  if (topic.folder.includes("Capstone")) return "Capstone";
  return "Frontend";
}

const defaultInterview = (topic) => {
  const area = topicArea(topic);
  const answers = {
    HTML: [
      `It means choosing markup that describes meaning first: headings for hierarchy, landmarks for page regions, labels for controls, and native elements for behavior.`,
      `The browser parses markup into the DOM and accessibility tree, so incorrect HTML can create bugs even when the screen looks visually correct.`,
      `I check DOM order, headings, labels, alt text, link/button purpose, form submission, keyboard navigation, and whether the page still works with limited JavaScript.`,
    ],
    CSS: [
      `I start from the layout requirement, decide whether normal flow, flexbox, grid, or positioning fits, then use the cascade deliberately.`,
      `The browser resolves cascade and computed styles, calculates boxes, lays them out, paints, and composites. A CSS bug usually lives in one of those steps.`,
      `I inspect the element, check computed styles, box model, active media/container queries, overwritten rules, overflow, and stacking contexts.`,
    ],
    JavaScript: [
      `I explain the value model, execution order, scope, references, and failure cases before reaching for syntax.`,
      `JavaScript runs synchronously until the stack clears; async work resumes later through host scheduling, so timing and shared state matter.`,
      `I reproduce the input, add a breakpoint, inspect scope and call stack, verify object identity, and test the edge case that failed.`,
    ],
    Browser: [
      `It is about using the web platform directly: DOM, events, forms, storage, security boundaries, and browser rendering.`,
      `Browser APIs are live and stateful, so code must clean up listeners, avoid layout thrashing, preserve accessibility, and respect security limits.`,
      `I inspect DOM state, event propagation, network/security errors, storage values, accessibility names, and performance traces.`,
    ],
    Async: [
      `I model async work as explicit states: idle, loading, success, empty, error, cancelled, and stale.`,
      `Promises schedule continuations as microtasks, while timers and user events are tasks. HTTP failures need explicit status handling because fetch does not reject on 4xx/5xx.`,
      `I check request order, cancellation, stale updates, retry rules, idempotency, and how the UI behaves when the network is slow or offline.`,
    ],
    Tooling: [
      `Tooling should make development faster and production safer: install, run, lint, test, bundle, preview, and deploy reliably.`,
      `A build tool follows imports, transforms files, splits chunks, rewrites assets, and emits optimized files. Dev mode and production mode can behave differently.`,
      `I inspect scripts, dependency versions, lockfiles, source maps, environment variables, build output, and CI logs.`,
    ],
    React: [
      `React code should be understood as pure rendering plus explicit state and effects. Components describe UI; React decides how to update the DOM.`,
      `State updates schedule rendering; React reconciles element trees using component type and keys, then commits DOM changes and runs effects after commit.`,
      `I check props, state ownership, derived values, keys, effect dependencies, memoization assumptions, and whether server state is being treated as UI state.`,
    ],
    Testing: [
      `I test behavior that users and business rules depend on, using the smallest test level that gives confidence.`,
      `Unit tests are fast for pure logic, component tests check interaction and accessibility, and E2E tests protect critical journeys in a real browser.`,
      `I avoid brittle implementation assertions and prefer accessible queries, realistic events, and clear setup data.`,
    ],
    Performance: [
      `Performance work starts with measurement: Web Vitals, DevTools traces, bundle analysis, React Profiler, and real-user metrics.`,
      `The bottleneck might be network, parsing, JavaScript execution, rendering, images, fonts, server latency, or too many React renders.`,
      `I optimize the biggest measured issue first and protect it with a budget, test, or monitoring signal.`,
    ],
    Accessibility: [
      `Accessibility means the feature works with keyboard, screen readers, zoom, reduced motion, color contrast needs, and different input devices.`,
      `Browsers expose semantics through the accessibility tree. Bad markup, missing labels, broken focus, and incorrect ARIA create real blockers.`,
      `I test keyboard flow, focus order, accessible names, labels, announcements, color contrast, motion preferences, and error recovery.`,
    ],
    Capstone: [
      `A capstone should show complete frontend judgment: requirements, component design, state, data fetching, forms, routing, accessibility, tests, and performance.`,
      `A reviewer should be able to run it, understand the architecture, see non-happy-path states, and inspect clean code.`,
      `I would evaluate it by user journeys, responsiveness, error handling, accessibility, maintainability, and whether the README explains tradeoffs.`,
    ],
  };

  const [a1, a2, a3] = answers[area] || answers.JavaScript;
  return [
    {
      q: `How would you explain ${topic.title} in a real project?`,
      a: a1,
    },
    {
      q: `What happens internally when ${topic.title} is involved?`,
      a: a2,
    },
    {
      q: `How do you debug issues related to ${topic.title}?`,
      a: a3,
    },
    {
      q: `What is the biggest production risk with ${topic.title}?`,
      a: `The biggest risk is building something that works for the demo state but fails with real content, slow networks, accessibility needs, errors, or future changes.`,
    },
    {
      q: `What should a senior engineer look for in code review?`,
      a: `They should check the mental model, edge cases, accessibility, performance cost, naming, state ownership, test coverage, and whether the simpler native/platform option was considered.`,
    },
  ];
};

const topics = [
  {
    folder: "1_Foundation",
    file: "a_frontend_engineering_roadmap.md",
    title: "Frontend Engineering Roadmap",
    focus: "how HTML, CSS, JavaScript, React, tooling, accessibility, and performance fit together in professional frontend work",
    fundamentals: [
      "Frontend engineering is the discipline of building user interfaces that are correct, accessible, fast, maintainable, and pleasant to use.",
      "HTML gives structure and meaning, CSS controls presentation, JavaScript controls behavior, and React organizes interactive UI into reusable components.",
      "A strong frontend developer understands browser behavior, not only framework syntax.",
      "Production frontend work includes debugging, testing, deployment, performance measurement, accessibility, and collaboration with designers and backend engineers.",
    ],
    concepts: [
      ["HTML", "Use semantic markup so browsers, users, search engines, and assistive technologies understand the page."],
      ["CSS", "Build robust layouts and visual systems that survive real content and responsive screens."],
      ["JavaScript", "Model data, events, async work, and application behavior."],
      ["React", "Compose UI from components while managing state, effects, rendering, and data flow."],
      ["Tooling", "Use package managers, bundlers, linters, formatters, and test runners to keep development reliable."],
      ["Quality", "Ship interfaces that work for keyboard users, slow networks, real errors, and future maintainers."],
    ],
    internals: [
      "The browser parses HTML into the DOM, CSS into the CSSOM, combines them into a render tree, lays out boxes, paints pixels, and composites layers.",
      "JavaScript runs on the main thread in the browser, so expensive work can block input and rendering.",
      "React creates a tree of elements, reconciles changes, and commits DOM updates when state or props change.",
    ],
    mistakes: [
      "Jumping into React before understanding forms, events, layout, and browser APIs.",
      "Treating CSS as trial and error instead of learning cascade, layout algorithms, and responsive constraints.",
      "Ignoring accessibility until the end of a project.",
      "Optimizing too early without measuring actual user pain.",
    ],
    practices: [
      "Learn by building small features end to end: markup, styling, behavior, error states, tests, and refactoring.",
      "Keep browser DevTools open and inspect the DOM, network requests, layout, accessibility tree, and performance profile.",
      "Prefer boring, readable code over clever abstractions.",
      "Make every component work with loading, empty, error, long text, and small-screen states.",
    ],
    example: codeBlock("text", `
Learning path:

HTML semantics
CSS layout
JavaScript fundamentals
DOM and browser APIs
Async and networking
Modern tooling
React components and hooks
State, routing, forms, testing
Performance, accessibility, SEO
Projects and interview practice
`),
    scenarios: [
      "Building a dashboard where tables, forms, routing, authentication, and loading states all interact.",
      "Debugging a page that looks fine on desktop but breaks on mobile due to fixed widths.",
      "Explaining to an interviewer how React state updates eventually become DOM updates.",
    ],
    exercises: [
      {
        task: "Create a personal checklist of 10 frontend fundamentals you want to master.",
        solution: "Include semantic HTML, forms, box model, flexbox, grid, closures, promises, fetch, React hooks, testing, accessibility, and performance.",
      },
    ],
  },
  {
    folder: "1_Foundation",
    file: "b_how_the_web_works.md",
    title: "How the Web Works",
    focus: "the request-response path from URL entry to pixels on screen",
    fundamentals: [
      "The web is built on clients, servers, URLs, HTTP, HTML documents, assets, and browser rendering.",
      "A browser is not just a viewer; it is a runtime with networking, parsing, rendering, storage, security, and JavaScript execution.",
      "Frontend decisions affect network cost, rendering speed, caching, accessibility, and security.",
    ],
    concepts: [
      ["URL", "Identifies a resource and includes protocol, host, path, query string, and fragment."],
      ["DNS", "Resolves a domain name to an IP address."],
      ["HTTP", "Defines request methods, response status codes, headers, caching, cookies, and content negotiation."],
      ["HTML response", "The initial document that references CSS, JavaScript, images, fonts, and other assets."],
      ["Rendering pipeline", "The browser parses, styles, lays out, paints, and composites the page."],
    ],
    internals: [
      "After navigation, the browser performs DNS lookup, opens a connection, sends an HTTP request, receives bytes, and starts parsing HTML as it streams.",
      "CSS can block rendering because the browser needs styles to calculate layout correctly.",
      "JavaScript can block parsing unless loaded with `defer`, `async`, modules, or moved away from critical parsing paths.",
      "Caching and compression dramatically change user-perceived speed.",
    ],
    mistakes: [
      "Loading large scripts in the document head without understanding render blocking.",
      "Treating all status codes as success or failure without nuance.",
      "Forgetting that network latency matters even when local development feels instant.",
      "Shipping pages that rely on JavaScript before meaningful HTML appears.",
    ],
    practices: [
      "Use `defer` or module scripts for most application JavaScript.",
      "Inspect the Network panel for request waterfalls, cache behavior, payload sizes, and failed requests.",
      "Return correct HTTP status codes and meaningful error bodies from APIs.",
      "Prioritize critical CSS, optimized assets, and useful first content.",
    ],
    example: codeBlock("html", `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/styles.css">
    <script type="module" src="/src/main.js"></script>
    <title>Web App</title>
  </head>
  <body>
    <main id="root">Loading...</main>
  </body>
</html>
`),
    scenarios: [
      "A page is blank for three seconds because a blocking script delays parsing.",
      "A CSS file is not updating because the browser serves it from cache.",
      "An API returns 200 with an error payload, making client-side error handling confusing.",
    ],
    exercises: [
      {
        task: "Open any website and write the sequence of document, CSS, JS, image, and API requests you see.",
        solution: "Use DevTools Network, sort by start time, and note which files block rendering or arrive late.",
      },
    ],
  },
  {
    folder: "1_Foundation",
    file: "c_git_project_workflow.md",
    title: "Git and Frontend Project Workflow",
    focus: "working safely in frontend codebases with branches, commits, reviews, and small changes",
    fundamentals: [
      "Git tracks source history and makes collaboration possible through commits, branches, diffs, merges, and pull requests.",
      "Frontend work often touches many files, so small commits and clear diffs protect reviewers from accidental regressions.",
      "A clean workflow is part of engineering quality, not administration.",
    ],
    concepts: [
      ["Working tree", "Files as they currently exist on disk."],
      ["Staging area", "Selected changes prepared for the next commit."],
      ["Commit", "A snapshot with a message explaining why the change exists."],
      ["Branch", "A movable line of work for a feature, bug fix, or experiment."],
      ["Pull request", "A review unit that explains the problem, solution, tests, and risks."],
    ],
    internals: [
      "Git stores content-addressed objects and tracks snapshots, not only line-by-line changes.",
      "Merge conflicts happen when two branches change overlapping parts of the same file history.",
      "Lockfiles are important because they make dependency installation reproducible across machines and CI.",
    ],
    mistakes: [
      "Mixing formatting, refactors, and behavior changes in one large commit.",
      "Ignoring generated lockfile changes after dependency updates.",
      "Using force pushes on shared branches without coordination.",
      "Committing secrets, `.env` files, screenshots with sensitive data, or build output.",
    ],
    practices: [
      "Run tests, linting, type checks, and a quick manual browser pass before opening a PR.",
      "Keep PR descriptions focused on user impact, implementation notes, and verification.",
      "Commit related changes together and leave unrelated cleanup for another branch.",
      "Use `.gitignore` for dependencies, build output, logs, local env files, and editor artifacts.",
    ],
    example: codeBlock("bash", `
git status
git switch -c feature/order-filter
git add src/components/OrderFilter.jsx src/components/OrderFilter.css
git commit -m "Add order filter controls"
git push -u origin feature/order-filter
`),
    scenarios: [
      "Reviewing a UI change where the screenshot confirms behavior better than prose.",
      "Separating a component refactor from a feature so regressions are easier to isolate.",
      "Resolving a package-lock conflict after two branches update dependencies.",
    ],
    exercises: [
      {
        task: "Create a branch, make a tiny README edit, view the diff, and revert your own edit.",
        solution: "Use `git switch -c practice`, `git diff`, then restore only the file you changed.",
      },
    ],
  },
  {
    folder: "1_Foundation",
    file: "d_browser_devtools_debugging.md",
    title: "Browser DevTools and Debugging",
    focus: "using DevTools to diagnose layout, JavaScript, network, performance, and accessibility issues",
    fundamentals: [
      "DevTools is the frontend engineer's microscope.",
      "Good debugging means forming a hypothesis, observing runtime behavior, and changing one variable at a time.",
      "Most UI bugs become simpler when inspected at the DOM, CSS, network, console, or performance level.",
    ],
    concepts: [
      ["Elements panel", "Inspect DOM, computed styles, layout boxes, event listeners, and accessibility attributes."],
      ["Console", "Evaluate expressions, view logs, inspect errors, and test assumptions quickly."],
      ["Sources", "Set breakpoints, step through code, inspect closures, and debug async stacks."],
      ["Network", "Inspect requests, responses, headers, payloads, caching, timing, and failed calls."],
      ["Performance", "Record long tasks, rendering work, layout shifts, scripting cost, and frame drops."],
      ["Lighthouse", "Get directional audits for performance, accessibility, SEO, and best practices."],
    ],
    internals: [
      "The Computed tab shows final CSS after cascade, inheritance, specificity, and default styles are resolved.",
      "Breakpoints pause JavaScript execution before the next statement, allowing inspection of scope and call stack.",
      "Network timing reveals whether a delay comes from DNS, connection, server response, download, or client processing.",
    ],
    mistakes: [
      "Debugging by random edits instead of isolating the failing layer.",
      "Reading only console errors while ignoring network failures and failed source maps.",
      "Assuming CSS did not apply without checking specificity and overwritten rules.",
      "Testing only with fast network and wide desktop viewport.",
    ],
    practices: [
      "Use device emulation, throttling, and disabled cache during development investigations.",
      "Prefer breakpoints and watch expressions over excessive temporary logs.",
      "Inspect accessibility names for buttons, inputs, images, dialogs, and landmarks.",
      "Record a performance trace before optimizing expensive interactions.",
    ],
    example: codeBlock("js", `
// Debug pattern: isolate input, state, and rendered output.
function handleSubmit(event) {
  event.preventDefault();
  debugger;
  const form = new FormData(event.currentTarget);
  console.log(Object.fromEntries(form));
}
`),
    scenarios: [
      "A click handler does not run because a transparent overlay intercepts pointer events.",
      "A request fails due to CORS, visible in response headers and console.",
      "A flex item overflows because its default `min-width: auto` prevents shrinking.",
    ],
    exercises: [
      {
        task: "Use DevTools to inspect why a CSS rule is not applying.",
        solution: "Open Elements, select the node, inspect Styles and Computed, then identify the winning declaration.",
      },
    ],
  },
  {
    folder: "2_HTML",
    file: "a_html_introduction.md",
    title: "HTML Introduction",
    focus: "HTML as semantic document structure rather than visual decoration",
    fundamentals: [
      "HTML stands for HyperText Markup Language.",
      "HTML describes the structure and meaning of content on a web page.",
      "Browsers use HTML to build the DOM, assistive technologies use it to understand purpose, and search engines use it to interpret content.",
      "HTML is forgiving, but professional HTML should be intentional, valid, accessible, and maintainable.",
    ],
    concepts: [
      ["Element", "A meaningful unit such as `p`, `button`, `main`, `img`, or `form`."],
      ["Attribute", "Extra information attached to an element, such as `href`, `alt`, `type`, or `aria-label`."],
      ["Nesting", "The parent-child structure that creates the document tree."],
      ["Semantics", "The purpose conveyed by choosing the correct element."],
      ["DOM", "The browser's live object model created from parsed HTML."],
    ],
    internals: [
      "The browser tokenizes HTML, builds nodes, handles invalid nesting with parser rules, and exposes the result as the DOM.",
      "Default browser styles make headings bold, lists indented, links blue, and form controls interactive even before CSS.",
      "Semantic elements expose built-in roles and behavior to accessibility APIs.",
    ],
    mistakes: [
      "Using `div` and `span` for everything.",
      "Using links for actions or buttons for navigation.",
      "Leaving images without useful `alt` text.",
      "Skipping heading levels for visual size instead of document structure.",
    ],
    practices: [
      "Start with meaningful HTML before adding CSS or JavaScript.",
      "Use one `h1` that describes the page and follow a logical heading hierarchy.",
      "Use native controls before custom controls.",
      "Validate important pages and test keyboard navigation early.",
    ],
    example: codeBlock("html", `
<article>
  <header>
    <h1>Order Confirmation</h1>
    <p>Your order was placed successfully.</p>
  </header>

  <section aria-labelledby="summary-title">
    <h2 id="summary-title">Summary</h2>
    <p>3 items will arrive tomorrow.</p>
  </section>

  <a href="/orders/123">View order details</a>
</article>
`),
    scenarios: [
      "A screen reader user navigates headings to understand the page quickly.",
      "A browser submits a form even when JavaScript fails.",
      "Search engines infer page structure from headings, links, and metadata.",
    ],
    exercises: [
      {
        task: "Create a semantic HTML article with title, author, publication date, sections, and related links.",
        solution: "Use `article`, `header`, `time`, `section`, `h2`, `p`, and `nav` or `aside` for related links.",
      },
    ],
  },
  {
    folder: "2_HTML",
    file: "b_document_structure_doctype_head_body.md",
    title: "Document Structure, Doctype, Head, and Body",
    focus: "the minimal correct HTML document and why each part exists",
    fundamentals: [
      "Every HTML page should declare the document type, language, metadata, title, and body content.",
      "`head` contains metadata and resources for the browser; `body` contains content users interact with.",
      "The viewport meta tag is required for responsive behavior on mobile devices.",
    ],
    concepts: [
      ["`<!doctype html>`", "Enables standards mode so the browser uses modern layout behavior."],
      ["`html lang`", "Declares document language for screen readers, translation, and search engines."],
      ["`meta charset`", "Defines character encoding, usually UTF-8."],
      ["`title`", "Shown in browser tabs, bookmarks, search results, and assistive tech context."],
      ["Viewport", "Controls how CSS pixels map to mobile device screens."],
    ],
    internals: [
      "Without a doctype, browsers may enter quirks mode and emulate older layout bugs.",
      "The parser may infer missing `html`, `head`, and `body` elements, but relying on that weakens maintainability.",
      "The browser can start fetching linked CSS, fonts, and scripts while parsing the document.",
    ],
    mistakes: [
      "Forgetting `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">`.",
      "Using duplicate titles across many pages.",
      "Putting visible page content in the `head`.",
      "Loading non-critical scripts before the document can render useful content.",
    ],
    practices: [
      "Use UTF-8 and set language explicitly.",
      "Keep titles short, specific, and unique.",
      "Load CSS in `head` and application scripts as modules or with `defer`.",
      "Include useful metadata for description, icons, and sharing only when needed.",
    ],
    example: codeBlock("html", `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Frontend notes for HTML, CSS, JavaScript, and React.">
    <title>Frontend Notes</title>
    <link rel="stylesheet" href="/styles.css">
    <script type="module" src="/main.js"></script>
  </head>
  <body>
    <main>
      <h1>Frontend Notes</h1>
    </main>
  </body>
</html>
`),
    scenarios: [
      "A mobile layout appears zoomed out because viewport metadata is missing.",
      "A screen reader pronounces content incorrectly because `lang` is missing.",
      "A legacy page behaves strangely because it renders in quirks mode.",
    ],
    exercises: [
      {
        task: "Write a complete HTML document skeleton for a product page.",
        solution: "Include doctype, `html lang`, charset, viewport, description, title, linked CSS, and semantic body content.",
      },
    ],
  },
  {
    folder: "2_HTML",
    file: "c_semantic_html_landmarks.md",
    title: "Semantic HTML and Landmarks",
    focus: "choosing elements that express page structure and interactive purpose",
    fundamentals: [
      "Semantic HTML means using elements according to their meaning, not appearance.",
      "Landmarks help users navigate page regions quickly.",
      "Native elements include built-in keyboard behavior, roles, states, and browser integrations.",
    ],
    concepts: [
      ["`header`", "Introductory content for a page or section."],
      ["`nav`", "Major navigation links."],
      ["`main`", "The primary unique content of a page."],
      ["`section`", "A thematic group of content, usually with a heading."],
      ["`article`", "A self-contained composition such as a post, card, or news item."],
      ["`aside`", "Tangential or complementary content."],
      ["`button`", "An action."],
      ["`a`", "Navigation to another URL or page location."],
    ],
    internals: [
      "Browsers map semantic elements to accessibility roles where appropriate.",
      "A semantic button participates in keyboard activation, focus order, disabled state, and form behavior.",
      "Landmarks are exposed to assistive technologies so users can jump between page regions.",
    ],
    mistakes: [
      "Using `div role=\"button\"` instead of `button`.",
      "Using clickable `span` elements without keyboard support.",
      "Creating many unlabeled `nav` elements that are hard to distinguish.",
      "Using `section` without a heading when a plain `div` would be clearer.",
    ],
    practices: [
      "Use native elements first and ARIA only when native semantics cannot express the design.",
      "Give repeated landmarks accessible labels, such as `aria-label=\"Account\"`.",
      "Keep heading order meaningful even if CSS changes visual size.",
      "Use `main` once per page.",
    ],
    example: codeBlock("html", `
<header>
  <a href="/">Shop</a>
  <nav aria-label="Primary">
    <a href="/products">Products</a>
    <a href="/orders">Orders</a>
  </nav>
</header>

<main>
  <h1>Orders</h1>
  <section aria-labelledby="open-orders">
    <h2 id="open-orders">Open orders</h2>
  </section>
</main>
`),
    scenarios: [
      "A keyboard user tabs through a page and reaches every interactive control in a logical order.",
      "A screen reader user jumps directly to `main` instead of hearing navigation repeatedly.",
      "A custom styled button still behaves correctly because it is a real `button`.",
    ],
    exercises: [
      {
        task: "Convert a `div`-heavy layout into semantic HTML.",
        solution: "Replace layout-only wrappers carefully with `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `button`, and `a` where they match purpose.",
      },
    ],
  },
  {
    folder: "2_HTML",
    file: "d_text_links_images_lists.md",
    title: "Text, Links, Images, and Lists",
    focus: "content primitives that carry most real web pages",
    fundamentals: [
      "Text elements give meaning and hierarchy to content.",
      "Links connect documents and resources.",
      "Images need dimensions, responsive behavior, and alternative text.",
      "Lists should be used for actual collections of related items.",
    ],
    concepts: [
      ["Headings", "Create document outline and scanning structure."],
      ["Paragraphs", "Represent blocks of prose."],
      ["Emphasis", "`em` and `strong` express meaning, not just italics or bold style."],
      ["Links", "`href` makes an anchor navigable and keyboard-focusable."],
      ["Images", "`src`, `alt`, `width`, `height`, `loading`, and `srcset` control meaning and loading."],
      ["Lists", "`ul`, `ol`, and `dl` communicate grouped content."],
    ],
    internals: [
      "Images without known dimensions can cause layout shift when they load.",
      "An anchor without `href` is not a normal link.",
      "Assistive technologies use link text out of context, so vague labels like `click here` are weak.",
    ],
    mistakes: [
      "Using headings for font size instead of structure.",
      "Leaving decorative images with descriptive alt text that adds noise.",
      "Using `target=\"_blank\"` without considering user context and security.",
      "Building menus with random `div`s instead of lists or navigation links.",
    ],
    practices: [
      "Write link text that names the destination or action.",
      "Use empty `alt=\"\"` for decorative images and meaningful alt text for informative images.",
      "Provide `width` and `height` on images when possible.",
      "Use `rel=\"noopener noreferrer\"` with external new-tab links.",
    ],
    example: codeBlock("html", `
<section aria-labelledby="resources-title">
  <h2 id="resources-title">Learning resources</h2>
  <p>Start with the official documentation before copying snippets.</p>

  <ul>
    <li><a href="/guides/html-semantics">HTML semantics guide</a></li>
    <li><a href="/guides/css-layout">CSS layout guide</a></li>
  </ul>

  <img
    src="/images/layout-example.png"
    alt="Dashboard layout showing header, sidebar, content, and footer regions"
    width="960"
    height="540"
    loading="lazy">
</section>
`),
    scenarios: [
      "A search result shows better snippets because headings and link text are clear.",
      "A page avoids layout shift because images declare dimensions.",
      "A screen reader user understands an image because the alt text explains its information.",
    ],
    exercises: [
      {
        task: "Write an accessible resource list with three links and one informative image.",
        solution: "Use a heading, `ul`, descriptive anchors, and an `img` with useful alt text and dimensions.",
      },
    ],
  },
  {
    folder: "2_HTML",
    file: "e_forms_inputs_validation.md",
    title: "Forms, Inputs, and Validation",
    focus: "building reliable, accessible user input flows",
    fundamentals: [
      "Forms are the primary way users send data to applications.",
      "Native form controls provide labels, keyboard behavior, validation, autofill, mobile keyboards, and submission behavior.",
      "Client-side validation improves UX but server-side validation is still required for correctness and security.",
    ],
    concepts: [
      ["`form`", "Groups controls and defines submission behavior."],
      ["`label`", "Gives an input an accessible name and larger click target."],
      ["Input type", "Controls keyboard, validation, and browser UI."],
      ["Constraint validation", "Built-in validation from attributes like `required`, `minlength`, `pattern`, and `type`."],
      ["Fieldset", "Groups related controls, especially radio buttons and checkboxes."],
      ["Error messaging", "Explains what failed and how to fix it."],
    ],
    internals: [
      "A label connects to a control through `for` and `id`, or by wrapping the control.",
      "On submit, successful controls are serialized by their `name` attributes.",
      "Browsers expose validation state through pseudo-classes and the Constraint Validation API.",
    ],
    mistakes: [
      "Using placeholder text as the only label.",
      "Missing `name` attributes, causing submitted form data to be empty.",
      "Using `type=\"text\"` for email, tel, number, date, or password fields.",
      "Showing error text visually but not connecting it to the input for assistive tech.",
    ],
    practices: [
      "Use explicit labels for every input.",
      "Choose the most specific input type.",
      "Show errors near the relevant field and preserve user input after failed submission.",
      "Use `aria-describedby` to connect help and error text.",
      "Validate on submit, then optionally validate touched fields during editing.",
    ],
    example: codeBlock("html", `
<form action="/signup" method="post">
  <div>
    <label for="email">Email</label>
    <input id="email" name="email" type="email" required autocomplete="email">
  </div>

  <div>
    <label for="password">Password</label>
    <p id="password-help">Use at least 8 characters.</p>
    <input
      id="password"
      name="password"
      type="password"
      minlength="8"
      required
      autocomplete="new-password"
      aria-describedby="password-help">
  </div>

  <button type="submit">Create account</button>
</form>
`),
    scenarios: [
      "Mobile users get the email keyboard because `type=\"email\"` is used.",
      "A backend receives no value because the input has an `id` but no `name`.",
      "A screen reader announces help text because `aria-describedby` connects it.",
    ],
    exercises: [
      {
        task: "Build a login form with email, password, remember-me checkbox, and submit button.",
        solution: "Use `form`, explicit labels, `type=\"email\"`, `type=\"password\"`, proper `name` values, `autocomplete`, and `button type=\"submit\"`.",
      },
    ],
  },
  {
    folder: "2_HTML",
    file: "f_tables_structured_data.md",
    title: "Tables and Structured Data",
    focus: "using tables for tabular information without damaging accessibility",
    fundamentals: [
      "Tables are for tabular data, not page layout.",
      "A good table communicates relationships between headers and cells.",
      "Complex tables need extra care because they are harder on small screens and assistive technologies.",
    ],
    concepts: [
      ["`table`", "Container for tabular data."],
      ["`caption`", "Accessible table title or summary."],
      ["`thead`, `tbody`, `tfoot`", "Logical row grouping."],
      ["`th`", "Header cell."],
      ["`scope`", "Declares whether a header applies to a row or column."],
      ["Responsive table", "A strategy for preserving meaning on small screens."],
    ],
    internals: [
      "Screen readers can associate `th` cells with `td` cells when structure and `scope` are correct.",
      "Table layout algorithms consider cell content, column widths, and available space.",
      "Using tables for layout creates confusing reading order and rigid responsive behavior.",
    ],
    mistakes: [
      "Using tables for cards, grids, or general page layout.",
      "Omitting captions or headers for data-heavy tables.",
      "Breaking table semantics with invalid nested elements.",
      "Making wide tables overflow without a planned mobile experience.",
    ],
    practices: [
      "Use tables for comparison, financial data, reports, schedules, and records.",
      "Include a concise `caption` when the table needs context.",
      "Use `scope=\"col\"` and `scope=\"row\"` for simple tables.",
      "Use horizontal scrolling or transformed card layouts thoughtfully on small screens.",
    ],
    example: codeBlock("html", `
<table>
  <caption>Monthly subscription usage</caption>
  <thead>
    <tr>
      <th scope="col">Plan</th>
      <th scope="col">Users</th>
      <th scope="col">Storage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Team</th>
      <td>12</td>
      <td>80 GB</td>
    </tr>
  </tbody>
</table>
`),
    scenarios: [
      "A finance report needs real table semantics for accurate screen reader navigation.",
      "A pricing comparison works better as a table than disconnected cards.",
      "A mobile dashboard needs horizontal scroll with sticky first column.",
    ],
    exercises: [
      {
        task: "Create a course schedule table with day, topic, duration, and status.",
        solution: "Use `caption`, `thead`, `tbody`, column headers, and row data cells.",
      },
    ],
  },
  {
    folder: "2_HTML",
    file: "g_media_iframe_canvas_svg_basics.md",
    title: "Media, iframe, Canvas, and SVG Basics",
    focus: "embedding visual and external content responsibly",
    fundamentals: [
      "HTML can embed images, audio, video, external pages, canvas drawings, and SVG graphics.",
      "Embedded media affects performance, accessibility, privacy, security, and layout.",
      "Use the simplest native element that matches the content.",
    ],
    concepts: [
      ["`picture`", "Selects image sources for art direction or format fallback."],
      ["`video`", "Embeds playable video with controls, captions, and sources."],
      ["`audio`", "Embeds playable sound."],
      ["`iframe`", "Embeds another browsing context."],
      ["`canvas`", "Bitmap drawing surface controlled by JavaScript."],
      ["SVG", "Vector graphics that can be inline, linked, styled, and accessible."],
    ],
    internals: [
      "Media resources can be large and should be lazy-loaded or deferred when below the fold.",
      "Iframes isolate another page but still carry security and performance concerns.",
      "Canvas pixels are not semantic; accessible alternatives must be provided when content matters.",
    ],
    mistakes: [
      "Autoplaying media with sound.",
      "Embedding third-party iframes without sandboxing or performance consideration.",
      "Using canvas for text-heavy UI that should be HTML.",
      "Forgetting captions or transcripts for meaningful audio/video.",
    ],
    practices: [
      "Provide captions for videos and transcripts when content requires them.",
      "Use `loading=\"lazy\"` for below-the-fold iframes and images.",
      "Add `title` to iframes.",
      "Use SVG for icons and resolution-independent diagrams; use images for photographic content.",
    ],
    example: codeBlock("html", `
<video controls width="640" poster="/media/intro-poster.jpg">
  <source src="/media/intro.webm" type="video/webm">
  <source src="/media/intro.mp4" type="video/mp4">
  <track kind="captions" src="/media/intro-en.vtt" srclang="en" label="English">
</video>

<iframe
  src="https://example.com/report"
  title="Quarterly report preview"
  loading="lazy"
  sandbox="allow-scripts allow-same-origin">
</iframe>
`),
    scenarios: [
      "A product page uses `picture` to serve WebP/AVIF with fallback.",
      "A tutorial page includes captions so video content remains accessible.",
      "An embedded dashboard uses iframe sandboxing to reduce risk.",
    ],
    exercises: [
      {
        task: "Embed a responsive video with controls and captions.",
        solution: "Use `video`, multiple `source` elements, a `track` for captions, and CSS to constrain width.",
      },
    ],
  },
  {
    folder: "2_HTML",
    file: "h_html_accessibility_basics.md",
    title: "HTML Accessibility Basics",
    focus: "the accessibility wins that come from correct HTML",
    fundamentals: [
      "Accessibility starts with semantic HTML.",
      "Most accessible UI is built by choosing the right native elements, labels, text alternatives, heading order, and focus behavior.",
      "ARIA can help when semantics are missing, but it cannot fix poor interaction design by itself.",
    ],
    concepts: [
      ["Accessible name", "The label or text assistive tech announces for a control."],
      ["Focus order", "The sequence keyboard users move through interactive elements."],
      ["Alt text", "Text alternative for meaningful images."],
      ["Landmark", "A major page region such as navigation or main content."],
      ["ARIA", "Attributes that add semantics when native HTML is not enough."],
    ],
    internals: [
      "Browsers build an accessibility tree from DOM semantics, labels, roles, states, and relationships.",
      "A button's accessible name can come from text content, `aria-label`, or associated labeling patterns.",
      "Elements hidden with `display: none` are removed from the accessibility tree.",
    ],
    mistakes: [
      "Adding ARIA roles that conflict with native semantics.",
      "Removing focus outlines without a visible replacement.",
      "Using icons as buttons without accessible names.",
      "Creating custom controls that do not support keyboard interaction.",
    ],
    practices: [
      "Use semantic HTML before ARIA.",
      "Test with only the keyboard.",
      "Ensure every interactive control has a visible label or accessible name.",
      "Use headings and landmarks to make the page navigable.",
      "Keep visual order and DOM order aligned.",
    ],
    example: codeBlock("html", `
<button type="button" aria-label="Close dialog">
  <span aria-hidden="true">x</span>
</button>

<label for="search">Search products</label>
<input id="search" name="search" type="search">
`),
    scenarios: [
      "An icon-only close button needs `aria-label` because there is no visible text.",
      "A modal must move focus inside the dialog and return it when closed.",
      "A skip link helps keyboard users bypass repeated navigation.",
    ],
    exercises: [
      {
        task: "Audit a small page for labels, headings, alt text, landmarks, and keyboard access.",
        solution: "Fix missing labels, unclear links, skipped headings, unlabeled buttons, and inaccessible custom controls.",
      },
    ],
  },
  {
    folder: "2_HTML",
    file: "i_seo_metadata_open_graph.md",
    title: "SEO Metadata and Open Graph",
    focus: "making pages understandable in search, browser chrome, and social sharing",
    fundamentals: [
      "SEO starts with useful content, crawlable links, semantic HTML, performance, and accessible structure.",
      "Metadata improves how pages appear in tabs, search results, bookmarks, and shared previews.",
      "Open Graph and Twitter card metadata control social previews.",
    ],
    concepts: [
      ["Title", "The page label shown in tabs and often search results."],
      ["Description", "A concise summary that may appear in search snippets."],
      ["Canonical URL", "Preferred URL when duplicate or similar pages exist."],
      ["Open Graph", "Metadata used by many social platforms for rich previews."],
      ["Structured data", "Machine-readable information that can support rich search results."],
    ],
    internals: [
      "Search crawlers parse HTML, links, headings, metadata, canonical hints, and page content.",
      "Client-rendered pages can be indexed, but server-rendered or pre-rendered content is often more reliable for SEO-critical pages.",
      "Social preview bots commonly read initial HTML metadata and may not execute application JavaScript fully.",
    ],
    mistakes: [
      "Using the same title and description for every route.",
      "Blocking important content behind JavaScript-only interactions.",
      "Using vague H1 text that does not match page intent.",
      "Forgetting meaningful alt text on content images.",
    ],
    practices: [
      "Use unique titles and descriptions per page.",
      "Keep URLs stable, readable, and canonicalized.",
      "Use semantic headings and internal links.",
      "Optimize Core Web Vitals for search and user experience.",
      "Generate metadata on the server for public content when using React frameworks.",
    ],
    example: codeBlock("html", `
<title>React Hooks Notes | Frontend Notes</title>
<meta name="description" content="Practical notes on React hooks, effects, state, and common mistakes.">
<link rel="canonical" href="https://example.com/react/hooks">

<meta property="og:title" content="React Hooks Notes">
<meta property="og:description" content="Senior frontend notes for understanding React hooks in real applications.">
<meta property="og:type" content="article">
<meta property="og:url" content="https://example.com/react/hooks">
<meta property="og:image" content="https://example.com/images/react-hooks.png">
`),
    scenarios: [
      "A documentation page needs a unique title so users can identify it among many tabs.",
      "A product page needs server-rendered metadata for link previews.",
      "A blog post uses canonical URLs to avoid duplicate indexing.",
    ],
    exercises: [
      {
        task: "Write metadata for a course landing page.",
        solution: "Include title, description, canonical URL, Open Graph title, description, type, URL, and image.",
      },
    ],
  },
  {
    folder: "2_HTML",
    file: "j_html_performance_loading.md",
    title: "HTML Performance and Resource Loading",
    focus: "how markup choices influence page speed and rendering",
    fundamentals: [
      "HTML controls which resources the browser discovers early.",
      "Critical resources should load early; non-critical resources should not block first render.",
      "Good loading strategy reduces blank screens, layout shift, and wasted bandwidth.",
    ],
    concepts: [
      ["Critical CSS", "Styles needed for above-the-fold content."],
      ["`defer`", "Loads script during parsing and executes after document parsing."],
      ["`async`", "Loads script independently and executes as soon as available."],
      ["Module script", "Deferred by default and supports ES modules."],
      ["Preload", "Hints that a resource is important for the current page."],
      ["Lazy loading", "Defers below-the-fold images and iframes."],
    ],
    internals: [
      "The preload scanner discovers resources while the main parser builds the document.",
      "CSS blocks render because layout depends on styles.",
      "Classic synchronous scripts can block parsing and delay content discovery.",
      "Images with missing dimensions can cause cumulative layout shift.",
    ],
    mistakes: [
      "Preloading too many resources and hurting prioritization.",
      "Lazy-loading the hero image that should load immediately.",
      "Blocking the parser with scripts that are not needed for initial content.",
      "Ignoring font loading behavior and layout shift.",
    ],
    practices: [
      "Use `type=\"module\"` for modern application entry points.",
      "Set image dimensions or CSS aspect ratios.",
      "Use `loading=\"lazy\"` only for non-critical images and iframes.",
      "Preload only truly critical assets, such as a hero image or primary font.",
    ],
    example: codeBlock("html", `
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/styles.css">
<script type="module" src="/src/main.js"></script>

<img
  src="/images/hero.jpg"
  alt="Team dashboard preview"
  width="1440"
  height="900"
  fetchpriority="high">

<img
  src="/images/detail.jpg"
  alt="Detailed analytics chart"
  width="800"
  height="500"
  loading="lazy">
`),
    scenarios: [
      "A landing page improves LCP by prioritizing the hero image.",
      "A dashboard avoids layout shift by reserving image and chart space.",
      "A third-party analytics script is moved away from the critical path.",
    ],
    exercises: [
      {
        task: "Annotate an HTML file with which resources are render-blocking, deferred, or lazy-loaded.",
        solution: "Mark CSS as render-blocking, module scripts as deferred, critical images as eager, and below-fold assets as lazy.",
      },
    ],
  },
];

const moreTopics = [
  ["3_CSS", "a_css_introduction.md", "CSS Introduction", "CSS as the language of presentation, layout, states, and responsive visual systems", "css-basic"],
  ["3_CSS", "b_selectors_cascade_specificity.md", "Selectors, Cascade, Specificity, and Inheritance", "how browsers decide which CSS declaration wins", "css-cascade"],
  ["3_CSS", "c_box_model_display_overflow.md", "Box Model, Display, and Overflow", "how elements occupy space and why layouts break", "css-box"],
  ["3_CSS", "d_units_colors_typography.md", "Units, Colors, and Typography", "building readable, scalable, responsive visual language", "css-type"],
  ["3_CSS", "e_flexbox_layout.md", "Flexbox Layout", "one-dimensional layout for rows, columns, alignment, and distribution", "css-flex"],
  ["3_CSS", "f_css_grid_layout.md", "CSS Grid Layout", "two-dimensional layout for page and component structure", "css-grid"],
  ["3_CSS", "g_positioning_stacking_z_index.md", "Positioning, Stacking, and z-index", "containing blocks, positioned elements, and stacking contexts", "css-position"],
  ["3_CSS", "h_responsive_design_media_container_queries.md", "Responsive Design, Media Queries, and Container Queries", "making interfaces adapt to screens, containers, and input methods", "css-responsive"],
  ["3_CSS", "i_transitions_animations_transforms.md", "Transitions, Animations, and Transforms", "motion that communicates change without hurting usability", "css-motion"],
  ["3_CSS", "j_custom_properties_design_tokens.md", "Custom Properties and Design Tokens", "using CSS variables to build maintainable themes and component APIs", "css-vars"],
  ["3_CSS", "k_css_architecture_bem_modules.md", "CSS Architecture, BEM, and CSS Modules", "keeping styles predictable in growing applications", "css-architecture"],
  ["3_CSS", "l_modern_css_features.md", "Modern CSS Features", "practical modern CSS such as logical properties, :is(), :where(), layers, nesting, and color functions", "css-modern"],
  ["4_JavaScript_Core", "a_javascript_introduction.md", "JavaScript Introduction", "JavaScript as the programming language of the web platform", "js-basic"],
  ["4_JavaScript_Core", "b_variables_scope_hoisting.md", "Variables, Scope, and Hoisting", "how bindings are created, accessed, and shadowed", "js-scope"],
  ["4_JavaScript_Core", "c_data_types_equality_type_conversion.md", "Data Types, Equality, and Type Conversion", "primitive values, objects, coercion, and comparison safety", "js-types"],
  ["4_JavaScript_Core", "d_functions_closures_this.md", "Functions, Closures, and this", "function execution, lexical state, and call-site binding", "js-functions"],
  ["4_JavaScript_Core", "e_objects_arrays_destructuring_spread.md", "Objects, Arrays, Destructuring, and Spread", "working with structured data without accidental mutation", "js-objects"],
  ["4_JavaScript_Core", "f_prototypes_classes_oop.md", "Prototypes, Classes, and OOP", "JavaScript inheritance and class syntax in real applications", "js-prototypes"],
  ["4_JavaScript_Core", "g_modules_import_export.md", "Modules, import, and export", "organizing JavaScript across files and build boundaries", "js-modules"],
  ["4_JavaScript_Core", "h_error_handling_debugging.md", "Error Handling and Debugging", "making failures explicit, debuggable, and recoverable", "js-errors"],
  ["4_JavaScript_Core", "i_functional_array_methods.md", "Functional Array Methods", "map, filter, reduce, find, some, every, and data transformation", "js-arrays"],
  ["4_JavaScript_Core", "j_memory_reference_mutation.md", "Memory, References, and Mutation", "understanding identity, copies, garbage collection, and shared references", "js-memory"],
  ["5_DOM_Browser_APIs", "a_dom_basics_selectors_nodes.md", "DOM Basics, Selectors, and Nodes", "reading and changing the document through browser APIs", "dom-basic"],
  ["5_DOM_Browser_APIs", "b_events_event_delegation.md", "Events and Event Delegation", "handling user and browser events with propagation in mind", "dom-events"],
  ["5_DOM_Browser_APIs", "c_forms_dom_validation.md", "DOM Forms and Validation", "reading form data, validating inputs, and preserving UX", "dom-forms"],
  ["5_DOM_Browser_APIs", "d_storage_cookies_session_local_indexeddb.md", "Storage, Cookies, localStorage, sessionStorage, and IndexedDB", "client-side persistence and its tradeoffs", "dom-storage"],
  ["5_DOM_Browser_APIs", "e_browser_security_cors_csp_xss.md", "Browser Security, CORS, CSP, and XSS", "security boundaries frontend developers must respect", "security-browser"],
  ["5_DOM_Browser_APIs", "f_web_components_shadow_dom.md", "Web Components and Shadow DOM", "native component primitives and encapsulated DOM", "web-components"],
  ["6_Async_Networking", "a_event_loop_tasks_microtasks.md", "Event Loop, Tasks, and Microtasks", "how asynchronous JavaScript is scheduled and why order matters", "async-loop"],
  ["6_Async_Networking", "b_callbacks_promises_async_await.md", "Callbacks, Promises, and async-await", "writing readable asynchronous flows", "async-promises"],
  ["6_Async_Networking", "c_fetch_api_http_json_errors.md", "Fetch API, HTTP, JSON, and Errors", "making reliable network calls from the browser", "async-fetch"],
  ["6_Async_Networking", "d_abortcontroller_timeouts_retries.md", "AbortController, Timeouts, and Retries", "cancelling stale work and designing resilient requests", "async-abort"],
  ["6_Async_Networking", "e_websockets_sse_realtime.md", "WebSockets, SSE, and Realtime UI", "realtime browser communication patterns", "async-realtime"],
  ["7_Modern_JS_Tooling", "a_npm_package_json_semver.md", "npm, package.json, and SemVer", "dependency management for frontend projects", "tooling-npm"],
  ["7_Modern_JS_Tooling", "b_vite_bundling_dev_server.md", "Vite, Bundling, and Dev Server", "modern development workflow and production builds", "tooling-vite"],
  ["7_Modern_JS_Tooling", "c_babel_typescript_transpilation.md", "Babel, TypeScript, and Transpilation", "language transforms, type checking, and browser compatibility", "tooling-ts"],
  ["7_Modern_JS_Tooling", "d_eslint_prettier_code_quality.md", "ESLint, Prettier, and Code Quality", "automated guardrails for readable code", "tooling-lint"],
  ["7_Modern_JS_Tooling", "e_environment_variables_build_modes.md", "Environment Variables and Build Modes", "configuration across local, staging, and production builds", "tooling-env"],
  ["8_React_Core", "a_react_introduction.md", "React Introduction", "React as a component model for interactive UI", "react-basic"],
  ["8_React_Core", "b_jsx_components_props.md", "JSX, Components, and Props", "declaring UI as composable functions of data", "react-jsx"],
  ["8_React_Core", "c_state_usestate_events.md", "State, useState, and Events", "local component state and user interactions", "react-state"],
  ["8_React_Core", "d_rendering_reconciliation_keys.md", "Rendering, Reconciliation, and Keys", "how React updates UI and why identity matters", "react-render"],
  ["8_React_Core", "e_useeffect_side_effects.md", "useEffect and Side Effects", "synchronizing React components with external systems", "react-effect"],
  ["8_React_Core", "f_conditional_rendering_lists.md", "Conditional Rendering and Lists", "rendering UI branches and collections safely", "react-lists"],
  ["8_React_Core", "g_forms_controlled_uncontrolled.md", "React Forms, Controlled and Uncontrolled Inputs", "handling input state and submission in React", "react-forms"],
  ["9_React_Advanced", "a_context_usecontext.md", "Context and useContext", "sharing scoped values without prop drilling", "react-context"],
  ["9_React_Advanced", "b_usereducer_complex_state.md", "useReducer and Complex State", "modeling state transitions explicitly", "react-reducer"],
  ["9_React_Advanced", "c_memo_usememo_usecallback.md", "memo, useMemo, and useCallback", "memoization for correctness of references and measured performance", "react-memo"],
  ["9_React_Advanced", "d_refs_forwardref_imperative_handles.md", "Refs, forwardRef, and Imperative Handles", "escaping declarative React when DOM or imperative APIs require it", "react-refs"],
  ["9_React_Advanced", "e_custom_hooks_reusable_logic.md", "Custom Hooks and Reusable Logic", "extracting stateful behavior cleanly", "react-hooks"],
  ["9_React_Advanced", "f_error_boundaries_suspense.md", "Error Boundaries and Suspense", "handling render failures and async UI boundaries", "react-boundaries"],
  ["10_Routing_Data_Fetching", "a_react_router_routes_layouts.md", "React Router, Routes, and Layouts", "client-side navigation and nested UI structure", "routing-router"],
  ["10_Routing_Data_Fetching", "b_url_params_search_params.md", "URL Params and Search Params", "using the URL as shareable application state", "routing-url"],
  ["10_Routing_Data_Fetching", "c_data_fetching_patterns.md", "Data Fetching Patterns", "loading, error, empty, stale, and optimistic states", "data-fetching"],
  ["10_Routing_Data_Fetching", "d_server_state_react_query_swr.md", "Server State with React Query or SWR", "caching remote data separately from UI state", "server-state"],
  ["11_State_Management_Forms", "a_state_management_decision_tree.md", "State Management Decision Tree", "choosing between local state, context, reducers, stores, and server cache", "state-tree"],
  ["11_State_Management_Forms", "b_zustand_redux_toolkit_overview.md", "Zustand and Redux Toolkit Overview", "global client state with pragmatic tradeoffs", "state-global"],
  ["11_State_Management_Forms", "c_react_hook_form_validation.md", "React Hook Form and Validation", "performant form state and schema validation patterns", "forms-rhf"],
  ["11_State_Management_Forms", "d_form_accessibility_error_states.md", "Form Accessibility and Error States", "making complex forms understandable and recoverable", "forms-a11y"],
  ["12_Testing", "a_testing_strategy_frontend.md", "Frontend Testing Strategy", "balancing unit, integration, component, and end-to-end tests", "test-strategy"],
  ["12_Testing", "b_vitest_jest_unit_tests.md", "Vitest, Jest, and Unit Tests", "testing pure logic and small behavior units", "test-unit"],
  ["12_Testing", "c_react_testing_library.md", "React Testing Library", "testing components through user-visible behavior", "test-rtl"],
  ["12_Testing", "d_playwright_e2e_tests.md", "Playwright End-to-End Tests", "testing critical user journeys in a real browser", "test-e2e"],
  ["13_Performance", "a_web_vitals_lcp_cls_inp.md", "Web Vitals, LCP, CLS, and INP", "measuring user-centered performance", "perf-vitals"],
  ["13_Performance", "b_rendering_performance_layout_paint.md", "Rendering Performance, Layout, and Paint", "avoiding main-thread and rendering bottlenecks", "perf-render"],
  ["13_Performance", "c_bundle_splitting_lazy_loading.md", "Bundle Splitting and Lazy Loading", "shipping less JavaScript at the right time", "perf-bundle"],
  ["13_Performance", "d_react_performance_profiling.md", "React Performance and Profiling", "finding unnecessary renders and expensive components", "perf-react"],
  ["14_Accessibility_SEO", "a_accessibility_wcag_keyboard_screen_readers.md", "Accessibility, WCAG, Keyboard, and Screen Readers", "inclusive frontend quality across interaction modes", "a11y-core"],
  ["14_Accessibility_SEO", "b_focus_management_modals_menus.md", "Focus Management, Modals, and Menus", "advanced keyboard interaction patterns", "a11y-focus"],
  ["14_Accessibility_SEO", "c_seo_for_react_apps.md", "SEO for React Apps", "making React content discoverable and shareable", "seo-react"],
  ["15_Interview_Prep", "a_html_css_interview_questions.md", "HTML and CSS Interview Questions", "practical interview answers for markup and styling", "interview-html-css"],
  ["15_Interview_Prep", "b_javascript_interview_questions.md", "JavaScript Interview Questions", "practical interview answers for JS fundamentals", "interview-js"],
  ["15_Interview_Prep", "c_react_interview_questions.md", "React Interview Questions", "practical interview answers for React", "interview-react"],
  ["15_Interview_Prep", "d_frontend_system_design.md", "Frontend System Design", "designing scalable frontend applications in interviews and real work", "frontend-system-design"],
  ["16_Capstone_Projects", "a_responsive_portfolio_html_css_js.md", "Capstone: Responsive Portfolio", "a polished responsive portfolio using HTML, CSS, and light JavaScript", "capstone-portfolio"],
  ["16_Capstone_Projects", "b_todo_app_vanilla_js.md", "Capstone: Todo App with Vanilla JavaScript", "state, DOM events, persistence, and filtering without a framework", "capstone-todo"],
  ["16_Capstone_Projects", "c_react_dashboard.md", "Capstone: React Dashboard", "React components, routing, server state, forms, charts, and error states", "capstone-dashboard"],
  ["16_Capstone_Projects", "d_ecommerce_frontend_react.md", "Capstone: E-commerce Frontend in React", "catalog, cart, checkout, authentication states, and performance", "capstone-ecommerce"],
  ["2_HTML", "k_details_dialog_template_progressive_enhancement.md", "details, dialog, template, and Progressive Enhancement", "modern HTML elements that reduce JavaScript and preserve baseline behavior", "html-modern"],
  ["2_HTML", "l_html_interview_notes.md", "HTML Interview Notes", "high-signal HTML questions around semantics, forms, accessibility, SEO, loading, and browser behavior", "interview-html"],
  ["3_CSS", "m_pseudo_classes_elements_ui_states.md", "Pseudo-classes, Pseudo-elements, and UI States", "styling hover, focus, validation, disabled, generated content, and modern state selectors", "css-states"],
  ["3_CSS", "n_layout_patterns.md", "CSS Layout Patterns", "common production layouts such as app shells, sticky footers, forms, dashboards, and responsive card grids", "css-patterns"],
  ["3_CSS", "o_debugging_performance_browser_support.md", "CSS Debugging, Performance, and Browser Support", "debugging layout failures, checking compatibility, and avoiding CSS performance myths", "css-debug"],
  ["3_CSS", "p_css_interview_notes.md", "CSS Interview Notes", "high-signal CSS questions around cascade, layout, responsive design, animation, and maintainability", "interview-css"],
  ["4_JavaScript_Core", "k_javascript_interview_drills.md", "JavaScript Interview Drills", "output questions, closures, this, coercion, promises, prototypes, references, and clean explanations", "interview-js-drills"],
  ["5_DOM_Browser_APIs", "g_rendering_reflow_repaint.md", "Rendering, Reflow, Repaint, and Layout Thrashing", "how DOM and style changes become pixels and where performance bugs appear", "dom-render"],
  ["5_DOM_Browser_APIs", "h_web_platform_observers_workers.md", "Web Platform APIs, Observers, and Workers", "IntersectionObserver, ResizeObserver, MutationObserver, File API, Clipboard, History, URL, and Web Workers", "dom-platform"],
  ["5_DOM_Browser_APIs", "i_accessibility_with_javascript.md", "Accessibility with JavaScript", "focus management, keyboard patterns, live regions, dialogs, menus, and reduced motion in dynamic UI", "dom-a11y-js"],
  ["6_Async_Networking", "f_promise_patterns_concurrency.md", "Promise Patterns and Concurrency", "Promise.all, allSettled, race, any, fan-out, fan-in, and controlled parallelism", "async-patterns"],
  ["6_Async_Networking", "g_debounce_throttle_rate_limiting.md", "Debounce, Throttle, Rate Limiting, and Queues", "controlling how often work runs during input, scrolling, and network-heavy flows", "async-rate"],
  ["6_Async_Networking", "h_caching_offline_service_workers.md", "Caching, Offline Basics, and Service Workers", "HTTP cache, memory cache, stale-while-revalidate ideas, offline UX, and service worker basics", "async-cache"],
  ["6_Async_Networking", "i_async_interview_drills.md", "Async JavaScript Interview Drills", "event loop ordering, retry fetch, cancellation, debounce, throttle, and concurrency limiter exercises", "interview-async"],
  ["7_Modern_JS_Tooling", "f_source_maps_debugging_ci_cd.md", "Source Maps, Debugging, CI, and Frontend Delivery", "debugging builds, source maps, preview deployments, CI checks, CDN delivery, and rollback thinking", "tooling-ci"],
  ["9_React_Advanced", "g_portals_modals_overlays.md", "Portals, Modals, and Overlays", "rendering overlay UI while preserving focus, layering, scroll locking, and accessibility", "react-overlays"],
  ["9_React_Advanced", "h_react_architecture_patterns.md", "React Architecture Patterns", "component boundaries, feature folders, data ownership, composition, and scalable frontend structure", "react-architecture"],
  ["10_Routing_Data_Fetching", "e_auth_protected_routes_loading_states.md", "Auth, Protected Routes, and Loading States", "guarded routes, pending auth, redirects, permission checks, and non-flashy loading states", "routing-auth"],
  ["11_State_Management_Forms", "e_schema_validation_zod_yup.md", "Schema Validation with Zod or Yup", "validating forms and API boundaries with reusable runtime schemas", "forms-schema"],
  ["12_Testing", "e_mocking_network_msw.md", "Mocking Network Requests with MSW", "testing API-driven UI through realistic request handlers instead of brittle fetch mocks", "test-msw"],
  ["13_Performance", "e_virtualization_large_lists.md", "Virtualization and Large Lists", "rendering thousands of rows without blocking interaction or overwhelming the DOM", "perf-virtual"],
  ["15_Interview_Prep", "e_frontend_debugging_scenarios.md", "Frontend Debugging Scenarios", "interview-style debugging for broken layouts, stale state, failed requests, accessibility bugs, and slow pages", "interview-debug"],
];

const patternData = {
  "css-basic": {
    fundamentals: [
      "CSS controls presentation: layout, spacing, color, typography, animation, and responsive behavior.",
      "CSS is declarative; you describe desired styles and the browser resolves conflicts through cascade rules.",
      "Good CSS is predictable under changing content, screen size, language, and component composition.",
    ],
    concepts: [["Rule", "A selector plus declarations."], ["Declaration", "A property-value pair."], ["Cascade", "The algorithm that chooses winning declarations."], ["Box model", "The space every element occupies."], ["Layout", "How boxes are arranged by normal flow, flexbox, grid, and positioning."]],
    internals: ["The browser parses CSS into the CSSOM, matches selectors against DOM elements, computes final styles, performs layout, paints, and composites.", "Changing layout-affecting properties can trigger expensive recalculation; transforms and opacity are often cheaper for animation."],
    mistakes: ["Writing styles that only work for the sample content.", "Using fixed pixel widths everywhere.", "Fighting the cascade with repeated `!important`.", "Ignoring browser defaults."],
    practices: ["Use a reset or normalize strategy intentionally.", "Build from content and constraints, then add decoration.", "Use reusable spacing, color, and typography tokens.", "Test narrow screens and long text early."],
    example: codeBlock("css", `
:root {
  --space-3: 0.75rem;
  --space-4: 1rem;
  --color-text: #17202a;
  --color-accent: #0f766e;
}

.notice {
  border-left: 4px solid var(--color-accent);
  padding: var(--space-3) var(--space-4);
  color: var(--color-text);
}
`),
  },
  "css-cascade": {
    fundamentals: ["The cascade decides which declaration applies when multiple CSS rules target the same element.", "Specificity, source order, importance, cascade layers, inheritance, and origin all matter.", "Senior frontend developers reduce specificity battles by designing style boundaries."],
    concepts: [["Specificity", "Selector weight used when declarations compete."], ["Inheritance", "Some properties flow from parent to child."], ["Source order", "Later rules win when priority is otherwise equal."], ["Cascade layer", "A named ordering system for groups of styles."], ["`!important`", "An override that should be rare and deliberate."]],
    internals: ["Browsers compare origin, importance, cascade layer, specificity, scoping proximity, and source order to choose final declarations.", "Inherited values are considered when no direct winning declaration exists for inheritable properties."],
    mistakes: ["Solving every conflict with more specific selectors.", "Writing selectors tied to deep DOM structure.", "Assuming a rule lost because it loaded late when specificity was the real reason."],
    practices: ["Keep selectors shallow.", "Use classes for component styling.", "Use `:where()` to intentionally keep specificity low.", "Reserve `!important` for utility overrides or third-party escape hatches."],
    example: codeBlock("css", `
@layer reset, base, components, utilities;

@layer base {
  button {
    font: inherit;
  }
}

@layer components {
  .button {
    border-radius: 6px;
    padding: 0.5rem 0.75rem;
  }
}

@layer utilities {
  .hidden {
    display: none !important;
  }
}
`),
  },
  "css-box": {
    fundamentals: ["Every element creates one or more boxes.", "The box model consists of content, padding, border, and margin.", "Display type determines how an element participates in layout."],
    concepts: [["Content box", "The area where content is drawn."], ["Padding", "Space inside the border."], ["Border", "Line around padding and content."], ["Margin", "Space outside the border."], ["Overflow", "What happens when content does not fit."], ["`box-sizing`", "Controls how width and height are calculated."]],
    internals: ["With `box-sizing: content-box`, width excludes padding and border. With `border-box`, width includes them.", "Block formatting context rules affect margin collapsing and float containment.", "Overflow can create scroll containers and affect sticky positioning."],
    mistakes: ["Forgetting `box-sizing: border-box`.", "Hiding overflow to mask layout bugs.", "Using fixed heights for content that may wrap.", "Confusing margin with padding."],
    practices: ["Use `min-height` instead of fixed `height` for content sections.", "Set `min-width: 0` on flex/grid children that need to shrink.", "Reserve overflow clipping for deliberate visual behavior.", "Inspect layout boxes in DevTools."],
    example: codeBlock("css", `
*,
*::before,
*::after {
  box-sizing: border-box;
}

.panel {
  inline-size: min(100%, 48rem);
  padding: 1rem;
  border: 1px solid #d0d7de;
  overflow-wrap: anywhere;
}
`),
  },
  "css-type": {
    fundamentals: ["Typography affects readability, hierarchy, trust, and density.", "Units should reflect intent: fixed, relative, viewport, or container-based.", "Color choices must satisfy contrast and state communication needs."],
    concepts: [["`rem`", "Relative to root font size; useful for spacing and typography."], ["`em`", "Relative to current font size; useful for local proportional scaling."], ["Viewport units", "Relative to viewport dimensions."], ["Line height", "Vertical rhythm and readability."], ["Contrast", "Difference between foreground and background."], ["System fonts", "Fast and native-looking fallback stack."]],
    internals: ["Fonts load asynchronously and can cause text swapping or invisible text depending on `font-display`.", "Relative units respond to user font-size preferences better than fixed pixel-heavy systems."],
    mistakes: ["Scaling text with viewport width.", "Using low-contrast gray text for body copy.", "Setting body text too small.", "Using too many unrelated type sizes and colors."],
    practices: ["Use a small type scale.", "Set comfortable line height for prose.", "Respect user zoom and browser font settings.", "Use color for emphasis but not as the only signal."],
    example: codeBlock("css", `
body {
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #17202a;
}

.eyebrow {
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
}
`),
  },
  "css-flex": {
    fundamentals: ["Flexbox is for one-dimensional layout: a row or a column.", "It excels at distributing space, aligning items, and letting components adapt to available width.", "Understanding main axis and cross axis removes most flexbox confusion."],
    concepts: [["Flex container", "Parent with `display: flex`."], ["Main axis", "Direction controlled by `flex-direction`."], ["Cross axis", "Axis perpendicular to the main axis."], ["`flex` shorthand", "Controls grow, shrink, and basis."], ["Gap", "Space between flex items without margin hacks."]],
    internals: ["Flex layout calculates base sizes, distributes free space, and then aligns items.", "Flex items default to `min-width: auto`, which can cause overflow until `min-width: 0` is set."],
    mistakes: ["Using flexbox for complex two-dimensional page grids.", "Forgetting `flex-wrap` when items should wrap.", "Using margins for gaps.", "Expecting `justify-content` to align on the cross axis."],
    practices: ["Use `gap` for spacing.", "Set `min-width: 0` on flexible text containers.", "Use `align-items` for cross-axis alignment.", "Use grid when rows and columns both matter."],
    example: codeBlock("css", `
.toolbar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.toolbar__title {
  min-width: 0;
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
`),
  },
  "css-grid": {
    fundamentals: ["CSS Grid is for two-dimensional layout.", "Grid is ideal when rows and columns both matter.", "Grid can define explicit tracks and place items precisely without extra wrapper markup."],
    concepts: [["Grid container", "Parent with `display: grid`."], ["Track", "A row or column."], ["Grid line", "Boundary used for placement."], ["`fr`", "Fraction of available space."], ["`minmax()`", "Responsive min and max track sizes."], ["Named areas", "Readable placement system for page regions."]],
    internals: ["The grid algorithm places items into explicit or implicit tracks, then resolves track sizes from fixed, content, flexible, and minmax constraints.", "Auto-placement fills available cells based on flow direction."],
    mistakes: ["Using grid when simple inline alignment needs flexbox.", "Creating fixed columns that overflow on mobile.", "Overusing named areas for tiny components.", "Forgetting gap is part of layout math."],
    practices: ["Use `repeat(auto-fit, minmax())` for responsive card grids.", "Use named areas for page shells.", "Prefer grid for dashboard layouts and comparison panels.", "Avoid fixed viewport-based heights unless the layout truly needs them."],
    example: codeBlock("css", `
.layout {
  display: grid;
  grid-template-columns: 16rem minmax(0, 1fr);
  grid-template-areas: "sidebar content";
  min-height: 100vh;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1rem;
}
`),
  },
  "css-position": {
    fundamentals: ["Positioning moves elements out of normal flow or anchors them relative to containing blocks.", "Stacking controls what appears in front when boxes overlap.", "`z-index` only makes sense within stacking context rules."],
    concepts: [["Static", "Default position in normal flow."], ["Relative", "Keeps space but offsets visually."], ["Absolute", "Positioned relative to nearest positioned ancestor."], ["Fixed", "Positioned relative to viewport."], ["Sticky", "Switches between relative and fixed within a scroll container."], ["Stacking context", "An isolated z-order group."]],
    internals: ["Properties like `position` with `z-index`, `opacity < 1`, `transform`, `filter`, and `isolation` can create stacking contexts.", "Sticky positioning depends on scroll containers and inset values."],
    mistakes: ["Setting huge z-index values without understanding stacking contexts.", "Using absolute positioning for normal page layout.", "Breaking sticky elements by adding overflow to an ancestor.", "Covering content with fixed headers without offset spacing."],
    practices: ["Use positioning for overlays, badges, popovers, and sticky UI, not general layout.", "Create intentional stacking tokens.", "Inspect stacking contexts when z-index appears ignored.", "Use logical inset properties for international layouts."],
    example: codeBlock("css", `
.card {
  position: relative;
}

.badge {
  position: absolute;
  inset-block-start: 0.75rem;
  inset-inline-end: 0.75rem;
  z-index: 1;
}

.header {
  position: sticky;
  top: 0;
  z-index: 10;
}
`),
  },
  "css-responsive": {
    fundamentals: ["Responsive design means interfaces adapt to device size, container size, input method, and user preferences.", "Start with fluid layouts, then add breakpoints where content needs them.", "Container queries let components respond to their own space, not only the viewport."],
    concepts: [["Fluid layout", "Uses percentages, flexible tracks, and intrinsic sizing."], ["Breakpoint", "A CSS condition where layout changes."], ["Media query", "Applies styles based on viewport or device features."], ["Container query", "Applies styles based on an ancestor container."], ["Responsive image", "Serves appropriate image size or crop."]],
    internals: ["Media queries are evaluated against environment features such as width and pointer type.", "Container queries require a containment context through `container-type`."],
    mistakes: ["Designing desktop first and patching mobile at the end.", "Using breakpoints based only on popular devices.", "Hiding important content on mobile.", "Ignoring coarse pointer and reduced motion preferences."],
    practices: ["Use content-driven breakpoints.", "Prefer flexible constraints like `min()`, `max()`, and `clamp()`.", "Test at awkward widths, zoom levels, and long translations.", "Use responsive images for large media."],
    example: codeBlock("css", `
.profile {
  container-type: inline-size;
  display: grid;
  gap: 1rem;
}

@container (min-width: 36rem) {
  .profile {
    grid-template-columns: 12rem 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms;
    scroll-behavior: auto;
  }
}
`),
  },
  "css-motion": {
    fundamentals: ["Motion should clarify change, hierarchy, feedback, or spatial relationship.", "Transitions animate between states; keyframe animations define timelines.", "Transforms can often animate cheaply because they avoid full layout recalculation."],
    concepts: [["Transition", "Interpolates property changes."], ["Animation", "Runs keyframes over time."], ["Transform", "Moves, scales, rotates, or skews visual output."], ["Compositing", "Combining layers into final pixels."], ["Reduced motion", "User preference to minimize animation."]],
    internals: ["Animating layout properties like width or top can trigger layout and paint; opacity and transform often stay on compositor layers.", "Too many promoted layers can also hurt memory and performance."],
    mistakes: ["Animating everything because it looks lively.", "Ignoring `prefers-reduced-motion`.", "Using slow easing for frequent controls.", "Relying on motion as the only feedback."],
    practices: ["Keep UI motion short and purposeful.", "Use opacity and transform for frequent animations.", "Provide reduced-motion alternatives.", "Avoid moving large areas during text entry or critical tasks."],
    example: codeBlock("css", `
.toast {
  transform: translateY(0);
  opacity: 1;
  transition: transform 180ms ease, opacity 180ms ease;
}

.toast[data-state="leaving"] {
  transform: translateY(-0.5rem);
  opacity: 0;
}
`),
  },
  "css-vars": {
    fundamentals: ["CSS custom properties store reusable values directly in CSS.", "They cascade, inherit, and can change at runtime.", "Design tokens connect product design decisions to implementation."],
    concepts: [["Custom property", "A CSS variable such as `--color-bg`."], ["Token", "A named design decision for color, spacing, typography, radius, or shadow."], ["Fallback", "A default value in `var(--name, fallback)`."], ["Theme", "A group of token values."], ["Component API", "Custom properties exposed for controlled component styling."]],
    internals: ["Custom properties are resolved at computed-value time, after cascade and inheritance.", "They can hold many token types, not only colors."],
    mistakes: ["Naming variables after current colors instead of purpose.", "Creating hundreds of tokens with no usage rules.", "Using custom properties where static local values are clearer.", "Forgetting fallbacks for reusable components."],
    practices: ["Use semantic names like `--color-danger` instead of `--red-500` for usage tokens.", "Separate primitive tokens from semantic tokens in larger systems.", "Override tokens at theme or component boundaries.", "Document token intent."],
    example: codeBlock("css", `
:root {
  --color-surface: #ffffff;
  --color-text: #17202a;
  --space-field: 0.75rem;
}

[data-theme="dark"] {
  --color-surface: #111827;
  --color-text: #f9fafb;
}

.input {
  background: var(--input-bg, var(--color-surface));
  color: var(--color-text);
  padding: var(--space-field);
}
`),
  },
  "css-architecture": {
    fundamentals: ["CSS architecture prevents style leaks, specificity wars, and accidental regressions.", "The best architecture depends on team size, framework, design system, and release cadence.", "BEM, CSS Modules, utility CSS, and CSS-in-JS all solve scoping and consistency differently."],
    concepts: [["BEM", "Block, element, modifier naming convention."], ["CSS Modules", "Build-time local class name scoping."], ["Utility class", "Small single-purpose class."], ["Design system", "Reusable components and tokens."], ["Style boundary", "A rule that defines ownership and prevents leaks."]],
    internals: ["Plain CSS is global by default. CSS Modules transform class names to avoid collisions. Utility systems trade semantic class names for constrained composition.", "CSS import order still matters unless layers or tooling control it."],
    mistakes: ["Mixing naming systems without rules.", "Styling child internals from distant parents.", "Letting one component depend on another component's private class names.", "Adding global overrides for one-off fixes."],
    practices: ["Pick one primary strategy and document it.", "Keep component styles close to components.", "Use tokens for design consistency.", "Prefer explicit variants over selector gymnastics."],
    example: codeBlock("css", `
.card {
  border: 1px solid var(--color-border);
  padding: 1rem;
}

.card__title {
  margin: 0;
  font-weight: 700;
}

.card--selected {
  border-color: var(--color-accent);
}
`),
  },
  "css-modern": {
    fundamentals: ["Modern CSS reduces JavaScript and fragile hacks.", "Use newer features when browser support matches project requirements.", "Progressive enhancement lets advanced CSS improve capable browsers while preserving baseline behavior."],
    concepts: [["Logical properties", "Use writing-mode-aware properties like `margin-inline`."], ["`:is()`", "Groups selector alternatives."], ["`:where()`", "Groups selectors with zero specificity."], ["Cascade layers", "Control broad style ordering."], ["Nesting", "Write related selectors together where supported by tooling/runtime."], ["Color functions", "Create adaptable color systems."]],
    internals: ["Selector helpers affect specificity differently: `:is()` takes the most specific argument, while `:where()` contributes zero specificity.", "Cascade layers sit before specificity in the cascade decision process."],
    mistakes: ["Using new CSS without checking target browser support.", "Replacing readable CSS with clever selectors.", "Using nesting to create overly deep selectors.", "Forgetting fallback behavior."],
    practices: ["Use modern CSS to simplify, not impress.", "Prefer logical properties for reusable components.", "Use layers to organize reset, base, components, and utilities.", "Document browser support assumptions."],
    example: codeBlock("css", `
@layer reset, base, components;

.stack > :where(* + *) {
  margin-block-start: var(--stack-gap, 1rem);
}

.button:is(:hover, :focus-visible) {
  background: color-mix(in srgb, var(--color-accent), black 10%);
}
`),
  },
};

const genericExamples = {
  "js-basic": codeBlock("js", `
const user = {
  name: "Asha",
  role: "Frontend Developer",
};

function greet(person) {
  return \`Hello, \${person.name}\`;
}

console.log(greet(user));
`),
  "js-scope": codeBlock("js", `
const moduleName = "orders";

function createCounter() {
  let count = 0;

  return function increment() {
    count += 1;
    return count;
  };
}

const next = createCounter();
console.log(next()); // 1
console.log(next()); // 2
`),
  "js-types": codeBlock("js", `
console.log(1 == "1");  // true because coercion happens
console.log(1 === "1"); // false because type and value differ

const value = Number("42");
if (Number.isNaN(value)) {
  throw new Error("Invalid number");
}
`),
  "js-functions": codeBlock("js", `
const cart = {
  items: ["Book"],
  printLater() {
    setTimeout(() => {
      console.log(this.items);
    }, 100);
  },
};

cart.printLater();
`),
  "js-objects": codeBlock("js", `
const order = { id: 1, status: "created", total: 120 };
const updatedOrder = { ...order, status: "paid" };

const totals = [10, 20, 30];
const grandTotal = totals.reduce((sum, value) => sum + value, 0);
`),
  "js-prototypes": codeBlock("js", `
class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(path) {
    return fetch(\`\${this.baseUrl}\${path}\`);
  }
}

const client = new ApiClient("/api");
`),
  "js-modules": codeBlock("js", `
// money.js
export function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

// app.js
import { formatCurrency } from "./money.js";
console.log(formatCurrency(42));
`),
  "js-errors": codeBlock("js", `
async function loadUser(id) {
  const response = await fetch(\`/api/users/\${id}\`);

  if (!response.ok) {
    throw new Error(\`Failed to load user: \${response.status}\`);
  }

  return response.json();
}
`),
  "js-arrays": codeBlock("js", `
const orders = [
  { id: 1, status: "paid", total: 120 },
  { id: 2, status: "draft", total: 40 },
];

const paidTotal = orders
  .filter((order) => order.status === "paid")
  .map((order) => order.total)
  .reduce((sum, total) => sum + total, 0);
`),
  "js-memory": codeBlock("js", `
const original = { user: { name: "Maya" } };
const shallowCopy = { ...original };

shallowCopy.user.name = "Changed";
console.log(original.user.name); // Changed

const immutableUpdate = {
  ...original,
  user: { ...original.user, name: "Safe" },
};
`),
  "dom-basic": codeBlock("js", `
const list = document.querySelector("[data-orders]");

const item = document.createElement("li");
item.textContent = "Order #123";
list.append(item);
`),
  "dom-events": codeBlock("js", `
document.querySelector("[data-list]").addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-id]");
  if (!button) return;

  removeItem(button.dataset.removeId);
});
`),
  "dom-forms": codeBlock("js", `
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  console.log(data);
});
`),
  "dom-storage": codeBlock("js", `
const key = "theme";
localStorage.setItem(key, "dark");

const theme = localStorage.getItem(key) ?? "light";
document.documentElement.dataset.theme = theme;
`),
  "security-browser": codeBlock("js", `
// Prefer textContent for untrusted text.
message.textContent = userProvidedMessage;

// Avoid this with untrusted input:
// message.innerHTML = userProvidedMessage;
`),
  "web-components": codeBlock("js", `
class UserBadge extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = \`
      <style>strong { color: #0f766e; }</style>
      <strong><slot></slot></strong>
    \`;
  }
}

customElements.define("user-badge", UserBadge);
`),
  "async-loop": codeBlock("js", `
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

// A, D, C, B
`),
  "async-promises": codeBlock("js", `
async function loadDashboard() {
  try {
    const response = await fetch("/api/dashboard");
    if (!response.ok) throw new Error("Request failed");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
`),
  "async-fetch": codeBlock("js", `
async function postJson(url, body) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(data?.message ?? \`HTTP \${response.status}\`);
  }
  return data;
}
`),
  "async-abort": codeBlock("js", `
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 5000);

try {
  const response = await fetch("/api/search?q=react", {
    signal: controller.signal,
  });
  console.log(await response.json());
} finally {
  clearTimeout(timeoutId);
}
`),
  "async-realtime": codeBlock("js", `
const socket = new WebSocket("wss://example.com/events");

socket.addEventListener("message", (event) => {
  const update = JSON.parse(event.data);
  renderUpdate(update);
});
`),
  "async-patterns": codeBlock("js", `
async function loadDashboard() {
  const [summary, ordersResult, alertsResult] = await Promise.all([
    fetchJson("/api/summary"),
    fetchJson("/api/orders").then(
      (data) => ({ status: "fulfilled", data }),
      (error) => ({ status: "rejected", error })
    ),
    fetchJson("/api/alerts").then(
      (data) => ({ status: "fulfilled", data }),
      (error) => ({ status: "rejected", error })
    ),
  ]);

  return {
    summary,
    orders: ordersResult.status === "fulfilled" ? ordersResult.data : [],
    alerts: alertsResult.status === "fulfilled" ? alertsResult.data : [],
  };
}
`),
  "async-rate": codeBlock("js", `
function debounce(callback, delay) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
}

const search = debounce((term) => {
  fetchResults(term);
}, 300);

input.addEventListener("input", (event) => {
  search(event.target.value);
});
`),
  "async-cache": codeBlock("js", `
const memoryCache = new Map();

async function getUser(id) {
  const key = \`user:\${id}\`;
  if (memoryCache.has(key)) return memoryCache.get(key);

  const promise = fetchJson(\`/api/users/\${id}\`);
  memoryCache.set(key, promise);

  try {
    return await promise;
  } catch (error) {
    memoryCache.delete(key);
    throw error;
  }
}
`),
  "interview-async": codeBlock("js", `
console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve()
  .then(() => console.log("promise 1"))
  .then(() => console.log("promise 2"));

console.log("end");

// start, end, promise 1, promise 2, timeout
`),
  "react-effect": codeBlock("jsx", `
import { useEffect, useState } from "react";

function UserProfile({ userId }) {
  const [state, setState] = useState({ status: "idle", user: null, error: null });

  useEffect(() => {
    const controller = new AbortController();

    async function loadUser() {
      setState({ status: "loading", user: null, error: null });

      try {
        const response = await fetch(\`/api/users/\${userId}\`, {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Failed to load user");
        setState({ status: "success", user: await response.json(), error: null });
      } catch (error) {
        if (error.name !== "AbortError") {
          setState({ status: "error", user: null, error });
        }
      }
    }

    loadUser();
    return () => controller.abort();
  }, [userId]);

  if (state.status === "loading") return <p>Loading user...</p>;
  if (state.status === "error") return <p role="alert">{state.error.message}</p>;
  if (!state.user) return null;
  return <h2>{state.user.name}</h2>;
}
`),
  "react-render": codeBlock("jsx", `
function CartItems({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} - {item.quantity}
        </li>
      ))}
    </ul>
  );
}

// Stable keys preserve identity when items are inserted, removed, or reordered.
`),
  "react-state": codeBlock("jsx", `
import { useState } from "react";

function QuantitySelector({ initialValue = 1 }) {
  const [quantity, setQuantity] = useState(initialValue);

  return (
    <div>
      <button onClick={() => setQuantity((value) => Math.max(1, value - 1))}>-</button>
      <output aria-label="Quantity">{quantity}</output>
      <button onClick={() => setQuantity((value) => value + 1)}>+</button>
    </div>
  );
}
`),
  "react-forms": codeBlock("jsx", `
function SignupForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = Object.fromEntries(form);
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required />
      <button type="submit">Create account</button>
    </form>
  );
}
`),
  "routing-router": codeBlock("jsx", `
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "orders/:orderId", element: <OrderDetailsPage /> },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
`),
  "server-state": codeBlock("jsx", `
import { useQuery } from "@tanstack/react-query";

function OrdersPage() {
  const ordersQuery = useQuery({
    queryKey: ["orders"],
    queryFn: () => fetchJson("/api/orders"),
  });

  if (ordersQuery.isLoading) return <p>Loading orders...</p>;
  if (ordersQuery.isError) return <p role="alert">Could not load orders.</p>;
  if (ordersQuery.data.length === 0) return <p>No orders found.</p>;

  return ordersQuery.data.map((order) => <article key={order.id}>{order.name}</article>);
}
`),
  "react-overlays": codeBlock("jsx", `
import { createPortal } from "react-dom";

function Modal({ title, children, onClose }) {
  return createPortal(
    <div role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <h2 id="modal-title">{title}</h2>
      <button type="button" onClick={onClose} aria-label="Close dialog">
        x
      </button>
      {children}
    </div>,
    document.body
  );
}
`),
  "react-architecture": codeBlock("text", `
src/
  app/
    router.jsx
    providers.jsx
  features/
    orders/
      api.js
      components/
      hooks/
      routes/
  shared/
    ui/
    lib/

Rule of thumb:
Feature code owns product behavior.
Shared code owns reusable primitives.
App code wires providers, routes, and shell layout.
`),
  "routing-auth": codeBlock("jsx", `
function ProtectedRoute({ children }) {
  const auth = useAuth();

  if (auth.status === "loading") return <p>Checking session...</p>;
  if (auth.status === "anonymous") return <Navigate to="/login" replace />;
  if (!auth.user.permissions.includes("dashboard:read")) {
    return <p role="alert">You do not have access.</p>;
  }

  return children;
}
`),
  "forms-schema": codeBlock("js", `
import { z } from "zod";

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const result = signupSchema.safeParse(formValues);

if (!result.success) {
  showFieldErrors(result.error.flatten().fieldErrors);
}
`),
  "test-msw": codeBlock("js", `
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  http.get("/api/orders", () => {
    return HttpResponse.json([{ id: "1", name: "First order" }]);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
`),
  "perf-virtual": codeBlock("jsx", `
import { FixedSizeList } from "react-window";

function LargeOrderList({ orders }) {
  return (
    <FixedSizeList height={500} width="100%" itemSize={44} itemCount={orders.length}>
      {({ index, style }) => (
        <div style={style}>
          {orders[index].id} - {orders[index].customer}
        </div>
      )}
    </FixedSizeList>
  );
}
`),
  "interview-debug": codeBlock("text", `
Debugging answer structure:

1. Reproduce the problem.
2. Identify the failing layer: HTML, CSS, JS, network, React state, or browser rendering.
3. Inspect runtime evidence with DevTools.
4. Fix the smallest root cause.
5. Add a regression test or checklist item.
`),
  "tooling-npm": codeBlock("json", `
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "lint": "eslint ."
  },
  "dependencies": {
    "@vitejs/plugin-react": "^5.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "vite": "^7.0.0",
    "vitest": "^3.0.0"
  }
}
`),
  "tooling-vite": codeBlock("js", `
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});
`),
  "tooling-ts": codeBlock("ts", `
type ApiState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: Error };

function isSuccess<T>(state: ApiState<T>) {
  return state.status === "success";
}
`),
  "tooling-lint": codeBlock("js", `
export default [
  {
    files: ["**/*.{js,jsx}"],
    rules: {
      "no-unused-vars": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];
`),
  "tooling-env": codeBlock("js", `
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

if (!apiBaseUrl) {
  throw new Error("Missing VITE_API_BASE_URL");
}

export const config = {
  apiBaseUrl,
  mode: import.meta.env.MODE,
};
`),
  "tooling-ci": codeBlock("yaml", `
name: frontend-checks

on: [push, pull_request]

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: npm run build
`),
  "interview-js-drills": codeBlock("js", `
for (var i = 0; i < 3; i += 1) {
  setTimeout(() => console.log(i), 0);
}

for (let j = 0; j < 3; j += 1) {
  setTimeout(() => console.log(j), 0);
}

// First loop: 3, 3, 3 because one function-scoped binding is shared.
// Second loop: 0, 1, 2 because each iteration gets a block-scoped binding.
`),
  "interview-html": codeBlock("text", `
High-signal HTML answer:

Semantic HTML is about meaning and behavior.
A button performs an action.
A link navigates.
A label names a control.
A heading creates structure.
ARIA should supplement native HTML only when native semantics are not enough.
`),
  "interview-css": codeBlock("text", `
High-signal CSS answer:

When a style does not apply, inspect:
1. Is the selector matching?
2. Is another rule winning in the cascade?
3. Is specificity higher elsewhere?
4. Is the property inherited, invalid, or overridden?
5. Is the element in the layout model you think it is?
`),
  "interview-html-css": codeBlock("html", `
<form class="search" role="search">
  <label for="query">Search orders</label>
  <input id="query" name="query" type="search">
  <button type="submit">Search</button>
</form>

<style>
  .search {
    display: flex;
    gap: 0.75rem;
    align-items: end;
    flex-wrap: wrap;
  }
</style>
`),
  "interview-js": codeBlock("js", `
const user = { name: "Asha", preferences: { theme: "light" } };
const copy = { ...user };

copy.preferences.theme = "dark";

console.log(user.preferences.theme); // dark

// Spread made a shallow copy. Nested objects still share identity.
`),
  "interview-react": codeBlock("jsx", `
function OrderList({ orders }) {
  return (
    <ul>
      {orders.map((order) => (
        <li key={order.id}>{order.customerName}</li>
      ))}
    </ul>
  );
}

// Interview angle: stable keys preserve component identity across updates.
`),
  "frontend-system-design": codeBlock("text", `
Frontend system design checklist:

Screens and routes
Data sources and cache ownership
Component boundaries
State ownership
Loading, empty, error, and permission states
Accessibility and keyboard flows
Performance budgets
Testing strategy
Observability and rollout
`),
  "dom-render": codeBlock("js", `
// Avoid layout thrashing: batch reads before writes.
const cards = [...document.querySelectorAll(".card")];
const heights = cards.map((card) => card.getBoundingClientRect().height);
const maxHeight = Math.max(...heights);

for (const card of cards) {
  card.style.minHeight = \`\${maxHeight}px\`;
}
`),
  "dom-platform": codeBlock("js", `
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.dataset.visible = "true";
      observer.unobserve(entry.target);
    }
  }
});

document.querySelectorAll("[data-lazy-section]").forEach((section) => {
  observer.observe(section);
});
`),
  "dom-a11y-js": codeBlock("js", `
function openDialog(dialog, trigger) {
  dialog.showModal();
  dialog.querySelector("button, [href], input, select, textarea")?.focus();

  dialog.addEventListener(
    "close",
    () => {
      trigger.focus();
    },
    { once: true }
  );
}
`),
};

function patternedTopic(folder, file, title, focus, kind) {
  const prefix = kind.split("-")[0];
  if (patternData[kind]) {
    return { folder, file, title, focus, ...patternData[kind] };
  }

  const isReact = kind.startsWith("react") || kind.startsWith("routing") || kind.startsWith("data") || kind.startsWith("server") || kind.startsWith("state") || kind.startsWith("forms");
  const isTesting = kind.startsWith("test");
  const isPerf = kind.startsWith("perf");
  const isA11y = kind.startsWith("a11y") || kind.startsWith("seo");
  const isInterview = kind.startsWith("interview") || kind === "frontend-system-design";
  const isCapstone = kind.startsWith("capstone");

  const fundamentals = (() => {
    if (prefix === "html") return ["HTML provides the semantic foundation for web pages and application screens.", "Correct HTML improves accessibility, SEO, browser behavior, forms, navigation, and resilience when JavaScript fails.", "Modern HTML includes useful built-in elements that can replace fragile custom JavaScript when used correctly."];
    if (prefix === "css") return ["CSS turns structured content into usable visual interfaces.", "Correct CSS depends on the cascade, box model, layout algorithms, responsive constraints, and browser rendering.", "Production CSS must handle real content, interaction states, accessibility, browser support, and maintainability."];
    if (prefix === "js") return ["JavaScript powers behavior in the browser and can also run outside the browser.", "Correct JavaScript depends on understanding values, references, scope, functions, async scheduling, and modules.", "Frontend JavaScript must stay responsive because it often shares the main thread with rendering and user input."];
    if (prefix === "dom" || kind === "security-browser" || kind === "web-components") return ["Browser APIs connect JavaScript to documents, events, storage, networking, and security boundaries.", "DOM code should preserve semantics, accessibility, and performance.", "The browser is a shared runtime: user input, rendering, scripts, network, and storage interact."];
    if (prefix === "async") return ["Asynchronous code lets applications wait for timers, network, files, and user events without blocking the main thread.", "Promise-based flows should model success, failure, cancellation, and stale responses.", "Reliable networking code handles loading, empty, error, retry, and timeout states."];
    if (prefix === "tooling") return ["Modern frontend tooling improves feedback loops, compatibility, dependency management, and production builds.", "Tooling should serve the product; avoid complexity that the project does not need.", "A senior developer understands both dev-server convenience and production build consequences."];
    if (isReact) return ["React helps build interactive interfaces from reusable components.", "Modern React is centered on function components, props, state, effects, hooks, and predictable rendering.", "Good React code separates UI state, server state, derived values, effects, and reusable logic."];
    if (isTesting) return ["Frontend tests protect user workflows, business rules, and component contracts.", "The best tests resemble how users interact with the app.", "Test strategy should balance confidence, speed, maintenance, and failure clarity."];
    if (isPerf) return ["Frontend performance is user experience.", "Measure before optimizing, then fix the bottleneck closest to user pain.", "Performance includes network, JavaScript, rendering, images, fonts, server timing, and interaction responsiveness."];
    if (isA11y) return ["Accessibility means people can use the product across abilities, devices, preferences, and assistive technologies.", "Accessible interfaces are usually more robust for everyone.", "SEO and accessibility both benefit from meaningful structure, fast pages, and clear content."];
    if (isInterview) return ["Interview readiness comes from explaining tradeoffs, not reciting definitions.", "Strong answers connect fundamentals to real production consequences.", "Use examples, failure modes, and debugging approaches in every answer."];
    if (isCapstone) return ["Capstone projects prove that concepts can be integrated into real workflows.", "A strong project includes real states: loading, empty, error, success, validation, and responsive behavior.", "Quality matters more than feature count."];
    return ["This topic is part of professional frontend engineering.", "Understand the mental model, then use syntax intentionally.", "Connect the concept to real product behavior."];
  })();

  const concepts = (() => {
    if (prefix === "html") return [["Semantic element", "An element chosen for meaning, not visual appearance."], ["Native behavior", "Built-in browser interaction such as form submission, disclosure, or dialog behavior."], ["Progressive enhancement", "A baseline experience that works before optional JavaScript upgrades it."], ["Accessible name", "The name assistive technologies announce for a control."], ["Metadata", "Document information used by browsers, crawlers, and sharing tools."]];
    if (prefix === "css") return [["Selector", "Targets elements for styling."], ["Cascade", "Chooses winning declarations."], ["Box", "The rendered space an element occupies."], ["Layout algorithm", "Normal flow, flexbox, grid, or positioning rules that arrange boxes."], ["State selector", "A selector that responds to interaction, validation, structure, or component state."]];
    if (prefix === "js") return [["Value", "Data your program works with."], ["Binding", "A named reference created by `let`, `const`, `var`, function, or import."], ["Execution context", "The environment where code runs."], ["Reference", "A way objects and arrays are shared by identity."], ["Module", "A file-level boundary for imports and exports."]];
    if (prefix === "dom") return [["DOM", "Live tree representation of the document."], ["Node", "A unit in the DOM tree."], ["Event", "A notification from user input, browser lifecycle, network, or code."], ["Mutation", "A change to DOM structure, text, attributes, or state."], ["Accessibility tree", "Browser-derived structure consumed by assistive technologies."]];
    if (kind === "security-browser") return [["Same-origin policy", "Restricts how documents and scripts interact across origins."], ["CORS", "Server-controlled permission for cross-origin reads."], ["XSS", "Script injection through untrusted content."], ["CSP", "Policy that limits what scripts and resources can run."], ["Cookie flags", "Security settings such as HttpOnly, Secure, and SameSite."]];
    if (kind === "web-components") return [["Custom element", "A named reusable HTML element."], ["Shadow DOM", "Encapsulated DOM subtree."], ["Slot", "Placeholder for user-provided children."], ["Attribute", "String-based external configuration."], ["Lifecycle callbacks", "Methods invoked when components connect, disconnect, or change attributes."]];
    if (prefix === "async") return [["Task", "Macrotask such as timer, user event, or network continuation."], ["Microtask", "Promise continuation that runs before the next render opportunity."], ["Promise", "Represents eventual success or failure."], ["Cancellation", "Stopping work that is no longer needed."], ["Race condition", "A bug where timing changes the result."]];
    if (prefix === "tooling") return [["Package manager", "Installs and resolves dependencies."], ["Bundler", "Builds dependency graph into browser-ready assets."], ["Transpiler", "Transforms source syntax."], ["Linter", "Finds suspicious code patterns."], ["Build mode", "Different configuration for development, test, staging, and production."]];
    if (isReact) return [["Component", "A reusable piece of UI."], ["Props", "Inputs passed from parent to child."], ["State", "Data that changes over time and triggers rendering."], ["Effect", "Synchronization with systems outside React rendering."], ["Render", "Calling components to describe UI."], ["Commit", "Applying changes to the host environment such as the DOM."]];
    if (isTesting) return [["Unit test", "Small test for isolated logic."], ["Component test", "Renders UI and interacts with it."], ["Integration test", "Checks multiple units together."], ["End-to-end test", "Runs a user journey in a real browser."], ["Mock", "Controlled replacement for external dependency."]];
    if (isPerf) return [["LCP", "Largest Contentful Paint."], ["CLS", "Cumulative Layout Shift."], ["INP", "Interaction to Next Paint."], ["Long task", "Main-thread work that blocks responsiveness."], ["Code splitting", "Loading code only when needed."]];
    if (isA11y) return [["Semantic HTML", "Native meaning and behavior."], ["Focus", "Current keyboard interaction target."], ["Accessible name", "Text announced for a control."], ["Metadata", "Machine-readable page description."], ["Server rendering", "HTML available before client JavaScript executes."]];
    if (isInterview) return [["Mental model", "How the feature really works."], ["Tradeoff", "What you gain and lose."], ["Debug story", "How you find production issues."], ["Example", "Concrete scenario that proves understanding."], ["Edge case", "Where simple answers break."]];
    if (isCapstone) return [["Requirements", "What the app must do."], ["Architecture", "How files, data, UI, and state are organized."], ["States", "Loading, empty, error, success, validation, and disabled states."], ["Quality bar", "Accessibility, responsiveness, tests, and performance."], ["Review checklist", "What makes the project portfolio-ready."]];
    return [["Concept", "Practical meaning."]];
  })();

  const internals = (() => {
    if (prefix === "html") return ["The browser parses HTML into the DOM and derives an accessibility tree from semantics, labels, roles, and relationships.", "Native elements come with behavior that custom elements must recreate carefully: keyboard support, focus behavior, state, validation, and accessibility mappings.", "Progressive enhancement works because browsers can render and submit meaningful HTML before JavaScript loads."];
    if (prefix === "css") return ["Browsers match selectors, compute final styles through cascade and inheritance, calculate layout boxes, paint visual output, and composite layers.", "A CSS bug is often a mismatch between intended layout model and the actual formatting context, containing block, stacking context, or query condition.", "Modern CSS features can reduce JavaScript, but support and fallback strategy still matter."];
    if (prefix === "js") return ["JavaScript creates execution contexts, manages lexical environments, stores objects by reference, and schedules async continuations through the host runtime.", "Engines optimize hot paths, but readable code and stable object shapes often help more than micro-optimizations."];
    if (prefix === "dom" || kind === "security-browser" || kind === "web-components") return ["DOM reads and writes can trigger style and layout work when mixed carelessly.", "Browser security policies isolate origins and require explicit server permission for cross-origin reads.", "Native elements expose behavior and accessibility that custom JavaScript must otherwise recreate."];
    if (prefix === "async") return ["Synchronous code runs to completion before microtasks and later tasks execute.", "Promise callbacks run as microtasks, which can starve rendering if chained heavily.", "Fetch starts browser-managed network work and resolves when response headers are available."];
    if (prefix === "tooling") return ["A bundler follows imports, transforms files, splits chunks, rewrites asset URLs, and emits optimized production files.", "Development servers optimize feedback speed with module replacement and source maps.", "Lockfiles pin dependency resolution so CI and teammates install the same graph."];
    if (isReact) return ["React render should stay pure: same inputs should describe the same UI.", "State updates schedule a re-render; React compares the new element tree with the previous tree and commits necessary DOM changes.", "Effects run after commit and should synchronize with external systems such as subscriptions, timers, network, or imperative widgets."];
    if (isTesting) return ["Tests run in different environments: pure Node, jsdom-like DOM simulation, or a real browser.", "The closer a test is to real user behavior, the more confidence it gives and the slower it usually becomes.", "Stable tests avoid asserting implementation details that users cannot observe."];
    if (isPerf) return ["The browser has limited time per frame; long JavaScript, forced layout, heavy paint, and excessive network cost reduce responsiveness.", "React performance problems usually come from unnecessary re-renders, expensive calculations, unstable references, or too much client JavaScript."];
    if (isA11y) return ["Browsers derive the accessibility tree from DOM, roles, labels, states, and relationships.", "Crawlers and social bots read HTML, links, metadata, and rendered content with varying JavaScript support.", "Focus management is runtime state and must be handled when UI appears, disappears, or traps interaction."];
    if (isInterview) return ["Interviewers usually test whether you can reason from first principles under ambiguity.", "Good frontend system design answers include data flow, component boundaries, state ownership, performance, accessibility, observability, and rollout risk."];
    if (isCapstone) return ["Capstone quality comes from integrating many small decisions: semantic markup, resilient layout, predictable state, error handling, tests, and performance budgets.", "A portfolio-grade project should be easy to run, easy to review, and honest about tradeoffs."];
    return ["Understand how this behaves at runtime, not only how syntax looks."];
  })();

  const mistakes = (() => {
    if (prefix === "html") return ["Replacing native elements with generic `div`s.", "Adding JavaScript for behavior the browser already provides.", "Forgetting labels, keyboard behavior, and useful text alternatives.", "Testing only the visual result instead of DOM meaning and accessibility."];
    if (prefix === "css") return ["Using fixed dimensions that break with real content.", "Fighting specificity with deeper selectors.", "Using positioning for layout that should be flexbox or grid.", "Ignoring focus, disabled, validation, reduced-motion, and responsive states."];
    if (prefix === "js") return ["Confusing mutation with reassignment.", "Ignoring error paths in async code.", "Using loose equality without a deliberate reason.", "Treating objects and arrays as if they are deep-copied by spread."];
    if (prefix === "dom") return ["Building inaccessible custom controls.", "Adding event listeners repeatedly without cleanup.", "Reading and writing layout in tight loops.", "Trusting unsanitized user input."];
    if (prefix === "async") return ["Forgetting `await` inside `try/catch`.", "Letting stale requests overwrite newer results.", "Treating every fetch resolution as successful HTTP status.", "Retrying non-idempotent operations blindly."];
    if (prefix === "tooling") return ["Installing dependencies without understanding why.", "Committing local secrets.", "Assuming dev behavior equals production behavior.", "Ignoring build warnings."];
    if (isReact) return ["Mutating state directly.", "Putting derived state in state unnecessarily.", "Using effects for calculations that belong in render.", "Using array index keys for reorderable lists.", "Optimizing with memoization before measuring."];
    if (isTesting) return ["Testing implementation details.", "Mocking so much that the test proves nothing.", "Skipping accessibility queries.", "Having only snapshot tests for interactive behavior."];
    if (isPerf) return ["Optimizing random code without profiling.", "Shipping huge bundles for rarely used routes.", "Animating layout-heavy properties.", "Ignoring low-end devices and slow networks."];
    if (isA11y) return ["Removing focus outlines.", "Using ARIA instead of native elements.", "Relying on color alone.", "Shipping client-only pages that have empty metadata."];
    if (isInterview) return ["Answering with definitions only.", "Ignoring tradeoffs.", "Pretending one tool is always best.", "Failing to mention testing and edge cases."];
    if (isCapstone) return ["Building only the happy path.", "Ignoring responsive layout.", "Skipping empty and error states.", "Using fake complexity instead of polished fundamentals."];
    return ["Memorizing syntax without understanding behavior."];
  })();

  const practices = (() => {
    if (prefix === "html") return ["Use native elements before custom widgets.", "Keep heading and landmark structure meaningful.", "Make controls work with keyboard and forms by default.", "Use metadata and loading attributes intentionally.", "Test the page with JavaScript disabled when progressive enhancement matters."];
    if (prefix === "css") return ["Choose the layout model before writing declarations.", "Keep selectors shallow and styles close to ownership boundaries.", "Use tokens for repeated design decisions.", "Inspect computed styles, box model, queries, and stacking contexts in DevTools.", "Respect responsive content and accessibility states."];
    if (prefix === "js") return ["Prefer `const` by default and `let` when reassignment is needed.", "Keep functions small and name behavior clearly.", "Handle errors close to where recovery can happen.", "Avoid mutation across component or module boundaries unless it is intentionally owned."];
    if (prefix === "dom") return ["Use semantic HTML first.", "Delegate events for dynamic lists.", "Batch DOM reads and writes.", "Clean up listeners, observers, timers, and subscriptions."];
    if (prefix === "async") return ["Represent loading, success, empty, and error states explicitly.", "Cancel stale requests when the UI changes.", "Use backoff and idempotency for retries.", "Surface useful errors to users and diagnostics to developers."];
    if (prefix === "tooling") return ["Keep scripts simple and documented.", "Use lockfiles.", "Run lint, tests, and builds in CI.", "Audit dependency size and security before adding libraries."];
    if (isReact) return ["Keep render pure.", "Lift state only when multiple components need it.", "Prefer composition over prop tunnels.", "Use effects only for synchronization.", "Measure before memoizing."];
    if (isTesting) return ["Test user-visible behavior.", "Use accessible queries first.", "Keep unit tests fast and E2E tests focused on critical journeys.", "Make failures easy to diagnose."];
    if (isPerf) return ["Measure with DevTools, Lighthouse, React Profiler, and real-user metrics.", "Set budgets for images, fonts, and JavaScript.", "Defer non-critical work.", "Optimize the biggest bottleneck first."];
    if (isA11y) return ["Use semantic elements.", "Test keyboard flows.", "Provide accessible names and error messages.", "Make metadata unique and server-visible where SEO matters."];
    if (isInterview) return ["Start with the mental model.", "Give a practical example.", "Name tradeoffs.", "Mention debugging and tests.", "Keep answers concise but concrete."];
    if (isCapstone) return ["Write requirements before coding.", "Design the data model and component tree.", "Implement core flows first.", "Add tests for critical behavior.", "Polish accessibility, responsiveness, and performance before calling it done."];
    return ["Use the simplest reliable approach."];
  })();

  const example = genericExamples[kind] || (() => {
    if (prefix === "html") return codeBlock("html", `
<main>
  <h1>${title}</h1>

  <section aria-labelledby="details-title">
    <h2 id="details-title">Example section</h2>
    <details>
      <summary>More information</summary>
      <p>This content is available with native browser behavior.</p>
    </details>
  </section>
</main>
`);
    if (prefix === "css") return codeBlock("css", `
.example {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1rem;
}

.example :focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 3px;
}
`);
    if (isReact) return codeBlock("jsx", `
function EmptyState({ title, action }) {
  return (
    <section aria-labelledby="empty-title">
      <h2 id="empty-title">{title}</h2>
      {action}
    </section>
  );
}

export default function OrdersPage({ orders }) {
  if (orders.length === 0) {
    return <EmptyState title="No orders yet" action={<button>Create order</button>} />;
  }

  return orders.map((order) => <article key={order.id}>{order.name}</article>);
}
`);
    if (isTesting) return codeBlock("js", `
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("submits the search term", async () => {
  const onSearch = vi.fn();
  render(<SearchForm onSearch={onSearch} />);

  await userEvent.type(screen.getByLabelText(/search/i), "react");
  await userEvent.click(screen.getByRole("button", { name: /search/i }));

  expect(onSearch).toHaveBeenCalledWith("react");
});
`);
    if (isPerf) return codeBlock("jsx", `
import { lazy, Suspense } from "react";

const ReportsPage = lazy(() => import("./ReportsPage"));

export function AppRoute() {
  return (
    <Suspense fallback={<p>Loading reports...</p>}>
      <ReportsPage />
    </Suspense>
  );
}
`);
    if (isA11y) return codeBlock("html", `
<main>
  <h1>Account settings</h1>
  <button type="button" aria-expanded="false" aria-controls="security-menu">
    Security options
  </button>
  <div id="security-menu" hidden>
    <a href="/settings/password">Change password</a>
  </div>
</main>
`);
    if (isCapstone) return codeBlock("text", `
Project checklist:

1. Define user journeys.
2. Build semantic HTML and resilient layout.
3. Add state and data flow.
4. Handle loading, empty, error, and success states.
5. Test critical paths.
6. Audit accessibility and performance.
`);
    return codeBlock("js", `console.log("Study ${title} with examples and exercises.");`);
  })();

  const scenarios = (() => {
    if (prefix === "html") return ["Replacing a custom disclosure widget with native `details` and reducing JavaScript.", "Auditing a page where visual layout looks right but heading and landmark structure is confusing.", "Improving a form so it submits useful data even before client JavaScript enhances it."];
    if (prefix === "css") return ["Debugging a production layout that overflows only with long customer data.", "Creating a dashboard shell that adapts from desktop sidebar to mobile navigation.", "Explaining a cascade or stacking issue during a frontend interview."];
    if (prefix === "js") return ["Debugging a production bug caused by shared object mutation.", "Explaining why a closure sees the latest variable value.", "Refactoring repeated data transformation into a named function."];
    if (prefix === "dom") return ["Adding accessible keyboard behavior to a dynamic list.", "Persisting user preferences in local storage.", "Preventing injected user content from becoming executable markup."];
    if (prefix === "async") return ["Cancelling old search requests as the user types.", "Showing a retry button after a network failure.", "Updating a realtime notification count without refreshing the page."];
    if (prefix === "tooling") return ["Debugging a production-only build issue.", "Adding a dependency and checking bundle impact.", "Configuring separate API URLs for local and staging environments."];
    if (isReact) return ["A component re-renders because parent state changed.", "A list has wrong input values because keys are unstable.", "An effect keeps refetching because dependencies are unstable."];
    if (isTesting) return ["Protecting checkout flow with an E2E test.", "Testing a form validation message with React Testing Library.", "Using unit tests for a currency formatter."];
    if (isPerf) return ["A route loads slowly because a chart library is in the initial bundle.", "A page shifts after images load.", "Typing lags because a large list filters on every keystroke."];
    if (isA11y) return ["A modal traps focus correctly.", "A React product page exposes metadata for sharing.", "A keyboard user completes a form without a mouse."];
    if (isInterview) return ["Explaining closure behavior with a short code sample.", "Designing a frontend for a dashboard with filters and realtime updates.", "Comparing local state, context, Redux, and server cache."];
    if (isCapstone) return ["Using the project in a portfolio interview.", "Demonstrating responsive layout and accessible form behavior.", "Explaining architecture and tradeoffs in a README."];
    return ["Applying the concept in a real frontend feature."];
  })();

  return { folder, file, title, focus, fundamentals, concepts, internals, mistakes, practices, example, scenarios };
}

const generatedTopics = moreTopics.map(([folder, file, title, focus, kind]) => patternedTopic(folder, file, title, focus, kind));
const allTopics = [...topics, ...generatedTopics];

function seniorDeepDive(topic) {
  const area = topicArea(topic);
  const common = {
    use: [
      `Use ${topic.title} when it directly supports a user workflow, a maintainability goal, or a measurable quality requirement.`,
      "Prefer native browser/platform behavior when it already solves the problem well.",
      "Reach for libraries when the domain is complex, error-prone, or already standardized in your stack.",
    ],
    debug: [
      "Reproduce the issue with the smallest realistic input.",
      "Inspect runtime state instead of trusting source-code assumptions.",
      "Change one variable at a time and keep the failing case visible.",
      "After fixing, add a note, test, or checklist item that would have caught the issue earlier.",
    ],
    review: [
      "Does the code handle loading, empty, error, long-content, and small-screen states?",
      "Is the naming clear enough for a teammate to extend safely?",
      "Are accessibility and keyboard behavior preserved?",
      "Is the performance cost reasonable for the user journey?",
    ],
  };

  const byArea = {
    HTML: {
      use: ["Use semantic elements whenever the element's built-in meaning matches the job.", "Use ARIA only to fill semantic gaps, not to overwrite good native HTML.", "Use progressive enhancement for flows that should remain usable under partial loading or JavaScript failure."],
      debug: ["Inspect the DOM tree, not only the visual page.", "Check the accessibility tree, labels, alt text, landmark names, and heading order.", "Submit forms manually and confirm `name` values, methods, validation, and server payloads."],
      review: ["Are links and buttons used according to purpose?", "Can a keyboard user complete the flow?", "Does the document have useful title, language, metadata, headings, and landmarks?"],
    },
    CSS: {
      use: ["Use normal flow for documents, flexbox for one axis, grid for two axes, and positioning for intentional overlays or offsets.", "Use custom properties and tokens when values express product design decisions.", "Use modern CSS when support is acceptable and it removes complexity."],
      debug: ["Check whether the element participates in block, inline, flex, grid, or positioned layout.", "Inspect computed styles, overwritten declarations, box model, min/max constraints, overflow, and active media/container queries.", "For overlap issues, inspect containing blocks and stacking contexts before increasing `z-index`."],
      review: ["Does the layout survive long words, translated text, zoom, and narrow screens?", "Are focus, hover, disabled, validation, and reduced-motion states handled?", "Are selectors shallow and ownership boundaries clear?"],
    },
    JavaScript: {
      use: ["Use JavaScript for behavior, data transformation, async coordination, and progressive enhancement.", "Keep pure calculations separate from DOM, network, and time-based effects.", "Use modules to create clear boundaries between features."],
      debug: ["Set breakpoints at the event handler, state change, or async boundary.", "Inspect object identity and mutation, especially before and after spread operations.", "Verify execution order when promises, timers, or event handlers interact."],
      review: ["Are error paths handled?", "Can the function be tested without a browser when it is pure logic?", "Is shared mutable state avoided or clearly owned?"],
    },
    Browser: {
      use: ["Use DOM APIs for light interaction, progressive enhancement, and framework-free pages.", "Use observers for visibility, size, or mutation tracking instead of polling.", "Use storage only for data that is safe and appropriate to keep on the client."],
      debug: ["Inspect event target/currentTarget and propagation phase.", "Check layout reads and writes when interaction feels slow.", "Review security errors, CORS headers, CSP violations, and unsafe HTML insertion."],
      review: ["Are listeners, timers, observers, and subscriptions cleaned up?", "Is untrusted content inserted safely?", "Does JavaScript preserve native semantics and focus behavior?"],
    },
    Async: {
      use: ["Use sequential awaits when order matters and parallel promises when work is independent.", "Use cancellation for typeahead, route changes, and stale requests.", "Use retries only when the operation is safe and the retry improves user experience."],
      debug: ["Log request IDs or timestamps to detect stale responses.", "Check whether `response.ok` is handled separately from network failure.", "Throttle the network and test cancellation, retry, timeout, and offline behavior."],
      review: ["Are loading, error, empty, cancelled, and stale states explicit?", "Are retries bounded and idempotency considered?", "Can old responses overwrite newer UI state?"],
    },
    Tooling: {
      use: ["Use tooling that the team can understand, run locally, and support in CI.", "Use Vite or a similar fast tool for modern React apps unless the codebase already has a mature setup.", "Use TypeScript, linting, formatting, and tests as guardrails, not ceremony."],
      debug: ["Compare dev and production builds.", "Inspect lockfiles, dependency versions, environment variables, and generated bundle output.", "Use source maps to connect runtime errors back to source."],
      review: ["Are scripts documented and deterministic?", "Are secrets kept out of frontend bundles?", "Does CI run install, lint, test, and build checks?"],
    },
    React: {
      use: ["Use local state for local UI, context for scoped shared values, server-state tools for remote cache, and global stores for truly cross-cutting client state.", "Use effects for synchronization with external systems, not for derived render calculations.", "Use composition before adding global state."],
      debug: ["Use React DevTools to inspect props, state, owners, and render causes.", "Check keys, effect dependencies, stale closures, and state mutation.", "Profile before adding memoization."],
      review: ["Is state owned by the smallest sensible component?", "Are effects necessary and cleaned up?", "Are data fetching states and accessibility states complete?"],
    },
    Testing: {
      use: ["Use unit tests for pure logic, component tests for UI behavior, and E2E tests for business-critical journeys.", "Mock at the network boundary when testing API-driven UI.", "Keep tests deterministic and easy to diagnose."],
      debug: ["Read the failure message as a user story.", "Inspect rendered DOM output and accessible roles.", "Remove over-mocking before assuming the product code is wrong."],
      review: ["Does the test fail for the bug it is meant to prevent?", "Does it query like a user would find the element?", "Is it stable across harmless refactors?"],
    },
    Performance: {
      use: ["Use performance work when measurement shows a user-facing problem or a budget risk.", "Use lazy loading, splitting, memoization, and virtualization only for the right bottleneck.", "Preserve accessibility and correctness while optimizing."],
      debug: ["Capture a trace before changing code.", "Identify whether time is spent in network, parse, scripting, style, layout, paint, or React rendering.", "Retest on a constrained device or throttled network."],
      review: ["Is the initial bundle reasonable?", "Are images and fonts optimized?", "Does interaction remain responsive under realistic data size?"],
    },
    Accessibility: {
      use: ["Use accessibility checks during implementation, not as a final cleanup pass.", "Use semantic HTML and native controls before ARIA-heavy custom widgets.", "Use server-visible content and metadata where SEO matters."],
      debug: ["Navigate using only the keyboard.", "Inspect accessible names, roles, states, and relationships.", "Test zoom, reduced motion, color contrast, and form error announcements."],
      review: ["Can users identify, reach, operate, and understand every control?", "Does focus move predictably when UI opens or closes?", "Is important content available to crawlers and assistive technology?"],
    },
    Interview: {
      use: ["Use interview notes to practice explaining mental models out loud.", "Convert definitions into examples, tradeoffs, and debugging stories.", "Practice writing small code examples from memory."],
      debug: ["When stuck, restate the input, expected output, and actual output.", "Trace execution step by step before changing code.", "Say your assumptions clearly."],
      review: ["Does the answer mention runtime behavior?", "Does it include a concrete example?", "Does it name at least one tradeoff or failure mode?"],
    },
    Capstone: {
      use: ["Use capstones to prove integrated skill, not to collect random features.", "Choose a small realistic domain and finish it deeply.", "Document tradeoffs and quality decisions in the project README."],
      debug: ["Test the full happy path, then every major failure path.", "Use browser DevTools, React DevTools, accessibility checks, and performance traces.", "Ask whether a reviewer can understand and run the project without private context."],
      review: ["Are all user journeys complete?", "Are states, accessibility, responsiveness, and tests present?", "Is the code organized like a maintainable product instead of a demo dump?"],
    },
  };

  const selected = byArea[area] || common;
  return `# 8. Senior Deep Dive

## When to Use

${list(selected.use)}

## Debug Checklist

${list(selected.debug)}

## Code Review Checklist

${list(selected.review)}
`;
}

function defaultExercises(topic) {
  const area = topicArea(topic);
  const exercises = {
    HTML: [
      { task: `Build a semantic page section that demonstrates ${topic.title}.`, solution: "Include meaningful headings, landmarks where appropriate, labels for controls, useful link text, and keyboard-friendly native elements." },
      { task: "Audit it without CSS and JavaScript.", solution: "The reading order should still make sense, links and forms should still work, and the content should remain understandable." },
    ],
    CSS: [
      { task: `Build a small responsive layout that demonstrates ${topic.title}.`, solution: "Test at narrow, medium, and wide widths; include long text; inspect computed styles and box model in DevTools." },
      { task: "Create one intentional broken version and debug it.", solution: "Identify whether the issue came from cascade, box model, layout model, overflow, media query, or stacking context." },
    ],
    JavaScript: [
      { task: `Write a small function or interaction that demonstrates ${topic.title}.`, solution: "Include one normal input, one edge case, and one failure path. Explain execution order and data mutation rules." },
      { task: "Turn the example into an interview-style output question.", solution: "Write expected output first, then explain stack, scope, references, or async scheduling line by line." },
    ],
    Browser: [
      { task: `Build a tiny DOM interaction for ${topic.title}.`, solution: "Use semantic HTML, add one event listener, preserve keyboard behavior, and clean up any timer/listener/observer if needed." },
      { task: "Inspect the result in DevTools.", solution: "Check DOM structure, events, computed styles, accessibility name, storage/network/security state if relevant." },
    ],
    Async: [
      { task: `Implement an async flow related to ${topic.title}.`, solution: "Represent loading, success, empty, error, cancelled, and stale states explicitly." },
      { task: "Test with slow network and out-of-order responses.", solution: "Use request IDs or cancellation so old responses cannot overwrite newer UI." },
    ],
    React: [
      { task: `Create a React component that demonstrates ${topic.title}.`, solution: "Include props, state or effects only when needed, stable keys for lists, and visible loading/error/empty states where relevant." },
      { task: "Review the component with React DevTools.", solution: "Inspect props, state ownership, render behavior, effect dependencies, and accessibility names." },
    ],
    Testing: [
      { task: `Write a test for a behavior involving ${topic.title}.`, solution: "Use accessible queries, realistic user events, and assertions based on visible behavior." },
      { task: "Add one failure case.", solution: "The test should prove how the UI behaves when data is missing, validation fails, or the network errors." },
    ],
    Performance: [
      { task: `Measure a page or component related to ${topic.title}.`, solution: "Capture a baseline with DevTools or profiler, identify the bottleneck, change one thing, and measure again." },
      { task: "Write a performance budget.", solution: "Include JavaScript size, image size, LCP target, CLS target, and interaction responsiveness target." },
    ],
    Accessibility: [
      { task: `Audit a UI flow related to ${topic.title}.`, solution: "Check keyboard access, focus order, labels, roles, announcements, color contrast, zoom, and reduced motion." },
      { task: "Fix one issue without changing visual design.", solution: "Prefer semantic HTML, labels, focus management, and accessible text before ARIA-heavy changes." },
    ],
    Capstone: [
      { task: `Write requirements for ${topic.title}.`, solution: "Include user journeys, screens, data model, API assumptions, loading/error/empty states, accessibility requirements, and test plan." },
      { task: "Create a review checklist for the finished project.", solution: "Include run instructions, responsive screenshots, keyboard audit, form errors, critical tests, bundle/performance check, and known tradeoffs." },
    ],
  };
  return exercises[area] || [
    {
      task: `Build a small example that demonstrates ${topic.title}.`,
      solution: `Keep the example focused, include one realistic edge case, and explain what the browser or React is doing internally.`,
    },
    {
      task: `List three production mistakes related to ${topic.title}.`,
      solution: `Use the Common Mistakes section, then add how you would prevent each mistake in code review.`,
    },
  ];
}

function noteContent(topic) {
  const scenarios = topic.scenarios || [
    `Using ${topic.title} while building a real frontend feature.`,
    `Debugging a production issue where ${topic.title} was misunderstood.`,
    `Explaining ${topic.title} clearly during a frontend interview.`,
  ];
  const interview = topic.interview || defaultInterview(topic);
  const exercises = topic.exercises || defaultExercises(topic);

  return `# ${topic.title} (Senior Frontend Engineer Perspective)

Before going deeper into frameworks or libraries, understand this topic as part of real frontend engineering: ${topic.focus}.

---

# 1. Fundamentals

${list(topic.fundamentals)}

---

# 2. Core Concepts

${table(topic.concepts)}

---

# 3. Internal Working

${list(topic.internals)}

---

# 4. Common Mistakes

${list(topic.mistakes)}

---

# 5. Best Practices

${list(topic.practices)}

---

# 6. Code Example

${topic.example}

---

# 7. Real-world Scenarios

${list(scenarios)}

---

${topic.deepDive || seniorDeepDive(topic)}

---

# Revision Notes

${list([
    `${topic.title} matters because it affects real users, future maintainers, and production behavior.`,
    `Learn the mental model before memorizing syntax.`,
    `Use browser DevTools, tests, and small examples to verify behavior.`,
    ...topic.fundamentals.slice(0, 4),
  ])}

---

# Cheat Sheet

${table(topic.concepts.slice(0, 8))}

---

# Interview Questions with Answers

${interview
  .map(
    (item, index) => `### ${index + 1}. ${item.q}

${item.a}`
  )
  .join("\n\n")}

---

# Hands-on Exercises

${exercises
  .map(
    (exercise, index) => `## Exercise ${index + 1}

${exercise.task}

### Solution

${exercise.solution}`
  )
  .join("\n\n")}

---

# Senior Frontend Engineer Takeaway

For senior-level work, ${topic.title} is not only a syntax topic. You should be able to explain the mental model, choose the right pattern for a product requirement, identify common failure modes, and verify behavior through tooling, tests, and browser inspection.
`;
}

function revisionContent(topic) {
  const interview = topic.interview || defaultInterview(topic);
  return `# Revision Notes: ${topic.title}

${list([
    ...topic.fundamentals.slice(0, 5),
    ...topic.practices.slice(0, 5).map((practice) => `Best practice: ${practice}`),
    ...topic.mistakes.slice(0, 4).map((mistake) => `Avoid: ${mistake}`),
  ])}

---

# Cheat Sheet

${table(topic.concepts.slice(0, 8))}

---

# Interview Questions & Answers

${interview
  .slice(0, 5)
  .map(
    (item, index) => `### ${index + 1}. ${item.q}

${item.a}`
  )
  .join("\n\n")}

---

# Quick Practice

${numbered([
    `Explain ${topic.title} in two minutes.`,
    "Write a tiny code example from memory.",
    "Name one accessibility, performance, or maintainability risk.",
    "Describe how you would debug a related production issue.",
  ])}
`;
}

function readmeContent() {
  const byFolder = allTopics.reduce((acc, topic) => {
    acc[topic.folder] ||= [];
    acc[topic.folder].push(topic);
    return acc;
  }, {});

  const folderSections = Object.entries(byFolder)
    .map(([folder, entries]) => {
      const rows = entries.map((topic) => `* [${topic.title}](./${folder}/${topic.file})`).join("\n");
      return `## ${folder}\n\n${rows}`;
    })
    .join("\n\n");

  return `# JavaScript React Notes

Complete frontend notes for HTML, CSS, JavaScript, browser APIs, modern tooling, React, testing, performance, accessibility, SEO, interviews, and capstone projects.

These notes follow a consistent senior frontend engineer format:

* Fundamentals
* Core concepts
* Internal working
* Common mistakes
* Best practices
* Code examples
* Real-world scenarios
* Revision notes
* Cheat sheets
* Interview questions with answers
* Hands-on exercises

## How to Study

1. Read one main note slowly.
2. Run or rewrite the code example.
3. Answer the interview questions without looking.
4. Complete the exercise.
5. Revisit the matching file in \`0_Revision_Notes\` before interviews.

${folderSections}
`;
}

function notesFiles() {
  return `# Notes Workspace

Use this folder for planning and tracking study progress.

## Suggested Routine

1. Study one topic.
2. Build the exercise.
3. Summarize the topic in your own words.
4. Add doubts to \`doubtful_topics.md\`.
5. Revisit revision notes after 24 hours and again after one week.
`;
}

function promptsFile() {
  return `# Frontend Study Prompts

Use these prompts with each topic:

* Explain this topic like a senior frontend engineer mentoring a junior.
* Give me five real bugs caused by misunderstanding this topic.
* Turn this topic into interview questions with model answers.
* Give me a small project that forces me to use this concept.
* Review my implementation for accessibility, performance, and maintainability.
`;
}

function linksFile() {
  return `# Important Links

Official references worth checking regularly:

* MDN Web Docs: https://developer.mozilla.org/
* React Docs: https://react.dev/
* WAI Accessibility Fundamentals: https://www.w3.org/WAI/fundamentals/
* Web.dev Performance: https://web.dev/learn/performance/
* Vite Docs: https://vite.dev/
* Testing Library Docs: https://testing-library.com/
* Playwright Docs: https://playwright.dev/
`;
}

function doubtfulTopicsFile() {
  return `# Doubtful Topics

Track topics that need another pass.

| Topic | Doubt | Next action |
| ----- | ----- | ----------- |
| Example | Why does this layout overflow? | Rebuild the example and inspect with DevTools. |
`;
}

for (const topic of allTopics) {
  writeFile(path.join(topic.folder, topic.file), noteContent(topic));
  writeFile(path.join("0_Revision_Notes", topic.folder, topic.file), revisionContent(topic));
}

writeFile("README.md", readmeContent());
writeFile("0_Notes/README.md", notesFiles());
writeFile("0_Notes/prompts.md", promptsFile());
writeFile("0_Notes/imp_links.md", linksFile());
writeFile("0_Notes/doubtful_topics.md", doubtfulTopicsFile());

console.log(`Generated ${allTopics.length} main notes and ${allTopics.length} revision notes.`);
