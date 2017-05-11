(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.noframe = factory());
}(this, (function () { 'use strict';

/* global document, window */
function framer(target, container) {
  var frame = target;
  var height = frame.offsetHeight;
  var width = frame.offsetWidth;
  var frameStyle = frame.style;
  if (typeof container !== 'undefined') {
    var parent = document.querySelector(container);
    var maxwidth = window.getComputedStyle(parent, null).getPropertyValue('max-width');
    frameStyle.width = '100%';
    frameStyle.maxHeight = 'calc(' + maxwidth + ' * ' + height + '/' + width + ')';
  } else {
    var _maxwidth = width + 'px';
    frameStyle.display = 'block';
    frameStyle.marginLeft = 'auto';
    frameStyle.marginRight = 'auto';
    var fullwidth = _maxwidth + 'px';
    if (width > frame.parentElement.offsetWidth) {
      fullwidth = frame.parentElement.offsetWidth;
      frameStyle.maxHeight = 'calc(' + fullwidth + 'px * ' + height + '/' + width + ')';
    } else {
      frameStyle.maxHeight = 'calc(' + _maxwidth + ' * ' + height + '/' + width + ')';
    }
    frameStyle.width = fullwidth + 'px';
  }
  frameStyle.height = 'calc(100vw * ' + height + '/' + width + ')';
  frameStyle.maxWidth = '100vw';
}

function noframe(target, container) {
  var frames = typeof target === 'string' ? document.querySelectorAll(target) : target;
  if (!('length' in frames)) frames = [frames];
  for (var i = 0; i < frames.length; i + 1) {
    var frame = frames[i];
    framer(frame, container);
  }
}

return noframe;

})));
