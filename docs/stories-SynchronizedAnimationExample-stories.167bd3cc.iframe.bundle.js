"use strict";(self.webpackChunkreact_controlled_animations=self.webpackChunkreact_controlled_animations||[]).push([[304],{"./src/stories/SynchronizedAnimationExample.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Flying:()=>Flying,Jumping:()=>Jumping,Sliding:()=>Sliding,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Flying$parameters,_Flying$parameters2,_Flying$parameters2$d,_Jumping$parameters,_Jumping$parameters2,_Jumping$parameters2$,_Sliding$parameters,_Sliding$parameters2,_Sliding$parameters2$,_hooks_useTransitioningState__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/useTransitioningState.ts"),_components_ControlledAnimated__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ControlledAnimated.tsx"),_animationInputMappers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/animationInputMappers.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var SynchronizedAnimationExample=function SynchronizedAnimationExample(_ref){var chosenAnimation=_ref.chosenAnimation,_useTransitioningStat2=_slicedToArray((0,_hooks_useTransitioningState__WEBPACK_IMPORTED_MODULE_1__.Z)(0),4),moveCounter=_useTransitioningStat2[0],startTransition=_useTransitioningStat2[1],endTransition=_useTransitioningStat2[2],currentAnimation=_useTransitioningStat2[3];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_ControlledAnimated__WEBPACK_IMPORTED_MODULE_2__.Z,{currentAnimation:currentAnimation?"movingBackground":null,animations:{movingBackground:{keyframes:[{backgroundPosition:0},{backgroundPosition:"-100vw"}],options:{duration:2e3,easing:"ease-in-out"}}},style:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",background:"linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(66,99,214,1) 50%, rgba(0,212,255,1) 100%)"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_ControlledAnimated__WEBPACK_IMPORTED_MODULE_2__.Z,{currentAnimation,onAnimationEnd:endTransition,animations:{flying:(0,_animationInputMappers__WEBPACK_IMPORTED_MODULE_4__.YQ)({keyframes:[{translate:0},{translate:"0 -30vh"},{translate:"0 -28vh"},{translate:"0 -32vh"},{translate:"0 -28vh"},{translate:"0 -32vh"},{translate:0,easing:"ease-in-out"}],options:{duration:2e3}}),jumping:(0,_animationInputMappers__WEBPACK_IMPORTED_MODULE_4__.YQ)({keyframes:[{translate:0,scale:1},{translate:0,scale:1,offset:.1},{scale:"1.1 0.9",translate:0,offset:.15},{scale:"0.9 1.1",translate:0,offset:.2},{scale:"0.9 1.1",translate:"0 -18vh",offset:.35},{scale:"0.9 1.1",translate:"0 -20vh",offset:.4},{scale:"0.9 1.1",translate:"0 -18vh",offset:.45},{scale:"0.9 1.1",translate:0,offset:.6},{scale:"1.1 0.9",translate:0,offset:.65},{scale:1,translate:0,offset:.7},{scale:1,translate:0}],options:{duration:2e3,easing:"ease-in-out"}}),sliding:(0,_animationInputMappers__WEBPACK_IMPORTED_MODULE_4__.YQ)({keyframes:[{translate:0},{translate:"25vw",offset:.2},{translate:0}],options:{duration:2e3,easing:"ease-in-out"}})},style:{width:"100px",height:"100px",fontSize:"48px",margin:"24px",textAlign:"center",verticalAlign:"middle"},children:"🤓"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{style:{background:"white",padding:"16px",fontFamily:'"Helvetica", "Arial", sans-serif',textAlign:"center",verticalAlign:"middle",borderRadius:"8px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:["Moves: ",moveCounter]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:["Animation: ",currentAnimation||"null"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function onClick(){return startTransition((function(prev){return prev+1}),chosenAnimation)},children:"Move"})]})]})};SynchronizedAnimationExample.displayName="SynchronizedAnimationExample";const __WEBPACK_DEFAULT_EXPORT__={parameters:_defineProperty({storySource:{source:"\n    \n    // @ts-nocheck\n    // @ts-expect-error (Converted from ts-ignore)\n    var __STORY__ = \"import React from 'react';\\nimport useTransitioningState from '../hooks/useTransitioningState';\\nimport ControlledAnimated from '../components/ControlledAnimated';\\nimport { toTransitionAnimation } from '../animationInputMappers';\\n\\nconst allAnimations = ['flying', 'jumping', 'sliding'] as const;\\ntype MyAnimations = typeof allAnimations[number];\\n\\nconst DURATION = 2000;\\n\\nconst SynchronizedAnimationExample: React.FC<{ chosenAnimation: MyAnimations }> = ({ chosenAnimation }) => {\\n    const [\\n        moveCounter,\\n        startTransition,\\n        endTransition,\\n        currentAnimation\\n    ] = useTransitioningState<number, MyAnimations>(0);\\n\\n    return (\\n        <ControlledAnimated<'movingBackground'>\\n            currentAnimation={currentAnimation ? 'movingBackground' : null}\\n            animations={{\\n                movingBackground: {\\n                    keyframes: [\\n                        { backgroundPosition: 0 },\\n                        { backgroundPosition: '-100vw' },\\n                    ],\\n                    options: { duration: DURATION, easing: 'ease-in-out' }\\n                }\\n            }}\\n            style={{\\n                width: '100vw',\\n                height: '100vh',\\n                display: 'flex',\\n                alignItems: 'center',\\n                justifyContent: 'center',\\n                flexDirection: 'column',\\n                background: 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(66,99,214,1) 50%, rgba(0,212,255,1) 100%)',\\n            }}\\n        >\\n            <ControlledAnimated<MyAnimations>\\n                currentAnimation={currentAnimation}\\n                onAnimationEnd={endTransition}\\n                animations={{\\n                    flying: toTransitionAnimation({\\n                        keyframes: [\\n                            { translate: 0 },\\n                            { translate: '0 -30vh' },\\n                            { translate: '0 -28vh' },\\n                            { translate: '0 -32vh' },\\n                            { translate: '0 -28vh' },\\n                            { translate: '0 -32vh' },\\n                            { translate: 0, easing: 'ease-in-out' },\\n                        ],\\n                        options: { duration: DURATION }\\n                    }),\\n                    jumping: toTransitionAnimation({\\n                        keyframes: [\\n                            { translate: 0, scale: 1 },\\n                            { translate: 0, scale: 1, offset: 0.1 },\\n                            { scale: '1.1 0.9', translate: 0, offset: 0.15 },\\n                            { scale: '0.9 1.1', translate: 0, offset: 0.2 },\\n                            { scale: '0.9 1.1', translate: '0 -18vh', offset: 0.35 },\\n                            { scale: '0.9 1.1', translate: '0 -20vh', offset: 0.4 },\\n                            { scale: '0.9 1.1', translate: '0 -18vh', offset: 0.45 },\\n                            { scale: '0.9 1.1', translate: 0, offset: 0.6 },\\n                            { scale: '1.1 0.9', translate: 0, offset: 0.65 },\\n                            { scale: 1, translate: 0, offset: 0.7 },\\n                            { scale: 1, translate: 0 },\\n                        ],\\n                        options: { duration: DURATION, easing: 'ease-in-out' }\\n                    }),\\n                    sliding: toTransitionAnimation({\\n                        keyframes: [\\n                            { translate: 0 },\\n                            { translate: '25vw', offset: 0.2 },\\n                            { translate: 0 },\\n                        ],\\n                        options: { duration: DURATION, easing: 'ease-in-out' }\\n                    }),\\n                }}\\n                style={{\\n                    width: '100px',\\n                    height: '100px',\\n                    fontSize: '48px',\\n                    margin: '24px',\\n                    textAlign: 'center',\\n                    verticalAlign: 'middle'\\n                }}\\n            >\\n                🤓\\n            </ControlledAnimated>\\n            <div style={{\\n                background: 'white', padding: '16px', fontFamily: '\\\"Helvetica\\\", \\\"Arial\\\", sans-serif',\\n                textAlign: 'center',\\n                verticalAlign: 'middle', borderRadius: '8px'\\n            }}>\\n                <div>Moves: {moveCounter}</div>\\n                <div>Animation: {currentAnimation || \\\"null\\\"}</div>\\n                <button onClick={() => startTransition(prev => prev + 1, chosenAnimation)}>Move</button>\\n            </div>\\n        </ControlledAnimated>\\n    )\\n};\\n\\nexport default {\\n    component: SynchronizedAnimationExample,\\n    title: 'Components/SynchronizedAnimationExample',\\n};\\n\\nconst Template = args => <SynchronizedAnimationExample {...args} />;\\n\\nexport const Flying = Template.bind({});\\nFlying.args = {\\n    chosenAnimation: 'flying',\\n};\\nexport const Jumping = Template.bind({});\\nJumping.args = {\\n    chosenAnimation: 'jumping'\\n};\\n\\nexport const Sliding = Template.bind({});\\nSliding.args = {\\n    chosenAnimation: 'sliding'\\n};\\n\";\n    // @ts-expect-error (Converted from ts-ignore)\n    var __LOCATIONS_MAP__ = {\n  \"Flying\": {\n    \"startLoc\": {\n      \"col\": 17,\n      \"line\": 148\n    },\n    \"endLoc\": {\n      \"col\": 67,\n      \"line\": 148\n    },\n    \"startBody\": {\n      \"col\": 17,\n      \"line\": 148\n    },\n    \"endBody\": {\n      \"col\": 67,\n      \"line\": 148\n    }\n  },\n  \"Jumping\": {\n    \"startLoc\": {\n      \"col\": 17,\n      \"line\": 148\n    },\n    \"endLoc\": {\n      \"col\": 67,\n      \"line\": 148\n    },\n    \"startBody\": {\n      \"col\": 17,\n      \"line\": 148\n    },\n    \"endBody\": {\n      \"col\": 67,\n      \"line\": 148\n    }\n  },\n  \"Sliding\": {\n    \"startLoc\": {\n      \"col\": 17,\n      \"line\": 148\n    },\n    \"endLoc\": {\n      \"col\": 67,\n      \"line\": 148\n    },\n    \"startBody\": {\n      \"col\": 17,\n      \"line\": 148\n    },\n    \"endBody\": {\n      \"col\": 67,\n      \"line\": 148\n    }\n  }\n};\n    \nimport React from 'react';\nimport useTransitioningState from '../hooks/useTransitioningState';\nimport ControlledAnimated from '../components/ControlledAnimated';\nimport { toTransitionAnimation } from '../animationInputMappers';\nconst allAnimations = (['flying', 'jumping', 'sliding'] as const);\ntype MyAnimations = typeof allAnimations[number];\nconst DURATION = 2000;\nconst SynchronizedAnimationExample: React.FC<{\n  chosenAnimation: MyAnimations;\n}> = ({\n  chosenAnimation\n}) => {\n  const [moveCounter, startTransition, endTransition, currentAnimation] = useTransitioningState<number, MyAnimations>(0);\n  return <ControlledAnimated<'movingBackground'> currentAnimation={currentAnimation ? 'movingBackground' : null} animations={{\n    movingBackground: {\n      keyframes: [{\n        backgroundPosition: 0\n      }, {\n        backgroundPosition: '-100vw'\n      }],\n      options: {\n        duration: DURATION,\n        easing: 'ease-in-out'\n      }\n    }\n  }} style={{\n    width: '100vw',\n    height: '100vh',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    flexDirection: 'column',\n    background: 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(66,99,214,1) 50%, rgba(0,212,255,1) 100%)'\n  }}>\n            <ControlledAnimated<MyAnimations> currentAnimation={currentAnimation} onAnimationEnd={endTransition} animations={{\n      flying: toTransitionAnimation({\n        keyframes: [{\n          translate: 0\n        }, {\n          translate: '0 -30vh'\n        }, {\n          translate: '0 -28vh'\n        }, {\n          translate: '0 -32vh'\n        }, {\n          translate: '0 -28vh'\n        }, {\n          translate: '0 -32vh'\n        }, {\n          translate: 0,\n          easing: 'ease-in-out'\n        }],\n        options: {\n          duration: DURATION\n        }\n      }),\n      jumping: toTransitionAnimation({\n        keyframes: [{\n          translate: 0,\n          scale: 1\n        }, {\n          translate: 0,\n          scale: 1,\n          offset: 0.1\n        }, {\n          scale: '1.1 0.9',\n          translate: 0,\n          offset: 0.15\n        }, {\n          scale: '0.9 1.1',\n          translate: 0,\n          offset: 0.2\n        }, {\n          scale: '0.9 1.1',\n          translate: '0 -18vh',\n          offset: 0.35\n        }, {\n          scale: '0.9 1.1',\n          translate: '0 -20vh',\n          offset: 0.4\n        }, {\n          scale: '0.9 1.1',\n          translate: '0 -18vh',\n          offset: 0.45\n        }, {\n          scale: '0.9 1.1',\n          translate: 0,\n          offset: 0.6\n        }, {\n          scale: '1.1 0.9',\n          translate: 0,\n          offset: 0.65\n        }, {\n          scale: 1,\n          translate: 0,\n          offset: 0.7\n        }, {\n          scale: 1,\n          translate: 0\n        }],\n        options: {\n          duration: DURATION,\n          easing: 'ease-in-out'\n        }\n      }),\n      sliding: toTransitionAnimation({\n        keyframes: [{\n          translate: 0\n        }, {\n          translate: '25vw',\n          offset: 0.2\n        }, {\n          translate: 0\n        }],\n        options: {\n          duration: DURATION,\n          easing: 'ease-in-out'\n        }\n      })\n    }} style={{\n      width: '100px',\n      height: '100px',\n      fontSize: '48px',\n      margin: '24px',\n      textAlign: 'center',\n      verticalAlign: 'middle'\n    }}>\n                🤓\n            </ControlledAnimated>\n            <div style={{\n      background: 'white',\n      padding: '16px',\n      fontFamily: '\"Helvetica\", \"Arial\", sans-serif',\n      textAlign: 'center',\n      verticalAlign: 'middle',\n      borderRadius: '8px'\n    }}>\n                <div>Moves: {moveCounter}</div>\n                <div>Animation: {currentAnimation || \"null\"}</div>\n                <button onClick={() => startTransition(prev => prev + 1, chosenAnimation)}>Move</button>\n            </div>\n        </ControlledAnimated>;\n};\nexport default {parameters: {\n  \"storySource\": {\n    \"source\": \"import React from 'react';\\nimport useTransitioningState from '../hooks/useTransitioningState';\\nimport ControlledAnimated from '../components/ControlledAnimated';\\nimport { toTransitionAnimation } from '../animationInputMappers';\\nconst allAnimations = (['flying', 'jumping', 'sliding'] as const);\\ntype MyAnimations = typeof allAnimations[number];\\nconst DURATION = 2000;\\nconst SynchronizedAnimationExample: React.FC<{\\n  chosenAnimation: MyAnimations;\\n}> = ({\\n  chosenAnimation\\n}) => {\\n  const [moveCounter, startTransition, endTransition, currentAnimation] = useTransitioningState<number, MyAnimations>(0);\\n  return <ControlledAnimated<'movingBackground'> currentAnimation={currentAnimation ? 'movingBackground' : null} animations={{\\n    movingBackground: {\\n      keyframes: [{\\n        backgroundPosition: 0\\n      }, {\\n        backgroundPosition: '-100vw'\\n      }],\\n      options: {\\n        duration: DURATION,\\n        easing: 'ease-in-out'\\n      }\\n    }\\n  }} style={{\\n    width: '100vw',\\n    height: '100vh',\\n    display: 'flex',\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n    flexDirection: 'column',\\n    background: 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(66,99,214,1) 50%, rgba(0,212,255,1) 100%)'\\n  }}>\\n            <ControlledAnimated<MyAnimations> currentAnimation={currentAnimation} onAnimationEnd={endTransition} animations={{\\n      flying: toTransitionAnimation({\\n        keyframes: [{\\n          translate: 0\\n        }, {\\n          translate: '0 -30vh'\\n        }, {\\n          translate: '0 -28vh'\\n        }, {\\n          translate: '0 -32vh'\\n        }, {\\n          translate: '0 -28vh'\\n        }, {\\n          translate: '0 -32vh'\\n        }, {\\n          translate: 0,\\n          easing: 'ease-in-out'\\n        }],\\n        options: {\\n          duration: DURATION\\n        }\\n      }),\\n      jumping: toTransitionAnimation({\\n        keyframes: [{\\n          translate: 0,\\n          scale: 1\\n        }, {\\n          translate: 0,\\n          scale: 1,\\n          offset: 0.1\\n        }, {\\n          scale: '1.1 0.9',\\n          translate: 0,\\n          offset: 0.15\\n        }, {\\n          scale: '0.9 1.1',\\n          translate: 0,\\n          offset: 0.2\\n        }, {\\n          scale: '0.9 1.1',\\n          translate: '0 -18vh',\\n          offset: 0.35\\n        }, {\\n          scale: '0.9 1.1',\\n          translate: '0 -20vh',\\n          offset: 0.4\\n        }, {\\n          scale: '0.9 1.1',\\n          translate: '0 -18vh',\\n          offset: 0.45\\n        }, {\\n          scale: '0.9 1.1',\\n          translate: 0,\\n          offset: 0.6\\n        }, {\\n          scale: '1.1 0.9',\\n          translate: 0,\\n          offset: 0.65\\n        }, {\\n          scale: 1,\\n          translate: 0,\\n          offset: 0.7\\n        }, {\\n          scale: 1,\\n          translate: 0\\n        }],\\n        options: {\\n          duration: DURATION,\\n          easing: 'ease-in-out'\\n        }\\n      }),\\n      sliding: toTransitionAnimation({\\n        keyframes: [{\\n          translate: 0\\n        }, {\\n          translate: '25vw',\\n          offset: 0.2\\n        }, {\\n          translate: 0\\n        }],\\n        options: {\\n          duration: DURATION,\\n          easing: 'ease-in-out'\\n        }\\n      })\\n    }} style={{\\n      width: '100px',\\n      height: '100px',\\n      fontSize: '48px',\\n      margin: '24px',\\n      textAlign: 'center',\\n      verticalAlign: 'middle'\\n    }}>\\n                🤓\\n            </ControlledAnimated>\\n            <div style={{\\n      background: 'white',\\n      padding: '16px',\\n      fontFamily: '\\\"Helvetica\\\", \\\"Arial\\\", sans-serif',\\n      textAlign: 'center',\\n      verticalAlign: 'middle',\\n      borderRadius: '8px'\\n    }}>\\n                <div>Moves: {moveCounter}</div>\\n                <div>Animation: {currentAnimation || \\\"null\\\"}</div>\\n                <button onClick={() => startTransition(prev => prev + 1, chosenAnimation)}>Move</button>\\n            </div>\\n        </ControlledAnimated>;\\n};\\nexport default {\\n  component: SynchronizedAnimationExample,\\n  title: 'Components/SynchronizedAnimationExample'\\n};\\nconst Template = args => <SynchronizedAnimationExample {...args} />;\\nexport const Flying = Template.bind({});\\nFlying.args = {\\n  chosenAnimation: 'flying'\\n};\\nexport const Jumping = Template.bind({});\\nJumping.args = {\\n  chosenAnimation: 'jumping'\\n};\\nexport const Sliding = Template.bind({});\\nSliding.args = {\\n  chosenAnimation: 'sliding'\\n};\\nFlying.parameters = {\\n  ...Flying.parameters,\\n  docs: {\\n    ...Flying.parameters?.docs,\\n    source: {\\n      originalSource: \\\"args => <SynchronizedAnimationExample {...args} />\\\",\\n      ...Flying.parameters?.docs?.source\\n    }\\n  }\\n};\\nJumping.parameters = {\\n  ...Jumping.parameters,\\n  docs: {\\n    ...Jumping.parameters?.docs,\\n    source: {\\n      originalSource: \\\"args => <SynchronizedAnimationExample {...args} />\\\",\\n      ...Jumping.parameters?.docs?.source\\n    }\\n  }\\n};\\nSliding.parameters = {\\n  ...Sliding.parameters,\\n  docs: {\\n    ...Sliding.parameters?.docs,\\n    source: {\\n      originalSource: \\\"args => <SynchronizedAnimationExample {...args} />\\\",\\n      ...Sliding.parameters?.docs?.source\\n    }\\n  }\\n};\",\n    \"locationsMap\": {\n      \"flying\": {\n        \"startLoc\": {\n          \"col\": 17,\n          \"line\": 148\n        },\n        \"endLoc\": {\n          \"col\": 67,\n          \"line\": 148\n        },\n        \"startBody\": {\n          \"col\": 17,\n          \"line\": 148\n        },\n        \"endBody\": {\n          \"col\": 67,\n          \"line\": 148\n        }\n      },\n      \"jumping\": {\n        \"startLoc\": {\n          \"col\": 17,\n          \"line\": 148\n        },\n        \"endLoc\": {\n          \"col\": 67,\n          \"line\": 148\n        },\n        \"startBody\": {\n          \"col\": 17,\n          \"line\": 148\n        },\n        \"endBody\": {\n          \"col\": 67,\n          \"line\": 148\n        }\n      },\n      \"sliding\": {\n        \"startLoc\": {\n          \"col\": 17,\n          \"line\": 148\n        },\n        \"endLoc\": {\n          \"col\": 67,\n          \"line\": 148\n        },\n        \"startBody\": {\n          \"col\": 17,\n          \"line\": 148\n        },\n        \"endBody\": {\n          \"col\": 67,\n          \"line\": 148\n        }\n      }\n    }\n  }\n,},\n  component: SynchronizedAnimationExample,\n  title: 'Components/SynchronizedAnimationExample'\n};\nconst Template = args => <SynchronizedAnimationExample {...args} />;\nexport const Flying = Template.bind({});;\nFlying.args = {\n  chosenAnimation: 'flying'\n};\nexport const Jumping = Template.bind({});;\nJumping.args = {\n  chosenAnimation: 'jumping'\n};\nexport const Sliding = Template.bind({});\nSliding.args = {\n  chosenAnimation: 'sliding'\n};\nFlying.parameters = {\n  ...Flying.parameters,\n  docs: {\n    ...Flying.parameters?.docs,\n    source: {\n      originalSource: \"args => <SynchronizedAnimationExample {...args} />\",\n      ...Flying.parameters?.docs?.source\n    }\n  }\n};\nJumping.parameters = {\n  ...Jumping.parameters,\n  docs: {\n    ...Jumping.parameters?.docs,\n    source: {\n      originalSource: \"args => <SynchronizedAnimationExample {...args} />\",\n      ...Jumping.parameters?.docs?.source\n    }\n  }\n};\nSliding.parameters = {\n  ...Sliding.parameters,\n  docs: {\n    ...Sliding.parameters?.docs,\n    source: {\n      originalSource: \"args => <SynchronizedAnimationExample {...args} />\",\n      ...Sliding.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{flying:{startLoc:{col:17,line:271},endLoc:{col:67,line:271},startBody:{col:17,line:271},endBody:{col:67,line:271}},jumping:{startLoc:{col:17,line:271},endLoc:{col:67,line:271},startBody:{col:17,line:271},endBody:{col:67,line:271}},sliding:{startLoc:{col:17,line:271},endLoc:{col:67,line:271},startBody:{col:17,line:271},endBody:{col:67,line:271}}}}},"storySource",{source:"import React from 'react';\nimport useTransitioningState from '../hooks/useTransitioningState';\nimport ControlledAnimated from '../components/ControlledAnimated';\nimport { toTransitionAnimation } from '../animationInputMappers';\nconst allAnimations = (['flying', 'jumping', 'sliding'] as const);\ntype MyAnimations = typeof allAnimations[number];\nconst DURATION = 2000;\nconst SynchronizedAnimationExample: React.FC<{\n  chosenAnimation: MyAnimations;\n}> = ({\n  chosenAnimation\n}) => {\n  const [moveCounter, startTransition, endTransition, currentAnimation] = useTransitioningState<number, MyAnimations>(0);\n  return <ControlledAnimated<'movingBackground'> currentAnimation={currentAnimation ? 'movingBackground' : null} animations={{\n    movingBackground: {\n      keyframes: [{\n        backgroundPosition: 0\n      }, {\n        backgroundPosition: '-100vw'\n      }],\n      options: {\n        duration: DURATION,\n        easing: 'ease-in-out'\n      }\n    }\n  }} style={{\n    width: '100vw',\n    height: '100vh',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    flexDirection: 'column',\n    background: 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(66,99,214,1) 50%, rgba(0,212,255,1) 100%)'\n  }}>\n            <ControlledAnimated<MyAnimations> currentAnimation={currentAnimation} onAnimationEnd={endTransition} animations={{\n      flying: toTransitionAnimation({\n        keyframes: [{\n          translate: 0\n        }, {\n          translate: '0 -30vh'\n        }, {\n          translate: '0 -28vh'\n        }, {\n          translate: '0 -32vh'\n        }, {\n          translate: '0 -28vh'\n        }, {\n          translate: '0 -32vh'\n        }, {\n          translate: 0,\n          easing: 'ease-in-out'\n        }],\n        options: {\n          duration: DURATION\n        }\n      }),\n      jumping: toTransitionAnimation({\n        keyframes: [{\n          translate: 0,\n          scale: 1\n        }, {\n          translate: 0,\n          scale: 1,\n          offset: 0.1\n        }, {\n          scale: '1.1 0.9',\n          translate: 0,\n          offset: 0.15\n        }, {\n          scale: '0.9 1.1',\n          translate: 0,\n          offset: 0.2\n        }, {\n          scale: '0.9 1.1',\n          translate: '0 -18vh',\n          offset: 0.35\n        }, {\n          scale: '0.9 1.1',\n          translate: '0 -20vh',\n          offset: 0.4\n        }, {\n          scale: '0.9 1.1',\n          translate: '0 -18vh',\n          offset: 0.45\n        }, {\n          scale: '0.9 1.1',\n          translate: 0,\n          offset: 0.6\n        }, {\n          scale: '1.1 0.9',\n          translate: 0,\n          offset: 0.65\n        }, {\n          scale: 1,\n          translate: 0,\n          offset: 0.7\n        }, {\n          scale: 1,\n          translate: 0\n        }],\n        options: {\n          duration: DURATION,\n          easing: 'ease-in-out'\n        }\n      }),\n      sliding: toTransitionAnimation({\n        keyframes: [{\n          translate: 0\n        }, {\n          translate: '25vw',\n          offset: 0.2\n        }, {\n          translate: 0\n        }],\n        options: {\n          duration: DURATION,\n          easing: 'ease-in-out'\n        }\n      })\n    }} style={{\n      width: '100px',\n      height: '100px',\n      fontSize: '48px',\n      margin: '24px',\n      textAlign: 'center',\n      verticalAlign: 'middle'\n    }}>\n                🤓\n            </ControlledAnimated>\n            <div style={{\n      background: 'white',\n      padding: '16px',\n      fontFamily: '\"Helvetica\", \"Arial\", sans-serif',\n      textAlign: 'center',\n      verticalAlign: 'middle',\n      borderRadius: '8px'\n    }}>\n                <div>Moves: {moveCounter}</div>\n                <div>Animation: {currentAnimation || \"null\"}</div>\n                <button onClick={() => startTransition(prev => prev + 1, chosenAnimation)}>Move</button>\n            </div>\n        </ControlledAnimated>;\n};\nexport default {\n  component: SynchronizedAnimationExample,\n  title: 'Components/SynchronizedAnimationExample'\n};\nconst Template = args => <SynchronizedAnimationExample {...args} />;\nexport const Flying = Template.bind({});\nFlying.args = {\n  chosenAnimation: 'flying'\n};\nexport const Jumping = Template.bind({});\nJumping.args = {\n  chosenAnimation: 'jumping'\n};\nexport const Sliding = Template.bind({});\nSliding.args = {\n  chosenAnimation: 'sliding'\n};\nFlying.parameters = {\n  ...Flying.parameters,\n  docs: {\n    ...Flying.parameters?.docs,\n    source: {\n      originalSource: \"args => <SynchronizedAnimationExample {...args} />\",\n      ...Flying.parameters?.docs?.source\n    }\n  }\n};\nJumping.parameters = {\n  ...Jumping.parameters,\n  docs: {\n    ...Jumping.parameters?.docs,\n    source: {\n      originalSource: \"args => <SynchronizedAnimationExample {...args} />\",\n      ...Jumping.parameters?.docs?.source\n    }\n  }\n};\nSliding.parameters = {\n  ...Sliding.parameters,\n  docs: {\n    ...Sliding.parameters?.docs,\n    source: {\n      originalSource: \"args => <SynchronizedAnimationExample {...args} />\",\n      ...Sliding.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{flying:{startLoc:{col:17,line:148},endLoc:{col:67,line:148},startBody:{col:17,line:148},endBody:{col:67,line:148}},jumping:{startLoc:{col:17,line:148},endLoc:{col:67,line:148},startBody:{col:17,line:148},endBody:{col:67,line:148}},sliding:{startLoc:{col:17,line:148},endLoc:{col:67,line:148},startBody:{col:17,line:148},endBody:{col:67,line:148}}}}),component:SynchronizedAnimationExample,title:"Components/SynchronizedAnimationExample"};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SynchronizedAnimationExample,_objectSpread({},args))};Template.displayName="Template";var Flying=Template.bind({});Flying.args={chosenAnimation:"flying"};var Jumping=Template.bind({});Jumping.args={chosenAnimation:"jumping"};var Sliding=Template.bind({});Sliding.args={chosenAnimation:"sliding"},Flying.parameters=_objectSpread(_objectSpread({},Flying.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Flying$parameters=Flying.parameters)||void 0===_Flying$parameters?void 0:_Flying$parameters.docs),{},{source:_objectSpread({originalSource:"args => <SynchronizedAnimationExample {...args} />"},null===(_Flying$parameters2=Flying.parameters)||void 0===_Flying$parameters2||null===(_Flying$parameters2$d=_Flying$parameters2.docs)||void 0===_Flying$parameters2$d?void 0:_Flying$parameters2$d.source)})}),Jumping.parameters=_objectSpread(_objectSpread({},Jumping.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Jumping$parameters=Jumping.parameters)||void 0===_Jumping$parameters?void 0:_Jumping$parameters.docs),{},{source:_objectSpread({originalSource:"args => <SynchronizedAnimationExample {...args} />"},null===(_Jumping$parameters2=Jumping.parameters)||void 0===_Jumping$parameters2||null===(_Jumping$parameters2$=_Jumping$parameters2.docs)||void 0===_Jumping$parameters2$?void 0:_Jumping$parameters2$.source)})}),Sliding.parameters=_objectSpread(_objectSpread({},Sliding.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Sliding$parameters=Sliding.parameters)||void 0===_Sliding$parameters?void 0:_Sliding$parameters.docs),{},{source:_objectSpread({originalSource:"args => <SynchronizedAnimationExample {...args} />"},null===(_Sliding$parameters2=Sliding.parameters)||void 0===_Sliding$parameters2||null===(_Sliding$parameters2$=_Sliding$parameters2.docs)||void 0===_Sliding$parameters2$?void 0:_Sliding$parameters2$.source)})});var __namedExportsOrder=["Flying","Jumping","Sliding"]}}]);