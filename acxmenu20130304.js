// +++ acxmenu - Author:Csaba Keszler, Homepage:https://code.google.com/p/acxmenu/
// Licensed under the MIT license:http://www.opensource.org/licenses/mit-license.php
y1=0; //background-position open
y2=-20; //background-position close
ac=0;
var set={'m0':{ //settings var name = menu id
'h':1, //header image: 0(false), 1(true)
'i':0, //initial expanding level
'j':1, //jump backwards: 0(false), 1(true)
'l':3, //must be set to the maximum menulevel
'm':0, //mouseover: 0(false), 1(true)
'p':0, //position: 0(vertical), 1(horizontal)
's':'slow', //speed: 'fast', 'normal', 'slow', ...
't':1 //toggle: 0(self open, else close), 1(self toggle, else close), 2(self toggle)
}};
function acxmenu(x){
  if(ac==1)return false;
	else ac=1;
	var b=$(x),c=b.closest('.m0'),d=c[0].id,m=b.next(),n,o,p=[],q=[],r=set[d],i,j;
	for(i=1;i<=r.l;i++){
		n='#'+d+' .m'+i;
		o=m.index(n);
		p[i]=b.closest(n);
		if(o>=0){
			if(r.t===0||(r.t>0&&m.is(':hidden')))p[i]=m;
			if(r.t===0||(r.t==1&&m.is(':hidden'))||(r.t==2&&m.is(':visible')))q[i]=o;
		}
		if(r.t<2){
			q[i]=p[i].index(n);
			j=q[i]>=0?':not(:eq('+q[i]+'))':'';
		}
		else j=':eq('+q[i]+')';
		h=r.p<1?'hide':b.outerHeight();
		w=r.p>0?'hide':b.outerWidth();
		c.find('.m'+i+j).animate({height:'hide',width:'hide'},r.s);
		imgpos(c.find('.h'+i+j),y2);
		if(r.p<1)h='show';else w='show';
		p[i].animate({height:'show',width:'show'},r.s);
		imgpos(p[i].prev(),y1);
	}
	c.find('a').removeClass('lm');
	b.addClass('lm').focus();
	setTimeout(function(){ac=0;},333);
}
function imgpos(i,p){i.find('span').css('background-position',"0 "+p+"px");}
function knav(x,e,k){
	if(k==9){
		k=e.shiftKey?38:40;
		knav(x,e,k);
		e.preventDefault();
		return false;
	}
	var c=$(x).closest('.m0'),a=c.find('a'),d=c[0].id,i=a.index(x),l=a.length,p;
	if(k>36&&k<41){
		if(k<39)i=(i===0)?l-1:i-1;
		else i=(i==l-1)?0:i+1;
		if(set[d].j>0){
			p=a.eq(i).closest('div[class*="m"]');
			if(p.is(':hidden'))i=a.index(p.prev());
		}
		acxmenu('#'+d+' a:eq('+i+')');
	}
	if(k==13)$(x).attr('href');
}
$(function(){
	for(var i in set){
		var j,r=set[i],m=$('#'+i),n;
		for(j=r.l;j>0;j--){
			if(r.h==1)m.find('.h'+j).append("<span class='himg'></span>");
			if(r.i<j){
				n=m.find('.m'+j);
				n.hide();
				if(r.h==1)imgpos(n.prev(),y2);
			}
		}
	}
	$('#m0 a,#m1 a').click(function(){acxmenu(this);})
	.keydown(function(e){knav(this,e,e.which);})
	.mouseover(function(){
		var r=set[$(this).closest('.m0')[0].id];
		if(r.m>0)acxmenu(this);
	});
	$('.himg').click(function(){
		acxmenu($(this).parent());
		return false;
	});
    //optional
	$('#smap').unbind('click').click(function(){
		acxmenu('#m0 a');
		$('#m0 a').removeClass('lm');
		$(this).addClass('lm').focus();
	});
	acxmenu('#m0 a:eq(12)');
	$('p').eq(1).click(function(){acxmenu('#m0 a[href*="m0"]');});
	$('a[href=""]').click(function(){return false;});
});
