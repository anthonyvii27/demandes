import { json } from "@codemirror/lang-json";
import { tags as t } from "@lezer/highlight";
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

export const CUSTOM_DRACULA_THEME = {
    settings: {
        background: "#2B2F31",
        gutterBackground: "#202425",
        gutterForeground: "#9BA1A6",
        lineHighlight: "rgba(238, 9, 121, 0.3)",
        caret: "#2B2F31",
    },
    styles: [
        { tag: t.string, color: "#9BA1A6" },
        { tag: [t.function(t.propertyName), t.propertyName], color: "#FFF" },
        { tag: [t.keyword, t.operator, t.tagName], color: "#EE0979" },
    ],
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
