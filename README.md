<h1 align="center">Live Odds Services</h1>

<p align="center">Live Football World Cup Scoreboard library that shows all the ongoing matches and their scores.</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors" target="_blank"><img alt="👪 All Contributors: 2" src="https://img.shields.io/badge/%F0%9F%91%AA_all_contributors-2-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://github.com/undg/los/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://codecov.io/gh/undg/los" target="_blank"><img alt="🧪 Coverage" src="https://img.shields.io/codecov/c/github/undg/los?label=%F0%9F%A7%AA%20coverage" /></a>
	<a href="https://github.com/undg/los/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg"></a>
	<a href="http://npmjs.com/package/los"><img alt="📦 npm version" src="https://img.shields.io/npm/v/los?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

## Usage

```shell
git clone https://github.com/undg/pos
cd pos
pnpm i los
```

```ts
import los from "los";

const board = new los.board();
board.add("MEX-CAN", [{ name: "Mexico" }, { name: "Canada" }]); // Start a new match, assuming initial score 0 – 0 and adding it the scoreboard.
board.add("ESP-BRA", [
	{ name: "Spain", score: 3 },
	{ name: "Brazil", score: 2 },
]); // Start a new match, assuming initial score 3 – 2 and adding it to the scoreboard.
board.update("MEX-CAN", [1, 0]); // Update score as a pair of absolute scores: home team score and away
board.delete("MEX-CAN"); // Finish match currently in progress. This removes a match from the scoreboard.
board.get(); // Get a summary of matches in progress ordered by their total score. The matches with the same total score will be returned ordered by the most recently started match in the scoreboard.
board.render(); // same as get(), but return array of strings if format: "Uruguay 6 - Italy 6"
```

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://undg.dev/"><img src="https://avatars.githubusercontent.com/u/5306983?v=4?s=100" width="100px;" alt="undg"/><br /><sub><b>undg</b></sub></a><br /><a href="https://github.com/undg/los/commits?author=undg" title="Code">💻</a> <a href="#content-undg" title="Content">🖋</a> <a href="https://github.com/undg/los/commits?author=undg" title="Documentation">📖</a> <a href="#ideas-undg" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-undg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-undg" title="Maintenance">🚧</a> <a href="#projectManagement-undg" title="Project Management">📆</a> <a href="#tool-undg" title="Tools">🔧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

<!-- You can remove this notice if you don't want it 🙂 no worries! -->

> 💙 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app).
