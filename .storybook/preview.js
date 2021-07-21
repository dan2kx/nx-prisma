import "fa.config";

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    sort: "alpha",
  },
  options: {
    storySort: {
      method: 'alphabetical',
    },
  },
  viewport: {
    viewports: {
      mobile: {
        name: "iPhone X",
        styles: {
          width: "375px",
          height: "812px",
        },
      },
      tablet: {
        name: "iPad",
        styles: {
          width: "768px",
          height: "1024px",
        },
      },
      laptop: {
        name: "Laptop",
        styles: {
          width: "1024px",
          height: "768px",
        },
      },
      desktop: {
        name: "Desktop",
        styles: {
          width: "1440px",
          height: "1024px",
        },
      },
    },
  },
}
