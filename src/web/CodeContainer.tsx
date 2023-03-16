import React, { useEffect, useRef, useState } from 'react';
import * as monaco from 'monaco-editor';
import './CodeContainer.css';

interface CodeContainerProps {
  code: string;
  onCodeChange: (newCode: string) => void;
}

const CodeContainer: React.FC<CodeContainerProps> = ({ code, onCodeChange }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const monacoEditorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      monacoEditorRef.current = monaco.editor.create(editorRef.current, {
        value: code,
        language: 'typescript',
        theme: 'vs-dark',
        automaticLayout: true, // 追加
      });

      monacoEditorRef.current.onDidChangeModelContent(() => {
        if (monacoEditorRef.current) {
          onCodeChange(monacoEditorRef.current.getValue());
        }
      });
    }
  }, []);

  useEffect(() => {
    if (monacoEditorRef.current) {
      monacoEditorRef.current.setValue(code);
    }
  }, [code]);

  useEffect(() => {
    const handleResize = () => {
      if (monacoEditorRef.current) {
        monacoEditorRef.current.layout();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="code-container">
      <div ref={editorRef} className="editor" />
    </div>
  );
};

export default CodeContainer;
