# Data Visualization with Recharts, Chart.js, D3, and Plotly

Data visualization is common in dashboards, analytics products, and AI insights tools.

---

# 1. When to Use Each Library

| Library | Best for |
| ------- | -------- |
| Recharts | React-friendly charts with simple APIs |
| Chart.js | Common chart types with quick setup |
| D3.js | Custom, low-level, highly flexible visualizations |
| Plotly | Scientific, analytical, and interactive charts |

For most React dashboards, start with Recharts or Chart.js. Use D3 when you need custom behavior that chart libraries cannot provide.

Install examples:

```bash
npm install recharts
npm install chart.js react-chartjs-2
npm install d3
npm install plotly.js react-plotly.js
```

---

# 2. Common Chart Types

* Line chart
* Bar chart
* Pie chart
* Area chart
* Scatter plot
* Heatmap
* Table + chart combination

AI dashboard examples:

* Sentiment by month
* Summary category counts
* Usage over time
* Token/cost tracking
* Document insights by topic

---

# 3. React Example Shape

```tsx
type InsightPoint = {
  label: string;
  score: number;
};

const data: InsightPoint[] = [
  { label: "Positive", score: 72 },
  { label: "Neutral", score: 18 },
  { label: "Negative", score: 10 },
];
```

Before choosing a chart, ask:

```text
What question should this chart answer?
What comparison should be easy?
What should happen on mobile?
What should screen reader users receive?
```

---

# 4. Accessibility Checklist

Charts need more than visuals.

* Add a clear title.
* Add a text summary.
* Use sufficient color contrast.
* Do not rely on color alone.
* Provide data table fallback for important data.
* Make tooltips keyboard-friendly when possible.

Example summary:

```html
<section aria-labelledby="sentiment-title">
  <h2 id="sentiment-title">Sentiment summary</h2>
  <p>Most responses were positive, with 72 positive, 18 neutral, and 10 negative results.</p>
  <div aria-hidden="true">Chart renders here</div>
</section>
```

---

# 5. Performance Checklist

* Do not render thousands of SVG nodes unnecessarily.
* Use pagination, aggregation, or virtualization for huge data.
* Lazy-load heavy chart libraries if charts are not on the first screen.
* Memoize transformed chart data when transformation is expensive.
* Avoid re-rendering charts on every keystroke.

---

# 6. Common Mistakes

* Choosing a chart before knowing the user question.
* Showing too many colors and labels.
* Making charts unreadable on mobile.
* Not providing text/table alternatives.
* Importing a heavy library into the initial bundle unnecessarily.

Export/package notes from real dashboard work:

| Need | Common package direction |
| ---- | ------------------------ |
| Import Excel | `xlsx` |
| Export Excel/CSV | `xlsx`, `papaparse`, or backend export |
| Print page | browser `window.print()` with print CSS |
| Download PDF | backend PDF generation or a reviewed client library |

For serious reports, prefer backend-generated files when accuracy, pagination, fonts, or auditability matter.

---

# 7. Practice Project

Build an **AI Insights Dashboard**:

* Input text or upload sample data.
* Show AI-generated summary.
* Display chart of categories/sentiment.
* Add text explanation below chart.
* Add loading, error, and empty states.
* Run Lighthouse and check accessibility.
