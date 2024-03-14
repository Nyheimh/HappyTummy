"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
function RecipeBadge({ colorScheme = 'gray', text = 'Badge' }) {
    return (<react_1.Stack direction="row">
      <react_1.Badge colorScheme={colorScheme}>{text}</react_1.Badge>
    </react_1.Stack>);
}
exports.default = RecipeBadge;
//# sourceMappingURL=RecipeBadge.js.map