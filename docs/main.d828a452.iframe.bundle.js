(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/AnimatedStateTransitionsExample.stories.tsx":"./src/stories/AnimatedStateTransitionsExample.stories.tsx","./stories/HoverAnimatedExample.stories.tsx":"./src/stories/HoverAnimatedExample.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/AnimationInput.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return normalizedAnimation}));__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js");var normalizedAnimation=function normalizedAnimation(animationInput){if(Array.isArray(animationInput))return{keyframes:animationInput,options:{duration:1e3}};var keyframes=animationInput.keyframes,options=animationInput.options;return{keyframes:keyframes,options:"number"==typeof options?{duration:options}:options}}},"./src/animationInputMappers.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return toPersistedAnimation})),__webpack_require__.d(__webpack_exports__,"b",(function(){return toTransitionAnimation}));__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js");var _AnimationInput__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/AnimationInput.ts");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var toPersistedAnimation=function toPersistedAnimation(toPersist){var _normalizedAnimation=Object(_AnimationInput__WEBPACK_IMPORTED_MODULE_14__.a)(toPersist),keyframes=_normalizedAnimation.keyframes,options=_normalizedAnimation.options;if(!keyframes.length)return{keyframes:[],options:options};var lastKeyframe=keyframes.slice(-1)[0],rest=keyframes.slice(0,-1),persistedLast=Object.assign({},lastKeyframe,{iterations:"Infinity"}),persistentOptions=Object.assign({},options,{fill:"forwards"});return{keyframes:[].concat(_toConsumableArray(rest),[persistedLast]),options:persistentOptions}},toTransitionAnimation=function toTransitionAnimation(animation){var _normalizedAnimation2=Object(_AnimationInput__WEBPACK_IMPORTED_MODULE_14__.a)(animation),keyframes=_normalizedAnimation2.keyframes,options=_normalizedAnimation2.options;return{keyframes:keyframes,options:Object.assign({fill:"forwards"},options)}}},"./src/components/ControlledAnimated.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),AnimationInput=__webpack_require__("./src/AnimationInput.ts");var runAnimation=function runAnimation(element,keyframes,options,onAnimationEnd,errorMessage){try{var _webAnimation2=element.animate(keyframes,options);return _webAnimation2.onfinish=function(){try{_webAnimation2.commitStyles()}catch(e){}onAnimationEnd&&onAnimationEnd(_webAnimation2)},_webAnimation2}catch(err){return onAnimationEnd&&onAnimationEnd(null),null}},cleanupAnimation=function cleanupAnimation(webAnimation){"finished"!==webAnimation.playState&&(webAnimation.onfinish(null),webAnimation.cancel())},hooks_useAnimatedRef=function useAnimatedRef(currentAnimation,animations,onAnimationEnd){var elementRef=Object(react.useRef)(null),serializedAnimation=currentAnimation&&animations&&animations[currentAnimation]&&JSON.stringify(animations[currentAnimation]);return Object(react.useDebugValue)(currentAnimation+": "+serializedAnimation),Object(react.useEffect)((function(){if(null!==elementRef.current){if(!currentAnimation||!animations||!animations[currentAnimation])return void(onAnimationEnd&&onAnimationEnd(currentAnimation,null));var _normalizedAnimation=Object(AnimationInput.a)(animations[currentAnimation]),keyframes=_normalizedAnimation.keyframes,options=_normalizedAnimation.options,_webAnimation=runAnimation(elementRef.current,keyframes,options,(function(anim){return onAnimationEnd&&onAnimationEnd(currentAnimation,anim)}),(function(){var selector=elementRef.current.id||elementRef.current.className||null;return"Failed to animate "+currentAnimation+" on "+elementRef.current.tagName+(selector?"["+selector+"]":"")+".\nCheck your animations: "+serializedAnimation+".\n"}));if(null!==_webAnimation)return function(){return cleanupAnimation(_webAnimation)}}}),[elementRef.current,currentAnimation,serializedAnimation]),elementRef},common=__webpack_require__("./src/components/common.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["as","animations","currentAnimation","onAnimationEnd"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var ControlledAnimated_controlledAnimated=function controlledAnimated(props,forwardedRef){var _props$as=props.as,Tag=void 0===_props$as?"div":_props$as,animations=props.animations,currentAnimation=props.currentAnimation,onAnimationEnd=props.onAnimationEnd,tagProps=_objectWithoutProperties(props,_excluded),animatedRef=hooks_useAnimatedRef(currentAnimation,animations,onAnimationEnd),elementRef=Object(react.useCallback)(Object(common.a)(forwardedRef,animatedRef),[forwardedRef]);return Object(jsx_runtime.jsx)(Tag,Object.assign({ref:elementRef},tagProps))};ControlledAnimated_controlledAnimated.displayName="controlledAnimated";var ControlledAnimated=react_default.a.forwardRef(ControlledAnimated_controlledAnimated);ControlledAnimated_controlledAnimated.displayName="ControlledAnimated";__webpack_exports__.a=ControlledAnimated},"./src/components/common.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";function setRef(ref,next){ref&&("function"==typeof ref?ref(next):ref.current=next)}function mergeRefs(ref1,ref2){return function(value){setRef(ref1,value),setRef(ref2,value)}}__webpack_require__.d(__webpack_exports__,"a",(function(){return mergeRefs}))},"./src/stories/AnimatedStateTransitionsExample.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Flying",(function(){return Flying})),__webpack_require__.d(__webpack_exports__,"Jumping",(function(){return Jumping})),__webpack_require__.d(__webpack_exports__,"Sliding",(function(){return Sliding}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react=__webpack_require__("./node_modules/react/index.js"),animationInputMappers=__webpack_require__("./src/animationInputMappers.ts"),ControlledAnimated=__webpack_require__("./src/components/ControlledAnimated.tsx");__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reduce.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var transitionNActions=function transitionNActions(_ref2,n){var current=_ref2.current,actionQueue=_ref2.actionQueue;return{current:actionQueue.slice(0,n).reduce((function(next,action){return dispatch(action,next)}),current),actionQueue:actionQueue.slice(n)}},dispatch=function dispatch(action,state){return isFunctionAction(action)?action(state):action},isFunctionAction=function isFunctionAction(action){return"function"==typeof action},hooks_useQueuedState=function useQueuedState(initialState){var _useState2=_slicedToArray(Object(react.useState)({current:initialState,actionQueue:[]}),2),queuedState=_useState2[0],setQueuedState=_useState2[1];return{current:queuedState.current,enqueue:function enqueue(newAction){return setQueuedState((function(_ref){var current=_ref.current,actionQueue=_ref.actionQueue;return{current:current,actionQueue:[].concat(_toConsumableArray(actionQueue),[newAction])}}))},transition:function transition(){return setQueuedState((function(prevState){return transitionNActions(prevState,1)}))},transitionAll:function transitionAll(){return setQueuedState((function(prevState){return transitionNActions(prevState,prevState.actionQueue.length)}))}}};function useTransitioningState_slicedToArray(arr,i){return function useTransitioningState_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function useTransitioningState_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function useTransitioningState_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return useTransitioningState_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return useTransitioningState_arrayLikeToArray(o,minLen)}(arr,i)||function useTransitioningState_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function useTransitioningState_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var hooks_useTransitioningState=function useTransitioningState(initialState){var initialTransition=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,queuedState=hooks_useQueuedState(initialState),_useState2=useTransitioningState_slicedToArray(Object(react.useState)(initialTransition),2),transition=_useState2[0],setTransition=_useState2[1],endTransition=function endTransition(){setTransition(null),queuedState.transitionAll()};return[queuedState.current,function startTransition(nextState,nextTransition){queuedState.enqueue(nextState),nextTransition?setTransition(nextTransition):endTransition()},endTransition,transition]},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function AnimatedStateTransitionsExample_stories_slicedToArray(arr,i){return function AnimatedStateTransitionsExample_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function AnimatedStateTransitionsExample_stories_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function AnimatedStateTransitionsExample_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return AnimatedStateTransitionsExample_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return AnimatedStateTransitionsExample_stories_arrayLikeToArray(o,minLen)}(arr,i)||function AnimatedStateTransitionsExample_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function AnimatedStateTransitionsExample_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var textStyle={background:"white",padding:"16px",fontFamily:'"Helvetica", "Arial", sans-serif',textAlign:"center",verticalAlign:"middle",borderRadius:"8px"},AnimatedStateTransitionsExample_stories_AnimatedStateTransitionsExample=function AnimatedStateTransitionsExample(_ref){var chosenAnimation=_ref.chosenAnimation,_useTransitioningStat2=AnimatedStateTransitionsExample_stories_slicedToArray(hooks_useTransitioningState(0),4),moveCounter=_useTransitioningStat2[0],startTransition=_useTransitioningStat2[1],endTransition=_useTransitioningStat2[2],currentTransition=_useTransitioningStat2[3];return Object(jsx_runtime.jsxs)("div",{style:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(jsx_runtime.jsx)(ControlledAnimated.a,{currentAnimation:currentTransition,onAnimationEnd:endTransition,style:{width:"100px",height:"100px",fontSize:"48px",margin:"24px",textAlign:"center",verticalAlign:"middle"},animations:{flying:Object(animationInputMappers.b)({keyframes:[{translate:0},{translate:"0 -30vh"},{translate:"0 -28vh"},{translate:"0 -32vh"},{translate:"0 -28vh"},{translate:"0 -32vh"},{translate:0,easing:"ease-in-out"}],options:{duration:2e3}}),jumping:Object(animationInputMappers.b)({keyframes:[{translate:0,scale:1},{scale:"1.1 0.9",translate:0,offset:.05},{scale:"0.9 1.1",translate:0,offset:.1},{scale:"0.9 1.1",translate:"0 -18vh",offset:.45},{scale:"0.9 1.1",translate:"0 -20vh",offset:.5},{scale:"0.9 1.1",translate:"0 -18vh",offset:.55},{scale:"0.9 1.1",translate:0,offset:.9},{scale:"1.1 0.9",translate:0,offset:.95},{scale:1,translate:0}],options:{duration:2e3,easing:"ease-in-out"}}),sliding:Object(animationInputMappers.b)({keyframes:[{translate:0},{translate:"25vw",offset:.2},{translate:0}],options:{duration:2e3,easing:"ease-in-out"}})},children:"🤓"}),Object(jsx_runtime.jsxs)("div",{style:textStyle,children:[Object(jsx_runtime.jsxs)("div",{children:["Moves: ",moveCounter]}),Object(jsx_runtime.jsxs)("div",{children:["Animation: ",currentTransition||"null"]}),Object(jsx_runtime.jsx)("button",{onClick:function onClick(){return startTransition((function(prev){return prev+1}),chosenAnimation)},children:"Move"})]}),Object(jsx_runtime.jsx)("div",{style:Object.assign({maxWidth:"600px"},textStyle),children:"The useAnimatedTransitionState hook lets you easily animate React state changes. Notice that the Move counter is only updated once the animation completes, and that continued clicks on the 'Move' button still count towards the counter."})]})};AnimatedStateTransitionsExample_stories_AnimatedStateTransitionsExample.displayName="AnimatedStateTransitionsExample";__webpack_exports__.default={component:AnimatedStateTransitionsExample_stories_AnimatedStateTransitionsExample,title:"Hooks/AnimatedStateTransitionsExample",parameters:{componentSource:{url:"https://raw.githubusercontent.com/tristanjohnson849/react-controlled-animations/main/src/stories/AnimatedStateTransitionsExample.stories.tsx",language:"javascript"}}};var AnimatedStateTransitionsExample_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(AnimatedStateTransitionsExample_stories_AnimatedStateTransitionsExample,Object.assign({},args))};AnimatedStateTransitionsExample_stories_Template.displayName="Template";var Flying=AnimatedStateTransitionsExample_stories_Template.bind({});Flying.args={chosenAnimation:"flying"};var Jumping=AnimatedStateTransitionsExample_stories_Template.bind({});Jumping.args={chosenAnimation:"jumping"};var Sliding=AnimatedStateTransitionsExample_stories_Template.bind({});Sliding.args={chosenAnimation:"sliding"},Flying.parameters=Object.assign({storySource:{source:"args => <AnimatedStateTransitionsExample {...args} />"}},Flying.parameters),Jumping.parameters=Object.assign({storySource:{source:"args => <AnimatedStateTransitionsExample {...args} />"}},Jumping.parameters),Sliding.parameters=Object.assign({storySource:{source:"args => <AnimatedStateTransitionsExample {...args} />"}},Sliding.parameters)},"./src/stories/HoverAnimatedExample.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return HoverAnimatedExample_stories_Primary}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),animationInputMappers=__webpack_require__("./src/animationInputMappers.ts"),common=(__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./src/components/common.ts")),ControlledAnimated=__webpack_require__("./src/components/ControlledAnimated.tsx");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var hooks_useIsHovered=function useIsHovered(){var _useState2=_slicedToArray(Object(react.useState)(void 0),2),isHovered=_useState2[0],setIsHovered=_useState2[1],ref=Object(react.useRef)(null),hovered=Object(react.useCallback)((function(){return setIsHovered(!0)}),[]),notHovered=Object(react.useCallback)((function(){return setIsHovered(!1)}),[]);return Object(react.useEffect)((function(){var el=ref.current;if(el)return el.addEventListener("mouseover",hovered),el.addEventListener("mouseout",notHovered),function(){el.removeEventListener("mouseover",hovered),el.removeEventListener("mouseout",notHovered)}}),[ref.current]),[isHovered,ref]},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["currentAnimation"];function HoverAnimated_slicedToArray(arr,i){return function HoverAnimated_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function HoverAnimated_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function HoverAnimated_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return HoverAnimated_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return HoverAnimated_arrayLikeToArray(o,minLen)}(arr,i)||function HoverAnimated_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function HoverAnimated_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function hoverAnimated(_ref,ref){var _ref$currentAnimation=_ref.currentAnimation,currentAnimation=void 0===_ref$currentAnimation?null:_ref$currentAnimation,rest=_objectWithoutProperties(_ref,_excluded),_useIsHovered2=HoverAnimated_slicedToArray(hooks_useIsHovered(),2),hovered=_useIsHovered2[0],hoverRef=_useIsHovered2[1],mergedRef=Object(react.useCallback)(Object(common.a)(ref,hoverRef),[ref]);return Object(jsx_runtime.jsx)(ControlledAnimated.a,Object.assign({currentAnimation:currentAnimation||(hovered?"hovering":"notHovering"),ref:mergedRef},rest))}hoverAnimated.displayName="hoverAnimated";var HoverAnimated=react_default.a.forwardRef(hoverAnimated);hoverAnimated.displayName="HoverAnimated";var components_HoverAnimated=HoverAnimated,HoverAnimatedExample_stories_HoverAnimatedExample=function HoverAnimatedExample(){return Object(jsx_runtime.jsxs)("div",{style:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",background:"linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(66,99,214,1) 50%, rgba(0,212,255,1) 100%)",margin:0,padding:0},children:[Object(jsx_runtime.jsx)(components_HoverAnimated,{style:{width:"100px",height:"100px",fontSize:"48px",margin:"24px",textAlign:"center",verticalAlign:"middle",cursor:"default"},animations:{hovering:{keyframes:[{scale:1},{scale:2}],options:{iterations:"Infinity",direction:"alternate",duration:1e3}},notHovering:Object(animationInputMappers.a)({keyframes:[{scale:1}],options:{duration:1e3}})},children:"🤓"}),Object(jsx_runtime.jsx)("div",{style:{background:"white",padding:"16px",fontFamily:'"Helvetica", "Arial", sans-serif',textAlign:"center",verticalAlign:"middle",borderRadius:"8px"},children:"^ Try hovering! ^"})]})};HoverAnimatedExample_stories_HoverAnimatedExample.displayName="HoverAnimatedExample";__webpack_exports__.default={component:HoverAnimatedExample_stories_HoverAnimatedExample,title:"Components/HoverAnimatedExample",parameters:{componentSource:{url:"https://raw.githubusercontent.com/tristanjohnson849/react-controlled-animations/main/src/stories/HoverAnimatedExample.stories.tsx",language:"typescript"}}};var HoverAnimatedExample_stories_Primary=function Primary(){return Object(jsx_runtime.jsx)(HoverAnimatedExample_stories_HoverAnimatedExample,{})};HoverAnimatedExample_stories_Primary.displayName="Primary",HoverAnimatedExample_stories_Primary.parameters=Object.assign({storySource:{source:"() => <HoverAnimatedExample />"}},HoverAnimatedExample_stories_Primary.parameters);try{HoverAnimatedExample_stories_Primary.displayName="Primary",HoverAnimatedExample_stories_Primary.__docgenInfo={description:"",displayName:"Primary",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/HoverAnimatedExample.stories.tsx#Primary"]={docgenInfo:HoverAnimatedExample_stories_Primary.__docgenInfo,name:"Primary",path:"src/stories/HoverAnimatedExample.stories.tsx#Primary"})}catch(__react_docgen_typescript_loader_error){}},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);