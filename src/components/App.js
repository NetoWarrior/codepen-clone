import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import useLocalStorage from '../hooks/useLocalStorage';

function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')


// State to manage file system
  const[showHTMLEditor,setShowHTMLEditor] = React.useState(true);
  const[showCSSEditor,setShowCSSEditor] = React.useState(false);
  const[showJSEditor,setShowJSEditor] = React.useState(false);

  const onClickHTML = () => {
    setShowHTMLEditor(!showHTMLEditor);
    (showCSSEditor) && setShowCSSEditor(!showCSSEditor) ; 
    (showJSEditor) && setShowJSEditor(!showJSEditor) ;
  }
  const onClickCSS = () => {
    setShowCSSEditor(!showCSSEditor);
    (showJSEditor) && setShowJSEditor(!showJSEditor);
    (showHTMLEditor) && setShowHTMLEditor(!showHTMLEditor);
  }
  const onClickJS = () => {
    setShowJSEditor(!showJSEditor);
    (showCSSEditor) && setShowCSSEditor(!showCSSEditor) ; 
    (showHTMLEditor) && setShowHTMLEditor(!showHTMLEditor);
  }

  // Save File on localStorage every few seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
    
      {/*Editor Section and File Explorer */}
      <div className="pane top-pane">
        <div classname="file-explorer" > 
          <input style={{"color":"orangered"}} type="submit" value="index.html" onClick={onClickHTML} />
          <input style={{"color":"#6363f9"}} type="submit" value="index.css" onClick={onClickCSS} />
          <input style={{"color":"yellow"}} type="submit" value="index.js" onClick={onClickJS} />
          
        </div>
       {/* Html Editor */}
       {showHTMLEditor && <Editor
          language="xml"
          displayName="index.html"
          value={html}
          onChange={setHtml}
        />}
        {/* CSS Editor */}
        {showCSSEditor && <Editor
          language="css"
          displayName="index.css"
          value={css}
          onChange={setCss}
        />}
        {/* JS Editor */}
        {showJSEditor && <Editor
          language="javascript"
          displayName="index.js"
          value={js}
          onChange={setJs}
        />}
      </div>

      {/* Live View Section */}
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default App;
