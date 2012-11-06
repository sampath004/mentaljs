!function(){    
    window.MentalJS = function() {
        function Mental() {
            this.parse = function(obj) {
                
                if(!Object.defineProperty) {
                    error("MentalJS requires ES5. Please upgrade your browser.");
                }
                            
                var parseTree = [], converted, result, that = this,                                         
                	pos = 0, chr, output = '', left = 0, lastState, scoping = '$', lastParseChr, parseResult,  lastChr = '', states = [],
                    functionKeyword = false, result, replaceScoping = new RegExp('['+scoping+']'),
                    allowedProperties = /^(?:length|prototype)$/, expressions = [], currentExpression,
                    functionParenOpen = false,                                         
                    attributeWhitelist = /^(?:alt|title)$/i,                           
                    setTimeoutIDS = {},
                    setIntervalIDS = {},            
                    lookups = {
                                    '[':{
                                            end:']',
                                            states:[],
                                            positions:[]                                                                                                                                                                            
                                    },
                                    '{':{
                                            end:'}',
                                            states:[],
                                            positions:[]                                                                                         
                                    },
                                    '(':{
                                            end:')',
                                            states:[],
                                            positions:[]
                                    }                                                                                       
                    };  
                    function addToParseTree(str) {                    	
                        if(that.parseTree) {
                        	parseTree.push(str+'<left>'+left+'</left>');
                        }
                    }                                     
                    function error(str, rewritten) {
                        var e = Error();                    
                        if(that.converted && typeof rewritten != 'undefined') {
                            that.converted(rewritten);
                        }                                           
                        throw {
                            msg: str+(e.stack?' - '+e.stack:''),
                            pos: pos,
                            chr: typeof chr == 'undefined' ? '(end)' : chr,
                            state: parseTree.pop(),
                            text: code.slice(pos-10, pos+10),
                            code: this.code
                        }           
                    };
                    
                    function execute(code) {
                    var result, hiddenProperties,
                        M = {
                            O: function(obj) {
                                var keys = Object.keys(obj);
                                for(var key in obj) {
                                    if(!/^[$].+[$]$/.test(key)) {
                                        continue;
                                    }
                                    if(/^[$](?:toString|valueOf|constructor|hasOwnProperty)[$]$/.test(key)) {
                                        Object.defineProperty(obj,key.replace(new RegExp('^'+replaceScoping.source,'i'),'').replace(new RegExp(replaceScoping.source+'$','i'),''), {enumerable: false});
                                        Object.defineProperty(obj,key,{value:obj[key],enumerable: false, writable: false, configurable: true});
                                    } else {
                                        Object.defineProperty(obj,key.replace(new RegExp('^'+replaceScoping.source,'i'),'').replace(new RegExp(replaceScoping.source+'$','i'),''), {enumerable: true});
                                        Object.defineProperty(obj,key,{value:obj[key],enumerable: false});
                                    }                                                                                                                       
                                }
                                return obj;
                            },
                            P: function() {                               
                                    var exp = arguments[arguments.length-1];                                                                                                                                    
                                    if(typeof exp == 'undefined') {
                                       return null;
                                    }                        
                                    if((/[^\d]/.test(exp) || exp === '') && !allowedProperties.test(exp)) {                                                        
                                        return scoping + exp + scoping;
                                    } else {                                    
                                        return +exp;
                                    }
                            },
                            A: function(args) {
                                var args = [].slice.call(args,0);
                                args.$callee$=arguments.callee.caller;
                                return args;
                            }                
                        };
                        function createSandboxedNode(node) {
                            Object.defineProperties(node, {
                                '$innerText$': {configurable:true, get:function(){return this.innerText;},set:function(innerText){this.innerText = innerText;}},
                                '$innerHTML$': {configurable:true, get:function(){return this.innerHTML}, set:function(innerHTML){
                                    var doc, elements, element, i, j, tags;
                                    doc = document.implementation.createHTMLDocument('');
                                    doc.body.innerHTML = innerHTML;                                    
                                    tags = doc.body.getElementsByTagName('*');                                    
                                    for(i = 0; i < tags.length;i++) {
                                        element = tags[i];                                        
                                        for(j=0;j<element.attributes.length;j++) {
                                            if(attributeWhitelist.test(element.attributes[j].name)) {
                                                continue;
                                            }                                            
                                            element.setAttribute(element.attributes[j].name, '');
                                            element[element.attributes[j].name] =  '';                                                                                                                                    
                                        }                                        
                                        element.appendChild(document.createTextNode(' '));
                                    }                                                                                                            
                                    this.innerHTML = doc.body.innerHTML; 
                                 }},
                                '$textContent$': {configurable:true, get:function(){return this.textContent;},set:function(textContent){this.textContent = textContent;}},
                                '$style$': {configurable:true, get:function(){ 
                                        var style = this.style;
                                        Object.defineProperties(style,{ 
                                            '$color$' : {configurable:true, get:function(){return style.color;}, set:function(color){style.color = color;}},
                                            '$backgroundColor$' : {configurable:true, get:function(){return style.backgroundColor;}, set:function(backgroundColor){style.backgroundColor = backgroundColor;}}  
                                        });
                                        return style;
                                    }
                                 },
                                '$appendChild$': {configurable:true, writable:false, value:function(){return this.appendChild.apply(this, arguments);}},
                                '$firstChild$': {configurable:true, get:function(){return this.firstChild}},
                                '$lastChild$': {configurable:true, get:function(){return this.lastChild}},
                                '$nextSibling$': {configurable:true, get:function(){return this.nextSibling}},
                                '$parentNode$': {configurable:true, get:function(){return this.parentNode}},
                                '$insertBefore$': {configurable:true, writable:false, value:function(){return this.insertBefore.apply(this, arguments);}},
                                '$insertAfter$': {configurable:true, writable:false, value:function(){return this.insertAfter.apply(this, arguments);}},
                                '$cloneNode$': {configurable:true, writable:false, value:function(){return this.cloneNode.apply(this, arguments);}},
                                '$removeChild$': {configurable:true, writable:false, value:function(){return this.removeChild.apply(this, arguments);}},
                                '$getAttribute$': {configurable:true, writable:false, value:function(name){if(attributeWhitelist.test(name)){return this.getAttribute(name)}}},
                                '$setAttribute$': {configurable:true, writable:false, value:function(name, value){if(attributeWhitelist.test(name)){return this.setAttribute(name, value+'')}}},
                                '$getElementsByTagName$': {configurable:true, writable:false, value:function(){return this.getElementsByTagName.apply(this, arguments);}}                               
                            });
                            return node;
                        };                        
                        function objWhitelist(obj, list, noprototype) {             
                            list = list.split(',');
                            for(var i=0;i<list.length;i++) {
                                var prop = list[i];
                                if(noprototype) {
                                    Object.defineProperty(obj,scoping+prop+scoping, {value:obj[prop], configurable:true, enumerable:false, writable: false});                               
                                } else {                                     
                                    Object.defineProperty(obj.prototype,scoping+prop+scoping, {configurable:true, enumerable:false, value:(function(obj, prop){ 
                                    function func() {
                                        if(!this[prop]) {
                                            return false;
                                        }                                                                  
                                        var that = this, args = arguments;                      
                                        return that[prop].apply(that, args);
                                        
                                    }
                                    func.valueOf = function() {
                                        return 'function '+prop+'() {\n [jsreg code] \n}';
                                    }
                                    return func;
                                })(obj, prop)});                                                                                       
                                }
                            }
                            return obj;
                        };
                        function constWhitelist(obj, list, transObj) {
                            list = list.split(',');
                            for(var i=0;i<list.length;i++) {
                                var prop = list[i];  
                                if(transObj) {                              
                                    Object.defineProperty(transObj,scoping+prop+scoping, {value:obj[prop], configurable:true, enumerable:false, writable: false});
                                } else {
                                    Object.defineProperty(obj,scoping+prop+scoping, {value:obj[prop], configurable:true, enumerable:false, writable: false});                               
                                }
                            }           
                        }; 
                        
                        
                        function FUNCTION(){                                                                                                                                                                                 
                            var converted = Function.apply(window, arguments) + '',                                             
                                js = MentalJS();                                                                   
                            if(typeof str != 'function') {                           
                                converted = eval(js.parse({options:{eval:false},code:'('+converted+')'}));                                                                                                                                                                   
                            } else {
                                converted = eval(converted)
                            }
                            if(that.functionCode) {
                                that.functionCode(converted);
                            }
                            return converted;        
                        };
                        FUNCTION.$constructor$ = FUNCTION;                                                                                                                                          
                        $Function$ = FUNCTION;                                                                                                                                                        
                        Boolean.$constructor$ = $Function$;
                        Boolean.prototype.$constructor$ = Boolean;                                       
                        $Boolean$ = Boolean;                                                            
                        Function.prototype.$constructor$ = $Function$;
                        objWhitelist(Function, 'call,apply');                                                            
                        objWhitelist(String,'charAt,charCodeAt,concat,indexOf,lastIndexOf,localeCompare,match,replace,search,slice,split,substr,substring,toLocaleLowerCase,toLocaleString,toLocaleUpperCase,toLowerCase,toUpperCase');
                        String = objWhitelist(String, 'fromCharCode', true);
                        String.prototype.$constructor$ = String;
                        String.$constructor$ = $Function$;                                                            
                        $String$ = String;
                                                                                                          
                        objWhitelist(Array,'sort,join,pop,push,reverse,shift,slice,splice,unshift,concat');                                                                                                                                     
                        Array.prototype.$constructor$ = Array;
                        Array.$constructor$ = $Function$;                                                                                     
                        $Array$ = Array;                                                             
                        objWhitelist(RegExp,'compile,exec,test');                    
                        RegExp.prototype.$constructor$ = RegExp;
                        Object.defineProperty(RegExp.prototype, '$source$', {configurable:true, get:function(){return this.source}});                        
                        RegExp.$lastMatch$ = RegExp.lastMatch;                    
                        RegExp.$lastParen$ = RegExp.lastParen;                    
                        RegExp.$leftContext$ = RegExp.leftContext;                                                            
                        RegExp.$constructor$ = $Function$;    
                        $RegExp$ = RegExp;                     
                        objWhitelist(Number,'toExponential,toFixed,toPrecision');                    
                        constWhitelist(Number, 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY');                                                          
                        Number.$constructor$ = $Function$;
                        Number.prototype.$constructor$ = Number;
                        $Number$ = Number;                                                         
                        objWhitelist(Date,'getDate,getDay,getFullYear,getHours,getMilliseconds,getMinutes,getMonth,getSeconds,getTime,getTimezoneOffset,getUTCDate,getUTCDay,getUTCFullYear,getUTCHours,getUTCMilliseconds,getUTCMinutes,getUTCMonth,getUTCSeconds,getYear,setDate,setFullYear,setHours,setMilliseconds,setMinutes,setMonth,setSeconds,setTime,setUTCDate,setUTCFullYear,setUTCHours,setUTCMilliseconds,setUTCMinutes,setUTCMonth,setUTCSeconds,setYear,toDateString,toGMTString,toLocaleDateString,toLocaleString,toLocaleTimeString,toTimeString,toUTCString');                    
                        Date.prototype.$constructor$ = Date;
                        Date.$constructor$ = $Function$;                    
                        $Date$ = Date;                         
                        objWhitelist(Math,'abs,acos,asin,atan,atan2,ceil,cos,exp,floor,log,max,min,pow,random,round,sin,sqrt,tan', true);
                        constWhitelist(Math, 'E,LN10,LN2,LOG10E,LOG2E,PI,SQRT1_2,SQRT2');                                                                                                                                          
                        Math.$constructor$ = Object;
                        $Math$ = Math;                    
                        constWhitelist(window,'decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,escape,isFinite,isNaN,parseFloat,parseInt,unescape', window);                                        
                        function CLEAR_INTERVAL(id){                
                            id = +id;
                            if (typeof setIntervalIDS[id] == 'undefined') {
                                return null;
                            }
                            return clearInterval(id);
                        };                    
                        $clearInterval$ = CLEAR_INTERVAL;                      
                        var CLEAR_TIMEOUT = function(id){               
                            id = +id;
                            if (typeof setTimeoutIDS[id] == 'undefined') {
                                return null;
                            }
                            return clearTimeout(id);
                        };                    
                        $clearTimeout$ = CLEAR_TIMEOUT;                                        
                        var SET_TIMEOUT = function(func, time){             
                            time = +time;                
                            if (typeof func !== 'function') {
                                func = $Function$(func);
                            }
                            var id = +setTimeout(func, time);
                            setTimeoutIDS[id] = true;
                            return id;                
                        };                     
                        $setTimeout$ = SET_TIMEOUT;                                          
                        var SET_INTERVAL = function(func, time){                
                            time = +time;                
                            if (typeof func !== 'function') {
                                func = $Function$(func);
                            }
                            var id = +setInterval(func, time);
                            setIntervalIDS[id] = true;
                            return id;                
                        };                    
                        $setInterval$ = SET_INTERVAL;                                         
                        var ALERT = function(str) {             
                            alert(str);
                        };                      
                        $alert$ = ALERT;                    
                        var EVAL = function(str) {                      
                            var js = MentalJS(), converted;                                            
                            if(typeof str != 'function') {                           
                                return eval(js.parse({options:{eval:false},code:str, converted: function(converted){
                                    if(that.evalCode) {
                                        that.evalCode(converted);
                                    }
                                }}));                                                                                                                                                                  
                            } else {
                                if(that.evalCode) {
                                    that.evalCode(str);
                                }
                                return eval(str)
                            }                                                                                   
                        };                   
                        $eval$ = EVAL;                                
                        Object.$constructor$ = $Function$;                                        
                        Object.prototype.$constructor$ = Object;                    
                        Object.prototype.$hasOwnProperty$ = Object.prototype.hasOwnProperty;
                        objWhitelist(Object, 'valueOf');
                        objWhitelist(Object, 'toString');                                                                                                                                                                   
                        $Object$ = Object;                         
                        if(that.global) {                              
                            Object.defineProperties(this, {
                               '$document$': {configurable: true, writable: false, value: document},
                               '$Object$': {configurable: true, writable: false, value: Object},
                               '$eval$': {configurable: true, writable: false, value: EVAL},
                               '$alert$': {configurable: true, writable: false, value: ALERT},
                               '$setInterval$': {configurable: true, writable: false, value: SET_INTERVAL},
                               '$setTimeout$': {configurable: true, writable: false, value: SET_TIMEOUT},
                               '$clearInterval$': {configurable: true, writable: false, value: CLEAR_INTERVAL},
                               '$clearTimeout$': {configurable: true, writable: false, value: CLEAR_TIMEOUT},
                               '$Math$': {configurable: true, writable: false, value: Math},
                               '$Date$': {configurable: true, writable: false, value: Date},
                               '$Number$': {configurable: true, writable: false, value: Number},
                               '$RegExp$': {configurable: true, writable: false, value: RegExp},
                               '$Array$': {configurable: true, writable: false, value: Array},
                               '$String$': {configurable: true, writable: false, value: String},
                               '$Boolean$': {configurable: true, writable: false, value: Boolean},
                               '$Function$': {configurable: true, writable: false, value: FUNCTION},
                               '$decodeURI$': {configurable: true, writable: false, value: decodeURI},
                               '$decodeURIComponent$': {configurable: true, writable: false, value: decodeURIComponent},
                               '$encodeURI$': {configurable: true, writable: false, value: encodeURI},
                               '$encodeURIComponent$': {configurable: true, writable: false, value: encodeURIComponent},
                               '$escape$': {configurable: true, writable: false, value: escape},
                               '$isFinite$': {configurable: true, writable: false, value: isFinite},
                               '$isNaN$': {configurable: true, writable: false, value: isNaN},
                               '$parseFloat$': {configurable: true, writable: false, value: parseFloat},
                               '$parseInt$': {configurable: true, writable: false, value: parseInt},
                               '$unescape$': {configurable: true, writable: false, value: unescape},                               
                               '$location$': {configurable: true, writable: false, value: {}},
                               '$navigator$': {configurable: true, writable: false, value: {}},
                               '$removeEventListener$': {configurable: true, writable: false, value: function(){ return window.removeEventListener.apply(document, arguments); }},
                               '$addEventListener$': {configurable: true, writable: false, value: function(){
                                        if(typeof arguments[1] != 'function') {
                                            var js = Mental(),
                                                converted = Function.apply(window, arguments) + '',                                             
                                            js = MentalJS();                                                                                                                                    
                                            converted = eval(js.parse({options:{eval:false},code:'('+converted+')'}));    
                                            arguments[1] = converted;
                                        }
                                        return window.addEventListener.apply(window, arguments);
                                    }
                                 }                                 
                            });
                            
                            Object.defineProperties(this.$location$, {
                                'toString': {configurable: true, value:function(){ return 'http://sandboxed'; }},
                                'valueOf': {configurable: true, value:function(){ return 'http://sandboxed'; }},
                                '$href$': {configurable: true, get:function(){return 'http://sandboxed'}},
                                '$replace$': {configurable: true, get:function(){return function(){}}},
                                '$reload$': {configurable: true, get:function(){return function(){}}},
                                '$assign$': {configurable: true, get:function(){return function(){}}},
                                '$constructor$': {configurable: true, get:function(){return location}},
                                '$hash$': {configurable: true, set:function(hash){ location.hash=hash;},get:function(){return location.hash}},
                                '$host$': {configurable: true, get:function(){return 'sandboxed'}},
                                '$hostname$': {configurable: true, get:function(){return 'sandboxed'}},
                                '$pathname$': {configurable: true, get:function(){return '/'}},
                                '$port$': {configurable: true, get:function(){return ''}},
                                '$protocol$': {configurable: true, get:function(){return 'http:'}},
                                '$search$': {configurable: true, get:function(){return ''}}
                            });
                             Object.defineProperties(this.$navigator$, {                                
                                '$appCodeName$': {configurable: true, get:function(){return navigator.appCodeName}},
                                '$appName$': {configurable: true, get:function(){return navigator.appName}},
                                '$appVersion$': {configurable: true, get:function(){return navigator.appVersion}},
                                '$language$': {configurable: true, get:function(){return navigator.language}},
                                '$onLine$': {configurable: true, get:function(){return navigator.onLine}},
                                '$oscpu$': {configurable: true, get:function(){return navigator.oscpu}},
                                '$platform$': {configurable: true, get:function(){return navigator.platform}},
                                '$product$': {configurable: true, get:function(){return navigator.product}},
                                '$productSub$': {configurable: true, get:function(){return navigator.productSub}},
                                '$userAgent$': {configurable: true, get:function(){return navigator.userAgent}},
                                '$vendor$': {configurable: true, get:function(){return navigator.vendor}},
                                '$vendorSub$': {configurable: true, get:function(){return navigator.vendorSub}},                                
                            }); 
                            Object.defineProperties(document.documentElement, {
                                '$contains$': {enumerable:false,configurable: true, writable: false, value: function(){return document.documentElement.contains.apply(document.documentElement, arguments)}},
                                '$compareDocumentPosition$': {enumerable:false,configurable: true, writable: false, value: function(){return document.documentElement.compareDocumentPosition.apply(document.documentElement, arguments)}},
                            });  
                            
                            createSandboxedNode(Element.prototype); 
                            createSandboxedNode(DocumentFragment.prototype);                            
                            
                            Object.defineProperties(HTMLScriptElement.prototype, {
                                '$innerText$': {configurable:true, get:function(){return this.innerText;},set:function(innerText){ var js = MentalJS();this.innerText = js.parse({options:{eval:false},code:innerText+''});}},
                                '$textContent$': {configurable:true, get:function(){return this.textContent;},set:function(textContent){ var js = MentalJS();this.textContent = js.parse({options:{eval:false},code:textContent+''});}},
                                '$text$': {configurable:true, get:function(){return this.text;},set:function(text){ var js = MentalJS();this.text = js.parse({options:{eval:false},code:text+''});}},
                                '$appendChild$': {configurable:true, writable:false, value:function(){var js = MentalJS();return this.appendChild(document.createTextNode(js.parse({options:{eval:false},code:arguments[0].nodeValue+''})));}},
                            });                                                         
                                                                              
                            Object.defineProperties(document, {
                                '$compatMode$': {enumerable:false, configurable: true, writable: false, value: document.compatMode},
                                '$head$': {enumerable:false, configurable: true, writable: false, value: document.head},
                                '$defaultView$': {enumerable:false, configurable: true, writable: false, value: window},
                                '$documentElement$': {enumerable:false, configurable: true, writable: false, value: document.documentElement},                                
                                '$readyState$': {enumerable:false,configurable: true, writable: false, value: document.readyState}, 
                                '$body$': {enumerable:false,configurable: true, writable: false, value: document.body},                                
                                '$createTextNode$': {enumerable:false,configurable: true, writable: false, value: function(){return document.createTextNode.apply(document, arguments)}},
                                '$createComment$': {enumerable:false,configurable: true, writable: false, value: function(){return document.createComment.apply(document, arguments)}},                                
                                '$createDocumentFragment$': {enumerable:false,configurable: true, writable: false, value: document.createDocumentFragment},
                                '$getElementById$': {enumerable:false,configurable: true, writable: false, value: function(){return document.getElementById.apply(document, arguments)}},
                                '$getElementsByTagName$': {enumerable:false,configurable: true, writable: false, value: function(){return document.getElementsByTagName.apply(document, arguments)}},
                                '$querySelector$': {enumerable:false,configurable: true, writable: false, value: function(){return document.querySelector.apply(document, arguments)}},
                                '$querySelectorAll$': {enumerable:false,configurable: true, writable: false, value: function(){return document.querySelectorAll.apply(document, arguments)}},
                                '$createElement$': {enumerable:false,configurable: true, writable: false, value: function(){return document.createElement.apply(document, arguments)}},
                                '$removeEventListener$': {enumerable:false,configurable: true, writable: false, value: function(){ return document.removeEventListener.apply(document, arguments); }}, 
                                '$addEventListener$': {enumerable:false,configurable: true, writable: false, value: function(){
                                        if(typeof arguments[1] != 'function') {
                                            var js = Mental(),
                                                converted = Function.apply(window, arguments) + '',                                             
                                            js = MentalJS();                                                                                                                                    
                                            converted = eval(js.parse({options:{eval:false},code:'('+converted+')'}));    
                                            arguments[1] = converted;
                                        }
                                        return document.addEventListener.apply(document, arguments);
                                    }
                                 }                                
                            });
                                                                                                                                                                                                                                                                                                                            
                            window[scoping+'window'+scoping] = this;                                                                       
                        }                   
                        result = eval(code);                                                                  
                        if(that.result) {
                            that.result(result);
                        }
                        return result;
                };
                
                function sandbox(code) {
                	this.code = code;                                                                      
                    function lookup(chr, state, expression) {
                        var start, text, storedState;
                        for(var lookup in lookups) {                            
                            if(chr === lookup) {                            	                            	
                                states.push(state);
                                expressions.push(expression);
                                lookups[lookup].positions.push(pos);                                                               
                                return lookups[lookup].states.push(state);                              
                            } else if(chr === lookups[lookup].end) {                                                        	                            	                            	                            	                                                                
                                if(!lookups[lookup].states.length) {
                                  error('Unmatched '+lookup+' encountered.' );  
                                }                                                                               
                                states.pop();
                                start = lookups[lookup].positions.pop();
                                text = code.slice(start+1, pos);
                                storedState = lookups[lookup].states.pop();
                                if(storedState === 'accessor' && chr === ']' && /[()]/.test(text) && text.length) {                                	
                                	checkSyntax('1,'+text);                                	                                	                                 
                                }
                                currentExpression = expressions.pop();                                
                                return storedState;                
                            } 
                        } 
                    };     
                    function isReservedWord(word) {
                        if(typeof word == 'undefined') {
                            return false;
                        }
                        if(/\\/.test(word)) {
                        	word = word.replace(/\\u([a-fA-F0-9]{4})/g,function($0, c){                        		
                        		return String.fromCharCode(parseInt(c, 16));
                        	});                        	
                        }
                        
                        if(word === 'function') {
                            error('Unicode escape function is not allowed.');
                        }
                        
                        return /^(?:function|NaN|null|true|false|undefined|break|case|catch|continue|debugger|default|delete|do|else|finally|for|if|in|instanceof|new|return|switch|this|throw|try|typeof|var|void|while|with)$/.test(word);
                    };
                    function getParentState() {
                        return states[states.length-1];
                    };
                    function sendOutput(str) {
                        output += str;
                        lastChr = str.substr(-1, 1);
                        if(!/\s/.test(lastChr)) {
                            lastParseChr = lastChr;
                        }
                    }
                    function outputSpace() {
                        if(lastChr !== ' ') {
                            sendOutput(' ');
                        }
                    };
                    function isValidUnicodeStart(unicode) {
                        if(typeof unicode == 'undefined') {
                            return false;
                        }
                        if(!/^\\u[a-fA-F0-9]{4}$/.test(unicode)) {
                            error("Invalid unicode escape");
                        }
                        unicode = parseInt(unicode.substr(2),16);
                        if(unicode <= 0xffff && unicode > -1) {
                            return isValidIdentifierStart(String.fromCharCode(unicode));
                        } else {
                            return false;
                        }
                    };
                    function isValidUnicodeAfterStart(unicode) {
                        if(typeof unicode == 'undefined') {
                            return false;
                        }
                        if(!/^\\u[a-fA-F0-9]{4}$/.test(unicode)) {
                            error("Invalid unicode escape");
                        }
                        unicode = parseInt(unicode.substr(2),16);
                        if(unicode <= 0xffff && unicode > -1) {
                            return isValidIdentifierAfterStart(String.fromCharCode(unicode));
                        } else {
                            return false;
                        }
                    };
                    function isValidIdentifierStart(chr) {                        
                        if(typeof chr == 'undefined') {
                            return false;
                        }
                        if(/[a-z_$]/i.test(chr)) {
                            return true;
                        }                                                                        
                        return !/\s/.test(chr)&&/[$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]/.test(chr);
                    };
                    function isValidIdentifierAfterStart(chr) {
                        if(typeof chr == 'undefined') {
                            return false;
                        }
                        if(/[\w$_]/i.test(chr)) {
                            return true;
                        }
                        return !/\s/.test(chr)&&/[$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc0-9\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19b0-\u19c0\u19c8\u19c9\u19d0-\u19d9\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1dc0-\u1de6\u1dfc-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f1\ua900-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]/.test(chr);
                    };
                    function c() {
                        return code[pos];
                    };
                    function next(amount) {
                        if(typeof amount == 'undefined') {
                            amount = 1;
                        }
                        return code[pos+amount];
                    }                    
                    function lookahead(pos) {
                        var lookaheadChr, lookaheadNext, lookaheadPos = pos, comment = 0;
                        while(lookaheadPos < code.length) {
                            lookaheadChr = code[lookaheadPos];                                                                              
                            lookaheadNext = code[lookaheadPos+1];                          
                            if(comment === 1 && isNewLine(lookaheadChr)) {
                                lookaheadPos++;
                                comment = 0;
                            } else if(comment === 2 && lookaheadChr === '*' && lookaheadNext === '/') {
                                lookaheadPos += 2;
                                comment = 0;
                            } else if(comment) {
                                lookaheadPos++;
                            } else if(lookaheadChr === '/' && lookaheadNext === '/') {
                                lookaheadPos+=2;
                                comment = 1;
                            } else if(lookaheadChr === '/' && lookaheadNext === '*') {
                                lookaheadPos+=2;
                                comment = 2;
                            } else if(/^\s$/.test(lookaheadChr)) {
                                lookaheadPos++;
                            } else {
                                return lookaheadChr;
                                break;
                            }
                        }
                        return false;
                    };
                    function previous(amount) {
                        if(typeof amount == 'undefined') {
                            amount = 1;
                        }
                        return code[pos-amount];
                    };                    
                    function isNewLine(chr) {
                        if(typeof chr == 'undefined') {
                            return false;
                        }
                        return!/./.test(chr)&&/\s/.test(chr)
                    };          
                    function reservedWord(word) {           
                        if(isReservedWord(word)) { 
                        	if(/\\/.test(word)) {
	                        	word = word.replace(/\\u([a-fA-F0-9]{4})/g,function($0, c){                        		
	                        		return String.fromCharCode(parseInt(c, 16));
	                        	});                        	
	                        }                                                                                                                                                                                                                                                                                                         
                            lastState = word;                            
                            if(/^(?:this|true|false|undefined|null|NaN)$/.test(word)) {
                                left = 1;
                            } else {
                                left = 0;   
                            }                            
                            if(/^(?:break|catch|continue|debugger|delete|do|else|finally|for|if|in|instanceof|return|switch|throw|try|typeof|var|void|while|with|case|default)$/.test(word)) {
                            	currentExpression = word;
                            }
                            if(!/[\s\[\](){}]/.test(lastChr) && lastChr !== '') {                                
                               outputSpace();
                            }                            
                            sendOutput(word);
                        } else {
                            error("Invalid reserved word");
                        }
                        
                        return '<reservedWord>' + word + '</reservedWord>';
                    };
                    function regexp() {
                        var state = {escaping: 0, complete: 0, open: 0, square: 0, flags: {}}, nextChr, result = '';       
                        lastState = 'regexp';
                        left = 1;               
                        state.open = 1; 
                        sendOutput('/(?:)/.constructor(');    
                        sendOutput(chr);
                        result += '' + chr;
                        pos++;                  
                        while(1) {
                            chr = c();
                            nextChr = next();                            
                            if(chr === "/" && !state.escaping && !state.square) {
                                state.open = 0;
                                if(!/[img]/.test(next())) {
                                    state.complete = 1;
                                }
                            } else if(chr === "/" && !state.escaping && state.square) {
                                sendOutput('\\');           
                            } else if(chr === "(" && !state.escaping && state.square) {
                            	sendOutput('\\');
							} else if(chr === ")" && !state.escaping && state.square) {
                            	sendOutput('\\');                            	    
                            } else if(chr === "[" && !state.escaping && state.square) {                
                                sendOutput('\\');
                            } else if(chr === "[" && !state.escaping && !state.square) {
                                if(nextChr === ']' || (nextChr === '^' && next(2) === ']')) {
                                    error("Empty character class not allowed.");
                                }
                                state.square = 1;               
                            } else if(chr === '\\' && !state.escaping) {
                                state.escaping = 1;
                            } else if(chr === '\\' && state.escaping) {
                                state.escaping = 0;
                            } else if(chr === ']' && !state.escaping) {                
                                state.square = 0;               
                            } else if(isNewLine(chr)) {
                                error("Unterminated regex literal");                                
                            } else if(state.escaping) {
                                state.escaping = 0;
                            } else if(!state.open && !/[img]/.test(nextChr)) {
                                if(!state.open && /[img]/.test(chr) && state.flags[chr]) {
                                    error("Duplicate regex flag");
                                }               
                                state.complete = 1;
                            } else if(!state.open && /[img]/.test(chr) && !state.flags[chr]) {
                                state.flags[chr] = 1;
                            } 
                            if(pos + 1 > code.length && state.open) {               
                                error("Unterminated regex literal");
                            }
                            
                            if(pos + 1 > code.length) { 
                                sendOutput(')')            
                                return result;
                            }
                            
                            sendOutput(chr);
                            result += '' + chr;
                            pos++;
                            if(state.complete) {
                                sendOutput(')')                  
                                return result;
                            }
                        }   
                    };
                    function identifier() {     
                        var state = {complete: 0, stack: '', unicode: 0, startDone: 0, identifier: ''}, result = '', newState = 'identifier';               
                        left = 1;                                                                         
                        if(lastState === 'var') {
                            currentExpression = 'var';
                        }
                                                               
                        if((currentExpression === 'objectLiteral' && lastState === 'comma') || lastState === 'objectLiteral') {
                            newState = 'objectLiteral';                        
                        } else if(lastState === 'break' || lastState === 'continue') {
                            left = 0;
                        } else if(lastState === 'functionStatement') {
                            newState = 'functionStatementIdentifier';
                            left = 0;
                        } else if(lastState === 'functionExpression') {                                                                                   
                            newState = 'functionExpressionIdentifier';
                            left = 0;
                        }                                                                                                                               
                        while(1) {
                            chr = c();              
                            if(typeof chr == 'undefined') {
                                state.complete = 1;
                                if(isReservedWord(state.identifier)) {
                                    return reservedWord(state.identifier);
                                } else if(lastChr === '.' && allowedProperties.test(state.identifier)) {
                                	sendOutput(state.identifier);
                                } else {                                  	                                
                                    sendOutput(scoping + state.identifier + scoping);
                                }
                                if((lastState === 'blockstatement' || !lastState || lastState === 'StatementLabel') && lookahead(pos) === ':') {             
                                    newState = 'StatementLabel';
                                }
                                lastState = newState;
                                return result;  
                            }
                                        
                            if(chr === '\\') {             
                                if(!state.unicode && next() === 'u') {  
                                    state.unicode = 1;
                                    state.stack = '\\';
                                } else {
                                    error("illegal character"); 
                                }           
                            } else if(chr === 'u' && state.unicode && previous() === '\\') { 
                                state.stack += 'u';
                            } else if(state.unicode && state.stack.length < 6 && /[0-9a-f]/i.test(chr)) {               
                                state.stack += chr;             
                                if(state.stack.length === 6 && state.unicode) {
                                    if(state.startDone) {
                                        if(!isValidUnicodeAfterStart(state.stack)) {
                                            error("illegal character");
                                        }
                                    } else {
                                        if(!isValidUnicodeStart(state.stack)) {
                                            error("illegal character");     
                                        } else {
                                            state.startDone = 1;                        
                                        }                   
                                    }
                                state.identifier += '' + state.stack;
                                state.stack = '';
                                state.unicode = 0;
                                }                               
                            } else if(state.unicode && state.stack.length < 6 && !/[0-9a-f]/i.test(chr)) {
                                error("illegal character");                                         
                            } else if(isValidIdentifierStart(chr) && !state.startDone) {                                                                
                                state.identifier += chr;
                                state.startDone = 1;            
                            } else if(isValidIdentifierAfterStart(chr) && state.startDone) {                                                
                                state.identifier += chr;                                
                            } else if(!isValidIdentifierStart(chr) && !state.startDone) {               
                                error("illegal character"); 
                            } else if(!isValidIdentifierAfterStart(chr)) {                                                              
                                state.complete = 1; 
                                if(isReservedWord(state.identifier)) {
                                    return reservedWord(state.identifier);
                                } else if(lastChr === '.' && allowedProperties.test(state.identifier)) {
                                	sendOutput(state.identifier);
                                } else {                                                                        
                                    sendOutput(scoping + state.identifier + scoping);
                                }
                                if((lastState === 'blockstatement' || !lastState || lastState === 'StatementLabel') && lookahead(pos) === ':') {             
                                    newState = 'StatementLabel';
                                }
                                lastState = newState;                                       
                                return result;
                            }   
                            
                            if(pos + 1 > code.length) {             
                                state.complete = 1;
                            } 
                            if(!state.complete) {
                                result += '' + chr;
                            }           
                            pos++;                          
                            if(state.complete) {
                                if(isReservedWord(state.identifier)) {
                                    return reservedWord(state.identifier);
                                } else {                                                                                            
                                    sendOutput(scoping + state.identifier + scoping);
                                }
                                if((lastState === 'blockstatement' || !lastState || lastState === 'StatementLabel') && lookahead(pos) === ':') {             
                                    newState = 'StatementLabel';
                                }
                                lastState = newState;                       
                                return result;
                            }
                        }   
                    };
                    function string() {                 
                        var state = {escaping: 0, singleQuote: 0, doubleQuote: 0, complete: 0}, result = '', objProp = 0;                        
                        if(currentExpression === 'objectLiteral' || lastState === 'comma') {
                            objProp = 1;
                        }                                           
                        lastState = 'string';
                        left = 1;
                        if(chr === '"') {
                            state.doubleQuote = 1;
                        } else if(chr === "'") {
                            state.singleQuote = 1;
                        } else {
                            error("Invalid string");
                        }                                               
                        result += '' + chr;
                        sendOutput(chr);
                        if(getParentState() === 'objectLiteral' && objProp) {
                            sendOutput("$");    
                        }
                        pos++;                  
                        while(1) {
                            chr = c();
                            if(chr === "'" && !state.escaping && state.singleQuote) {
                                state.complete = 1;                 
                            } else if(chr === '"' && !state.escaping && state.doubleQuote) {
                                state.complete = 1;                 
                            } else if(chr === '\\' && !state.escaping) {
                                state.escaping = 1;
                            } else if(chr === '\\' && state.escaping) {
                                state.escaping = 0;
                            } else if(isNewLine(chr) && !state.escaping) {
                                error("Unterminated string literal");
                            } else if(state.escaping) {
                                state.escaping = 0;
                            }
                            if(pos + 1 > code.length) {
                                error("Unterminated string literal");
                            }               
                            result += '' + chr;
                            if(getParentState() === 'objectLiteral' && state.complete && objProp) {
                                sendOutput("$");    
                            }
                            sendOutput(chr);
                            pos++;
                            if(state.complete) {
                                return result;
                            }
                        }   
                    };
                    function number() {     
                        var state = {}, result = '';                        
                        if(chr === '0' && /x/i.test(next())) {
                            state.hex = 1;
                            result += '' + '0x';
                            sendOutput('0x');
                            pos+=2;
                        } else if(chr === '.') {
                            sendOutput('0.');
                            result += '0.';
                            pos++;
                        }                   
                        while(1) {
                            chr = c();
                            if(state.hex && !/[0-9a-f]/i.test(chr) && result.length < 3) {
                                error('Missing hex digits');
                            } else if(state.hex && !/[0-9a-f]/i.test(chr) && result.length >= 3) {
                                return result;
                            }
                                                        
                            if(/e/i.test(chr) && /[+\-]/i.test(next())) {
                                result += '' + chr;
                                result += next();
                                sendOutput(chr+next());
                                pos+=2;                         
                            } else if(!state.hex && !/[0-9.E]/i.test(chr) && result.length > 0) {               
                                return result;
                            } else if(!state.hex && !/[0-9.E]/i.test(chr) && result.length === 0) {
                                error('Invalid number');
                            } else if(!state.hex && chr === '.') {
                                if(state.dot) {
                                    return result;
                                } else {
                                    state.dot = 1;  
                                }               
                            }
                            
                            if(pos + 1 > code.length) {
                                return result;
                            }
                            result += '' + chr;
                            sendOutput(chr);
                            pos++;
                            if(state.complete) {
                                return result;
                            }
                        }   
                    };
                    function operators() {      
                        var state = {}, result = '', chrs = chr + next(1) + next(2) + next(3);                                                          
                        while(1) {
                            chr = c();
                            if(!left) {
                                if(!/[!~+\-]/.test(chr)) {
                                    return result;
                                }   
                            } else {
                                chrs.replace(/^(?:[&|+\-]{2}|[\/][=]?|[=]{1,3}|[>]{1,3}[=]?|[<]{1,2}[=]?|[!][=]{0,2}|[\^<>%&+*\-|][=]?|[~*^&|+\-])/, function(op){
                                    result = op;                
                                });
                                if(!result) {
                                    error('Invalid operator');
                                }
                                pos += result.length;
                                sendOutput(result);
                                if(!/[+-]{2}/.test(result)) {
                                    left = 0;
                                }                                
                                return result;
                            }                               
                            if(pos + 1 > code.length) {             
                                return result;
                            }
                            result += '' + chr;
                            sendOutput(chr);
                            pos++;      
                        }   
                    };  
                    function singleLineComment() {
                        var state = {}, result = '';                        
                        pos+=2;                 
                        while(1) {
                            chr = c();
                            if(chr === '\n') {
                                state.complete = 1;
                            }
                            if(pos + 1 > code.length) {
                                return result;
                            }
                            result += '' + chr;
                            pos++;
                            if(state.complete) {
                                return result;
                            }
                        }   
                    };                    
                    function space() {
                        if(!/\s/.test(lastChr)) {                       
                            sendOutput(' ');    
                        }   
                        pos++;
                        return ' ';
                    };
                    function newLine() {        
                        pos++;
                        sendOutput('\n');
                        return '\n';
                    };
                    function checkSyntax(code){                                        
                        try {
                            throw new Error()
                        } 
                        catch (e) {
                            var relativeLineNumber = e.lineNumber
                        }
                        try {
                            code = new Function(code);
                        } 
                        catch (e) {                                 
                            msg = e;
                            pos = (e.lineNumber - relativeLineNumber - 1);                
                            error(e, code);
                        }
                    };      
                    function multiLineComment() {
                        var state = {}, result = '';
                        chr = c();
                        result += '' + chr;                     
                        pos++;
                        chr = c();
                        result += '' + chr;                     
                        pos++;                  
                        while(1) {
                            chr = c();                          
                            if(chr === '/' && previous() === '*' && result.length > 2) {               
                                state.complete = 1;
                            }           
                            if(pos + 1 > code.length) {             
                                error("Unterminated multiline comment");
                            }
                            result += '' + chr;
                            pos++;
                            if(state.complete) {
                                return result;
                            }
                        }   
                    };              
                    
                    checkSyntax(code);
                    
                    while(pos < code.length) {
                        chr = c();      
                        if(!left && (chr === '"' || chr === "'")) {                 
                            addToParseTree('<string>' + string() + '</string>');                                                                                                                        
                        } else if(chr === '/') {                                                                                    
                            if(!left && next() !== '*' && next() !== '/') {         
                                addToParseTree('<regexp>' + regexp() + '</regexp>');
                            } else if(next() === '/') {
                                addToParseTree('<singleLineComment>' + singleLineComment() + '</singleLineComment>');
                            } else if(next() === '*') {
                                addToParseTree('<multiLineComment>' + multiLineComment() + '</multiLineComment>');
                            } else if(left) {                            	
                                left = 0;
                                lastState = 'operators';
                                if(next() === '=') {
                                   sendOutput(chr+'=');                                   
                                   addToParseTree('<operators>' + chr+'=' + '</operators>');
                                   pos+=2;           
                                   sendOutput('\n');                        
                                } else {
                                    sendOutput(chr);                                    
                                    addToParseTree('<operators>' + chr + '</operators>');
                                    pos++;
                                    sendOutput('\n');
                                }                                
                            } else {
                                error('Unexpected /');
                            }
                        } else if(chr === '<' && next(1) === '!' && next(2) === '-' && next(3) === '-') {
                        	pos += 2;
                        	addToParseTree('<nonStandardComment>' + '<!--' + singleLineComment() + '</nonStandardComment>');                        	
                        } else if(chr === '-' && next(1) === '-' && next(2) === '>') {
                        	pos += 1;
                        	addToParseTree('<nonStandardComment>' + '-->' + singleLineComment() + '</nonStandardComment>');                        	                        	                        	                       
                        } else if(isNewLine(chr)) {                                                                                                                                                                                             	                       	                        	                        	                         	         
                            addToParseTree('<newline>' + newLine() + '</newline>');                                                      
                        } else if(chr === 'f' && next(1) === 'u' && next(2) === 'n' && next(3) === 'c' && next(4) === 't' && next(5) === 'i' && next(6) === 'o' && next(7) === 'n' && !/[\\\w]/.test(next(8))) {
                            if(lastParseChr === ']' || !lastState || lastState === 'eos' || lastState === 'StatementLabel' || lastState === 'blockstatement') {
                                if(lastParseChr != ';') {
                                    sendOutput(';');
                                }
                                lastState = 'functionStatement';                                                                                                                    
                             } else if(/[\(\[]/.test(lastParseChr) || left || /^(?:return|ternary|functionCall|operators|comma|ObjectLabel|SwitchLabel|TernaryLabel|forsemi)$/.test(lastState) || lastState === 'parenExpression') {                                
                                sendOutput('(');                                
                                lastState = 'functionExpression';                              
                             } else {
                                error('Unknown function definition, last state:'+lastState+', current expression:'+currentExpression + ',text:'+code.slice(pos-20,pos+20));
                             }
                             currentExpression = lastState;
                             addToParseTree('<'+lastState+'>function</'+lastState+'>');  
                             left = 0;
                             sendOutput('function');
                             pos+=8;                                                                                                 
                        } else if(chr === '\\' || isValidIdentifierStart(chr)) {                        	                       	                                                                                
                            addToParseTree('<identifier>' + identifier() + '</identifier>');                                                                                           
                        } else if(/\s/.test(chr) && !isNewLine(chr)) {          
                            addToParseTree('<space>' + space() + '</space>');           
                        } else if(chr === '[') {
                        	if(functionParenOpen) {
                        		error("Invalid function argument");
                        	}
                            if(!left) {
                                lookup(chr, 'array', currentExpression);           
                                addToParseTree('<array>' + chr + '</array>');
                                lastState = 'array';
                                left = 0;
                                sendOutput(chr);
                                pos++;
                            } else if(left) {
                                lookup(chr, 'accessor', currentExpression);                
                                addToParseTree('<accessor>' + chr + '</accessor>');
                                lastState = 'accessor';
                                left = 0;
                                sendOutput(chr);
                                sendOutput('M.P(');
                                pos++;
                            }                                                                   
                        } else if(chr === ']') {                                                               
                            lastState = lookup(chr);
                            if(lastState === 'accessor') {
                            	if(!left) {
                            		error("Syntax error accessor cannot be blank");
                            	}
                                sendOutput(')');
                            }                              
                            addToParseTree('<'+lastState+'>' + chr + '</'+lastState+'>');                       
                            left = 1;
                            sendOutput(chr);
                            pos++;                      
                        } else if(chr === '(') {                                                                                                             
                            if(/^(?:identifier|accessor|dot)$/.test(lastState)) {                            	
                                lastState = 'functionCall';                                
                                lookup(chr, lastState, currentExpression);                                                                                                                                                                                                                                             
                            } else if(lastState === 'functionExpression' || lastState === 'functionStatement' || currentExpression === 'functionStatement' || currentExpression === 'functionExpression') {                                                                                              
                                if(lastState === 'functionStatementIdentifier') {                                	
                                    lastState = 'functionStatementParen';
                                    functionParenOpen = true;
                                } else if(lastState === 'functionExpressionIdentifier') {
                                    lastState = 'functionExpressionParen';
                                    functionParenOpen = true;
                                } else if(lastState === 'functionExpression') {
                                    lastState = 'functionExpressionParen';                                    
                                } else if(lastState === 'functionStatement') {
                                	error("Function statement requires a name");                                                                        
                                }                                
                                lookup(chr, lastState, currentExpression);                                                                                                                             
                            } else if(/^(?:for|catch|else|if|else|switch|while|with)$/.test(currentExpression)) {                                
                                lookup(chr, lastState, currentExpression);
                                lastState = 'parenExpression';                                                                                           
                            } else {
                                lastState = 'parenExpression';
                                lookup(chr, lastState, currentExpression);                                                                
                            }                            
                            currentExpression = '';
                            left = 0;
                            addToParseTree('<'+lastState+'>' + chr + '</'+lastState+'>');                             
                            sendOutput(chr);
                            pos++;                                    
                        } else if(chr === ')') {                                                        
                            if((lastState === 'functionStatementParen'  || lastState === 'functionExpressionParen') && lookahead(pos+1) !== '{') {
                                error("Missing '{' is required for functions");
                            }                                                        
                            lastState = lookup(chr);
                            if(lastState === 'functionStatementParen'  || lastState === 'functionExpressionParen') {
                            	functionParenOpen = false;
                            }                                                                                                
                            addToParseTree('<'+lastState+'>' + chr + '</'+lastState+'>');                               
                            if(/^(?:for|catch|else|if|else|switch|while|functionStatement|functionExpression|with)$/.test(lastState)) {
                                left = 0;                               
                            } else {
                                left = 1;                                
                            }                                           
                            sendOutput(chr);
                            pos++;                              
                        } else if(chr === '{') {  
                        	
                        	if(functionParenOpen) {
                        		error("Invalid function argument");
                        	}
                        	                                                                                                                                                                                             	                       	                                      
                            if(lastState === 'regexp' || lastState === 'continue' || lastState === 'break') {
                        		sendOutput(';');
                        		left = 0;
                        		lastState = 'eos';                        		
                        	}                        	                               	                    	
                        	if(/^(?:eos|catch|do|else|finally|for|function|if|switch|try|while|with|StatementLabel|SwitchLabel)$/.test(lastState)) {
                                lastState = 'blockstatement';                                   
                                lookup(chr, lastState, currentExpression);                                    
                                addToParseTree('<'+lastState+'>' + chr + '</'+lastState+'>');
                            } else if(/^(?:ternary|objectLiteral|functionCall|ObjectLabel|forsemi|TernaryLabel|array|parenExpression|comma|operators|accessor|delete|in|instanceof|return|throw|typeof|var|void|case|default)$/.test(lastState)) {                                
                                if(lastState === 'var') {
                                    error("Destructing assignments not supported.");
                                }
                                lookup(chr, 'objectLiteral', currentExpression);               
                                addToParseTree('<objectLiteral>' + chr + '</objectLiteral>');
                                lastState = 'objectLiteral';
                                currentExpression = 'objectLiteral';                                   
                             } else if(currentExpression === 'functionStatement' || currentExpression === 'functionExpression') {
                                lastState = currentExpression;                                   
                                lookup(chr, currentExpression, currentExpression);                                    
                                addToParseTree('<'+lastState+'>' + chr + '</'+lastState+'>');                                                                                                 
                            } else if(lastState === 'functionExpressionParen' || lastState === 'functionStatementParen') {
                                if(lastState === 'functionExpressionParen') {
                                    lastState = 'functionExpression';
                                } else {
                                    lastState = 'functionStatement';
                                }                                   
                                lookup(chr, currentExpression, currentExpression);                                    
                                addToParseTree('<'+lastState+'>' + chr + '</'+lastState+'>');                                                                                                                                                                                                                                                                             
                            } else {                                                                                                 
                                error('Failed to parse "{", last state:'+lastState+', current expression:'+currentExpression + ',text:'+code.slice(pos-20,pos+20));
                            }
                            if(lastState === 'objectLiteral') {
                                if(!/[\s\[\](){}]/.test(lastChr)  && lastChr !== '') {
                                    outputSpace();
                                }
                                sendOutput('M.O(');
                            } 
                            left = 0;
                            sendOutput(chr);            
                            pos++; 
                            if(lastState === 'functionStatement' || lastState === 'functionExpression' || lastState === 'functionExpressionParen' || lastState === 'functionStatementParen') {
                               sendOutput('var $arguments$=M.A(arguments);');
                               lastState = 'blockstatement'; 
                            }                                                                                                     
                        } else if(chr === '}') { 
                        	if(functionParenOpen) {
                        		error("Invalid function argument");
                        	}              
                            lastState = lookup(chr);                                                                                                                        
                            addToParseTree('<'+lastState+'>' + chr + '</'+lastState+'>');               
                            sendOutput(chr);                                           
                            if(lastState === 'objectLiteral') {
                                sendOutput(')');
                            }                                                                             
                            if(lastState === 'blockstatement' || lastState === 'eos' || !lastState) {                                                               
                                left = 0;
                            } else if(lastState === 'functionStatement') {
                                lastState = 'eos';
                                left = 0;
                                sendOutput(';');                                                               
                            } else {
                                if(lastState === 'functionExpression') {
                                    sendOutput(')');
                                }
                                left = 1;                                   
                            }                                                   
                            pos++;                              
                        } else if(chr === ':' && lastChr !== ':') {
                            if(currentExpression === 'case' || currentExpression === 'default') {
                                lastState = 'SwitchLabel';
                                currentExpression = '';
                            } else if(currentExpression === 'blockstatement' || lastState === 'StatementLabel' || lastState === 'functionStatement' || lastState === 'eos') {
                                lastState = 'StatementLabel';
                                currentExpression = '';
                            } else if(currentExpression === 'objectLiteral' || lastState === 'objectLiteral' || getParentState() === 'objectLiteral') {
                                lastState = 'ObjectLabel';
                                currentExpression = '';
                            } else if(currentExpression === 'ternary' || currentExpression === 'functionExpression') {
                                lastState = 'TernaryLabel';                                
                            } else {                                                                                               
                                error('Unknown label: last state:'+lastState+', current expression:'+currentExpression + ',text:'+code.slice(pos-20,pos+20)+',parseTree:'+parseTree);
                            }                      	                        	                                                                                                                                                                                                                                                                                                                            
                            addToParseTree('<'+lastState+'>' + chr + '</'+lastState+'>');                       
                            left = 0;
                            sendOutput(chr);
                            pos++;                                                    		                        		                                   
                        } else if(chr === '?') {                            
                        	currentExpression = 'ternary';                       
                            addToParseTree('<ternary>' + chr + '</ternary>');
                            lastState = 'ternary';
                            left = 0;
                            sendOutput(chr);
                            pos++;                                  
                        } else if(!left && /[.\d]/.test(chr)) {                                                    	
                        	if(functionParenOpen) {
                        		error("Invalid function argument");
                        	}        
                            addToParseTree('<number>' + number() + '</number>');
                            lastState = 'number';
                            left = 1;           
                        } else if(chr === ',') {   
                            addToParseTree('<comma>' + chr + '</comma>');       
                            lastState = 'comma';
                            left = 0;
                            sendOutput(chr);
                            pos++;      
                        } else if(left && chr === '.') {                       
                            addToParseTree('<dot>' + chr + '</dot>'); 
                            lastState = 'dot';                              
                            sendOutput(chr);
                            pos++;          
                        } else if(left && /[&|+\-\/[=><!\^%+*~]/.test(chr) || (!left && /[!~+\-]/.test(chr))) {                         
                            if((chr === '!' && lastChr === '<') || (chr === '>' && lastChr === '-')) {
                                outputSpace();
                            }
                            parseResult = operators();
                            addToParseTree('<operators>' + parseResult + '</operators>');                            
                            lastState = 'operators';   
                            if((parseResult === '++' || parseResult === '--') && lookahead(pos) === '{') {
                                sendOutput(';');
                                lastState = 'eos';
                                left = 0;
                            }                                     
                        } else if(chr === ';') {
                            if(getParentState() === 'for' || currentExpression === 'for') {
                                addToParseTree('<forsemi>' + chr + '</forsemi>');
                                left = 0;
                                lastState = 'forsemi';
                                sendOutput(chr);
                                pos++;
                            } else {
                            	currentExpression = '';                            
                                addToParseTree('<eos>' + chr + '</eos>');
                                lastState = '';
                                left = 0;
                                sendOutput(chr);
                                pos++;  
                            }           
                        } else {
                            error("Unable to parse, invalid chr:" + chr + ', last state:' + lastState + ', current expression:'+currentExpression+',text:'+code.slice(pos-20,pos+20)+', left:'+left+', parse tree: '+parseTree+', output:'+output.slice(-100));   
                        }                                          
                    }
                    if(that.parseTree) {
                        that.parseTree(parseTree);
                    }
                    for(var lookup in lookups) {
                        if(!lookups.hasOwnProperty(lookup)) {
                            continue;
                        }                        
                        if(lookups[lookup].states.length !== 0) {
                            error('-Syntax error unmatched:' + lookup);
                        }
                    }                   
                    if(that.complete) {
                   		that.complete();
                	}
                    if(that.converted) {                    
                        that.converted(output);
                    }       
                    checkSyntax(output);                                                                        
                    return output;
                };
                
                this.options = {eval:true, stealth: true};
                
                if(typeof obj === 'string') {
                    return execute(sandbox(obj));
                }
                if(typeof obj.global != 'undefined') {
                    this.global = obj.global;
                } else {
                    this.global = true;
                }
                if(obj.thisObject) {
                    this.thisObject = obj.thisObject;
                } else {
                    this.thisObject = {};
                }
                if(obj.options) {
                    this.options = obj.options;
                }
                if(obj.converted) {
                    this.converted = obj.converted;
                }
                if(obj.result) {
                    this.result = obj.result;
                }
                if(obj.complete) {
                    this.complete = obj.complete;
                }
                if(obj.evalCode) {
                    this.evalCode = obj.evalCode;
                }           
                if(obj.functionCode) {
                    this.functionCode = obj.functionCode;
                }   
                if(obj.parseTree) {
                    this.parseTree = obj.parseTree;
                }                                           
                converted = sandbox(obj.code);                                           
                if(this.options.eval) {
                    return execute.call(this.thisObject,converted);
                } else {
                    return converted;
                }
            };                  
        };
        return new Mental;
    };
}();