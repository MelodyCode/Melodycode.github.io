(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{406:function(s,t,n){"use strict";n.r(t);var a=n(51),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"盒子模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#盒子模型"}},[s._v("#")]),s._v(" 盒子模型")]),s._v(" "),n("p",[s._v("又名：盒模型，框模型")]),s._v(" "),n("ul",[n("li",[s._v("css将页面中"),n("em",[s._v("所有的元素都设置成一个矩形的盒子")]),s._v("；设置成盒子之后，页面布局就变成将不同的盒子放到不同的位置")]),s._v(" "),n("li",[s._v("每一个盒子都由以下几部分组成：\n"),n("ul",[n("li",[s._v("内容区（content）：")]),s._v(" "),n("li",[s._v("内边距：(padding)：内容区和边框之间的距离")]),s._v(" "),n("li",[s._v("边框（border）：\nps 以上三者均会影响盒子大小")]),s._v(" "),n("li",[s._v("外边距：(margin)不会影响盒子可见框的大小，会影响盒子实际空间大小，指定当前盒子与其他盒子的距离")])])]),s._v(" "),n("li",[s._v("一个盒子可见框的大小、由盒子的内容区，内边距，边框共同决定；\n计算盒子大小时，将三者加起来")]),s._v(" "),n("li",[s._v("元素在页面中是按照自左向右顺序排列的，所以默认情况下设置，左上边距会移动元素自身，设置右下边距，会移动其他元素。")])]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* html\n<div class="box1"></div>\n*/')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*css*/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*内容区：元素中所有子元素和文本内容在内容区中排列，内容区大小有width和height两个属性设置*/")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("#bfa"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*边框：属于盒子边缘，边框里面属于盒子内部，出了边框就是盒子外部，要设置边框，至少设置三个样式：(缺一不可)\n边框大小也会影响整个盒子的大小\n\t边框宽度：border-width：10px;---\x3e上下左右都是10px；\n\t\t\t  border-width:10px 20px 30px 40px;\n\t\t\t  四个值顺序：上，右，下，左\n\t\t\t  三个值：上 左右 下\n\t\t\t  两个值：上下 左右\n\t\t\t  border-xxx-width:\n\t\t\t  xxx可以是：top,left,right,bottom;\n\t\t\t  用来单独制定某个边框\n\t边框颜色：border-color\n\t\t规则和width一样;\n\t\t可以省略不写，若省略了就自动使用color（一般是前景色）的值\n\t边框样式：border-style：\n\t    规则和width一样；默认值为none，表示没有边框\n\t\tsolid：实线；\n\t\tdotted：点状虚线\n\t\tdashed：虚线\n\t\tdouble：双线\n*/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*简写属性（常用）：border：10px solid red;\n\t\t单独设置border-xxx:\n\t\txxx为top，left,right,bottom\n*/")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("10px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-style")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("solid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*内边距(padding):内容区和边框之间的距离\n一共有四个方向：\n\tpadding-top:\n\tpadding-bottom:\n\tpadding-left:\n\tpadding-right:\n\t简写：padding：上 右 下 左\n特点：内边距的设置会影响盒子大小；\n背景颜色会延伸到内边距;\n一个盒子可见框的大小、由盒子的内容区，内边距，边框共同决定；\n计算盒子大小时，将三者加起来\n*/")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*外边距：\n\tmargin-top:上边距，设置正值，元素会往下移动 \n\tmargin-bottom:下边距，设置正值，他下面的元素会往下移动\n\tmargin-left:左边距，设置正值，元素会往又移动 \n\tmargin-right:默认情况下，不会产生任何效果\n\t简写：margin：上 右 下 左；\n负值，则往相反方向移动\n\t\n*/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br")])]),n("ul",[n("li",[s._v("盒子的水平布局：\n"),n("ul",[n("li",[s._v("元素在其父元素中，水平方向的位置由以下几个属性共同决定：\n"),n("ul",[n("li",[s._v("margin-left:")]),s._v(" "),n("li",[s._v("border-left:")]),s._v(" "),n("li",[s._v("padding-left:")]),s._v(" "),n("li",[s._v("width://默认值就是auto")]),s._v(" "),n("li",[s._v("padding-right:")]),s._v(" "),n("li",[s._v("border-right:")]),s._v(" "),n("li",[s._v("margin-right:")])])]),s._v(" "),n("li",[s._v("上述七个值之和==父元素"),n("em",[s._v("内容区")]),s._v("的宽度（必须满足），如果相加结果使等式不成立，则称为过渡约束，则等式会自动调整\n"),n("ul",[n("li",[s._v("若上述七个之中没有auto情况，"),n("em",[s._v("浏览器会自动调整margin-right使等式满足")])]),s._v(" "),n("li",[s._v("上述七个值中有三个值可以设置为auto：若有属性设置为auto，则浏览器自动调整auto那个值使等式成立\n"),n("ul",[n("li",[s._v("width：")]),s._v(" "),n("li",[s._v("margin-left:")]),s._v(" "),n("li",[s._v("margin-right:")])])]),s._v(" "),n("li",[s._v("如果将一个宽度和一个外间距设置为auto，则宽度会调整到最大，设置为auto的外间距自动为0")]),s._v(" "),n("li",[s._v("如果将三个值都设置为auto，则外边距都是0，宽度最大")]),s._v(" "),n("li",[s._v("如果两个外边距设置为auto，宽度固定值，则外边距会被设置为相同的值--所以利用这一点使一个元素在其父元素中居中")])])])])])]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*使一个元素在其父元素中居中常用方法*/")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("xxxxpx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("0 auto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("举个例子：如果等式为\n0 + 0 + 0 + 1000 + 0 + 0 + 0 =800\n如何满足等式呢？----浏览器将margin-right设置为**-200px**")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("盒子垂直方向的布局：")]),s._v(" "),n("ul",[n("li",[s._v("默认情况下父元素（父元素不设定高度的情况下）的高度被内容撑开")]),s._v(" "),n("li",[s._v("若子元素是在父元素的内容区排列的\n"),n("ul",[n("li",[s._v("如果子元素的大小超过了父元素，则子元素会从父元素中溢出")]),s._v(" "),n("li",[s._v("使用overflow属性来设置父元素如何处理溢出的子元素（overflow-x,overflow-y）")]),s._v(" "),n("li",[s._v("可选值：\n"),n("ul",[n("li",[n("p",[s._v("visible：默认值，子元素会从父元素中溢出，在父元素外部显示；")])]),s._v(" "),n("li",[n("p",[s._v("hidden：超出内容会被隐藏，不会被显示")])]),s._v(" "),n("li",[n("p",[s._v("scroll：生成垂直/水平方向滚动条")])]),s._v(" "),n("li",[n("p",[s._v("auto;根据需要生成滚动条")])])])])])])])]),s._v(" "),n("li",[n("p",[s._v("相邻的垂直方向外边距的折叠（重叠）：")]),s._v(" "),n("ul",[n("li",[s._v("相邻垂直方向外边距会发生重叠现象")]),s._v(" "),n("li",[s._v("兄弟元素：\n"),n("ul",[n("li",[s._v("兄弟元素间的相邻垂直外间距会取两者之间值较大的（两者都是正值）")]),s._v(" "),n("li",[s._v("特殊情况：如果相邻的外间距一正一负，取两者的和；若均为负值，则取两者中绝对值较大的")]),s._v(" "),n("li",[s._v("兄弟元素外间距的重叠对开发有利，不需要处理")])])]),s._v(" "),n("li",[s._v("父子元素：\n"),n("ul",[n("li",[s._v("父子元素间的"),n("em",[s._v("相邻外间距")]),s._v("，子元素会传递给父元素")]),s._v(" "),n("li",[s._v("父子外间距的折叠会影响页面整体布局，必须处理;\n"),n("ul",[n("li",[s._v("待处理。。。。")])])])])])])])]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*html\n<div class="box1"></div>\n<div class="box2"></div>\n*/')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box1,.box2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("100px\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("#bfg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*设置一个下边距*/")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-bottom")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("100px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box2")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("orange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*设置一个上边距*/")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("100px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*html\n<div class="box3">\n\t<div class="box4">\n\t\t\n\t</div>\n</div>\n*/')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("#bfa"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("100px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("100px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("orange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("100px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br")])]),n("ul",[n("li",[s._v("行内元素的盒模型：\n"),n("ul",[n("li",[n("p",[s._v("行内元素不支持设置width和height")])]),s._v(" "),n("li",[n("p",[s._v("行内元素可以设置padding，但是垂直方向不会影响页面的布局")])]),s._v(" "),n("li",[n("p",[s._v("行内元素可以设置border，但是垂直方向不会影响页面的布局")])]),s._v(" "),n("li",[n("p",[s._v("行内元素可以设置margin，但是垂直方向不会影响页面的布局")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("display")]),s._v("用来设置元素显示的类型")]),s._v(" "),n("ul",[n("li",[s._v("可选值：\n"),n("ul",[n("li",[s._v("inline:将元素设置为行内元素")]),s._v(" "),n("li",[s._v("block：将元素设置为块元素")]),s._v(" "),n("li",[s._v("inline-block：将元素设置为行内块元素，特点：既可以设置为宽高，又不独占一行；（少用）")]),s._v(" "),n("li",[s._v("table：将元素设置为表格")]),s._v(" "),n("li",[s._v("none：元素不在页面显示")])])])]),s._v(" "),n("ul",[n("li",[s._v("visibility：用来设置元素的显示状态：\n"),n("ul",[n("li",[s._v("可选值：\n"),n("ul",[n("li",[s._v("visible：默认值")]),s._v(" "),n("li",[s._v("hidden：元素在页面中隐藏不显示，但是占着位置")])])])])])])])])])]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*<span class="s1">我是行内元素</span>\n   <a ></a>\n\t<div class="box1"></div>*/')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".s1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("yellow\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("#bfa\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("ul",[n("li",[s._v("盒子的大小：\n"),n("ul",[n("li",[s._v("默认情况下：盒子可见框的大小：内容框、内边距、和边框共同决定")]),s._v(" "),n("li",[s._v("box-sizing：用来设置盒子大小的计算方式（设置width和height的作用）\n"),n("ul",[n("li",[s._v("content-box：默认值，宽度和高度用来修改内容区的大小")]),s._v(" "),n("li",[s._v("border-box：宽度和高度用来设置整个盒子可见框的大小，width和height指的是内容区、内边距、边框总和大小")])])])])])]),s._v(" "),n("h2",{attrs:{id:"浮动-float"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浮动-float"}},[s._v("#")]),s._v(" 浮动（float）")]),s._v(" "),n("ul",[n("li",[s._v("通过浮动可以使一个元素向其父元素的左侧和右侧浮动，使用float属性来设置元素的浮动-----目的让元素横向布局")])]),s._v(" "),n("ul",[n("li",[s._v("可选值：\n"),n("ul",[n("li",[s._v("none：默认值，元素不浮动；")]),s._v(" "),n("li",[s._v("left:元素向左")]),s._v(" "),n("li",[s._v("right：元素向右")])])]),s._v(" "),n("li",[s._v("元素设置浮动后，水平布局的等式不需要强制成立（可以没有外边距）；")]),s._v(" "),n("li",[s._v("元素会完全从文档流中脱离，不在占用文档流位置，所以元素下面还在文档流中的元素会自动向上移动")]),s._v(" "),n("li",[s._v("浮动的特点：\n"),n("ul",[n("li",[s._v("浮动元素会完全脱离文档流，不在占据文档流的位置")]),s._v(" "),n("li",[s._v("设置浮动以后，元素会向父元素的左侧或右侧移动")]),s._v(" "),n("li",[s._v("浮动元素默认不会从父元素中移出")]),s._v(" "),n("li",[s._v("浮动元素向左或向右移动时不会盖住其他的浮动元素")]),s._v(" "),n("li",[s._v("如果浮动元素上面是没有浮动的块元素，则浮动元素没办法上移")]),s._v(" "),n("li",[s._v("浮动元素不会超过上面浮动的兄弟元素，最多和他们一样高，（但可以通过html结构改变---交换兄弟）")]),s._v(" "),n("li",[s._v("浮动元素不会盖住文字，文字会自动环绕在浮动元素周围-----可以利用该特性设置文字环绕图片效果")]),s._v(" "),n("li",[s._v("元素脱离文档流的特点：元素设置浮动后从文档流中脱离，脱离后元素的一些特点会发生变化：\n"),n("ul",[n("li",[s._v("块元素：\n"),n("ul",[n("li",[s._v("块元素不会独占一行")]),s._v(" "),n("li",[s._v("脱离文档流以后，元素宽度和高度会默认被内容撑开")])])]),s._v(" "),n("li",[s._v("行内元素：\n"),n("ul",[n("li",[s._v("行内元素脱离文档流后变成块元素，特点和块元素一样")])])]),s._v(" "),n("li",[s._v("脱离文档流以后，不再区分块和行内了")])])])])])]),s._v(" "),n("ul",[n("li",[n("p",[s._v("高度塌陷：")]),s._v(" "),n("ul",[n("li",[s._v("在浮动布局中，父元素的高度是默认被子元素撑开的；\n"),n("ul",[n("li",[s._v("当子元素浮动时，其会完全脱离文档流，子元素从文档流中脱离，将会无法撑起父元素的高度，导致父元素的高度丢失")]),s._v(" "),n("li",[s._v("父元素高度丢失以后，其下面的元素会自动上移，导致页面布局混乱------问题严重，必须解决")])])])])]),s._v(" "),n("li",[n("p",[s._v("如何解决高度塌陷：BFC")]),s._v(" "),n("ul",[n("li",[s._v("BFC：Block Formatting Context,块级格式化环境")]),s._v(" "),n("li",[s._v("BFC是CSS中一个隐含的属性，可以为一个元素开启BFC，开启BFC后元素会变成一个独立的布局区域")]),s._v(" "),n("li",[s._v("元素开启BFC的特点：\n"),n("ul",[n("li",[s._v("开启BFC元素不会被浮动元素覆盖")]),s._v(" "),n("li",[s._v("开启BFC的元素，子元素和父元素外边距不会重叠")]),s._v(" "),n("li",[s._v("开启BFC的元素，可以包含浮动的子元素")])])]),s._v(" "),n("li",[s._v("如何开启BFC：\n"),n("ul",[n("li",[s._v("设置元素的浮动（不推荐）")]),s._v(" "),n("li",[s._v("将元素设置为行内块元素（不推荐）")]),s._v(" "),n("li",[s._v("将元素的overflow设置为非visible的值\n"),n("ul",[n("li",[s._v("常用的方式：将元素设置"),n("em",[s._v("overflow：hidden")]),s._v("，开启BFC,使其可以包含浮动元素")])])])])])])]),s._v(" "),n("li",[n("p",[s._v("clear:")]),s._v(" "),n("ul",[n("li",[s._v("清除浮动元素对当前元素产生的影响")]),s._v(" "),n("li",[s._v("可选值：\n"),n("ul",[n("li",[s._v("left：清除左侧浮动元素对当前元素的影响")]),s._v(" "),n("li",[s._v("right：清除右侧浮动元素对当前元素的影响")]),s._v(" "),n("li",[s._v("both：清除两侧浮动元素中最大的影响")])])]),s._v(" "),n("li",[s._v("原理：设置清除浮动以后，浏览器会自动为元素加一个上外边距，一遍其位置不受其他元素的影响")])])]),s._v(" "),n("li",[n("p",[s._v("高度塌陷最终解决方案：没有副作用")]),s._v(" "),n("ul",[n("li",[s._v("伪元素:     ::after-----\x3e默认是行内元素\n"),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/667c499fda304986adf7806cbb9618c3.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qyjTW9vbg==,size_20,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})])])]),s._v(" "),n("li",[n("p",[s._v("如何解决高度重叠问题？")])])]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*html\n<div class="box1 clearfix">\n\t<div class="box2"></div>\n</div>\n*/')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*css*/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("#bfa"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box2")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("100px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("orange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".clearfix::before,\n.clearfix::after")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("table"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("clear")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("both\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("ul",[n("li",[s._v("clearfix可以直接解决高度塌陷和外边距重叠的问题")])]),s._v(" "),n("h2",{attrs:{id:"定位-position"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定位-position"}},[s._v("#")]),s._v(" 定位（Position）")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("定位：")]),s._v(" "),n("ul",[n("li",[s._v("定位是一种更加高级的布局手段，可以将元素摆放到页面任意位置")]),s._v(" "),n("li",[s._v("使用position属性来设置定位：\n"),n("ul",[n("li",[s._v("可选值：\n"),n("ul",[n("li",[s._v("static：默认值，元素是静止的没有开启定位")]),s._v(" "),n("li",[s._v("relative：相对定位")]),s._v(" "),n("li",[s._v("absolute：绝对定位")]),s._v(" "),n("li",[s._v("fixed：固定定位")]),s._v(" "),n("li",[s._v("sticky：粘滞定位")])])])])])])]),s._v(" "),n("li",[n("p",[s._v("相对定位：")]),s._v(" "),n("ul",[n("li",[s._v("position:relative")]),s._v(" "),n("li",[s._v("特点：\n"),n("ul",[n("li",[s._v("元素开启相对定位以后，如果不设置偏移量元素不会发生任何变化")]),s._v(" "),n("li",[s._v("相对定位是参照元素在文档流的位置定位的")]),s._v(" "),n("li",[s._v("相对定位会提升当前元素的层级")]),s._v(" "),n("li",[s._v("相对定位不会使元素脱离文档流，不会改变元素的性质")])])]),s._v(" "),n("li",[s._v("偏移量（offset）：----\x3e只在开启定位后生效\n"),n("ul",[n("li",[s._v("top：定位元素和定位位置上边的距离：")]),s._v(" "),n("li",[s._v("bottom：定位元素和定位位置下边的距离\n"),n("ul",[n("li",[s._v("垂直方向的定位由top和bottom两个属性控制，一般只需要用其中之一；top越大元素越往下移，bottom越大元素越往上移动")])])]),s._v(" "),n("li",[s._v("left：定位元素和定位位置左边的距离")]),s._v(" "),n("li",[s._v("right：定位元素和定位位置右边的距离\n"),n("ul",[n("li",[s._v("水平方向的定位由left和right两个属性控制，left越大，元素越靠右，right越大，元素越靠左")])])])])])])]),s._v(" "),n("li",[n("p",[s._v("绝对定位：")]),s._v(" "),n("ul",[n("li",[s._v("特点：\n"),n("ul",[n("li",[s._v("元素开启绝对定位以后，如果不设置偏移量元素的位置不会发生任何变化")]),s._v(" "),n("li",[s._v("元素开启绝对定位以后，元素从文档流中脱离")]),s._v(" "),n("li",[s._v("绝对定位会改变元素的性质，行内元素会变成块，块内的宽高被内容撑开")]),s._v(" "),n("li",[s._v("绝对定位使元素提升一个层级")]),s._v(" "),n("li",[s._v("绝对定位元素相对于其包含块定位的\n"),n("ul",[n("li",[s._v("包含块（containing block）：\n"),n("ul",[n("li",[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("正常情况下，包含块就是离当前元素块最近的祖先元素\n")])])])]),s._v(" "),n("li",[s._v("开启绝对定位的情况下，包含块是离他最近的开启定位（position的值不是static）的祖先元素；如果所有的祖先元素都没有开启定位，则相对于根元素定位")]),s._v(" "),n("li",[s._v("html：根元素，又名：初始包含块")])])])])])])])])]),s._v(" "),n("li",[n("p",[s._v("固定定位：")]),s._v(" "),n("ul",[n("li",[s._v("position：fixed")]),s._v(" "),n("li",[s._v("特点：\n"),n("ul",[n("li",[s._v("也是一种绝对定位，大部分特点和绝对定位一样")]),s._v(" "),n("li",[s._v("不同点：固定定位永远参照于浏览器的视口进行定位；不会随网页滚动条滚动")])])])])]),s._v(" "),n("li",[n("p",[s._v("粘滞定位:")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("position:sticky")])]),s._v(" "),n("li",[n("p",[s._v("特点：和相对定位的特点基本一致，不同的是粘滞定位到达某一位置后将元素固定")])]),s._v(" "),n("li",[n("p",[s._v("缺点：兼容性差")])]),s._v(" "),n("li")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);