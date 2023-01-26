if (!self.define) {
    let e, s = {};
    const a = (a, c) => (a = new URL(a + ".js", c).href, s[a] || new Promise((s => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = a, e.onload = s, document.head.appendChild(e)
        } else e = a, importScripts(a), s()
    })).then((() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e
    })));
    self.define = (c, n) => {
        const t = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (s[t]) return;
        let i = {};
        const r = e => a(e, t),
            o = {
                module: {
                    uri: t
                },
                exports: i,
                require: r
            };
        s[t] = Promise.all(c.map((e => o[e] || r(e)))).then((e => (n(...e), i)))
    }
}
define(["./workbox-588899ac"], (function(e) {
    "use strict";
    importScripts(), self.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{
        url: "/Vector 59.svg",
        revision: "cc00244667c6f8228eec29903642f22a"
    }, {
        url: "/_next/static/_dsnYf9m3Q-xKi57IaFfQ/_buildManifest.js",
        revision: "fba09fa2d83daa0f89eeff264cd089ae"
    }, {
        url: "/_next/static/_dsnYf9m3Q-xKi57IaFfQ/_ssgManifest.js",
        revision: "b6652df95db52feb4daf4eca35380933"
    }, {
        url: "/_next/static/chunks/0c428ae2-38bd67e20b64cb39.js",
        revision: "38bd67e20b64cb39"
    }, {
        url: "/_next/static/chunks/1bfc9850-9aca59ce1657dc9a.js",
        revision: "9aca59ce1657dc9a"
    }, {
        url: "/_next/static/chunks/6728d85a-74b84972e9ad79d2.js",
        revision: "74b84972e9ad79d2"
    }, {
        url: "/_next/static/chunks/706-bbfcca55e6b38d6b.js",
        revision: "bbfcca55e6b38d6b"
    }, {
        url: "/_next/static/chunks/823-0ccd09d5872e33ab.js",
        revision: "0ccd09d5872e33ab"
    }, {
        url: "/_next/static/chunks/95b64a6e-6af3ff0511b1462a.js",
        revision: "6af3ff0511b1462a"
    }, {
        url: "/_next/static/chunks/d0c16330-043b3112f1553c69.js",
        revision: "043b3112f1553c69"
    }, {
        url: "/_next/static/chunks/d64684d8-6bb0517872081b93.js",
        revision: "6bb0517872081b93"
    }, {
        url: "/_next/static/chunks/d7eeaac4-87cc4e432b9c1ab2.js",
        revision: "87cc4e432b9c1ab2"
    }, {
        url: "/_next/static/chunks/de71a805-4786b08b982e7a22.js",
        revision: "4786b08b982e7a22"
    }, {
        url: "/_next/static/chunks/framework-4556c45dd113b893.js",
        revision: "4556c45dd113b893"
    }, {
        url: "/_next/static/chunks/main-572b913902beb9f3.js",
        revision: "572b913902beb9f3"
    }, {
        url: "/_next/static/chunks/pages/_app-08ac033de1e02d07.js",
        revision: "08ac033de1e02d07"
    }, {
        url: "/_next/static/chunks/pages/_error-4948ba61f247d73b.js",
        revision: "4948ba61f247d73b"
    }, {
        url: "/_next/static/chunks/pages/about-a7d611c4d0367a4c.js",
        revision: "a7d611c4d0367a4c"
    }, {
        url: "/_next/static/chunks/pages/contact-eead033ad71714ea.js",
        revision: "eead033ad71714ea"
    }, {
        url: "/_next/static/chunks/pages/course/%5BcourseSlug%5D-fe681f57d19e2e33.js",
        revision: "fe681f57d19e2e33"
    }, {
        url: "/_next/static/chunks/pages/index-06f5bf4a3c20b6cb.js",
        revision: "06f5bf4a3c20b6cb"
    }, {
        url: "/_next/static/chunks/pages/privacy-policy-8ae97cfbac24ee52.js",
        revision: "8ae97cfbac24ee52"
    }, {
        url: "/_next/static/chunks/pages/refund-policy-98a3d008d967b7da.js",
        revision: "98a3d008d967b7da"
    }, {
        url: "/_next/static/chunks/pages/temporarily-closed-a6cfd0e1790b6d97.js",
        revision: "a6cfd0e1790b6d97"
    }, {
        url: "/_next/static/chunks/pages/terms-of-use-93f0cc456df30e18.js",
        revision: "93f0cc456df30e18"
    }, {
        url: "/_next/static/chunks/polyfills-0d1b80a048d4787e.js",
        revision: "40ccea369337cec877151c906f22814d"
    }, {
        url: "/_next/static/chunks/webpack-df4cf1c8d23aa877.js",
        revision: "df4cf1c8d23aa877"
    }, {
        url: "/_next/static/css/b15c0ed8e4872afa.css",
        revision: "b15c0ed8e4872afa"
    }, {
        url: "/_next/static/css/f1d5a30b5a4d1378.css",
        revision: "f1d5a30b5a4d1378"
    }, {
        url: "/assets.json",
        revision: "2c44d60aa6ceef96053c1081982b1eb8"
    }, {
        url: "/favicon.ico",
        revision: "e082965f36d6d79a2eef447440f7db40"
    }, {
        url: "/icon-192x192.png",
        revision: "d3b35464033d187b752f4ea27b20fbec"
    }, {
        url: "/icon-256x256.png",
        revision: "f127b41779e251cae2d458c33515e8b3"
    }, {
        url: "/icon-384x384.png",
        revision: "ec5afbc5838718851bfe3d5d24d069ed"
    }, {
        url: "/icon-512x512.png",
        revision: "7efc9f9a3d5786ad0441f296aae8c361"
    }, {
        url: "/manifest.json",
        revision: "2a1b1851c155f6fb126c7e2422922cb2"
    }], {
        ignoreURLParametersMatching: []
    }), e.cleanupOutdatedCaches(), e.registerRoute("/", new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [{
            cacheWillUpdate: async ({
                request: e,
                response: s,
                event: a,
                state: c
            }) => s && "opaqueredirect" === s.type ? new Response(s.body, {
                status: 200,
                statusText: "OK",
                headers: s.headers
            }) : s
        }]
    }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i, new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3
        })]
    }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i, new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800
        })]
    }), "GET"), e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800
        })]
    }), "GET"), e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\/_next\/image\?url=.+$/i, new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:mp3|wav|ogg)$/i, new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:mp4)$/i, new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:js)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:css|less)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i, new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:json|xml|csv)$/i, new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute((({
        url: e
    }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/")
    }), new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute((({
        url: e
    }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/")
    }), new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute((({
        url: e
    }) => !(self.origin === e.origin)), new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 3600
        })]
    }), "GET")
}));