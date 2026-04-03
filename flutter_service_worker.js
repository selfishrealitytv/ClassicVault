'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1ea356fe7f202ba6149f3a546d51d8a0",
"version.json": "ad206bf952df537ae39bde5cad5a9b62",
"index.html": "14f5f9ae9e17c7d38815b8fcc69a063c",
"/": "14f5f9ae9e17c7d38815b8fcc69a063c",
"main.dart.js": "183fcc80fd29086ba9bb1af68ca46ae7",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "9d5775ace2b488f64bba95f21b87d523",
"icons/Icon-192.png": "25a51e1af48d041b525d29b51684e454",
"icons/Icon-maskable-192.png": "25a51e1af48d041b525d29b51684e454",
"icons/Icon-maskable-512.png": "72c9258627af6074505b5ffef8ad759d",
"icons/Icon-512.png": "72c9258627af6074505b5ffef8ad759d",
"manifest.json": "3c66bf12b645e8d06debf815830410ad",
"assets/AssetManifest.json": "dd1e79cc0eaed22de64490e62cd48f56",
"assets/backend/media/posters/felix-the-cat-wiki.jpg": "04d66f633c255f8a90d9923bbbe8dd71",
"assets/backend/media/posters/biblical-the-story-of-jesus-herod-s-wrath.jpg": "c957bfc5bf14068894b1810af7f4a209",
"assets/backend/media/posters/biblical-the-living-christ-boyhood.jpg": "6374a92bdde7b86013b5dfe90fce3d45",
"assets/backend/media/posters/reet-petite-and-gone.svg.png": "56ec63cc29b793f95ff8639529a13f11",
"assets/backend/media/posters/horrors-of-spider-island.svg": "d874a72005040efd162558047c2da6ed",
"assets/backend/media/posters/betty-boop-recovered.jpg": "ee3e12b1bb1030dc9a100ad4805b968b",
"assets/backend/media/posters/the-twilight-zone-bright.png": "b137fab63a584da09647e7602282097b",
"assets/backend/media/posters/biblical-go-down-death.jpg": "f598b4caecc1cc97c4244c3226d0352a",
"assets/backend/media/posters/body-of-the-prey.jpg": "5ee12a47223aeb24f12095b985b08df9",
"assets/backend/media/posters/sherlock-jr.jpg": "d1542057deae354d939105cdf857e9d9",
"assets/backend/media/posters/topper.jpg": "a939fc2bd1194857fd96ffab4c652910",
"assets/backend/media/posters/faith-go-down-death-real.jpg": "39d00f3a7e53d688e56781830f7e5fc3",
"assets/backend/media/posters/murder-in-harlem.svg.png": "d02f4fce1cb2fefab2cbabb622ff526a",
"assets/backend/media/posters/bonanza.jpg": "8b1cae540d62fdf5819fb7b7e2d8a079",
"assets/backend/media/posters/the-twilight-zone-wiki.png": "10fadad33c3168333ccb30ddca96a792",
"assets/backend/media/posters/the-big-combo.jpg": "4d3f80637307ba6d6a7aa9075dc0ce2d",
"assets/backend/media/posters/santa-claus-conquers-the-martians.jpg": "51bbc541c2449ed13ecaac6369056b95",
"assets/backend/media/posters/brain-that-wouldnt-die.svg": "670c7582459819f40000f6a1dc11170e",
"assets/backend/media/posters/one-step-beyond.jpg": "71d90a665b0a27878440dcf1c13cf804",
"assets/backend/media/posters/the-blacksmith.svg": "9eda0f9254ecef7cfd4a5ecf63c66bc0",
"assets/backend/media/posters/within-our-gates.jpg": "853fc1d03c12ac0aeb9255fcbb17f7bf",
"assets/backend/media/posters/betty-boop-bright.png": "c1592f4cbc2cb8af83a114c3bda43a52",
"assets/backend/media/posters/the-beulah-show-local.jpg": "706e4529d6750ceb09d0ac5dfe603a1d",
"assets/backend/media/posters/two-gun-man-from-harlem.jpg": "0c64792c8c94a53d5350647dbcc3d9af",
"assets/backend/media/posters/two-gun-man-from-harlem-real.jpg": "9d1ead73e678fa2f51a70a933b0bf017",
"assets/backend/media/posters/the-twilight-zone-omdb-source.jpg": "9b560e502fa5f4cf079a49d9ab727eac",
"assets/backend/media/posters/biblical-the-living-christ-challenge-of-faith.jpg": "6374a92bdde7b86013b5dfe90fce3d45",
"assets/backend/media/posters/the-white-warrior-wiki.jpg": "fa06be43d187ee98c6f1fa430c863aef",
"assets/backend/media/posters/go-down-death.jpg": "f598b4caecc1cc97c4244c3226d0352a",
"assets/backend/media/posters/hellbound-train.jpg": "53a7ca8983be3a6863247966af23d0d0",
"assets/backend/media/posters/reet-petite-and-gone.jpg": "b0cc52ffe40f2ed4360ba4a0523439e1",
"assets/backend/media/posters/boy-what-a-girl.svg": "78a64dc752c1be546f5546f99229c89b",
"assets/backend/media/posters/the-love-nest.svg": "e663b000475a819933f9d8546f4df02f",
"assets/backend/media/posters/faith-body-and-soul-1925-real.jpg": "b7bc71332fd3d5ecbef4e3bddbb9551d",
"assets/backend/media/posters/the-white-warrior-omdb.jpg": "9d1ead73e678fa2f51a70a933b0bf017",
"assets/backend/media/posters/biblical-the-living-christ-escape-to-egypt.jpg": "6374a92bdde7b86013b5dfe90fce3d45",
"assets/backend/media/posters/boy-what-a-girl-real.jpg": "9d1ead73e678fa2f51a70a933b0bf017",
"assets/backend/media/posters/the-gold-rush.jpg": "fe91aa5492d15c39eb4f52e2f3dc6d52",
"assets/backend/media/posters/boy-what-a-girl-wiki.jpg": "140e14cef00be3d3276968e7d92516db",
"assets/backend/media/posters/harlem-rides-the-range-wiki.jpg": "1b0b0a1882a2ece48797eaeae9a2af98",
"assets/backend/media/posters/reet-petite-and-gone.svg": "ba7eaaa4472dfb1e613767e414cfc31e",
"assets/backend/media/posters/boy-what-a-girl.jpg": "52f578ff36b194648798cbeafb7dea1b",
"assets/backend/media/posters/the-white-warrior-real.jpg": "9d1ead73e678fa2f51a70a933b0bf017",
"assets/backend/media/posters/boy-what-a-girl-omdb.jpg": "9d1ead73e678fa2f51a70a933b0bf017",
"assets/backend/media/posters/the-scar-of-shame.jpg": "2f5dfeb9bdd109d2b8d780edaf2b9abc",
"assets/backend/media/posters/go-down-death.svg": "3028891ff1458ded580bf34f99772498",
"assets/backend/media/posters/horrors-of-spider-island.svg.png": "25ac56908eda4565c07236f049bf973b",
"assets/backend/media/posters/two-gun-man-from-harlem-wiki.jpg": "36d241c6af11e366b49827d352504e3e",
"assets/backend/media/posters/adventures-of-superman.jpg": "ff5d61cf2841451fa3f07a69bcfdf9a9",
"assets/backend/media/posters/the-ape.jpg": "3d6f1cb0cc8c72392bf0ca0c13e29f52",
"assets/backend/media/posters/the-twilight-zone-card.svg": "4935f5feae70cd3b3c5e7aa09f584b48",
"assets/backend/media/posters/horrors-of-spider-island-wiki.jpg": "ef31824cea1588767449fee5f3e49653",
"assets/backend/media/posters/two-gun-man-from-harlem.svg": "3f2195bd81cca6996383623820c69476",
"assets/backend/media/posters/biblical-martin-luther-1953.jpg": "bc192492b2adf96bec5ad8f3593fc4cd",
"assets/backend/media/posters/faith-the-blood-of-jesus-real.jpg": "b0dcbda272a8dc03fec8f319a309ac15",
"assets/backend/media/posters/the-three-stooges-wiki.jpg": "57be80e52bd67c49d23e4ef36b4ec0d8",
"assets/backend/media/posters/the-thief-of-bagdad.jpg": "5e239d02d95883e7c10badc881e39171",
"assets/backend/media/posters/cops.svg": "a3db4aebdcf81a87a5fc4d7a30490ae3",
"assets/backend/media/posters/i-love-lucy.jpg": "18bc2ab0c0e152279c4792e1d471cee2",
"assets/backend/media/posters/within-our-gates.svg": "ce4d9e29beff704d0cc61b400cb3ca48",
"assets/backend/media/posters/faith-the-living-christ-series-real.jpg": "c225056cc6cd925849ae6569ecf561e5",
"assets/backend/media/posters/biblical-a-thief-in-the-night.jpg": "2f038875de381940cf341b6f195cc133",
"assets/backend/media/posters/faith-david-and-goliath-1960-real.jpg": "fc956b7dcf4ae4dc9a4012b222bf00fc",
"assets/backend/media/posters/biblical-the-rapture-1941.jpg": "4136041272d0e07ac5fc580eef9604ae",
"assets/backend/media/posters/nosferatu.jpg": "1ceca2578441b5f9663222f6ca4b8a02",
"assets/backend/media/posters/brain-that-wouldnt-die.jpg": "ab09bb9721d16c71de65f66a4699a975",
"assets/backend/media/posters/the-twilight-zone-real.jpg": "9b560e502fa5f4cf079a49d9ab727eac",
"assets/backend/media/posters/faith-a-thief-in-the-night-real.jpg": "c12796c00149dc1a7bc6e58b1a0fc537",
"assets/backend/media/posters/ten-minutes-to-live.svg.png": "9f62be33941316cf9404d8ec72abd573",
"assets/backend/media/posters/the-vampire-bat.jpg": "666f0f6efa4da4372a7c656ad7dc4967",
"assets/backend/media/posters/glen-or-glenda.jpg": "8fe9bb59b59249e5b83d0b8c3e8a908b",
"assets/backend/media/posters/horrors-of-spider-island.jpg": "be9875bd2676ea954c0f20262c76eecc",
"assets/backend/media/posters/the-bronze-buckaroo.jpg": "057f1a295c705b43a22f5f86b21a95e1",
"assets/backend/media/posters/biblical-the-living-christ-holy-night.jpg": "6374a92bdde7b86013b5dfe90fce3d45",
"assets/backend/media/posters/biblical-the-blood-of-jesus.jpg": "6d4635d2d238c29740433c8e35faa7e3",
"assets/backend/media/posters/betty-boop-real.jpg": "f8e94fa9b4e21ad8fa786c450c6c9666",
"assets/backend/media/posters/the-lucy-show-wiki.jpg": "7af2fe828929dab4e93af000f1b6bd32",
"assets/backend/media/posters/shame.svg": "1b13364a197e0e0d2f11bb035e13eb0f",
"assets/backend/media/posters/betty-boop-omdb-source.jpg": "f8e94fa9b4e21ad8fa786c450c6c9666",
"assets/backend/media/posters/alfred-hitchcock-presents-wiki.jpg": "73e5c21b31f05241ad931cd41bf42ff7",
"assets/backend/media/posters/faith-hellbound-train-real.jpg": "6c58b6c31ee22e6142787bbe14f0a5b2",
"assets/backend/media/posters/ten-minutes-to-live.svg": "86de393b16dd07f564a0abaaf7c207c0",
"assets/backend/media/posters/captain-kidd.jpg": "eceb389ad359d06e197243ee1132834e",
"assets/backend/media/posters/the-iron-mask.jpg": "ee857f2902b1c202ced92fbe43b527c0",
"assets/backend/media/posters/safety-last.jpg": "3f889e4f0c37b0e753f2ebbb46ac6aa1",
"assets/backend/media/posters/biblical-david-and-goliath.jpg": "23d9b11b9847c009e991e279f92f1046",
"assets/backend/media/posters/the-bushwackers-wiki.jpeg": "7855a0dab64b7b0859de87a6f75ca5c6",
"assets/backend/media/posters/reefer-madness.jpg": "8dddf69c3bffb45e47c27ae93d4edfb4",
"assets/backend/media/posters/road-to-bali.jpg": "e3ce630879958588a94109faf6b3d329",
"assets/backend/media/posters/the-amazing-mr-x.jpg": "328a875957f8a525dd577c74bcd22d1d",
"assets/backend/media/posters/lying-lips.jpg": "f8c7bcd31f3f3cca79d5aa57ded83cc2",
"assets/backend/media/posters/murder-in-harlem.svg": "7adf87aadf2f0329946d8daa9cc70731",
"assets/backend/media/posters/betty-boop-card.svg": "e8d41695506fe2470392ba6f7ceed5d5",
"assets/backend/media/posters/biblical-body-and-soul-1925.jpg": "fa1c529475e00a301df0d2de694b7a39",
"assets/backend/media/posters/lying-lips.svg.png": "1630574c2c15d6ac0403bb740eff37a2",
"assets/backend/media/posters/the-hitch-hiker.jpg": "4d8c9b9dacfb2104e41c121e3672a9ba",
"assets/backend/media/posters/invasion-of-the-body-snatchers.jpg": "1a4e81881dfd138fc07dc9bb69f5c162",
"assets/backend/media/posters/modern-times.jpg": "c3cfd1110c538b7cf5e9cd8ce1edcc60",
"assets/backend/media/posters/the-beverly-hillbillies-wiki.jpg": "379848c4269c7e0a9d3337dc2e8c541d",
"assets/backend/media/posters/night-gallery-wiki.jpg": "2aee014a6ccfc9c48e4421dc76ada38d",
"assets/backend/media/posters/brain-that-wouldnt-die.svg.png": "ddca29f6cf015dd2e53fa8540a92aef2",
"assets/backend/media/posters/the-blood-of-jesus.svg": "c954ef695b0fd48d13f9f245f1968a50",
"assets/backend/media/posters/bride-of-the-monster.jpg": "342c64305bc1503b09a7c6e6d1c5336c",
"assets/backend/media/posters/faith-martin-luther-1953-real.jpg": "19794836c1c6473bc0f383292853a21c",
"assets/backend/media/posters/the-goat.svg": "a55f875071aa92d62c7db0a80a8aeb14",
"assets/backend/media/posters/the-blood-of-jesus.jpg": "6d4635d2d238c29740433c8e35faa7e3",
"assets/backend/media/posters/we-work-again-filmow.webp": "4592e555c7147f9f160fbf705afbb63b",
"assets/backend/media/posters/the-general-died-at-dawn.jpg": "80e03a925ac44080d766e172bb61b5b5",
"assets/backend/media/posters/the-twilight-zone-recovered.jpg": "2d6af8bd24b57919a8efd0e30d26db78",
"assets/backend/media/posters/white-zombie.jpg": "54fc993807c583bcf6ca33ba2d559cce",
"assets/backend/media/posters/steamboat-bill-jr.jpg": "141c248446e068cacc42ecca13ece324",
"assets/backend/media/posters/house-on-haunted-hill.jpg": "6c5271af0fbe8f15e6a40fc72c72021d",
"assets/backend/media/posters/the-mark-of-zorro.jpg": "ebbe3043926f8ab7094cf23239631efb",
"assets/backend/media/posters/biblical-hellbound-train.jpg": "53a7ca8983be3a6863247966af23d0d0",
"assets/backend/media/posters/night-of-the-living-dead.jpg": "d2c572d41e02cfee2d8b7e7400159dea",
"assets/backend/media/posters/we-work-again-filmow.png": "48904b76c3d6a5699e6e6269cd08d31c",
"assets/backend/media/posters/the-devil-bat.jpg": "47c5d2275d2102e7b5e494c645b42a84",
"assets/backend/media/posters/the-last-man-on-earth.jpg": "14b82f40e85041cc2a43fa26a51ae8ec",
"assets/backend/media/posters/carnival-of-souls.jpg": "a04fe11890dc2312f6547c4dc7e2fd05",
"assets/backend/media/posters/two-gun-man-from-harlem.svg.png": "6f13d4a78f10c0e7f7424ea3ffcc7a51",
"assets/backend/media/posters/within-our-gates.svg.png": "d94eec370300acf489e230dfc90b5fca",
"assets/backend/media/posters/the-blood-of-jesus.svg.png": "2f0754c687601716cda136dc75c8989b",
"assets/backend/media/posters/the-outlaw.jpg": "997651b81773deece846109dd0b7f21a",
"assets/backend/media/posters/the-flip-wilson-show-wiki.jpg": "9a66ac84db17b340a882ffb052fffede",
"assets/backend/media/posters/the-scarlet-pimpernel.jpg": "488a4c96355e2b0e2761f65bdae1c948",
"assets/backend/media/posters/horror-express.jpg": "07e67efbfc3a6dfe2ece3c8408baf312",
"assets/backend/media/posters/ozzie-and-harriet.jpg": "e146a8f94d19b56b7444ef6142d24a16",
"assets/backend/media/posters/biblical-the-living-christ-men-of-the-wilderness.jpg": "6374a92bdde7b86013b5dfe90fce3d45",
"assets/backend/media/posters/biblical-the-story-of-jesus-birth-of-the-savior.jpg": "b2e36d053bc9f961d19c4ad21110845e",
"assets/backend/media/posters/murder-in-harlem.jpg": "a83bb4702775b08a3e7af5c284e3e608",
"assets/backend/media/posters/shame.svg.png": "f4a88d98d175617dce8fa5f01eec15dd",
"assets/backend/media/posters/lying-lips.svg": "3b7edbc85cb9f543683e5258702fa438",
"assets/backend/media/posters/my-man-godfrey.jpg": "f8c4b4667aba1219e63375911f026f86",
"assets/backend/media/posters/ozzie-and-harriet-real.jpg": "7723bfb11a0ed01e002c9fd7bdac6f76",
"assets/backend/media/posters/go-down-death.svg.png": "868afb4b5d63674a38432a0c20876979",
"assets/backend/media/posters/too-late-for-tears.jpg": "453fed1014637e8eee865998ef6fbd6d",
"assets/backend/media/posters/a-study-of-negro-artists.png": "ea8a57ec9371049d8769a04255b6d70e",
"assets/backend/media/posters/the-front-page.jpg": "929e94954c5dd33f272ed752ca08e1b2",
"assets/backend/media/posters/captain-midnight-wiki.jpg": "0a3d3607d1785d71a025e430eb67f312",
"assets/backend/media/posters/the-atomic-brain-wiki.jpg": "5aab113b158f734a0ae2f5183d77eed7",
"assets/backend/media/posters/dementia-13.jpg": "5073d30406dd1984aa7e5b4695703279",
"assets/backend/media/posters/boy-what-a-girl.svg.png": "b84736fb837249d644777f4972b57acc",
"assets/backend/media/posters/the-white-warrior.jpg": "7b8e306bb767d7b62aff8a1c0df3df90",
"assets/backend/media/posters/ten-minutes-to-live.jpg": "14b250169dd4de723ef0e98568524330",
"assets/backend/media/posters/betty-boop-wiki.png": "f28ce04e1cde1394df7764fae4aaf31a",
"assets/backend/media/posters/shame.jpg": "e70e1a61412fe28ebcb6c16f2c8abb36",
"assets/NOTICES": "8c16ddd224996be6be326de9ec1d540f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "01801ec414d6bd94a2fb672ff79a4143",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4749df5005f8985a92e69dccf639e5cf",
"assets/fonts/MaterialIcons-Regular.otf": "4b479027c8def3d09976ff66257bc967",
"assets/assets/config/demo_scenes.json": "cbb238b3b6e683f6c4374fb515a1be9f",
"assets/assets/config/coming_soon.json": "d5d96a263a27dbd302d34617fb55ee61",
"assets/assets/config/bundled_library.json": "56298a9e35d756d01126f132544dd575",
"assets/assets/config/biblical_faith.json": "3c40b146d8c8c3f38340c3110ae77745",
"assets/assets/images/head.png": "bd15c912efe0d69d303c8a7a10eb68ed",
"assets/assets/web/portal_scene.html": "bce55a54d4a8cb313c04d594f8ff3154",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
