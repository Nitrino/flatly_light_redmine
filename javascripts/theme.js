( function( window ) {

  'use strict';

  function classReg( className ) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

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
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };

  function addElements (){
    $( '<div id="menu"><div class="burger"><div class="one"></div><div class="two"></div><div class="three"></div></div><div class="circle"></div></div>' ).insertBefore( $( "#top-menu" ) );
    $( "#loggedas" ).prepend( "<div class='redmine-logo'></div>" );
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
    };
    $( 'input[name$="q"]' ).attr( 'placeholder','Enter Search Text' );
  }

  $(document).ready(addElements)

  $(window).load(function() {
    $( "#quick-search form" ).css('margin-right', $( "#s2id_project_quick_jump_box" ).width() + 60);
  })
  $( document ).on( "click", "#main, #header", function() {
    $( "#top-menu" ).removeClass( "open" );
    $( ".menu-push-toright" ).removeClass( "menu-push-toright" );
  });

  window.onerror = function myErrorFunction(message, url, linenumber) {
    if (location.href.indexOf("/dmsf") != -1){
      $(document).ready(addElements)
    }
  }

})( window );


