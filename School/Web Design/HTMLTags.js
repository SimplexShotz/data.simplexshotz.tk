
// A decently accurate list of all of the tags per HTML version
// https://codehs.com/editor/html/417403/1286247/index.html

var allTags = [
    [ // HTML 1.0 Tags
        {
            tag: "title",
            name: "Title Tag",
            link: "https://www.w3schools.com/tags/tag_title.asp",
            isOld: false
        }, {
            tag: "nextid",
            name: "Next ID Tag",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nextid",
            isOld: true
        }, {
            tag: "a",
            name: "Anchor Tag",
            link: "https://www.w3schools.com/tags/tag_a.asp",
            isOld: false
        }, {
            tag: "isindex",
            name: "Keyword Index Tag",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/isindex",
            isOld: true
        }, {
            tag: "plaintext",
            name: "Plain Text Tag",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/plaintext",
            isOld: true
        }, {
            tag: "xmp",
            name: "Example Text Tag",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/xmp",
            isOld: true
        }, {
            tag: "listing",
            name: "Listing Tag",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/listing",
            isOld: true
        }, {
            tag: "p",
            name: "Paragraph Tag",
            link: "https://www.w3schools.com/tags/tag_p.asp",
            isOld: false
        }, {
            tag: "h1-h6",
            name: "Heading Tags",
            link: "https://www.w3schools.com/tags/tag_hn.asp",
            isOld: false
        }, {
            tag: "address",
            name: "Address Tag",
            link: "https://www.w3schools.com/tags/tag_address.asp",
            isOld: false
        }, {
            tag: "dl",
            name: "Description List Tag",
            link: "https://www.w3schools.com/tags/tag_dl.asp",
            isOld: false
        }, {
            tag: "dt",
            name: "Description Term Tag",
            link: "https://www.w3schools.com/tags/tag_dt.asp",
            isOld: false
        }, {
            tag: "dd",
            name: "Description Tag",
            link: "https://www.w3schools.com/tags/tag_dd.asp",
            isOld: false
        }, {
            tag: "ul",
            name: "Unordered List Tag",
            link: "https://www.w3schools.com/tags/tag_ul.asp",
            isOld: false
        }, {
            tag: "ol",
            name: "Ordered List Tag",
            link: "https://www.w3schools.com/tags/tag_ol.asp",
            isOld: false
        }, {
            tag: "li",
            name: "List Item Tag",
            link: "https://www.w3schools.com/tags/tag_li.asp",
            isOld: false
        }, {
            tag: "menu",
            name: "Menu Tag",
            link: "https://www.w3schools.com/tags/tag_menu.asp",
            isOld: false
        }, {
            tag: "dir",
            name: "Directory Tag",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dir",
            isOld: true
        }
    ], // ^ HTML 1.0 Tags ^
    [ // HTML 2.0 Tags
        // TODO: Add TABLES; see http://www.martinrinehart.com/frontend-engineering/engineers/html/html-tag-history.html for more that may have bee missed
        {
            tag: "html",
            name: "HTML Tag",
            link: "https://www.w3schools.com/tags/tag_html.asp",
            isOld: false
        }, {
            tag: "head",
            name: "Document Head Tag",
            link: "https://www.w3schools.com/tags/tag_head.asp",
            isOld: false
        }, {
            tag: "title",
            name: "Title Tag",
            link: "https://www.w3schools.com/tags/tag_title.asp",
            isOld: false
        }, {
            tag: "base",
            name: "Base Address Tag",
            link: "https://www.w3schools.com/tags/tag_base.asp",
            isOld: false
        }, {
            tag: "isindex",
            name: "Keyword Index Tag",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/isindex",
            isOld: true
        }, {
            tag: "link",
            name: "Link Tag",
            link: "https://www.w3schools.com/tags/tag_link.asp",
            isOld: false
        }, {
            tag: "meta",
            name: "Meta Tag",
            link: "https://www.w3schools.com/tags/tag_meta.asp",
            isOld: false
        }, {
            tag: "nextid",
            name: "Next ID Tag",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nextid",
            isOld: true
        }, {
            tag: "body",
            name: "Document Body Tag",
            link: "https://www.w3schools.com/tags/tag_body.asp",
            isOld: false
        }, {
            tag: "h1-h6",
            name: "Heading Tags",
            link: "https://www.w3schools.com/tags/tag_hn.asp",
            isOld: false
        }, {
            tag: "p",
            name: "Paragraph Tag",
            link: "https://www.w3schools.com/tags/tag_p.asp",
            isOld: false
        }, {
            tag: "pre",
            name: "Preformatted Text Tag",
            link: "https://www.w3schools.com/tags/tag_pre.asp",
            isOld: false
        }, {
            tag: "xmp",
            name: "Example Text Tag",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/xmp",
            isOld: true
        }, {
            tag: "listing",
            name: "Listing Tag",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/listing",
            isOld: true
        }, {
            tag: "address",
            name: "Address Tag",
            link: "https://www.w3schools.com/tags/tag_address.asp",
            isOld: false
        }, {
            tag: "blockquote",
            name: "Block Quote Tag",
            link: "https://www.w3schools.com/tags/tag_blockquote.asp",
            isOld: false
        }, {
            tag: "dl",
            name: "Description List Tag",
            link: "https://www.w3schools.com/tags/tag_dl.asp",
            isOld: false
        }, {
            tag: "dt",
            name: "Description Term Tag",
            link: "https://www.w3schools.com/tags/tag_dt.asp",
            isOld: false
        }, {
            tag: "dd",
            name: "Description Tag",
            link: "https://www.w3schools.com/tags/tag_dd.asp",
            isOld: false
        }, {
            tag: "ul",
            name: "Unordered List Tag",
            link: "https://www.w3schools.com/tags/tag_ul.asp",
            isOld: false
        }, {
            tag: "ol",
            name: "Ordered List Tag",
            link: "https://www.w3schools.com/tags/tag_ol.asp",
            isOld: false
        }, {
            tag: "li",
            name: "List Item Tag",
            link: "https://www.w3schools.com/tags/tag_li.asp",
            isOld: false
        }, {
            tag: "menu",
            name: "Menu Tag",
            link: "https://www.w3schools.com/tags/tag_menu.asp",
            isOld: false
        }, {
            tag: "dir",
            name: "Directory Tag",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dir",
            isOld: true
        }, {
            tag: "cite",
            name: "Citation Tag",
            link: "https://www.w3schools.com/tags/tag_cite.asp",
            isOld: false
        }, {
            tag: "code",
            name: "Code Tag",
            link: "https://www.w3schools.com/tags/tag_code.asp",
            isOld: false
        }, {
            tag: "em",
            name: "Emphasis Tag",
            link: "https://www.w3schools.com/tags/tag_em.asp",
            isOld: false
        }, {
            tag: "kbd",
            name: "Keyboard Tag",
            link: "https://www.w3schools.com/tags/tag_kbd.asp",
            isOld: false
        }, {
            tag: "samp",
            name: "Sample Tag",
            link: "https://www.w3schools.com/tags/tag_samp.asp",
            isOld: false
        }, {
            tag: "strong",
            name: "Strong Emphasis Tag",
            link: "https://www.w3schools.com/tags/tag_strong.asp",
            isOld: false
        }, {
            tag: "var",
            name: "Variable Tag",
            link: "https://www.w3schools.com/tags/tag_var.asp",
            isOld: false
        }, {
            tag: "b",
            name: "Bold Tag",
            link: "https://www.w3schools.com/tags/tag_b.asp",
            isOld: false
        }, {
            tag: "i",
            name: "Italic Tag",
            link: "https://www.w3schools.com/tags/tag_i.asp",
            isOld: false
        }, {
            tag: "tt",
            name: "Teletype Tag",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tt",
            isOld: true
        }, {
            tag: "a",
            name: "Anchor Tag",
            link: "https://www.w3schools.com/tags/tag_a.asp",
            isOld: false
        }, {
            tag: "br",
            name: "Line Break Tag",
            link: "https://www.w3schools.com/tags/tag_br.asp",
            isOld: false
        }, {
            tag: "hr",
            name: "Horizontal Rule Tag",
            link: "https://www.w3schools.com/tags/tag_hr.asp",
            isOld: false
        }, {
            tag: "img",
            name: "Image Tag",
            link: "https://www.w3schools.com/tags/tag_img.asp",
            isOld: false
        }, {
            tag: "form",
            name: "Form Tag",
            link: "https://www.w3schools.com/tags/tag_form.asp",
            isOld: false
        }, {
            tag: "input",
            name: "Input Field Tag",
            link: "https://www.w3schools.com/tags/tag_input.asp",
            isOld: false
        }, {
            tag: "select",
            name: "Selection Tag",
            link: "https://www.w3schools.com/tags/tag_select.asp",
            isOld: false
        }, {
            tag: "option",
            name: "Option Tag",
            link: "https://www.w3schools.com/tags/tag_option.asp",
            isOld: false
        }, {
            tag: "textarea",
            name: "Text Area Tag",
            link: "https://www.w3schools.com/tags/tag_textarea.asp",
            isOld: false
        }
    ], // ^ HTML 2.0 Tags ^
    [ // HTML 3.2 Tags
        { // TODO
            tag: "html",
            name: "HTML Tag",
            link: "",
            isOld: null
        }, { // TODO
            tag: "head",
            name: "Document Head Tag",
            link: "",
            isOld: null
        }, { // TODO
            tag: "title",
            name: "Title Tag",
            link: "",
            isOld: null
        }, {
            tag: "isindex",
            name: "Keyword Index Tag",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/isindex",
            isOld: true
        }, { // TODO
            tag: "base",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "script",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "style",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "meta",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "link",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "body",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "h1-h6",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "address",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "p",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "ul",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "ol",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "li",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "dl",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "dt",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "dd",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "dir",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "menu",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "pre",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "div",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "center",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "blockquote",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "form",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "input",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "select",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "textarea",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "hr",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "table",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "tr",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "th",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "td",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "caption",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "tt",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "i",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "b",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "u",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "strike",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "big",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "small",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "sub",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "sup",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "em",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "strong",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "dfn",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "code",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "samp",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "kbd",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "var",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "cite",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "a",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "img",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "applet",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "param",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "font",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "basefont",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "br",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "map",
            name: "",
            link: "",
            isOld: null
        }, { // TODO
            tag: "area",
            name: "",
            link: "",
            isOld: null
        }
    ] // ^ HTML 3.2 Tags ^
];
