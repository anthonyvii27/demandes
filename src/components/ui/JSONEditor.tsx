import { json } from "@codemirror/lang-json";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import { CreateThemeOptions } from "@uiw/codemirror-themes";
import CodeMirror from "@uiw/react-codemirror";
import { ReactNode } from "react";

type Props = {
    initialValue: string;
    readonly?: boolean;
    height?: string;
    options?: Partial<CreateThemeOptions>;
};

const JSONEditor = ({
    initialValue,
    readonly,
    height = "max-content",
    options = Object.create(null),
}: Props): ReactNode => (
    <CodeMirror
        value={initialValue}
        width="100%"
        height={height}
        style={{ flexGrow: 1 }}
        theme={draculaInit(options)}
        onChange={(code: string) => console.log(code)}
        readOnly={readonly}
        basicSetup={{
            foldGutter: true,
            lineNumbers: true,
            allowMultipleSelections: true,
            bracketMatching: true,
            closeBrackets: true,
            autocompletion: true,
            crosshairCursor: true,
            tabSize: 2,
            history: true,
            highlightActiveLine: true,
            highlightActiveLineGutter: true,
            highlightSelectionMatches: true,
            highlightSpecialChars: true,
            completionKeymap: true,
        }}
        extensions={[json()]}
    />
);

export { JSONEditor };
