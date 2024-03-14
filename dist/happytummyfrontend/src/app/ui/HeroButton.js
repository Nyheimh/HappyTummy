"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_2 = require("@chakra-ui/react");
const HeroButton = ({ colorScheme = 'black', size = 'md', text = 'Button' }) => {
    return (<react_2.Stack spacing={4} direction='row' align='center'>
            <react_2.Button colorScheme={colorScheme} size={size}>
                {text}
            </react_2.Button>
    </react_2.Stack>);
};
exports.default = HeroButton;
//# sourceMappingURL=HeroButton.js.map