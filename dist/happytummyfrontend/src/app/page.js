"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
console.log(react_1.default);
const HeroScreen_1 = require("./lib/HeroScreen");
function Home() {
    return (<div>
    <body>
      <div id="section1" className="bg-black text-white h-screen">
        <div className="container mx-auto flex items-center justify-center h-full">
    <HeroScreen_1.default />
    </div>
    </div>
    </body>
    </div>);
}
exports.default = Home;
//# sourceMappingURL=page.js.map