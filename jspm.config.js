SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "GA/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.8.0",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "core-js": "npm:core-js@1.2.7",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.17",
      "jsx": "npm:jspm-loader-jsx@0.0.7"
    },
    "packages": {
      "npm:ansi-styles@2.2.1": {
        "map": {
          "color-convert": "npm:color-convert@1.0.0"
        }
      },
      "npm:babel-code-frame@6.11.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "chalk": "npm:chalk@1.1.3",
          "esutils": "npm:esutils@2.0.2",
          "js-tokens": "npm:js-tokens@2.0.0"
        }
      },
      "npm:babel-helper-builder-react-jsx@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.11.1",
          "esutils": "npm:esutils@2.0.2",
          "lodash": "npm:lodash@4.13.1"
        }
      },
      "npm:babel-messages@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-syntax-jsx@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-plugin-transform-react-jsx@6.8.0": {
        "map": {
          "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.9.0",
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-runtime@5.8.38": {
        "map": {}
      },
      "npm:babel-traverse@6.10.4": {
        "map": {
          "babel-code-frame": "npm:babel-code-frame@6.11.0",
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.11.1",
          "babylon": "npm:babylon@6.8.4",
          "debug": "npm:debug@2.2.0",
          "globals": "npm:globals@8.18.0",
          "invariant": "npm:invariant@2.2.1",
          "lodash": "npm:lodash@4.13.1"
        }
      },
      "npm:babel-types@6.11.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-traverse": "npm:babel-traverse@6.10.4",
          "esutils": "npm:esutils@2.0.2",
          "lodash": "npm:lodash@4.13.1",
          "to-fast-properties": "npm:to-fast-properties@1.0.2"
        }
      },
      "npm:babylon@6.8.4": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:chalk@1.1.3": {
        "map": {
          "ansi-styles": "npm:ansi-styles@2.2.1",
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
          "has-ansi": "npm:has-ansi@2.0.0",
          "strip-ansi": "npm:strip-ansi@3.0.1",
          "supports-color": "npm:supports-color@2.0.0"
        }
      },
      "npm:debug@2.2.0": {
        "map": {
          "ms": "npm:ms@0.7.1"
        }
      },
      "npm:globals@8.18.0": {
        "map": {
          "systemjs-json": "github:systemjs/plugin-json@0.1.2"
        }
      },
      "npm:has-ansi@2.0.0": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      },
      "npm:strip-ansi@3.0.1": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      },
      "npm:supports-color@2.0.0": {
        "map": {}
      }
    }
  },
  transpiler: "plugin-babel",
  babelOptions: {
    "stage": 0,
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  map: {
    "leaflet": "github:Leaflet/Leaflet@1.0.1",
    "classnames": "npm:classnames@2.2.5",
    "es6-shim": "github:es-shims/es6-shim@0.35.1",
    "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
    "jspm": "npm:jspm@0.16.39",
    "push": "github:Nickersoft/push.js@0.0.10",
    "rc-progress": "npm:rc-progress@2.0.1",
    "react-bootstrap": "npm:react-bootstrap@0.30.2",
    "react-datagrid": "npm:react-datagrid@2.1.1",
    "ss-utils": "npm:ss-utils@0.1.4",
    "unique-id-mixin": "npm:unique-id-mixin@1.0.0"
  },

  packages: {
    "GA": {
      "main": "app.jsx",
    },
    "npm:babel-runtime@6.11.6": {
      "map": {
        "core-js": "npm:core-js@2.4.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
      }
    },
    "npm:clone@1.0.2": {
      "map": {}
    },
    "npm:drag-helper@1.3.3": {
      "map": {
        "has-touch": "npm:has-touch@1.0.1",
        "object-assign": "npm:object-assign@4.1.0",
        "region-align": "npm:region-align@2.1.3"
      }
    },
    "npm:es6-promise@3.2.1": {
      "map": {}
    },
    "npm:fbjs@0.6.1": {
      "map": {}
    },
    "npm:functionally@0.6.2": {
      "map": {
        "newify": "npm:newify@1.1.9"
      }
    },
    "npm:node-uuid@1.4.7": {
      "map": {}
    },
    "npm:react-bootstrap@0.30.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "classnames": "npm:classnames@2.2.5",
        "dom-helpers": "npm:dom-helpers@2.4.0",
        "invariant": "npm:invariant@2.2.1",
        "keycode": "npm:keycode@2.1.4",
        "react": "npm:react@15.3.0",
        "react-dom": "npm:react-dom@15.3.0",
        "react-overlays": "npm:react-overlays@0.6.6",
        "react-prop-types": "npm:react-prop-types@0.4.0",
        "uncontrollable": "npm:uncontrollable@4.0.1",
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:react-class@1.2.4": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "react": "npm:react@0.14.8"
      }
    },
    "npm:react-class@2.1.0": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "react": "npm:react@0.14.8"
      }
    },
    "npm:react-clonewithprops@1.0.1": {
      "map": {
        "react": "npm:react@0.14.8"
      }
    },
    "npm:react-datagrid@2.1.1": {
      "map": {
        "clone": "npm:clone@1.0.2",
        "css-utils": "npm:css-utils@1.0.0",
        "drag-helper": "npm:drag-helper@1.3.3",
        "es6-promise": "npm:es6-promise@3.2.1",
        "has-touch": "npm:has-touch@1.0.1",
        "hasown": "npm:hasown@1.0.1",
        "node-uuid": "npm:node-uuid@1.4.7",
        "normalize.css": "npm:normalize.css@3.0.3",
        "object-assign": "npm:object-assign@4.1.0",
        "react": "npm:react@0.14.8",
        "react-class": "npm:react-class@1.2.4",
        "react-dom": "npm:react-dom@15.3.0",
        "react-load-mask": "npm:react-load-mask@2.0.2",
        "react-menus": "npm:react-menus@2.0.5",
        "react-simple-toolbar": "npm:react-simple-toolbar@1.0.5",
        "react-style-normalizer": "npm:react-style-normalizer@1.2.8",
        "react-virtual-scroller": "npm:react-virtual-scroller@2.1.3",
        "region": "npm:region@2.1.2",
        "region-align": "npm:region-align@2.1.3",
        "ustring": "npm:ustring@1.4.1",
        "whatwg-fetch": "npm:whatwg-fetch@0.10.1"
      }
    },
    "npm:react-event-names@1.0.0": {
      "map": {
        "has-touch": "npm:has-touch@1.0.1"
      }
    },
    "npm:react-load-mask@2.0.2": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "react": "npm:react@0.14.8",
        "react-dom": "npm:react-dom@15.3.0"
      }
    },
    "npm:react-menus@2.0.5": {
      "map": {
        "arrow-style": "npm:arrow-style@1.1.1",
        "buffer-function": "npm:buffer-function@1.0.0",
        "has-touch": "npm:has-touch@1.0.1",
        "object-assign": "npm:object-assign@4.1.0",
        "point-in-triangle": "npm:point-in-triangle@1.0.1",
        "react": "npm:react@0.14.8",
        "react-dom": "npm:react-dom@15.3.0",
        "react-event-names": "npm:react-event-names@1.0.0",
        "react-style-normalizer": "npm:react-style-normalizer@1.2.8",
        "region-align": "npm:region-align@2.1.3",
        "select-parent": "npm:select-parent@1.0.1"
      }
    },
    "npm:react-overlays@0.6.6": {
      "map": {
        "classnames": "npm:classnames@2.2.5",
        "dom-helpers": "npm:dom-helpers@2.4.0",
        "react": "npm:react@15.3.0",
        "react-dom": "npm:react-dom@15.3.0",
        "react-prop-types": "npm:react-prop-types@0.4.0",
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:react-prop-types@0.4.0": {
      "map": {
        "react": "npm:react@15.3.0",
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:react-simple-toolbar@1.0.5": {
      "map": {
        "object-assign": "npm:object-assign@2.1.1",
        "react": "npm:react@0.14.8",
        "react-clonewithprops": "npm:react-clonewithprops@1.0.1",
        "react-style-normalizer": "npm:react-style-normalizer@1.2.8"
      }
    },
    "npm:react-virtual-scroller@2.1.3": {
      "map": {
        "drag-helper": "npm:drag-helper@1.3.3",
        "has-touch": "npm:has-touch@1.0.1",
        "object-assign": "npm:object-assign@4.1.0",
        "react": "npm:react@0.14.8",
        "react-class": "npm:react-class@2.1.0",
        "react-dom": "npm:react-dom@15.3.0",
        "react-load-mask": "npm:react-load-mask@2.0.2",
        "react-style-normalizer": "npm:react-style-normalizer@1.2.8"
      }
    },
    "npm:react@0.14.8": {
      "map": {
        "fbjs": "npm:fbjs@0.6.1"
      }
    },
    "npm:region-align@2.1.3": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "region": "npm:region@2.1.2"
      }
    },
    "npm:region@2.1.2": {
      "map": {
        "hasown": "npm:hasown@1.0.1",
        "newify": "npm:newify@1.1.9",
        "object-assign": "npm:object-assign@2.1.1"
      }
    },
    "npm:uncontrollable@4.0.1": {
      "map": {
        "invariant": "npm:invariant@2.2.1",
        "react": "npm:react@15.3.0"
      }
    },
    "npm:ustring@1.4.1": {
      "map": {
        "functionally": "npm:functionally@0.6.2",
        "i-s": "npm:i-s@1.2.3"
      }
    },
    "npm:warning@3.0.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0"
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "Leaflet/Leaflet": "github:Leaflet/Leaflet@1.0.1",
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.1",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "domain": "npm:jspm-nodelibs-domain@0.2.0",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.1",
    "jspm-loader-jsx": "npm:jspm-loader-jsx@0.0.7",
    "jspm-nodelibs-path": "npm:jspm-nodelibs-path@0.2.1",
    "babel-polyfill": "npm:babel-polyfill@6.9.1",
    "bootstrap": "npm:bootstrap@3.3.6",
    "css": "github:systemjs/plugin-css@0.1.23",
    "module": "npm:jspm-nodelibs-module@0.2.0",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "radium": "npm:radium@0.18.1",
    "react": "npm:react@15.3.0",
    "react-dom": "npm:react-dom@15.3.0",
    "react-redux": "npm:react-redux@4.4.5",
    "react-select": "npm:react-select@1.0.0-beta14",
    "redux": "npm:redux@3.5.2",
    "redux-thunk": "npm:redux-thunk@2.1.0",
    "spinkit": "npm:spinkit@1.2.5",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "systemjs/plugin-css": "github:systemjs/plugin-css@0.1.23",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "wellknown": "npm:wellknown@0.5.0",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.2"
  },
  packages: {
    "npm:asap@2.0.4": {
      "map": {}
    },
    "npm:babel-polyfill@6.9.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "core-js": "npm:core-js@2.4.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
      }
    },
    "npm:babel-runtime@6.9.2": {
      "map": {
        "core-js": "npm:core-js@2.4.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
      }
    },
    "npm:bn.js@4.11.6": {
      "map": {}
    },
    "npm:bootstrap@3.3.6": {
      "map": {}
    },
    "npm:brace-expansion@1.1.6": {
      "map": {
        "balanced-match": "npm:balanced-match@0.4.2",
        "concat-map": "npm:concat-map@0.0.1"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "buffer-xor": "npm:buffer-xor@1.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "des.js": "npm:des.js@1.0.0",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "elliptic": "npm:elliptic@6.3.2",
        "inherits": "npm:inherits@2.0.3",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.9",
        "readable-stream": "npm:readable-stream@2.1.5"
      }
    },
    "npm:buffer-shims@1.0.0": {
      "map": {}
    },
    "npm:buffer-xor@1.0.3": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:camel-case@1.2.2": {
      "map": {
        "sentence-case": "npm:sentence-case@1.1.3",
        "upper-case": "npm:upper-case@1.1.3"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:commander@2.9.0": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:concat-map@0.0.1": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:concat-stream@1.5.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.0.6",
        "typedarray": "npm:typedarray@0.0.6"
      }
    },
    "npm:core-js@1.2.7": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:core-js@2.4.1": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:core-util-is@1.0.2": {
      "map": {}
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.2"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "inherits": "npm:inherits@2.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:defined@1.0.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:domain-browser@1.1.7": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:elliptic@6.3.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6",
        "hash.js": "npm:hash.js@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.13"
      }
    },
    "npm:envify@3.4.1": {
      "map": {
        "jstransform": "npm:jstransform@11.0.3",
        "through": "npm:through@2.3.8"
      }
    },
    "npm:esprima-fb@15001.1.0-dev-harmony-fb": {
      "map": {}
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:fbjs@0.8.3": {
      "map": {
        "core-js": "npm:core-js@1.2.7",
        "immutable": "npm:immutable@3.8.1",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "loose-envify": "npm:loose-envify@1.2.0",
        "object-assign": "npm:object-assign@4.1.0",
        "promise": "npm:promise@7.1.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.10"
      }
    },
    "npm:fs.realpath@1.0.0": {
      "map": {}
    },
    "npm:glob@5.0.15": {
      "map": {
        "inflight": "npm:inflight@1.0.6",
        "inherits": "npm:inherits@2.0.3",
        "minimatch": "npm:minimatch@3.0.3",
        "once": "npm:once@1.4.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.1"
      }
    },
    "npm:glob@7.0.5": {
      "map": {
        "fs.realpath": "npm:fs.realpath@1.0.0",
        "inflight": "npm:inflight@1.0.5",
        "inherits": "npm:inherits@2.0.1",
        "minimatch": "npm:minimatch@3.0.2",
        "once": "npm:once@1.3.3",
        "path-is-absolute": "npm:path-is-absolute@1.0.0"
      }
    },
    "npm:graceful-readlink@1.0.1": {
      "map": {}
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:iconv-lite@0.4.13": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:immutable@3.8.1": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:inflight@1.0.5": {
      "map": {
        "once": "npm:once@1.3.3",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:inherits@2.0.1": {
      "map": {}
    },
    "npm:inline-style-prefixer@1.0.4": {
      "map": {
        "bowser": "npm:bowser@1.4.3",
        "inline-style-prefix-all": "npm:inline-style-prefix-all@2.0.2"
      }
    },
    "npm:invariant@2.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0"
      }
    },
    "npm:isarray@1.0.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "node-fetch": "npm:node-fetch@1.6.0",
        "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
      }
    },
    "npm:jspm-loader-jsx@0.0.7": {
      "map": {
        "pascal-case": "npm:pascal-case@1.1.2",
        "react": "npm:react@0.13.3",
        "react-hot-api": "github:gaearon/react-hot-api@0.4.5",
        "path": "github:jspm/nodelibs-path@0.1.0"
      }
    },
    "npm:jstransform@11.0.3": {
      "map": {
        "base62": "npm:base62@1.1.2",
        "commoner": "npm:commoner@0.10.8",
        "esprima-fb": "npm:esprima-fb@15001.1.0-dev-harmony-fb",
        "object-assign": "npm:object-assign@2.1.1",
        "source-map": "npm:source-map@0.4.4",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:loose-envify@1.2.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:minimatch@3.0.2": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.6"
      }
    },
    "npm:minimist@0.0.8": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:minimist@1.2.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:node-fetch@1.6.0": {
      "map": {
        "encoding": "npm:encoding@0.1.12",
        "is-stream": "npm:is-stream@1.1.0"
      }
    },
    "npm:once@1.3.3": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:pako@0.2.9": {
      "map": {}
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "asn1.js": "npm:asn1.js@4.9.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:pascal-case@1.1.2": {
      "map": {
        "camel-case": "npm:camel-case@1.2.2",
        "upper-case-first": "npm:upper-case-first@1.1.2"
      }
    },
    "npm:path-is-absolute@1.0.0": {
      "map": {}
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:process-nextick-args@1.0.7": {
      "map": {}
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.4"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:punycode@1.3.2": {
      "map": {}
    },
    "npm:q@1.4.1": {
      "map": {}
    },
    "npm:querystring@0.2.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:radium@0.18.1": {
      "map": {
        "array-find": "npm:array-find@1.0.0",
        "exenv": "npm:exenv@1.2.1",
        "inline-style-prefixer": "npm:inline-style-prefixer@1.0.4",
        "rimraf": "npm:rimraf@2.5.4"
      }
    },
    "npm:randombytes@2.0.3": {
      "map": {}
    },
    "npm:react-dom@15.3.0": {
      "map": {
        "react": "npm:react@15.3.0"
      }
    },
    "npm:react-input-autosize@1.1.0": {
      "map": {
        "react": "npm:react@15.3.0"
      }
    },
    "npm:react-redux@4.4.5": {
      "map": {
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
        "invariant": "npm:invariant@2.2.1",
        "lodash": "npm:lodash@4.13.1",
        "loose-envify": "npm:loose-envify@1.2.0",
        "react": "npm:react@15.3.0",
        "redux": "npm:redux@3.5.2"
      }
    },
    "npm:react-select@1.0.0-beta14": {
      "map": {
        "blacklist": "npm:blacklist@1.1.4",
        "classnames": "npm:classnames@2.2.5",
        "react": "npm:react@15.3.0",
        "react-dom": "npm:react-dom@15.3.0",
        "react-input-autosize": "npm:react-input-autosize@1.1.0"
      }
    },
    "npm:react@0.13.3": {
      "map": {
        "envify": "npm:envify@3.4.1"
      }
    },
    "npm:react@15.3.0": {
      "map": {
        "fbjs": "npm:fbjs@0.8.3",
        "loose-envify": "npm:loose-envify@1.2.0",
        "object-assign": "npm:object-assign@4.1.0"
      }
    },
    "npm:readable-stream@2.0.6": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:readable-stream@2.1.5": {
      "map": {
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:redux@3.5.2": {
      "map": {
        "lodash": "npm:lodash@4.13.1",
        "lodash-es": "npm:lodash-es@4.13.1",
        "loose-envify": "npm:loose-envify@1.2.0",
        "symbol-observable": "npm:symbol-observable@0.2.4"
      }
    },
    "npm:regenerator-runtime@0.9.5": {
      "map": {}
    },
    "npm:rimraf@2.5.4": {
      "map": {
        "glob": "npm:glob@7.0.5"
      }
    },
    "npm:ripemd160@1.0.1": {
      "map": {}
    },
    "npm:sentence-case@1.1.3": {
      "map": {
        "lower-case": "npm:lower-case@1.1.3"
      }
    },
    "npm:source-map@0.4.4": {
      "map": {
        "amdefine": "npm:amdefine@1.0.1"
      }
    },
    "npm:source-map@0.5.6": {
      "map": {}
    },
    "npm:spinkit@1.2.5": {
      "map": {}
    },
    "npm:string_decoder@0.10.31": {
      "map": {}
    },
    "npm:through@2.3.8": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:ua-parser-js@0.7.10": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:upper-case-first@1.1.2": {
      "map": {
        "upper-case": "npm:upper-case@1.1.3"
      }
    },
    "npm:util-deprecate@1.0.2": {
      "map": {}
    },
    "npm:wellknown@0.5.0": {
      "map": {
        "concat-stream": "npm:concat-stream@1.5.2",
        "minimist": "npm:minimist@1.2.0"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.2": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.0": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.5.0"
      }
    },
    "npm:stream-http@2.5.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.5",
        "xtend": "npm:xtend@4.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.1": {
      "map": {
        "buffer": "npm:buffer@4.9.1"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "ieee754": "npm:ieee754@1.1.8",
        "base64-js": "npm:base64-js@1.2.0"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:inflight@1.0.6": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:minimatch@3.0.3": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.6"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:readable-stream@2.2.2": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "string_decoder": "npm:string_decoder@0.10.31",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "core-util-is": "npm:core-util-is@1.0.2",
        "buffer-shims": "npm:buffer-shims@1.0.0"
      }
    },
    "npm:asn1.js@4.9.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:commoner@0.10.8": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.15",
        "recast": "npm:recast@0.11.18",
        "glob": "npm:glob@5.0.15",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "commander": "npm:commander@2.9.0",
        "mkdirp": "npm:mkdirp@0.5.1",
        "q": "npm:q@1.4.1",
        "detective": "npm:detective@4.3.2",
        "private": "npm:private@0.1.6"
      }
    },
    "npm:recast@0.11.18": {
      "map": {
        "source-map": "npm:source-map@0.5.6",
        "private": "npm:private@0.1.6",
        "esprima": "npm:esprima@3.1.2",
        "ast-types": "npm:ast-types@0.9.2"
      }
    },
    "npm:detective@4.3.2": {
      "map": {
        "acorn": "npm:acorn@3.3.0",
        "defined": "npm:defined@1.0.0"
      }
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "map": {
        "path-browserify": "npm:path-browserify@0.0.0"
      }
    }
  }
});