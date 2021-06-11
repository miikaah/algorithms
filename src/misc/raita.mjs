// BAD CHARACTER RULE
function preBmBc(pat, patlen) {
    const bmBc = [];

    for (let i = 0; i < patlen - 1; ++i) {
        bmBc[pat[i]] = patlen - 1 - i;
    }

    return bmBc;
}

function raita(text, pat) {
    const patlen = pat.length;
    const middleIdx = Math.floor(patlen / 2);
    const firstCh = pat[0];
    const middleCh = pat[middleIdx];
    const lastCh = pat[patlen - 1];

    const bmBc = preBmBc(pat, patlen);

    let i = patlen - 1;
    while (i <= text.length - patlen) {
        const c = text[i];

        if (
            lastCh === c &&
            middleCh === text[i - middleIdx] &&
            firstCh === text[i - patlen] &&
            text.substring(i - (patlen - 1), i + 1) === pat
        ) {
            console.log(i - (patlen - 1));
        }

        i += bmBc[c];
    }
}

const [, , text, pattern] = process.argv;

raita(text, pattern);
