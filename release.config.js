module.exports = {
  branches: ["main"],
  repositoryUrl: "https://github.com/longlc3/udemy-githubaction-reactcode",
  tagFormat: "v${version}",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        successComment: false,
        failTitle: false,
        assets: [{ path: "package.json", label: "package" }],
      },
    ],
  ],
};
