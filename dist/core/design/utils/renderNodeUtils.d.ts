export declare const renderNodeUtils: ({ isSelected, src, query: { node, parseFreshNode }, actions, }: {
    isSelected: any;
    src: any;
    query: {
        node: any;
        parseFreshNode: any;
    };
    actions: any;
}) => {
    moveUp: () => void;
    moveDown: () => void;
    addNode: ({ newNode, trg, isDown, isCanvas }: {
        newNode: any;
        trg: any;
        isDown: any;
        isCanvas: any;
    }) => void;
    duplicateNode: () => void;
};
