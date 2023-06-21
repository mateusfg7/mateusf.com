## [7.1.4](https://github.com/mateusfg7/mfg-b/compare/7.1.3...7.1.4) (2023-06-21)

## [7.1.3](https://github.com/mateusfg7/mfg-b/compare/7.1.2...7.1.3) (2023-06-21)

## [7.1.2](https://github.com/mateusfg7/mfg-b/compare/7.1.1...7.1.2) (2023-06-21)

## [7.1.1](https://github.com/mateusfg7/mfg-b/compare/7.1.0...7.1.1) (2023-06-21)

## [7.1.0](https://github.com/mateusfg7/mfg-b/compare/7.0.0...7.1.0) (2023-06-21)


### Features

* **tailwind:** add new animations ([8700b0a](https://github.com/mateusfg7/mfg-b/commit/8700b0a40ee7685c0488bbb9151d7eb7b8261193))
* **ui:** create Footer component for blog section ([7853ed0](https://github.com/mateusfg7/mfg-b/commit/7853ed04404c27cd9f28b83fade4900a1895a494))
* **ui:** create mobile menu ([96a8af4](https://github.com/mateusfg7/mfg-b/commit/96a8af49fa18ea55c82498615008a121f6922220))
* **ui:** update padding top on blog main content ([c1a6251](https://github.com/mateusfg7/mfg-b/commit/c1a6251457494b95e8210e19eb17e1719da2b193))
* **ux:** adapt footer layout to small devices ([e6c15d9](https://github.com/mateusfg7/mfg-b/commit/e6c15d96b835368c896cc31b94fee184e31506e7))
* **ux:** adapt portifolio page to small devices ([c6b48d5](https://github.com/mateusfg7/mfg-b/commit/c6b48d56475b1a604d7c1f8c7a444b9f2414fd13))
* **ux:** adapt post link layout to small devices ([838ce70](https://github.com/mateusfg7/mfg-b/commit/838ce70357d1fd3626be010f907fb42714a2619f))
* **ux:** adapt post list layout to small devices ([088ab9e](https://github.com/mateusfg7/mfg-b/commit/088ab9e44b3519313a23b2ce00e41f49731ed1ab))
* **ux:** adapt post page to small devices ([5492a99](https://github.com/mateusfg7/mfg-b/commit/5492a992ac85f78ed78e71b37b60db249fac2b51))
* **ux:** adapt tags and categories pages to small devices ([b2b8faa](https://github.com/mateusfg7/mfg-b/commit/b2b8faaf6e59aa2886b3f48547da30ea044bcf3b))


### Bug Fixes

* **ui:** reset just horizontal padding instead all padding on `portifolio-content-w` and `blog-content-w` utilities ([152ed28](https://github.com/mateusfg7/mfg-b/commit/152ed2897392fc0b2ebb1312e5ba2223cd315c1b))
* **ui:** set z-index of tag post number to 0 ([392bb80](https://github.com/mateusfg7/mfg-b/commit/392bb80d48ce3c4cb6a637bdabaa6568d81b4ba0))

## [7.0.0](https://github.com/mateusfg7/mfg-b/compare/6.4.0...7.0.0) (2023-06-19)


### Features

* **api:** create endpoint to get atom feed ([69d0665](https://github.com/mateusfg7/mfg-b/commit/69d06654967946ff1dbd704457f72b6fe838e818))
* **ceo:** create dynamic sitemap ([97ca8ac](https://github.com/mateusfg7/mfg-b/commit/97ca8ac77c75e25ba86f29a2e0babc53f25e5585)), closes [#544](https://github.com/mateusfg7/mfg-b/issues/544)
* **contentlayer:** add custom rehype plugin to get ad inject raw code on code elements ([061b378](https://github.com/mateusfg7/mfg-b/commit/061b378c04eec95555445720ce42715a95f5363f))
* **lib:** check if is on development env instead of production ([6579ff3](https://github.com/mateusfg7/mfg-b/commit/6579ff3ec9dcb2d0a47f39b5a93f2132131f68fd))
* **lib:** create function to generate atom feed ([5c7dfaf](https://github.com/mateusfg7/mfg-b/commit/5c7dfaf6f76511b7db49eca9eaf03bceb56e04b4))
* **lib:** create markdown-to-html converter ([1d815c4](https://github.com/mateusfg7/mfg-b/commit/1d815c46868a5cd806a59ba27d517aa028d6778d))
* **lib:** create webserver constanst for export things like `host` ([dd12303](https://github.com/mateusfg7/mfg-b/commit/dd12303330241b2108fed8977959fe6adc439332))
* **lib:** set host based on `HOST` env variabled ([f713625](https://github.com/mateusfg7/mfg-b/commit/f713625cbf58d6862834e3e0cc2bee952b32f388))
* **lib:** update feed config on `generateFeed()` ([915ad5b](https://github.com/mateusfg7/mfg-b/commit/915ad5ba3cd6b412914568f83ca1dd90e7c559c2))
* **ui:** add custom code component with copy button on post page ([2b2fb01](https://github.com/mateusfg7/mfg-b/commit/2b2fb019235fea459151861c071f23938c9f473c))
* **ui:** improve post matadata spaces on post page ([3ed0a5f](https://github.com/mateusfg7/mfg-b/commit/3ed0a5f355432feb0ffb19f8bd92e1f0002135e7))
* **ui:** small updates on post style ([bf22a03](https://github.com/mateusfg7/mfg-b/commit/bf22a030974b1f27044b067d7333afbd073938c6))


### Bug Fixes

* **deps:** update dependency next to v13.4.6 ([cb5b817](https://github.com/mateusfg7/mfg-b/commit/cb5b8176c8ec6531a817266987167b266c29008c))
* **seo:** use slug version of tag/category link on sitemap ([9b13834](https://github.com/mateusfg7/mfg-b/commit/9b13834c9ec6ac18905f301b296821e9ca212adb))

## [6.4.0](https://github.com/mateusfg7/mfg-b/compare/6.3.0...6.4.0) (2023-06-13)


### Features

* **lib:** create `getTagsAndNumberOfPosts` function ([e37eee6](https://github.com/mateusfg7/mfg-b/commit/e37eee6cade7c907ae9e8def05ceac0421de29dc))
* **ui:** add glitch effect on header title ([c206c40](https://github.com/mateusfg7/mfg-b/commit/c206c40028573bb7bfb1395fb88f7db062472fe9))
* **ui:** change category display on categories page ([1d2319e](https://github.com/mateusfg7/mfg-b/commit/1d2319e97c9adb519480e8bd045368c8207a9d45))
* **ui:** create category selector menu ([6a0c9ae](https://github.com/mateusfg7/mfg-b/commit/6a0c9ae892ef040fbe94e0f684b0b218218d6de6))
* **ui:** create tags page ([d2128a0](https://github.com/mateusfg7/mfg-b/commit/d2128a09b6b47cd8df0a2bbc70243fcd78c2f991))
* **ui:** update `glitchTimeSpan` on glitch effect ([66e7ef0](https://github.com/mateusfg7/mfg-b/commit/66e7ef0b28b77864de04ca6dbe0eb99ef664745f))
* **ui:** update some tailwind styles of post page ([16f28cc](https://github.com/mateusfg7/mfg-b/commit/16f28cc941348074fffd003fb6375893795534d0))


### Bug Fixes

* **deps:** update dependency next to v13.4.5 ([ef4489c](https://github.com/mateusfg7/mfg-b/commit/ef4489cd247c532001bd83398ec7c29e57e5897e))
* **ui:** return toggle theme component just when mounted ([9dbe8f7](https://github.com/mateusfg7/mfg-b/commit/9dbe8f7139feb41504afb985c708b17bf784058e))

## [6.3.0](https://github.com/mateusfg7/mfg-b/compare/6.2.0...6.3.0) (2023-06-09)


### Features

* **stats:** add umami tracker script ([d179569](https://github.com/mateusfg7/mfg-b/commit/d1795690031bc11afc65d42e2579b80c0c229db7))
* **ui:** add headlessui menu to select theme ([0b4ebee](https://github.com/mateusfg7/mfg-b/commit/0b4ebeebc42270358183cc997ca2ff499c559132))
* **ui:** create custom `<a/>` component ([a68a3ab](https://github.com/mateusfg7/mfg-b/commit/a68a3ab14945672989995d9b2f70cad4b290489e))
* **ui:** remove leading on header menu items ([1c30440](https://github.com/mateusfg7/mfg-b/commit/1c304408ee6f9b8c40c5277e6fa7fa5fae9545f4))
* **ui:** update anchor style on hints ([97ba3d0](https://github.com/mateusfg7/mfg-b/commit/97ba3d037b4be14cd9671ed2e6165561f4d1d5fa))


### Bug Fixes

* **deps:** update dependency next-contentlayer to v0.3.3 ([9e6345a](https://github.com/mateusfg7/mfg-b/commit/9e6345a7acfba7935632d783dcae0e3606d755a1))
* **deps:** update dependency react-icons to v4.9.0 ([904a0a3](https://github.com/mateusfg7/mfg-b/commit/904a0a328f8617dbf465706ecb17e1908ad8e3d5))

## [6.2.0](https://github.com/mateusfg7/mfg-b/compare/6.1.0...6.2.0) (2023-06-06)


### Features

* **lib:** use weight on search function ([e1976e8](https://github.com/mateusfg7/mfg-b/commit/e1976e80b6acf2ea6fc8f70f0d14ae56523dc970)), closes [#521](https://github.com/mateusfg7/mfg-b/issues/521)
* **ui:** move metadata to right on post link component ([6b69cf6](https://github.com/mateusfg7/mfg-b/commit/6b69cf6d3c3c86bc6e9d5c91158a306864f297fb))

## [6.1.0](https://github.com/mateusfg7/mfg-b/compare/6.0.2...6.1.0) (2023-05-30)


### Features

* **components:** create shared icons ([6d6fd17](https://github.com/mateusfg7/mfg-b/commit/6d6fd170f75571cfbf7935f6616bd0d640322015))
* **components:** use `@/*` import path on `PostLink` component ([00b2818](https://github.com/mateusfg7/mfg-b/commit/00b2818a070814fdbe4e8cd005f20233fccd3a9d))
* **contentlayer:** add reading_time computed field on Post definitions ([5948ea4](https://github.com/mateusfg7/mfg-b/commit/5948ea43e2be72c8c93195ffe0d73625af9ed4ad))
* **lib:** use `@/*` path when import slug ([c8b71ea](https://github.com/mateusfg7/mfg-b/commit/c8b71ea9b60cf4fbd9d305af64f4f8560d6dcba8))
* **post:** add `author_info` computed field ([d0859d6](https://github.com/mateusfg7/mfg-b/commit/d0859d67f43f49e507b1d08a0b61e5a92c3b80b8))
* **providers:** add `enableSystem` option on next themes provider ([05e7fd8](https://github.com/mateusfg7/mfg-b/commit/05e7fd8dc6c824ce124b73d4b55df40fe718409e))
* **ui:** add reading time on post link ([ee2ed71](https://github.com/mateusfg7/mfg-b/commit/ee2ed717963bfddc7c1498c6cd983a9c12027cec))
* **ui:** add reading time on post page ([e90fdf0](https://github.com/mateusfg7/mfg-b/commit/e90fdf0b81e8ac0f06f3140f7b48a86c12efdc5f))
* **ui:** add shine effect on planned badge ([d69daf6](https://github.com/mateusfg7/mfg-b/commit/d69daf6ff12d9080b2d7df7c02108d80ba3cc34e))


### Bug Fixes

* **contentlayer:** use relative imports instead of ts paths on `Post` definition ([ceb8f68](https://github.com/mateusfg7/mfg-b/commit/ceb8f688cfa035e1862c80d995272340dc4ef5fc))
* **deps:** update dependency next to v13.4.4 ([a72ba1a](https://github.com/mateusfg7/mfg-b/commit/a72ba1af8fc33112badd78b02f68a12e79e0d90c))
* **route:** use `user` instead of `username` on author page ([4f362da](https://github.com/mateusfg7/mfg-b/commit/4f362da6bd359614fea75ffa8405fe2fe62bf4cb))
* **ui:** add a batter background contrast on post-link dark mode ([17281c0](https://github.com/mateusfg7/mfg-b/commit/17281c0bb7c423b6a4df3ebe7f1b554d4075b100))
* **ui:** add better contrast on shine effect color ([1947d4d](https://github.com/mateusfg7/mfg-b/commit/1947d4d48fe6678059445858d60d89d99ce46583)), closes [#523](https://github.com/mateusfg7/mfg-b/issues/523)

## [6.0.2](https://github.com/mateusfg7/mfg-b/compare/6.0.1...6.0.2) (2023-05-25)


### Bug Fixes

* **ui:** breake longer strings on inline code blocks ([2e4513b](https://github.com/mateusfg7/mfg-b/commit/2e4513b8227b5f134e6627f39a63df4c9ab66f57)), closes [#430](https://github.com/mateusfg7/mfg-b/issues/430)
* **ui:** shows code block scroll bar only when necessary ([41d699e](https://github.com/mateusfg7/mfg-b/commit/41d699efad8fc74dace6e081930898b0c9adb66c))

## [6.0.1](https://github.com/mateusfg7/mfg-b/compare/6.0.0...6.0.1) (2023-05-25)


### Bug Fixes

* category link on post page was redirecting to a non existing route `/category/slug` ([9ce8229](https://github.com/mateusfg7/mfg-b/commit/9ce822977223a75ec23bf37fcf45faff6b679182))

## [6.0.0](https://github.com/mateusfg7/mfg-b/compare/5.2.0...6.0.0) (2023-05-25)


### Features

* filter planned posts from `generateStaticParams` on "/post/[slug]" ([367572f](https://github.com/mateusfg7/mfg-b/commit/367572f81eda9799448803159af3f6a9c6d80d52))
* **lib:** create `searchMatch` function to be used as search algorithm ([543babb](https://github.com/mateusfg7/mfg-b/commit/543babb3289f6d000c03130dc6622833139a99a4))
* **lib:** create `separatePostsByStatus` function ([080bcfc](https://github.com/mateusfg7/mfg-b/commit/080bcfc2a5412c4b186941c69f3eb43e12051ec3))
* **lib:** filter test posts on `categorizePostsByYear` ([4926118](https://github.com/mateusfg7/mfg-b/commit/492611867c2436bb8a96839a22f9abf53b3805c3))
* **lib:** filter test posts on `getRawCategoryList` ([215b60f](https://github.com/mateusfg7/mfg-b/commit/215b60f2f6eadf0bba790864c3e0b165b1a14240))
* **lib:** filter test posts on `getRawTagListFromPosts` ([21813e0](https://github.com/mateusfg7/mfg-b/commit/21813e0e394bead1db9cd8ff82073baa59779d83))
* **Post:** add "status" and "test" fields ([5c1dd58](https://github.com/mateusfg7/mfg-b/commit/5c1dd584462bb9d3f0aa308569e80200d57f1701))
* **providers:** add `GeistProvider` provider ([7f5b63a](https://github.com/mateusfg7/mfg-b/commit/7f5b63abb6efa8037b12e603b32627bfc7b0c2ca))
* **tailwind:** add new animations ([d4e3505](https://github.com/mateusfg7/mfg-b/commit/d4e35059c28eaa82657affe74ca5febefa1f2800))
* **ui:** add `Search` compoentn to `Header` ([eba77ec](https://github.com/mateusfg7/mfg-b/commit/eba77ec64cf0aea9178c68f0fe67405a9284e36f))
* **ui:** add badges on knowledge link component ([1d359ec](https://github.com/mateusfg7/mfg-b/commit/1d359ecf481f7fa7938aa0969605ebcd8aa356ed))
* **ui:** create `.common-badge` component class ([ddb76a5](https://github.com/mateusfg7/mfg-b/commit/ddb76a5ce19f1b5e1caab1980d70e2e66dfbb6e3))
* **ui:** create `Keyboard` component ([6a60d52](https://github.com/mateusfg7/mfg-b/commit/6a60d52fccc69704596a82197c2890087a9665c8))
* **ui:** create `Search` component ([ed86468](https://github.com/mateusfg7/mfg-b/commit/ed86468e79fec96b50a484374beb98b6ffff3e4c))
* **ui:** create post badge components ([82c27ce](https://github.com/mateusfg7/mfg-b/commit/82c27ce5242a3ef904660885b2942694fb87d73c))
* **ui:** increase blog vertical padding on small screens ([d846ba3](https://github.com/mateusfg7/mfg-b/commit/d846ba3a2e669c980399146c4482cb8d71b5a461))
* **ui:** separate posts by status on post list ([fd24132](https://github.com/mateusfg7/mfg-b/commit/fd241323e5e5678be8beaeb1de8ba6223b35e5d7))


### Bug Fixes

* **deps:** regenerate lock file ([a3d6112](https://github.com/mateusfg7/mfg-b/commit/a3d611270821345577033d0aaba8d0ef101c52ca))
* **deps:** update dependency next to v13.4.3 ([4828322](https://github.com/mateusfg7/mfg-b/commit/4828322b762e24138a1829c201178e948eab2519))
* **deps:** update dependency remark to v14.0.3 ([e1f257a](https://github.com/mateusfg7/mfg-b/commit/e1f257a1df36d9b5e83fd6b1a81f6346bd356440))

## [5.2.0](https://github.com/mateusfg7/mfg-b/compare/5.1.0...5.2.0) (2023-05-19)


### Features

* **ui:** add "go to top" button on post pages ([9ce884b](https://github.com/mateusfg7/mfg-b/commit/9ce884b499da519b9615226ad366996402e17145)), closes [#29](https://github.com/mateusfg7/mfg-b/issues/29)

## [5.1.0](https://github.com/mateusfg7/mfg-b/compare/5.0.6...5.1.0) (2023-05-18)


### Features

* **ui:** update article style ([67bf7d8](https://github.com/mateusfg7/mfg-b/commit/67bf7d856bfa88be0cb43756ea626fc4cb412eb4))
* **ui:** update article style ([0249822](https://github.com/mateusfg7/mfg-b/commit/02498229f18e9fbc24462a20099bf593ea100c08))
* **utils:** complement slug function with github-slug package ([fd84d93](https://github.com/mateusfg7/mfg-b/commit/fd84d93bac66ed55e7dfcf3ae3d6b9fa65eb9a3e)), closes [#497](https://github.com/mateusfg7/mfg-b/issues/497)
* **utils:** increment `slug` function ([361e731](https://github.com/mateusfg7/mfg-b/commit/361e731582e8f3a4f3b22eecf3e08ab0bd7845b5))

## [5.0.6](https://github.com/mateusfg7/mfg-b/compare/5.0.5...5.0.6) (2023-05-16)

## [5.0.5](https://github.com/mateusfg7/mfg-b/compare/5.0.0...5.0.5) (2023-05-16)


### Features

* **contentlayer:** add remote files function ([98b38af](https://github.com/mateusfg7/mfg-b/commit/98b38af9de1984fe6d5eb7a73660eecec91c96de))
* **contentlayer:** create post source list ([1a1ebc2](https://github.com/mateusfg7/mfg-b/commit/1a1ebc2434c84899dfaa6532f09091d0480c8c29))
* **contentlayer:** generate post id from title slug ([0eee145](https://github.com/mateusfg7/mfg-b/commit/0eee1459038bbb1130db7add325aee1fcda28c98))
* **contentlayer:** get repositories from a list of repositories ([7481968](https://github.com/mateusfg7/mfg-b/commit/748196876fb1752bd90f82498737f4c5bc5ea0ca))
* **ui:** show url paths of category and tags in slug format ([db56f2c](https://github.com/mateusfg7/mfg-b/commit/db56f2c613dc30502e0a7742be94600e37605348)), closes [#489](https://github.com/mateusfg7/mfg-b/issues/489)


### Bug Fixes

* **deps:** downgrade "contentlayer" and "next-contentlayer" to v0.2.9 ([53185de](https://github.com/mateusfg7/mfg-b/commit/53185de9667284f63ad2fcef51e4c0a42c7bf61f))
* **deps:** update dependency contentlayer to ^0.3.0 ([54fee1f](https://github.com/mateusfg7/mfg-b/commit/54fee1f2247b062fdf6757811ebc6b2e70814041))
* **deps:** update dependency next to v13.4.1 ([266e966](https://github.com/mateusfg7/mfg-b/commit/266e96693c1747dc5a306f20d4663685ef914c9e))
* **deps:** update dependency next to v13.4.2 ([9f3095d](https://github.com/mateusfg7/mfg-b/commit/9f3095dfc264b30d2e35ab2fc87b20faf3e0946c))
* **deps:** update dependency next-contentlayer to ^0.3.0 ([797ebf6](https://github.com/mateusfg7/mfg-b/commit/797ebf68ae1f01f140818e45d4ad1deb16a5257d))

## [4.1.0](https://github.com/mateusfg7/mfg-b/compare/4.0.1...4.1.0) (2023-05-10)


### Features

* **ui:** add icon next to category and tag title ([a7b1420](https://github.com/mateusfg7/mfg-b/commit/a7b14203e9aaf6cc439d91f151163b592ca762bf)), closes [#488](https://github.com/mateusfg7/mfg-b/issues/488)
* **ui:** show test message instead of "1" on year section ([9d16c5e](https://github.com/mateusfg7/mfg-b/commit/9d16c5ece058f7f71217e96a5c78a1ee27cca096)), closes [#487](https://github.com/mateusfg7/mfg-b/issues/487)

## [4.0.1](https://github.com/mateusfg7/mfg-b/compare/4.0.0...4.0.1) (2023-05-10)

## [4.0.0](https://github.com/mateusfg7/mfg-b/compare/3.3.4...4.0.0) (2023-05-10)


### Features

* create author page ([c4d07c3](https://github.com/mateusfg7/mfg-b/commit/c4d07c36cedb0098cd0149c64fadf0359d9f8c06))
* **definitions:** update Post definition ([567cecf](https://github.com/mateusfg7/mfg-b/commit/567cecf344e426d93ed0f949f92775a8a18ee9bc))
* **lib:** create authors lib ([8e0118f](https://github.com/mateusfg7/mfg-b/commit/8e0118f68e08c10d091ce221cbe5e7c00dd93951))
* **ui:** add "duration-150" to all element ([d6c685c](https://github.com/mateusfg7/mfg-b/commit/d6c685cb68fda8afbd5dfe06f5c1928c73f06a0a))
* **ui:** add option prop on `Date` component ([015b232](https://github.com/mateusfg7/mfg-b/commit/015b23237c331314f3a11d8b81008739fcd8d80a))
* **ui:** hide year when posts area separated by year ([e49aa24](https://github.com/mateusfg7/mfg-b/commit/e49aa24db69139f9acd6bee87df01abd366d114a))
* **ui:** increase padding bottom on blog layout ([18e5cb2](https://github.com/mateusfg7/mfg-b/commit/18e5cb2b33e4eb9de27690a63813f89d6c14b4e8))
* **ui:** remove "duration" class from `Header` component ([4763d29](https://github.com/mateusfg7/mfg-b/commit/4763d29f55cb843ee76e47b0c81ec169a1880e61))
* **ui:** show author on post page ([45aee43](https://github.com/mateusfg7/mfg-b/commit/45aee4366d5b47344531a47ea19aaebaf8640357))
* **ui:** update `KnowledgeLink` component props ([f63a6a3](https://github.com/mateusfg7/mfg-b/commit/f63a6a3117c71d96ed104b77e1a796a289c41823))
* **utils:** create `transformToSlug` function ([190afc7](https://github.com/mateusfg7/mfg-b/commit/190afc7ac35e8c0256c2e154e31d8b94ca8b18ec))


### Bug Fixes

* **`Post`:** use relative import on `Post` definition ([3d00d37](https://github.com/mateusfg7/mfg-b/commit/3d00d375dae1137e791ef22e02b4dab1f8c3002b))

## [3.3.4](https://github.com/mateusfg7/mfg-b/compare/3.3.3...3.3.4) (2023-05-05)


### Bug Fixes

* **deps:** update dependency next to v13.3.4 ([e1a5675](https://github.com/mateusfg7/mfg-b/commit/e1a5675e3d643e6f23f8ef6d936be5c72f273962))

## [3.3.3](https://github.com/mateusfg7/mfg-b/compare/3.3.2...3.3.3) (2023-05-05)


### Bug Fixes

* **app/layout:** use `crossOrigin` as "anonymous" ([6c7711a](https://github.com/mateusfg7/mfg-b/commit/6c7711a7f0d6259022203172a3c889d48a7b53b4))
* **deps:** update dependency date-fns to v2.30.0 ([6c4ffab](https://github.com/mateusfg7/mfg-b/commit/6c4ffab51abe767e66bf98e4308b7ac4a9eb573a))
* **deps:** update dependency rehype-katex to v6.0.3 ([674ef21](https://github.com/mateusfg7/mfg-b/commit/674ef21d9095616b27307dc6f9e1cf359f71baab))

## [3.3.2](https://github.com/mateusfg7/mfg-b/compare/3.3.1...3.3.2) (2023-05-05)

## [3.3.1](https://github.com/mateusfg7/mfg-b/compare/3.3.0...3.3.1) (2023-04-28)


### Features

* **ui/ux:** made Header responseive ([fdb0f56](https://github.com/mateusfg7/mfg-b/commit/fdb0f5666400121208abdc34dc3899c8362cba1e))

## [3.3.0](https://github.com/mateusfg7/mfg-b/compare/3.2.1...3.3.0) (2023-04-28)


### Features

* **ui/ux:** add `separateByYear` option on `KnowledgeList` component ([9c529e2](https://github.com/mateusfg7/mfg-b/commit/9c529e221a469abf2aa64f5321754417f8384291))
* **ui/ux:** add portifolio menu to header ([1765082](https://github.com/mateusfg7/mfg-b/commit/17650821d82c94bec65b73e24aad97130474e7f2))
* **ui/ux:** create new blog header ([5c94201](https://github.com/mateusfg7/mfg-b/commit/5c94201bb5abb73c6c36fa5d73695b36085c5024))
* **ui/ux:** create option to show year categorized posts ([3e8454c](https://github.com/mateusfg7/mfg-b/commit/3e8454cb3510209b45f3130eeb390fc551880226))
* **ui/ux:** implement blog layout to new header ([a808618](https://github.com/mateusfg7/mfg-b/commit/a808618d3305022f61d359278283de70fa47c0ad))
* **ui/ux:** use `.portifolio-content-w` css class on portifolio page ([d5dbc39](https://github.com/mateusfg7/mfg-b/commit/d5dbc3978ac8ad2d777cada583eb971ed9ad9246))
* **ui:** create `.portifolio-content-w` and `.blog-content-w` css classes ([c71a000](https://github.com/mateusfg7/mfg-b/commit/c71a00038c800fafee1810870ac7d1964bc5a46a))
* **ui:** use `bg-neutral-1000` as default website background ([17943ea](https://github.com/mateusfg7/mfg-b/commit/17943eaf68dbf8bbabb09a0396431d7fcf75a41d))

## [3.2.1](https://github.com/mateusfg7/mfg-b/compare/3.2.0...3.2.1) (2023-04-27)

## [3.2.0](https://github.com/mateusfg7/mfg-b/compare/3.1.0...3.2.0) (2023-04-25)


### Features

* **ui/ux:** update knowledge section ([852e112](https://github.com/mateusfg7/mfg-b/commit/852e11230582c4b03d0f194697fb8f820bf35a05))

## [3.1.0](https://github.com/mateusfg7/mfg-b/compare/3.0.1...3.1.0) (2023-04-25)


### Features

* **ui/ux:** update `ContactSection` on portifolio page ([8648590](https://github.com/mateusfg7/mfg-b/commit/86485906c4edac789f4d906f4f7dc725bb848557))
* **ui:** add border bottom to portifolio Header ([6d5676e](https://github.com/mateusfg7/mfg-b/commit/6d5676e0a34c7e53f4f71dfc0e8ac9abc3c185f7))
* **ui:** update `AboutSection` on portifolio page ([6e3163a](https://github.com/mateusfg7/mfg-b/commit/6e3163af47f93ac8558b1f59c971122e51f39515))
* **ui:** update `ContactSection` on portifolio page ([479a6be](https://github.com/mateusfg7/mfg-b/commit/479a6bef794de9c11346414c0adc9152adef41b9))
* **ui:** update `ProjectCard` on portifolio page ([d03e2d7](https://github.com/mateusfg7/mfg-b/commit/d03e2d712fd0dcbd457daf822cc03f483e961e0e))

## [3.0.1](https://github.com/mateusfg7/mfg-b/compare/3.0.0...3.0.1) (2023-04-24)


### Bug Fixes

* **ui:** remove  global anchor style ([5c41de2](https://github.com/mateusfg7/mfg-b/commit/5c41de2c405554ed89a3f8fe2d3f1df411a2d529))

## [3.0.0](https://github.com/mateusfg7/mfg-b/compare/2.5.8...3.0.0) (2023-03-28)


### Features

* **app:** create base files for app dir ([2eb2ddd](https://github.com/mateusfg7/mfg-b/commit/2eb2ddd10376aafee01c345ebd08fa395a92b5df))
* **ux/ui:** create toggle theme button component ([1813f47](https://github.com/mateusfg7/mfg-b/commit/1813f47b42f05714390eeeab424d9988a5591ea7))
* **ux/ui:** update Header component ([c7c704f](https://github.com/mateusfg7/mfg-b/commit/c7c704f85e57b2c58243fbe9ffea6366b31ce34a))


### Bug Fixes

* **deps:** update dependency react-icons to v4.8.0 ([47b76cb](https://github.com/mateusfg7/mfg-b/commit/47b76cbd47c9f0426734c9eabf7bb5605c6f4e67))

## [2.5.8](https://github.com/mateusfg7/mfg-b/compare/2.5.7...2.5.8) (2023-03-21)

## [2.5.7](https://github.com/mateusfg7/mfg-b/compare/2.5.6...2.5.7) (2023-03-20)


### Bug Fixes

* **deps:** update dependency next to v13.2.4 ([bac75a6](https://github.com/mateusfg7/mfg-b/commit/bac75a66ca71ae712b263da17df571cd5ce03181))
* **deps:** update dependency shiki to ^0.14.0 ([560a877](https://github.com/mateusfg7/mfg-b/commit/560a877513a5a2906c10dc0a8bf3a3f97eae5e1b))

## [2.5.6](https://github.com/mateusfg7/mfg-b/compare/2.5.5...2.5.6) (2023-03-20)

## [2.5.5](https://github.com/mateusfg7/mfg-b/compare/2.5.4...2.5.5) (2023-01-26)


### Bug Fixes

* **deps:** update dependency next to v13.1.4 ([2c66622](https://github.com/mateusfg7/mfg-b/commit/2c66622c9e3b590666b27dd40cf05c79f83d6a74))

## [2.5.4](https://github.com/mateusfg7/mfg-b/compare/2.5.3...2.5.4) (2023-01-26)


### Bug Fixes

* **deps:** update dependency rehype-pretty-code to ^0.9.0 ([862420b](https://github.com/mateusfg7/mfg-b/commit/862420bd12d12a560dc80ef24f5a90357906223e))

## [2.5.3](https://github.com/mateusfg7/mfg-b/compare/2.5.2...2.5.3) (2022-12-26)


### Features

* **seo:** add title on Portifolio page ([ea012aa](https://github.com/mateusfg7/mfg-b/commit/ea012aacf01bb08ca415eed4e86b8a3dcc365b7a))

## [2.5.2](https://github.com/mateusfg7/mfg-b/compare/2.5.1...2.5.2) (2022-12-26)


### Bug Fixes

* **ui:** fixes spelling errors in portfolio ([ddfc89a](https://github.com/mateusfg7/mfg-b/commit/ddfc89a93ae22b94f32828c74d872daa14521504))

## [2.5.1](https://github.com/mateusfg7/mfg-b/compare/2.5.0...2.5.1) (2022-12-26)


### Features

* make portifolio/AboutSection responsive ([942293a](https://github.com/mateusfg7/mfg-b/commit/942293a5fa06fdc892af7eaf6dae1f21924df0af))
* make portifolio/Header responsive ([aa93919](https://github.com/mateusfg7/mfg-b/commit/aa939193cb3f239a1b91b9f2f731f1e1e389cc3c))
* make portifolio/HomeSection responsive ([fe10e48](https://github.com/mateusfg7/mfg-b/commit/fe10e48d05870411dcad8cea12469ad7db771f02))
* make portifolio/KnowledgeSection responsive ([a7a194c](https://github.com/mateusfg7/mfg-b/commit/a7a194cea51d44128c0374c7c0780a1755e26888))
* make portifolio/ProjectCard responsive ([448e8b1](https://github.com/mateusfg7/mfg-b/commit/448e8b14b8eb06da3e5ee7598216ef0dd590683c))
* **ui:** update `.content-w` class to match responsive rules ([00e6d8b](https://github.com/mateusfg7/mfg-b/commit/00e6d8b3196badabfadd343822766c4029884558))


### Bug Fixes

* **deps:** update dependency next to v13.1.0 ([954c5e6](https://github.com/mateusfg7/mfg-b/commit/954c5e6daa4c5294f01f60771a4f4ab14e03bb40))

## [2.4.2](https://github.com/mateusfg7/mfg-b/compare/2.4.1...2.4.2) (2022-12-23)


### Bug Fixes

* scroll behavior on portifolio' ([020d031](https://github.com/mateusfg7/mfg-b/commit/020d031c10090425588ebd1f8719a292f16e529e))

## [2.4.1](https://github.com/mateusfg7/mfg-b/compare/2.4.0...2.4.1) (2022-12-23)


### Features

* add smooth scroll class on body tag ([a6adb19](https://github.com/mateusfg7/mfg-b/commit/a6adb19c209cd5b17d115030546fae613c4d2903))
* change IDs on each portifolio section ([0839858](https://github.com/mateusfg7/mfg-b/commit/08398580af6d5d63ff15c960da35c0741374447f))
* pass scroll position to portifolio/Header ([711552b](https://github.com/mateusfg7/mfg-b/commit/711552bdbcf846358cdb7d89e36abe0915df62ba))
* translate projects description ([f473665](https://github.com/mateusfg7/mfg-b/commit/f47366546db18c19cac4e1be017eb1904dafc43a))
* **ui:** update Header nav behavior ([96d7650](https://github.com/mateusfg7/mfg-b/commit/96d7650e7a436559ea046f9f9a71730c050fffa1))
* update smooth scroll rules ([456030f](https://github.com/mateusfg7/mfg-b/commit/456030f5fd1d7e3347c28a7fe725b348bf5642f6))

## [2.3.1](https://github.com/mateusfg7/mfg-b/compare/2.3.0...2.3.1) (2022-12-22)


### Features

* add base Postifolio page and components ([538b246](https://github.com/mateusfg7/mfg-b/commit/538b246ac37ae051b1d2b6acff6bb27569d9a25a))
* add projects ([1bccd12](https://github.com/mateusfg7/mfg-b/commit/1bccd122418f7cba99288c550becc04dbb78f201))
* **tailwind:** add new classes ([e62c9e6](https://github.com/mateusfg7/mfg-b/commit/e62c9e6eb356165d9901c8d4939486b95f7420f3))
* **ui:** add Chivo Mono font ([fb42719](https://github.com/mateusfg7/mfg-b/commit/fb4271957381fc3bfbd92606ff46aeee185e91e8))
* **ui:** add cv and icons on About section ([6c6a301](https://github.com/mateusfg7/mfg-b/commit/6c6a301e27d1bdfd57e4b266c29ebcdcafd1687e))
* **ui:** add icons and links on portifolio/Header ([50f1820](https://github.com/mateusfg7/mfg-b/commit/50f18209f00786b213c379c3d007f0aa0eef20cd))
* **ui:** add icons on ContactSection ([5319273](https://github.com/mateusfg7/mfg-b/commit/531927364c3f7dbde55bb59dd8405cc53f8ca8f8))
* **ui:** add icons on KnowledgeSection ([2f23998](https://github.com/mateusfg7/mfg-b/commit/2f239989616a250d746c711b00285cd24aab12ec))
* **ui:** add icons on ProjectCard ([20bbe7d](https://github.com/mateusfg7/mfg-b/commit/20bbe7da89037e360bd9e95fd6dff5b347d85f1f))
* **ui:** update ProjectCard ([5e038e1](https://github.com/mateusfg7/mfg-b/commit/5e038e181053b2cc39ddae39bfde32155c171810))
* update cv ([9ffdc16](https://github.com/mateusfg7/mfg-b/commit/9ffdc168331cb9c5135d873bcc8ebcab3d49e3ae))
* update cv ([7165f13](https://github.com/mateusfg7/mfg-b/commit/7165f134911d6193c9aa924fc5ff2de684cc0ae4))


### Bug Fixes

* **deps:** update dependency shiki to ^0.12.0 ([f741cf0](https://github.com/mateusfg7/mfg-b/commit/f741cf000db6a226c6020d57037462728a542fae))

## [2.2.4](https://github.com/mateusfg7/mfg-b/compare/2.2.3...2.2.4) (2022-12-20)

## [2.2.3](https://github.com/mateusfg7/mfg-b/compare/2.2.2...2.2.3) (2022-12-20)


### Bug Fixes

* next using tools folder ([ee1f14a](https://github.com/mateusfg7/mfg-b/commit/ee1f14ac712427da3709ce634222f90fd518b5a7))

## [2.2.2](https://github.com/mateusfg7/mfg-b/compare/98988ae237e25b6e987d170c71d349db4e59dc0e...2.2.2) (2022-12-19)


### Features

* adapt category lib to contentlayer ([ad7728e](https://github.com/mateusfg7/mfg-b/commit/ad7728eae9fd96c1a31a377740df8a994de725dd))
* adapt tag lib to contentlayer ([8040209](https://github.com/mateusfg7/mfg-b/commit/8040209e056c901af686fe4ed6326d8987d95b28))
* convert Document to functional component ([fb20dd0](https://github.com/mateusfg7/mfg-b/commit/fb20dd0ed644264c4725e81a7ec9d837573bee41))
* create `getSortedPosts` lib ([3eb1a40](https://github.com/mateusfg7/mfg-b/commit/3eb1a40856a817ab6fa8f0ca4a2a7c9a11dbf911))
* create rehype-pretty-code config ([c1dc79c](https://github.com/mateusfg7/mfg-b/commit/c1dc79cd548ea8858b88b13ebf5997d7f8cc1e29))
* create syntax-highlighting styles for fark mode ([e51568f](https://github.com/mateusfg7/mfg-b/commit/e51568f1f14bec16ce42709249f04823f3f20c80))
* **mdx:** add new rehype/remark plugins ([8da086d](https://github.com/mateusfg7/mfg-b/commit/8da086d1581ebb1ac4a0907b1e3a6e15ce689a63))
* **mdx:** add remark-breaks plugin ([40d1a2e](https://github.com/mateusfg7/mfg-b/commit/40d1a2e363eb59ffdad815f2e7d3b7fcd38907e7))
* **mdx:** increment rehype-pretty-code options ([e6ed864](https://github.com/mateusfg7/mfg-b/commit/e6ed864928b35e864750e7ad968cde68e77aa721))
* **post/content:** update draft-post ([1df61d3](https://github.com/mateusfg7/mfg-b/commit/1df61d30c65e76defec270144b5bb4c5210da046))
* **post/content:** update draft-post ([9e1ce6e](https://github.com/mateusfg7/mfg-b/commit/9e1ce6eb7845115db81a1fe345aa7aba00a81562))
* **post/content:** update draft-post ([5108447](https://github.com/mateusfg7/mfg-b/commit/5108447373a643ac6127614041cd0af2a85b34cd))
* **post/content:** update draft-post ([fbee1ec](https://github.com/mateusfg7/mfg-b/commit/fbee1ec692cf72e9790bb8606a58824f1b4c40b5))
* **post/content:** update draft-post ([3248ccb](https://github.com/mateusfg7/mfg-b/commit/3248ccb10ed5b2b251750994ade5ff19821f752a))
* **post/content:** update learn-with-ethereum ([55238cd](https://github.com/mateusfg7/mfg-b/commit/55238cde99d9991a0aa45b7ee8df8286459c0cb5))
* **post/content:** update s3-plan ([90b8aeb](https://github.com/mateusfg7/mfg-b/commit/90b8aebb3e3ece70240b3a7e079fb8ecfe6f8ddd))
* **post/content:** update s3-plan ([ce08ee5](https://github.com/mateusfg7/mfg-b/commit/ce08ee542c4e7a6ceef0074ef6531c08a30b1206))
* **rehype-pretty-code:** update highlight classes ([1f5c9e7](https://github.com/mateusfg7/mfg-b/commit/1f5c9e7fa493a868375aa9ef43807a1ab9f162d7))
* **rehype:** add dark and light theme to rehype-pretty-code ([03a2460](https://github.com/mateusfg7/mfg-b/commit/03a24607286df5a402a0bdd9e43c4f79ba2c95fb))
* **rehype:** add rehype-shift-heading plugin ([9392545](https://github.com/mateusfg7/mfg-b/commit/9392545d6a403426f59e23c83f5f757c5e145919))
* **remark:** add remark-hint plugin ([22da1f0](https://github.com/mateusfg7/mfg-b/commit/22da1f098ea4d77238bd7b76be7a585ff60ab09d))
* remove og image on `_app.tsx` ([05a5902](https://github.com/mateusfg7/mfg-b/commit/05a5902c7a643cf0ed85b7c914cc62e1db369478))
* **seo:** add global meta tags on `_app.tsx` ([3b7872a](https://github.com/mateusfg7/mfg-b/commit/3b7872ab84af09b1292faefaba40cbaeaac42ee6))
* **seo:** add meta tags on `_document.tsx` ([31ff389](https://github.com/mateusfg7/mfg-b/commit/31ff389584fc77eddaf7ebb0172fa75a6814b095))
* **seo:** add meta tags on `index.tsx` ([4a51ff0](https://github.com/mateusfg7/mfg-b/commit/4a51ff0015caaa0752ee56167858f9bc388a6a20))
* **seo:** add meta tags on categories page ([f418507](https://github.com/mateusfg7/mfg-b/commit/f4185070cde4415c89142caedb3879b52bee4cba))
* **seo:** add meta tags on category page ([8602bf9](https://github.com/mateusfg7/mfg-b/commit/8602bf999c574d162b252b9087b420a608cbf1b4))
* **seo:** add meta tags on knowledge page ([9af8629](https://github.com/mateusfg7/mfg-b/commit/9af862967290f99a506513f838174124e5ee2c24))
* **seo:** add meta tags on tag page ([c49d8d3](https://github.com/mateusfg7/mfg-b/commit/c49d8d35775240b0340b7d102f7138d5fb50c7f2))
* sort post list on category page ([0b4fd72](https://github.com/mateusfg7/mfg-b/commit/0b4fd72b7e20bbdcc46d104428a83ee4707c104d))
* sort post list on index page ([f1aeabd](https://github.com/mateusfg7/mfg-b/commit/f1aeabdea210c97d9b8a6cb5bc78d2212be86048))
* sort post list on tag page ([efbf51b](https://github.com/mateusfg7/mfg-b/commit/efbf51b115f6ead6e7352a7edbeb5251c84ac97c))
* **tailwind:** add new colors ([0446bb4](https://github.com/mateusfg7/mfg-b/commit/0446bb40e16e39febddb7d26b63808bb5101a239))
* **ui/ux:** add tag icon on the right of each tag ([ae52e56](https://github.com/mateusfg7/mfg-b/commit/ae52e5613de31096d3a063e669d2ef7dccc39ff1))
* **ui:** add dark alternative colors on Categories page ([427a534](https://github.com/mateusfg7/mfg-b/commit/427a5348a2d088fea6a2c7a3ae7846930a8dd50f))
* **ui:** add dark alternative colors on Header ([71392bb](https://github.com/mateusfg7/mfg-b/commit/71392bb9fddc5dd60c65151284a40319a6bdfdd0))
* **ui:** add dark alternative colors on knowledge page ([14c3cf1](https://github.com/mateusfg7/mfg-b/commit/14c3cf127f1bd3576b6f32c0c340cf6d7313457a))
* **ui:** add dark alternative colors on KnowledgeLink ([028df4b](https://github.com/mateusfg7/mfg-b/commit/028df4b483601d2ec4efe52f821c2abc0dd3d566))
* **ui:** add dark alternative colors on main css file ([c974167](https://github.com/mateusfg7/mfg-b/commit/c97416758e6fd6eb3e7b906301e9475cb32ac95e))
* **ui:** add global transitions ([7af63db](https://github.com/mateusfg7/mfg-b/commit/7af63db7f68e8ed84510d9f1e91ad8ecb526640c))
* **ui:** add hover background on category list ([e66a3ba](https://github.com/mateusfg7/mfg-b/commit/e66a3baae54f3c0c8ef96566c4dd8e45e4c6aff6))
* **ui:** add rounded corners on category list ([bfee00c](https://github.com/mateusfg7/mfg-b/commit/bfee00c12fc248f43986c121ae51dd8afe55d64a))
* **ui:** add rounded styles ([53c440c](https://github.com/mateusfg7/mfg-b/commit/53c440c7ec90e26014d83689ac650576a81ec93d))
* **ui:** apply initial tailwind settings ([5b31ff4](https://github.com/mateusfg7/mfg-b/commit/5b31ff41dd57243c72ba2b943c24ccd1c191b340))
* **ui:** create toggle theme button on Header ([64d9c09](https://github.com/mateusfg7/mfg-b/commit/64d9c092940dfbeab0c57b0600d25f729b762584))
* **ui:** improve SEO and a11y on Header component ([fc20267](https://github.com/mateusfg7/mfg-b/commit/fc2026750b356a8977a13aabde370f5bccc77f2c))
* **ui:** update background color ([cc8d90d](https://github.com/mateusfg7/mfg-b/commit/cc8d90d8d227fcfb242dbf27b7fd5977028d9570))
* **ui:** update codeblock colors ([5321914](https://github.com/mateusfg7/mfg-b/commit/532191425d3abb8a2a02a923a6d1831a39f5466a))
* **ui:** update main content styles ([7caaf94](https://github.com/mateusfg7/mfg-b/commit/7caaf94cb6cf5295e85a964bf062956c26ebce3a))
* **ui:** update post title styles to match rehype-shift-heading config ([31c664e](https://github.com/mateusfg7/mfg-b/commit/31c664e33c021bdd562f8cfcea19ff74f683c6b7))
* **ui:** update table styles ([1b00a62](https://github.com/mateusfg7/mfg-b/commit/1b00a62088c3c926d0223933e41c080fddf3c255))
* **ui:** use tailwind default colors ([b6ac602](https://github.com/mateusfg7/mfg-b/commit/b6ac60290417a7bdf9c5e3ef1c90a468b2631214))
* **ui:** use theme provider on _app ([da64e89](https://github.com/mateusfg7/mfg-b/commit/da64e8911062bfcd905ca73b6a823224b75dac13))
* update content main class ([ce6e105](https://github.com/mateusfg7/mfg-b/commit/ce6e105370ce99409307aca6fddf45321c6604e2))
* update utils lib ([7e86f49](https://github.com/mateusfg7/mfg-b/commit/7e86f49daa7144e9f52d2351bc3be004e03b0e8e))
* use contentlayer on index file ([0df79c1](https://github.com/mateusfg7/mfg-b/commit/0df79c118d47fb891c782a157a2a0c7d725ca0a4))
* use contentlayer on knowledge page ([3c5bb7b](https://github.com/mateusfg7/mfg-b/commit/3c5bb7bd602f429f91fad47e6510e1d29d373ebe))
* use static image url on Header component ([1432d9d](https://github.com/mateusfg7/mfg-b/commit/1432d9d16e708b995deb6e5958b7d82027a67ae2))
* **ux:** add footnotes styles ([5033478](https://github.com/mateusfg7/mfg-b/commit/503347886fc84c68ddfa8c32b0c0c9555f03e8fd))


### Bug Fixes

* **#406:** remove `<a>` child on `<Link>` components ([d0404d8](https://github.com/mateusfg7/mfg-b/commit/d0404d88a498cef5f36a3991e0e5ae38b1fd3db6)), closes [#406](https://github.com/mateusfg7/mfg-b/issues/406)
* adapt category page to new category lib ([c0f01b9](https://github.com/mateusfg7/mfg-b/commit/c0f01b9ee5357f6a33d0e930882d57806d5d6913))
* adapt specific category page to new category lib ([c12355d](https://github.com/mateusfg7/mfg-b/commit/c12355d80a039f8539480ab233e343fa8d863fee))
* adapt tag page to new tag lib ([f3189bb](https://github.com/mateusfg7/mfg-b/commit/f3189bb1fab74eebfaf73267da143d46e82ca2d1))
* data format on elixir_notes_nlw5 ([704267a](https://github.com/mateusfg7/mfg-b/commit/704267ae902e1eee64abd94aac8dcd2a11f64f3c))
* **deps:** install eslint-plugin-n ([b952006](https://github.com/mateusfg7/mfg-b/commit/b952006646e3f3263772aa3db257da9f435164f2)), closes [#419](https://github.com/mateusfg7/mfg-b/issues/419)
* **deps:** update dependency highlight.js to v11.7.0 ([d2406a7](https://github.com/mateusfg7/mfg-b/commit/d2406a7e8127453e9f9e07c48532b2c4254ea2a1))
* **deps:** update dependency next to v12.3.3 ([9ef3888](https://github.com/mateusfg7/mfg-b/commit/9ef38882dc6a4f605df2cfe947ed9fa0707182e1))
* **deps:** update dependency next to v13 ([32d7e2f](https://github.com/mateusfg7/mfg-b/commit/32d7e2ff22d633d1e4b9b9930e1cb56f53fed3e5))
* **deps:** update dependency next to v13.0.6 ([f04e7db](https://github.com/mateusfg7/mfg-b/commit/f04e7db645bd68debadb83c934002be0d8a1fb7f))
* **deps:** update dependency next to v13.0.7 ([79d6c97](https://github.com/mateusfg7/mfg-b/commit/79d6c9772cffffdf2ff8a1152bb6f67b20cb404c))
* **deps:** update dependency react-icons to v4.6.0 ([232c927](https://github.com/mateusfg7/mfg-b/commit/232c927a9f09838acf4065147ced3910138df56a))
* **deps:** update dependency react-icons to v4.7.1 ([0737e2f](https://github.com/mateusfg7/mfg-b/commit/0737e2f3289c33504d62537e875c4f7f9510739d))
* **deps:** update dependency rehype-highlight to v6 ([d53d87f](https://github.com/mateusfg7/mfg-b/commit/d53d87f1f66cff59ff16a62986a1f7c4c1268995))
* **deps:** update dependency rehype-slug to v5.1.0 ([30c1e5a](https://github.com/mateusfg7/mfg-b/commit/30c1e5a492966077e4572170ed556338fb099401))
* **deps:** update dependency styled-components to v5.3.6 ([1267ac7](https://github.com/mateusfg7/mfg-b/commit/1267ac7d076bfa0ff2f3eec6049e7e8042b383e0))
* elixir_notes_nlw5 ([eb02001](https://github.com/mateusfg7/mfg-b/commit/eb0200101a5277cfe0c55b7e7c411cc5e6d296f3))
* elixir_notes_nlw5 ([98988ae](https://github.com/mateusfg7/mfg-b/commit/98988ae237e25b6e987d170c71d349db4e59dc0e))
* next using tools folder ([02eee9d](https://github.com/mateusfg7/mfg-b/commit/02eee9df1531b7f95bb773075f2dae4460ad79d9))
* remove `avatarUrl` from Header imports ([5a5b826](https://github.com/mateusfg7/mfg-b/commit/5a5b826b52cd9b60487dd4db895e67cbfceb34dc))
* type error on `Container` component ([fbec0c3](https://github.com/mateusfg7/mfg-b/commit/fbec0c323ea0d950c9236b22ff00cd287858560c)), closes [#414](https://github.com/mateusfg7/mfg-b/issues/414)
* **ui:** use .knowledge-content before title tags ([976aa9e](https://github.com/mateusfg7/mfg-b/commit/976aa9edb1874b93c1770c4e9c5e7e664fec23cd))
* **ui:** use background on `pre` tag ([0e0674d](https://github.com/mateusfg7/mfg-b/commit/0e0674dfe7dfa0496afc0a335f750dff2b466432))

