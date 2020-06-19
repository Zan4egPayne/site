function returnFalse(e){
  return false;
}
 
function cancelEvent(e){
  if(e.preventDefault)e.preventDefault();
  else e.returnValue=false;
}
 
function addHandler(e,event,action,param){
  if(document.addEventListener)e.addEventListener(event,action,param);
  else if(document.attachEvent)e.attachEvent('on'+event,action);
  else e['on'+event]=action;
}
 
function removeHandler(e,event,action,param){
  if(document.addEventListener)e.removeEventListener(event,action,param);
  else if(document.attachEvent)e.detachEvent('on'+event,action);
  else e['on'+event]=returnFalse;
}
 
addHandler(document,'mousedown',mouseDown,false);
addHandler(document,'mouseup',mouseUp,false);
 
function mouseDown(e){
  e=e||event;
  cancelEvent(e);
  addHandler(document,'selectstart',returnFalse,false);
}
 
function mouseUp(e){
  removeHandler(document,'selectstart',returnFalse,false);
}