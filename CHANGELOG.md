# Changelog

## [1.3.0](https://www.github.com/googleapis/google-cloudevents/compare/v1.2.0...v1.3.0) (2021-06-30)


### Features

* run generator (06-30-2021) ([b52b521](https://www.github.com/googleapis/google-cloudevents/commit/b52b521555e12b6110f7d2b6afcbc007ff899625))

## [1.2.0](https://www.github.com/googleapis/google-cloudevents/compare/v1.1.0...v1.2.0) (2021-06-16)


### Features

* Add proto annotations for extension attributes. ([6b0eb9f](https://www.github.com/googleapis/google-cloudevents/commit/6b0eb9f3dbe1591664849d67b332eb43af3741c4))
* run generator (06-16-2021) ([53db137](https://www.github.com/googleapis/google-cloudevents/commit/53db137a47468eb2827f6c14dd99e693307b614a))

## [1.1.0](https://www.github.com/googleapis/google-cloudevents/compare/v1.0.0...v1.1.0) (2021-06-03)


### Features

* enable Dart parsing methods for qt generator ([d140c1c](https://www.github.com/googleapis/google-cloudevents/commit/d140c1cbc033da488acfc7d9d3b601773c810ac6))
* run generator (06-02-2021) ([a346fb1](https://www.github.com/googleapis/google-cloudevents/commit/a346fb11330cacc2f5dd1b12d76627854cbebd45))

## 1.0.0 (2021-05-06)


### ⚠ BREAKING CHANGES

* Manually modify the Firebase auth data JSON schema.
* Rename fields in Firebase auth UserMetadata message

### Features

* add descriptions to main jsonschema fields ([#68](https://www.github.com/googleapis/google-cloudevents/issues/68)) ([af50141](https://www.github.com/googleapis/google-cloudevents/commit/af50141cea3707b98154535d5447d4ae69b968dd))
* Add ordering_key to PubsubMessage ([d619aee](https://www.github.com/googleapis/google-cloudevents/commit/d619aee336c4a4e09127736626e4d03cee8cf745))
* add OSX support ([49b4741](https://www.github.com/googleapis/google-cloudevents/commit/49b4741907572f43249d3090df2a1362a355b44f))
* Add publish_time to PubsubMessage ([503f45b](https://www.github.com/googleapis/google-cloudevents/commit/503f45bd0fb70665937aec307ec6d2559a084fe4)), closes [#151](https://www.github.com/googleapis/google-cloudevents/issues/151)
* add quicktype tool ([#60](https://www.github.com/googleapis/google-cloudevents/issues/60)) ([2f363d2](https://www.github.com/googleapis/google-cloudevents/commit/2f363d24bbb3428a92c5838d5d25629d8817719e))
* add version numbers to jsonschema and update qt tool ([#80](https://www.github.com/googleapis/google-cloudevents/issues/80)) ([e7e5b91](https://www.github.com/googleapis/google-cloudevents/commit/e7e5b911841649abec744ab9cb1ff778845a121c))
* CloudBuild event type ([#40](https://www.github.com/googleapis/google-cloudevents/issues/40)) ([547884e](https://www.github.com/googleapis/google-cloudevents/commit/547884e212bf7b83119b672218e79c08a1161383))
* enable cli flags to quicktype wrapper ([#63](https://www.github.com/googleapis/google-cloudevents/issues/63)) ([a2d1fc4](https://www.github.com/googleapis/google-cloudevents/commit/a2d1fc4983fb11f4b9a97d9f2a46e3c080a2c2e3))
* enhances jsonschema ([#112](https://www.github.com/googleapis/google-cloudevents/issues/112)) ([890c148](https://www.github.com/googleapis/google-cloudevents/commit/890c1481557b80d8c514bcd7a6eacd0b213fc7a5))
* gen snake_case filenames for golang ([#106](https://www.github.com/googleapis/google-cloudevents/issues/106)) ([2712cd5](https://www.github.com/googleapis/google-cloudevents/commit/2712cd5b04152a20660d80ef85ca59cfe193daf3))
* init jsonschema catalog ([#113](https://www.github.com/googleapis/google-cloudevents/issues/113)) ([6f8e8af](https://www.github.com/googleapis/google-cloudevents/commit/6f8e8af9baf6d5464d4e6e09881362cf986089df))
* init repo ([2990c4c](https://www.github.com/googleapis/google-cloudevents/commit/2990c4c6267f5de69471fac91f1cf91a3d2d3518))
* move jsonschemas to separate directory ([#77](https://www.github.com/googleapis/google-cloudevents/issues/77)) ([8f6a78e](https://www.github.com/googleapis/google-cloudevents/commit/8f6a78e99388099c247bbb14498dd3f3370408d5))
* qt enable headers flag ([#89](https://www.github.com/googleapis/google-cloudevents/issues/89)) ([16a3644](https://www.github.com/googleapis/google-cloudevents/commit/16a3644614b00cbf30a2545b9998e34f0662ff5f))
* Rename fields in Firebase auth UserMetadata message ([9e830d6](https://www.github.com/googleapis/google-cloudevents/commit/9e830d64984e03baab8b16751d89fdf55fa188b6))
* run generator (04-21-2021) ([1a53629](https://www.github.com/googleapis/google-cloudevents/commit/1a53629cf9007b98c6e9812695b31c693f782061))
* simplify jsonschema ref names in postgen ([#103](https://www.github.com/googleapis/google-cloudevents/issues/103)) ([cae30bf](https://www.github.com/googleapis/google-cloudevents/commit/cae30bf4f78365d8c7a787443b1725b26f39d691))
* support multi-file exports for qt ([#84](https://www.github.com/googleapis/google-cloudevents/issues/84)) ([2ad29b5](https://www.github.com/googleapis/google-cloudevents/commit/2ad29b5132bcf1572b0ce240e1bcf7e757a7b7b3))
* unwrap jsonschema one level ([#69](https://www.github.com/googleapis/google-cloudevents/issues/69)) ([dea39da](https://www.github.com/googleapis/google-cloudevents/commit/dea39dac2ca54fe2eb209b5650814ab9a9c6cede))
* update descriptions and references ([#75](https://www.github.com/googleapis/google-cloudevents/issues/75)) ([3b86f98](https://www.github.com/googleapis/google-cloudevents/commit/3b86f982fc30d0aef5e37eb6b658bcf21f95fff3))


### Bug Fixes

* change cal jsonschema to use camelCase ([#82](https://www.github.com/googleapis/google-cloudevents/issues/82)) ([683aec5](https://www.github.com/googleapis/google-cloudevents/commit/683aec5ecf1757bb1848aca468504f5a0033fe15))
* correctly pin json schema generator tool ([#196](https://www.github.com/googleapis/google-cloudevents/issues/196)) ([09294b6](https://www.github.com/googleapis/google-cloudevents/commit/09294b6d1f84e46189c9adc0cde8c9de38f7768b))
* correctly pin json schema generator tool ([#196](https://www.github.com/googleapis/google-cloudevents/issues/196)) ([#197](https://www.github.com/googleapis/google-cloudevents/issues/197)) ([8e7e80c](https://www.github.com/googleapis/google-cloudevents/commit/8e7e80c5540bba2024eaf5050acf626439821ab9))
* correctly pin json schema generator tool ([#196](https://www.github.com/googleapis/google-cloudevents/issues/196)) ([#200](https://www.github.com/googleapis/google-cloudevents/issues/200)) ([39793b9](https://www.github.com/googleapis/google-cloudevents/commit/39793b991571ef9ba1753cffd56329b27289623d))
* correctly pin json schema generator tool ([#196](https://www.github.com/googleapis/google-cloudevents/issues/196)) ([#201](https://www.github.com/googleapis/google-cloudevents/issues/201)) ([4a218fc](https://www.github.com/googleapis/google-cloudevents/commit/4a218fc86b9fe4e57a612f312ff99d0d5c8eb180))
* **deps:** pin dependency quicktype-core to 6.0.69 ([#146](https://www.github.com/googleapis/google-cloudevents/issues/146)) ([fc742ac](https://www.github.com/googleapis/google-cloudevents/commit/fc742ace41f7854ed67e3314af45d7e5c5260654))
* **deps:** update dependency quicktype-core to v6.0.69 ([#98](https://www.github.com/googleapis/google-cloudevents/issues/98)) ([09da596](https://www.github.com/googleapis/google-cloudevents/commit/09da596a810068f6580041dc840f80d5c80beecc))
* **deps:** update dependency yargs to v16 ([#101](https://www.github.com/googleapis/google-cloudevents/issues/101)) ([292d506](https://www.github.com/googleapis/google-cloudevents/commit/292d5063a71383cc83bde06a0083debf841cefe9))
* **deps:** update dependency yargs to v16.2.0 ([#137](https://www.github.com/googleapis/google-cloudevents/issues/137)) ([6090948](https://www.github.com/googleapis/google-cloudevents/commit/609094887929df753cf0ac040ee532f8c1a8546d))
* Fix CI. Regen with latest Chrusty plugin. ([#132](https://www.github.com/googleapis/google-cloudevents/issues/132)) ([2a7c823](https://www.github.com/googleapis/google-cloudevents/commit/2a7c823d9fdb4f9ec09b65113f0911c05ace0ff8))
* Fix generation on Windows ([1909082](https://www.github.com/googleapis/google-cloudevents/commit/190908255564974d0bacdd9d1c4afa107f0dc495)), closes [#154](https://www.github.com/googleapis/google-cloudevents/issues/154)
* fix pub/sub message json schema ([#65](https://www.github.com/googleapis/google-cloudevents/issues/65)) ([bd49039](https://www.github.com/googleapis/google-cloudevents/commit/bd49039a16e594cfeb1947baf316ea5b6b3e0390))
* formats proto files ([#167](https://www.github.com/googleapis/google-cloudevents/issues/167)) ([42f72e0](https://www.github.com/googleapis/google-cloudevents/commit/42f72e07dfbe606e071338007a8a060eff1a7c8e))
* ignore the catalog when running qt ([#145](https://www.github.com/googleapis/google-cloudevents/issues/145)) ([efed1cd](https://www.github.com/googleapis/google-cloudevents/commit/efed1cda2e660c0c4fe0ad676921c7cdd88e2d85))
* JSON schema no bigint strings ([#127](https://www.github.com/googleapis/google-cloudevents/issues/127)) ([1cdf408](https://www.github.com/googleapis/google-cloudevents/commit/1cdf4081652ae72c17ca64a3607aceef3bcf621c))
* Manually modify the Firebase auth data JSON schema. ([3fe5d30](https://www.github.com/googleapis/google-cloudevents/commit/3fe5d3010c39a695436eb83c560dc703be6cac36))
* Move the CloudBuild events under google.events.cloud.cloudbuild ([c76d13e](https://www.github.com/googleapis/google-cloudevents/commit/c76d13e4159bd707aa32319e046e267f6d206cf3))
* patch postgen.js to add examples field back ([#130](https://www.github.com/googleapis/google-cloudevents/issues/130)) ([801315a](https://www.github.com/googleapis/google-cloudevents/commit/801315a9305daba35c167525eb951e079f44cf58))
* remove oneof type for 64 bit numbers ([#123](https://www.github.com/googleapis/google-cloudevents/issues/123)) ([59a5dda](https://www.github.com/googleapis/google-cloudevents/commit/59a5dda8c3db0dc993dd6577edeba5e428be4186))
* standardize data proto descriptions ([#120](https://www.github.com/googleapis/google-cloudevents/issues/120)) ([3263d7d](https://www.github.com/googleapis/google-cloudevents/commit/3263d7d01860134221a1abf7a98cbeb5899a78e8))
* Storage object improvements ([081ba21](https://www.github.com/googleapis/google-cloudevents/commit/081ba213a3f503c010d29159bc40fe0d47401346))
* unwrap error data field in pubsub example ([cd822df](https://www.github.com/googleapis/google-cloudevents/commit/cd822dfc422eb9542c7e73765718179cd211e033))
* update java headers and ruby ([#107](https://www.github.com/googleapis/google-cloudevents/issues/107)) ([721f17b](https://www.github.com/googleapis/google-cloudevents/commit/721f17bd0ea56b085b6f0b7ec66bb7aeb1d96b0e))
* update jsonschema ref urls ([#94](https://www.github.com/googleapis/google-cloudevents/issues/94)) ([ce43f72](https://www.github.com/googleapis/google-cloudevents/commit/ce43f72c13382cc42d34e87278e2159f3273d33d))
* update qt out filename ([#95](https://www.github.com/googleapis/google-cloudevents/issues/95)) ([ecea56c](https://www.github.com/googleapis/google-cloudevents/commit/ecea56c1a3eba1c36079d658e3c7f9bef8807ec0))
* use dynamic license header characters per language ([#96](https://www.github.com/googleapis/google-cloudevents/issues/96)) ([bb16887](https://www.github.com/googleapis/google-cloudevents/commit/bb168877a804fcafa63ba3c6a9adaa8e19ef3222))
* use https with license ([#104](https://www.github.com/googleapis/google-cloudevents/issues/104)) ([4cf4711](https://www.github.com/googleapis/google-cloudevents/commit/4cf4711850a99c603c27cca7502ca45851076d00))


### Reverts

* remove json samples from proto folder ([#92](https://www.github.com/googleapis/google-cloudevents/issues/92)) ([f27d68d](https://www.github.com/googleapis/google-cloudevents/commit/f27d68dc7cea6f7345830280af89c10d4c62b243))
