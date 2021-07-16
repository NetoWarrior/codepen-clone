import React from 'react'

//CodeMirror is an easy to use code editor plugin which works with React
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/theme/monokai.css'
import { Controlled as ControlledEditor } from 'react-codemirror2'


export default function Editor(props) {
  const {
    language,
    displayName,
    value,
    onChange
  } = props


  function handleChange(editor, data, value) {
    onChange(value)
  }

  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'monokai',
          lineNumbers: true
        }}
      />
    </div>
  )
}
