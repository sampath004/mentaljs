MentalJS = function() {
        var rulesLookup = 'ArrayComma,ArrayOpen,ArrayClose,AccessorOpen,AccessorClose,Addition,AdditionAssignment,AssignmentDivide,AndAssignment,BlockStatementCurlyOpen,BlockStatementCurlyClose,BitwiseNot,BitwiseOr,BitwiseAnd,Break,Case,Default,Delete,Do,DoStatementCurlyOpen,DoStatementCurlyClose,DivideOperator,CatchStatement,CatchStatementParenOpen,CatchStatementParenClose,CatchStatementIdentifier,CatchStatementCurlyOpen,CatchStatementCurlyClose,Comma,Continue,EqualAssignment,Equal,Else,ElseCurlyOpen,ElseCurlyClose,EndStatement,False,FinallyStatement,FinallyStatementCurlyOpen,FinallyStatementCurlyClose,ForStatement,ForStatementParenOpen,ForStatementParenClose,ForStatementCurlyOpen,ForStatementCurlyClose,ForSemi,FunctionCallOpen,FunctionCallClose,FunctionArgumentIdentifier,FunctionArgumentComma,FunctionIdentifier,FunctionParenOpen,FunctionExpression,FunctionExpressionIdentifier,FunctionExpressionParenOpen,FunctionExpressionArgumentIdentifier,FunctionExpressionArgumentComma,FunctionParenClose,FunctionExpressionParenClose,FunctionExpressionCurlyOpen,FunctionStatement,FunctionStatementCurlyOpen,FunctionStatementCurlyClose,FunctionExpressionCurlyClose,GreaterThan,GreaterThanEqual,IdentifierDot,Identifier,IfStatement,IfStatementParenOpen,IfStatementParenClose,IfStatementCurlyOpen,IfStatementCurlyClose,In,Infinity,InstanceOf,LabelColon,LessThan,LessThanEqual,LeftShift,LeftShiftAssignment,LogicalOr,LogicalAnd,NaN,New,Number,Null,NotEqual,Not,Nothing,Minus,MinusAssignment,Modulus,ModulusAssignment,Multiply,MultiplyAssignment,ObjectLiteralCurlyOpen,ObjectLiteralCurlyClose,ObjectLiteralIdentifier,ObjectLiteralColon,ObjectLiteralComma,ObjectLiteralIdentifierNumber,ObjectLiteralIdentifierString,OrAssignment,ParenExpressionOpen,ParenExpressionComma,ParenExpressionClose,PostfixIncrement,PostfixDeincrement,PrefixDeincrement,PrefixIncrement,Return,RegExp,RightShift,RightShiftAssignment,String,StrictEqual,StrictNotEqual,SwitchStatement,SwitchStatementParenOpen,SwitchStatementParenClose,SwitchStatementCurlyOpen,SwitchStatementCurlyClose,SwitchColon,This,TernaryQuestionMark,TernaryColon,TryStatement,TryStatementCurlyOpen,TryStatementCurlyClose,True,Throw,TypeOf,UnaryPlus,UnaryMinus,Undefined,Var,VarIdentifier,VarComma,Void,WithStatement,WithStatementParenOpen,WithStatementParenClose,WithStatementCurlyOpen,WithStatementCurlyClose,WhileStatement,WhileStatementParenOpen,WhileStatementParenClose,WhileStatementCurlyOpen,WhileStatementCurlyClose,Xor,XorAssignment,ZeroRightShift,ZeroRightShiftAssignment'.split(','),         
        rules = [       
            createRule('NewExpressions,Expression,Postfix'),
            createRule('Statements,Operators,NewExpressions,Prefix'),       
            createRule('0,1,Expression,Postfix'),       
            createRule('Expression'),       
            createRule('Expression,Postfix'),
            createRule('Expression'),
            createRule('Expression'),       
            createRule('Expression'),
            createRule('Expression'),
            createRule('Statements,123'),
            createRule('Statements,Expression,9,Postfix,14,29'),                                        
            createRule('Prefix,Statements,NewExpressions,Operators'),
            createRule('Expression,Postfix'),
            createRule('Expression,Postfix'),       
            createRule('Statements'),
            createRule('121,35,123'),       
            createRule('121,35,123'),           
            createRule('Statements,NewExpressions,Operators'),
            createRule('Statements,123'),   
            createRule('18'),
            createRule('Statements,Expression,19,Postfix,14,29'),
            createRule('Expression'),
            createRule('129'),
            createRule('22'),
            createRule('25'),
            createRule('23'),
            createRule('24'),
            createRule('Statements,Expression,26,Postfix,14,29'),   
            createRule('Expression,Postfix'),
            createRule('Statements'),                                       
            createRule('Expression'),
            createRule('Expression,Postfix'),                   
            createRule('72,Statements'),
            createRule('32'),
            createRule('Statements,Expression,33,Postfix,14,29'),
            createRule('Statements,Expression,Postfix,29,14,111,123,42,70,142,147'),        
            createRule('Statements,Operators,Prefix,NewExpressions'),
            createRule('27,129'),
            createRule('37'),
            createRule('Statements,Expression,38,Postfix,14,29'),
            createRule('Statements,123'),
            createRule('40'),
            createRule('45,Expression,Postfix,14,29'),
            createRule('42'),
            createRule('Statements,Expression,43,Postfix,14,29'),
            createRule('45,Expression,Postfix,41'),
            createRule('67,63,106,4,47,124'),
            createRule('Expression,46,Postfix'),
            createRule('51,49'),
            createRule('48'),
            createRule('60'),                   
            createRule('50'),
            createRule('Operators,Prefix,NewExpressions'),
            createRule('52'),
            createRule('52,53'),
            createRule('54,56'),        
            createRule('55'),
            createRule('51,48'),
            createRule('55,54'),
            createRule('58'),
            createRule('Statements,123'),
            createRule('57'),                                       
            createRule('Statements,Expression,61,Postfix,14,29'),
            createRule('Statements,Expression,59,Postfix,14,29'),
            createRule('Expression,Postfix'),
            createRule('Expression,Postfix'),
            createRule('Expression'),
            createRule('Statements,Operators,Prefix,NewExpressions,66'),
            createRule('Statements,123'),
            createRule('68'),
            createRule('Expression,Postfix'),
            createRule('70'),
            createRule('Statements,Expression,71,Postfix,14,29'),
            createRule('Expression'),
            createRule('Statements,Operators,Prefix,NewExpressions'),
            createRule('Expression'),
            createRule('Expression'),
            createRule('Expression,Postfix'),
            createRule('Expression,Postfix'),
            createRule('Expression,Postfix'),
            createRule('Expression'),
            createRule('Expression,Postfix'),
            createRule('Expression,Postfix'),
            createRule('Statements,Operators,Prefix,NewExpressions'),
            createRule('Statements,Operators,Prefix,NewExpressions'),       
            createRule('Statements,Operators,NewExpressions,Prefix'),
            createRule('Statements,Operators,NewExpressions,Prefix'),
            createRule('Expression,Postfix'),                   
            createRule('Prefix,Statements,NewExpressions,Operators'),
            {},
            createRule('Expression,Postfix'),
            createRule('Expression'),
            createRule('Expression,Postfix'),
            createRule('Expression'),                                                                       
            createRule('Expression,Postfix'),
            createRule('Expression'),
            createRule('NewExpressions,Operators,Prefix'),
            createRule('Statements,Expression,96,Postfix'),
            createRule('96,100'),
            createRule('98,101,102'),
            createRule('Expression,Postfix'),
            createRule('96,100'),
            createRule('96,100'),
            createRule('Expression'),
            createRule('Statements,NewExpressions,Operators,Prefix'),
            createRule('Expression'),
            createRule('Expression,Postfix'),
            createRule('Expression'),
            createRule('Expression'),
            createRule('Statements,NewExpressions,Operators,Prefix'),
            createRule('Statements,NewExpressions,Operators,Prefix'),
            createRule('Statements,123'),
            createRule('Statements,Operators,NewExpressions,Prefix'),
            createRule('Expression,Postfix'),
            createRule('Expression'),
            createRule('Statements,Operators,NewExpressions,Prefix'),                                           
            createRule('Expression,Postfix'),
            createRule('Expression,Postfix'),
            createRule('Statements,123'),
            createRule('118'),
            createRule('Expression'),
            createRule('120'),
            createRule('121,Expression,Statements,Postfix,14,29'),
            createRule('Expression,16'),                    
            createRule('Statements,Operators,NewExpressions,Prefix'),
            createRule('Expression,Postfix'),
            createRule('Expression,Postfix'),
            createRule('Statements,123'),
            createRule('127'),
            createRule('128,Expression,Statements,Postfix,14,29'),
            createRule('Statements,Operators,Prefix,NewExpressions'),
            createRule('Statements,NewExpressions'),
            createRule('Statements,NewExpressions,Operators'),
            createRule('Prefix,Statements,NewExpressions,Operators'),
            createRule('Prefix,Statements,NewExpressions,Operators'),
            createRule('Statements,Operators,Prefix,NewExpressions'),
            createRule('Statements,NewExpressions'),
            createRule('136,138'),
            createRule('Expression,Postfix'),
            createRule('Statements,NewExpressions,Operators'),
            createRule('Statements,123'),
            createRule('140'),
            createRule('Expression,Postfix'),
            createRule('142'),
            createRule('143,Expression,Statements,Postfix,14,29'),
            createRule('Statements,20,123'),
            createRule('145'),
            createRule('Expression,Postfix'),
            createRule('147'),
            createRule('148,Expression,Statements,Postfix,14,29'),
            createRule('Expression,Postfix'),
            createRule('Expression'),       
            createRule('Expression,Postfix'),
            createRule('Expression')                                        
    ];              
    
    function createRule(rules) {
        rules = rules.split(',');
        var expression = {
            2:1,4:1,36:1,47:1,63:1,67:1,74:1,
            83:1,85:1,86:1,97:1,106:1,112:1,115:1,124:1,130:1,135:1,
            137:1
        },
        prefix = {
            88:1,11:1,134:1,133:1,109:1,110:1
        },
        postfix = {
            107:1,108:1
        },
        operators = {
            73:1,75:1,
            5:1,21:1,31:1,87:1,116:1,117:1,
            81:1,12:1,150:1,92:1,82:1,13:1,152:1,
            113:1,64:1,65:1,79:1,77:1,78:1,
            94:1,90:1,30:1,6:1,103:1,151:1,93:1,8:1,
            153:1,114:1,80:1,95:1,91:1,
            7:1
        },          
        statements = {
            89:1,35:1,10:1,20:1,27:1,
            34:1,39:1,62:1,72:1,
            122:1,129:1,144:1,149:1,
            9:1,19:1,26:1,
            33:1,38:1,61:1,71:1,
            121:1,128:1,143:1,148:1,
            59:1,43:1,44:1,
            70:1,120:1,142:1,
            147:1,42:1,76:1,111:1,32:1,123:1,18:1
        },
        newExpressions = {
            28:1, 0:1,138:1,41:1,69:1,119:1,
            141:1,146:1,46:1,104:1,
            1:1,3:1,15:1,111:1,84:1,132:1,17:1,139:1,99:1,
            125:1,126:1,45:1,29:1,14:1,131:1
        },   
        obj = {}, i, k;        
        for(i=0;i<rules.length;i+=1) {
            if(rules[i] === 'Expression') {
                for(k in expression) {
                    if(expression.hasOwnProperty(k)) {
                        obj[k] = 1;
                    }
                }
            } else if(rules[i] === 'Operators') {
                for(k in operators) {
                    if(operators.hasOwnProperty(k)) {
                        obj[k] = 1;
                    }
                }           
            } else if(rules[i] === 'Prefix') {
                for(k in prefix) {
                    if(prefix.hasOwnProperty(k)) {
                        obj[k] = 1;
                    }
                }
            } else if(rules[i] === 'Postfix') {
                for(k in postfix) {
                    if(postfix.hasOwnProperty(k)) {
                        obj[k] = 1;
                    }
                }
            } else if(rules[i] === 'Statements') {
                for(k in statements) {
                    if(statements.hasOwnProperty(k)) {
                        obj[k] = 1;
                    }
                }
            } else if(rules[i] === 'NewExpressions') {
                for(k in newExpressions) {
                    if(newExpressions.hasOwnProperty(k)) {
                        obj[k] = 1;
                    }
                }
            } else {
                obj[rules[i]] = 1;
            }
        }
        return obj;     
    }
    function Mental() {
        this.parse = function(obj) {                
            if(!Object.defineProperty) {
                error("MentalJS requires ES5. Please upgrade your browser.");
            }                            
            var parseTreeOutput = '', converted, that = this,                                         
                pos = 0, chr, scoping = '$',
                result, replaceScoping = new RegExp('['+scoping+']'),
                allowedProperties = /^(?:length|prototype)$/,                                                             
                attributeWhitelist = /^(?:alt|title)$/i,                                               
                setTimeoutIDS = {},
                setIntervalIDS = {};            
                                                                      
                function error(str) {
                    var e = new Error();                                                                                       
                    throw {
                        msg: str+(e.stack?' - '+e.stack:''),
                        pos: pos,
                        chr: typeof chr === 'undefined' ? '(end)' : chr,
                        state: parseTreeOutput,
                        text: code.slice(pos-10, pos+10),
                        code: this.code
                    };           
                }                    
                function execute(code) {
                var result, hiddenProperties,
                    M = {
                        O: function(obj) {
                            var keys = Object.keys(obj), key;
                            for(key in obj) {
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
                                if(typeof exp === 'undefined') {
                                   return null;
                                }                        
                                if((/[^\d]/.test(exp) || exp === '') && !allowedProperties.test(exp)) {                                                        
                                    return scoping + exp + scoping;
                                } else {                                    
                                    return +exp;
                                }
                        },
                        A: function(args) {
                            args = [].slice.call(args,0);
                            args.$callee$=arguments.callee.caller;
                            return args;
                        }                
                    };
                    function createSandboxedNode(node) {
                        Object.defineProperties(node, {
                            '$innerText$': {configurable:true, get:function(){return this.innerText;},set:function(innerText){
                                    if(this.tagName.toLowerCase()==='style'){
                                        /*todo css parsing*/return false;
                                     }
                                     this.innerText = innerText;
                                    }
                            },
                            '$innerHTML$': {configurable:true, get:function(){return this.innerHTML;}, set:function(innerHTML){
                                if(this.tagName.toLowerCase()==='style'){
                                    /*todo css parsing*/return false;
                                 }
                                var doc, elements, element, i, j, tags, attrs;
                                doc = document.implementation.createHTMLDocument('');
                                doc.body.innerHTML = innerHTML;                                    
                                tags = doc.body.getElementsByTagName('*'); 
                                                                   
                                for(i = 0; i < tags.length;i+=1) {
                                    element = tags[i];                                        
                                    if(!(element.attributes instanceof NamedNodeMap)) {
                                       doc.body.removeChild(element);
                                       continue; 
                                    }                                        
                                    if(element.tagName.toLowerCase() === 'style') {
                                        while ( element.firstChild ) {
                                            element.removeChild( element.firstChild );
                                        }
                                    }                                         
                                    attrs = [];                                        
                                    for(j=0;j<element.attributes.length;j+=1) {                                            
                                        if(attributeWhitelist.test(element.attributes[j].name)) {
                                            attrs.push({name:element.attributes[j].name,value:element.attributes[j].value});
                                        }                                                                                                                                                                                                                                                                     
                                    } 
                                    for (j=element.attributes.length; --j>=0;) {
                                        element.removeAttributeNode(element.attributes[j]);
                                    }
                                    
                                    for(j=0;j<attrs.length;j++) {
                                       element.setAttribute(attrs[j].name, attrs[j].value);                                                                                                                                       
                                    }
                                    if(element.firstChild && element.firstChild.nodeType === 3) {
                                       element.firstChild.nodeValue = ' ';
                                    } else {                                        
                                        element.appendChild(doc.createTextNode(' '));
                                    }                                                                                                                                                                                                                                              
                                }                                                                                                                                                                                            
                                return this.innerHTML = (new XMLSerializer()).serializeToString(doc.body); 
                             }},
                            '$textContent$': {configurable:true, get:function(){return this.textContent;},set:function(textContent){if(this.tagName.toLowerCase()==='style'){/*todo css parsing*/return false;};this.textContent = textContent;}},
                            '$style$': {configurable:true, get:function(){ 
                                    var style = this.style;
                                    Object.defineProperties(style,{ 
                                        '$color$' : {configurable:true, get:function(){return style.color;}, set:function(color){style.color = color;}},
                                        '$backgroundColor$' : {configurable:true, get:function(){return style.backgroundColor;}, set:function(backgroundColor){style.backgroundColor = backgroundColor;}}  
                                    });
                                    return style;
                                }
                             },
                            '$appendChild$': {configurable:true, writable:false, value:function(){
                                if(this.tagName && this.tagName.toLowerCase()==='style'){
                                    /*todo css parsing*/return false;
                                 };
                                return this.appendChild.apply(this, arguments);}
                             },
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
                            converted = eval(converted);
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
                        if (typeof setIntervalIDS[id] === 'undefined') {
                            return null;
                        }
                        return clearInterval(id);
                    };                    
                    $clearInterval$ = CLEAR_INTERVAL;                      
                    var CLEAR_TIMEOUT = function(id){               
                        id = +id;
                        if (typeof setTimeoutIDS[id] === 'undefined') {
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
                    Object.defineProperty(Object.prototype, '$prototype$', {
                        configurable:true,
                        get:function(){
                          return this.prototype;  
                        },
                        set:function(obj){
                          this.prototype = obj;  
                        }
                    });
                    Object.defineProperty(Object.prototype, '$length$', {
                        configurable:true,
                        get:function(){
                          return this.length;  
                        },
                        set:function(len){
                          this.length = len;  
                        }
                    });                                                 
                    if(that.global) {                              
                        Object.defineProperties(this, {
                           '$undefined$': {configurable: true, writable: false, value: void 1},
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
                            '$vendorSub$': {configurable: true, get:function(){return navigator.vendorSub}}                               
                        }); 
                        Object.defineProperties(document.documentElement, {
                            '$contains$': {enumerable:false,configurable: true, writable: false, value: function(){return document.documentElement.contains.apply(document.documentElement, arguments)}},
                            '$compareDocumentPosition$': {enumerable:false,configurable: true, writable: false, value: function(){return document.documentElement.compareDocumentPosition.apply(document.documentElement, arguments)}}
                        });  
                        
                        createSandboxedNode(Element.prototype); 
                        createSandboxedNode(DocumentFragment.prototype);                            
                        
                        Object.defineProperties(HTMLScriptElement.prototype, {
                            '$innerText$': {configurable:true, get:function(){return this.innerText;},set:function(innerText){ var js = MentalJS();this.innerText = js.parse({options:{eval:false},code:innerText+''});}},
                            '$textContent$': {configurable:true, get:function(){return this.textContent;},set:function(textContent){ var js = MentalJS();this.textContent = js.parse({options:{eval:false},code:textContent+''});}},
                            '$text$': {configurable:true, get:function(){return this.text;},set:function(text){ var js = MentalJS();this.text = js.parse({options:{eval:false},code:text+''});}},
                            '$appendChild$': {configurable:true, writable:false, value:function(){var js = MentalJS();return this.appendChild(document.createTextNode(js.parse({options:{eval:false},code:arguments[0].nodeValue+''})));}}
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
				var scoping = '$', pos = 0, chr, parentState, parentStates = {}, msg, state = 89, left = 0, output = '', outputLine = '', 					
				next, next2, next3, cached = -1,  												
				len = code.length, parseTree = that.parseTree,
				lookupSquare = 1, lookupCurly = 1, lookupParen = 1, ternaryCount = 0, isTernary = {}, caseCount = 0, isCase = {}, isVar = {},
				isFor = {}, isForIn = {},  isIf = {}, isObjectLiteral = {},																
				expected = -1, expect = 0, expected2 = -1, expected3 = -1, expected4 = -1, lastState = 89, newLineFlag = 0,
				SQUARE_OPEN = 91, SQUARE_CLOSE = 93, PAREN_OPEN = 40, PAREN_CLOSE = 41,
				CURLY_OPEN = 123, CURLY_CLOSE = 125,
				LOWER_A = 97, LOWER_B = 98, LOWER_C = 99, LOWER_D = 100, LOWER_E = 101,
				LOWER_F = 102, LOWER_G = 103, LOWER_H = 104, LOWER_I = 105,
				LOWER_K = 107, LOWER_L = 108, LOWER_M = 109, LOWER_N = 110, LOWER_O = 111,
				LOWER_P = 112, LOWER_R = 114, LOWER_S = 115, LOWER_T = 116,
				LOWER_U = 117, LOWER_V = 118, LOWER_W = 119, LOWER_X = 120, LOWER_Y = 121,
				LOWER_Z = 122, UPPER_A = 65, UPPER_E = 69, UPPER_F = 70, UPPER_I = 73, 
				UPPER_N = 78, UPPER_O = 79, UPPER_X = 88, UPPER_Z = 90, DIGIT_0 = 48, DIGIT_1 = 49, DIGIT_9 = 57, 
				DOLLAR = 36, UNDERSCORE = 95, SINGLE_QUOTE = 39, DOUBLE_QUOTE = 34,
				FORWARD_SLASH = 47, BACKSLASH = 92, ASTERIX = 42, EQUAL = 61, CARET = 94,
				COLON = 58, QUESTION_MARK = 63, COMMA = 44, PERIOD = 46, SEMI_COLON = 59,
				EXCLAMATION_MARK = 33, 	TILDE = 126, PLUS = 43, MINUS = 45,
				AMPERSAND = 38, PIPE = 124, GREATER_THAN = 62, LESS_THAN = 60,
				PERCENT = 37,															
				parseTreeFlag = !!that.parseTree, completeFlag = !!that.complete,
				convertedFlag = !!that.converted,  
				browserCheckSyntaxFlag = !!that.options.browserCheckSyntax, foundKeyword = 0;												    
				function checkSyntax(code){                                        
                    try {
                        throw new Error();
                    }
                    catch (e) {
                        var relativeLineNumber = e.lineNumber;
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
                function asi(useOutput) {
                    var parenIndex = lookupParen-1,
                        index1 = parseFloat(''+lookupSquare+lookupCurly+parenIndex), index2 = parseFloat(''+lookupSquare+lookupCurly+lookupParen);                            
                    if(isFor[index1] && !isForIn[index1]) {
                        lastState = 45;
                        if(useOutput) { 
                            output += ';';
                        } else {
                            outputLine += ';';
                        }
                        if(isFor[index1] > 2) {
                            error("Syntax error unexpected for semi ;");
                        }
                        isFor[index1]++;
                        isVar[index2] = 0;                             
                      } else { 
                        if(useOutput) {                                                                                      
                           output += ';';
                        } else {
                           outputLine = ';' + outputLine;
                        }
                        lastState = 35;
                        left = 0;
                        isVar[index2] = 0;                               
                      }
                }; 					
				function isValidVariable(c) {
			    	return c===170||c===181||c===186||c>=192&&c<=214||c>=216&&c<=246||c>=248&&c<=705||c>=710&&c<=721||c>=736&&c<=740||c===748||c===750||c>=880&&c<=884||c>=886&&c<=887||c>=890&&c<=893||c===902||c>=904&&c<=906||c===908||c>=910&&c<=929||c>=931&&c<=1013||c>=1015&&c<=1153||c>=1162&&c<=1319||c>=1329&&c<=1366||c===1369||c>=1377&&c<=1415||c>=1488&&c<=1514||c>=1520&&c<=1522||c>=1568&&c<=1610||c>=1646&&c<=1647||c>=1649&&c<=1747||c===1749||c>=1765&&c<=1766||c>=1774&&c<=1775||c>=1786&&c<=1788||c===1791||c===1808||c>=1810&&c<=1839||c>=1869&&c<=1957||c===1969||c>=1994&&c<=2026||c>=2036&&c<=2037||c===2042||c>=2048&&c<=2069||c===2074||c===2084||c===2088||c>=2112&&c<=2136||c===2208||c>=2210&&c<=2220||c>=2308&&c<=2361||c===2365||c===2384||c>=2392&&c<=2401||c>=2417&&c<=2423||c>=2425&&c<=2431||c>=2437&&c<=2444||c>=2447&&c<=2448||c>=2451&&c<=2472||c>=2474&&c<=2480||c===2482||c>=2486&&c<=2489||c===2493||c===2510||c>=2524&&c<=2525||c>=2527&&c<=2529||c>=2544&&c<=2545||c>=2565&&c<=2570||c>=2575&&c<=2576||c>=2579&&c<=2600||c>=2602&&c<=2608||c>=2610&&c<=2611||c>=2613&&c<=2614||c>=2616&&c<=2617||c>=2649&&c<=2652||c===2654||c>=2674&&c<=2676||c>=2693&&c<=2701||c>=2703&&c<=2705||c>=2707&&c<=2728||c>=2730&&c<=2736||c>=2738&&c<=2739||c>=2741&&c<=2745||c===2749||c===2768||c>=2784&&c<=2785||c>=2821&&c<=2828||c>=2831&&c<=2832||c>=2835&&c<=2856||c>=2858&&c<=2864||c>=2866&&c<=2867||c>=2869&&c<=2873||c===2877||c>=2908&&c<=2909||c>=2911&&c<=2913||c===2929||c===2947||c>=2949&&c<=2954||c>=2958&&c<=2960||c>=2962&&c<=2965||c>=2969&&c<=2970||c===2972||c>=2974&&c<=2975||c>=2979&&c<=2980||c>=2984&&c<=2986||c>=2990&&c<=3001||c===3024||c>=3077&&c<=3084||c>=3086&&c<=3088||c>=3090&&c<=3112||c>=3114&&c<=3123||c>=3125&&c<=3129||c===3133||c>=3160&&c<=3161||c>=3168&&c<=3169||c>=3205&&c<=3212||c>=3214&&c<=3216||c>=3218&&c<=3240||c>=3242&&c<=3251||c>=3253&&c<=3257||c===3261||c===3294||c>=3296&&c<=3297||c>=3313&&c<=3314||c>=3333&&c<=3340||c>=3342&&c<=3344||c>=3346&&c<=3386||c===3389||c===3406||c>=3424&&c<=3425||c>=3450&&c<=3455||c>=3461&&c<=3478||c>=3482&&c<=3505||c>=3507&&c<=3515||c===3517||c>=3520&&c<=3526||c>=3585&&c<=3632||c>=3634&&c<=3635||c>=3648&&c<=3654||c>=3713&&c<=3714||c===3716||c>=3719&&c<=3720||c===3722||c===3725||c>=3732&&c<=3735||c>=3737&&c<=3743||c>=3745&&c<=3747||c===3749||c===3751||c>=3754&&c<=3755||c>=3757&&c<=3760||c>=3762&&c<=3763||c===3773||c>=3776&&c<=3780||c===3782||c>=3804&&c<=3807||c===3840||c>=3904&&c<=3911||c>=3913&&c<=3948||c>=3976&&c<=3980||c>=4096&&c<=4138||c===4159||c>=4176&&c<=4181||c>=4186&&c<=4189||c===4193||c>=4197&&c<=4198||c>=4206&&c<=4208||c>=4213&&c<=4225||c===4238||c>=4256&&c<=4293||c===4295||c===4301||c>=4304&&c<=4346||c>=4348&&c<=4680||c>=4682&&c<=4685||c>=4688&&c<=4694||c===4696||c>=4698&&c<=4701||c>=4704&&c<=4744||c>=4746&&c<=4749||c>=4752&&c<=4784||c>=4786&&c<=4789||c>=4792&&c<=4798||c===4800||c>=4802&&c<=4805||c>=4808&&c<=4822||c>=4824&&c<=4880||c>=4882&&c<=4885||c>=4888&&c<=4954||c>=4992&&c<=5007||c>=5024&&c<=5108||c>=5121&&c<=5740||c>=5743&&c<=5759||c>=5761&&c<=5786||c>=5792&&c<=5866||c>=5870&&c<=5872||c>=5888&&c<=5900||c>=5902&&c<=5905||c>=5920&&c<=5937||c>=5952&&c<=5969||c>=5984&&c<=5996||c>=5998&&c<=6000||c>=6016&&c<=6067||c===6103||c===6108||c>=6176&&c<=6263||c>=6272&&c<=6312||c===6314||c>=6320&&c<=6389||c>=6400&&c<=6428||c>=6480&&c<=6509||c>=6512&&c<=6516||c>=6528&&c<=6571||c>=6593&&c<=6599||c>=6656&&c<=6678||c>=6688&&c<=6740||c===6823||c>=6917&&c<=6963||c>=6981&&c<=6987||c>=7043&&c<=7072||c>=7086&&c<=7087||c>=7098&&c<=7141||c>=7168&&c<=7203||c>=7245&&c<=7247||c>=7258&&c<=7293||c>=7401&&c<=7404||c>=7406&&c<=7409||c>=7413&&c<=7414||c>=7424&&c<=7615||c>=7680&&c<=7957||c>=7960&&c<=7965||c>=7968&&c<=8005||c>=8008&&c<=8013||c>=8016&&c<=8023||c===8025||c===8027||c===8029||c>=8031&&c<=8061||c>=8064&&c<=8116||c>=8118&&c<=8124||c===8126||c>=8130&&c<=8132||c>=8134&&c<=8140||c>=8144&&c<=8147||c>=8150&&c<=8155||c>=8160&&c<=8172||c>=8178&&c<=8180||c>=8182&&c<=8188||c===8305||c===8319||c>=8336&&c<=8348||c===8450||c===8455||c>=8458&&c<=8467||c===8469||c>=8473&&c<=8477||c===8484||c===8486||c===8488||c>=8490&&c<=8493||c>=8495&&c<=8505||c>=8508&&c<=8511||c>=8517&&c<=8521||c===8526||c>=8544&&c<=8584||c>=11264&&c<=11310||c>=11312&&c<=11358||c>=11360&&c<=11492||c>=11499&&c<=11502||c>=11506&&c<=11507||c>=11520&&c<=11557||c===11559||c===11565||c>=11568&&c<=11623||c===11631||c>=11648&&c<=11670||c>=11680&&c<=11686||c>=11688&&c<=11694||c>=11696&&c<=11702||c>=11704&&c<=11710||c>=11712&&c<=11718||c>=11720&&c<=11726||c>=11728&&c<=11734||c>=11736&&c<=11742||c===11823||c>=12293&&c<=12295||c>=12321&&c<=12329||c>=12337&&c<=12341||c>=12344&&c<=12348||c>=12353&&c<=12438||c>=12445&&c<=12447||c>=12449&&c<=12538||c>=12540&&c<=12543||c>=12549&&c<=12589||c>=12593&&c<=12686||c>=12704&&c<=12730||c>=12784&&c<=12799||c>=13312&&c<=19893||c>=19968&&c<=40908||c>=40960&&c<=42124||c>=42192&&c<=42237||c>=42240&&c<=42508||c>=42512&&c<=42527||c>=42538&&c<=42539||c>=42560&&c<=42606||c>=42623&&c<=42647||c>=42656&&c<=42735||c>=42775&&c<=42783||c>=42786&&c<=42888||c>=42891&&c<=42894||c>=42896&&c<=42899||c>=42912&&c<=42922||c>=43000&&c<=43009||c>=43011&&c<=43013||c>=43015&&c<=43018||c>=43020&&c<=43042||c>=43072&&c<=43123||c>=43138&&c<=43187||c>=43250&&c<=43255||c===43259||c>=43274&&c<=43301||c>=43312&&c<=43334||c>=43360&&c<=43388||c>=43396&&c<=43442||c===43471||c>=43520&&c<=43560||c>=43584&&c<=43586||c>=43588&&c<=43595||c>=43616&&c<=43638||c===43642||c>=43648&&c<=43695||c===43697||c>=43701&&c<=43702||c>=43705&&c<=43709||c===43712||c===43714||c>=43739&&c<=43741||c>=43744&&c<=43754||c>=43762&&c<=43764||c>=43777&&c<=43782||c>=43785&&c<=43790||c>=43793&&c<=43798||c>=43808&&c<=43814||c>=43816&&c<=43822||c>=43968&&c<=44002||c>=44032&&c<=55203||c>=55216&&c<=55238||c>=55243&&c<=55291||c>=63744&&c<=64109||c>=64112&&c<=64217||c>=64256&&c<=64262||c>=64275&&c<=64279||c===64285||c>=64287&&c<=64296||c>=64298&&c<=64310||c>=64312&&c<=64316||c===64318||c>=64320&&c<=64321||c>=64323&&c<=64324||c>=64326&&c<=64433||c>=64467&&c<=64829||c>=64848&&c<=64911||c>=64914&&c<=64967||c>=65008&&c<=65019||c>=65136&&c<=65140||c>=65142&&c<=65276||c>=65313&&c<=65338||c>=65345&&c<=65370||c>=65382&&c<=65470||c>=65474&&c<=65479||c>=65482&&c<=65487||c>=65490&&c<=65495||c>=65498&&c<=65500;
			    }
			    function isValidVariablePart(c) {
			    	return c===170||c===181||c===186||c>=192&&c<=214||c>=216&&c<=246||c>=248&&c<=705||c>=710&&c<=721||c>=736&&c<=740||c===748||c===750||c>=768&&c<=884||c>=886&&c<=887||c>=890&&c<=893||c===902||c>=904&&c<=906||c===908||c>=910&&c<=929||c>=931&&c<=1013||c>=1015&&c<=1153||c>=1155&&c<=1159||c>=1162&&c<=1319||c>=1329&&c<=1366||c===1369||c>=1377&&c<=1415||c>=1425&&c<=1469||c===1471||c>=1473&&c<=1474||c>=1476&&c<=1477||c===1479||c>=1488&&c<=1514||c>=1520&&c<=1522||c>=1552&&c<=1562||c>=1568&&c<=1641||c>=1646&&c<=1747||c>=1749&&c<=1756||c>=1759&&c<=1768||c>=1770&&c<=1788||c===1791||c>=1808&&c<=1866||c>=1869&&c<=1969||c>=1984&&c<=2037||c===2042||c>=2048&&c<=2093||c>=2112&&c<=2139||c===2208||c>=2210&&c<=2220||c>=2276&&c<=2302||c>=2304&&c<=2403||c>=2406&&c<=2415||c>=2417&&c<=2423||c>=2425&&c<=2431||c>=2433&&c<=2435||c>=2437&&c<=2444||c>=2447&&c<=2448||c>=2451&&c<=2472||c>=2474&&c<=2480||c===2482||c>=2486&&c<=2489||c>=2492&&c<=2500||c>=2503&&c<=2504||c>=2507&&c<=2510||c===2519||c>=2524&&c<=2525||c>=2527&&c<=2531||c>=2534&&c<=2545||c>=2561&&c<=2563||c>=2565&&c<=2570||c>=2575&&c<=2576||c>=2579&&c<=2600||c>=2602&&c<=2608||c>=2610&&c<=2611||c>=2613&&c<=2614||c>=2616&&c<=2617||c===2620||c>=2622&&c<=2626||c>=2631&&c<=2632||c>=2635&&c<=2637||c===2641||c>=2649&&c<=2652||c===2654||c>=2662&&c<=2677||c>=2689&&c<=2691||c>=2693&&c<=2701||c>=2703&&c<=2705||c>=2707&&c<=2728||c>=2730&&c<=2736||c>=2738&&c<=2739||c>=2741&&c<=2745||c>=2748&&c<=2757||c>=2759&&c<=2761||c>=2763&&c<=2765||c===2768||c>=2784&&c<=2787||c>=2790&&c<=2799||c>=2817&&c<=2819||c>=2821&&c<=2828||c>=2831&&c<=2832||c>=2835&&c<=2856||c>=2858&&c<=2864||c>=2866&&c<=2867||c>=2869&&c<=2873||c>=2876&&c<=2884||c>=2887&&c<=2888||c>=2891&&c<=2893||c>=2902&&c<=2903||c>=2908&&c<=2909||c>=2911&&c<=2915||c>=2918&&c<=2927||c===2929||c>=2946&&c<=2947||c>=2949&&c<=2954||c>=2958&&c<=2960||c>=2962&&c<=2965||c>=2969&&c<=2970||c===2972||c>=2974&&c<=2975||c>=2979&&c<=2980||c>=2984&&c<=2986||c>=2990&&c<=3001||c>=3006&&c<=3010||c>=3014&&c<=3016||c>=3018&&c<=3021||c===3024||c===3031||c>=3046&&c<=3055||c>=3073&&c<=3075||c>=3077&&c<=3084||c>=3086&&c<=3088||c>=3090&&c<=3112||c>=3114&&c<=3123||c>=3125&&c<=3129||c>=3133&&c<=3140||c>=3142&&c<=3144||c>=3146&&c<=3149||c>=3157&&c<=3158||c>=3160&&c<=3161||c>=3168&&c<=3171||c>=3174&&c<=3183||c>=3202&&c<=3203||c>=3205&&c<=3212||c>=3214&&c<=3216||c>=3218&&c<=3240||c>=3242&&c<=3251||c>=3253&&c<=3257||c>=3260&&c<=3268||c>=3270&&c<=3272||c>=3274&&c<=3277||c>=3285&&c<=3286||c===3294||c>=3296&&c<=3299||c>=3302&&c<=3311||c>=3313&&c<=3314||c>=3330&&c<=3331||c>=3333&&c<=3340||c>=3342&&c<=3344||c>=3346&&c<=3386||c>=3389&&c<=3396||c>=3398&&c<=3400||c>=3402&&c<=3406||c===3415||c>=3424&&c<=3427||c>=3430&&c<=3439||c>=3450&&c<=3455||c>=3458&&c<=3459||c>=3461&&c<=3478||c>=3482&&c<=3505||c>=3507&&c<=3515||c===3517||c>=3520&&c<=3526||c===3530||c>=3535&&c<=3540||c===3542||c>=3544&&c<=3551||c>=3570&&c<=3571||c>=3585&&c<=3642||c>=3648&&c<=3662||c>=3664&&c<=3673||c>=3713&&c<=3714||c===3716||c>=3719&&c<=3720||c===3722||c===3725||c>=3732&&c<=3735||c>=3737&&c<=3743||c>=3745&&c<=3747||c===3749||c===3751||c>=3754&&c<=3755||c>=3757&&c<=3769||c>=3771&&c<=3773||c>=3776&&c<=3780||c===3782||c>=3784&&c<=3789||c>=3792&&c<=3801||c>=3804&&c<=3807||c===3840||c>=3864&&c<=3865||c>=3872&&c<=3881||c===3893||c===3895||c===3897||c>=3902&&c<=3911||c>=3913&&c<=3948||c>=3953&&c<=3972||c>=3974&&c<=3991||c>=3993&&c<=4028||c===4038||c>=4096&&c<=4169||c>=4176&&c<=4253||c>=4256&&c<=4293||c===4295||c===4301||c>=4304&&c<=4346||c>=4348&&c<=4680||c>=4682&&c<=4685||c>=4688&&c<=4694||c===4696||c>=4698&&c<=4701||c>=4704&&c<=4744||c>=4746&&c<=4749||c>=4752&&c<=4784||c>=4786&&c<=4789||c>=4792&&c<=4798||c===4800||c>=4802&&c<=4805||c>=4808&&c<=4822||c>=4824&&c<=4880||c>=4882&&c<=4885||c>=4888&&c<=4954||c>=4957&&c<=4959||c>=4992&&c<=5007||c>=5024&&c<=5108||c>=5121&&c<=5740||c>=5743&&c<=5759||c>=5761&&c<=5786||c>=5792&&c<=5866||c>=5870&&c<=5872||c>=5888&&c<=5900||c>=5902&&c<=5908||c>=5920&&c<=5940||c>=5952&&c<=5971||c>=5984&&c<=5996||c>=5998&&c<=6000||c>=6002&&c<=6003||c>=6016&&c<=6099||c===6103||c>=6108&&c<=6109||c>=6112&&c<=6121||c>=6155&&c<=6157||c>=6160&&c<=6169||c>=6176&&c<=6263||c>=6272&&c<=6314||c>=6320&&c<=6389||c>=6400&&c<=6428||c>=6432&&c<=6443||c>=6448&&c<=6459||c>=6470&&c<=6509||c>=6512&&c<=6516||c>=6528&&c<=6571||c>=6576&&c<=6601||c>=6608&&c<=6617||c>=6656&&c<=6683||c>=6688&&c<=6750||c>=6752&&c<=6780||c>=6783&&c<=6793||c>=6800&&c<=6809||c===6823||c>=6912&&c<=6987||c>=6992&&c<=7001||c>=7019&&c<=7027||c>=7040&&c<=7155||c>=7168&&c<=7223||c>=7232&&c<=7241||c>=7245&&c<=7293||c>=7376&&c<=7378||c>=7380&&c<=7414||c>=7424&&c<=7654||c>=7676&&c<=7957||c>=7960&&c<=7965||c>=7968&&c<=8005||c>=8008&&c<=8013||c>=8016&&c<=8023||c===8025||c===8027||c===8029||c>=8031&&c<=8061||c>=8064&&c<=8116||c>=8118&&c<=8124||c===8126||c>=8130&&c<=8132||c>=8134&&c<=8140||c>=8144&&c<=8147||c>=8150&&c<=8155||c>=8160&&c<=8172||c>=8178&&c<=8180||c>=8182&&c<=8188||c>=8204&&c<=8205||c>=8255&&c<=8256||c===8276||c===8305||c===8319||c>=8336&&c<=8348||c>=8400&&c<=8412||c===8417||c>=8421&&c<=8432||c===8450||c===8455||c>=8458&&c<=8467||c===8469||c>=8473&&c<=8477||c===8484||c===8486||c===8488||c>=8490&&c<=8493||c>=8495&&c<=8505||c>=8508&&c<=8511||c>=8517&&c<=8521||c===8526||c>=8544&&c<=8584||c>=11264&&c<=11310||c>=11312&&c<=11358||c>=11360&&c<=11492||c>=11499&&c<=11507||c>=11520&&c<=11557||c===11559||c===11565||c>=11568&&c<=11623||c===11631||c>=11647&&c<=11670||c>=11680&&c<=11686||c>=11688&&c<=11694||c>=11696&&c<=11702||c>=11704&&c<=11710||c>=11712&&c<=11718||c>=11720&&c<=11726||c>=11728&&c<=11734||c>=11736&&c<=11742||c>=11744&&c<=11775||c===11823||c>=12293&&c<=12295||c>=12321&&c<=12335||c>=12337&&c<=12341||c>=12344&&c<=12348||c>=12353&&c<=12438||c>=12441&&c<=12442||c>=12445&&c<=12447||c>=12449&&c<=12538||c>=12540&&c<=12543||c>=12549&&c<=12589||c>=12593&&c<=12686||c>=12704&&c<=12730||c>=12784&&c<=12799||c>=13312&&c<=19893||c>=19968&&c<=40908||c>=40960&&c<=42124||c>=42192&&c<=42237||c>=42240&&c<=42508||c>=42512&&c<=42539||c>=42560&&c<=42607||c>=42612&&c<=42621||c>=42623&&c<=42647||c>=42655&&c<=42737||c>=42775&&c<=42783||c>=42786&&c<=42888||c>=42891&&c<=42894||c>=42896&&c<=42899||c>=42912&&c<=42922||c>=43000&&c<=43047||c>=43072&&c<=43123||c>=43136&&c<=43204||c>=43216&&c<=43225||c>=43232&&c<=43255||c===43259||c>=43264&&c<=43309||c>=43312&&c<=43347||c>=43360&&c<=43388||c>=43392&&c<=43456||c>=43471&&c<=43481||c>=43520&&c<=43574||c>=43584&&c<=43597||c>=43600&&c<=43609||c>=43616&&c<=43638||c>=43642&&c<=43643||c>=43648&&c<=43714||c>=43739&&c<=43741||c>=43744&&c<=43759||c>=43762&&c<=43766||c>=43777&&c<=43782||c>=43785&&c<=43790||c>=43793&&c<=43798||c>=43808&&c<=43814||c>=43816&&c<=43822||c>=43968&&c<=44010||c>=44012&&c<=44013||c>=44016&&c<=44025||c>=44032&&c<=55203||c>=55216&&c<=55238||c>=55243&&c<=55291||c>=63744&&c<=64109||c>=64112&&c<=64217||c>=64256&&c<=64262||c>=64275&&c<=64279||c>=64285&&c<=64296||c>=64298&&c<=64310||c>=64312&&c<=64316||c===64318||c>=64320&&c<=64321||c>=64323&&c<=64324||c>=64326&&c<=64433||c>=64467&&c<=64829||c>=64848&&c<=64911||c>=64914&&c<=64967||c>=65008&&c<=65019||c>=65024&&c<=65039||c>=65056&&c<=65062||c>=65075&&c<=65076||c>=65101&&c<=65103||c>=65136&&c<=65140||c>=65142&&c<=65276||c>=65296&&c<=65305||c>=65313&&c<=65338||c===65343||c>=65345&&c<=65370||c>=65382&&c<=65470||c>=65474&&c<=65479||c>=65482&&c<=65487||c>=65490&&c<=65495||c>=65498&&c<=65500;				    			
			    }
			    function identifier() {
			        var u = 0, ident = '', currentUnicode = '', unicodeEscape = 0, identifierStart = 1;
			        function keyword() {
			            var index = parseFloat(''+lookupSquare+lookupCurly+lookupParen);
			            switch(identifierLen) {
                            case 2:                         
                                if(ident === 'do') {                              
                                    foundKeyword = 1;
                                    state = 18;
                                    expected = 19;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    expect = 0;
                                    left = 0;                                           
                                    outputLine += 'do ';                                                                                        
                                } else if(ident === 'in') {
                                    foundKeyword = 1;
                                    state = 73;
                                    expected = -1;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    left = 0;                                           
                                    outputLine += ' in ';
                                    if(isFor[index]) {
                                        isForIn[index] = 1;        
                                    }                                                                                               
                                } else if(ident === 'if') {
                                    foundKeyword = 1;
                                    state = 68;
                                    expected = -1;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    left = 0;                                        
                                    if(lastState === 32) {
                                    outputLine += ' ';
                                    }
                                    outputLine += 'if';
                                    isIf[index] = 1;
                                }
                            break;
                            case 3:                                                                                                                    
                                if(ident === 'var') {
                                    if(!rules[136][lastState]) {                                                                                                                       
                                        asi();                                             
                                    }
                                    foundKeyword = 1;
                                    state = 136;
                                    expected = 67;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    expect = 0;
                                    left = 0;                                            
                                    outputLine += 'var ';
                                    isVar[index] = 1;                           
                                } else if(ident === 'new') {
                                    foundKeyword = 1;
                                    state = 84;
                                    expected = -1;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    left = 0;                                           
                                    outputLine += 'new ';                            
                                } else if(ident === 'NaN') {
                                    foundKeyword = 1;
                                    state = 83;
                                    expected = -1;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    left = 1;                                           
                                    outputLine += 'NaN';
                                } else if(ident === 'for') {                                        
                                    foundKeyword = 1;
                                    state = 40;
                                    expected = 41;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    expect = 0;
                                    left = 0;                                        
                                    outputLine += 'for ';
                                    isFor[index] = 1;
                                } else if(ident === 'try') {
                                    foundKeyword = 1;
                                    state = 127;
                                    expected = 128;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    expect = 0;
                                    left = 0;                                        
                                    outputLine += 'try';
                                } 
                            break;
                            case 4:                                                     
                                if(ident === 'else') {
                                    if(!isIf[index]) {
                                        error("Syntax error unexpected else");
                                    }                                                                                                                                                       
                                    foundKeyword = 1;
                                    state = 32;
                                    expected = -1;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    left = 0;                                           
                                    outputLine += 'else ';                           
                                } else if(ident === 'this') {
                                    foundKeyword = 1;
                                    state = 124;
                                    expected = -1;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    expect = 0;
                                    left = 1;                                           
                                    outputLine += 'this';                           
                                } else if(ident === 'void') {
                                    foundKeyword = 1;
                                    state = 139;
                                    expected = -1;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    left = 0;                                           
                                    outputLine += 'void ';                                                      
                                } else if(ident === 'case') {
                                    foundKeyword = 1;
                                    state = 15;
                                    expected = -1;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    left = 0;                                                                    
                                    outputLine += 'case ';
                                    isCase[index] = 1;
                                    caseCount++;                           
                                } else if(ident === 'null') {
                                    foundKeyword = 1;
                                    state = 86;
                                    expected = -1;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    left = 1;                                           
                                    outputLine += 'null';                           
                                } else if(ident === 'true') {
                                    foundKeyword = 1;
                                    state = 130;
                                    expected = -1;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    left = 1;                                           
                                    outputLine += 'true';
                                } else if(ident === 'with') {
                                    foundKeyword = 1;
                                    state = 140;
                                    expected = 141;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    expect = 0;
                                    left = 0;                                        
                                    outputLine += 'with';
                                }
                            break;
                            case 5:                                                     
                                if(ident === 'throw') {
                                    foundKeyword = 1;
                                    state = 131;
                                    expected = -1;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    left = 0;                                           
                                    outputLine += 'throw ';                          
                                } else if(ident === 'break') {
                                    foundKeyword = 1;
                                    state = 14;
                                    expected = -1;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    left = 0;                                           
                                    outputLine += 'break ';                         
                                } else if(ident === 'false') {
                                    foundKeyword = 1;
                                    state = 36;
                                    expected = -1;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    left = 1;                                           
                                    outputLine += 'false';
                                } else if(ident === 'catch') {
                                    foundKeyword = 1;
                                    state = 22;
                                    expected = 23;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    expect = 0;
                                    left = 0;                                        
                                    outputLine += 'catch';
                                } else if(ident === 'while') {
                                    foundKeyword = 1;
                                    state = 145;
                                    expected = 146;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    expect = 0;
                                    left = 0;                                        
                                    outputLine += 'while';
                                }
                            break;
                            case 6:                                                     
                                if(ident === 'delete') {
                                    foundKeyword = 1;
                                    state = 17;
                                    expected = -1;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    left = 0;                                           
                                    outputLine += 'delete ';                         
                                } else if(ident === 'return') {
                                    foundKeyword = 1;
                                    state = 111;
                                    expected = -1;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    left = 0;                                           
                                    outputLine += 'return ';                         
                                } else if(ident === 'typeof') {                               
                                    foundKeyword = 1;
                                    state = 132;
                                    expected = -1;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    left = 0;                                           
                                    outputLine += 'typeof ';
                                } else if(ident === 'switch') {                               
                                    foundKeyword = 1;
                                    state = 118;
                                    expected = 119;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    expect = 0;
                                    left = 0;                                        
                                    outputLine += 'switch';
                                }
                            break;
                            case 7:                         
                                if(ident === 'default') {
                                    foundKeyword = 1;
                                    state = 16;
                                    expected = 123;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    expect = 0;
                                    left = 0;                                           
                                    outputLine += 'default';
                                } else if(ident === 'finally') {
                                    foundKeyword = 1;
                                    state = 37;
                                    expected = 38;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    expect = 0;
                                    left = 0;                                        
                                    outputLine += 'finally';
                                }
                            break;
                            case 8:                                                     
                                if(ident === 'function') {
                                    foundKeyword = 1;                                        
                                    if(rules[52][lastState]) {
                                        state = 52;
                                        expected = 53;
                                        expected2 = 54;
                                        expected3 = -1;
                                        expected4 = -1;
                                        expect = 0;                                                             
                                    } else if(rules[60][lastState]) {
                                        state = 60;
                                        expected = 50;
                                        expected2 = -1;
                                        expected3 = -1;
                                        expected4 = -1;
                                        expect = 0;
                                    } else {                                    
                                        if(!rules[67][lastState] && newLineFlag) {                                                                                    
                                            asi();
                                            state = 60;
                                            expected = 50;
                                            expected2 = -1;
                                            expected3 = -1;
                                            expected4 = -1;
                                            expect = 0;
                                        } else {
                                            error('Unexpected function. Cannot follow '+rulesLookup[lastState]+'.Output:'+output);
                                        }                                              
                                    }                                        
                                    left = 0;                                        
                                    outputLine += 'function';                                                                   
                                } else if(ident === 'Infinity') {
                                    foundKeyword = 1;
                                    state = 74;
                                    expected = -1;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    left = 1;                                           
                                    outputLine += 'Infinity';                          
                                } else if(ident === 'continue') {
                                    foundKeyword = 1;
                                    state = 29;
                                    expected = -1;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    left = 0;                                           
                                    outputLine += 'continue ';
                                }
                            break;                                
                            case 10:
                                if(ident === 'instanceof') {
                                    foundKeyword = 1;
                                    state = 75;
                                    expected = -1;
                                    expected2 = -1;
                                    expected3 = -1;
                                    expected4 = -1;
                                    left = 1;                                        
                                    outputLine += ' instanceof ';
                                }
                            break;                     
                        }  
			        }				        
			        function unicode() {
			            pos++;
			            unicodeEscape = 1;
			            while(pos < len) {
			                chr = code.charCodeAt(pos); 				              				                
			                if(unicodeEscape === 1) {
                                if(chr !== LOWER_U) {                                        
                                    error('Unexpected "'+(isNaN(chr)?'(end)':chr)+'" character. Expected unicode escape.');
                                }
                                unicodeEscape = 2;
                                pos++;
                                continue;                                                                                                           
				            } else if(currentUnicode.length === 3) {                                                                    
                                currentUnicode = currentUnicode + code.charAt(pos);
                                u = parseInt('0x'+currentUnicode, 16);                                                                                                          
                                if(!identifierStart) {                       
                                    if(u >= LOWER_A && u <= LOWER_Z) {                                                    
                                    } else if(u >= UPPER_A && u <= UPPER_Z) {                                                                                                           
                                    } else if(u === UNDERSCORE || u === DOLLAR){                              
                                    } else if(u > 0x80){
                                        if(!isValidVariable(u)) {
                                          error('illegal unicode escape');
                                        } 
                                    } else {                                            
                                        error('illegal unicode escape');
                                    }                           
                                } else {
                                    if(u >= LOWER_A && u <= LOWER_Z) {                                                    
                                    } else if(u >= UPPER_A && u <= UPPER_Z) {                             
                                    } else if(u >= DIGIT_0 && u <= DIGIT_9) {                                               
                                    } else if(u === UNDERSCORE || u === DOLLAR){                              
                                    } else if(u > 0x80){
                                        if(!isValidVariablePart(u)) {
                                          error('illegal unicode escape');
                                        } 
                                    } else {
                                        error('illegal unicode escape');
                                    }
                                }
                                ident = ident + '\\u'+currentUnicode;
                                currentUnicode = '';
                                unicodeEscape = 0;
                                identifierStart = 1;
                            } else if(chr >= DIGIT_0 && chr <= DIGIT_9) {
                            } else if(chr >= LOWER_A && chr <= LOWER_F) {                   
                            } else if(chr >= UPPER_A && chr <= UPPER_F) {
                            } else {
                                error('Unexpected "'+(isNaN(chr)?'(end)':chr)+'" character. Expected unicode escape.');
                            }
                            if(currentUnicode.length<4) {
                                currentUnicode = currentUnicode + code.charAt(pos);
                            }                                                                
                            pos++;  
                       }
			        }
			        				                                                                                                                                  
                        if(chr === BACKSLASH) {                                             
                            identifierStart = 0;                     
                        }                                                                                                                                                                             
                        while(pos < len) {                                
                            chr = code.charCodeAt(pos);                                                                                                               
                            if(chr >= LOWER_A && chr <= LOWER_Z) {
                            } else if(chr >= DIGIT_0 && chr <= DIGIT_9) {
                            } else if(chr >= UPPER_A && chr <= UPPER_Z) {
                            } else if(chr === UNDERSCORE || chr === DOLLAR) {                                
                            } else if(chr === BACKSLASH) {                                    
                                unicode();
                                continue;                                                                        
                            } else if(chr > 0x80) {
                                if(!isValidVariablePart(chr)) {                                       
                                   break;
                                }                                    
                            } else {                                                                      
                                break;
                            }
                            ident += code.charAt(pos++);                                                                            
                        }                                     
                        identifierLen = ident.length;
                        foundKeyword = 0;                                                                                                                                                        
                        if(identifierLen > 1 && identifierLen < 11) {
                            keyword();
                        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                        if(!foundKeyword) {
                            expected = expected2 = expected3 = expected4 = -1, expect = 0;                                                                                                                                                                                                                                                                                                                             
                            if(rules[50][lastState]) {
                                state = 50;
                                expected = 51;                                    
                                outputLine += ' ';
                            } else if(rules[25][lastState]) {
                                state = 25;
                                expected = 24;                                    
                            } else if(rules[98][lastState]) {
                                state = 98;
                                expected = 99;                                                                     
                            } else if(rules[53][lastState]) {
                                state = 53;
                                expected = 54;                                    
                                outputLine += ' ';
                            } else if(rules[48][lastState]) {
                                state = 48;
                                expected = 57;
                                expected2 = 49;                                                 
                            } else if(rules[55][lastState]) {
                                state = 55;
                                expected = 58;
                                expected2 = 56;                                    
                            } else if(rules[137][lastState]) {                                 
                                state = 137;                                    
                                left = 1;                                                                                                                 
                            } else if(rules[67][lastState]) {
                                state = 67;                                    
                                left = 1;                               
                            } else {
                                if(!rules[67][lastState] && newLineFlag) {                                                                                    
                                    asi();                                              
                                }
                                state = 67;                                    
                                left = 1;
                            }                                                                                   
                            outputLine += scoping + ident + scoping;                                                                                  
                        }
                        
                        if(!rules[state][lastState] && newLineFlag) {                                                                                                                    
                            if(left) {
                                asi();
                                left = 1;    
                            } else {
                                asi();
                            }                                                                          
                        } 
			    }				    					
				function newLine() {
				    newLineFlag = 1;
                    pos++;                            
                    if(lastState === 14 || lastState === 29 || lastState === 111) {
                        asi(true);
                    }
				}
				function semicolon() {
				    var index = parseFloat(''+lookupSquare+lookupCurly+lookupParen),
				        parentState = parentStates[index],
				        index2 = parseFloat(''+lookupSquare+lookupCurly+(lookupParen-1));                                    
                    if(isFor[index2] && !isForIn[index2]) {
                        state = 45;
                        outputLine += ';';
                        if(isFor[index2] > 2) {
                            error("Syntax error unexpected for semi ;");
                        }
                        isFor[index2]++;
                        isVar[index] = 0;                                                                                     
                    } else {                                
                        state = 35;
                        if(lastState !== 35) {
                            outputLine += ';';  
                        }
                        isVar[index] = 0;                 
                    }                       
                    pos++;
                    left = 0;  
				}
				function plus() {
				    next = code.charCodeAt(pos+1);
				    cached = -1;
                    if(next === PLUS && left) {
                        state = 107;
                        outputLine += '++';
                        pos+=2;
                    } else if(next === PLUS && !left) {
                        state = 110;
                        outputLine += '++';
                        pos+=2;                     
                    } else if(next === EQUAL) {
                        state = 6;
                        outputLine += '+=';
                        pos+=2;
                    } else if(next !== EQUAL && next !== PLUS && left) {
                        state = 5;
                        outputLine += ' + ';
                        pos++;
                        cached = next;
                    } else if(next !== EQUAL && next !== PLUS && !left) {
                        state = 133;
                        outputLine += '+';
                        pos++;
                        cached = next;                                                                  
                    } else {
                        error('Unexpected + Cannot follow '+rulesLookup[lastState]+'.Output:'+output);
                    }
                    left = 0;
				}
				function singleComment() {					    
                    pos+=2;                 
                    while(pos < len) {                                   
                        chr = code.charCodeAt(pos++);
                        if(chr===10||chr===13||chr===8232||chr==8233) {
                            break;
                        }                                                                                                                   
                    }
                    cached = -1;
				}
				function multiComment() {
				    pos=code.indexOf('*/',pos);
                    if(pos >= 0) {
                        pos+=2;                                    
                    } else {                                                
                        error('Unterminated comment');
                    }       
                    cached = -1;
				}
				function regex() {
				    var states = {escaping: 0, complete: 0, open: 0, square: 0, flags: {}};
				    cached = -1;       
                    state = 112;
                    left = 1;               
                    states.open = 1;                                                               
                    outputLine += '/';                              
                    pos++;                  
                    while(pos < len) {
                    	if(cached >= 0) {
                    		chr = cached;
                    	} else {
                        	chr = code.charCodeAt(pos);
                       	}
                        next = code.charCodeAt(pos+1);
                        cached = -1;                            
                        if(chr === FORWARD_SLASH && !states.escaping && !states.square) {
                            states.open = 0;
                            if(next !== LOWER_I && next !== LOWER_M && next !== LOWER_G) {
                                states.complete = 1;
                            }
                        } else if(chr === FORWARD_SLASH && !states.escaping && states.square) {
                            outputLine += '\\';           
                        } else if(chr === PAREN_OPEN && !states.escaping && states.square) {
                             outputLine += '\\';
                        } else if(chr === PAREN_CLOSE && !states.escaping && states.square) {
                            outputLine += '\\';                                 
                        } else if(chr === SQUARE_OPEN && !states.escaping && states.square) {                
                            outputLine += '\\';
                        } else if(chr === SQUARE_OPEN && !states.escaping && !states.square) {
                            next2 = code.charCodeAt(pos+2); 
                            if(next === SQUARE_CLOSE || (next === CARET && next2 === SQUARE_CLOSE)) {
                                error("Empty character class not allowed.");
                            }
                            states.square = 1;               
                        } else if(chr === BACKSLASH && !states.escaping) {
                            states.escaping = 1;
                        } else if(chr === BACKSLASH && states.escaping) {
                            states.escaping = 0;
                        } else if(chr === SQUARE_CLOSE && !states.escaping) {                
                            states.square = 0;               
                        } else if(chr===10||chr===13||chr===8232||chr==8233) {
                            error("Unterminated regex literal");                                
                        } else if(states.escaping) {
                            states.escaping = 0;
                        } else if(!states.open && next !== LOWER_I && next !== LOWER_M && next !== LOWER_G) {
                            if(!states.open && (chr === LOWER_I || chr === LOWER_M || chr === LOWER_G) && states.flags[chr]) {
                                error("Duplicate regex flag");
                            }               
                            states.complete = 1;
                        } else if(!states.open && (chr === LOWER_I || chr === LOWER_M || chr === LOWER_G) && !states.flags[chr]) {
                            states.flags[chr] = 1;
                        }                                                                                                                    
                        outputLine += code.charAt(pos++);                                                         
                        cached = next;
                        if(states.complete) {                            	                                                     
                            break;
                        }
                    }   
                    if(states.open) {               
                        error("Unterminated regex literal");
                    }
				}
				function numberOrHex() {
				    function number() {
                        while(pos < len) {
                            chr = code.charCodeAt(pos);
                            if(chr >= DIGIT_1 && chr <= DIGIT_9) {
                                states.zeroFirst = 0;
                                if(states.e) {
                                    states.e = 2;
                                }
                                if(states.e2) {
                                    states.e2 = 2;
                                }                               
                            } else if(chr === DIGIT_0) {
                                if(states.zeroFirst) {
                                    pos++;
                                    continue;                               
                                }
                                if(states.e) {
                                    states.e = 2;
                                }
                                if(states.e2) {
                                    states.e2 = 2;
                                }
                            } else if(chr === LOWER_E || chr === UPPER_E) {
                                if(states.e) {
                                    break;
                                } else {
                                    states.e = 1;
                                }
                            } else if(chr === PLUS || chr === MINUS) {
                                if(states.e === 1 && !states.e2) {
                                    states.e = 2;
                                    states.e2 = 1;                              
                                } else {
                                    cached = chr;
                                    break;
                                }
                            } else if(chr === PERIOD) {
                                if(states.dot || states.e) {
                                    break;
                                }
                                states.dot = 1;
                            } else {
                                cached = chr;
                                break;
                            }                                    
                            states.output = states.output + code.charAt(pos);
                            pos++;
                        }
                        if(states.zeroFirst && !states.output.length) {
                            states.output = '0';
                        } else if(states.dotFirst) {
                            if(states.output.length === 1) {
                                error('Expected digit');
                            }
                            states.output = '0' + states.output;
                        } else if(states.e === 1 || states.e2 === 1) {
                            error('Expected exponent');
                        }
                        outputLine += states.output; 
                }   
                function hex() {
                    var states = {output:'0x'};
                    pos++;
                    while(pos < len) {
                        chr = code.charCodeAt(pos);
                        if(chr >= DIGIT_0 && chr <= DIGIT_9) {
                        } else if(chr >= LOWER_A && chr <= LOWER_F) {
                        } else if(chr >= UPPER_A && chr <= UPPER_F) {                           
                        } else {
                            break;
                        }
                        states.output = states.output + code.charAt(pos);
                        pos++;
                    }
                    if(states.output.length == 2) {
                        error('Missing hex digits.');
                    }
                    outputLine += states.output;
                }
				    var states = {dot: 0, e:0, e2:0, complete:0,output:'', zeroFirst: 0, dotFirst: 0};				    
				    if(rules[101][lastState]) {
                        state = 101;
                        expected = 99;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                        expect = 0;                         
                    } else if(rules[85][lastState]) {
                        left = 1;
                        state = 85;
                    } else {
                        if(!rules[85][lastState] && newLineFlag) {                                                                                    
                            asi();
                            left = 1;                                    
                            state = 85;                                
                        }
                    }
                    
                    if(chr === PERIOD) {
                        states.output = '.';
                        states.dot = 1;
                        states.dotFirst = 1;                        
                    } else if(chr === DIGIT_0) {
                        states.zeroFirst = 1;                                                                       
                    } else {
                        states.output = code.charAt(pos);                       
                    }
                    if(pos < len) {
                        pos++;                            
                        chr = code.charCodeAt(pos);
                    }
                    if((chr === LOWER_X || chr === UPPER_X) && pos < len) {
                        hex();
                    } else {
                        number();                                                                                   
                    }  
				}
				function divide() {
				    left = 0;
				    cached = -1;
                    if(next === EQUAL) {
                        state = 7;
                        pos+=2;                                    
                        outputLine += '/='; 
                    } else {
                        state = 21;
                        pos++;                                    
                        outputLine += ' / ';
                        cached = next;    
                    }
				}
				function arrayOrAccessorOpen() {
				    var index = parseFloat(''+lookupSquare+lookupCurly+lookupParen);
				    if(!left) {
                        state = 1;                
                    } else {
                        state = 3;                                                                                                 
                    }           
                    outputLine += '[';
                    if(state === 3) {
                        outputLine += 'M.P(';
                    }                           
                    parentStates[index] = state;                      
                    left = 0;                           
                    pos++;
                    lookupSquare++;
                    index = parseFloat(''+lookupSquare+lookupCurly+lookupParen);
                    parentStates[index] = state;
				}
				function arrayOrAccessorClose() {
				    lookupSquare--;
				    var index = parseFloat(''+lookupSquare+lookupCurly+lookupParen)           
                    parentState = parentStates[index];                                    
                    if(parentState === 1) {
                        state = 2;
                        left = 1;
                    } else if(parentState === 3) {
                        state = 4;
                        left = 1;
                        outputLine += ')';
                    } else {                
                        error('Unexpected ]. Cannot follow '+rulesLookup[lastState]+'.Output:'+output);
                    }                                                   
                    outputLine += ']';
                    left = 1;                           
                    pos++;
                    parentStates[index] = null; 
				}
				function parenOpen() {
				    var index = parseFloat(''+lookupSquare+lookupCurly+lookupParen);
				    if(lastState === 50) {
                            state = 51;
                            expect = 0;
                            expected = 48;
                            expected2 = 57;
                            expected3 = -1;
                            expected4 = -1;
                        } else if(lastState === 40) {
                            state = 41;
                            expected = -1;
                            expected2 = -1;
                            expected3 = -1;
                            expected4 = -1;
                        } else if(rules[46][lastState]) {
                            state = 46;
                            expected = -1;
                            expected2 = -1;
                            expected3 = -1;
                            expected4 = -1;
                        } else if(lastState === 68) {
                            state = 69;
                            expected = -1;
                            expected2 = -1;
                            expected3 = -1;
                            expected4 = -1;  
                        } else if(lastState === 22) {
                            state = 23;
                            expected = 25;
                            expected2 = -1;
                            expected3 = -1;
                            expected4 = -1;  
                            expect = 0;         
                        } else if(lastState === 145) {
                            state = 146;
                            expected = -1;
                            expected2 = -1;
                            expected3 = -1;
                            expected4 = -1;
                        } else if(lastState === 118) {
                            state = 119;
                            expected = -1;
                            expected2 = -1;
                            expected3 = -1;
                            expected4 = -1;
                        } else if(lastState === 140) {
                            state = 141;
                            expected = -1;
                            expected2 = -1;
                            expected3 = -1;
                            expected4 = -1;
                        } else if(lastState === 53) {
                            state = 54;
                            expect = 0;
                            expected = 55;
                            expected2 = 58;
                            expected3 = -1;
                            expected4 = -1;
                        } else if(lastState === 52) {
                            state = 54;
                            expect = 0;
                            expected = 55;
                            expected2 = 58;
                            expected3 = -1;
                            expected4 = -1;                          
                        } else if(rules[104][lastState]) {                           
                            state = 104;
                            expected = -1;
                            expected2 = -1;
                            expected3 = -1;
                            expected4 = -1;
                        } else {                                
                            if(!rules[67][lastState] && newLineFlag) {                                                                                    
                               asi();
                               state = 104;
                               expected = -1;
                               expected2 = -1;
                               expected3 = -1;
                               expected4 = -1;
                            } else {
                               error('Unexpected (. Cannot follow '+rulesLookup[lastState]+'.Output:'+output);
                            }                                                           
                        }                                               
                        outputLine += '(';                          
                        pos++;
                        parentStates[index] = state;
                        left = 0;
                        lookupParen++;
				}
				function parenClose() {
				    var index = parseFloat(''+lookupSquare+lookupCurly+lookupParen);
				    isVar[index] = null;                
                    lookupParen--; 
                    index = parseFloat(''+lookupSquare+lookupCurly+lookupParen);                     
                    parentState = parentStates[index];                                                                                                                                                                                                                    
                    if(rules[57][lastState]) {
                        state = 57;
                        expect = 0;
                        expected = 61;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                    } else if(parentState === 46) {
                        state = 47;
                        expected = -1;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                        left = 1;
                    } else if(parentState === 41) {
                        state = 42;
                        expected = -1;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                        left = 0;
                        isFor[index] = 0;     
                        isForIn[index] = 0;       
                    } else if(parentState === 119) {
                        state = 120;
                        expected = -1;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                        left = 0;
                    } else if(parentState === 23) {
                        state = 24;
                        expected = -1;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                        left = 0;
                    } else if(parentState === 146) {
                        state = 147;
                        expected = -1;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                        left = 0;
                    } else if(parentState === 141) {
                        state = 142;
                        expected = -1;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                        left = 0;
                    } else if(parentState === 69) {
                        state = 70;
                        expected = -1;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                        left = 0;
                    } else if(rules[58][lastState]) {
                        state = 58;
                        expect = 0;
                        expected = 59;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                    } else if(parentState === 104) {
                        state = 106;
                        expected = -1;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                        left = 1;
                    } else {                                                                                                                    
                        error('Unexpected ). Cannot follow '+rulesLookup[lastState]+'.Output:'+output);                          
                    }                                           
                    outputLine += ')';
                    pos++;
                    parentStates[index] = null; 
				}
				function curlyOpen() {
				    var index = parseFloat(''+lookupSquare+(lookupCurly+1)+lookupParen);
				    if(lastState === 57) {
                            state = 61;
                            expected = -1;
                            expected2 = -1;
                            expected3 = -1;
                            expected4 = -1;
                        } else if(lastState === 18) {
                            state = 19;
                            expected = -1;
                            expected2 = -1;
                            expected3 = -1;
                            expected4 = -1;
                        } else if(lastState === 32) {
                            state = 33;
                            expected = -1;
                            expected2 = -1;
                            expected3 = -1;
                            expected4 = -1;
                        } else if(lastState === 147) {
                            state = 148;
                            expected = -1;
                            expected2 = -1;
                            expected3 = -1;
                            expected4 = -1;  
                        } else if(lastState === 24) {
                            state = 26;
                            expected = -1;
                            expected2 = -1;
                            expected3 = -1;
                            expected4 = -1;
                        } else if(lastState === 42) {
                            state = 43;
                            expected = -1;
                            expected2 = -1;
                            expected3 = -1;
                            expected4 = -1;
                        } else if(lastState === 142) {
                            state = 143;
                            expected = -1;
                            expected2 = -1;
                            expected3 = -1;
                            expected4 = -1;              
                        } else if(lastState === 127) {
                            state = 128;
                            expected = -1;
                            expected2 = -1;
                            expected3 = -1;
                            expected4 = -1;
                        } else if(lastState === 120) {
                            state = 121;
                            expected = -1;
                            expected2 = -1;
                            expected3 = -1;
                            expected4 = -1;
                        } else if(lastState === 70) {
                            state = 71;
                            expected = -1;
                            expected2 = -1;
                            expected3 = -1;
                            expected4 = -1;
                        } else if(lastState === 37) {
                            state = 38;
                            expected = -1;
                            expected2 = -1;
                            expected3 = -1;
                            expected4 = -1;
                        } else if(lastState === 58) {
                            state = 59;
                            expected = -1;
                            expected2 = -1;
                            expected3 = -1;
                            expected4 = -1;
                        } else if(rules[96][lastState]) {                
                            state = 96;
                            expected = 98;
                            expected2 = 102;
                            expected3 = 101;
                            expected4 = 97;
                            expect = 0;
                            parentStates[index] = state;
                            outputLine += 'M.O(';
                        } else if(rules[9][lastState]) {
                            state = 9;
                            expected = -1;
                            expected2 = -1;
                            expected3 = -1;
                            expected4 = -1;
                        } else {                                                                                                                            
                            if(!rules[67][lastState] && newLineFlag) {                                    
                              asi();
                              if(lastState === 45) {                                    
                                state = 96;
                                expected = 98;
                                expected2 = 102;
                                expected3 = 101;
                                expected4 = 97;
                                expect = 0;
                                parentStates[index] = state;
                                outputLine += 'M.O(';   
                              } else {                                                                                                                             
                                state = 9;
                                expected = -1;
                                expected2 = -1;
                                expected3 = -1;
                                expected4 = -1;
                              }                                                                                 
                            } else {                                                
                                error('Unexpected {. Cannot follow '+rulesLookup[lastState]+'.Output:'+output);
                            }
                        }                                       
                        outputLine += '{';
                        if(state === 61 || state === 59) {
                            outputLine += 'var $arguments$=M.A(arguments);';
                        }                           
                        pos++;
                        index = parseFloat(''+lookupSquare+lookupCurly+lookupParen);
                        parentStates[index] = state;
                        left = 0;
                        lookupCurly++;
				}
				function curlyClose() {
				    var index = parseFloat(''+lookupSquare+lookupCurly+lookupParen);
				    isVar[index] = null;
                    lookupCurly--;
                    index = parseFloat(''+lookupSquare+lookupCurly+lookupParen);
                    parentState = parentStates[index];                                                                                                                                                                    
                    outputLine += '}';                                                                                                          
                    if(parentState === 61) {
                        state = 62;                              
                        left = 0;
                    } else if(parentState === 33) {
                        state = 34;
                        expected = -1;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                        left = 0;
                    } else if(parentState === 96) {
                        state = 97;
                        expected = -1;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                        left = 1;
                        index = parseFloat(''+lookupSquare+(lookupCurly+1)+lookupParen);
                        isObjectLiteral[index] = 0;
                        outputLine += ')';
                    } else if(parentState === 43) {
                        state = 44;
                        expected = -1;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                        left = 0;                               
                    } else if(parentState === 148) {
                        state = 149;
                        expected = -1;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                        left = 0;                               
                    } else if(parentState === 26) {
                        state = 27;
                        expected = -1;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                        left = 0;
                    } else if(parentState === 38) {
                        state = 39;
                        expected = -1;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                        left = 0;                                               
                    } else if(parentState === 143) {
                        state = 144;
                        expected = -1;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                        left = 0;                               
                    } else if(parentState === 128) {
                        state = 129;               
                        expected = 22;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                        expect = 0;
                    } else if(parentState === 19) {
                        state = 20;                
                        expected = 145;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                        expect = 0;
                    } else if(parentState === 121) {
                        state = 122;
                        expected = -1;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                        left = 0;                                                       
                    } else if(parentState === 18) {
                        state = 19;
                        expected = -1;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                        left = 0;
                        expect = 0;
                    } else if(parentState === 71) {
                        state = 72;
                        expected = -1;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                        left = 0;
                    } else if(parentState === 59) {
                        state = 63;
                        left = 1;
                    } else if(parentState === 9) {
                        state = 10;                             
                        left = 0;
                    } else {                                                                                        
                        error('Unexpected }. Cannot follow '+rulesLookup[lastState]+'.Output:'+output);
                    }
                    index = parseFloat(''+lookupSquare+lookupCurly+lookupParen);                           
                    parentStates[index] = null;                                     
                    pos++;  
				}
				function ternaryOpen() {
				    var index = parseFloat(''+lookupSquare+lookupCurly+lookupParen);
				    state = 125;
                    outputLine += '?';                          
                    left = 0;
                    pos++;
                    if(isTernary[index]) {
                      isTernary[index]++;
                    } else {
                      isTernary[index] = 1;
                    }
                    ternaryCount++; 
				}
				function comma() {
				    var index = parseFloat(''+lookupSquare+lookupCurly+lookupParen);
				    parentState = parentStates[index];                                                                                                                                                                                                                                                                                                                                                                                               
                    if(lastState === 48) {
                        state = 49;
                        expect = 0;
                        expected = 48;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                    } else if(parentState === 1 || lastState === 1) {
                        state = 0;                                                           
                    } else if(lastState === 55) {
                        state = 56;
                        expect = 0;
                        expected = 55;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;      
                    } else if(parentState === 104) {
                        state = 105;
                        expected = -1;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                    } else if(isObjectLiteral[index]) {
                        state = 100;
                        expect = 0;
                        expected = 98;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                    } else if(isVar[index]) {
                        state = 138;
                        expected = 67;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                        expect = 0; 
                    } else if(isTernary[index]) {
                        error("Syntax error expected :");               
                    } else {
                        state = 28;
                        expected = -1;
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                    }
                    outputLine += ',';
                    pos++;
                    left = 0;   
				}
				function period() {
				    if(left) {                         
                        state = 66;                                
                    } else {
                        error('Unexpected . Cannot follow '+rulesLookup[lastState]+'.Output:'+output);
                    }
                    expected = 67;
                    expected2 = -1;
                    expected3 = -1;
                    expected4 = -1;
                    expect = 0;
                    outputLine += '.';
                    pos++;
                    left = 0;
				}
				function colon() {
				    var index = parseFloat(''+lookupSquare+lookupCurly+lookupParen);
				    parentState = parentStates[index];                               
                    if(isTernary[index]) {
                        state = 126;
                        isTernary[index]--;
                        ternaryCount--;
                    } else if(rules[99][lastState]) {
                        state = 99;
                        expected = -1;                               
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;                                                                                              
                        isObjectLiteral[index] = 1;               
                    } else if(isCase[index] || lastState === 16) {
                        state = 123;
                        if(lastState === 15) {
                            error("Syntax error");
                        }
                        expected = -1;                               
                        expected2 = -1;
                        expected3 = -1;
                        expected4 = -1;
                        if(lastState !== 16) {
                            isCase[index] = 0;
                            caseCount--;    
                        }                       
                    } else if(!parentState) {
                        state = 76;
                    } else {
                        error('Unexpected : Cannot follow '+rulesLookup[lastState]+'.Output:'+output);
                    }
                    outputLine += ':';
                    pos++;
                    left = 0;
				}
				function string() {
				    var states;
				    if(lastState === 96 || lastState === 100) {
                            state = 102;
                            left = 0;
                            expected = 99;
                            expected2 = -1;
                            expected3 = -1;
                            expected4 = -1;
                            expect = 0; 
                        } else {
                            state = 115;
                            left = 1;
                        }                           
                        states = {escaping: 0, complete: 0};
                        states[chr] = 1;                        
                        outputLine += code.charAt(pos);
                        pos++;
                        if(state === 102) {
                            outputLine += scoping;  
                        }
                        while(pos < len) {                               
                            chr = code.charCodeAt(pos);                                                                                          
                            if(chr === SINGLE_QUOTE && !states.escaping && states[SINGLE_QUOTE]) {
                                states.complete = 1;                 
                            } else if(chr === DOUBLE_QUOTE && !states.escaping && states[DOUBLE_QUOTE]) {
                                states.complete = 1;
                            } else if(states.escaping && (chr===10||chr===13||chr===8232||chr==8233) ) {                                    
                                pos++;
                                states.escaping = 0;
                                continue;                                                
                            } else if(chr === BACKSLASH && !states.escaping) {
                                states.escaping = 1;
                                pos++;
                                continue;                                
                            } else if(chr === BACKSLASH && states.escaping) {
                                states.escaping = 0;
                                outputLine += '\\';                                
                            } else if((chr===10||chr===13||chr===8232||chr==8233) && !states.escaping) {
                                error("Unterminated string literal");
                            } else if(states.escaping) {
                                outputLine += '\\';
                                states.escaping = 0;
                            }                                                            
                            if(states.complete && state === 102) {
                                outputLine += scoping;  
                            }                                                                       
                            outputLine += code.charAt(pos);
                            pos++;
                            if(states.complete) {                                                               
                                break;
                            }                           
                        }  
                        if(!states.complete) {
                           error("Unterminated string literal"); 
                        }
				}
				function exclamation() {
					cached = -1;
				    next = code.charCodeAt(pos+1);
                    next2 = code.charCodeAt(pos+2);                     
                    if(next !== EQUAL && !left) {
                        state = 88;
                        outputLine += ' ! ';
                        pos++;
                        cached = next;
                    } else if(next === EQUAL && next2 !== EQUAL) {
                        state = 87;
                        outputLine += '!=';
                        pos+=2;
                        cached = next2;
                    } else if(next === EQUAL && next2 === EQUAL) {
                        state = 117;
                        outputLine += '!==';
                        pos+=3;                         
                    } else {
                        error('Unexpected !. Cannot follow '+rulesLookup[lastState]+'.Output:'+output);
                    }           
                    left = 0;
				}
				function tilde() {
				    if(!left) {
                        state = 11;
                        outputLine += '~';
                        pos++;                                              
                    } else {
                        error('Unexpected ~ Cannot follow '+rulesLookup[lastState]+'.Output:'+output);
                    }
                    left = 0;
				}
				function pipe() {
				    next = code.charCodeAt(pos+1);
				    cached = -1;
                    if(next === PIPE) {
                        state = 81;
                        outputLine += '||';
                        pos+=2;
                    } else if(next === EQUAL) {
                        state = 103;
                        outputLine += '|=';
                        pos+=2;
                    } else if(next !== PIPE && next !== EQUAL) {
                        state = 12;
                        outputLine += ' | ';
                        pos++; 
                        cached = next;                     
                    } else {
                        error('Unexpected | Cannot follow '+rulesLookup[lastState]+'.Output:'+output);
                    }
                    left = 0;
				}
				function caret() {
				    next = code.charCodeAt(pos+1);
				    cached = -1; 
                    if(next === EQUAL) {
                        state = 151;
                        outputLine += '^=';
                        pos+=2;
                    } else if(next !== EQUAL) {
                        state = 150;
                        outputLine += ' ^ ';
                        pos++;  
                        cached = next;                    
                    } else {
                        error('Unexpected ^. Cannot follow '+rulesLookup[lastState]+'.Output:'+output);
                    }
                    left = 0;
				}
				function percent() {
				    next = code.charCodeAt(pos+1);
				    cached = -1;
                    if(next === EQUAL) {
                        state = 93;
                        outputLine += '%=';
                        pos+=2;
                    } else if(next !== EQUAL) {
                        state = 92;
                        outputLine += ' % ';
                        pos++; 
                        cached = next;                     
                    } else {
                        error('Unexpected % Cannot follow '+rulesLookup[lastState]+'.Output:'+output);
                    }
                    left = 0;
				}
				function ampersand() {
				    next = code.charCodeAt(pos+1);
				    cached = -1;
                    if(next === AMPERSAND) {
                        state = 82;
                        outputLine += '&&';
                        pos+=2;
                    } else if(next === EQUAL) {
                        state = 8;
                        outputLine += '&=';
                        pos+=2;
                    } else if(next !== AMPERSAND && next !== EQUAL) {
                        state = 13;
                        outputLine += ' & ';
                        pos++;  
                        cached = next;                    
                    } else {
                        error('Unexpected & Cannot follow '+rulesLookup[lastState]+'.Output:'+output);
                    }
                    left = 0;
				}
				function equal() {
				    next = code.charCodeAt(pos+1);
                    next2 = code.charCodeAt(pos+2);
                    cached = -1;                     
                    if(next !== EQUAL) {
                        state = 30;
                        outputLine += ' = ';
                        pos++;
                        cached = next;
                    } else if(next === EQUAL && next2 !== EQUAL) {
                        state = 31;
                        outputLine += '==';
                        pos+=2;
                        cached = next2;
                    } else if(next === EQUAL && next2 === EQUAL) {
                        state = 116;
                        outputLine += '===';
                        pos+=3;                           
                    } else {
                        error('Unexpected = Cannot follow '+rulesLookup[lastState]+'.Output:'+output);
                    }
                    left = 0;
				}
				function greaterThan() {
				    next = code.charCodeAt(pos+1);
                    next2 = code.charCodeAt(pos+2);
                    next3 = code.charCodeAt(pos+3);
                    cached = -1;
                    if(next === GREATER_THAN && next2 === GREATER_THAN && next3 === EQUAL) {
                        state = 153;
                        outputLine += '>>>=';
                        pos+=4;                                             
                    } else if(next === GREATER_THAN && next2 === GREATER_THAN) {
                        state = 152;
                        outputLine += '>>>';
                        pos+=3;
                        cached = next3; 
                    } else if(next === GREATER_THAN && next2 === EQUAL) {
                        state = 114;
                        outputLine += '>>=';
                        pos+=3;
                        cached = next3;                                             
                    } else if(next === GREATER_THAN) {
                        state = 113;
                        outputLine += '>>';
                        pos+=2;
                        cached = next2;
                    } else if(next !== EQUAL) {
                        state = 64;
                        outputLine += ' > ';
                        pos++;
                        cached = next;
                    } else if(next === EQUAL) {
                        state = 65;
                        outputLine += '>=';
                        pos+=2;
                        cached = next2;                     
                    } else {
                        error('Unexpected > Cannot follow '+rulesLookup[lastState]+'.Output:'+output);
                    }
                    left = 0;
				}
				function lessThan() {
				    next = code.charCodeAt(pos+1);
                    next2 = code.charCodeAt(pos+2);
                    cached = -1; 
                    if(next === LESS_THAN && next2 === EQUAL) {
                        state = 80;
                        outputLine += '<<=';
                        pos+=3;
                    }else if(next === LESS_THAN) {
                        state = 79;
                        outputLine += '<<';
                        pos+=2;
                        cached = next2;
                    } else if(next !== EQUAL) {
                        state = 77;
                        outputLine += ' < ';
                        pos++;
                        cached = next;
                    } else if(next === EQUAL) {
                        state = 78;
                        outputLine += '<=';
                        pos+=2;
                        cached = next2;                     
                    } else {
                        error('Unexpected < Cannot follow '+rulesLookup[lastState]+'.Output:'+output);
                    }
                    left = 0;
				}
				function asterix() {
				    next = code.charCodeAt(pos+1);
				    cached = -1;                                         
                    if(next !== EQUAL) {
                        state = 94;
                        outputLine += ' * ';
                        pos++;
                        cached = next;
                    } else if(next === EQUAL) {
                        state = 95;
                        outputLine += '*=';
                        pos+=2;                     
                    } else {
                        error('Unexpected * Cannot follow '+rulesLookup[lastState]+'.Output:'+output);
                    }
                    left = 0;
				}
				function minus() {
				    next = code.charCodeAt(pos+1);
				    cached = -1;
                    if(next === MINUS && left) {
                        state = 108;
                        outputLine += '--';
                        pos+=2;
                    } else if(next === MINUS && !left) {
                        state = 109;
                        outputLine += '--';
                        pos+=2;                     
                    } else if(next === EQUAL) {
                        state = 91;
                        outputLine += '-=';
                        pos+=2;
                    } else if(next !== EQUAL && next !== MINUS && left) {
                        state = 90;
                        outputLine += ' - ';
                        pos++;
                        cached = next;
                    } else if(next !== EQUAL && next !== MINUS && !left) {
                        state = 134;
                        outputLine += '-';
                        pos++;      
                        cached = next;                                                            
                    } else {                    
                        error('Unexpected - Cannot follow '+rulesLookup[lastState]+'.Output:'+output);
                    }
                    left = 0;   
				}
				function space() {
				    pos++;
				}
				function checkRules() {
				    if(state === 89) {                          
                        error("No state defined for char:" +String.fromCharCode(chr) + ', left: '+left+', last state: '+rulesLookup[lastState]+',output:'+output);
                    }
                    
                    if(!rules[state]) {
                        error("State does not exist in the rules:" +state);
                    }                                                                      
                    
                    if(!rules[state][lastState] && newLineFlag) {                                                                                   
                        asi();                                              
                    }                                                
                     
                    if(!rules[state][lastState]) {                                                                                          
                        error("Unexpected " + rulesLookup[state] + '. Cannot follow '+rulesLookup[lastState]+'.Output:'+output);
                    } else if(((expected>=0 && expected !== state) || (expected2>=0 && expected2 !== state) || (expected3>=0 && expected3 !== state) || (expected4>=0 && expected4 !== state)) && expect === 1) {
                        msg = "Expected " + expected;
                        if(expected2>=0) {
                            msg = msg + ' or ' + expected2;
                        }
                        if(expected3>=0) {
                            msg = msg + ' or ' + expected3;
                        }
                        if(expected4>=0) {
                            msg = msg + ' or ' + expected4;
                        }
                        msg = msg + '. But got '+rulesLookup[state] + ' with last state:'+rulesLookup[lastState]+', output:'+output;
                        error(msg);
                    }
                    
                    if(parseTreeFlag){                          
                        parseTreeOutput = parseTreeOutput + '<'+rulesLookup[state]+'>' + outputLine + '</'+rulesLookup[state]+'>';
                    }
                    lastState = state;                                                                              
                    newLineFlag = 0;
                    if(lookupSquare === 1 && lookupCurly === 1 && lookupParen === 1) {
                        parentStates = {};
                    }
				}																				
				if(browserCheckSyntaxFlag) {
				   checkSyntax(code);
				}								
				while(pos < len) {					    						                                               
                    state = 89;
                    if(expected>-1||expected2>-1||expected3>-1||expected4>-1) {
                    	expect = 1;
                   	}															
					if(cached >= 0) {
						chr = cached;
					} else {
						chr = code.charCodeAt(pos);
					}
					cached = -1;									              																				
				    if(chr===10||chr===13) {                                                   
                        newLine();
                        continue;                         
					} else if(chr===9||chr===11||chr===12||chr===32) {
						space();
						continue;												
                    } else if(chr === SEMI_COLON) {             
                        semicolon();                      	                                                        					    						
					} else if(chr >= LOWER_A && chr <= LOWER_Z) {                      
                        identifier();
                    } else if(chr === DOLLAR) {
                        identifier();          
					} else if((chr >= DIGIT_0 && chr <= DIGIT_9) || (!left && chr === PERIOD)) {						    						    					    																													
						numberOrHex();                                              							        
			        } else if(chr === FORWARD_SLASH) {
			            next = code.charCodeAt(pos+1);				            
                        if(!left && next !== ASTERIX && next !== FORWARD_SLASH && lastState !== 137) {                                                                                                                               
                            regex();
                        } else if(next === FORWARD_SLASH) {
                            singleComment();
                            continue;                              
                        } else if(next === ASTERIX) {                                 
                            multiComment();                                                                                   
                            continue;  
                        } else if((lastState === 137 || left) && next !== FORWARD_SLASH) {
                            divide();
                        } else {
                            error('Unexpected /. Cannot follow '+rulesLookup[lastState]+'.Output:'+output);
                        }                                                                                                                                                                                  																				                                                                                   																																																																			                                                                                                                                                                                                                                                                                     						
                    } else if(chr === PLUS) {
                        plus();					
					} else if(chr === SQUARE_OPEN) {			
						arrayOrAccessorOpen();						
					} else if(chr === SQUARE_CLOSE) {
						arrayOrAccessorClose();						
					} else if(chr === PAREN_OPEN) {																																																																									
						parenOpen();
					} else if(chr === PAREN_CLOSE) {
					    parenClose();																	
					} else if(chr === CURLY_OPEN) {																																												
						curlyOpen();
					} else if(chr === CURLY_CLOSE) {							
						curlyClose();													
					} else if(chr === QUESTION_MARK) {
						ternaryOpen();												
					} else if(chr === COMMA) {			
						comma();						
					} else if(chr === PERIOD) {
						period();
					} else if(chr === COLON) {
						colon();																								
                    } else if(chr === SINGLE_QUOTE) {                                           
                        string();
                    } else if(chr === DOUBLE_QUOTE) {
                        string();
					} else if(chr === EXCLAMATION_MARK) {
					    exclamation();						    				
					} else if(chr === TILDE) {
						tilde();							
					} else if(chr === PIPE) {
					    pipe();
					} else if(chr === CARET) {
					    caret();
					} else if(chr === PERCENT) {
					    percent();								
					} else if(chr === AMPERSAND) {
					    ampersand();	
					} else if(chr === EQUAL) {
					    equal();																											
					} else if(chr === GREATER_THAN) {
					    greaterThan();		
					} else if(chr === LESS_THAN) {
					    lessThan();
					} else if(chr === ASTERIX) {
					    asterix();																						
					} else if(chr === MINUS) {
					    minus();
					} else if(chr === UNDERSCORE) {
                        identifier();                        
                    } else if(chr === BACKSLASH) {
                        identifier();
                    } else if(chr >= UPPER_A && chr <= UPPER_Z) {
                        identifier();																																																				
					} else if(chr > 159) {
                        if(chr === 160||chr===5760||chr===6158||chr===8192||chr===8193||chr===8194||chr===8195||chr===8196||chr===8197||chr===8198||chr===8199||chr===8200||chr===8201||chr===8202||chr===8239||chr===8287||chr===12288) {
                            space();
                            continue;
                        } else if(chr===8232||chr==8233) {
                            newLine();
                            continue;                  
                        } else {
                            identifier();
                        } 
                    }																				
					checkRules();
                    output += outputLine;
                    outputLine = '';																													
				}	
				if(((expected>=0 && expected !== state) || (expected2>=0 && expected2 !== state) || (expected3>=0 && expected3 !== state) || (expected4>=0 && expected4 !== state))) {						
					msg = "Expected " + expected;
					if(expected2>=0) {
						msg = msg + ' or ' + expected2;
					}
					if(expected3>=0) {
						msg = msg + ' or ' + expected3;
					}
					if(expected4>=0) {
						msg = msg + ' or ' + expected4;
					}
					msg = msg + '. But got '+state + ' with last state:'+lastState + ', output:'+output;
					error(msg);
				}
								
				if(lastState === 70) {
					error("Syntax error");	
				}
				
				if(lookupSquare > 1) {
					error("Syntax error unmatched [");
				} else if(lookupCurly > 1) {
					error("Syntax error unmatched {");
				} else if(lookupParen > 1) {
					error("Syntax error unmatched (");
				} else if(caseCount > 1) {
					error("Syntax error unmatched case");
				}
				if(completeFlag) {
                    that.complete();
                }
				if(parseTreeFlag) {						
                	that.parseTree(parseTreeOutput);
                }					
                if(convertedFlag) {                    
                	that.converted(output);
                }                    
                if(browserCheckSyntaxFlag) {      
                    checkSyntax(output);                 
                }                      													
				return output;
			};	
            
            this.options = {eval:true, stealth: true, browserCheckSyntax: true};
            
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