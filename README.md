<h1 align="center">SpaceX Land API</h1>

<p align="center">
<a href="https://github.com/spacexland/api/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
<a href="https://github.com/spacexland/api/blob/master/CONTRIBUTING.md#feature"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
<a href="https://spacexland.slack.com"><img src="https://img.shields.io/badge/slack-join-orange.svg"></a>
</p>
<p align="center">🚀GraphQL & REST APIs to explore all the rockets, launches & other SpaceX's data!</p>
<p align="center"><img src="https://cdn-images-1.medium.com/max/2600/1*ixnzMP6t4Iot9nZpBmr1Vw.png"></p>

## Usage
Navigate through all the 🌌data via either browser or terminal. Both APIs provide full & updated docs in order to make easy fetching the data. 

💜GraphQL 🔗https://api.spacex.land/graphql
```bash
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "{ rockets { rocket_name } }" }' \
  https://api.spacex.land/graphql
```

🖤REST 🔗https://api.spacex.land/rest
```bash
curl -s https://api.spacex.land/rest/rockets
```

## Buil cool 🚀 stuff

It was never easier to create & share 💯web application projects using your favs FE libraries. Whether you're starting with GraphQL or not, give a 👀at the differents live examples, you could discover interesting things!

❤️Angular 🔗https://codesandbox.io/s/o9nmplk96y

💙React 🔗https://codesandbox.io/s/r4p8q1kmvp

💚Vue 🔗https://codesandbox.io/s/m3v8yv0nw9

Pick whichever programming language & FE library you feel confident with, schedule some ⏳in your agenda & enjoy coding 👌webapps!

## Installation

**Production**
```bash
yarn && yarn start
```

**Development**
```bash
yarn && yarn dev
```

## Contribute

There are many ways to [contribute](https://github.com/spacexland/api/blob/master/CONTRIBUTING.md) to SpaceX Land API.
* [Submit bugs](https://github.com/spacexland/api/issues) and help us verify fixes as they are checked in.
* Review the [source code changes](https://github.com/spacexland/api/pulls).
* Engage with other TypeScript users and developers on [Slack](https://spacexland.slack.com). 
* [Contribute bug fixes](https://github.com/spacexland/api/blob/master/CONTRIBUTING.md).

This project has adopted the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/1/4/code-of-conduct.md).

## Help & Community
Join our [Slack community](http://spacexland.slack.com) if you run into issues or have questions. We love talking to you!

## License
SpaceX Land API is MIT licensed, as found in the [LICENSE](https://github.com/spacexland/api/blob/master/LICENSE.md) file.
