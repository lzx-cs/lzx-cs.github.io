document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
        // customised options
        // • auto-render specific keys, e.g.:
        delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\(', right: '\\)', display: false},
            {left: '\\[', right: '\\]', display: true}
        ],
        // • rendering keys, e.g.:
        throwOnError : false,
        macros: {
            "\\N": "\\mathbb{N}",
            "\\Z": "\\mathbb{Z}",
            "\\R": "\\mathbb{R}",
            "\\C": "\\mathbb{C}",

            "\\set": "\\mathsf{#1}",
            "\\grp": "\\mathsf{#1}",
            "\\spc": "\\mathcal{#1}",

            "\\d": "{\\rm d}",

            "\\Span": "\\mathsf{Span}",
            "\\Lin": "\\mathsf{Lin}",
            "\\rank": "\\mathsf{rank}",

            "\\>": "\\rangle",
            "\\<": "\\langle",
            "\\kk": "\\>\\!\\>",
            "\\bb": "\\<\\!\\<",
            "\\st": "\\mathbf{#1}",
            "\\bs": "\\boldsymbol{#1}",

            "\\map": "\\mathcal{#1}",
            "\\Tr": "\\operatorname{Tr}",
            "\\diag": "\\mathsf{diag}",

            "\\op": "\\operatorname{#1}",

            "\\St": "\\mathsf{St}",
            "\\Eff": "\\mathsf{Eff}",
            "\\Pur": "\\mathsf{Pur}",
            "\\Transf": "\\mathsf{Transf}",
            "\\Chan": "\\mathsf{Chan}",
            "\\BiChan": "\\mathsf{BiChan}",
            "\\SpanBiChan": "\\mathsf{SpanBiChan}",
            "\\Map": "\\mathsf{Map}",

            "\\Pos": "\\mathsf{Pos}",
            "\\Herm": "\\mathsf{Herm}",

            "\\cj": "Choi-Jamio\\l{}kowski~",
        }
    });
});