/// <reference types="react" />
import 'brace';
import 'ace-builds/src-noconflict/ace';
import "brace/mode/json";
import "brace/mode/xml";
import "brace/mode/text";
import "brace/mode/html";
import "brace/theme/monokai";
import "brace/theme/textmate";
import "brace/ext/language_tools";
import "brace/ext/searchbox";
declare function Editor({ className, value, mode, isView, height, width, isDark, defaultValue, cursorStart, onChange, onPaste, disableSyntaxCheck, onBlur, name, onLoad }: any): JSX.Element;
export default Editor;
