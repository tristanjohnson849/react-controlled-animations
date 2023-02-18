"use strict";(self.webpackChunkreact_controlled_animations=self.webpackChunkreact_controlled_animations||[]).push([[520],{"./src/stories/AnimatedStateTransitionsExample.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Flying:()=>Flying,Jumping:()=>Jumping,Sliding:()=>Sliding,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Flying$parameters,_Flying$parameters2,_Flying$parameters2$d,_Jumping$parameters,_Jumping$parameters2,_Jumping$parameters2$,_Sliding$parameters,_Sliding$parameters2,_Sliding$parameters2$,_animationInputMappers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/animationInputMappers.ts"),_components_ControlledAnimated__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ControlledAnimated.tsx"),_hooks_useTransitioningState__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/useTransitioningState.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var textStyle={background:"white",padding:"16px",fontFamily:'"Helvetica", "Arial", sans-serif',textAlign:"center",verticalAlign:"middle",borderRadius:"8px"},AnimatedStateTransitionsExample=function AnimatedStateTransitionsExample(_ref){var chosenAnimation=_ref.chosenAnimation,_useTransitioningStat2=_slicedToArray((0,_hooks_useTransitioningState__WEBPACK_IMPORTED_MODULE_2__.Z)(0),4),moveCounter=_useTransitioningStat2[0],startTransition=_useTransitioningStat2[1],endTransition=_useTransitioningStat2[2],currentTransition=_useTransitioningStat2[3];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{style:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_ControlledAnimated__WEBPACK_IMPORTED_MODULE_1__.Z,{currentAnimation:currentTransition,onAnimationEnd:endTransition,style:{width:"100px",height:"100px",fontSize:"48px",margin:"24px",textAlign:"center",verticalAlign:"middle"},animations:{flying:(0,_animationInputMappers__WEBPACK_IMPORTED_MODULE_4__.YQ)({keyframes:[{translate:0},{translate:"0 -30vh"},{translate:"0 -28vh"},{translate:"0 -32vh"},{translate:"0 -28vh"},{translate:"0 -32vh"},{translate:0,easing:"ease-in-out"}],options:{duration:2e3}}),jumping:(0,_animationInputMappers__WEBPACK_IMPORTED_MODULE_4__.YQ)({keyframes:[{translate:0,scale:1},{scale:"1.1 0.9",translate:0,offset:.05},{scale:"0.9 1.1",translate:0,offset:.1},{scale:"0.9 1.1",translate:"0 -18vh",offset:.45},{scale:"0.9 1.1",translate:"0 -20vh",offset:.5},{scale:"0.9 1.1",translate:"0 -18vh",offset:.55},{scale:"0.9 1.1",translate:0,offset:.9},{scale:"1.1 0.9",translate:0,offset:.95},{scale:1,translate:0}],options:{duration:2e3,easing:"ease-in-out"}}),sliding:(0,_animationInputMappers__WEBPACK_IMPORTED_MODULE_4__.YQ)({keyframes:[{translate:0},{translate:"25vw",offset:.2},{translate:0}],options:{duration:2e3,easing:"ease-in-out"}})},children:"🤓"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{style:textStyle,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:["Moves: ",moveCounter]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:["Animation: ",currentTransition||"null"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function onClick(){return startTransition((function(prev){return prev+1}),chosenAnimation)},children:"Move"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:_objectSpread({maxWidth:"600px"},textStyle),children:"The useAnimatedTransitionState hook lets you easily animate React state changes. Notice that the Move counter is only updated once the animation completes, and that continued clicks on the 'Move' button still count towards the counter."})]})};AnimatedStateTransitionsExample.displayName="AnimatedStateTransitionsExample";const __WEBPACK_DEFAULT_EXPORT__={parameters:_defineProperty({storySource:{source:"\n    \n    // @ts-nocheck\n    // @ts-expect-error (Converted from ts-ignore)\n    var __STORY__ = \"import React, { CSSProperties } from 'react';\\nimport { toTransitionAnimation } from '../animationInputMappers';\\nimport ControlledAnimated from '../components/ControlledAnimated';\\nimport useTransitioningState from '../hooks/useTransitioningState';\\n\\n\\nconst allAnimations = ['flying', 'jumping', 'sliding'] as const;\\ntype MyAnimations = typeof allAnimations[number];\\n\\nconst textStyle: CSSProperties = {\\n    background: 'white', \\n    padding: '16px', \\n    fontFamily: '\\\"Helvetica\\\", \\\"Arial\\\", sans-serif',\\n    textAlign: 'center',\\n    verticalAlign: 'middle', \\n    borderRadius: '8px'\\n};\\n\\nconst DURATION = 2000;\\n\\nconst AnimatedStateTransitionsExample: React.FC<{ chosenAnimation: MyAnimations}> = ({ chosenAnimation }) => {\\n    const [\\n        moveCounter,\\n        startTransition,\\n        endTransition,\\n        currentTransition\\n    ] = useTransitioningState<number, 'jumping' | 'flying' | 'sliding'>(0);\\n    return (\\n        <div style={{ \\n            width: '100vw',\\n            height: '100vh',\\n            display: 'flex',\\n            alignItems: 'center',\\n            justifyContent: 'center',\\n            flexDirection: 'column',\\n        }}>\\n            <ControlledAnimated<'jumping' | 'flying' | 'sliding'>\\n                currentAnimation={currentTransition}\\n                onAnimationEnd={endTransition}\\n                style={{\\n                    width: '100px',\\n                    height: '100px',\\n                    fontSize: '48px',\\n                    margin: '24px',\\n                    textAlign: 'center',\\n                    verticalAlign: 'middle'\\n                }}\\n                animations={{\\n                    flying: toTransitionAnimation({\\n                        keyframes: [\\n                            { translate: 0 },\\n                            { translate: '0 -30vh' },\\n                            { translate: '0 -28vh' },\\n                            { translate: '0 -32vh' },\\n                            { translate: '0 -28vh' },\\n                            { translate: '0 -32vh' },\\n                            { translate: 0, easing: 'ease-in-out' },\\n                        ],\\n                        options: { duration: DURATION }\\n                    }),\\n                    jumping: toTransitionAnimation({\\n                        keyframes: [\\n                            { translate: 0, scale: 1 },\\n                            { scale: '1.1 0.9', translate: 0, offset: 0.05 },\\n                            { scale: '0.9 1.1', translate: 0, offset: 0.1 },\\n                            { scale: '0.9 1.1', translate: '0 -18vh', offset: 0.45 },\\n                            { scale: '0.9 1.1', translate: '0 -20vh', offset: 0.5 },\\n                            { scale: '0.9 1.1', translate: '0 -18vh', offset: 0.55 },\\n                            { scale: '0.9 1.1', translate: 0, offset: 0.9 },\\n                            { scale: '1.1 0.9', translate: 0, offset: 0.95 },\\n                            { scale: 1, translate: 0 },\\n                        ],\\n                        options: { duration: DURATION, easing: 'ease-in-out' }\\n                    }),\\n                    sliding: toTransitionAnimation({\\n                        keyframes: [\\n                            { translate: 0 },\\n                            { translate: '25vw', offset: 0.2 },\\n                            { translate: 0 },\\n                        ],\\n                        options: { duration: DURATION, easing: 'ease-in-out' }\\n                    }),\\n                }}\\n                >\\n            🤓\\n            </ControlledAnimated>\\n            <div style={textStyle}>\\n                <div>Moves: {moveCounter}</div>\\n                <div>Animation: {currentTransition || \\\"null\\\"}</div>\\n                <button onClick={() => startTransition(prev => prev + 1, chosenAnimation)}>Move</button>\\n            </div>\\n            <div style={{maxWidth: '600px', ...textStyle}}>\\n                The useAnimatedTransitionState hook lets you easily animate React state changes. \\n                Notice that the Move counter is only updated once the animation completes, and that continued clicks on the 'Move' button still count towards the counter.\\n            </div>\\n        </div>\\n    )\\n}\\n\\n\\nexport default {\\n    component: AnimatedStateTransitionsExample,\\n    title: 'Hooks/AnimatedStateTransitionsExample',\\n};\\n\\nconst Template = args => <AnimatedStateTransitionsExample {...args} />;\\n\\n\\nexport const Flying = Template.bind({});\\nFlying.args = {\\n    chosenAnimation: 'flying',\\n};\\nexport const Jumping = Template.bind({});\\nJumping.args = {\\n    chosenAnimation: 'jumping'\\n};\\n\\nexport const Sliding = Template.bind({});\\nSliding.args = {\\n    chosenAnimation: 'sliding'\\n};\\n\";\n    // @ts-expect-error (Converted from ts-ignore)\n    var __LOCATIONS_MAP__ = {\n  \"Flying\": {\n    \"startLoc\": {\n      \"col\": 17,\n      \"line\": 135\n    },\n    \"endLoc\": {\n      \"col\": 70,\n      \"line\": 135\n    },\n    \"startBody\": {\n      \"col\": 17,\n      \"line\": 135\n    },\n    \"endBody\": {\n      \"col\": 70,\n      \"line\": 135\n    }\n  },\n  \"Jumping\": {\n    \"startLoc\": {\n      \"col\": 17,\n      \"line\": 135\n    },\n    \"endLoc\": {\n      \"col\": 70,\n      \"line\": 135\n    },\n    \"startBody\": {\n      \"col\": 17,\n      \"line\": 135\n    },\n    \"endBody\": {\n      \"col\": 70,\n      \"line\": 135\n    }\n  },\n  \"Sliding\": {\n    \"startLoc\": {\n      \"col\": 17,\n      \"line\": 135\n    },\n    \"endLoc\": {\n      \"col\": 70,\n      \"line\": 135\n    },\n    \"startBody\": {\n      \"col\": 17,\n      \"line\": 135\n    },\n    \"endBody\": {\n      \"col\": 70,\n      \"line\": 135\n    }\n  }\n};\n    \nimport React, { CSSProperties } from 'react';\nimport { toTransitionAnimation } from '../animationInputMappers';\nimport ControlledAnimated from '../components/ControlledAnimated';\nimport useTransitioningState from '../hooks/useTransitioningState';\nconst allAnimations = (['flying', 'jumping', 'sliding'] as const);\ntype MyAnimations = typeof allAnimations[number];\nconst textStyle: CSSProperties = {\n  background: 'white',\n  padding: '16px',\n  fontFamily: '\"Helvetica\", \"Arial\", sans-serif',\n  textAlign: 'center',\n  verticalAlign: 'middle',\n  borderRadius: '8px'\n};\nconst DURATION = 2000;\nconst AnimatedStateTransitionsExample: React.FC<{\n  chosenAnimation: MyAnimations;\n}> = ({\n  chosenAnimation\n}) => {\n  const [moveCounter, startTransition, endTransition, currentTransition] = useTransitioningState<number, 'jumping' | 'flying' | 'sliding'>(0);\n  return <div style={{\n    width: '100vw',\n    height: '100vh',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    flexDirection: 'column'\n  }}>\n            <ControlledAnimated<'jumping' | 'flying' | 'sliding'> currentAnimation={currentTransition} onAnimationEnd={endTransition} style={{\n      width: '100px',\n      height: '100px',\n      fontSize: '48px',\n      margin: '24px',\n      textAlign: 'center',\n      verticalAlign: 'middle'\n    }} animations={{\n      flying: toTransitionAnimation({\n        keyframes: [{\n          translate: 0\n        }, {\n          translate: '0 -30vh'\n        }, {\n          translate: '0 -28vh'\n        }, {\n          translate: '0 -32vh'\n        }, {\n          translate: '0 -28vh'\n        }, {\n          translate: '0 -32vh'\n        }, {\n          translate: 0,\n          easing: 'ease-in-out'\n        }],\n        options: {\n          duration: DURATION\n        }\n      }),\n      jumping: toTransitionAnimation({\n        keyframes: [{\n          translate: 0,\n          scale: 1\n        }, {\n          scale: '1.1 0.9',\n          translate: 0,\n          offset: 0.05\n        }, {\n          scale: '0.9 1.1',\n          translate: 0,\n          offset: 0.1\n        }, {\n          scale: '0.9 1.1',\n          translate: '0 -18vh',\n          offset: 0.45\n        }, {\n          scale: '0.9 1.1',\n          translate: '0 -20vh',\n          offset: 0.5\n        }, {\n          scale: '0.9 1.1',\n          translate: '0 -18vh',\n          offset: 0.55\n        }, {\n          scale: '0.9 1.1',\n          translate: 0,\n          offset: 0.9\n        }, {\n          scale: '1.1 0.9',\n          translate: 0,\n          offset: 0.95\n        }, {\n          scale: 1,\n          translate: 0\n        }],\n        options: {\n          duration: DURATION,\n          easing: 'ease-in-out'\n        }\n      }),\n      sliding: toTransitionAnimation({\n        keyframes: [{\n          translate: 0\n        }, {\n          translate: '25vw',\n          offset: 0.2\n        }, {\n          translate: 0\n        }],\n        options: {\n          duration: DURATION,\n          easing: 'ease-in-out'\n        }\n      })\n    }}>\n            🤓\n            </ControlledAnimated>\n            <div style={textStyle}>\n                <div>Moves: {moveCounter}</div>\n                <div>Animation: {currentTransition || \"null\"}</div>\n                <button onClick={() => startTransition(prev => prev + 1, chosenAnimation)}>Move</button>\n            </div>\n            <div style={{\n      maxWidth: '600px',\n      ...textStyle\n    }}>\n                The useAnimatedTransitionState hook lets you easily animate React state changes. \n                Notice that the Move counter is only updated once the animation completes, and that continued clicks on the 'Move' button still count towards the counter.\n            </div>\n        </div>;\n};\nexport default {parameters: {\n  \"storySource\": {\n    \"source\": \"import React, { CSSProperties } from 'react';\\nimport { toTransitionAnimation } from '../animationInputMappers';\\nimport ControlledAnimated from '../components/ControlledAnimated';\\nimport useTransitioningState from '../hooks/useTransitioningState';\\nconst allAnimations = (['flying', 'jumping', 'sliding'] as const);\\ntype MyAnimations = typeof allAnimations[number];\\nconst textStyle: CSSProperties = {\\n  background: 'white',\\n  padding: '16px',\\n  fontFamily: '\\\"Helvetica\\\", \\\"Arial\\\", sans-serif',\\n  textAlign: 'center',\\n  verticalAlign: 'middle',\\n  borderRadius: '8px'\\n};\\nconst DURATION = 2000;\\nconst AnimatedStateTransitionsExample: React.FC<{\\n  chosenAnimation: MyAnimations;\\n}> = ({\\n  chosenAnimation\\n}) => {\\n  const [moveCounter, startTransition, endTransition, currentTransition] = useTransitioningState<number, 'jumping' | 'flying' | 'sliding'>(0);\\n  return <div style={{\\n    width: '100vw',\\n    height: '100vh',\\n    display: 'flex',\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n    flexDirection: 'column'\\n  }}>\\n            <ControlledAnimated<'jumping' | 'flying' | 'sliding'> currentAnimation={currentTransition} onAnimationEnd={endTransition} style={{\\n      width: '100px',\\n      height: '100px',\\n      fontSize: '48px',\\n      margin: '24px',\\n      textAlign: 'center',\\n      verticalAlign: 'middle'\\n    }} animations={{\\n      flying: toTransitionAnimation({\\n        keyframes: [{\\n          translate: 0\\n        }, {\\n          translate: '0 -30vh'\\n        }, {\\n          translate: '0 -28vh'\\n        }, {\\n          translate: '0 -32vh'\\n        }, {\\n          translate: '0 -28vh'\\n        }, {\\n          translate: '0 -32vh'\\n        }, {\\n          translate: 0,\\n          easing: 'ease-in-out'\\n        }],\\n        options: {\\n          duration: DURATION\\n        }\\n      }),\\n      jumping: toTransitionAnimation({\\n        keyframes: [{\\n          translate: 0,\\n          scale: 1\\n        }, {\\n          scale: '1.1 0.9',\\n          translate: 0,\\n          offset: 0.05\\n        }, {\\n          scale: '0.9 1.1',\\n          translate: 0,\\n          offset: 0.1\\n        }, {\\n          scale: '0.9 1.1',\\n          translate: '0 -18vh',\\n          offset: 0.45\\n        }, {\\n          scale: '0.9 1.1',\\n          translate: '0 -20vh',\\n          offset: 0.5\\n        }, {\\n          scale: '0.9 1.1',\\n          translate: '0 -18vh',\\n          offset: 0.55\\n        }, {\\n          scale: '0.9 1.1',\\n          translate: 0,\\n          offset: 0.9\\n        }, {\\n          scale: '1.1 0.9',\\n          translate: 0,\\n          offset: 0.95\\n        }, {\\n          scale: 1,\\n          translate: 0\\n        }],\\n        options: {\\n          duration: DURATION,\\n          easing: 'ease-in-out'\\n        }\\n      }),\\n      sliding: toTransitionAnimation({\\n        keyframes: [{\\n          translate: 0\\n        }, {\\n          translate: '25vw',\\n          offset: 0.2\\n        }, {\\n          translate: 0\\n        }],\\n        options: {\\n          duration: DURATION,\\n          easing: 'ease-in-out'\\n        }\\n      })\\n    }}>\\n            🤓\\n            </ControlledAnimated>\\n            <div style={textStyle}>\\n                <div>Moves: {moveCounter}</div>\\n                <div>Animation: {currentTransition || \\\"null\\\"}</div>\\n                <button onClick={() => startTransition(prev => prev + 1, chosenAnimation)}>Move</button>\\n            </div>\\n            <div style={{\\n      maxWidth: '600px',\\n      ...textStyle\\n    }}>\\n                The useAnimatedTransitionState hook lets you easily animate React state changes. \\n                Notice that the Move counter is only updated once the animation completes, and that continued clicks on the 'Move' button still count towards the counter.\\n            </div>\\n        </div>;\\n};\\nexport default {\\n  component: AnimatedStateTransitionsExample,\\n  title: 'Hooks/AnimatedStateTransitionsExample'\\n};\\nconst Template = args => <AnimatedStateTransitionsExample {...args} />;\\nexport const Flying = Template.bind({});\\nFlying.args = {\\n  chosenAnimation: 'flying'\\n};\\nexport const Jumping = Template.bind({});\\nJumping.args = {\\n  chosenAnimation: 'jumping'\\n};\\nexport const Sliding = Template.bind({});\\nSliding.args = {\\n  chosenAnimation: 'sliding'\\n};\\nFlying.parameters = {\\n  ...Flying.parameters,\\n  docs: {\\n    ...Flying.parameters?.docs,\\n    source: {\\n      originalSource: \\\"args => <AnimatedStateTransitionsExample {...args} />\\\",\\n      ...Flying.parameters?.docs?.source\\n    }\\n  }\\n};\\nJumping.parameters = {\\n  ...Jumping.parameters,\\n  docs: {\\n    ...Jumping.parameters?.docs,\\n    source: {\\n      originalSource: \\\"args => <AnimatedStateTransitionsExample {...args} />\\\",\\n      ...Jumping.parameters?.docs?.source\\n    }\\n  }\\n};\\nSliding.parameters = {\\n  ...Sliding.parameters,\\n  docs: {\\n    ...Sliding.parameters?.docs,\\n    source: {\\n      originalSource: \\\"args => <AnimatedStateTransitionsExample {...args} />\\\",\\n      ...Sliding.parameters?.docs?.source\\n    }\\n  }\\n};\",\n    \"locationsMap\": {\n      \"flying\": {\n        \"startLoc\": {\n          \"col\": 17,\n          \"line\": 135\n        },\n        \"endLoc\": {\n          \"col\": 70,\n          \"line\": 135\n        },\n        \"startBody\": {\n          \"col\": 17,\n          \"line\": 135\n        },\n        \"endBody\": {\n          \"col\": 70,\n          \"line\": 135\n        }\n      },\n      \"jumping\": {\n        \"startLoc\": {\n          \"col\": 17,\n          \"line\": 135\n        },\n        \"endLoc\": {\n          \"col\": 70,\n          \"line\": 135\n        },\n        \"startBody\": {\n          \"col\": 17,\n          \"line\": 135\n        },\n        \"endBody\": {\n          \"col\": 70,\n          \"line\": 135\n        }\n      },\n      \"sliding\": {\n        \"startLoc\": {\n          \"col\": 17,\n          \"line\": 135\n        },\n        \"endLoc\": {\n          \"col\": 70,\n          \"line\": 135\n        },\n        \"startBody\": {\n          \"col\": 17,\n          \"line\": 135\n        },\n        \"endBody\": {\n          \"col\": 70,\n          \"line\": 135\n        }\n      }\n    }\n  }\n,},\n  component: AnimatedStateTransitionsExample,\n  title: 'Hooks/AnimatedStateTransitionsExample'\n};\nconst Template = args => <AnimatedStateTransitionsExample {...args} />;\nexport const Flying = Template.bind({});;\nFlying.args = {\n  chosenAnimation: 'flying'\n};\nexport const Jumping = Template.bind({});;\nJumping.args = {\n  chosenAnimation: 'jumping'\n};\nexport const Sliding = Template.bind({});\nSliding.args = {\n  chosenAnimation: 'sliding'\n};\nFlying.parameters = {\n  ...Flying.parameters,\n  docs: {\n    ...Flying.parameters?.docs,\n    source: {\n      originalSource: \"args => <AnimatedStateTransitionsExample {...args} />\",\n      ...Flying.parameters?.docs?.source\n    }\n  }\n};\nJumping.parameters = {\n  ...Jumping.parameters,\n  docs: {\n    ...Jumping.parameters?.docs,\n    source: {\n      originalSource: \"args => <AnimatedStateTransitionsExample {...args} />\",\n      ...Jumping.parameters?.docs?.source\n    }\n  }\n};\nSliding.parameters = {\n  ...Sliding.parameters,\n  docs: {\n    ...Sliding.parameters?.docs,\n    source: {\n      originalSource: \"args => <AnimatedStateTransitionsExample {...args} />\",\n      ...Sliding.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{flying:{startLoc:{col:17,line:258},endLoc:{col:70,line:258},startBody:{col:17,line:258},endBody:{col:70,line:258}},jumping:{startLoc:{col:17,line:258},endLoc:{col:70,line:258},startBody:{col:17,line:258},endBody:{col:70,line:258}},sliding:{startLoc:{col:17,line:258},endLoc:{col:70,line:258},startBody:{col:17,line:258},endBody:{col:70,line:258}}}}},"storySource",{source:"import React, { CSSProperties } from 'react';\nimport { toTransitionAnimation } from '../animationInputMappers';\nimport ControlledAnimated from '../components/ControlledAnimated';\nimport useTransitioningState from '../hooks/useTransitioningState';\nconst allAnimations = (['flying', 'jumping', 'sliding'] as const);\ntype MyAnimations = typeof allAnimations[number];\nconst textStyle: CSSProperties = {\n  background: 'white',\n  padding: '16px',\n  fontFamily: '\"Helvetica\", \"Arial\", sans-serif',\n  textAlign: 'center',\n  verticalAlign: 'middle',\n  borderRadius: '8px'\n};\nconst DURATION = 2000;\nconst AnimatedStateTransitionsExample: React.FC<{\n  chosenAnimation: MyAnimations;\n}> = ({\n  chosenAnimation\n}) => {\n  const [moveCounter, startTransition, endTransition, currentTransition] = useTransitioningState<number, 'jumping' | 'flying' | 'sliding'>(0);\n  return <div style={{\n    width: '100vw',\n    height: '100vh',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    flexDirection: 'column'\n  }}>\n            <ControlledAnimated<'jumping' | 'flying' | 'sliding'> currentAnimation={currentTransition} onAnimationEnd={endTransition} style={{\n      width: '100px',\n      height: '100px',\n      fontSize: '48px',\n      margin: '24px',\n      textAlign: 'center',\n      verticalAlign: 'middle'\n    }} animations={{\n      flying: toTransitionAnimation({\n        keyframes: [{\n          translate: 0\n        }, {\n          translate: '0 -30vh'\n        }, {\n          translate: '0 -28vh'\n        }, {\n          translate: '0 -32vh'\n        }, {\n          translate: '0 -28vh'\n        }, {\n          translate: '0 -32vh'\n        }, {\n          translate: 0,\n          easing: 'ease-in-out'\n        }],\n        options: {\n          duration: DURATION\n        }\n      }),\n      jumping: toTransitionAnimation({\n        keyframes: [{\n          translate: 0,\n          scale: 1\n        }, {\n          scale: '1.1 0.9',\n          translate: 0,\n          offset: 0.05\n        }, {\n          scale: '0.9 1.1',\n          translate: 0,\n          offset: 0.1\n        }, {\n          scale: '0.9 1.1',\n          translate: '0 -18vh',\n          offset: 0.45\n        }, {\n          scale: '0.9 1.1',\n          translate: '0 -20vh',\n          offset: 0.5\n        }, {\n          scale: '0.9 1.1',\n          translate: '0 -18vh',\n          offset: 0.55\n        }, {\n          scale: '0.9 1.1',\n          translate: 0,\n          offset: 0.9\n        }, {\n          scale: '1.1 0.9',\n          translate: 0,\n          offset: 0.95\n        }, {\n          scale: 1,\n          translate: 0\n        }],\n        options: {\n          duration: DURATION,\n          easing: 'ease-in-out'\n        }\n      }),\n      sliding: toTransitionAnimation({\n        keyframes: [{\n          translate: 0\n        }, {\n          translate: '25vw',\n          offset: 0.2\n        }, {\n          translate: 0\n        }],\n        options: {\n          duration: DURATION,\n          easing: 'ease-in-out'\n        }\n      })\n    }}>\n            🤓\n            </ControlledAnimated>\n            <div style={textStyle}>\n                <div>Moves: {moveCounter}</div>\n                <div>Animation: {currentTransition || \"null\"}</div>\n                <button onClick={() => startTransition(prev => prev + 1, chosenAnimation)}>Move</button>\n            </div>\n            <div style={{\n      maxWidth: '600px',\n      ...textStyle\n    }}>\n                The useAnimatedTransitionState hook lets you easily animate React state changes. \n                Notice that the Move counter is only updated once the animation completes, and that continued clicks on the 'Move' button still count towards the counter.\n            </div>\n        </div>;\n};\nexport default {\n  component: AnimatedStateTransitionsExample,\n  title: 'Hooks/AnimatedStateTransitionsExample'\n};\nconst Template = args => <AnimatedStateTransitionsExample {...args} />;\nexport const Flying = Template.bind({});\nFlying.args = {\n  chosenAnimation: 'flying'\n};\nexport const Jumping = Template.bind({});\nJumping.args = {\n  chosenAnimation: 'jumping'\n};\nexport const Sliding = Template.bind({});\nSliding.args = {\n  chosenAnimation: 'sliding'\n};\nFlying.parameters = {\n  ...Flying.parameters,\n  docs: {\n    ...Flying.parameters?.docs,\n    source: {\n      originalSource: \"args => <AnimatedStateTransitionsExample {...args} />\",\n      ...Flying.parameters?.docs?.source\n    }\n  }\n};\nJumping.parameters = {\n  ...Jumping.parameters,\n  docs: {\n    ...Jumping.parameters?.docs,\n    source: {\n      originalSource: \"args => <AnimatedStateTransitionsExample {...args} />\",\n      ...Jumping.parameters?.docs?.source\n    }\n  }\n};\nSliding.parameters = {\n  ...Sliding.parameters,\n  docs: {\n    ...Sliding.parameters?.docs,\n    source: {\n      originalSource: \"args => <AnimatedStateTransitionsExample {...args} />\",\n      ...Sliding.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{flying:{startLoc:{col:17,line:135},endLoc:{col:70,line:135},startBody:{col:17,line:135},endBody:{col:70,line:135}},jumping:{startLoc:{col:17,line:135},endLoc:{col:70,line:135},startBody:{col:17,line:135},endBody:{col:70,line:135}},sliding:{startLoc:{col:17,line:135},endLoc:{col:70,line:135},startBody:{col:17,line:135},endBody:{col:70,line:135}}}}),component:AnimatedStateTransitionsExample,title:"Hooks/AnimatedStateTransitionsExample"};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AnimatedStateTransitionsExample,_objectSpread({},args))};Template.displayName="Template";var Flying=Template.bind({});Flying.args={chosenAnimation:"flying"};var Jumping=Template.bind({});Jumping.args={chosenAnimation:"jumping"};var Sliding=Template.bind({});Sliding.args={chosenAnimation:"sliding"},Flying.parameters=_objectSpread(_objectSpread({},Flying.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Flying$parameters=Flying.parameters)||void 0===_Flying$parameters?void 0:_Flying$parameters.docs),{},{source:_objectSpread({originalSource:"args => <AnimatedStateTransitionsExample {...args} />"},null===(_Flying$parameters2=Flying.parameters)||void 0===_Flying$parameters2||null===(_Flying$parameters2$d=_Flying$parameters2.docs)||void 0===_Flying$parameters2$d?void 0:_Flying$parameters2$d.source)})}),Jumping.parameters=_objectSpread(_objectSpread({},Jumping.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Jumping$parameters=Jumping.parameters)||void 0===_Jumping$parameters?void 0:_Jumping$parameters.docs),{},{source:_objectSpread({originalSource:"args => <AnimatedStateTransitionsExample {...args} />"},null===(_Jumping$parameters2=Jumping.parameters)||void 0===_Jumping$parameters2||null===(_Jumping$parameters2$=_Jumping$parameters2.docs)||void 0===_Jumping$parameters2$?void 0:_Jumping$parameters2$.source)})}),Sliding.parameters=_objectSpread(_objectSpread({},Sliding.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Sliding$parameters=Sliding.parameters)||void 0===_Sliding$parameters?void 0:_Sliding$parameters.docs),{},{source:_objectSpread({originalSource:"args => <AnimatedStateTransitionsExample {...args} />"},null===(_Sliding$parameters2=Sliding.parameters)||void 0===_Sliding$parameters2||null===(_Sliding$parameters2$=_Sliding$parameters2.docs)||void 0===_Sliding$parameters2$?void 0:_Sliding$parameters2$.source)})});var __namedExportsOrder=["Flying","Jumping","Sliding"]}}]);