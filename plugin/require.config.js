
require.config({
　　paths: {
　　　　"react": "react.min",
　　　　"react-dom": "react-dom.min",
　　　　"lodash": "lodash.min"
　　　　"index": "../build/index"
　　}
});

window.onload = function(){
	require([index]);
}