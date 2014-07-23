

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

window.classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};




})( window );

$(document).ready(function(){
  // newdiv.setAttribute('style','position: absolute; left: 0; top: 0');
  $( '<div id="menu"><div class="burger"><div class="one"></div><div class="two"></div><div class="three"></div></div><div class="circle"></div></div>' ).insertBefore( $( "#top-menu" ) );
  // wrapper3.appendChild(newdiv);
  
  var menuLeft = document.getElementById( 'top-menu' ),
  showLeft = document.getElementById( 'menu' ),
  body = document.body,
  search = document.getElementById( 'quick-search' ),
  menuButton = document.getElementById( 'menu' );

  showLeft.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( body, 'menu-push-toright' );
    classie.toggle( menuButton, 'menu-push-toright' );
    classie.toggle( search, 'menu-push-toright' );
    classie.toggle( menuLeft, 'open' );
    // disableOther( 'showLeft' );
  };
  $('input[name$="q"]').attr('placeholder','Enter Search Text');
  // $( "a" ).addClass( "fa" )
  // $('body').addClass("menu-push-toright");
})

