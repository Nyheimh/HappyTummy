"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const google_1 = require("next/font/google");
const providers_1 = require("./providers");
require("./globals.css");
const inter = (0, google_1.Inter)({ subsets: ["latin"] });
exports.metadata = {
    title: "Happy Tummy",
    description: "Simplified cookbook for infant and adult",
};
function RootLayout({ children, }) {
    return (<html lang="en">
      <body className={inter.className}>
        <providers_1.Providers>{children}</providers_1.Providers>
      </body>
    </html>);
}
exports.default = RootLayout;
//# sourceMappingURL=layout.js.map