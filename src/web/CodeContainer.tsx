import React, { useEffect } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";

interface CodeContainerProps {
  code: string;
  onCodeChange: (newCode: string) => void;
}

const CodeContainer: React.FC<CodeContainerProps> = ({ code, onCodeChange }) => {
  const monaco = useMonaco();

  const handleEditorChange = (newValue: string | undefined) => {
    if (newValue !== undefined) {
      onCodeChange(newValue);
    }
  };

  useEffect(() => {
    if (monaco) {
      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        ...monaco.languages.typescript.typescriptDefaults.getCompilerOptions(),
        noEmit: true,
        strict: true,
        jsx: monaco.languages.typescript.JsxEmit.React,
        target: monaco.languages.typescript.ScriptTarget.ESNext,
        moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        module: monaco.languages.typescript.ModuleKind.ESNext,
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
      });
    }
  }, [monaco]);

  return (
    <div style={{ height: "100%" }}>
      <Editor
        height="100%"
        defaultLanguage="typescript"
        value={code}
        onChange={handleEditorChange}
        theme="vs-dark"
      />
    </div>
  );
};

export default CodeContainer;
