(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"3Ag8":function(e,a,t){"use strict";t.r(a);var i,n=t("ln6h"),o=t.n(n),r=t("MX0m"),l=t.n(r),s=t("q1tI"),m=t.n(s),p=t("8Kt/"),c=t.n(p),d=t("U88R"),k=t("vYYK"),u=t("nOHt"),j=t("QtN1"),y=t("dSjA"),g=m.a.createElement,v={padding:"1rem 0",borderTop:"1px solid #b2b2b2",marginTop:"4rem"},S={fontFamily:"'Poppins', sans-serif",color:"#333333",fontSize:"1.2rem",textAlign:"center",letterSpacing:"3px",padding:"2rem 0 1rem 0",textTransform:"uppercase"},D={fontFamily:"'Playfair Display', serif",fontWeight:"600",fontStyle:"italic",color:"#333333",fontSize:"3rem",textAlign:"center",letterSpacing:"2px",padding:"0 0 1rem 0"},f=(i={fontFamily:"'Poppins', sans-serif",color:"#333333",fontSize:"1.2rem",textTransform:"uppercase"},Object(k.a)(i,"color","#333333"),Object(k.a)(i,"letterSpacing","1px"),Object(k.a)(i,"padding","1rem 0 .4rem 1rem"),Object(k.a)(i,"borderBottom","1px solid #b2b2b2"),Object(k.a)(i,"wordBreak","break-word"),i),R={width:"80%",margin:"0 auto",textAlign:"center",fontFamily:"'Poppins', sans-serif",fontSize:"1.2rem",color:"#333333"},b={fontFamily:"'Playfair Display', serif",color:"#333333",fontStyle:"italic"},h=function(){var e=Object(u.useRouter)(),a=Object(s.useContext)(j.a).color,t=y,i=void 0!==t[e.query.id]?t[e.query.id].title:null,n=void 0!==t[e.query.id]?t[e.query.id].coverImage:null,o=function(e){var a=[];if(void 0!==e&&null!==e){for(var t=0;t<e.length;t++)"p"===e[t].type&&a.push(g("div",{key:789*t,style:R},g("p",{key:89*t},e[t].content))),"h2"===e[t].type&&a.push(g("div",{key:66*t},g("h2",{style:D,key:99*t},e[t].content))),"h3"===e[t].type&&a.push(g("div",{key:55*t},g("h2",{style:S,key:97*t},e[t].content))),"t"===e[t].type&&a.push(g("div",{key:71*t,style:v},g("div",{key:t,style:{display:"grid",gridTemplateColumns:"repeat("+e[t].meta.width+", 1fr)"}},g("div",{className:"tableTitle",style:{gridColumn:"span "+e[t].meta.width}},g("h2",{style:S},e[t].meta.title)),e[t].content.map((function(e,a){return g("div",{className:"tableData",key:77*a,style:f},e)}))),g("div",{style:b},g("p",null,e[t].meta.note))));return a}return null}(void 0!==t[e.query.id]?t[e.query.id].body:null);return g("div",{className:l.a.dynamic([["1932127016",[a,n]]])+" serviceWrapper"},g("div",{className:l.a.dynamic([["1932127016",[a,n]]])+" spacer"}),g("div",{className:l.a.dynamic([["1932127016",[a,n]]])+" container"},g("div",{className:l.a.dynamic([["1932127016",[a,n]]])+" service"},g("div",{className:l.a.dynamic([["1932127016",[a,n]]])+" coverImage"}),g("h1",{className:l.a.dynamic([["1932127016",[a,n]]])},i),o)),g(l.a,{id:"1932127016",dynamic:[a,n]},[".spacer.__jsx-style-dynamic-selector{width:15vw;min-height:100vh;min-width:250px;}",".serviceWrapper.__jsx-style-dynamic-selector{width:100%;height:100%;background-color:".concat(a,";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:130px 0 0 0;}"),".container.__jsx-style-dynamic-selector{width:calc(100% - 15vw);min-width:calc(100% - 250px);}",".container.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{text-align:center;}",".service.__jsx-style-dynamic-selector{width:80%;min-width:500px;max-width:1000px;margin:0 auto;}",".service.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-family:'Playfair Display',serif;font-weight:600;font-style:italic;color:#333333;font-size:3rem;text-align:center;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;padding:0 0 1rem 0;}",".coverImage.__jsx-style-dynamic-selector{height:20vw;width:100%;background-image:url('".concat(n,"');background-size:cover;background-position:center;}"),"@media(max-width:760px){.spacer.__jsx-style-dynamic-selector{display:none;}.container.__jsx-style-dynamic-selector{width:100%;}.service.__jsx-style-dynamic-selector{width:95%;min-width:0;}.coverImage.__jsx-style-dynamic-selector{height:250px;}.serviceWrapper.__jsx-style-dynamic-selector{padding-top:70px;}.tableData{font-size:.9rem!important;}}"]))},x=[{link:"\u0160tampanje kopiranje i skeniranje",color:"#e9e9e9"},{link:"Veliki formati",color:"#f4f1d3"},{link:"Reklamni materijal i id kartice",color:"#fff2f2"},{link:"Kori\u010denje",color:"#f4f1d3"},{link:"VHS u digitalni format",color:"#e9e9e9"},{link:"Ostale usluge",color:"#fff2f2"}],w=x.map((function(e,a){return e.link.toLocaleLowerCase().replace(/ /g,"-")})),z=t("+fTy"),_=t("YFqc"),P=t.n(_),N=t("JTnK"),C=t.n(N),A=m.a.createElement,O=function(){var e=Object(s.useContext)(j.a),a=e.color,t=e.setColor,i=Object(s.useContext)(z.a),n=i.active,o=i.setActive,r=Object(s.useState)(!1),m=r[0],p=r[1];return A("div",{className:l.a.dynamic([["4242422067",[a]]])+" "+" ".concat(C.a.navWrapper," ").concat(m?"":"openDrawer")},A("div",{className:l.a.dynamic([["4242422067",[a]]])+" "+(C.a.navSpacer||"")}),A("ul",{className:l.a.dynamic([["4242422067",[a]]])+" "+(C.a.nav||"")},w.map((function(e,i){return A("li",{key:32*i,className:l.a.dynamic([["4242422067",[a]]])+" "+((n==i?"activeLink":"")||"")},A(P.a,{href:"/usluge/[id]",as:"/usluge/".concat(e)},A("a",{onClick:function(){t(x[i].color),o(i),p(!m)},className:l.a.dynamic([["4242422067",[a]]])},x[i].link)))})),A("li",{onClick:function(){return p(!m)},className:l.a.dynamic([["4242422067",[a]]])+" drawer"},"USLUGE")),A(l.a,{id:"4242422067",dynamic:[a]},["ul.__jsx-style-dynamic-selector{background-color:".concat(a,";}"),".activeLink.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#d03b28;}",".drawer.__jsx-style-dynamic-selector{border-top:1px solid #d2d2d2;cursor:pointer;color:#333333;font-size:18px;padding-top:29px;padding-bottom:20px;margin-top:12px;box-shadow:rgba(0,0,0,0.2) 0px 1px 20px 0px;}",".openDrawer.__jsx-style-dynamic-selector{-webkit-transform:translateY(-315px);-ms-transform:translateY(-315px);transform:translateY(-315px);}","@media(min-width:761px){.drawer.__jsx-style-dynamic-selector{display:none;}.openDrawer.__jsx-style-dynamic-selector{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}"]))};t.d(a,"getStaticPaths",(function(){return K}));var I=m.a.createElement;function K(){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{paths:[{params:{id:"\u0161tampanje-kopiranje-i-skeniranje"}},{params:{id:"veliki-formati"}},{params:{id:"vhs-u-digitalni-format"}},{params:{id:"kori\u010denje"}},{params:{id:"reklamni-materijal-i-id-kartice"}}],fallback:!1});case 1:case"end":return e.stop()}}))}a.default=function(){return I("div",{className:"jsx-3422142364 appWrapper"},I(c.a,null,I("title",{className:"jsx-3422142364"},"Home"),I("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=no,shrink-to-fit=no",className:"jsx-3422142364"}),I("meta",{content:"AG Copy, Fotokopirnica u samom Centru Beograda. Fotokopiranje, \u0161tampa, kori\u010denje, izrada plasti\u010dnih ID kartica, \u0161tampa na majicama, \u0161oljama, privescima.",name:"description",className:"jsx-3422142364"}),I("link",{href:"https://fonts.googleapis.com/css?family=Poppins:300,400,600,700,900&display=swap",rel:"stylesheet",className:"jsx-3422142364"}),I("link",{href:"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap",rel:"stylesheet",className:"jsx-3422142364"})),I(d.a,null),I(O,null),I(h,null),I(l.a,{id:"3422142364"},["body{overflow-x:hidden;margin:0;padding:0;}",".appWrapper.jsx-3422142364{width:100%;height:100%;}"]))}},SnhW:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/usluge/[id]",function(){return t("3Ag8")}])},dSjA:function(e){e.exports=JSON.parse('{"\u0161tampanje-kopiranje-i-skeniranje":{"coverImage":"/mags.jpg","title":"\u0160tampa i kopiranje","description":"","body":[{"type":"p","content":"Vr\u0161imo \u0161tampanje sa svih medija: USB-a, CD-a, DVD-a, memorijskih kartica. Podr\u017eani formati obuhvataju: Word .doc i .docx, Power Point .ppt, Excel xlsx, PDF-a i dr"},{"type":"p","content":"Svi dokumenti moraju biti pripremljeni za \u0161tampu. Cena \u0161tampe je iz cenovnika i NE napla\u0107uje se otvaranje medija. Svaka proba, priprema i prepravka (ukoliko je mogu\u0107a) se napla\u0107uje po cenovniku. Cena A3 je duplo A4 i va\u017ei za \u0161tampu u crno-belo i u boji."},{"type":"p","content":"Uz standardnu uslugu kopiranja, vr\u0161imo \u0161tampu svih vrsta memoranduma, diploma, zahvalnica, pohvalnica i sli\u010dnih dokumenata."},{"type":"t","meta":{"width":"3","title":"Kopiranje i \u0161tampa crno-belo","note":"* U cenu \u0161tampe crno-belo ura\u010dunat je 80gr.papir, preko 5000 kopija cena po dogovoru. Za velike, te\u0161ke knjige i crne kopije cena je duplo od standardnog. Na donetim papirima i donetom materijalu ne kopiramo i ne \u0161tampamo."},"content":["Broj kopija","Jednostrano","Obostrano po strani (list)","1 \u2013 10","10,00 RSD","7,50 (15,00) RSD","11 \u2013 50","7,00 RSD"," 5,00 (10,00) RSD","51 \u2013 100","5,00 RSD","3,50 (7,00) RSD","101 \u2013 500","4,00 RSD","3,00 (6,00) RSD","501 \u2013 3000","3,50 RSD","2,50 (5,00) RSD","3001 \u2013 5000","3,00 RSD","2,00 (4,00) RSD","Preko 5000","2,00 RSD","1,50 (3,00) RSD"]},{"type":"t","meta":{"width":"3","title":"Kopiranje i \u0161tampa u boji","note":"* Doplata za spec. papir: 100gr.+3,00  ; 160gr. +6,00; 200gr +8,00; 250gr.+10,00 nalepnica +20,00; papir u boji +3,00;"},"content":["Broj kopija","Laser jednostrano","Laser obostrano","1 \u2013 5","50,00","100,00","6 \u2013 10","45,00","90,00","11 \u2013 50","40,00","80,00","51 - 150","35,00","70,00","151 - 400","30,00","60,00","401 - 800","25,00","50,00","preko 800","20,00","40,00"]},{"type":"t","meta":{"width":"2","title":"Memorandumi","note":"* Kolor A4 na 80 gr. papiru (bez pozadine)"},"content":["Minimalna koli\u010dina 300 kopija","Preko 1000 kopija","17 RSD / kom","14 RSD / kom"]},{"type":"h2","content":"Skeniranje"},{"type":"p","content":"Skeniranje \u2013 prebacivanje teksta ili slike sa papira u digitalnu formu. Skeniramo u formatima JPEG i PDF."},{"type":"p","content":"Skenirani fajl prebacujemo na Va\u0161 USB \u2013 bez dodatne naknade."},{"type":"p","content":"Ukoliko \u017eelite da fajl bude narezan na CD,DVD ili poslat na e-mail to se dodatno napla\u0107uje."},{"type":"p","content":"Skeniranje knjiga ili ve\u0107eg broja strana \u2013 po dogovoru."},{"type":"t","meta":{"width":"3","title":"Cenovnik skeniranja"},"content":["Broj skena","A4","A3","1 - 15","20,00 RSD","30,00 RSD","16 - 50","15,00 RSD","25,00 RSD","Preko 50","10,00 RSD","20,00 RSD"]},{"type":"t","meta":{"width":"2","title":"O\u010ditavanje dokumenata"},"content":["Dokument","Cena","Li\u010dna karta","20,00 RSD","Zdravstvena knji\u017eica","50,00 RSD","Saobra\u0107ajna dozvola","20,00 RSD"]},{"type":"p","content":"Za sve ostale informacije mo\u017eete nam se obratiti putem telefona ili email-a."}]},"veliki-formati":{"coverImage":"/veliki_formati.jpg","title":"Veliki formati","description":"","body":[{"type":"p","content":"\u0160tampa do \u0161irine 1 m, neograni\u010dene du\u017eine na razli\u010ditim materijalima. Uradite poster, plakat, sliku, fotografiju, reklamu i drugo."},{"type":"t","meta":{"width":"5","title":"\u0160tampa velikih formata","note":"* Cene su po du\u017enom metru ili formatu"},"content":["Formati","Papir 180g","Papir 80g","Baner","Kanvas","A0 (841x1189)","1750 RSD","1500 RSD","/","/","A1 (594X841)","900 RSD","650 RSD","/","/","A2 (420X594)","460 RSD","330 RSD","/","/","\u0160irina 610 mm","1100 RSD","800 RSD","2000 RSD","/","\u0160irina 914 mm","1500 RSD","1300 RSD","2000 RSD","2700 RSD"]},{"type":"t","meta":{"width":"3","title":"Linijska \u0161tampa - plotovanje","note":"* Cene su po du\u017enom metru ili formatu"},"content":["Formati","Papir 180g","Papir 80g","A0 (841x1189)","700 RSD","550 RSD","A1 (594X841)","350 RSD","300 RSD","A2 (420X594)","170 RSD","150 RSD","\u0160irina 610 mm","420 RSD","360 RSD","\u0160irina 914 mm","600 RSD","470 RSD"]},{"type":"p","content":"Za \u0161tampanje povr\u0161ina koje nisu linije primenjuje se cenovnik za postere"}]},"vhs-u-digitalni-format":{"coverImage":"/digitalizacija.jpg","title":"Digitalizacija","description":"","body":[{"type":"p","content":"Pru\u017eamo Vam mogu\u0107nost da Va\u0161e stare snimke koje \u010duvate na VHS kasetama kasetama prebacite u digitalnu formu na DVD i gledate na Va\u0161em ra\u010dunaru ili TV-u."},{"type":"p","content":"Kvalitet snimka ostaje identi\u010dan kao na originalnoj kaseti."},{"type":"p","content":"Prebacivanje VHS-a (bez obzira na du\u017einu trajanja) iznosi 700 RSD."},{"type":"p","content":"U cenu je ura\u010dunata medija (CD/DVD), a za ve\u0107e koli\u010dine odobravamo POPUST \u2013 kontaktirajte nas."}]},"kori\u010denje":{"coverImage":"/koricenje.jpg","title":"Kori\u010denje","description":"","body":[{"type":"p","content":"Kori\u010denje podrazumeva spajanje vi\u0161e listova u jednu celinu. Radimo SPIRALNO, TVRDO i kori\u010denje lepkom."},{"type":"h3","content":"SPIRALNO KORI\u010cENJE"},{"type":"p","content":"Spiralno kori\u010denje se sastoji od PVC korice (gore), kartona (dole) i plasti\u010dne spirale, gde se listovi bu\u0161e i povezuju spiralom."},{"type":"p","content":"Spiralnim kori\u010denjem se mogu kori\u010diti formati A3, A4, A5, A6."},{"type":"p","content":"Cena zavisi od broja listova i za komplet je data u cenovniku."},{"type":"t","meta":{"width":"2","title":"Spiralno kori\u010denje"},"content":["Veli\u010dina spirale","Komplet","6, 8","60,00 RSD","10, 12","70,00 RSD","14, 16","80,00 RSD","19, 22","110,00 RSD","24, 26","140,00 RSD","28, 32","160,00 RSD","Preko 32","180,00 RSD"]},{"type":"h3","content":"TVRDO KORI\u010cENJE"},{"type":"p","content":"Tvrdo kori\u010denje se koristi za kori\u010denje diplomskih, zavr\u0161nih, master, doktorskih, specijalisti\u010dkih i dr. vrsta radova."},{"type":"p","content":"Listovi se ne bu\u0161e, ve\u0107 se povezuju sa koricama (gore i dole), a korice su \u010dvrste, neprovidne, imitacija ko\u017ee u teget, bordo i crnoj boji."},{"type":"p","content":"Format kori\u010denja je A4 ,a maximalan broj listova je 303."},{"type":"p","content":"Na koricama se radi sito \u0161tampa, zlatotisk ili srebrotisk."},{"type":"p","content":"Za rad na LATINICI na korici radimo srebrotisk, zlatotisk i sito \u0161tampu."},{"type":"p","content":"Za rad na \u0106IRILICI na korici radimo samo sito \u0161tampu."},{"type":"p","content":"Uobi\u010dajeno vreme izrade je 24h, ali mo\u017ee biti i kra\u0107e \u2013 po dogovoru."},{"type":"t","meta":{"width":"2","title":"Tvrdo kori\u010denje","note":"* Cena zavisi od broja komada, broja stranica i teksta na korici."},"content":["Broj komada","Cena sa tiskom","1","1500,00 RSD / kom","2","1300,00 RSD / kom","3 - 5","1000,00 RSD / kom","6 - 10","900,00 RSD / kom","10 - 15","750,00 RSD / kom","Preko 15","700,00 RSD / kom","Bez tiska","500,00 - 700,00 RSD / kom"]},{"type":"h3","content":"KORI\u010cENJE LEPKOM"},{"type":"t","meta":{"width":"2","title":"Kori\u010denje lepkom"},"content":["Vrsta","Cena","Bela Korica (Bez Teksta)","200,00 RSD / kom","Bela Korica (Crno - beli tekst)","250,00 RSD / kom","U boji (1 strana)","300,00 RSD / kom","U boji (obe strane)","350,00 RSD / kom"]}]},"reklamni-materijal-i-id-kartice":{"coverImage":"/reklamni_materijal.jpg","title":"Reklamni materijal","description":"","body":[{"type":"p","content":"Radimo \u0161tampu reklamnog materijala, \u0161tampu na \u0161oljama, \u0161tampu na majicama, \u0161tampu puzzle slagalica, reklamne kugle.","note":"* Uz \u0161olju, magi\u010dnu \u0161olju i kuglu poklon kutija."},{"type":"t","meta":{"width":"2","title":"\u0160tampa reklamnog materijala"},"content":["Artikal","Cena","\u0160olja","550,00 RSD / kom","Magi\u010dna \u0160olja","800,00 RSD / kom","Puzzle","600,00 RSD / kom","Kugla","800,00 RSD / kom","Majica (bela)","1300,00 RSD / kom"]},{"type":"h2","content":"Plasti\u010dne kartice"},{"type":"p","content":"Izrada ID kartica, akreditacija, popust i loyalty kartica, \u010dlanskih kartica, vizit kartica, poklon kartica i sli\u010dno."},{"type":"t","meta":{"width":"4","title":"Bela kartica / kartica u boji"},"content":["Koli\u010dina","Jedna strana u boji","Obe strane u boji","Jedna strana u boji, druga crno-bela","1 - 10","250,00 RSD / kom","400,00 RSD / kom","/","11 - 50","200,00 RSD / kom","300,00 RSD / kom","/","51 - 100","150,00 RSD / kom","250,00 RSD / kom","200,00 RSD / kom","Preko 100","120,00 RSD / kom","200,00 RSD / kom","150,00 RSD / kom"]},{"type":"p","content":"Za vi\u0161e informacija mo\u017eete nam se obratiti putem telefona ili email-a."}]},"ostale-usluge":{"coverImage":"/ostale_usluge.jpg","title":"Ostale usluge","description":"","body":[{"type":"p","content":"Ostale i nekategorisane usluge koje pru\u017ea na\u0161a kopirnica."},{"type":"t","meta":{"width":"2","title":"Plastifikacija","note":"Plastifikacija je obostrano toplotno lepljenje folijom. Nakon plastifikacije, dokument vi\u0161e nije mogu\u0107e izvaditi iz folije."},"content":["Format","Cena","Bed","20,00 RSD / kom","A5","30,00 RSD / kom","A4","60,00 RSD / kom","A3","90,00 RSD / kom"]},{"type":"t","meta":{"width":"2","title":"Ostale usluge"},"content":["Uslga","Cena","Slanje na e-mail(do 15MB)","50,00 RSD","Rezenje DVD-a","150,00 RSD","Rezanje CD-a","100,00 RSD","Rezanje na donet DVD","100,00 RSD","Rezanje na donet CD","70,00 RSD","Prebacivanje medij-medij (do 2GB)","50,00 RSD","Heftanje (po heftu)","1,00 RSD"]}]}}')},vYYK:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var i=t("hfKm"),n=t.n(i);function o(e,a,t){return a in e?n()(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}}},[["SnhW",0,1,2]]]);