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

var precacheConfig = [["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/2018/12/31/你好，世界/index.html","dad8d7a4295df4c7d98ac18ec599806a"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/2019/01/04/时间工具类/index.html","e07a424c247b9ae54e9ec099741b899f"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/archives/2018/12/index.html","7b263fdb2e73eaeb5686c46ac7674181"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/archives/2018/index.html","58f01c2c7ae0c8518493fd1d9568d904"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/archives/2019/01/index.html","f3eda1370d6ddc845ce9ceead73df6aa"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/archives/2019/index.html","c9689bc40ceaff3fa316d72c3c9a6d94"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/archives/index.html","9c22799c1f7169b69eb43291df1cb35a"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/categories/hexo/index.html","8583ba5ba2e92f90457566d4d6b43564"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/categories/index.html","2c8a776ddaa6748942fa3ed2401112c2"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/categories/工具类/index.html","f2a30bc571107383cd02f066a465e86d"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/css/index.css","ddb9928fc1d78eedc370edb1f03a9e7e"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/gallery/index.html","cf22b5f68c9f29c152c89c1d87aaf094"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/index.html","7a226f0f5095e7b0d4142499572d0a93"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/tags/hexo/index.html","1b13ed1a8fb1e0facba0b15641253e08"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/tags/index.html","64e0b3a0bd5983144cdfef377f52594f"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/tags/java/index.html","dc1b1db13f7569c93c8671b1d9866170"],["D:/Web/Myblog/hexo/Lucas-Liang.github.io/public/tags/工具类/index.html","ed36cfdaf62221531686da4f129d57ec"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
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

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

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

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
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







