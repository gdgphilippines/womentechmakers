/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["includes/fonts/materialdesignicons-webfont.eot","d5247f90f15e16a67b0bc907bbf34b41"],["includes/fonts/materialdesignicons-webfont.svg","8b3c39c92337731eed918959d2abee5f"],["includes/fonts/materialdesignicons-webfont.ttf","3daf0eaec12778787d91f136f84bbf72"],["includes/fonts/materialdesignicons-webfont.woff","6f612b80df1b95abf7ca72717f8659d4"],["includes/fonts/materialdesignicons-webfont.woff2","85f0bd26d0491015858074f6dfa2f33e"],["includes/icons/144.png","15802d2a1314cca82dc4074bb6af8cdb"],["includes/icons/192.png","11e0aadb018af83a329378d56ad81084"],["includes/icons/96.png","6abaceedcbc86171208cc489a27ca833"],["includes/images/WT_logo_horizontal_white.png","83986a21d7f69f3954dc1dee23af7898"],["includes/images/WT_logo_vertical_pos.png","c8df88a6286ecc53d2ffac84c78d172c"],["includes/images/WT_logo_vertical_white.png","d7179f0e61190ba81e7337afca5e8ec8"],["includes/images/arrow-left_white.png","8066833110d1a984e1c4e92df926f7d7"],["includes/images/bg1.jpg","9e7e05dd971889a76eec05323d013312"],["includes/images/bg2.jpg","05a3c86c9d64d5b42f36ee73d3fa639a"],["includes/images/bg3.jpg","07bbdb9c23f1045c0200238a119b0d90"],["includes/images/boomerang-big.png","5ea78cb4b80d21947a3c165f7de2f21f"],["includes/images/boomerang.png","ff0f364168fc3668f2acfb385b008809"],["includes/images/call-for-speakers.png","ce5802ff7de452c929b1536a34030dcd"],["includes/images/community/good-code.png","14e7537d06531d31668ba805e79b2208"],["includes/images/community/goodmealhunting.png","67f616f71d3e2f8a4a83e39169fb40f6"],["includes/images/community/pollenizer.png","e0a011fa90a593923df628433ca39fd8"],["includes/images/community/psite.png","71b3cc3de280d9e5f7ff6f11e00e51b7"],["includes/images/community/pwdo.png","079c8acafb9851437a0d3e6c9e817ad0"],["includes/images/community/pyladies.png","ef6b890ebc3bde1a44bfba2d3d81ea24"],["includes/images/community/thinkingmachines.png","72b31ca129dd4f42a498fba94ffa63b4"],["includes/images/community/womenwhocode.png","51e7dcb11a1b42f21d4571a533cd1564"],["includes/images/community/zipmatch.png","d488386bf4636bc1b6b45cb2989ea525"],["includes/images/cover.jpg","60b4425fa3033dd417e1f3cc830706e8"],["includes/images/favicon.ico","f716cbec7d592bfa1daa95f4101ce603"],["includes/images/footer-bg.png","335fa8be4e22fd58ae7dbb9f1d0f211f"],["includes/images/footer-top.png","c94b36b58fefd19594b98481a8630659"],["includes/images/gdgph.png","a4c639622527097c8501ccf5e8636032"],["includes/images/header-boomerang.png","019d3a890fdbd33d51e1e12a1110d730"],["includes/images/media/1digimedia.png","3b35d23525aac6220d3657bbe919221c"],["includes/images/media/Aktivshow.jpg","7110b7d581dae22072fa9c6576f10bbe"],["includes/images/media/aktivshow.png","7772b24ca862b82c04ab5dbfa781126d"],["includes/images/media/anc.png","141d10dd411dd400daf1fbe06ebb3ff7"],["includes/images/media/cnn.png","be314fe69474c44a8355e2dffd1b416a"],["includes/images/media/inquirernet.png","9d949164a30b101003e75a7104152750"],["includes/images/media/philstar.png","b4b5753867b018eef1967f4b8a1f2f80"],["includes/images/media/pye.png","0e031ad70c516eca206e24aac3a29495"],["includes/images/media/wheninmanila.png","cc45a6696437908d3da2ffa130ae3128"],["includes/images/menu_white.png","75d5b121114e18b87f0474e9ea58670d"],["includes/images/og.jpg","fbfcd5a4739815982dcdab0a4c917c3f"],["includes/images/slideshow/1.jpg","9039e3ebc223bed23f2e0f405739dee1"],["includes/images/slideshow/2.jpg","f58e3a8a6192347d1f8446034d9dfe45"],["includes/images/slideshow/3.jpg","0a8e27afe35b67b899ca0c95e82f2ad8"],["includes/images/slideshow/4.jpg","bf898c834cfab2e2938cffe15d7d81f4"],["includes/images/slideshow/5.jpg","fa0a5044af201c749cd9785c697c2e77"],["includes/images/speakers/ambe-tierro.jpg","13104bb9c46643a936c76de8b44d1f4c"],["includes/images/speakers/angelica-ricardo.jpg","08940079c63492f93d03d0da8aefb6f7"],["includes/images/speakers/anj-cerbolles.jpg","4347f76ec1576f115eb36c628c6619c4"],["includes/images/speakers/bugdroid.jpg","6038812d3f4c88625a7501c640fc11bb"],["includes/images/speakers/carl-myer-flor.jpg","d3dd7e1e7b7af7bf42592bf470a41012"],["includes/images/speakers/charibeth-cheng.jpg","7e86ed59832ffb3633e305413f3aa248"],["includes/images/speakers/chelle-gray.jpg","9a32401f190ebf3b384545561770af19"],["includes/images/speakers/chiara-veronica-senires.jpg","c9deda1f0146ecb934fc4a4c5d2987dd"],["includes/images/speakers/chow-paredes.jpg","03925ffca9d2a29c9b714223051a2b07"],["includes/images/speakers/christine-balanaa.jpg","1f3c07f934173d3224781805b8051c8b"],["includes/images/speakers/claudine-rodriguez.jpg","df6e66ad98cdb38122407c52180c02dd"],["includes/images/speakers/drei-alquiros.jpg","6eaecf86ac05389a1eeb94f3939c6120"],["includes/images/speakers/ellaine-de-guzman.jpg","d62e2bbec14e6e87196de2751535b339"],["includes/images/speakers/gail-tan.jpg","cb85e9abee7a0b4e7648e15b1dbf19c2"],["includes/images/speakers/gear-fajardo.jpg","595c5b6f245a8a5d44cd7354757120a2"],["includes/images/speakers/goldy-yancha.jpg","0b7ee3df03c257ac13f930d88854c064"],["includes/images/speakers/grace-sojor.jpg","cebbfb2eaefc30630753507243cdf6c2"],["includes/images/speakers/isabel-montes.jpg","d0faedf93fe9a3efecda1ce5730a3499"],["includes/images/speakers/jeanette-balansag.jpg","d644226c8241a81cca271008458c9f1e"],["includes/images/speakers/jenifer-cristobal.jpg","5c8a54fe91875f36e8d1a5efd80f4895"],["includes/images/speakers/jonah-micah-mananghaya.jpg","94ca641027dae2993dafd29f9536ff4c"],["includes/images/speakers/karen-matias.jpg","85000b1b15d6e94085c546e12f024ba0"],["includes/images/speakers/kathleen-aviso.jpg","8f6de5d8e717c7eb386f9f1dc6f8eb3c"],["includes/images/speakers/kristine-joy-paas.jpg","2df7f77d2582a29ceaf7a84b6f2d67f6"],["includes/images/speakers/kristine-mae-adlaon.jpg","3ab3d9c15bac9d342ed74fc0b6cc139d"],["includes/images/speakers/kristine-mae-magtubo.jpg","118d3b0b58e7850c5ca5afc9c6bcfb52"],["includes/images/speakers/luna-cruz.jpg","4a5fa9f381e5b6f81cc9b447c53595a0"],["includes/images/speakers/mara-ang.jpg","8eb9d3766e2474a3ff653061ebcfba1f"],["includes/images/speakers/maricor-soriano.jpg","2c5748ebfcff2e35ed2d349b8a743f02"],["includes/images/speakers/merlin-suarez.jpg","2d12dc73748572b6926333486fc69ffe"],["includes/images/speakers/micaela-reyes.jpg","5644c48ce20a4b060382e5429e5d848d"],["includes/images/speakers/michie-ang.jpg","a351aba6dcffe824d7fee582b77d62fb"],["includes/images/speakers/mika-aldaba.jpg","3ef6495eab8d1f4659a8d357be1356b1"],["includes/images/speakers/nadine-jamila.jpg","4efb3d7d1aeba4f00a20fff773c0af50"],["includes/images/speakers/niaw-de-leon.jpg","343e4318a14a317a16da3ab3b80dd6e9"],["includes/images/speakers/nicole-tibay.jpg","cdc368c276b5d2897d17bab205175036"],["includes/images/speakers/pamela-cajilig.jpg","541769810722cccc2fee94320b5335e7"],["includes/images/speakers/pia-faustino.jpg","9d75d5be4f1616025a6170e831ed6a8a"],["includes/images/speakers/ralph-regalado.jpg","2710fcd599e0965ac57fc60d11bd5bf8"],["includes/images/speakers/rissa-quindoza.jpg","6dbeebcdfad78a29ddb7e7921412bf0e"],["includes/images/speakers/stephanie-sy.jpg","9ec9fd71ea9be1b4badfb58580db484f"],["includes/images/speakers/tal-de-guzman.jpg","e1a08f68ffa2b971e9d314db4792a424"],["includes/images/speakers/valenice-balace.jpg","65be052d80bcb2c7c34903c10c4e297d"],["includes/images/sponsors/Innolab_logo_final_dark v2.png","818b3d07ef1d1104ebd28698d9031175"],["includes/images/sponsors/accenture.png","aefe4428f768d3348df60ddc459467d6"],["includes/images/sponsors/adobo-magazine.png","2e9e12d87e1e6233a27df6408f7956ec"],["includes/images/sponsors/amazing-trampoline.png","d3cd4ce5ede5805f7044700ea8ffd1b1"],["includes/images/sponsors/anc.png","1ec848ff19b10f38f752f7b3489504b2"],["includes/images/sponsors/belle-de-jour.png","090daeb2b862217dc49ed45c5a287020"],["includes/images/sponsors/bio-oil.png","99b4cef1fcb771ea71058d4343d5c7c4"],["includes/images/sponsors/celeteque.png","87ca38c1f8992be855473f7ab0758649"],["includes/images/sponsors/eclaro.png","dd7c232ebb2e122a89cd9b0455ed99cc"],["includes/images/sponsors/globe-labs.png","39e6c55eac51094060865fa7263498b1"],["includes/images/sponsors/glutaphos.png","45ac3e04e15b4fe1c47a6e1ca5c9a476"],["includes/images/sponsors/john-robert-powers.png","9f5d1fff2312c33b0d18e4eb7831a851"],["includes/images/sponsors/klab.png","a3e1534d61e8f9009f8afaccceb92318"],["includes/images/sponsors/meetup.png","583628ebae6836e626f9224134df222b"],["includes/images/sponsors/myra.png","3fd6b6810fa7448d1f06fb5805ad83bc"],["includes/images/sponsors/paymaya.png","a3757a3fd697dde9c9626754340b09db"],["includes/images/sponsors/philstar.png","93144ade2ebe8a65723edede9d8cb1ee"],["includes/images/sponsors/pldtinnolab.png","b52c57c70e219fbff7fdd199bea913be"],["includes/images/sponsors/qsr.png","7c308e6cfa74fb6937645e0517f1632d"],["includes/images/sponsors/quaker.png","b5f8469f31b77968184cb3c5cebad051"],["includes/images/sponsors/rappler.png","c03edabaca4c91378763c8d53146026f"],["includes/images/sponsors/ufc-gym-ph.png","940e7a5701cc1bbdc6887eb063a77c50"],["includes/images/sponsors/when-in-manila.png","7ae3f14d35436253282f3034a7402879"],["includes/images/sponsors/ysa.png","b7f606e1704279f9c7750a673e24cf26"],["includes/images/sponsors/zcom.png","4b4724fa4dab2c38ff984bf87e456c40"],["includes/images/wt_logo_only.png","1ced211b70c23e8e522b1b9880616aef"],["includes/scripts/bulaga-1.0.0.js","ee751b2e07a88344a258c89236153b01"],["includes/scripts/jTextScroller.js","69950f19b3e9d6276aab2dc440fcecca"],["includes/scripts/jquery.min.js","ccd0edd113b78697e04fb5c1b519a5cd"],["includes/scripts/script.js","33fa7e8fa3a9d6d6a31b27c529d8536d"],["includes/scripts/smooth_scroll.js","2bf31fa66415187b386207b3911facc9"],["includes/styles/mdi.css","9434a56a10f42eac541240d67a6f610d"],["includes/styles/style.css","8adc094dde76c351c33a84adec0e30fb"],["index.html","e17a4a74325bd06b65b4453046369c4b"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







