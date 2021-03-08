import CodeMirror from 'codemirror'
import 'codemirror/addon/runmode/runmode'
import 'codemirror/addon/scroll/simplescrollbars'
import 'codemirror/keymap/vim'
// Modes
// TODO: Could use webgl.js (smaller file, easier to tune for WebGL).
// import './mode/webgl'
import 'codemirror/mode/clike/clike'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/stex/stex'

export { CodeMirror }
