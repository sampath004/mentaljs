!function(){  
		var rules = {		
			ArrayComma:createRule('NewExpressions,Expression,Postfix'),
			ArrayOpen:createRule('Statements,Operators,NewExpressions,Prefix'),		
			ArrayClose:createRule('ArrayComma,ArrayOpen,Expression,Postfix'),		
			AccessorOpen: createRule('Expression'),		
			AccessorClose: createRule('Expression,Postfix'),
			Addition:createRule('Expression'),
			AdditionAssignment:createRule('Expression'),		
			AssignmentDivide:createRule('Expression'),
			AndAssignment:createRule('Expression'),
			BlockStatementCurlyOpen:createRule('Statements,SwitchColon'),
			BlockStatementCurlyClose:createRule('Statements,Expression,BlockStatementCurlyOpen,Postfix,Break,Continue'),										
			BitwiseNot:createRule('Prefix,Statements,NewExpressions,Operators'),
			BitwiseOr:createRule('Expression,Postfix'),
			BitwiseAnd:createRule('Expression,Postfix'),		
			Break:createRule('Statements'),
			Case: createRule('SwitchStatementCurlyOpen,EndStatement,SwitchColon'),		
			Default:createRule('SwitchStatementCurlyOpen,EndStatement,SwitchColon'),			
			Delete:createRule('Statements,NewExpressions,Operators'),
			Do:createRule('Statements,SwitchColon'),	
			DoStatementCurlyOpen:createRule('Do'),
			DoStatementCurlyClose:createRule('Statements,Expression,DoStatementCurlyOpen,Postfix,Break,Continue'),
			DivideOperator:createRule('Expression'),
			CatchStatement:createRule('TryStatementCurlyClose'),
			CatchStatementParenOpen:createRule('CatchStatement'),
			CatchStatementParenClose:createRule('CatchStatementIdentifier'),
			CatchStatementIdentifier:createRule('CatchStatementParenOpen'),
			CatchStatementCurlyOpen:createRule('CatchStatementParenClose'),
			CatchStatementCurlyClose:createRule('Statements,Expression,CatchStatementCurlyOpen,Postfix,Break,Continue'),	
			Comma:createRule('Expression,Postfix'),
			Continue:createRule('Statements'),										
			EqualAssignment:createRule('Expression'),
			Equal:createRule('Expression,Postfix'),					
			Else:createRule('IfStatementCurlyClose,Statements'),
			ElseCurlyOpen:createRule('Else'),
			ElseCurlyClose:createRule('Statements,Expression,ElseCurlyOpen,Postfix,Break,Continue'),
			EndStatement:createRule('Statements,Expression,Postfix,Continue,Break,Return,SwitchColon,ForStatementParenClose,IfStatementParenClose,WithStatementParenClose,WhileStatementParenClose'),		
			False:createRule('Statements,Operators,Prefix,NewExpressions'),
			FinallyStatement:createRule('CatchStatementCurlyClose,TryStatementCurlyClose'),
			FinallyStatementCurlyOpen:createRule('FinallyStatement'),
			FinallyStatementCurlyClose:createRule('Statements,Expression,FinallyStatementCurlyOpen,Postfix,Break,Continue'),
			ForStatement:createRule('Statements,SwitchColon'),
			ForStatementParenOpen:createRule('ForStatement'),
			ForStatementParenClose:createRule('ForSemi,Expression,Postfix,Break,Continue'),
			ForStatementCurlyOpen:createRule('ForStatementParenClose'),
			ForStatementCurlyClose:createRule('Statements,Expression,ForStatementCurlyOpen,Postfix,Break,Continue'),
			ForSemi:createRule('ForSemi,Expression,Postfix,ForStatementParenOpen'),
			FunctionCallOpen:createRule('Identifier,FunctionExpressionCurlyClose,ParenExpressionClose,AccessorClose,FunctionCallClose,This'),
			FunctionCallClose:createRule('Expression,FunctionCallOpen,Postfix'),
			FunctionArgumentIdentifier: createRule('FunctionParenOpen,FunctionArgumentComma'),
			FunctionArgumentComma: createRule('FunctionArgumentIdentifier'),
			FunctionIdentifier: createRule('FunctionStatement'),					
			FunctionParenOpen: createRule('FunctionIdentifier'),
			FunctionExpression: createRule('Operators,Prefix,NewExpressions'),
			FunctionExpressionIdentifier:createRule('FunctionExpression'),
			FunctionExpressionParenOpen:createRule('FunctionExpression,FunctionExpressionIdentifier'),
			FunctionExpressionArgumentIdentifier:createRule('FunctionExpressionParenOpen,FunctionExpressionArgumentComma'),		
			FunctionExpressionArgumentComma:createRule('FunctionExpressionArgumentIdentifier'),
			FunctionParenClose: createRule('FunctionParenOpen,FunctionArgumentIdentifier'),
			FunctionExpressionParenClose: createRule('FunctionExpressionArgumentIdentifier,FunctionExpressionParenOpen'),
			FunctionExpressionCurlyOpen:createRule('FunctionExpressionParenClose'),
			FunctionStatement:createRule('Statements,SwitchColon'),
			FunctionStatementCurlyOpen: createRule('FunctionParenClose'),										
			FunctionStatementCurlyClose:createRule('Statements,Expression,FunctionStatementCurlyOpen,Postfix,Break,Continue'),
			FunctionExpressionCurlyClose:createRule('Statements,Expression,FunctionExpressionCurlyOpen,Postfix,Break,Continue'),
			GreaterThan:createRule('Expression,Postfix'),
			GreaterThanEqual:createRule('Expression,Postfix'),
			IdentifierDot:createRule('Expression'),
			Identifier: createRule('Statements,Operators,Prefix,NewExpressions,IdentifierDot'),
			IfStatement:createRule('Statements,SwitchColon'),
			IfStatementParenOpen:createRule('IfStatement'),
			IfStatementParenClose:createRule('Expression,Postfix'),
			IfStatementCurlyOpen:createRule('IfStatementParenClose'),
			IfStatementCurlyClose:createRule('Statements,Expression,IfStatementCurlyOpen,Postfix,Break,Continue'),
			In:createRule('Expression'),
			'Infinity':createRule('Statements,Operators,Prefix,NewExpressions'),
			InstanceOf:createRule('Expression'),
			LabelColon:createRule('Expression'),
			LessThan:createRule('Expression,Postfix'),
			LessThanEqual:createRule('Expression,Postfix'),
			LeftShift:createRule('Expression,Postfix'),
			LeftShiftAssignment:createRule('Expression'),
			LogicalOr:createRule('Expression,Postfix'),
			LogicalAnd:createRule('Expression,Postfix'),
			'NaN':createRule('Statements,Operators,Prefix,NewExpressions'),
			New: createRule('Statements,Operators,Prefix,NewExpressions'),		
			Number: createRule('Statements,Operators,NewExpressions,Prefix'),
			Null: createRule('Statements,Operators,NewExpressions,Prefix'),
			NotEqual:createRule('Expression,Postfix'),					
			Not:createRule('Prefix,Statements,NewExpressions,Operators'),
			Nothing:{},
			Minus:createRule('Expression,Postfix'),
			MinusAssignment:createRule('Expression'),
			Modulus:createRule('Expression,Postfix'),
			ModulusAssignment:createRule('Expression'),																		
			Multiply:createRule('Expression,Postfix'),
			MultiplyAssignment:createRule('Expression'),
			ObjectLiteralCurlyOpen:createRule('NewExpressions,Operators,Prefix'),
			ObjectLiteralCurlyClose: createRule('Statements,Expression,ObjectLiteralCurlyOpen,Postfix'),
			ObjectLiteralIdentifier: createRule('ObjectLiteralCurlyOpen,ObjectLiteralComma'),
			ObjectLiteralColon: createRule('ObjectLiteralIdentifier,ObjectLiteralIdentifierNumber,ObjectLiteralIdentifierString'),
			ObjectLiteralComma: createRule('Expression,Postfix'),
			ObjectLiteralIdentifierNumber:createRule('ObjectLiteralCurlyOpen,ObjectLiteralComma'),
			ObjectLiteralIdentifierString:createRule('ObjectLiteralCurlyOpen,ObjectLiteralComma'),
			OrAssignment:createRule('Expression'),
			ParenExpressionOpen:createRule('Statements,NewExpressions,Operators,Prefix'),
			ParenExpressionComma:createRule('Expression'),
			ParenExpressionClose:createRule('Expression,Postfix'),
			PostfixIncrement:createRule('Expression'),
			PostfixDeincrement:createRule('Expression'),
			PrefixDeincrement:createRule('Statements,NewExpressions,Operators,Prefix'),
			PrefixIncrement:createRule('Statements,NewExpressions,Operators,Prefix'),
			Return:createRule('Statements,SwitchColon'),
			RegExp:createRule('Statements,Operators,NewExpressions,Prefix'),
			RightShift:createRule('Expression,Postfix'),
			RightShiftAssignment:createRule('Expression'),
			String:createRule('Statements,Operators,NewExpressions,Prefix'),											
			StrictEqual:createRule('Expression,Postfix'),
			StrictNotEqual:createRule('Expression,Postfix'),
			SwitchStatement:createRule('Statements,SwitchColon'),
			SwitchStatementParenOpen:createRule('SwitchStatement'),
			SwitchStatementParenClose:createRule('Expression'),
			SwitchStatementCurlyOpen:createRule('SwitchStatementParenClose'),
			SwitchStatementCurlyClose:createRule('SwitchStatementCurlyOpen,Expression,Statements,Postfix,Break,Continue'),
			SwitchColon:createRule('Expression,Default'),					
			This:createRule('Statements,Operators,NewExpressions,Prefix'),
			TernaryQuestionMark:createRule('Expression,Postfix'),
			TernaryColon:createRule('Expression,Postfix'),
			TryStatement:createRule('Statements,SwitchColon'),
			TryStatementCurlyOpen:createRule('TryStatement'),
			TryStatementCurlyClose:createRule('TryStatementCurlyOpen,Expression,Statements,Postfix,Break,Continue'),
			True:createRule('Statements,Operators,Prefix,NewExpressions'),
			Throw:createRule('Statements,NewExpressions'),
			TypeOf:createRule('Statements,NewExpressions,Operators'),
			UnaryPlus:createRule('Prefix,Statements,NewExpressions,Operators'),
			UnaryMinus:createRule('Prefix,Statements,NewExpressions,Operators'),
			Undefined:createRule('Statements,Operators,Prefix,NewExpressions'),
			Var:createRule('Statements,NewExpressions'),
			VarIdentifier:createRule('Var,VarComma'),
			VarComma:createRule('Expression,Postfix'),
			Void:createRule('Statements,NewExpressions,Operators'),
			WithStatement:createRule('Statements,SwitchColon'),
			WithStatementParenOpen:createRule('WithStatement'),
			WithStatementParenClose:createRule('Expression,Postfix'),
			WithStatementCurlyOpen:createRule('WithStatementParenClose'),
			WithStatementCurlyClose:createRule('WithStatementCurlyOpen,Expression,Statements,Postfix,Break,Continue'),
			WhileStatement:createRule('Statements,DoStatementCurlyClose,SwitchColon'),
			WhileStatementParenOpen:createRule('WhileStatement'),
			WhileStatementParenClose:createRule('Expression,Postfix'),
			WhileStatementCurlyOpen:createRule('WhileStatementParenClose'),
			WhileStatementCurlyClose:createRule('WhileStatementCurlyOpen,Expression,Statements,Postfix,Break,Continue'),
			Xor:createRule('Expression,Postfix'),
			XorAssignment:createRule('Expression'),		
			ZeroRightShift:createRule('Expression,Postfix'),
			ZeroRightShiftAssignment:createRule('Expression')										
	};		
	
	function createRule(rules) {
		rules = rules.split(',');
		var expression = {
			ArrayClose:1,AccessorClose:1,False:1,FunctionCallClose:1,FunctionExpressionCurlyClose:1,Identifier:1,'Infinity':1,
			'NaN':1,Number:1,Null:1,ObjectLiteralCurlyClose:1,ParenExpressionClose:1,RegExp:1,String:1,This:1,True:1,Undefined:1,
			VarIdentifier:1
		},
		prefix = {
			Not:1,BitwiseNot:1,UnaryMinus:1,UnaryPlus:1,PrefixDeincrement:1,PrefixIncrement:1
		},
		postfix = {
			PostfixIncrement:1,PostfixDeincrement:1
		},
		operators = {
			In:1,InstanceOf:1,
			Addition:1,DivideOperator:1,Equal:1,NotEqual:1,StrictEqual:1,StrictNotEqual:1,
			LogicalOr:1,BitwiseOr:1,Xor:1,Modulus:1,LogicalAnd:1,BitwiseAnd:1,ZeroRightShift:1,
			RightShift:1,GreaterThan:1,GreaterThanEqual:1,LeftShift:1,LessThan:1,LessThanEqual:1,
			Multiply:1,Minus:1,EqualAssignment:1,AdditionAssignment:1,OrAssignment:1,XorAssignment:1,ModulusAssignment:1,AndAssignment:1,
			ZeroRightShiftAssignment:1,RightShiftAssignment:1,LeftShiftAssignment:1,MultiplyAssignment:1,MinusAssignment:1,
			AssignmentDivide:1
		},			
		statements = {
			Nothing:1,EndStatement:1,BlockStatementCurlyClose:1,DoStatementCurlyClose:1,CatchStatementCurlyClose:1,
			ElseCurlyClose:1,FinallyStatementCurlyClose:1,FunctionStatementCurlyClose:1,IfStatementCurlyClose:1,
			SwitchStatementCurlyClose:1,TryStatementCurlyClose:1,WithStatementCurlyClose:1,WhileStatementCurlyClose:1,
			BlockStatementCurlyOpen:1,DoStatementCurlyOpen:1,CatchStatementCurlyOpen:1,
			ElseCurlyOpen:1,FinallyStatementCurlyOpen:1,FunctionStatementCurlyOpen:1,IfStatementCurlyOpen:1,
			SwitchStatementCurlyOpen:1,TryStatementCurlyOpen:1,WithStatementCurlyOpen:1,WhileStatementCurlyOpen:1,
			FunctionExpressionCurlyOpen:1,ForStatementCurlyOpen:1,ForStatementCurlyClose:1,
			IfStatementParenClose:1,SwitchStatementParenClose:1,WithStatementParenClose:1,
			WhileStatementParenClose:1,ForStatementParenClose:1,LabelColon:1,Return:1,Else:1,SwitchColon:1,Do:1
		},
		newExpressions = {
			Comma:1, ArrayComma:1,VarComma:1,ForStatementParenOpen:1,IfStatementParenOpen:1,SwitchStatementParenOpen:1,
			WithStatementParenOpen:1,WhileStatementParenOpen:1,FunctionCallOpen:1,ParenExpressionOpen:1,
			ArrayOpen:1,AccessorOpen:1,Case:1,Return:1,New:1,TypeOf:1,Delete:1,Void:1,ObjectLiteralColon:1,
			TernaryQuestionMark:1,TernaryColon:1,ForSemi:1,Continue:1,Break:1,Throw:1
		},	 
		obj = Object.create(null), i, k;		
		for(i=0;i<rules.length;i++) {
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
	};			
	  
    window.MentalJS = function() {
        function Mental() {
            this.parse = function(obj) {
                
                if(!Object.defineProperty) {
                    error("MentalJS requires ES5. Please upgrade your browser.");
                }
                            
                var parseTreeOutput = '', converted, result, that = this,                                         
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
                    function error(str) {
                        var e = Error();                                                                                       
                        throw {
                            msg: str+(e.stack?' - '+e.stack:''),
                            pos: pos,
                            chr: typeof chr == 'undefined' ? '(end)' : chr,
                            state: parseTreeOutput,
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
                                '$innerText$': {configurable:true, get:function(){return this.innerText;},set:function(innerText){
                                        if(this.tagName.toLowerCase()==='style'){
                                            /*todo css parsing*/return false;
                                         };
                                         this.innerText = innerText;
                                        }
                                },
                                '$innerHTML$': {configurable:true, get:function(){return this.innerHTML}, set:function(innerHTML){
                                    if(this.tagName.toLowerCase()==='style'){
                                        /*todo css parsing*/return false;
                                     };
                                    var doc, elements, element, i, j, tags, attrs;
                                    doc = document.implementation.createHTMLDocument('');
                                    doc.body.innerHTML = innerHTML;                                    
                                    tags = doc.body.getElementsByTagName('*'); 
                                                                       
                                    for(i = 0; i < tags.length;i++) {
                                        element = tags[i];                                        
                                        if(!(element.attributes instanceof NamedNodeMap)) {
                                           doc.body.removeChild(element);
                                           continue; 
                                        }                                        
                                        if(element.tagName.toLowerCase() === 'style') {
                                            while ( element.firstChild ) element.removeChild( element.firstChild );
                                        }                                         
                                        attrs = [];                                        
                                        for(j=0;j<element.attributes.length;j++) {                                            
                                            if(attributeWhitelist.test(element.attributes[j].name)) {
                                                attrs.push({name:element.attributes[j].name,value:element.attributes[j].value});
                                            }                                                                                                                                                                                                                                                                     
                                        } 
                                        for (j= element.attributes.length; --j>=0;)
                                        element.removeAttributeNode(element.attributes[j]);
                                        
                                        for(j=0;j<attrs.length;j++) {
                                           element.setAttribute(attrs[j].name, attrs[j].value);                                                                                                                                       
                                        }
                                        if(element.firstChild && element.firstChild.nodeType === 3) {
                                           element.firstChild.nodeValue = ' ';
                                        } else {                                        
                                            element.appendChild(doc.createTextNode(' '));
                                        }                                                                                                                                                                                                                                              
                                    }                                                                                                                                                                                            
                                    return this.innerHTML = new XMLSerializer().serializeToString(doc.body); 
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
					var scoping = '$', pos = 0, chr, parentState, parentStates = {}, states, msg, state = 'Nothing', left = 0, output = '', outputLine = '', 
					last, next, next2, next3, next4, next5, next6, next7, next8, next9, next10,
					unicodeChr1, unicodeChr2, unicodeChr3, unicodeChr4,
					previous, previous2, previous3, previous4,previous5,				
					length = code.length, parseTree = that.parseTree,
					lookupSquare = 0, lookupCurly = 0, lookupParen = 0, ternaryCount = 0, isTernary = {}, caseCount = 0, isCase = {}, isVar = {},
					isFor = {}, isForIn = {},  isIf = {}, isObjectLiteral = {},																
					expected = 0, expect = 0, expected2 = 0, expected3 = 0, expected4 = 0, lastState = 'Nothing', newLineFlag = 0,
					SQUARE_OPEN = 91, SQUARE_CLOSE = 93, PAREN_OPEN = 40, PAREN_CLOSE = 41,
					CURLY_OPEN = 123, CURLY_CLOSE = 125,
					LOWER_A = 97, LOWER_B = 98, LOWER_C = 99, LOWER_D = 100, LOWER_E = 101,
					LOWER_F = 102, LOWER_G = 103, LOWER_H = 104, LOWER_I = 105, LOWER_J = 106,
					LOWER_K = 107, LOWER_L = 108, LOWER_M = 109, LOWER_N = 110, LOWER_O = 111,
					LOWER_P = 112, LOWER_Q = 113, LOWER_R = 114, LOWER_S = 115, LOWER_T = 116,
					LOWER_U = 117, LOWER_V = 118, LOWER_W = 119, LOWER_X = 120, LOWER_Y = 121,
					LOWER_Z = 122,
					UPPER_A = 65, UPPER_B = 66, UPPER_C = 67, UPPER_D = 68, UPPER_E = 69,
					UPPER_F = 70, UPPER_G = 71, UPPER_H = 72, UPPER_I = 73, UPPER_J = 74,
					UPPER_K = 75, UPPER_L = 76, UPPER_M = 77, UPPER_N = 78, UPPER_O = 79,
					UPPER_P = 80, UPPER_Q = 81, UPPER_R = 82, UPPER_S = 83, UPPER_T = 84,
					UPPER_U = 85, UPPER_V = 86, UPPER_W = 87, UPPER_X = 88, UPPER_Y = 89,
					UPPER_Z = 90,
					DIGIT_0 = 48, DIGIT_1 = 49, DIGIT_2 = 50, DIGIT_3 = 51, DIGIT_4 = 52, DIGIT_5 = 53,
					DIGIT_6 = 54, DIGIT_7 = 55, DIGIT_8 = 56, DIGIT_9 = 57, 
					DOLLAR = 36, UNDERSCORE = 95, SINGLE_QUOTE = 39, DOUBLE_QUOTE = 34,
					FORWARD_SLASH = 47, BACKSLASH = 92, ASTERIX = 42, EQUAL = 61, CARET = 94,
					COLON = 58, QUESTION_MARK = 63, COMMA = 44, PERIOD = 46, SEMI_COLON = 59,
					EXCLAMATION_MARK = 33, 	TILDE = 126, PLUS = 43, MINUS = 45,
					AMPERSAND = 38, PIPE = 124, GREATER_THAN = 62, LESS_THAN = 60,
					PERCENT = 37,
					NEWLINE = 10, CARRIAGE_RETURN = 13, LINE_SEPARATOR = 8232, PARAGRAPH_SEPARATOR = 8233,
					timers = [], start, end, parseTreeFlag = !!that.parseTree, completeFlag = !!that.complete,
					convertedFlag = !!that.converted, parseTimesFlag = !!that.parseTimes, 
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
                        if(isFor[''+lookupSquare+lookupCurly+(lookupParen-1)] && !isForIn[''+lookupSquare+lookupCurly+(lookupParen-1)]) {
                            lastState = 'ForSemi';
                            if(useOutput) { 
                                output = output + ';';
                            } else {
                                outputLine = outputLine + ';';
                            }
                            if(isFor[''+lookupSquare+lookupCurly+(lookupParen-1)] > 2) {
                                error("Syntax error unexpected for semi ;");
                            }
                            isFor[''+lookupSquare+lookupCurly+(lookupParen-1)]++;
                            isVar[''+lookupSquare+lookupCurly+lookupParen] = 0;                             
                          } else { 
                            if(useOutput) {                                                                                      
                               output = output + ';';
                            } else {
                               outputLine = ';' + outputLine;
                            }
                            lastState = 'EndStatement';
                            left = 0;
                            isVar[''+lookupSquare+lookupCurly+lookupParen] = 0;                               
                          }
                    }; 					
					function isValidVariable(c) {
				    	if(c > 0x80) {
				    		if(c===170||c===181||c===186||c>=192&&c<=214||c>=216&&c<=246||c>=248&&c<=705||c>=710&&c<=721||c>=736&&c<=740||c===748||c===750||c>=880&&c<=884||c>=886&&c<=887||c>=890&&c<=893||c===902||c>=904&&c<=906||c===908||c>=910&&c<=929||c>=931&&c<=1013||c>=1015&&c<=1153||c>=1162&&c<=1319||c>=1329&&c<=1366||c===1369||c>=1377&&c<=1415||c>=1488&&c<=1514||c>=1520&&c<=1522||c>=1568&&c<=1610||c>=1646&&c<=1647||c>=1649&&c<=1747||c===1749||c>=1765&&c<=1766||c>=1774&&c<=1775||c>=1786&&c<=1788||c===1791||c===1808||c>=1810&&c<=1839||c>=1869&&c<=1957||c===1969||c>=1994&&c<=2026||c>=2036&&c<=2037||c===2042||c>=2048&&c<=2069||c===2074||c===2084||c===2088||c>=2112&&c<=2136||c===2208||c>=2210&&c<=2220||c>=2308&&c<=2361||c===2365||c===2384||c>=2392&&c<=2401||c>=2417&&c<=2423||c>=2425&&c<=2431||c>=2437&&c<=2444||c>=2447&&c<=2448||c>=2451&&c<=2472||c>=2474&&c<=2480||c===2482||c>=2486&&c<=2489||c===2493||c===2510||c>=2524&&c<=2525||c>=2527&&c<=2529||c>=2544&&c<=2545||c>=2565&&c<=2570||c>=2575&&c<=2576||c>=2579&&c<=2600||c>=2602&&c<=2608||c>=2610&&c<=2611||c>=2613&&c<=2614||c>=2616&&c<=2617||c>=2649&&c<=2652||c===2654||c>=2674&&c<=2676||c>=2693&&c<=2701||c>=2703&&c<=2705||c>=2707&&c<=2728||c>=2730&&c<=2736||c>=2738&&c<=2739||c>=2741&&c<=2745||c===2749||c===2768||c>=2784&&c<=2785||c>=2821&&c<=2828||c>=2831&&c<=2832||c>=2835&&c<=2856||c>=2858&&c<=2864||c>=2866&&c<=2867||c>=2869&&c<=2873||c===2877||c>=2908&&c<=2909||c>=2911&&c<=2913||c===2929||c===2947||c>=2949&&c<=2954||c>=2958&&c<=2960||c>=2962&&c<=2965||c>=2969&&c<=2970||c===2972||c>=2974&&c<=2975||c>=2979&&c<=2980||c>=2984&&c<=2986||c>=2990&&c<=3001||c===3024||c>=3077&&c<=3084||c>=3086&&c<=3088||c>=3090&&c<=3112||c>=3114&&c<=3123||c>=3125&&c<=3129||c===3133||c>=3160&&c<=3161||c>=3168&&c<=3169||c>=3205&&c<=3212||c>=3214&&c<=3216||c>=3218&&c<=3240||c>=3242&&c<=3251||c>=3253&&c<=3257||c===3261||c===3294||c>=3296&&c<=3297||c>=3313&&c<=3314||c>=3333&&c<=3340||c>=3342&&c<=3344||c>=3346&&c<=3386||c===3389||c===3406||c>=3424&&c<=3425||c>=3450&&c<=3455||c>=3461&&c<=3478||c>=3482&&c<=3505||c>=3507&&c<=3515||c===3517||c>=3520&&c<=3526||c>=3585&&c<=3632||c>=3634&&c<=3635||c>=3648&&c<=3654||c>=3713&&c<=3714||c===3716||c>=3719&&c<=3720||c===3722||c===3725||c>=3732&&c<=3735||c>=3737&&c<=3743||c>=3745&&c<=3747||c===3749||c===3751||c>=3754&&c<=3755||c>=3757&&c<=3760||c>=3762&&c<=3763||c===3773||c>=3776&&c<=3780||c===3782||c>=3804&&c<=3807||c===3840||c>=3904&&c<=3911||c>=3913&&c<=3948||c>=3976&&c<=3980||c>=4096&&c<=4138||c===4159||c>=4176&&c<=4181||c>=4186&&c<=4189||c===4193||c>=4197&&c<=4198||c>=4206&&c<=4208||c>=4213&&c<=4225||c===4238||c>=4256&&c<=4293||c===4295||c===4301||c>=4304&&c<=4346||c>=4348&&c<=4680||c>=4682&&c<=4685||c>=4688&&c<=4694||c===4696||c>=4698&&c<=4701||c>=4704&&c<=4744||c>=4746&&c<=4749||c>=4752&&c<=4784||c>=4786&&c<=4789||c>=4792&&c<=4798||c===4800||c>=4802&&c<=4805||c>=4808&&c<=4822||c>=4824&&c<=4880||c>=4882&&c<=4885||c>=4888&&c<=4954||c>=4992&&c<=5007||c>=5024&&c<=5108||c>=5121&&c<=5740||c>=5743&&c<=5759||c>=5761&&c<=5786||c>=5792&&c<=5866||c>=5870&&c<=5872||c>=5888&&c<=5900||c>=5902&&c<=5905||c>=5920&&c<=5937||c>=5952&&c<=5969||c>=5984&&c<=5996||c>=5998&&c<=6000||c>=6016&&c<=6067||c===6103||c===6108||c>=6176&&c<=6263||c>=6272&&c<=6312||c===6314||c>=6320&&c<=6389||c>=6400&&c<=6428||c>=6480&&c<=6509||c>=6512&&c<=6516||c>=6528&&c<=6571||c>=6593&&c<=6599||c>=6656&&c<=6678||c>=6688&&c<=6740||c===6823||c>=6917&&c<=6963||c>=6981&&c<=6987||c>=7043&&c<=7072||c>=7086&&c<=7087||c>=7098&&c<=7141||c>=7168&&c<=7203||c>=7245&&c<=7247||c>=7258&&c<=7293||c>=7401&&c<=7404||c>=7406&&c<=7409||c>=7413&&c<=7414||c>=7424&&c<=7615||c>=7680&&c<=7957||c>=7960&&c<=7965||c>=7968&&c<=8005||c>=8008&&c<=8013||c>=8016&&c<=8023||c===8025||c===8027||c===8029||c>=8031&&c<=8061||c>=8064&&c<=8116||c>=8118&&c<=8124||c===8126||c>=8130&&c<=8132||c>=8134&&c<=8140||c>=8144&&c<=8147||c>=8150&&c<=8155||c>=8160&&c<=8172||c>=8178&&c<=8180||c>=8182&&c<=8188||c===8305||c===8319||c>=8336&&c<=8348||c===8450||c===8455||c>=8458&&c<=8467||c===8469||c>=8473&&c<=8477||c===8484||c===8486||c===8488||c>=8490&&c<=8493||c>=8495&&c<=8505||c>=8508&&c<=8511||c>=8517&&c<=8521||c===8526||c>=8544&&c<=8584||c>=11264&&c<=11310||c>=11312&&c<=11358||c>=11360&&c<=11492||c>=11499&&c<=11502||c>=11506&&c<=11507||c>=11520&&c<=11557||c===11559||c===11565||c>=11568&&c<=11623||c===11631||c>=11648&&c<=11670||c>=11680&&c<=11686||c>=11688&&c<=11694||c>=11696&&c<=11702||c>=11704&&c<=11710||c>=11712&&c<=11718||c>=11720&&c<=11726||c>=11728&&c<=11734||c>=11736&&c<=11742||c===11823||c>=12293&&c<=12295||c>=12321&&c<=12329||c>=12337&&c<=12341||c>=12344&&c<=12348||c>=12353&&c<=12438||c>=12445&&c<=12447||c>=12449&&c<=12538||c>=12540&&c<=12543||c>=12549&&c<=12589||c>=12593&&c<=12686||c>=12704&&c<=12730||c>=12784&&c<=12799||c>=13312&&c<=19893||c>=19968&&c<=40908||c>=40960&&c<=42124||c>=42192&&c<=42237||c>=42240&&c<=42508||c>=42512&&c<=42527||c>=42538&&c<=42539||c>=42560&&c<=42606||c>=42623&&c<=42647||c>=42656&&c<=42735||c>=42775&&c<=42783||c>=42786&&c<=42888||c>=42891&&c<=42894||c>=42896&&c<=42899||c>=42912&&c<=42922||c>=43000&&c<=43009||c>=43011&&c<=43013||c>=43015&&c<=43018||c>=43020&&c<=43042||c>=43072&&c<=43123||c>=43138&&c<=43187||c>=43250&&c<=43255||c===43259||c>=43274&&c<=43301||c>=43312&&c<=43334||c>=43360&&c<=43388||c>=43396&&c<=43442||c===43471||c>=43520&&c<=43560||c>=43584&&c<=43586||c>=43588&&c<=43595||c>=43616&&c<=43638||c===43642||c>=43648&&c<=43695||c===43697||c>=43701&&c<=43702||c>=43705&&c<=43709||c===43712||c===43714||c>=43739&&c<=43741||c>=43744&&c<=43754||c>=43762&&c<=43764||c>=43777&&c<=43782||c>=43785&&c<=43790||c>=43793&&c<=43798||c>=43808&&c<=43814||c>=43816&&c<=43822||c>=43968&&c<=44002||c>=44032&&c<=55203||c>=55216&&c<=55238||c>=55243&&c<=55291||c>=63744&&c<=64109||c>=64112&&c<=64217||c>=64256&&c<=64262||c>=64275&&c<=64279||c===64285||c>=64287&&c<=64296||c>=64298&&c<=64310||c>=64312&&c<=64316||c===64318||c>=64320&&c<=64321||c>=64323&&c<=64324||c>=64326&&c<=64433||c>=64467&&c<=64829||c>=64848&&c<=64911||c>=64914&&c<=64967||c>=65008&&c<=65019||c>=65136&&c<=65140||c>=65142&&c<=65276||c>=65313&&c<=65338||c>=65345&&c<=65370||c>=65382&&c<=65470||c>=65474&&c<=65479||c>=65482&&c<=65487||c>=65490&&c<=65495||c>=65498&&c<=65500) {
				    			return 1;
				    		} else {
				    			return 0;
				    		}
				    	} else {
				    		return 0;
				    	}
				    }
				    function isValidVariablePart(c) {
				    	if(c > 0x80) {
				    		if(c===170||c===181||c===186||c>=192&&c<=214||c>=216&&c<=246||c>=248&&c<=705||c>=710&&c<=721||c>=736&&c<=740||c===748||c===750||c>=768&&c<=884||c>=886&&c<=887||c>=890&&c<=893||c===902||c>=904&&c<=906||c===908||c>=910&&c<=929||c>=931&&c<=1013||c>=1015&&c<=1153||c>=1155&&c<=1159||c>=1162&&c<=1319||c>=1329&&c<=1366||c===1369||c>=1377&&c<=1415||c>=1425&&c<=1469||c===1471||c>=1473&&c<=1474||c>=1476&&c<=1477||c===1479||c>=1488&&c<=1514||c>=1520&&c<=1522||c>=1552&&c<=1562||c>=1568&&c<=1641||c>=1646&&c<=1747||c>=1749&&c<=1756||c>=1759&&c<=1768||c>=1770&&c<=1788||c===1791||c>=1808&&c<=1866||c>=1869&&c<=1969||c>=1984&&c<=2037||c===2042||c>=2048&&c<=2093||c>=2112&&c<=2139||c===2208||c>=2210&&c<=2220||c>=2276&&c<=2302||c>=2304&&c<=2403||c>=2406&&c<=2415||c>=2417&&c<=2423||c>=2425&&c<=2431||c>=2433&&c<=2435||c>=2437&&c<=2444||c>=2447&&c<=2448||c>=2451&&c<=2472||c>=2474&&c<=2480||c===2482||c>=2486&&c<=2489||c>=2492&&c<=2500||c>=2503&&c<=2504||c>=2507&&c<=2510||c===2519||c>=2524&&c<=2525||c>=2527&&c<=2531||c>=2534&&c<=2545||c>=2561&&c<=2563||c>=2565&&c<=2570||c>=2575&&c<=2576||c>=2579&&c<=2600||c>=2602&&c<=2608||c>=2610&&c<=2611||c>=2613&&c<=2614||c>=2616&&c<=2617||c===2620||c>=2622&&c<=2626||c>=2631&&c<=2632||c>=2635&&c<=2637||c===2641||c>=2649&&c<=2652||c===2654||c>=2662&&c<=2677||c>=2689&&c<=2691||c>=2693&&c<=2701||c>=2703&&c<=2705||c>=2707&&c<=2728||c>=2730&&c<=2736||c>=2738&&c<=2739||c>=2741&&c<=2745||c>=2748&&c<=2757||c>=2759&&c<=2761||c>=2763&&c<=2765||c===2768||c>=2784&&c<=2787||c>=2790&&c<=2799||c>=2817&&c<=2819||c>=2821&&c<=2828||c>=2831&&c<=2832||c>=2835&&c<=2856||c>=2858&&c<=2864||c>=2866&&c<=2867||c>=2869&&c<=2873||c>=2876&&c<=2884||c>=2887&&c<=2888||c>=2891&&c<=2893||c>=2902&&c<=2903||c>=2908&&c<=2909||c>=2911&&c<=2915||c>=2918&&c<=2927||c===2929||c>=2946&&c<=2947||c>=2949&&c<=2954||c>=2958&&c<=2960||c>=2962&&c<=2965||c>=2969&&c<=2970||c===2972||c>=2974&&c<=2975||c>=2979&&c<=2980||c>=2984&&c<=2986||c>=2990&&c<=3001||c>=3006&&c<=3010||c>=3014&&c<=3016||c>=3018&&c<=3021||c===3024||c===3031||c>=3046&&c<=3055||c>=3073&&c<=3075||c>=3077&&c<=3084||c>=3086&&c<=3088||c>=3090&&c<=3112||c>=3114&&c<=3123||c>=3125&&c<=3129||c>=3133&&c<=3140||c>=3142&&c<=3144||c>=3146&&c<=3149||c>=3157&&c<=3158||c>=3160&&c<=3161||c>=3168&&c<=3171||c>=3174&&c<=3183||c>=3202&&c<=3203||c>=3205&&c<=3212||c>=3214&&c<=3216||c>=3218&&c<=3240||c>=3242&&c<=3251||c>=3253&&c<=3257||c>=3260&&c<=3268||c>=3270&&c<=3272||c>=3274&&c<=3277||c>=3285&&c<=3286||c===3294||c>=3296&&c<=3299||c>=3302&&c<=3311||c>=3313&&c<=3314||c>=3330&&c<=3331||c>=3333&&c<=3340||c>=3342&&c<=3344||c>=3346&&c<=3386||c>=3389&&c<=3396||c>=3398&&c<=3400||c>=3402&&c<=3406||c===3415||c>=3424&&c<=3427||c>=3430&&c<=3439||c>=3450&&c<=3455||c>=3458&&c<=3459||c>=3461&&c<=3478||c>=3482&&c<=3505||c>=3507&&c<=3515||c===3517||c>=3520&&c<=3526||c===3530||c>=3535&&c<=3540||c===3542||c>=3544&&c<=3551||c>=3570&&c<=3571||c>=3585&&c<=3642||c>=3648&&c<=3662||c>=3664&&c<=3673||c>=3713&&c<=3714||c===3716||c>=3719&&c<=3720||c===3722||c===3725||c>=3732&&c<=3735||c>=3737&&c<=3743||c>=3745&&c<=3747||c===3749||c===3751||c>=3754&&c<=3755||c>=3757&&c<=3769||c>=3771&&c<=3773||c>=3776&&c<=3780||c===3782||c>=3784&&c<=3789||c>=3792&&c<=3801||c>=3804&&c<=3807||c===3840||c>=3864&&c<=3865||c>=3872&&c<=3881||c===3893||c===3895||c===3897||c>=3902&&c<=3911||c>=3913&&c<=3948||c>=3953&&c<=3972||c>=3974&&c<=3991||c>=3993&&c<=4028||c===4038||c>=4096&&c<=4169||c>=4176&&c<=4253||c>=4256&&c<=4293||c===4295||c===4301||c>=4304&&c<=4346||c>=4348&&c<=4680||c>=4682&&c<=4685||c>=4688&&c<=4694||c===4696||c>=4698&&c<=4701||c>=4704&&c<=4744||c>=4746&&c<=4749||c>=4752&&c<=4784||c>=4786&&c<=4789||c>=4792&&c<=4798||c===4800||c>=4802&&c<=4805||c>=4808&&c<=4822||c>=4824&&c<=4880||c>=4882&&c<=4885||c>=4888&&c<=4954||c>=4957&&c<=4959||c>=4992&&c<=5007||c>=5024&&c<=5108||c>=5121&&c<=5740||c>=5743&&c<=5759||c>=5761&&c<=5786||c>=5792&&c<=5866||c>=5870&&c<=5872||c>=5888&&c<=5900||c>=5902&&c<=5908||c>=5920&&c<=5940||c>=5952&&c<=5971||c>=5984&&c<=5996||c>=5998&&c<=6000||c>=6002&&c<=6003||c>=6016&&c<=6099||c===6103||c>=6108&&c<=6109||c>=6112&&c<=6121||c>=6155&&c<=6157||c>=6160&&c<=6169||c>=6176&&c<=6263||c>=6272&&c<=6314||c>=6320&&c<=6389||c>=6400&&c<=6428||c>=6432&&c<=6443||c>=6448&&c<=6459||c>=6470&&c<=6509||c>=6512&&c<=6516||c>=6528&&c<=6571||c>=6576&&c<=6601||c>=6608&&c<=6617||c>=6656&&c<=6683||c>=6688&&c<=6750||c>=6752&&c<=6780||c>=6783&&c<=6793||c>=6800&&c<=6809||c===6823||c>=6912&&c<=6987||c>=6992&&c<=7001||c>=7019&&c<=7027||c>=7040&&c<=7155||c>=7168&&c<=7223||c>=7232&&c<=7241||c>=7245&&c<=7293||c>=7376&&c<=7378||c>=7380&&c<=7414||c>=7424&&c<=7654||c>=7676&&c<=7957||c>=7960&&c<=7965||c>=7968&&c<=8005||c>=8008&&c<=8013||c>=8016&&c<=8023||c===8025||c===8027||c===8029||c>=8031&&c<=8061||c>=8064&&c<=8116||c>=8118&&c<=8124||c===8126||c>=8130&&c<=8132||c>=8134&&c<=8140||c>=8144&&c<=8147||c>=8150&&c<=8155||c>=8160&&c<=8172||c>=8178&&c<=8180||c>=8182&&c<=8188||c>=8204&&c<=8205||c>=8255&&c<=8256||c===8276||c===8305||c===8319||c>=8336&&c<=8348||c>=8400&&c<=8412||c===8417||c>=8421&&c<=8432||c===8450||c===8455||c>=8458&&c<=8467||c===8469||c>=8473&&c<=8477||c===8484||c===8486||c===8488||c>=8490&&c<=8493||c>=8495&&c<=8505||c>=8508&&c<=8511||c>=8517&&c<=8521||c===8526||c>=8544&&c<=8584||c>=11264&&c<=11310||c>=11312&&c<=11358||c>=11360&&c<=11492||c>=11499&&c<=11507||c>=11520&&c<=11557||c===11559||c===11565||c>=11568&&c<=11623||c===11631||c>=11647&&c<=11670||c>=11680&&c<=11686||c>=11688&&c<=11694||c>=11696&&c<=11702||c>=11704&&c<=11710||c>=11712&&c<=11718||c>=11720&&c<=11726||c>=11728&&c<=11734||c>=11736&&c<=11742||c>=11744&&c<=11775||c===11823||c>=12293&&c<=12295||c>=12321&&c<=12335||c>=12337&&c<=12341||c>=12344&&c<=12348||c>=12353&&c<=12438||c>=12441&&c<=12442||c>=12445&&c<=12447||c>=12449&&c<=12538||c>=12540&&c<=12543||c>=12549&&c<=12589||c>=12593&&c<=12686||c>=12704&&c<=12730||c>=12784&&c<=12799||c>=13312&&c<=19893||c>=19968&&c<=40908||c>=40960&&c<=42124||c>=42192&&c<=42237||c>=42240&&c<=42508||c>=42512&&c<=42539||c>=42560&&c<=42607||c>=42612&&c<=42621||c>=42623&&c<=42647||c>=42655&&c<=42737||c>=42775&&c<=42783||c>=42786&&c<=42888||c>=42891&&c<=42894||c>=42896&&c<=42899||c>=42912&&c<=42922||c>=43000&&c<=43047||c>=43072&&c<=43123||c>=43136&&c<=43204||c>=43216&&c<=43225||c>=43232&&c<=43255||c===43259||c>=43264&&c<=43309||c>=43312&&c<=43347||c>=43360&&c<=43388||c>=43392&&c<=43456||c>=43471&&c<=43481||c>=43520&&c<=43574||c>=43584&&c<=43597||c>=43600&&c<=43609||c>=43616&&c<=43638||c>=43642&&c<=43643||c>=43648&&c<=43714||c>=43739&&c<=43741||c>=43744&&c<=43759||c>=43762&&c<=43766||c>=43777&&c<=43782||c>=43785&&c<=43790||c>=43793&&c<=43798||c>=43808&&c<=43814||c>=43816&&c<=43822||c>=43968&&c<=44010||c>=44012&&c<=44013||c>=44016&&c<=44025||c>=44032&&c<=55203||c>=55216&&c<=55238||c>=55243&&c<=55291||c>=63744&&c<=64109||c>=64112&&c<=64217||c>=64256&&c<=64262||c>=64275&&c<=64279||c>=64285&&c<=64296||c>=64298&&c<=64310||c>=64312&&c<=64316||c===64318||c>=64320&&c<=64321||c>=64323&&c<=64324||c>=64326&&c<=64433||c>=64467&&c<=64829||c>=64848&&c<=64911||c>=64914&&c<=64967||c>=65008&&c<=65019||c>=65024&&c<=65039||c>=65056&&c<=65062||c>=65075&&c<=65076||c>=65101&&c<=65103||c>=65136&&c<=65140||c>=65142&&c<=65276||c>=65296&&c<=65305||c>=65313&&c<=65338||c===65343||c>=65345&&c<=65370||c>=65382&&c<=65470||c>=65474&&c<=65479||c>=65482&&c<=65487||c>=65490&&c<=65495||c>=65498&&c<=65500) {
				    			return 0;
				    		} else {
				    			return 0;
				    		}
				    	} else {
				    		return 0;
				    	}
				    }	
					
					if(browserCheckSyntaxFlag) {
					   checkSyntax(code);
					}
									
					for(;;) {
					    if(parseTimesFlag) {   
					       start = +new Date;
					    }
						outputLine = '';					
						if(pos >= length) {						
							break;
						}	
						state = 'Nothing';
						if(expected || expected2 || expected3 || expected4) {
							expect = 1;
						}									
						chr = code.charCodeAt(pos);
						next = code.charCodeAt(pos+1);
						
						if(chr === FORWARD_SLASH) {
                            if(!left && next !== ASTERIX && next !== FORWARD_SLASH && lastState !== 'VarIdentifier') {                                                                                                                               
                                states = {escaping: 0, complete: 0, open: 0, square: 0, flags: {}};       
                                state = 'RegExp';
                                left = 1;               
                                states.open = 1;                                                               
                                outputLine = outputLine + '/';                              
                                pos++;                  
                                while(1) {
                                    chr = code.charCodeAt(pos);
                                    next = code.charCodeAt(pos+1);                            
                                    if(chr === FORWARD_SLASH && !states.escaping && !states.square) {
                                        states.open = 0;
                                        if(next !== LOWER_I && next !== LOWER_M && next !== LOWER_G) {
                                            states.complete = 1;
                                        }
                                    } else if(chr === FORWARD_SLASH && !states.escaping && states.square) {
                                        outputLine = outputLine + '\\';           
                                    } else if(chr === PAREN_OPEN && !states.escaping && states.square) {
                                         outputLine = outputLine + '\\';
                                    } else if(chr === PAREN_CLOSE && !states.escaping && states.square) {
                                        outputLine = outputLine + '\\';                                 
                                    } else if(chr === SQUARE_OPEN && !states.escaping && states.square) {                
                                        outputLine = outputLine + '\\';
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
                                    } else if(chr === NEWLINE || chr === CARRIAGE_RETURN || chr === LINE_SEPARATOR || chr === PARAGRAPH_SEPARATOR) {
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
                                    if(pos + 1 > length && states.open) {               
                                        error("Unterminated regex literal");
                                    }
                                    
                                    if(pos + 1 > length) { 
                                        break;
                                    }                               
                                    outputLine = outputLine + code.charAt(pos);                             
                                    pos++;
                                    if(states.complete) {                                                     
                                        break;
                                    }
                                }   
                            } else if(next === FORWARD_SLASH) {
                                states = {complete:0};                        
                                pos+=2;                 
                                for(;;) {                                   
                                    chr = code.charCodeAt(pos);
                                    if(chr === NEWLINE || chr === CARRIAGE_RETURN || chr === LINE_SEPARATOR || chr === PARAGRAPH_SEPARATOR) {
                                        states.complete = 1;
                                    }
                                    if(pos + 1 > length) {
                                        break;
                                    }                               
                                    pos++;
                                    if(states.complete) {
                                        break;
                                    }
                                }
                                continue;                              
                            } else if(next === ASTERIX) {                           
                                pos += 2;                 
                                for(;;) {                                   
                                    chr = code.charCodeAt(pos);
                                    next = code.charCodeAt(pos+1);                          
                                    if(chr === ASTERIX && next === FORWARD_SLASH) {                                                 
                                        pos+=2;
                                        break;
                                    }           
                                    if(pos + 1 > length) {             
                                        error("Unterminated multiline comment");
                                    }                               
                                    pos++;                              
                                } 
                                continue;  
                            } else if((lastState === 'VarIdentifier' || left) && next !== FORWARD_SLASH) {
                                left = 0;
                                if(next === EQUAL) {
                                    state = 'AssignmentDivide';
                                    pos+=2;
                                    last = EQUAL;
                                    outputLine = outputLine + '/='; 
                                } else {
                                    state = 'DivideOperator';
                                    pos++;
                                    last = FORWARD_SLASH;
                                    outputLine = outputLine + ' / ';    
                                }
                            } else {
                                error('Unexpected /. Cannot follow '+lastState+'.Output:'+output);
                            }
					    } else if(chr === NEWLINE || chr === CARRIAGE_RETURN || chr === LINE_SEPARATOR || chr === PARAGRAPH_SEPARATOR) {                                                   
                            newLineFlag = 1;
                            pos++;                            
                            if(lastState === 'Break' || lastState === 'Continue' || lastState === 'Return') {
                                asi(true);
                            }
                            continue;   
						} else if(chr === 9 || chr === 11 || chr === 12 || chr === 32 || chr === 160 || chr === 5760 || chr === 6158 || chr === 8192 || chr === 8193 || chr === 8194 || chr === 8195 || chr === 8196 || chr === 8197 || chr === 8198 || chr === 8199 || chr === 8200 || chr === 8201 || chr === 8202 || chr === 8239 || chr === 8287 || chr === 12288) {
							pos++;
							continue;																						
						} else if((chr >= DIGIT_0 && chr <= DIGIT_9) || (!left && chr === PERIOD)) {																														
							if(rules.ObjectLiteralIdentifierNumber[lastState]) {
								state = 'ObjectLiteralIdentifierNumber';
								expected = 'ObjectLiteralColon';
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
								expect = 0;							
							} else if(rules.Number[lastState]) {
								left = 1;
				           	 	state = 'Number';
				          	} else {
				          		if(!rules['Number'][lastState] && newLineFlag) {                                                                                    
                                    asi();
                                    left = 1;                                    
                                    state = 'Number';                                
                                }
				          	}
							
							states = {hex:0, len:0, dot: 0, e:0, complete:0};                        
				            if(chr === DIGIT_0 && (next === UPPER_X || next === LOWER_X)) {
				                states.hex = 2;
				                outputLine = outputLine + '0x';
				                pos+=2;
				                states.len = 2;                
				            }                  
				            for(;;) {				            					            	
				                chr = code.charCodeAt(pos);                
				                next = code.charCodeAt(pos+1);                
				                if(states.len === 0 && chr === DIGIT_0 && (next >= DIGIT_0 && next <= DIGIT_9)) {
				                   pos++;
				                   continue; 
				                } else if(chr >= DIGIT_0 && chr <= DIGIT_9) {				                    
				                	if(states.hex) {
				                		states.hex++;   
				                	} else if(states.e) {
				                	    states.e++;
				                	}
				                } else if(states.hex && ((chr >= LOWER_A && chr <= LOWER_F) || (chr >= UPPER_A && chr <= UPPER_F))) {
				                	states.hex++;         	                                    
				                } else if((chr === LOWER_E || chr === UPPER_E) && next === PLUS && !states.e) {                                                                
				                    outputLine = outputLine + 'e+';
				                    states.e = 1;				                    
				                    pos+=2;
				                    continue;
				                } else if(!states.hex && chr === PERIOD && !states.dot) {                    
				                    if(states.e) {				                        
				                    	break;
				                    }
				                    states.dot = 1;
				                } else if(!states.hex && chr === PERIOD && states.dot) {                	
				                	break;
				                } else if((chr === LOWER_E || chr === UPPER_E) && next === MINUS && !states.e && !states.hex) {
				                	outputLine = outputLine + 'e-';
				                	states.e = 1;
				                    pos+=2;
				                    continue;
				                } else if((chr === LOWER_E || chr === UPPER_E) && (next >= DIGIT_0 && next <= DIGIT_9 || next === PLUS || next === MINUS) && states.e && states.len > 0) {                					                					                					                	
				                	break;
				                } else if((chr === LOWER_E || chr === UPPER_E) && next !== MINUS && next !== PLUS && (next >= DIGIT_0 && next <= DIGIT_9)) {
				                	states.e = 1;                                
				                } else if((chr === LOWER_E || chr === UPPER_E) && next !== MINUS && next !== PLUS && (!(next >= DIGIT_0 && next <= DIGIT_9))) {
				                	error("Missing exponent");                                                                                                                         
				                } else if(!states.hex && (!((chr >= DIGIT_0 && chr <= DIGIT_9) || chr === LOWER_E || chr === UPPER_E)) && states.len > 0) {                       	                     	                                  
				                    break;
				                } else if(!state.hex && (!((chr >= DIGIT_0 && chr <= DIGIT_9) || chr === PERIOD || chr === LOWER_E || chr === UPPER_E)) && states.len === 0) {
				                    error('Invalid number');                                                                     
				                } else {				                    				                	
				                	break;
				                }
				                                                           
				                outputLine = outputLine + code.charAt(pos);
				                pos++;
				                states.len++;                
				                if(states.complete) {				                    
				                    break;
				                }                
				            }  
				            
				            if(chr === PERIOD && states.len === 1) {
				            	error("Syntax error expected number");
				            } else if(states.hex && states.len <= 2) {            	            	
				            	error("Expected hex digit");
				            } else if(states.e === 1) {
				                error("Expected exponent");
				            }                                                                                                                                                                                    																				                                                                                   																																																																			                                                                                                                                                                                                                                                                                     						
                        } else if(chr === PLUS) {
                            if(next === PLUS && left) {
                                state = 'PostfixIncrement';
                                outputLine = outputLine + '++';
                                pos+=2;
                            } else if(next === PLUS && !left) {
                                state = 'PrefixIncrement';
                                outputLine = outputLine + '++';
                                pos+=2;                     
                            } else if(next === EQUAL) {
                                state = 'AdditionAssignment';
                                outputLine = outputLine + '+=';
                                pos+=2;
                            } else if(next !== EQUAL && next !== PLUS && left) {
                                state = 'Addition';
                                outputLine = outputLine + ' + ';
                                pos++;
                            } else if(next !== EQUAL && next !== PLUS && !left) {
                                state = 'UnaryPlus';
                                outputLine = outputLine + '+';
                                pos++;                                                                  
                            } else {
                                error('Unexpected + Cannot follow '+lastState+'.Output:'+output);
                            }
                            left = 0;					
						} else if(chr === SQUARE_OPEN) {			
							if(!left) {
								state = 'ArrayOpen';				
							} else {
								state = 'AccessorOpen';																									
							}			
							outputLine = outputLine + '[';
							if(state === 'AccessorOpen') {
								outputLine = outputLine + 'M.P(';
							}							
							parentStates[''+lookupSquare+lookupCurly+lookupParen] = state;						
							left = 0;
							last = SQUARE_OPEN;
							pos++;
							lookupSquare++;
							parentStates[''+lookupSquare+lookupCurly+lookupParen] = state;						
						} else if(chr === SQUARE_CLOSE) {
							lookupSquare--;			
							parentState = parentStates[''+lookupSquare+lookupCurly+lookupParen];									
							if(parentState === 'ArrayOpen') {
								state = 'ArrayClose';
								left = 1;
							} else if(parentState === 'AccessorOpen') {
								state = 'AccessorClose';
								left = 1;
								outputLine = outputLine + ')';
							} else {				
								error('Unexpected ]. Cannot follow '+lastState+'.Output:'+output);
							}													
							outputLine = outputLine + ']';
							left = 1;
							last = SQUARE_CLOSE;
							pos++;
							parentStates[''+lookupSquare+lookupCurly+lookupParen] = '';							
						} else if(chr === PAREN_OPEN) {																																																																									
							if(lastState === 'FunctionIdentifier') {
								state = 'FunctionParenOpen';
								expect = 0;
								expected = 'FunctionArgumentIdentifier';
								expected2 = 'FunctionParenClose';
								expected3 = 0;
								expected4 = 0;
							} else if(lastState === 'ForStatement') {
								state = 'ForStatementParenOpen';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
							} else if(rules.FunctionCallOpen[lastState]) {
								state = 'FunctionCallOpen';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
							} else if(lastState === 'IfStatement') {
								state = 'IfStatementParenOpen';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;	
							} else if(lastState === 'CatchStatement') {
								state = 'CatchStatementParenOpen';
								expected = 'CatchStatementIdentifier';
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;	
								expect = 0;			
							} else if(lastState === 'WhileStatement') {
								state = 'WhileStatementParenOpen';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
							} else if(lastState === 'SwitchStatement') {
								state = 'SwitchStatementParenOpen';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
							} else if(lastState === 'WithStatement') {
								state = 'WithStatementParenOpen';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
							} else if(lastState === 'FunctionExpressionIdentifier') {
								state = 'FunctionExpressionParenOpen';
								expect = 0;
								expected = 'FunctionExpressionArgumentIdentifier';
								expected2 = 'FunctionExpressionParenClose';
								expected3 = 0;
								expected4 = 0;
							} else if(lastState === 'FunctionExpression') {
								state = 'FunctionExpressionParenOpen';
								expect = 0;
								expected = 'FunctionExpressionArgumentIdentifier';
								expected2 = 'FunctionExpressionParenClose';
								expected3 = 0;
								expected4 = 0;							
							} else if(rules.ParenExpressionOpen[lastState]) {							
								state = 'ParenExpressionOpen';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
							} else {							    
							    if(!rules['Identifier'][lastState] && newLineFlag) {                                                                                    
                                   asi();
                                   state = 'ParenExpressionOpen';
                                   expected = 0;
                                   expected2 = 0;
                                   expected3 = 0;
                                   expected4 = 0;
                                } else {
							       error('Unexpected (. Cannot follow '+lastState+'.Output:'+output);
							    }															
							}												
							outputLine = outputLine + '(';
							last = PAREN_OPEN;
							pos++;
							parentStates[''+lookupSquare+lookupCurly+lookupParen] = state;
							left = 0;
							lookupParen++;
						} else if(chr === PAREN_CLOSE) {
						    isVar[''+lookupSquare+lookupCurly+lookupParen] = 0;				
							lookupParen--;						
							parentState = parentStates[''+lookupSquare+lookupCurly+lookupParen];																																																					
							if(rules.FunctionParenClose[lastState]) {
								state = 'FunctionParenClose';
								expect = 0;
								expected = "FunctionStatementCurlyOpen";
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
							} else if(parentState === 'FunctionCallOpen') {
								state = 'FunctionCallClose';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
								left = 1;
							} else if(parentState === 'ForStatementParenOpen') {
								state = 'ForStatementParenClose';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
								left = 0;
								isFor[''+lookupSquare+lookupCurly+lookupParen] = 0;		
								isForIn[''+lookupSquare+lookupCurly+lookupParen] = 0;		
							} else if(parentState === 'SwitchStatementParenOpen') {
								state = 'SwitchStatementParenClose';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
								left = 0;
							} else if(parentState === 'CatchStatementParenOpen') {
								state = 'CatchStatementParenClose';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
								left = 0;
							} else if(parentState === 'WhileStatementParenOpen') {
								state = 'WhileStatementParenClose';
								expected = "";
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
								left = 0;
							} else if(parentState === 'WithStatementParenOpen') {
								state = 'WithStatementParenClose';
								expected = "";
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
								left = 0;
							} else if(parentState === 'IfStatementParenOpen') {
								state = 'IfStatementParenClose';
								expected = "";
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
								left = 0;
							} else if(rules.FunctionExpressionParenClose[lastState]) {
								state = 'FunctionExpressionParenClose';
								expect = 0;
								expected = "FunctionExpressionCurlyOpen";
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
							} else if(parentState === 'ParenExpressionOpen') {
								state = 'ParenExpressionClose';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
								left = 1;
							} else {																													
								error('Unexpected ). Cannot follow '+lastState+'.Output:'+output);							
							}											
							outputLine = outputLine + ')';
							pos++;
							parentStates[''+lookupSquare+lookupCurly+lookupParen] = '';																		
						} else if(chr === CURLY_OPEN) {																																												
							if(lastState === 'FunctionParenClose') {
								state = 'FunctionStatementCurlyOpen';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
							} else if(lastState === 'Do') {
								state = 'DoStatementCurlyOpen';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
							} else if(lastState === 'Else') {
								state = 'ElseCurlyOpen';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
							} else if(lastState === 'WhileStatementParenClose') {
								state = 'WhileStatementCurlyOpen';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;	
							} else if(lastState === 'CatchStatementParenClose') {
								state = 'CatchStatementCurlyOpen';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
							} else if(lastState === 'ForStatementParenClose') {
								state = 'ForStatementCurlyOpen';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
							} else if(lastState === 'WithStatementParenClose') {
								state = 'WithStatementCurlyOpen';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;				
							} else if(lastState === 'TryStatement') {
								state = 'TryStatementCurlyOpen';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
							} else if(lastState === 'SwitchStatementParenClose') {
								state = 'SwitchStatementCurlyOpen';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
							} else if(lastState === 'IfStatementParenClose') {
								state = 'IfStatementCurlyOpen';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
							} else if(lastState === 'FinallyStatement') {
								state = 'FinallyStatementCurlyOpen';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
							} else if(lastState === 'FunctionExpressionParenClose') {
								state = 'FunctionExpressionCurlyOpen';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
							} else if(rules.ObjectLiteralCurlyOpen[lastState]) {				
								state = 'ObjectLiteralCurlyOpen';
								expected = 'ObjectLiteralIdentifier';
								expected2 = 'ObjectLiteralIdentifierString';
								expected3 = 'ObjectLiteralIdentifierNumber';
								expected4 = 'ObjectLiteralCurlyClose';
								expect = 0;
								parentStates[''+lookupSquare+(lookupCurly+1)+lookupParen] = state;
								outputLine = outputLine + 'M.O(';
							} else if(rules.BlockStatementCurlyOpen[lastState]) {
								state = 'BlockStatementCurlyOpen';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
							} else {							    							    							  							    
							    if(!rules['Identifier'][lastState] && newLineFlag) {							        
							      asi();
							      if(lastState === 'ForSemi') {                                    
                                    state = 'ObjectLiteralCurlyOpen';
                                    expected = 'ObjectLiteralIdentifier';
                                    expected2 = 'ObjectLiteralIdentifierString';
                                    expected3 = 'ObjectLiteralIdentifierNumber';
                                    expected4 = 'ObjectLiteralCurlyClose';
                                    expect = 0;
                                    parentStates[''+lookupSquare+(lookupCurly+1)+lookupParen] = state;
                                    outputLine = outputLine + 'M.O(';   
							      } else {                                                                                                                             
                                    state = 'BlockStatementCurlyOpen';
                                    expected = 0;
                                    expected2 = 0;
                                    expected3 = 0;
                                    expected4 = 0;
                                  }                                                                                 
                                } else {												
								    error('Unexpected {. Cannot follow '+lastState+'.Output:'+output);
								}
							}										
							outputLine = outputLine + '{';
							if(state === 'FunctionStatementCurlyOpen' || state === 'FunctionExpressionCurlyOpen') {
								outputLine = outputLine + 'var $arguments$=M.A(arguments);';
							}
							last = CURLY_OPEN;
							pos++;
							parentStates[''+lookupSquare+lookupCurly+lookupParen] = state;
							left = 0;
							lookupCurly++;
						} else if(chr === CURLY_CLOSE) {							
							isVar[''+lookupSquare+lookupCurly+lookupParen] = 0;
							lookupCurly--;																															
							parentState = parentStates[''+lookupSquare+lookupCurly+lookupParen];																																									
							outputLine = outputLine + '}';																											
							if(parentState === 'FunctionStatementCurlyOpen') {
								state = 'FunctionStatementCurlyClose';								
								left = 0;
							} else if(parentState === 'ElseCurlyOpen') {
								state = 'ElseCurlyClose';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
								left = 0;
							} else if(parentState === 'ObjectLiteralCurlyOpen') {
								state = 'ObjectLiteralCurlyClose';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
								left = 1;
								isObjectLiteral[''+lookupSquare+(lookupCurly+1)+lookupParen] = 0;
								outputLine = outputLine + ')';
							} else if(parentState === 'ForStatementCurlyOpen') {
								state = 'ForStatementCurlyClose';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
								left = 0;								
							} else if(parentState === 'WhileStatementCurlyOpen') {
								state = 'WhileStatementCurlyClose';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
								left = 0;								
							} else if(parentState === 'CatchStatementCurlyOpen') {
								state = 'CatchStatementCurlyClose';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
								left = 0;
							} else if(parentState === 'FinallyStatementCurlyOpen') {
								state = 'FinallyStatementCurlyClose';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
								left = 0;												
							} else if(parentState === 'WithStatementCurlyOpen') {
								state = 'WithStatementCurlyClose';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
								left = 0;								
							} else if(parentState === 'TryStatementCurlyOpen') {
								state = 'TryStatementCurlyClose';				
								expected = 'CatchStatement';
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
								expect = 0;
							} else if(parentState === 'DoStatementCurlyOpen') {
								state = 'DoStatementCurlyClose';				
								expected = 'WhileStatement';
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
								expect = 0;
							} else if(parentState === 'SwitchStatementCurlyOpen') {
								state = 'SwitchStatementCurlyClose';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
								left = 0;														
							} else if(parentState === 'DoStatement') {
								state = 'DoStatementCurlyOpen';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
								left = 0;
								expect = 0;
							} else if(parentState === 'IfStatementCurlyOpen') {
								state = 'IfStatementCurlyClose';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
								left = 0;
							} else if(parentState === 'FunctionExpressionCurlyOpen') {
								state = 'FunctionExpressionCurlyClose';
								left = 1;
							} else if(parentState === 'BlockStatementCurlyOpen') {
								state = 'BlockStatementCurlyClose';								
								left = 0;
							} else {																						
								error('Unexpected }. Cannot follow '+lastState+'.Output:'+output);
							}							
							parentStates[''+lookupSquare+lookupCurly+lookupParen] = '';										
							pos++;														
						} else if(chr === QUESTION_MARK) {
							state = 'TernaryQuestionMark';
							outputLine = outputLine + '?';
							last = QUESTION_MARK;
							left = 0;
							pos++;
							if(isTernary[''+lookupSquare+lookupCurly+lookupParen]) {
							  isTernary[''+lookupSquare+lookupCurly+lookupParen]++;
							} else {
							  isTernary[''+lookupSquare+lookupCurly+lookupParen] = 1;
							}
							ternaryCount++;													
						} else if(chr === COMMA) {			
							parentState = parentStates[''+lookupSquare+lookupCurly+lookupParen];																																																																																																
							if(lastState === 'FunctionArgumentIdentifier') {
								state = 'FunctionArgumentComma';
								expect = 0;
								expected = 'FunctionArgumentIdentifier';
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
							} else if(parentState === 'ArrayOpen' || lastState === 'ArrayOpen') {
								state = 'ArrayComma';															
							} else if(lastState === 'FunctionExpressionArgumentIdentifier') {
								state = 'FunctionExpressionArgumentComma';
								expect = 0;
								expected = 'FunctionExpressionArgumentIdentifier';
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;		
							} else if(parentState === 'ParenExpressionOpen') {
								state = 'ParenExpressionComma';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
							} else if(isObjectLiteral[''+lookupSquare+lookupCurly+lookupParen]) {
								state = 'ObjectLiteralComma';
								expect = 0;
								expected = 'ObjectLiteralIdentifier';
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
							} else if(isVar[''+lookupSquare+lookupCurly+lookupParen]) {
								state = 'VarComma';
								expected = 'Identifier';
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
								expect = 0;	
							} else if(isTernary[''+lookupSquare+lookupCurly+lookupParen]) {
								error("Syntax error expected :");				
							} else {
								state = 'Comma';
								expected = 0;
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
							}
							outputLine = outputLine + ',';
							pos++;
							left = 0;
							last = COMMA;
						} else if(chr === PERIOD) {
							if(left) {							
								state = 'IdentifierDot';								
							} else {
								error('Unexpected . Cannot follow '+lastState+'.Output:'+output);
							}
							expected = 'Identifier';
							expected2 = 0;
							expected3 = 0;
							expected4 = 0;
							expect = 0;
							outputLine = outputLine + '.';
							pos++;
							left = 0;
						} else if(chr === COLON) {
							parentState = parentStates[''+lookupSquare+lookupCurly+lookupParen];								
							if(isTernary[''+lookupSquare+lookupCurly+lookupParen]) {
								state = 'TernaryColon';
								isTernary[''+lookupSquare+lookupCurly+lookupParen]--;
								ternaryCount--;
							} else if(rules.ObjectLiteralColon[lastState]) {
								state = 'ObjectLiteralColon';
								expected = 0;								
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;																								
								isObjectLiteral[''+lookupSquare+lookupCurly+lookupParen] = 1;				
							} else if(isCase[''+lookupSquare+lookupCurly+lookupParen] || lastState === 'Default') {
								state = 'SwitchColon';
								if(lastState === 'Case') {
									error("Syntax error");
								}
								expected = 0;								
								expected2 = 0;
								expected3 = 0;
								expected4 = 0;
								if(lastState !== 'Default') {
									isCase[''+lookupSquare+lookupCurly+lookupParen] = 0;
									caseCount--;	
								}						
							} else if(!parentState) {
								state = 'LabelColon';
							} else {
								error('Unexpected : Cannot follow '+lastState+'.Output:'+output);
							}
							outputLine = outputLine + ':';
							pos++;
							left = 0;
							last = COLON;												
						} else if(chr === SEMI_COLON) {				
							parentState = parentStates[''+lookupSquare+lookupCurly+lookupParen];									
							if(isFor[''+lookupSquare+lookupCurly+(lookupParen-1)] && !isForIn[''+lookupSquare+lookupCurly+(lookupParen-1)]) {
								state = 'ForSemi';
								outputLine = outputLine + ';';
								if(isFor[''+lookupSquare+lookupCurly+(lookupParen-1)] > 2) {
									error("Syntax error unexpected for semi ;");
								}
								isFor[''+lookupSquare+lookupCurly+(lookupParen-1)]++;
								isVar[''+lookupSquare+lookupCurly+lookupParen] = 0;																						
							} else {								
								state = 'EndStatement';
								if(lastState !== 'EndStatement') {
									outputLine = outputLine + ';';	
								}
								isVar[''+lookupSquare+lookupCurly+lookupParen] = 0;					
							}						
							pos++;
							left = 0;
							last = SEMI_COLON;
                      } else if(chr === SINGLE_QUOTE || chr === DOUBLE_QUOTE) {                                           
                            if(lastState === 'ObjectLiteralCurlyOpen' || lastState === 'ObjectLiteralComma') {
                                state = 'ObjectLiteralIdentifierString';
                                left = 0;
                                expected = 'ObjectLiteralColon';
                                expected2 = 0;
                                expected3 = 0;
                                expected4 = 0;
                                expect = 0; 
                            } else {
                                state = 'String';
                                left = 1;
                            }                           
                            states = {escaping: 0, complete: 0};
                            states[chr] = 1;                        
                            outputLine = outputLine + code.charAt(pos);
                            pos++;
                            if(state === 'ObjectLiteralIdentifierString') {
                                outputLine = outputLine + scoping;  
                            }
                            for(;;) {                               
                                chr = code.charCodeAt(pos);
                                next = code.charCodeAt(pos+1);                          
                                if(chr === SINGLE_QUOTE && !states.escaping && states[SINGLE_QUOTE]) {
                                    states.complete = 1;                 
                                } else if(chr === DOUBLE_QUOTE && !states.escaping && states[DOUBLE_QUOTE]) {
                                    states.complete = 1;
                                } else if(chr === BACKSLASH && !states.escaping && (next === NEWLINE || next === CARRIAGE_RETURN || next === LINE_SEPARATOR || next === PARAGRAPH_SEPARATOR) ) {                                    
                                    pos+=2;
                                    continue;                                                
                                } else if(chr === BACKSLASH && !states.escaping) {
                                    states.escaping = 1;                                
                                } else if(chr === BACKSLASH && states.escaping) {
                                    states.escaping = 0;                                
                                } else if((chr === NEWLINE || chr === CARRIAGE_RETURN || chr === LINE_SEPARATOR || chr === PARAGRAPH_SEPARATOR) && !states.escaping) {
                                    error("Unterminated string literal");
                                } else if(states.escaping) {
                                    states.escaping = 0;
                                }                            
                                if(pos + 1 > length) {
                                    error("Unterminated string literal");
                                }
                                if(states.complete && state === 'ObjectLiteralIdentifierString') {
                                outputLine = outputLine + scoping;  
                                }                                                                       
                                outputLine = outputLine + code.charAt(pos);
                                pos++;
                                if(states.complete) {                                                               
                                    break;
                                }                           
                            }       				
						} else if(chr === EXCLAMATION_MARK) {
							next2 = code.charCodeAt(pos+2);						
							if(next !== EQUAL && !left) {
								state = 'Not';
								outputLine = outputLine + ' ! ';
								pos++;
							} else if(next === EQUAL && next2 !== EQUAL) {
								state = 'NotEqual';
								outputLine = outputLine + '!=';
								pos+=2;
							} else if(next === EQUAL && next2 === EQUAL) {
								state = 'StrictNotEqual';
								outputLine = outputLine + '!==';
								pos+=3;							
							} else {
								error('Unexpected !. Cannot follow '+lastState+'.Output:'+output);
							}			
							left = 0;				
						} else if(chr === TILDE) {
							if(!left) {
								state = 'BitwiseNot';
								outputLine = outputLine + '~';
								pos++;												
							} else {
								error('Unexpected ~ Cannot follow '+lastState+'.Output:'+output);
							}
							left = 0;							
						} else if(chr === PIPE) {
							if(next === PIPE) {
								state = 'LogicalOr';
								outputLine = outputLine + '||';
								pos+=2;
							} else if(next === EQUAL) {
								state = 'OrAssignment';
								outputLine = outputLine + '|=';
								pos+=2;
							} else if(next !== PIPE && next !== EQUAL) {
								state = 'BitwiseOr';
								outputLine = outputLine + ' | ';
								pos++;						
							} else {
								error('Unexpected | Cannot follow '+lastState+'.Output:'+output);
							}
							left = 0;
						} else if(chr === CARET) {	
							if(next === EQUAL) {
								state = 'XorAssignment';
								outputLine = outputLine + '^=';
								pos+=2;
							} else if(next !== EQUAL) {
								state = 'Xor';
								outputLine = outputLine + ' ^ ';
								pos++;						
							} else {
								error('Unexpected ^. Cannot follow '+lastState+'.Output:'+output);
							}
							left = 0;
						} else if(chr === PERCENT) {
							if(next === EQUAL) {
								state = 'ModulusAssignment';
								outputLine = outputLine + '%=';
								pos+=2;
							} else if(next !== EQUAL) {
								state = 'Modulus';
								outputLine = outputLine + ' % ';
								pos++;						
							} else {
								error('Unexpected % Cannot follow '+lastState+'.Output:'+output);
							}
							left = 0;								
						} else if(chr === AMPERSAND) {
							if(next === AMPERSAND) {
								state = 'LogicalAnd';
								outputLine = outputLine + '&&';
								pos+=2;
							} else if(next === EQUAL) {
								state = 'AndAssignment';
								outputLine = outputLine + '&=';
								pos+=2;
							} else if(next !== AMPERSAND && next !== EQUAL) {
								state = 'BitwiseAnd';
								outputLine = outputLine + ' & ';
								pos++;						
							} else {
								error('Unexpected & Cannot follow '+lastState+'.Output:'+output);
							}
							left = 0;	
						} else if(chr === EQUAL) {
							next2 = code.charCodeAt(pos+2);						
							if(next !== EQUAL) {
								state = 'EqualAssignment';
								outputLine = outputLine + ' = ';
								pos++;
							} else if(next === EQUAL && next2 !== EQUAL) {
								state = 'Equal';
								outputLine = outputLine + '==';
								pos+=2;
							} else if(next === EQUAL && next2 === EQUAL) {
								state = 'StrictEqual';
								outputLine = outputLine + '===';
								pos+=3;
							} else {
								error('Unexpected = Cannot follow '+lastState+'.Output:'+output);
							}
							left = 0;																											
						} else if(chr === GREATER_THAN) {
							next2 = code.charCodeAt(pos+2);
							next3 = code.charCodeAt(pos+3);
							if(next == GREATER_THAN && next2 == GREATER_THAN && next3 === EQUAL) {
								state = 'ZeroRightShiftAssignment';
								outputLine = outputLine + '>>>=';
								pos+=4;												
							} else if(next == GREATER_THAN && next2 == GREATER_THAN) {
								state = 'ZeroRightShift';
								outputLine = outputLine + '>>>';
								pos+=3;	
							} else if(next == GREATER_THAN && next2 == EQUAL) {
								state = 'RightShiftAssignment';
								outputLine = outputLine + '>>=';
								pos+=3;												
							} else if(next == GREATER_THAN) {
								state = 'RightShift';
								outputLine = outputLine + '>>';
								pos+=2;
							} else if(next !== EQUAL) {
								state = 'GreaterThan';
								outputLine = outputLine + ' > ';
								pos++;
							} else if(next === EQUAL) {
								state = 'GreaterThanEqual';
								outputLine = outputLine + '>=';
								pos+=2;						
							} else {
								error('Unexpected > Cannot follow '+lastState+'.Output:'+output);
							}
							left = 0;		
						} else if(chr === LESS_THAN) {
							next2 = code.charCodeAt(pos+2);	
							if(next === LESS_THAN && next2 === EQUAL) {
								state = 'LeftShiftAssignment';
								outputLine = outputLine + '<<=';
								pos+=3;
							}else if(next === LESS_THAN) {
								state = 'LeftShift';
								outputLine = outputLine + '<<';
								pos+=2;
							} else if(next !== EQUAL) {
								state = 'LessThan';
								outputLine = outputLine + ' < ';
								pos++;
							} else if(next === EQUAL) {
								state = 'LessThanEqual';
								outputLine = outputLine + '<=';
								pos+=2;						
							} else {
								error('Unexpected < Cannot follow '+lastState+'.Output:'+output);
							}
							left = 0;
						} else if(chr === ASTERIX) {											
							if(next !== EQUAL) {
								state = 'Multiply';
								outputLine = outputLine + ' * ';
								pos++;
							} else if(next === EQUAL) {
								state = 'MultiplyAssignment';
								outputLine = outputLine + '*=';
								pos+=2;						
							} else {
								error('Unexpected * Cannot follow '+lastState+'.Output:'+output);
							}
							left = 0;																						
						} else if(chr === MINUS) {
							if(next === MINUS && left) {
								state = 'PostfixDeincrement';
								outputLine = outputLine + '--';
								pos+=2;
							} else if(next === MINUS && !left) {
								state = 'PrefixDeincrement';
								outputLine = outputLine + '--';
								pos+=2;						
							} else if(next === EQUAL) {
								state = 'MinusAssignment';
								outputLine = outputLine + '-=';
								pos+=2;
							} else if(next !== EQUAL && next !== MINUS && left) {
								state = 'Minus';
								outputLine = outputLine + ' - ';
								pos++;
							} else if(next !== EQUAL && next !== MINUS && !left) {
								state = 'UnaryMinus';
								outputLine = outputLine + '-';
								pos++;																	
							} else {					
								error('Unexpected - Cannot follow '+lastState+'.Output:'+output);
							}
							left = 0;																																									
						} else if((chr >= LOWER_A && chr <= LOWER_Z) || (chr >= UPPER_A && chr <= UPPER_Z) || (chr === UNDERSCORE || chr === DOLLAR || chr === BACKSLASH) || (chr > 0x80)) {						
							foundKeyword = 0; 
							states = {}; 
							
							next2 = code.charCodeAt(pos+2);
                            next3 = code.charCodeAt(pos+3);
                            next4 = code.charCodeAt(pos+4);
                            next5 = code.charCodeAt(pos+5);
                            next6 = code.charCodeAt(pos+6);
                            next7 = code.charCodeAt(pos+7);
                            next8 = code.charCodeAt(pos+8);
                            next9 = code.charCodeAt(pos+9);
                            next10 = code.charCodeAt(pos+10);
							                                                                                  
                            if(chr === LOWER_F) {
                                if(next === LOWER_U) {                                    
                                    //function keyword
                                    if(next2 === LOWER_N && next3 === LOWER_C && next4 === LOWER_T && next5 === LOWER_I && next6 === LOWER_O && next7 === LOWER_N) {
                                        states.match = 0;
                                        if(next8 === 9 || next8 === 11 || next8 === 12 || next8 === 32 || next8 === 160 || next8 === 5760 || next8 === 6158 || next8 === 8192 || next8 === 8193 || next8 === 8194 || next8 === 8195 || next8 === 8196 || next8 === 8197 || next8 === 8198 || next8 === 8199 || next8 === 8200 || next8 === 8201 || next8 === 8202 || next8 === 8239 || next8 === 8287 || next8 === 12288) {
                                            states.match = 1;
                                        } else if(next8 === NEWLINE || next8 === CARRIAGE_RETURN || next8 === LINE_SEPARATOR || next8 === PARAGRAPH_SEPARATOR) {
                                            states.match = 1;
                                        } else if(next8 === PAREN_OPEN) {
                                            states.match = 1;
                                        }
                                        if(states.match) {                               
                                            foundKeyword = 1;
                                            if(rules.FunctionExpression[lastState]) {
                                                state = 'FunctionExpression';
                                                expected = 'FunctionExpressionIdentifier';
                                                expected2 = 'FunctionExpressionParenOpen';
                                                expected3 = 0;
                                                expected4 = 0;
                                                expect = 0;                                                             
                                            } else if(rules.FunctionStatement[lastState]) {
                                                state = 'FunctionStatement';
                                                expected = 'FunctionIdentifier';
                                                expected2 = 0;
                                                expected3 = 0;
                                                expected4 = 0;
                                                expect = 0;
                                            } else {                                    
                                                if(!rules['Identifier'][lastState] && newLineFlag) {                                                                                    
                                                    asi();
                                                    state = 'FunctionStatement';
                                                    expected = 'FunctionIdentifier';
                                                    expected2 = 0;
                                                    expected3 = 0;
                                                    expected4 = 0;
                                                    expect = 0;
                                                } else {
                                                    error('Unexpected function. Cannot follow '+lastState+'.Output:'+output);
                                                }                                              
                                            }
                                            left = 0;
                                            pos+=8;
                                            outputLine = outputLine + 'function'; 
                                        }
                                    }  
                                } else if(next === LOWER_O) {                                    
                                    //for keyword
                                    if(next2 === LOWER_R) {
                                        states.match = 0;
                                        if(next3 === 9 || next3 === 11 || next3 === 12 || next3 === 32 || next3 === 160 || next3 === 5760 || next3 === 6158 || next3 === 8192 || next3 === 8193 || next3 === 8194 || next3 === 8195 || next3 === 8196 || next3 === 8197 || next3 === 8198 || next3 === 8199 || next3 === 8200 || next3 === 8201 || next3 === 8202 || next3 === 8239 || next3 === 8287 || next3 === 12288) {
                                            states.match = 1;
                                        } else if(next3 === NEWLINE || next3 === CARRIAGE_RETURN || next3 === LINE_SEPARATOR || next3 === PARAGRAPH_SEPARATOR) {
                                            states.match = 1;
                                        } else if(next3 === PAREN_OPEN) {
                                            states.match = 1;
                                        }
                                        if(states.match) {
                                            foundKeyword = 1;
                                            state = 'ForStatement';
                                            expected = 'ForStatementParenOpen';
                                            expected2 = 0;
                                            expected3 = 0;
                                            expected4 = 0;
                                            expect = 0;
                                            left = 0;   
                                            pos+=3; 
                                            outputLine = outputLine + 'for ';
                                            isFor[''+lookupSquare+lookupCurly+lookupParen] = 1;
                                       }
                                    }  
                                } else if(next === LOWER_A) {                                    
                                    // false keyword
                                    states.match = 0;
                                    if(chr === LOWER_F && next === LOWER_A && next2 === LOWER_L && next3 === LOWER_S && next4 === LOWER_E) {                                                                                
                                        if(next5 >= LOWER_A && next5 <= LOWER_Z) {
                                            states.match = 1;
                                        } else if(next5 >= DIGIT_0 && next5 <= DIGIT_9) {
                                            states.match = 1;
                                        } else if(next5 >= UPPER_A && next5 <= UPPER_Z) {
                                            states.match = 1;
                                        } else if(next5 === UNDERSCORE || next5 === DOLLAR || next5 === BACKSLASH) {
                                           states.match = 1;
                                        } else if(next5 > 0x80) {
                                           states.match = isValidVariablePart(next5); 
                                        } 
                                        
                                        if(!states.match) {
                                            foundKeyword = 1;
                                            state = 'False';
                                            expected = 0;
                                            expected2 = 0;
                                            expected3 = 0;
                                            expected4 = 0;
                                            left = 1;   
                                            pos+=5;
                                            outputLine = outputLine + 'false';
                                        }
                                    }  
                                } else if(next === LOWER_I) {                                    
                                    // finally keyword          
                                    if(chr === LOWER_F && next === LOWER_I && next2 === LOWER_N && next3 === LOWER_A && next4 === LOWER_L && next5 === LOWER_L && next6 === LOWER_Y) {
                                        states.match = 0;
                                        if(next7 === 9 || next7 === 11 || next7 === 12 || next7 === 32 || next7 === 160 || next7 === 5760 || next7 === 6158 || next7 === 8192 || next7 === 8193 || next7 === 8194 || next7 === 8195 || next7 === 8196 || next7 === 8197 || next7 === 8198 || next7 === 8199 || next7 === 8200 || next7 === 8201 || next7 === 8202 || next7 === 8239 || next7 === 8287 || next7 === 12288) {
                                            states.match = 1;
                                        } else if(next7 === NEWLINE || next7 === CARRIAGE_RETURN || next7 === LINE_SEPARATOR || next7 === PARAGRAPH_SEPARATOR) {
                                            states.match = 1;
                                        } else if(next7 === CURLY_OPEN) {
                                            states.match = 1;
                                        }
                                        if(states.match) {
                                            foundKeyword = 1;
                                            state = 'FinallyStatement';
                                            expected = 'FinallyStatementCurlyOpen';
                                            expected2 = 0;
                                            expected3 = 0;
                                            expected4 = 0;
                                            expect = 0;
                                            left = 0;   
                                            pos+=7;
                                            outputLine = outputLine + 'finally';
                                        }
                                     }
                                }
                        } else if(chr === LOWER_I) {
                                if(next === LOWER_F) {                                      
                                    // if keyword
                                    if(chr === LOWER_I && next === LOWER_F) {
                                        states.match = 0;
                                        if(next2 === 9 || next2 === 11 || next2 === 12 || next2 === 32 || next2 === 160 || next2 === 5760 || next2 === 6158 || next2 === 8192 || next2 === 8193 || next2 === 8194 || next2 === 8195 || next2 === 8196 || next2 === 8197 || next2 === 8198 || next2 === 8199 || next2 === 8200 || next2 === 8201 || next2 === 8202 || next2 === 8239 || next2 === 8287 || next2 === 12288) {
                                            states.match = 1;
                                        } else if(next2 === NEWLINE || next2 === CARRIAGE_RETURN || next2 === LINE_SEPARATOR || next2 === PARAGRAPH_SEPARATOR) {
                                            states.match = 1;
                                        } else if(next2 === PAREN_OPEN) {
                                            states.match = 1;
                                        }
                                        if(states.match) {
                                            foundKeyword = 1;
                                            state = 'IfStatement';
                                            expected = 0;
                                            expected2 = 0;
                                            expected3 = 0;
                                            expected4 = 0;
                                            left = 0;   
                                            pos+=2;
                                            if(lastState === 'Else') {
                                                outputLine = outputLine + ' ';
                                            }
                                            outputLine = outputLine + 'if';
                                            isIf[''+lookupSquare+lookupCurly+lookupParen] = 1;
                                        }
                                 }    
                               } else if(next === LOWER_N) {                                   
                                   if(next2 === LOWER_S) {                                                                                
                                        // instanceof keyword
                                        if(next3 === LOWER_T && next4 === LOWER_A && next5 === LOWER_N && next6 === LOWER_C && next7 === LOWER_E && next8 === LOWER_O && next9 === LOWER_F) {                                            
                                            states.match = 0;
                                            if(next10 >= LOWER_A && next10 <= LOWER_Z) {
                                                states.match = 1;
                                            } else if(next10 >= DIGIT_0 && next10 <= DIGIT_9) {
                                                states.match = 1;
                                            } else if(next10 >= UPPER_A && next10 <= UPPER_Z) {
                                                states.match = 1;
                                            } else if(next10 === UNDERSCORE || next10 === DOLLAR || next10 === BACKSLASH) {
                                               states.match = 1;
                                            } else if(next10 > 0x80) {
                                               states.match = isValidVariablePart(next10); 
                                            }
                                            
                                            if(!states.match) {
                                                foundKeyword = 1;
                                                state = 'InstanceOf';
                                                expected = 0;
                                                expected2 = 0;
                                                expected3 = 0;
                                                expected4 = 0;
                                                left = 1;   
                                                pos+=10;
                                                outputLine = outputLine + ' instanceof ';
                                            }
                                        }                                     
                                    // in keyword      
                                    } else if(chr === LOWER_I && next === LOWER_N) {
                                        states.match = 0;
                                        if(next2 >= LOWER_A && next2 <= LOWER_Z) {
                                            states.match = 1;
                                        } else if(next2 >= DIGIT_0 && next2 <= DIGIT_9) {
                                            states.match = 1;
                                        } else if(next2 >= UPPER_A && next2 <= UPPER_Z) {
                                            states.match = 1;
                                        } else if(next2 === UNDERSCORE || next2 === DOLLAR || next2 === BACKSLASH) {
                                           states.match = 1;
                                        } else if(next2 > 0x80) {
                                           states.match = isValidVariablePart(next2); 
                                        }
                                        
                                        if(!states.match) {
                                            foundKeyword = 1;
                                            state = 'In';
                                            expected = 0;
                                            expected2 = 0;
                                            expected3 = 0;
                                            expected4 = 0;
                                            left = 0;   
                                            pos+=2;
                                            outputLine = outputLine + ' in ';
                                            if(isFor[''+lookupSquare+lookupCurly+lookupParen]) {
                                                isForIn[''+lookupSquare+lookupCurly+lookupParen] = 1;        
                                            }                                                   
                                        }                                                                           
                                    // instanceof keyword       
                                    }  
                               }
                        } else if(chr === LOWER_T) {                                                        
                              if(next === LOWER_H) {
                                     // this keyword
                                     if(next2 === LOWER_I && next3 === LOWER_S) {
                                        states.match = 0;
                                        if(next4 >= LOWER_A && next4 <= LOWER_Z) {
                                            states.match = 1;
                                        } else if(next4 >= DIGIT_0 && next4 <= DIGIT_9) {
                                            states.match = 1;
                                        } else if(next4 >= UPPER_A && next4 <= UPPER_Z) {
                                            states.match = 1;
                                        } else if(next4 === UNDERSCORE || next4 === DOLLAR || next4 === BACKSLASH) {
                                           states.match = 1;
                                        } else if(next4 > 0x80) {
                                           states.match = isValidVariablePart(next4); 
                                        }
                                        if(!states.match) {
                                            foundKeyword = 1;
                                            state = 'This';
                                            expected = 0;
                                            expected2 = 0;
                                            expected3 = 0;
                                            expected4 = 0;
                                            expect = 0;
                                            left = 1;   
                                            pos+=4;
                                            outputLine = outputLine + 'this';
                                        } 
                                    // throw keyword           
                                    } else if(next2 === LOWER_R && next3 === LOWER_O && next4 === LOWER_W) {
                                        states.match = 0;
                                        if(next5 >= LOWER_A && next5 <= LOWER_Z) {
                                            states.match = 1;
                                        } else if(next5 >= DIGIT_0 && next5 <= DIGIT_9) {
                                            states.match = 1;
                                        } else if(next5 >= UPPER_A && next5 <= UPPER_Z) {
                                            states.match = 1;
                                        } else if(next5 === UNDERSCORE || next5 === DOLLAR || next5 === BACKSLASH) {
                                           states.match = 1;
                                        } else if(next5 > 0x80) {
                                           states.match = isValidVariablePart(next5); 
                                        }
                                        if(!states.match) {
                                            foundKeyword = 1;
                                            state = 'Throw';
                                            expected = 0;
                                            expected2 = 0;
                                            expected3 = 0;
                                            expected4 = 0;
                                            left = 0;   
                                            pos+=5;
                                            outputLine = outputLine + 'throw ';
                                        } 
                                    }     
                              } else if(next === LOWER_R) {
                                    // true keyword
                                    if(next2 === LOWER_U && next3 === LOWER_E) {
                                        states.match = 0;
                                        if(next4 >= LOWER_A && next4 <= LOWER_Z) {
                                            states.match = 1;
                                        } else if(next4 >= DIGIT_0 && next4 <= DIGIT_9) {
                                            states.match = 1;
                                        } else if(next4 >= UPPER_A && next4 <= UPPER_Z) {
                                            states.match = 1;
                                        } else if(next4 === UNDERSCORE || next4 === DOLLAR || next4 === BACKSLASH) {
                                           states.match = 1;
                                        } else if(next4 > 0x80) {
                                           states.match = isValidVariablePart(next4); 
                                        }
                                        
                                        if(!states.match) {
                                            foundKeyword = 1;
                                            state = 'True';
                                            expected = 0;
                                            expected2 = 0;
                                            expected3 = 0;
                                            expected4 = 0;
                                            left = 1;   
                                            pos+=4;
                                            outputLine = outputLine + 'true';
                                       }
                                     // try keyword
                                    } else if(next2 === LOWER_Y) {
                                        match = 0;
                                        if(next3 === 9 || next3 === 11 || next3 === 12 || next3 === 32 || next3 === 160 || next3 === 5760 || next3 === 6158 || next3 === 8192 || next3 === 8193 || next3 === 8194 || next3 === 8195 || next3 === 8196 || next3 === 8197 || next3 === 8198 || next3 === 8199 || next3 === 8200 || next3 === 8201 || next3 === 8202 || next3 === 8239 || next3 === 8287 || next3 === 12288) {
                                            states.match = 1;
                                        } else if(next3 === NEWLINE || next3 === CARRIAGE_RETURN || next3 === LINE_SEPARATOR || next3 === PARAGRAPH_SEPARATOR) {
                                            states.match = 1;
                                        } else if(next3 === CURLY_OPEN) {
                                            states.match = 1;
                                        }
                                        
                                        if(states.match) {
                                            foundKeyword = 1;
                                            state = 'TryStatement';
                                            expected = 'TryStatementCurlyOpen';
                                            expected2 = 0;
                                            expected3 = 0;
                                            expected4 = 0;
                                            expect = 0;
                                            left = 0;   
                                            pos+=3;
                                            outputLine = outputLine + 'try';
                                        }    
                                    }  
                              } else if(next === LOWER_Y) {                               
                                      // typeof keyword
                                      if(chr === LOWER_T && next === LOWER_Y && next2 === LOWER_P && next3 === LOWER_E && next4 === LOWER_O && next5 === LOWER_F) {
                                          states.match = 0;
                                          if(next6 >= LOWER_A && next6 <= LOWER_Z) {
                                             states.match = 1;
                                            } else if(next6 >= DIGIT_0 && next6 <= DIGIT_9) {
                                                states.match = 1;
                                            } else if(next6 >= UPPER_A && next6 <= UPPER_Z) {
                                                states.match = 1;
                                            } else if(next6 === UNDERSCORE || next6 === DOLLAR || next6 === BACKSLASH) {
                                               states.match = 1;
                                            } else if(next6 > 0x80) {
                                               states.match = isValidVariablePart(next6); 
                                            }
                                          
                                          if(!states.match) {
                                            foundKeyword = 1;
                                            state = 'TypeOf';
                                            expected = 0;
                                            expected2 = 0;
                                            expected3 = 0;
                                            expected4 = 0;
                                            left = 0;   
                                            pos+=6;
                                            outputLine = outputLine + 'typeof ';
                                         }
                                    }
                              }
                        } else if(chr === LOWER_C) {                            
                              if(next === LOWER_A) {
                                    // case keyword
                                    if(next2 === LOWER_S && next3 === LOWER_E) {
                                        states.match = 0;
                                        if(next4 >= LOWER_A && next4 <= LOWER_Z) {
                                            states.match = 1;
                                        } else if(next4 >= DIGIT_0 && next4 <= DIGIT_9) {
                                            states.match = 1;
                                        } else if(next4 >= UPPER_A && next4 <= UPPER_Z) {
                                            states.match = 1;
                                        } else if(next4 === UNDERSCORE || next4 === DOLLAR || next4 === BACKSLASH) {
                                           states.match = 1;
                                        } else if(next4 > 0x80) {
                                           states.match = isValidVariablePart(next4); 
                                        }
                                        if(!states.match) {
                                            foundKeyword = 1;
                                            state = 'Case';
                                            expected = 0;
                                            expected2 = 0;
                                            expected3 = 0;
                                            expected4 = 0;
                                            left = 0;   
                                            pos+=4;                         
                                            outputLine = outputLine + 'case ';
                                            isCase[''+lookupSquare+lookupCurly+lookupParen] = 1;
                                            caseCount++;
                                        }    
                                   // catch keyword         
                                    } else if(next2 === LOWER_T && next3 === LOWER_C && next4 === LOWER_H) {
                                        states.match = 0;
                                        if(next5 === 9 || next5 === 11 || next5 === 12 || next5 === 32 || next5 === 160 || next5 === 5760 || next5 === 6158 || next5 === 8192 || next5 === 8193 || next5 === 8194 || next5 === 8195 || next5 === 8196 || next5 === 8197 || next5 === 8198 || next5 === 8199 || next5 === 8200 || next5 === 8201 || next5 === 8202 || next5 === 8239 || next5 === 8287 || next5 === 12288) {
                                            states.match = 1;
                                        } else if(next5 === NEWLINE || next5 === CARRIAGE_RETURN || next5 === LINE_SEPARATOR || next5 === PARAGRAPH_SEPARATOR) {
                                            states.match = 1;
                                        } else if(next5 === PAREN_OPEN) {
                                            states.match = 1;
                                        }
                                        if(states.match) {
                                            foundKeyword = 1;
                                            state = 'CatchStatement';
                                            expected = 'CatchStatementParenOpen';
                                            expected2 = 0;
                                            expected3 = 0;
                                            expected4 = 0;
                                            expect = 0;
                                            left = 0;   
                                            pos+=5;
                                            outputLine = outputLine + 'catch';
                                       }
                                    }
                              } else if(next === LOWER_O) {
                                   // continue keyword           
                                   if(next2 === LOWER_N && next3 === LOWER_T && next4 === LOWER_I && next5 === LOWER_N && next6 === LOWER_U && next7 === LOWER_E) {
                                        states.match = 0;
                                        if(next8 >= LOWER_A && next8 <= LOWER_Z) {
                                            states.match = 1;
                                        } else if(next8 >= DIGIT_0 && next8 <= DIGIT_9) {
                                            states.match = 1;
                                        } else if(next8 >= UPPER_A && next8 <= UPPER_Z) {
                                            states.match = 1;
                                        } else if(next8 === UNDERSCORE || next8 === DOLLAR || next8 === BACKSLASH) {
                                           states.match = 1;
                                        } else if(next8 > 0x80) {
                                           states.match = isValidVariablePart(next8); 
                                        }                                        
                                        if(!states.match) {
                                            foundKeyword = 1;
                                            state = 'Continue';
                                            expected = 0;
                                            expected2 = 0;
                                            expected3 = 0;
                                            expected4 = 0;
                                            left = 0;   
                                            pos+=8;
                                            outputLine = outputLine + 'continue ';
                                        }
                                    }
                              }
                        } else if(chr === LOWER_D) {                            
                            if(next === LOWER_O) {                                                                
                                // do keyword     
                                states.match = 0;
                                if(next2 >= LOWER_A && next2 <= LOWER_Z) {
                                    states.match = 1;
                                } else if(next2 >= DIGIT_0 && next2 <= DIGIT_9) {
                                    states.match = 1;
                                } else if(next2 >= UPPER_A && next2 <= UPPER_Z) {
                                    states.match = 1;
                                } else if(next2 === UNDERSCORE || next2 === DOLLAR || next2 === BACKSLASH) {
                                   states.match = 1;
                                } else if(next2 > 0x80) {
                                   states.match = isValidVariablePart(next2); 
                                }
                                if(!states.match) {
                                    foundKeyword = 1;
                                    state = 'Do';
                                    expected = 'DoStatementCurlyOpen';
                                    expected2 = 0;
                                    expected3 = 0;
                                    expected4 = 0;
                                    expect = 0;
                                    left = 0;   
                                    pos+=2;
                                    outputLine = outputLine + 'do ';
                                }
                            } else if(next === LOWER_E) {                                                                                                    
                                // default keyword            
                                if(next2 === LOWER_F && next3 === LOWER_A && next4 === LOWER_U && next5 === LOWER_L && next6 === LOWER_T) {
                                    states.match = 0;
                                    if(next7 >= LOWER_A && next7 <= LOWER_Z) {
                                        states.match = 1;
                                    } else if(next7 >= DIGIT_0 && next7 <= DIGIT_9) {
                                        states.match = 1;
                                    } else if(next7 >= UPPER_A && next7 <= UPPER_Z) {
                                        states.match = 1;
                                    } else if(next7 === UNDERSCORE || next7 === DOLLAR || next7 === BACKSLASH) {
                                       states.match = 1;
                                    } else if(next7 > 0x80) {
                                       states.match = isValidVariablePart(next7); 
                                    }
                                    if(!states.match) {
                                        foundKeyword = 1;
                                        state = 'Default';
                                        expected = 'SwitchColon';
                                        expected2 = 0;
                                        expected3 = 0;
                                        expected4 = 0;
                                        expect = 0;
                                        left = 0;   
                                        pos+=7;
                                        outputLine = outputLine + 'default';
                                    }
                                // delete keyword           
                                } else if(next2 === LOWER_L && next3 === LOWER_E && next4 === LOWER_T && next5 === LOWER_E) {                                    
                                    states.match = 0;
                                    if(next6 >= LOWER_A && next6 <= LOWER_Z) {
                                        states.match = 1;
                                    } else if(next6 >= DIGIT_0 && next6 <= DIGIT_9) {
                                        states.match = 1;
                                    } else if(next6 >= UPPER_A && next6 <= UPPER_Z) {
                                        states.match = 1;
                                    } else if(next6 === UNDERSCORE || next6 === DOLLAR || next6 === BACKSLASH) {
                                       states.match = 1;
                                    } else if(next6 > 0x80) {
                                       states.match = isValidVariablePart(next6); 
                                    }                                    
                                    if(!states.match) {
                                        foundKeyword = 1;
                                        state = 'Delete';
                                        expected = 0;
                                        expected2 = 0;
                                        expected3 = 0;
                                        expected4 = 0;
                                        left = 0;   
                                        pos+=6;
                                        outputLine = outputLine + 'delete ';
                                    }
                                } 
                            }
                        } else if(chr === UPPER_I) {                                
                                // Infinity keyword     
                                if(next === LOWER_N && next2 === LOWER_F && next3 === LOWER_I && next4 === LOWER_N && next5 === LOWER_I && next6 === LOWER_T && next7 === LOWER_Y) {
                                    states.match = 0;
                                    if(next8 >= LOWER_A && next8 <= LOWER_Z) {
                                        states.match = 1;
                                    } else if(next8 >= DIGIT_0 && next8 <= DIGIT_9) {
                                        states.match = 1;
                                    } else if(next8 >= UPPER_A && next8 <= UPPER_Z) {
                                        states.match = 1;
                                    } else if(next8 === UNDERSCORE || next8 === DOLLAR || next8 === BACKSLASH) {
                                       states.match = 1;
                                    } else if(next8 > 0x80) {
                                       states.match = isValidVariablePart(next8); 
                                    }
                                    if(!states.match) {
                                        foundKeyword = 1;
                                        state = 'Infinity';
                                        expected = 0;
                                        expected2 = 0;
                                        expected3 = 0;
                                        expected4 = 0;
                                        left = 1;   
                                        pos+=8;
                                        outputLine = outputLine + 'Infinity';
                                    } 
                                }
                        } else if(chr === LOWER_V) {                            
                            if(next === LOWER_A) {
                                //var keyword
                                if(next2 === LOWER_R) {
                                    states.match = 0;
                                    if(next3 >= LOWER_A && next3 <= LOWER_Z) {
                                        states.match = 1;
                                    } else if(next3 >= DIGIT_0 && next3 <= DIGIT_9) {
                                        states.match = 1;
                                    } else if(next3 >= UPPER_A && next3 <= UPPER_Z) {
                                        states.match = 1;
                                    } else if(next3 === UNDERSCORE || next3 === DOLLAR || next3 === BACKSLASH) {
                                       states.match = 1;
                                    } else if(next3 > 0x80) {
                                       states.match = isValidVariablePart(next3); 
                                    }
                                    if(!states.match) {                                                                                                                             
                                        if(!rules['Var'][lastState]) {                                                                                                                       
                                            asi();                                             
                                        }
                                        foundKeyword = 1;
                                        state = 'Var';
                                        expected = 'Identifier';
                                        expected2 = 0;
                                        expected3 = 0;
                                        expected4 = 0;
                                        expect = 0;
                                        left = 0;   
                                        pos+=3; 
                                        outputLine = outputLine + 'var ';
                                        isVar[''+lookupSquare+lookupCurly+lookupParen] = 1;
                                    }
                                }
                            } else if(next === LOWER_O) {
                                // void keyword
                                if(next2 === LOWER_I && next3 === LOWER_D) {                                    
                                    states.match = 0;
                                    if(next4 >= LOWER_A && next4 <= LOWER_Z) {
                                        states.match = 1;
                                    } else if(next4 >= DIGIT_0 && next4 <= DIGIT_9) {
                                        states.match = 1;
                                    } else if(next4 >= UPPER_A && next4 <= UPPER_Z) {
                                        states.match = 1;
                                    } else if(next4 === UNDERSCORE || next4 === DOLLAR || next4 === BACKSLASH) {
                                       states.match = 1;
                                    } else if(next4 > 0x80) {
                                       states.match = isValidVariablePart(next4); 
                                    }                                    
                                    if(!states.match) {
                                        foundKeyword = 1;
                                        state = 'Void';
                                        expected = 0;
                                        expected2 = 0;
                                        expected3 = 0;
                                        expected4 = 0;
                                        left = 0;   
                                        pos+=4;
                                        outputLine = outputLine + 'void ';
                                    }
                                }
                            }
                        } else if(chr === LOWER_W) {                                                            
                            if(next === LOWER_H) {
                                // while keyword
                                if(chr === LOWER_W && next === LOWER_H && next2 === LOWER_I && next3 === LOWER_L && next4 === LOWER_E) {
                                    states.match = 0;
                                    if(next5 === 9 || next5 === 11 || next5 === 12 || next5 === 32 || next5 === 160 || next5 === 5760 || next5 === 6158 || next5 === 8192 || next5 === 8193 || next5 === 8194 || next5 === 8195 || next5 === 8196 || next5 === 8197 || next5 === 8198 || next5 === 8199 || next5 === 8200 || next5 === 8201 || next5 === 8202 || next5 === 8239 || next5 === 8287 || next5 === 12288) {
                                        states.match = 1;
                                    } else if(next5 === NEWLINE || next5 === CARRIAGE_RETURN || next5 === LINE_SEPARATOR || next5 === PARAGRAPH_SEPARATOR) {
                                        states.match = 1;
                                    } else if(next5 === PAREN_OPEN) {
                                        states.match = 1;
                                    }                                    
                                    if(states.match) {
                                        foundKeyword = 1;                                    
                                        state = 'WhileStatement';
                                        expected = 'WhileStatementParenOpen';
                                        expected2 = 0;
                                        expected3 = 0;
                                        expected4 = 0;
                                        expect = 0;
                                        left = 0;   
                                        pos+=5; 
                                        outputLine = outputLine + 'while';
                                    } 
                                } 
                            } else if(next === LOWER_I) {
                                // with keyword
                                if(next2 === LOWER_T && next3 === LOWER_H) {
                                    states.match = 0;
                                    if(next4 === 9 || next4 === 11 || next4 === 12 || next4 === 32 || next4 === 160 || next4 === 5760 || next4 === 6158 || next4 === 8192 || next4 === 8193 || next4 === 8194 || next4 === 8195 || next4 === 8196 || next4 === 8197 || next4 === 8198 || next4 === 8199 || next4 === 8200 || next4 === 8201 || next4 === 8202 || next4 === 8239 || next4 === 8287 || next4 === 12288) {
                                        states.match = 1;
                                    } else if(next4 === NEWLINE || next4 === CARRIAGE_RETURN || next4 === LINE_SEPARATOR || next4 === PARAGRAPH_SEPARATOR) {
                                        states.match = 1;
                                    } else if(next4 === PAREN_OPEN) {
                                        states.match = 1;
                                    }
                                    if(states.match) {
                                        foundKeyword = 1;
                                        state = 'WithStatement';
                                        expected = 'WithStatementParenOpen';
                                        expected2 = 0;
                                        expected3 = 0;
                                        expected4 = 0;
                                        expect = 0;
                                        left = 0;   
                                        pos+=4;
                                        outputLine = outputLine + 'with';
                                    }
                                }   
                            }
                        } else if(chr === LOWER_N) {                            
                            if(next === LOWER_U) {
                                // null keyword
                                if(next2 === LOWER_L && next3 === LOWER_L) {
                                    states.match = 0;
                                    if(next4 >= LOWER_A && next4 <= LOWER_Z) {
                                        states.match = 1;
                                    } else if(next4 >= DIGIT_0 && next4 <= DIGIT_9) {
                                        states.match = 1;
                                    } else if(next4 >= UPPER_A && next4 <= UPPER_Z) {
                                        states.match = 1;
                                    } else if(next4 === UNDERSCORE || next4 === DOLLAR || next4 === BACKSLASH) {
                                       states.match = 1;
                                    } else if(next4 > 0x80) {
                                       states.match = isValidVariablePart(next4); 
                                    }
                                    if(!states.match) {
                                        foundKeyword = 1;
                                        state = 'Null';
                                        expected = 0;
                                        expected2 = 0;
                                        expected3 = 0;
                                        expected4 = 0;
                                        left = 1;   
                                        pos+=4;
                                        outputLine = outputLine + 'null';
                                    }
                                }   
                            } else if(next === LOWER_E) {
                                // new keyword
                                if(next2 === LOWER_W) {
                                    states.match = 0;
                                    if(next3 >= LOWER_A && next3 <= LOWER_Z) {
                                        states.match = 1;
                                    } else if(next3 >= DIGIT_0 && next3 <= DIGIT_9) {
                                        states.match = 1;
                                    } else if(next3 >= UPPER_A && next3 <= UPPER_Z) {
                                        states.match = 1;
                                    } else if(next3 === UNDERSCORE || next3 === DOLLAR || next3 === BACKSLASH) {
                                       states.match = 1;
                                    } else if(next3 > 0x80) {
                                       states.match = isValidVariablePart(next3); 
                                    }
                                    if(!states.match) {
                                        foundKeyword = 1;
                                        state = 'New';
                                        expected = 0;
                                        expected2 = 0;
                                        expected3 = 0;
                                        expected4 = 0;
                                        left = 0;   
                                        pos+=3;
                                        outputLine = outputLine + 'new ';
                                    }
                                }
                            }
                        } else if(chr === LOWER_E) {                            
                            // else keyword
                            if(next === LOWER_L && next2 === LOWER_S && next3 === LOWER_E) {
                                    states.match = 0;
                                    if(next4 >= LOWER_A && next4 <= LOWER_Z) {
                                        states.match = 1;
                                    } else if(next4 >= DIGIT_0 && next4 <= DIGIT_9) {
                                        states.match = 1;
                                    } else if(next4 >= UPPER_A && next4 <= UPPER_Z) {
                                        states.match = 1;
                                    } else if(next4 === UNDERSCORE || next4 === DOLLAR || next4 === BACKSLASH) {
                                       states.match = 1;
                                    } else if(next4 > 0x80) {
                                       states.match = isValidVariablePart(next4); 
                                    }
                                if(!states.match) {                                                            
                                    if(!isIf[''+lookupSquare+lookupCurly+lookupParen]) {
                                        error("Syntax error unexpected else");
                                    }                                                                                                                                                       
                                    foundKeyword = 1;
                                    state = 'Else';
                                    expected = 0;
                                    expected2 = 0;
                                    expected3 = 0;
                                    expected4 = 0;
                                    left = 0;   
                                    pos+=4;
                                    outputLine = outputLine + 'else ';
                                }  
                            }
                        } else if(chr === LOWER_S) {                            
                            // switch keyword
                            if(next === LOWER_W && next2 === LOWER_I && next3 === LOWER_T && next4 === LOWER_C && next5 === LOWER_H) {
                                states.match = 0;
                                if(next6 === 9 || next6 === 11 || next6 === 12 || next6 === 32 || next6 === 160 || next6 === 5760 || next6 === 6158 || next6 === 8192 || next6 === 8193 || next6 === 8194 || next6 === 8195 || next6 === 8196 || next6 === 8197 || next6 === 8198 || next6 === 8199 || next6 === 8200 || next6 === 8201 || next6 === 8202 || next6 === 8239 || next6 === 8287 || next6 === 12288) {
                                    states.match = 1;
                                } else if(next6 === NEWLINE || next6 === CARRIAGE_RETURN || next6 === LINE_SEPARATOR || next6 === PARAGRAPH_SEPARATOR) {
                                    states.match = 1;
                                } else if(next6 === PAREN_OPEN) {
                                    states.match = 1;
                                }
                                if(states.match) {
                                    foundKeyword = 1;
                                    state = 'SwitchStatement';
                                    expected = 'SwitchStatementParenOpen';
                                    expected2 = 0;
                                    expected3 = 0;
                                    expected4 = 0;
                                    expect = 0;
                                    left = 0;   
                                    pos+=6; 
                                    outputLine = outputLine + 'switch';
                                 } 
                            }
                        } else if(chr === UPPER_N) {                            
                            // NaN keyword
                            if(chr === UPPER_N && next === LOWER_A && next2 === UPPER_N) {                                
                                states.match = 0;
                                if(next3 >= LOWER_A && next3 <= LOWER_Z) {
                                    states.match = 1;
                                } else if(next3 >= DIGIT_0 && next3 <= DIGIT_9) {
                                    states.match = 1;
                                } else if(next3 >= UPPER_A && next3 <= UPPER_Z) {
                                    states.match = 1;
                                } else if(next3 === UNDERSCORE || next3 === DOLLAR || next3 === BACKSLASH) {
                                   states.match = 1;
                                } else if(next3 > 0x80) {
                                   states.match = isValidVariablePart(next3); 
                                }
                                
                                if(!states.match) {
                                    foundKeyword = 1;
                                    state = 'NaN';
                                    expected = 0;
                                    expected2 = 0;
                                    expected3 = 0;
                                    expected4 = 0;
                                    left = 1;   
                                    pos+=3;
                                    outputLine = outputLine + 'NaN';
                                 }
                            }                       
                        } else if(chr === LOWER_B) {                                                                    
                            // break keyword
                            if(next === LOWER_R && next2 === LOWER_E && next3 === LOWER_A && next4 === LOWER_K) {
                                states.match = 0;
                                if(next5 >= LOWER_A && next5 <= LOWER_Z) {
                                    states.match = 1;
                                } else if(next5 >= DIGIT_0 && next5 <= DIGIT_9) {
                                    states.match = 1;
                                } else if(next5 >= UPPER_A && next5 <= UPPER_Z) {
                                    states.match = 1;
                                } else if(next5 === UNDERSCORE || next5 === DOLLAR || next5 === BACKSLASH) {
                                   states.match = 1;
                                } else if(next5 > 0x80) {
                                   states.match = isValidVariablePart(next5); 
                                }                                
                                if(!states.match) {
                                    foundKeyword = 1;
                                    state = 'Break';
                                    expected = 0;
                                    expected2 = 0;
                                    expected3 = 0;
                                    expected4 = 0;
                                    left = 0;   
                                    pos+=5;
                                    outputLine = outputLine + 'break ';
                                }     
                             }
                        } else if(chr === LOWER_R) {                                                                  
                            // return keyword         
                            if(next === LOWER_E && next2 === LOWER_T && next3 === LOWER_U && next4 === LOWER_R && next5 === LOWER_N) {
                                states.match = 0;
                                if(next6 >= LOWER_A && next6 <= LOWER_Z) {
                                    states.match = 1;
                                } else if(next6 >= DIGIT_0 && next6 <= DIGIT_9) {
                                    states.match = 1;
                                } else if(next6 >= UPPER_A && next6 <= UPPER_Z) {
                                    states.match = 1;
                                } else if(next6 === UNDERSCORE || next6 === DOLLAR || next6 === BACKSLASH) {
                                   states.match = 1;
                                } else if(next6 > 0x80) {
                                   states.match = isValidVariablePart(next6); 
                                }
                                if(!states.match) {
                                    foundKeyword = 1;
                                    state = 'Return';
                                    expected = 0;
                                    expected2 = 0;
                                    expected3 = 0;
                                    expected4 = 0;
                                    left = 0;   
                                    pos+=6;
                                    outputLine = outputLine + 'return ';
                                }
                            }                                               
                        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                
                            if(!foundKeyword) {                                                                                                                                                     
                                // Identifiers                                                                                                          
                                if(rules.FunctionIdentifier[lastState]) {
                                    state = 'FunctionIdentifier';
                                    expected = 'FunctionParenOpen';
                                    expected2 = 0;
                                    expected3 = 0;
                                    expected4 = 0;
                                    expect = 0;
                                    outputLine = outputLine + ' ';
                                } else if(rules.CatchStatementIdentifier[lastState]) {
                                    state = 'CatchStatementIdentifier';
                                    expected = 'CatchStatementParenClose';
                                    expected2 = 0;
                                    expected3 = 0;
                                    expected4 = 0;
                                    expect = 0;
                                } else if(rules.ObjectLiteralIdentifier[lastState]) {
                                    state = 'ObjectLiteralIdentifier';
                                    expected = 'ObjectLiteralColon';
                                    expected2 = 0;
                                    expected3 = 0;
                                    expected4 = 0;
                                    expect = 0;                                 
                                } else if(rules.FunctionExpressionIdentifier[lastState]) {
                                    state = 'FunctionExpressionIdentifier';
                                    expected = 'FunctionExpressionParenOpen';
                                    expected2 = 0;
                                    expected3 = 0;
                                    expected4 = 0;
                                    expect = 0;
                                    outputLine = outputLine + ' ';
                                } else if(rules.FunctionArgumentIdentifier[lastState]) {
                                    state = 'FunctionArgumentIdentifier';
                                    expected = 'FunctionParenClose';
                                    expected2 = 'FunctionArgumentComma';
                                    expected3 = 0;
                                    expected4 = 0;
                                    expect = 0;             
                                } else if(rules.FunctionExpressionArgumentIdentifier[lastState]) {
                                    state = 'FunctionExpressionArgumentIdentifier';
                                    expected = 'FunctionExpressionParenClose';
                                    expected2 = 'FunctionExpressionArgumentComma';
                                    expected3 = 0;
                                    expected4 = 0;
                                    expect = 0;
                                } else if(rules.VarIdentifier[lastState]) {                                 
                                    state = 'VarIdentifier';
                                    expected = 0;
                                    expected2 = 0;
                                    expected3 = 0;
                                    expected4 = 0;
                                    expect = 0;
                                    left = 1;                                                                                                                 
                                } else if(rules.Identifier[lastState]) {
                                    state = 'Identifier';
                                    expected = 0;
                                    expected2 = 0;
                                    expected3 = 0;
                                    expected4 = 0;
                                    left = 1;                               
                                } else {
                                    if(!rules['Identifier'][lastState] && newLineFlag) {                                                                                    
                                        asi();                                              
                                    }
                                    state = 'Identifier';
                                    expected = 0;
                                    expected2 = 0;
                                    expected3 = 0;
                                    expected4 = 0;
                                    left = 1;
                                }                   
                                states = {first:0};                         
                                outputLine = outputLine + scoping;
                                for(;;) {   
                                    if(pos === length) {                        
                                        break;
                                    }                                                                   
                                    chr = code.charCodeAt(pos);
                                    if(chr === BACKSLASH) {
                                        next = code.charCodeAt(pos+1);
                                        next2 = code.charCodeAt(pos+2);
                                        next3 = code.charCodeAt(pos+3);
                                        next4 = code.charCodeAt(pos+4);
                                        next5 = code.charCodeAt(pos+5);
                                        unicodeChr1 = code.charAt(pos+2);
                                        unicodeChr2 = code.charAt(pos+3);
                                        unicodeChr3 = code.charAt(pos+4);
                                        unicodeChr4 = code.charAt(pos+5);                                                                       
                                        if(next !== LOWER_U) {
                                            error('Invalid unicode escape sequence');
                                        }
                                        if(
                                            ((next2 >= LOWER_A && next2 <= LOWER_F) || (next2 >= UPPER_A && next2 <= UPPER_F) || (next2 >= DIGIT_0 && next2 <= DIGIT_9))&&
                                            ((next3 >= LOWER_A && next3 <= LOWER_F) || (next3 >= UPPER_A && next3 <= UPPER_F) || (next3 >= DIGIT_0 && next3 <= DIGIT_9))&&
                                            ((next4 >= LOWER_A && next4 <= LOWER_F) || (next4 >= UPPER_A && next4 <= UPPER_F) || (next4 >= DIGIT_0 && next4 <= DIGIT_9))&&
                                            ((next5 >= LOWER_A && next5 <= LOWER_F) || (next5 >= UPPER_A && next5 <= UPPER_F) || (next5 >= DIGIT_0 && next5 <= DIGIT_9))
                                        ) {
                                            if(!states.first) {
                                                if(isValidVariable(parseInt(unicodeChr1+unicodeChr2+unicodeChr3+unicodeChr4,16))) {
                                                    outputLine = outputLine + '\\u'+unicodeChr1+unicodeChr2+unicodeChr3+unicodeChr4;
                                                    pos+=6;
                                                    continue;
                                                } else {
                                                    error("Invalid unicode escape sequence used as variable");      
                                                }
                                                states.first = 1;   
                                            } else {
                                                if(isValidVariablePart(parseInt(unicodeChr1+unicodeChr2+unicodeChr3+unicodeChr4,16))) {
                                                    outputLine = outputLine + '\\u'+unicodeChr1+unicodeChr2+unicodeChr3+unicodeChr4;
                                                    pos+=6;
                                                    continue;
                                                } else {
                                                    error("Invalid unicode escape sequence used as variable");      
                                                }
                                            }
                                        } else {
                                            error("Invalid hex digits in unicode escape");
                                        }                                                                                                                       
                                    } else if(!states.first) {
                                        states.first = 1;
                                        if(chr >= LOWER_A && chr <= LOWER_Z) {                            
                                        } else if(chr >= UPPER_A && chr <= UPPER_Z) {                                                                   
                                        } else if(chr === UNDERSCORE || chr === DOLLAR) { 
                                        } else if(chr > 0x80) {
                                            if(!isValidVariable(chr)) {
                                                error('Unexpected character ' + code.charAt(pos) + '. Cannot follow '+lastState+'.Output:'+output);    
                                            }                                                              
                                        } else {
                                            error('Unexpected character ' + code.charAt(pos) + '. Cannot follow '+lastState+'.Output:'+output);
                                        }   
                                    } else {
                                        if(chr >= LOWER_A && chr <= LOWER_Z) {                            
                                        } else if(chr >= UPPER_A && chr <= UPPER_Z) {
                                        } else if(chr >= DIGIT_0 && chr <= DIGIT_9) {                           
                                        } else if(chr === UNDERSCORE || chr === DOLLAR) {                            
                                        } else if(chr > 0x80) {
                                            if(!isValidVariablePart(chr)) {
                                               break; 
                                            }                                      
                                        } else if(chr === BACKSLASH && !states.unicode) {
                                            states.unicode = 1;
                                        } else {
                                            break;
                                        }
                                    }                                                           
                                    outputLine = outputLine + code.charAt(pos);                                                 
                                    pos++;
                                }
                                outputLine = outputLine + scoping;                                                  
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
						
						if(state === 'Nothing') {						    
							error("No state defined for char:" +String.fromCharCode(chr) + ', left: '+left+', last state: '+lastState+',output:'+output);
						}
						
						if(!rules[state]) {
							error("State does not exist in the rules:" +state);
						}												                       
						
						if(!rules[state][lastState] && newLineFlag) {						    						    						    
							asi();												
						}
						
						output = output + '' + outputLine;
						 
						if(!rules[state][lastState]) {																							
							error("Unexpected " + state + '. Cannot follow '+lastState+'.Output:'+output);
						} else if(((expected && expected !== state) || (expected2 && expected2 !== state) || (expected3 && expected3 !== state) || (expected4 && expected4 !== state)) && expect === 1) {
							msg = "Expected " + expected;
							if(expected2) {
								msg = msg + ' or ' + expected2;
							}
							if(expected3) {
								msg = msg + ' or ' + expected3;
							}
							if(expected4) {
								msg = msg + ' or ' + expected4;
							}
							msg = msg + '. But got '+state + ' with last state:'+lastState+', output:'+output;
							error(msg);
						}
						
						if(parseTree){							
							parseTreeOutput = parseTreeOutput + '<'+state+'>' + outputLine + '</'+state+'>';
						}
						lastState = state;																				
						newLineFlag = 0;
						if(parseTimesFlag) {   
                           end = +new Date;
                           timers.push({state:state, time: end-start});
                        }																									
					}	
					if(((expected && expected !== state) || (expected2 && expected2 !== state) || (expected3 && expected3 !== state) || (expected4 && expected4 !== state))) {
						msg = "Expected " + expected;
						if(expected2) {
							msg = msg + ' or ' + expected2;
						}
						if(expected3) {
							msg = msg + ' or ' + expected3;
						}
						if(expected4) {
							msg = msg + ' or ' + expected4;
						}
						msg = msg + '. But got '+state + ' with last state:'+lastState + ', output:'+output;
						error(msg);
					}
									
					if(lastState === 'IfStatementParenClose') {
						error("Syntax error");	
					}
					
					if(lookupSquare) {
						error("Syntax error unmatched [");
					} else if(lookupCurly) {
						error("Syntax error unmatched {");
					} else if(lookupParen) {
						error("Syntax error unmatched (");
					} else if(caseCount) {
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
                    if(parseTimesFlag) {                    
                        that.parseTimes(timers);
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
                if(obj.parseTimes) {
                    this.parseTimes = obj.parseTimes;
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