#[acxmenu](http://code.google.com/p/acxmenu/)

Acxmenu - multilevel jquery accordion menu plugin for [jQuery](http://jquery.com).

Demo page at http://jsfiddle.net/keszlercsaba/qqwPS/

## Features

*  Very lightweight, easy to use and easy to customize.
*  Pure CSS and jQuery based.
*  Contains only "a" and "div" tags.
*  Search engine friendly.
*  Ability to indicate expanded items.
*  Able to support any number of levels.
*  Cross browser.
*  Keyboard accessible using Tab and Enter.
*  Keyboard accessible using Cursor Keys and Enter.
*  Option for automatic sublevel indicator image which has open and closed submenu states.
*  Animated open and close actions.
*  It close previously opened submenus when open a different submenu.
*  Able to embed more than one accordion menu on the page at once.
*  It can 'close all' and 'open all' levels.
*  Can create external links to open single panel.
*  Can be used horizontally or vertically.
*  Mouse access with click or mouseover.
*  Separate action for header and header image click.
*  Separate settings for each menu on the page:onfocus action, speed, toggle submenu.
*  It's free.

## Usage

### Settings

    var set={"m0":{ // settings var name = menu id
	"f":0, 			// onfocus: 0(false), 1(true)
	"h":1, 			// header image: 0(false), 1(true)
	"i":0, 			// initial expanding level
	"j":1, 			// jump backwards: 0(false), 1(true)
	"l":3, 			// must be set to the maximum menulevel
	"p":0, 			// position: 0(vertical), 1(horizontal)
	"s":"slow", 	// speed: 'fast', 'normal', 'slow', ...
	"t":1 			// toggle: 0(self open, else close), 1(self toggle, else close), 2(self toggle)
	}};


### Calling 

	acxmenu('#m0 a:eq(12)'); 	// by index reference
	acxmenu('#m0 a[href*="m0"]');	// by attribute reference

## Version

*1.0.0

## License

acxmenu is licensed under the MIT license:

* http://www.opensource.org/licenses/mit-license.php
