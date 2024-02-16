import type { DebugTool } from "../types"

export default {
  tools: [
    {
      name: "lighthouse",
      category: "extension",
      description: "open-source automated tool for improving the quality of web pages. ",
      moreDetails: "It runs audits for performance, accessibility, progressive web apps, and more, providing actionable insights and recommendations to enhance website performance.",
      picture: "...",
      url: "https://page-speed.dev/"
    },
    {
      name: "axe",
      category: "webpage",
      description: "a powerful accessibility testing tool that helps developers ensure their web content is accessible to all users, including those with disabilities.",
      moreDetails: " It scans web pages for accessibility issues and provides detailed reports and recommendations for remediation.",
      picture: "...",
      url: "https://page-speed.dev/"
    },
    {
      name: "css overview",
      category: "extension",
      description: "CSS Overview is a tool that helps developers analyze and understand the CSS styles applied to a web page.",
      moreDetails: " It provides a visual overview of all CSS styles used on a page, including selectors, properties, and values, making it easier to manage and debug CSS code.",
      picture: "...",
      url: "https://page-speed.dev/"
    },
    {
      name: "squoosh",
      category: "extension",
      description: "open-source image optimization tool developed by Google.",
      moreDetails: " It allows users to compress and optimize images for the web by adjusting various settings such as compression level, image format, and resizing, while maintaining visual quality.",
      picture: "...",
      url: "https://page-speed.dev/"
    },
    {
      name: "web page test",
      category: "webpage",
      description: "free online tool for measuring and analyzing the performance of web pages.",
      moreDetails: " It allows users to run performance tests from multiple locations and devices, providing detailed metrics and visualizations to help identify areas for improvement.",
      picture: "...",
      url: "https://page-speed.dev/"
    },
    {
      name: "page speed",
      category: "webpage",
      description: "also known as Google PageSpeed Insights, is a tool provided by Google to analyze the performance of web pages on both desktop and mobile devices.",
      moreDetails: " It evaluates various aspects of page performance and provides suggestions for optimization to improve loading speed and user experience.",
      picture: "...",
      url: "https://page-speed.dev/"
    },
    {
      name: "wappalyzer",
      category: "extension",
      description: "open-source tool that detects the technologies used on websites.",
      moreDetails: " It identifies content management systems, e-commerce platforms, web frameworks, and other tools and services, helping users understand the technology stack behind any website.",
      picture: "...",
      url: "https://page-speed.dev/"
    },
    {
      name: "open graph",
      category: "webpage",
      description: "Open Graph is a protocol developed by Facebook that allows websites to control how their content appears when shared on social media platforms.",
      moreDetails: " It enables developers to specify metadata such as titles, descriptions, and images, optimizing the appearance of shared content and increasing engagement.",
      picture: "...",
      url: "https://page-speed.dev/"
    },
  ]
} satisfies { tools: DebugTool[] }