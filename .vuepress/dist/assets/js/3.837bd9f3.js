(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{209:function(t,s,a){"use strict";a.r(s);var m=a(0),x=Object(m.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey},scopedSlots:t._u([{key:"reference",fn:function(){return[a("ol",[a("li",[t._v("《机器学习》一书中对泛化误差描述为偏差、方差与噪声之和。")]),t._v(" "),a("li",[t._v("AUC计算方法总结："),a("a",{attrs:{href:"https://www.cnblogs.com/peizhe123/p/5081559.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/peizhe123/p/5081559.html"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("机器学习中样本比例不平衡的处理方法："),a("a",{attrs:{href:"http://alexkong.net/2013/06/introduction-to-auc-and-roc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://alexkong.net/2013/06/introduction-to-auc-and-roc/"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("理解 ROC 和 AUC:"),a("a",{attrs:{href:"http://vividfree.github.io/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/2015/11/20/understanding-ROC-and-AUC",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://vividfree.github.io/机器学习/2015/11/20/understanding-ROC-and-AUC"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("(Fawcett, 2006)，Fawcett, T. (2006). An introduction to ROC analysis. Pattern recognition letters, 27(8), 861-874.")])])]},proxy:!0}])},[a("h1",{attrs:{id:"评估指标与方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#评估指标与方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 评估指标与方法")]),t._v(" "),a("h2",{attrs:{id:"有哪些评估指标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有哪些评估指标","aria-hidden":"true"}},[t._v("#")]),t._v(" 有哪些评估指标")]),t._v(" "),a("p",[t._v("mean sqaure error、错误率、精度、查准率、查全率、F1、P-R、ROC、AUC")]),t._v(" "),a("h3",{attrs:{id:"回归问题的评估"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回归问题的评估","aria-hidden":"true"}},[t._v("#")]),t._v(" 回归问题的评估")]),t._v(" "),a("p",[t._v("一般使用的是mean square error。\n")]),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c45"})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c28"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c66"})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c3B"})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[a("mjx-c",{staticClass:"mjx-c44"})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c29"})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{staticClass:"mjx-c3D"})],1),a("mjx-mfrac",{attrs:{space:"4"}},[a("mjx-frac",{attrs:{type:"d"}},[a("mjx-num",[a("mjx-nstrut",{attrs:{type:"d"}}),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c31"})],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line",{attrs:{type:"d"}}),a("mjx-row",[a("mjx-den",[a("mjx-dstrut",{attrs:{type:"d"}}),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c6D"})],1)],1)],1)],1)],1)],1)],1),a("mjx-munderover",{attrs:{space:"2"}},[a("mjx-over",{staticStyle:{"padding-bottom":"0.192em","padding-left":"0.412em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{staticClass:"mjx-c6D"})],1)],1),a("mjx-box",[a("mjx-munder",[a("mjx-row",[a("mjx-base",[a("mjx-mo",{staticClass:"mjx-lop"},[a("mjx-c",{staticClass:"mjx-c2211"})],1)],1)],1),a("mjx-row",[a("mjx-under",{staticStyle:{"padding-top":"0.167em","padding-left":"0.148em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c69"})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c3D"})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c31"})],1)],1)],1)],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c28"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c66"})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c28"})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{staticClass:"mjx-c78"})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{staticClass:"mjx-c69"})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c29"})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{staticClass:"mjx-c2212"})],1),a("mjx-msub",{attrs:{space:"3"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{staticClass:"mjx-c79"})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{staticClass:"mjx-c69"})],1)],1)],1),a("mjx-msup",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c29"})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.413em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{staticClass:"mjx-c32"})],1)],1)],1)],1)],1)],1),t._v("\n其中D表示样本空间，m为样本个数，f是模型，"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{staticClass:"mjx-c78"})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{staticClass:"mjx-c69"})],1)],1)],1)],1)],1),t._v("是某个样本，"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{staticClass:"mjx-c79"})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{staticClass:"mjx-c69"})],1)],1)],1)],1)],1),t._v("是对应的标签数值。\n在数据科学比赛中可能会根据问题提出新的评估指标。"),a("p"),t._v(" "),a("h3",{attrs:{id:"分类问题的评估"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分类问题的评估","aria-hidden":"true"}},[t._v("#")]),t._v(" 分类问题的评估")]),t._v(" "),a("p",[t._v("主要讲二分类，多分类情况可以以二分类进行推广。\n错误率与精度容易理解，他们是模型预测错误与正确的百分比。他们的和是1。\n需要提到的一个重要概念就是混淆矩阵，它不光叫混淆矩阵，也让我混淆和很长时间。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("实际结果"),a("br"),t._v("预测结果")]),t._v(" "),a("th",[t._v("正")]),t._v(" "),a("th",[t._v("负")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("正")]),t._v(" "),a("td",[t._v("TP")]),t._v(" "),a("td",[t._v("FN")])]),t._v(" "),a("tr",[a("td",[t._v("负")]),t._v(" "),a("td",[t._v("FP")]),t._v(" "),a("td",[t._v("TP")])])])]),t._v(" "),a("p",[t._v("这四个标志面向的是预测结果。比如TP，TRUE POSITVE，他指的是模型预测的POSITIVE结果是正确的。抓好这个原则，就不会搞混淆这个矩阵了。这个矩阵是基础，后面的指标都与这个矩阵相关。\n查准率P与查全率R面向的是正分类。\n")]),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mtable",{staticStyle:{"min-width":"6.847em"}},[a("mjx-table",[a("mjx-itable",[a("mjx-mtr",[a("mjx-mtd",{staticStyle:{"text-align":"right","padding-right":"0","padding-bottom":"0.111em"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c50"})],1),a("mjx-tstrut")],1),a("mjx-mtd",{staticStyle:{"text-align":"left","padding-left":"0","padding-bottom":"0.111em"}},[a("mjx-mi",{staticClass:"mjx-n"}),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{staticClass:"mjx-c3D"})],1),a("mjx-mfrac",{attrs:{space:"4"}},[a("mjx-frac",{attrs:{type:"d"}},[a("mjx-num",[a("mjx-nstrut",{attrs:{type:"d"}}),a("mjx-mrow",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c54"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c50"})],1)],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line",{attrs:{type:"d"}}),a("mjx-row",[a("mjx-den",[a("mjx-dstrut",{attrs:{type:"d"}}),a("mjx-mrow",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c54"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c50"})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{staticClass:"mjx-c2B"})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[a("mjx-c",{staticClass:"mjx-c46"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c50"})],1)],1)],1)],1)],1)],1)],1)],1),a("mjx-tstrut")],1)],1),a("mjx-mtr",[a("mjx-mtd",{staticStyle:{"text-align":"right","padding-right":"0","padding-top":"0.111em"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c52"})],1),a("mjx-tstrut")],1),a("mjx-mtd",{staticStyle:{"text-align":"left","padding-left":"0","padding-top":"0.111em"}},[a("mjx-mi",{staticClass:"mjx-n"}),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{staticClass:"mjx-c3D"})],1),a("mjx-mfrac",{attrs:{space:"4"}},[a("mjx-frac",{attrs:{type:"d"}},[a("mjx-num",[a("mjx-nstrut",{attrs:{type:"d"}}),a("mjx-mrow",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c54"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c50"})],1)],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line",{attrs:{type:"d"}}),a("mjx-row",[a("mjx-den",[a("mjx-dstrut",{attrs:{type:"d"}}),a("mjx-mrow",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c54"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c50"})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{staticClass:"mjx-c2B"})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[a("mjx-c",{staticClass:"mjx-c46"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c4E"})],1)],1)],1)],1)],1)],1)],1)],1),a("mjx-tstrut")],1)],1)],1)],1)],1)],1)],1)],1),t._v("\n查准率的含义是，在所有预测的正样本中有多少比例被预测正确。查全率的含义是，在所有正样本中有多少比例被准确预测出来。\n分类问题事实上评估的是概率排序质量。在二分类中往往以概率值0.5为阈值进行正负样本划分，而实际问题中可以调整阈值进行样本标签的预测，为了不局限于0.5阈值，考察样本根据概率值排序的质量来评估模型的好坏。这样就出现了P-R曲线，每个样本经过模型得到一个概率，根据这个概率值排好序后，依次将每个样本划分为正样本计算P、R值得到P-R曲线。《机器学习》中的P-R曲线示意图存在误导，在两个端点时（1，0），（0，1），通过公式可以知道这两个点应该是取不到的。如果一条P-R曲线包含另一条，则前者模型的性能强于后者，但对于交叉的曲线不好判断，BEP是一种解决方案，也就是找到P=R的点，并比较这个值，这也好理解，查准率与查全率同时大的模型性能更强。\nF1是另一种基于查全率与查准率的指标，它是查全率与查全率的调和平均。\n"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c46"})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c31"})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{staticClass:"mjx-c3D"})],1),a("mjx-mfrac",{attrs:{space:"4"}},[a("mjx-frac",{attrs:{type:"d"}},[a("mjx-num",[a("mjx-nstrut",{attrs:{type:"d"}}),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c32"})],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line",{attrs:{type:"d"}}),a("mjx-row",[a("mjx-den",[a("mjx-dstrut",{attrs:{type:"d"}}),a("mjx-mrow",[a("mjx-mfrac",[a("mjx-frac",[a("mjx-num",[a("mjx-nstrut"),a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{staticClass:"mjx-c31"})],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line"),a("mjx-row",[a("mjx-den",[a("mjx-dstrut"),a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{staticClass:"mjx-c50"})],1)],1)],1)],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{staticClass:"mjx-c2B"})],1),a("mjx-mfrac",{attrs:{space:"3"}},[a("mjx-frac",[a("mjx-num",[a("mjx-nstrut"),a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{staticClass:"mjx-c31"})],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line"),a("mjx-row",[a("mjx-den",[a("mjx-dstrut"),a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{staticClass:"mjx-c52"})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v("\n只有在查全率与查准率都不低的情况下F1才会高。这个指标的使用是需要给定某个划分阈值的。\nROC曲线与P-R曲线类似，只是作图使用的评估指标不一样，它使用的是真正例率TPR与假正例率FPR\n"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mtable",{staticStyle:{"min-width":"8.069em"}},[a("mjx-table",[a("mjx-itable",[a("mjx-mtr",[a("mjx-mtd",{staticStyle:{"text-align":"right","padding-right":"0","padding-bottom":"0.111em"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c54"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c50"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c52"})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{staticClass:"mjx-c3D"})],1),a("mjx-tstrut")],1),a("mjx-mtd",{staticStyle:{"text-align":"left","padding-left":"0","padding-bottom":"0.111em"}},[a("mjx-mfrac",[a("mjx-frac",{attrs:{type:"d"}},[a("mjx-num",[a("mjx-nstrut",{attrs:{type:"d"}}),a("mjx-mrow",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c54"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c50"})],1)],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line",{attrs:{type:"d"}}),a("mjx-row",[a("mjx-den",[a("mjx-dstrut",{attrs:{type:"d"}}),a("mjx-mrow",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c54"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c50"})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{staticClass:"mjx-c2B"})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[a("mjx-c",{staticClass:"mjx-c46"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c4E"})],1)],1)],1)],1)],1)],1)],1)],1),a("mjx-tstrut")],1)],1),a("mjx-mtr",[a("mjx-mtd",{staticStyle:{"text-align":"right","padding-right":"0","padding-top":"0.111em"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c46"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c50"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c52"})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{staticClass:"mjx-c3D"})],1),a("mjx-tstrut")],1),a("mjx-mtd",{staticStyle:{"text-align":"left","padding-left":"0","padding-top":"0.111em"}},[a("mjx-mfrac",[a("mjx-frac",{attrs:{type:"d"}},[a("mjx-num",[a("mjx-nstrut",{attrs:{type:"d"}}),a("mjx-mrow",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c46"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c50"})],1)],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line",{attrs:{type:"d"}}),a("mjx-row",[a("mjx-den",[a("mjx-dstrut",{attrs:{type:"d"}}),a("mjx-mrow",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c54"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c4E"})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{staticClass:"mjx-c2B"})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[a("mjx-c",{staticClass:"mjx-c46"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c50"})],1)],1)],1)],1)],1)],1)],1)],1),a("mjx-tstrut")],1)],1)],1)],1)],1)],1)],1)],1),t._v("\nTPR与查全率一致。FPR表达的含义是在真的反例中预测错的比例有多少。ROC的做法是将按照预测概率排序好的样本逐个预测为正例后计算相应的TPR与FPR然后作图。通过对两个指标含义的理解，我们希望的情况是TPR不断增大的同时FPR保持较慢的增长，这样理想的曲线会表现为一条上凸的曲线，而当模型没有预测能力时，也就是正负样本随机预测时，可以知道TPR与FPR几乎相等，也就是一条斜率为1的直线。如果ROC是一条下凹的曲线，说明FPR增长较快，应该考虑是否将标签设置反了。\nAUC是area under curve的缩写。他的含义是ROC曲线下的面积表示模型的性能。按照我们期望的情况，当面积为1或者为0时肯定是最理想的状态，面积为0.5是最糟糕的情况。\nAUC有两种解释，一是根据TPR、FPR画出ROC曲线然后计算曲线下的面积，二是AUC表示从样本中随机抽取一对正样本与负样本，正样本得分比负样本得分大的概率。这两个解释直观理解是没有什么联系的，但想想两个解释完全不相关的东西却描述的是同一件事，这中间肯定是有什么地方联系着的。基于这两个解释，计算AUC的方法也有两种。\nAUC还有一个特性是对测试样本的类别比例不敏感。"),a("p"),t._v(" "),a("h2",{attrs:{id:"哪些方法进行评估"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哪些方法进行评估","aria-hidden":"true"}},[t._v("#")]),t._v(" 哪些方法进行评估")]),t._v(" "),a("p",[t._v("留出法、留一法、交叉验证、自助法\n评估方法的关键在于如何划分测试集的数据。留出法是在样本中分割出一部分作为测试集，要求是保持数据分布，一般采用随机采样，如果数据量不够大时，可以根据类别比例进行采样，也就是分层采样。交叉验证未解决的问题是留出法随机采样导致的偏差，具体做法是将样本等分为K份，尽量保持每个样本符合总体样本分布，然后使用其中的K-1份数据进行训练，剩下一份数据进行测试，然后对K个测试结果求平均，平衡了单次采样导致的偏差。自助法使用有放回的采样方法产生训练集与测试集，每一次有放回的采一个样本放入训练集，重复得到训练集，未在训练集中出现的样本作为测试集。可以证明样本中有36.8%的比例将不会进入训练集。一般常用的是留出法与交叉验证。\n机器学习中还有一个词叫验证集，他的作用是用于模型调参。在模型训练过程中有很多的超参数需要去调整使得模型的泛化能力提升，验证集就是在调整完参数后对模型的泛化能力进行评估的数据。验证集往往与测试集容易混淆，他们两者的作用是不同的，验证集往往重复被使用，以使得模型在验证集上的效果达到最优，虽然验证集没有参与到模型训练的过程中，但是以验证集最优的目的进行的调参可能对未知数据效果很差，这时候就是用测试集来最终评定模型的泛化能力。所以测试集一定是不能作为重复使用的。虽然我们知道测试集的标签或者准确答案，我们也应该当做他是一份未知的数据来预测然后评估。在数据科学比赛中，我们提交的结果对应的就是测试集。而为了训练模型我们需要对提供的数据进行切分得到验证集。")]),t._v(" "),a("h2",{attrs:{id:"过拟合、欠拟合与偏差、方差"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#过拟合、欠拟合与偏差、方差","aria-hidden":"true"}},[t._v("#")]),t._v(" 过拟合、欠拟合与偏差、方差")]),t._v(" "),a("p",[t._v("什么是过拟合、欠拟合，偏差、方差分别代表什么，如何与过拟合、欠拟合联系\n过拟合指的模型过度的拟合了训练集上的数据，而将训练集本身的一些数据特性学习了，这样在测试集上的效果就不会很好。欠拟合则是模型对训练集的特征未能完全学会，没有能力很好的预测测试集。在机器学习中一般讲bias-vias。对应的偏差与方差，偏差指的是期望输出与真实标记的差别：\n")]),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c62"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c69"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c61"})],1),a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c73"})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.413em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{staticClass:"mjx-c32"})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c28"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c78"})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c29"})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{staticClass:"mjx-c3D"})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{staticClass:"mjx-c28"})],1),a("mjx-mover",[a("mjx-over",{staticStyle:{"padding-bottom":"0.2em","padding-left":"0.045em","margin-bottom":"-0.385em"}},[a("mjx-mo",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-stretchy-h",{staticClass:"mjx-cAF",staticStyle:{width:"0.778em"}},[a("mjx-ext",[a("mjx-c")],1)],1)],1)],1),a("mjx-base",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c66"})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c28"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c78"})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c29"})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{staticClass:"mjx-c2212"})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[a("mjx-c",{staticClass:"mjx-c79"})],1),a("mjx-msup",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c29"})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.413em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{staticClass:"mjx-c32"})],1)],1)],1)],1)],1)],1),t._v("\n其中"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mover",[a("mjx-over",{staticStyle:{"padding-bottom":"0.2em","padding-left":"0.045em","margin-bottom":"-0.385em"}},[a("mjx-mo",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-stretchy-h",{staticClass:"mjx-cAF",staticStyle:{width:"0.778em"}},[a("mjx-ext",[a("mjx-c")],1)],1)],1)],1),a("mjx-base",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c66"})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c28"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c78"})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c29"})],1)],1)],1),t._v("表示模型预测的期望值，"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c79"})],1)],1)],1),t._v("表示真是样本的标签。\n方差指的是使用不同数据训练的模型预测结果与模型期望结果的偏差：\n"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c76"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c61"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c72"})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c28"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c78"})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c29"})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{staticClass:"mjx-c3D"})],1),a("mjx-msub",{attrs:{space:"4"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{staticClass:"mjx-c45"})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{staticClass:"mjx-c44"})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c5B"})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c28"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c66"})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c28"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c78"})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c3B"})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[a("mjx-c",{staticClass:"mjx-c44"})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c29"})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{staticClass:"mjx-c2212"})],1),a("mjx-mover",{attrs:{space:"3"}},[a("mjx-over",{staticStyle:{"padding-bottom":"0.2em","padding-left":"0.045em","margin-bottom":"-0.385em"}},[a("mjx-mo",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-stretchy-h",{staticClass:"mjx-cAF",staticStyle:{width:"0.778em"}},[a("mjx-ext",[a("mjx-c")],1)],1)],1)],1),a("mjx-base",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c66"})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c28"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c78"})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c29"})],1),a("mjx-msup",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c29"})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.413em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{staticClass:"mjx-c32"})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c5D"})],1)],1)],1)],1),t._v("\n其中"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c66"})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c28"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c78"})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c3B"})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[a("mjx-c",{staticClass:"mjx-c44"})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c29"})],1)],1)],1),t._v("表示在D数据上学到的模型来预测x样本，"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mover",[a("mjx-over",{staticStyle:{"padding-bottom":"0.2em","padding-left":"0.045em","margin-bottom":"-0.385em"}},[a("mjx-mo",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-stretchy-h",{staticClass:"mjx-cAF",staticStyle:{width:"0.778em"}},[a("mjx-ext",[a("mjx-c")],1)],1)],1)],1),a("mjx-base",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c66"})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c28"})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c78"})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c29"})],1)],1)],1),t._v("表示期望模型预测结果。\n偏差描述的是一个模型对数据的拟合能力，方差表示的是不同数据训练出来的模型对预测结果的波动，也就是表示数据的波动会带模型预测的波动有多大。\n噪声表示了数据的质量，是数据集中的标记关于真是标记的方差。如果噪声较大，数据质量较差，学到的模型也不会好。\n"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{staticClass:"mjx-c3B5"})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.413em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{staticClass:"mjx-c32"})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{staticClass:"mjx-c3D"})],1),a("mjx-msub",{attrs:{space:"4"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{staticClass:"mjx-c45"})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{staticClass:"mjx-c44"})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c5B"})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c28"})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{staticClass:"mjx-c79"})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{staticClass:"mjx-c44"})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{staticClass:"mjx-c2212"})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[a("mjx-c",{staticClass:"mjx-c79"})],1),a("mjx-msup",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c29"})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.413em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{staticClass:"mjx-c32"})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{staticClass:"mjx-c5D"})],1)],1)],1)],1),a("p")],1)},[],!1,null,null,null);s.default=x.exports}}]);