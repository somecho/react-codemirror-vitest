import CodeMirror from '@uiw/react-codemirror'
import { clojure } from '@nextjournal/lang-clojure'
function App() {
	return <>
		<div>Bug Reproduction</div>
		<CodeMirror
			value={'(+ 1 1)'}
			extensions={[clojure()]}
			height="75vh"
		/>
	</>

}

export default App
