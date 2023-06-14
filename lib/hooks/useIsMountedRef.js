"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useIsMountedRef() {
    const isMounted = (0, react_1.useRef)(true);
    (0, react_1.useEffect)(() => () => {
        isMounted.current = false;
    }, []);
    return isMounted;
}
exports.default = useIsMountedRef;
//# sourceMappingURL=useIsMountedRef.js.map