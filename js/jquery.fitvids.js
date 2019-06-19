(function( document, undefined ) {
  var selectors = [
      'iframe[src*="player.vimeo.com"]',
      'iframe[src*="youtube.com"]'
      ],
      $allVids, $vid,
      $wrap, id,
      i,l,
      width,height,ratio,
      styles = [],
      $style;

  if (!('querySelectorAll' in document )) {
    // does not cut mustard
    return;
  }

  $allVids = document.querySelectorAll( selectors.join(',') );
  for ( i=0, l=$allVids.length; i<l; i++ ) {
    $vid = $allVids[i];
 
    // calculate ratio
    width = $vid.width;
    height = $vid.height;
    ratio = height / width;
 
    // create wrapper element
    $wrap = document.createElement("div");
    $wrap.id = 'fluid-video-wrapper-' + i;
    $wrap.className = "fluid-width-video-wrapper";
    // $wrap.style.paddingTop = (ratio * 100) + "%";
    pushRules( $wrap.id, ratio );
 
    // add wrapped video to document
    $vid.removeAttribute("width");
    $vid.removeAttribute("height");
    $wrap.appendChild($vid.cloneNode(true));
    $vid.parentNode.replaceChild($wrap, $vid);
  }
 
  $style = document.createElement( 'style' );
  document.head.appendChild($style);
 
  if ( $style.styleSheet ) {
    $style.styleSheet.cssText = styles.join( "\n" );
  }
  else {
    $style.innerHTML = styles.join( "\n" );
  }
 
  function pushRules( wrapId, ratio ) {
    var selector = '#'+ wrapId,
        paddingTop = (ratio * 100) + "%",
        maxWidth = (95/ratio) + 'vh';
 
    styles.push( selector + '{max-width:' + maxWidth + '}' );
    styles.push( selector + ':before{padding-top:' + paddingTop + '}' );
  }
}( window.document ));