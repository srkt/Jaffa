
export module Jaffa {

export class ElementFactory {

    /*
        Element Content
        https://developer.mozilla.org/en-US/docs/Web/HTML/Element

     */


    static HTML_ELEMENTS:Object = {
                                    "MAIN_ROOT":["html"],
                                    "DOCUMENT_METADATA":["base","head","link","meta","script","style","title"],
                                    "CONTENT_SECTION":["address","article","body","h1","h6","aside","footer","header","h2","h3","h4","h5","hgroup","nav","section"],
                                    "TEXT_CONTENT":["dd","dl","div","article","nav","dt","figcaption","figure","hr","li","ol","ul","menu","main","body","list-style-type","p","pre"],
                                    "INLINE_TEXT":["a","abbr","title","b","bdi","bdo","br","cite","code","data","time","dfn","em","i","kbd","mark","q","blockquote","rp","ruby","rt","rtc","rb","s","del","ins","samp","small","span","class","id","lang","strong","sub","sup","u","var","wbr"],
                                    "IMAGE_MULTIMEDIA":["area","map","audio","src","source","img","track","video",".vtt"],
                                    "EMBEDDED_CONTENT":["embed","object","param","source","picture","audio","video"],
                                    "SCRIPTING":["canvas","noscript","script"],
                                    "DEMARCATING_EDITS":["del","ins"],
                                    "TABLE_CONTENT":["caption","table","col","colgroup","tbody","tr","thead","tfoot","td","th","scope","headers"],
                                    "FORMS":["button","datalist","option","fieldset","label","form","input","type","for","legend","meter","optgroup","select","output","progress","textarea"],
                                    "INTERACTIVE_ELEMENTS":["details","dialog","form","returnValue","value","menu","menuitem","summary"],
                                    "WEB_COMPONENTS":["content","element","shadow","template"],
                                    "DEPRECATED":["acronym","abbr","applet","basefont","font","big","blink","center","body","command","content","dir","frame","frameset","isindex","keygen","listing","marquee","multicol","nextid","noembed","embed","plaintext","spacer","strike","tt","code","xmp"]
                                };

     static ELEM_ATTRIBUTES = {"form":["accept","accept-charset","action","autocomplete","enctype","method","name","novalidate","target"],"input":["accept","alt","autocomplete","autofocus","autosave","checked","dirname","disabled","form","formaction","height","list","max","maxlength","min","multiple","name","pattern","placeholder","readonly","required","size","src","step","type","usemap","value","width"],"Globalattribute":["accesskey","class","contenteditable","contextmenu","data-*","dir","draggable","dropzone","hidden","id","itemprop","lang","spellcheck","style","tabindex","title"],"applet":["align","alt","code","codebase"],"caption":["align"],"col":["align","bgcolor","span"],"colgroup":["align","bgcolor","span"],"hr":["align","color"],"iframe":["align","height","name","sandbox","seamless","src","srcdoc","width"],"img":["align","alt","border","height","ismap","sizes","src","srcset","usemap","width"],"table":["align","bgcolor","border","summary"],"tbody":["align","bgcolor"],"td":["align","bgcolor","colspan","headers","rowspan"],"tfoot":["align","bgcolor"],"th":["align","bgcolor","colspan","headers","rowspan","scope"],"thead":["align"],"tr":["align","bgcolor"],"area":["alt","coords","download","href","hreflang","media","ping","rel","shape","target"],"script":["async","charset","defer","integrity","language","src","type"],"button":["autofocus","disabled","form","formaction","name","type","value"],"keygen":["autofocus","challenge","disabled","form","keytype","name"],"select":["autofocus","disabled","form","multiple","name","required","size"],"textarea":["autofocus","cols","dirname","disabled","form","maxlength","name","placeholder","readonly","required","rows","wrap"],"audio":["autoplay","buffered","controls","loop","preload","src"],"video":["autoplay","buffered","controls","height","loop","muted","poster","preload","src","width"],"body":["bgcolor"],"marquee":["bgcolor","loop"],"object":["border","data","form","height","name","type","usemap","width"],"meta":["charset","content","http-equiv","name"],"command":["checked","disabled","icon","radiogroup","type"],"blockquote":["cite"],"del":["cite","datetime"],"ins":["cite","datetime"],"q":["cite"],"basefont":["color"],"font":["color"],"time":["datetime"],"track":["default","kind","label","src","srclang"],"fieldset":["disabled","form","name"],"optgroup":["disabled"],"option":["disabled","selected","value"],"a":["download","href","hreflang","media","ping","rel","shape","target"],"label":["for","form"],"output":["for","form","name"],"meter":["form","high","low","max","min","optimum","value"],"progress":["form","max","value"],"canvas":["height","width"],"embed":["height","src","type","width"],"base":["href","target"],"link":["href","hreflang","integrity","media","rel","sizes"],"bgsound":["loop"],"html":["manifest"],"source":["media","sizes","src","type"],"style":["media","scoped","type"],"map":["name"],"param":["name","value"],"details":["open"],"ol":["reversed","start"],"menu":["type"],"li":["value"]};

     static ATTRIBUTES =  ["accept","accept-charset","accesskey","action","align","alt","async","autocomplete","autofocus","autoplay","autosave","bgcolor","border","buffered","challenge","charset","checked","cite","class","code","codebase","color","cols","colspan","content","contenteditable","contextmenu","controls","coords","data","data-*","datetime","default","defer","dir","dirname","disabled","download","draggable","dropzone","enctype","for","form","formaction","headers","height","hidden","high","href","hreflang","http-equiv","icon","id","integrity","ismap","itemprop","keytype","kind","label","lang","language","list","loop","low","manifest","max","maxlength","media","method","min","multiple","muted","name","novalidate","open","optimum","pattern","ping","placeholder","poster","preload","radiogroup","readonly","rel","required","reversed","rows","rowspan","sandbox","scope","scoped","seamless","selected","shape","size","sizes","span","spellcheck","src","srcdoc","srclang","srcset","start","step","style","summary","tabindex","target","title","type","usemap","value","width","wrap"];

    constructor() {

    }

    static Create():void{


    }


}
}