(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{380:function(t,e,a){"use strict";a.r(e);var s=a(45),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"melody-core-melody-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#melody-core-melody-cli"}},[t._v("#")]),t._v(" @melody-core/melody-cli")]),t._v(" "),a("blockquote",[a("p",[t._v("@melody-core 组织是一个年轻团队组成的开源组织，寓意旋律之主。@melody-core/melody-cli 是由组织内@六弦 @wxydesign 开发的命令行集成管理工具，它的能力来源于它集成的外部套件。")])]),t._v(" "),a("p",[t._v("一个强大的、便捷的命令行集成管理工具，支持插拔式的命令工具集成，拥有完善的文档，支持自定义套件开发与集成。")]),t._v(" "),a("h2",{attrs:{id:"特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),a("ul",[a("li",[t._v("自动化管理自身 - 每次运行 melody-cli 时，它会告诉你是否需要更新它。")]),t._v(" "),a("li",[t._v("插拔式管理套件 - 方便的集成和管理套件。")]),t._v(" "),a("li",[t._v("关注点分离 - melody-cli 与套件之间几乎是完全解耦的，每个套件都可以是独立的。")]),t._v(" "),a("li",[t._v("便捷自由的套件开发 - 如果你想开发一个套件，建议直接使用 leo 的 cli 套件模板哦。")])]),t._v(" "),a("h2",{attrs:{id:"背景故事"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景故事"}},[t._v("#")]),t._v(" 背景故事")]),t._v(" "),a("p",[t._v("小明是某大厂的程序员，他善于使用各种命令行工具来实现他的某些需求———但随着公司以及社区的命令行工具安装的越来越多，他开始烦恼于如何记忆他们、管理他们； 而小明正在烦恼的时候，却不知道隔壁业务线又产出了新的命令行工具。"),a("br")]),t._v(" "),a("ul",[a("li",[t._v("小明期望有一个统一的入口，来集成和管理所有命令")]),t._v(" "),a("li",[t._v("小明期望能方便的统一观察所有公司内产出的命令行工具，而不是单独的一个个了解它们")])]),t._v(" "),a("p",[t._v("而小明期望的，就是@melody-core/melody-cli 的存在意义。")]),t._v(" "),a("h2",{attrs:{id:"快速使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速使用"}},[t._v("#")]),t._v(" 快速使用")]),t._v(" "),a("blockquote",[a("p",[t._v("node 版本支持: >=8.0.0 本地需要安装 yarn")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" global "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @melody-core/melody-cli\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行 melody 命令 即可查看帮助和文档")]),t._v("\n")])])]),a("h2",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("h3",{attrs:{id:"命令行管理工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行管理工具"}},[t._v("#")]),t._v(" 命令行管理工具")]),t._v(" "),a("p",[t._v("melody-cli，是用来管理命令行工具的命令行工具。这么说可能有点绕，也许下面的两个例子可以让你明白：")]),t._v(" "),a("blockquote",[a("p",[t._v("@melody-core/leo 是旋律组织开发的模板脚手架命令工具，它的作用是快速生成项目——类似”create-raect\n-app“、”@vue/cli“，但@melody-core/leo 集成的模板更加丰富，因为它的模板是不断增加的。")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  @melody-core/leo 可以单独安装使用，但也可以将其作为melody-cli的一个套件；")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 我们可以通过 melody search 或者 melody search @melody-core/leo来获取到leo的信息")]),t._v("\n    melody search\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装套件")]),t._v("\n    melody "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @melody-core/leo\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 即可使用套件")]),t._v("\n    melody leo\n")])])]),a("blockquote",[a("p",[t._v("http-server 是一个比较知名的开源包，我们经常使用它来启动一个 http-server 服务。")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 它当然也可以作为melody的套件。我们首先安装它")]),t._v("\n    melody "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" http-server\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这时我们运行melody发现, 已经拓展了http-server命令")]),t._v("\n    melody\n\n    🎵 @melody-core/melody-cli版本检索完毕, 已是最新版本: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".13\n    Usage: melody "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    Options:\n    -V, --version      output the version number\n    -v, --version      查看当前版本\n    -h, --help         display "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v("\n\n    Commands:\n    search             列出官方所有套件\n    list               列出已安装的套件列表\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("package"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  安装套件\n    remove "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("package"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   删除套件\n    update "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("package"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   更新套件\n    desc  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("package"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("    更改套件描述\n    leo                初始化项目的脚手架命令工具\n    http-server        未知套件, 您可以通过命令 melody des "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("pluginName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 来更改它的描述\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     display "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 我们可以更改对它的描述以便对它进行管理")]),t._v("\n    melody desc http-server\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 用来启动http服务的套件。\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 我们可以通过 melody http-server来运行它的相关功能")]),t._v("\n    melody http-server -h\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在当前目录下启动一个http-server服务。")]),t._v("\n    melody http-server -c\n\n")])])]),a("h3",{attrs:{id:"套件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#套件"}},[t._v("#")]),t._v(" 套件")]),t._v(" "),a("p",[t._v("每个符合 melody-cli 套件规范的 npm 包，都可以被视作为它的套件。套件可以理解为插件，可以扩展 melody 的命令，从而扩展 melody 的功能。")]),t._v(" "),a("blockquote",[a("p",[t._v("例如 @melody-core/leo")])]),t._v(" "),a("p",[t._v("而每个套件都是独立的 npm 包，因此它们当然也可以被单独安装使用。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单独安装 @melody-core/leo")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" global "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @melody-core/leo\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用它")]),t._v("\n    leo\n")])])]),a("p",[t._v("然而就像背景里讲的那样，我们为了方便集成管理，更期望用一个统一的入口去集成所有的命令，这让我们可以更方便的管理所有包，更可以随时了解组织内产出的包。")]),t._v(" "),a("h3",{attrs:{id:"套件类别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#套件类别"}},[t._v("#")]),t._v(" 套件类别")]),t._v(" "),a("p",[t._v("为了更方便的管理套件，我们给每个套件定义一个类别,方便用户们进一步分类和了解该套件。")]),t._v(" "),a("h2",{attrs:{id:"基础命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础命令"}},[t._v("#")]),t._v(" 基础命令")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("命令")]),t._v(" "),a("th",[t._v("描述")]),t._v(" "),a("th",[t._v("具体使用")]),t._v(" "),a("th",[t._v("补充")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("melody search")]),t._v(" "),a("td",[t._v("查询官方套件列表")]),t._v(" "),a("td",[t._v("melody search")]),t._v(" "),a("td",[t._v("列出所有 melody-cli 官方套件")])]),t._v(" "),a("tr",[a("td",[t._v("melody list")]),t._v(" "),a("td",[t._v("查询已安装套件列表")]),t._v(" "),a("td",[t._v("melody list")]),t._v(" "),a("td",[t._v("列出所有已安装的套件")])]),t._v(" "),a("tr",[a("td",[t._v("melody install")]),t._v(" "),a("td",[t._v("安装套件")]),t._v(" "),a("td",[t._v("melody install <package>")]),t._v(" "),a("td",[t._v("package 必填，例：melody install @melody-core/leo")])]),t._v(" "),a("tr",[a("td",[t._v("melody remove")]),t._v(" "),a("td",[t._v("删除套件")]),t._v(" "),a("td",[t._v("melody remove <package>")]),t._v(" "),a("td",[t._v("package 必填，例：melody remove @melody-core/leo")])]),t._v(" "),a("tr",[a("td",[t._v("melody update")]),t._v(" "),a("td",[t._v("更新套件")]),t._v(" "),a("td",[t._v("melody update [package]")]),t._v(" "),a("td",[t._v("不填参数时，默认更新所有 melody-cli 套件")])]),t._v(" "),a("tr",[a("td",[t._v("melody desc")]),t._v(" "),a("td",[t._v("更改套件的描述")]),t._v(" "),a("td",[t._v("melody desc <package>")]),t._v(" "),a("td",[t._v("package 必填, 例: melody desc http-server")])])])]),t._v(" "),a("h2",{attrs:{id:"官方套件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官方套件"}},[t._v("#")]),t._v(" 官方套件")]),t._v(" "),a("blockquote",[a("p",[t._v("运行命令 melody search 即可查看所有官方命令行套件哦")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("包")]),t._v(" "),a("th",[t._v("命令")]),t._v(" "),a("th",[t._v("描述")]),t._v(" "),a("th",[t._v("具体使用")]),t._v(" "),a("th",[t._v("补充")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("@melody-core/leo")]),t._v(" "),a("td",[t._v("leo")]),t._v(" "),a("td",[t._v("生成模板的脚手架命令")]),t._v(" "),a("td",[t._v("melody leo [command][options]")]),t._v(" "),a("td",[t._v("一个便捷集成和管理项目模板的脚手架命令行工具")])])])]),t._v(" "),a("h2",{attrs:{id:"外界套件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外界套件"}},[t._v("#")]),t._v(" 外界套件")]),t._v(" "),a("blockquote",[a("p",[t._v("理论上任何全局包，都可以作为 melody 的插件。\n比如 http-server 是一个启动 http-server 服务的包,我们可以通过 melody 去安装/管理/使用它")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装")]),t._v("\n    melody "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" http-server\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看命令里 已拓展了http-server")]),t._v("\n    melody -h\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看http-server的使用帮助")]),t._v("\n    melody http-server -h\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 我们可以给它加一个描述")]),t._v("\n    melody desc http-server\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("请输入对http-server的描述:\n    ： 用来启动http服务的包。\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当前目录下使用它启动一个http-server服务")]),t._v("\n    melody http-server -c\n")])])]),a("h2",{attrs:{id:"自定义套件-套件开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义套件-套件开发"}},[t._v("#")]),t._v(" 自定义套件/套件开发")]),t._v(" "),a("h3",{attrs:{id:"套件开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#套件开发"}},[t._v("#")]),t._v(" 套件开发")]),t._v(" "),a("blockquote",[a("p",[t._v("你可以自由的开发自定义套件并在 melody-cli 中集成它，我们为您提供了 melody-kit-template 模板，您可以用过 leo 来选择它快速生成您的项目")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 前置，安装了leo套件，并且在联网环境(为了拉下模板)。")]),t._v("\n   melody leo init\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此处选择  melody-plugin-template 即可。")]),t._v("\n")])])]),a("h3",{attrs:{id:"使用开发模式来调试您的套件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用开发模式来调试您的套件"}},[t._v("#")]),t._v(" 使用开发模式来调试您的套件")]),t._v(" "),a("p",[t._v("在你进入了项目的根目录后，即开启 melody 套件开发模式")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 前置，在自定义套件项目的根目录下")]),t._v("\n    node ./index.js\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这时候你就能在test命令分类下查看到您自定义的套件命令，并可以运行它")]),t._v("\n")])])]),a("h3",{attrs:{id:"发布套件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布套件"}},[t._v("#")]),t._v(" 发布套件")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 套件项目根目录下运行：")]),t._v("\n    melody publish\n")])])]),a("h2",{attrs:{id:"开发文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发文档"}},[t._v("#")]),t._v(" 开发文档")]),t._v(" "),a("h3",{attrs:{id:"commander"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commander"}},[t._v("#")]),t._v(" commander")]),t._v(" "),a("p",[t._v("如果你想开发套件，甚至参与 melody-cli 的开发，建议你先玩一下 commander，因为 melody-cli 和套件原则上都是基于它开发的。 "),a("br"),t._v("\n它的官方文档地址：\nhttps://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md")])])}),[],!1,null,null,null);e.default=r.exports}}]);