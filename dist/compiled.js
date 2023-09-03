"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/index.tsx
var import_react3 = window.React;

// node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/lib/esm/iconBase.js
var import_react2 = {default:window.React};

// node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/lib/esm/iconContext.js
var import_react = {default:window.React};
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && import_react.default.createContext(DefaultContext);

// node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react2.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
__name(Tree2Element, "Tree2Element");
function GenIcon(data) {
  return function(props) {
    return import_react2.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
__name(GenIcon, "GenIcon");
function IconBase(props) {
  var elem = /* @__PURE__ */ __name(function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react2.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react2.default.createElement("title", null, title), props.children);
  }, "elem");
  return IconContext !== void 0 ? import_react2.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}
__name(IconBase, "IconBase");

// node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/bs/index.esm.js
function BsClipboard(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" } }, { "tag": "path", "attr": { "d": "M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" } }] })(props);
}
__name(BsClipboard, "BsClipboard");
function BsCommand(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M3.5 2A1.5 1.5 0 0 1 5 3.5V5H3.5a1.5 1.5 0 1 1 0-3zM6 5V3.5A2.5 2.5 0 1 0 3.5 6H5v4H3.5A2.5 2.5 0 1 0 6 12.5V11h4v1.5a2.5 2.5 0 1 0 2.5-2.5H11V6h1.5A2.5 2.5 0 1 0 10 3.5V5H6zm4 1v4H6V6h4zm1-1V3.5A1.5 1.5 0 1 1 12.5 5H11zm0 6h1.5a1.5 1.5 0 1 1-1.5 1.5V11zm-6 0v1.5A1.5 1.5 0 1 1 3.5 11H5z" } }] })(props);
}
__name(BsCommand, "BsCommand");

// src/index.tsx
var { register, api, components, hooks } = window.SittlyDevtools;
var { shell, clipboard, path } = api;
var { cmd } = shell;
var { useRouter, useServices } = hooks;
var { pasteToCurrentWindow, copyToClipboard } = clipboard;
var { Command } = components;
var pages = [
  {
    name: "Commands history",
    description: "Find all commands you have used in the past quickly",
    icon: /* @__PURE__ */ React.createElement(BsCommand, null),
    route: "/history-cmd",
    component() {
      const [commands, setCommands] = (0, import_react3.useState)(
        /* @__PURE__ */ new Map()
      );
      const setContextMenuOptions = useServices(
        (state) => state.setContextMenuOptions
      );
      const mappedItems = [...commands.entries()].map(
        ([command, datetime]) => {
          return {
            title: command,
            description: datetime,
            mainActionLabel: "Paste to app",
            onClick: () => {
              pasteToCurrentWindow(command);
            },
            onHighlight() {
              setContextMenuOptions([
                {
                  title: "Copy to clipboard",
                  icon: /* @__PURE__ */ React.createElement(BsClipboard, null),
                  mainActionLabel: "Copy to clipboard",
                  onClick() {
                    copyToClipboard(command);
                  }
                }
              ]);
            }
          };
        }
      );
      (0, import_react3.useEffect)(() => {
        async function init() {
          const homedir = await path.homeDir();
          const { stdout, stderr } = await cmd("tail", [
            "-n",
            "2000",
            await path.resolve(homedir, ".zsh_history")
          ]);
          if (stdout === null) {
            console.log("Error", stderr);
            return;
          }
          const entries = stdout.split("\n").reverse();
          const mappedEntries = /* @__PURE__ */ new Map();
          entries.forEach((entry) => {
            const [
              ,
              datetime,
              executionTimeAndcommand,
              ...conflictedSplitWithCommand
            ] = entry.split(":").map((item) => item.trim());
            if (!executionTimeAndcommand)
              return;
            if (!datetime)
              return;
            if (Number.isNaN(parseInt(datetime)))
              return;
            const [, ...command] = [
              executionTimeAndcommand,
              ...conflictedSplitWithCommand
            ].join("").split(";");
            const unifiedCommand = command.join("");
            if (!mappedEntries.has(unifiedCommand))
              mappedEntries.set(
                unifiedCommand,
                Intl.DateTimeFormat(void 0, {
                  timeStyle: "medium",
                  dateStyle: "medium"
                }).format(new Date(parseInt(datetime) * 1e3))
              );
          });
          setCommands(mappedEntries);
        }
        __name(init, "init");
        init();
      }, []);
      return /* @__PURE__ */ React.createElement(Command.List, { id: "history-cmd", items: mappedItems });
    }
  }
];
var noResults = /* @__PURE__ */ __name(() => {
  const { goTo } = useRouter();
  return [
    {
      title: "Find inside my command history",
      description: "maybe it's a command",
      icon: /* @__PURE__ */ React.createElement(BsCommand, null),
      mainActionLabel: "Use command history extension",
      onClick: () => {
        goTo("/history-cmd");
      }
    }
  ];
}, "noResults");
var metadata = {
  name: "Commands history",
  description: "Find all commands you have used in the past quickly",
  icon: /* @__PURE__ */ React.createElement(BsCommand, null),
  repoUrl: "https://github.com/JulianKominovic/sittly-cmd-history"
};
register({
  pages,
  metadata,
  noResults
});
