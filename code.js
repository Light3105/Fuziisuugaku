/* script.js */
'use strict';

// --- 数学データ ---
// KaTeX記法ではバックスラッシュをエスケープする必要があるため、`\\`と記述します。
const mathData = [
  {
    "id": "math1",
    "name": "数学I",
    "units": [
      {
        "name": "数と式",
        "formulas": [
          {
            "title": "乗法公式",
            "latex": [
              "(a+b)^2 = a^2 + 2ab + b^2",
              "(a-b)^2 = a^2 - 2ab + b^2",
              "(a+b)(a-b) = a^2 - b^2",
              "(x+a)(x+b) = x^2 + (a+b)x + ab"
            ],
            "explanation": "多項式の積を展開する際の基本的な公式です。因数分解の逆の計算にあたります。",
            "usage_example": [
              "例： $(2x+3)^2 = (2x)^2 + 2(2x)(3) + 3^2 = 4x^2 + 12x + 9$"
            ],
            "notes_remarks": [
              "3乗の公式 $(a+b)^3 = a^3+3a^2b+3ab^2+b^3$ も重要です。",
              "符号の間違いに注意してください。"
            ]
          },
          {
            "title": "因数分解",
            "latex": [
              "a^2 - b^2 = (a+b)(a-b)",
              "a^3 + b^3 = (a+b)(a^2 - ab + b^2)",
              "a^3 - b^3 = (a-b)(a^2 + ab + b^2)"
            ],
            "explanation": "多項式をより次数の低い多項式の積の形で表すことです。",
            "usage_example": [
              "例： $x^3 - 8 = x^3 - 2^3 = (x-2)(x^2 + 2x + 4)$"
            ],
            "notes_remarks": [
              "たすき掛けなど、様々なテクニックがあります。",
              "まずは共通因数でくくることを考えましょう。"
            ]
          }
        ]
      },
      {
        "name": "2次関数",
        "formulas": [
          {
            "title": "2次関数の標準形",
            "latex": [
              "y = a(x-p)^2 + q"
            ],
            "explanation": "グラフの頂点が点 $(p, q)$ であることが一目でわかる形式です。軸は直線 $x=p$ です。",
            "usage_example": [
              "$y = 2x^2 - 8x + 5$ を変形すると、",
              "$y = 2(x^2 - 4x) + 5 = 2\\{(x-2)^2 - 4\\} + 5 = 2(x-2)^2 - 3$",
              "よって、頂点は $(2, -3)$ となります。"
            ],
            "notes_remarks": [
              "平方完成の計算を正確に行うことが重要です。",
              "`a` の符号でグラフが上に凸か下に凸かが決まります。"
            ]
          },
          {
            "title": "2次方程式の解の公式",
            "latex": [
              "ax^2+bx+c=0 \\quad (a \\neq 0) \\text{ の解}",
              "x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}"
            ],
            "explanation": "2次方程式の解を係数 $a, b, c$ を用いて表す公式です。",
            "usage_example": [
              "$3x^2+5x-2=0$ の解は、",
              "$x = \\frac{-5 \\pm \\sqrt{5^2 - 4(3)(-2)}}{2(3)} = \\frac{-5 \\pm \\sqrt{25+24}}{6} = \\frac{-5 \\pm 7}{6}$",
              "よって、$x = \\frac{1}{3}, -2$ です。"
            ],
            "notes_remarks": [
              "判別式 $D = b^2-4ac$ の符号で実数解の個数がわかります。",
              "$D > 0$: 2個, $D = 0$: 1個, $D < 0$: 0個"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mathA",
    "name": "数学A",
    "units": [
      {
        "name": "場合の数と確率",
        "formulas": [
          {
            "title": "順列 (Permutation)",
            "latex": [
              "{}_n P_r = \\frac{n!}{(n-r)!}"
            ],
            "explanation": "異なる $n$ 個のものから $r$ 個を選んで一列に並べる場合の総数です。",
            "usage_example": [
              "5人から3人を選んでリレーの走順を決める場合:",
              "${}_5 P_3 = 5 \\times 4 \\times 3 = 60$ 通りです。"
            ],
            "notes_remarks": [
              "順番を区別するのが順列です。",
              "$0! = 1$ と定義されます。"
            ]
          },
          {
            "title": "組合せ (Combination)",
            "latex": [
              "{}_n C_r = \\frac{n!}{r!(n-r)!} = \\frac{{}_n P_r}{r!}"
            ],
            "explanation": "異なる $n$ 個のものから $r$ 個を選ぶ場合の総数です。順序は問いません。",
            "usage_example": [
              "7種類の花から3種類を選んで花束を作る場合:",
              "${}_7 C_3 = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \times 1} = 35$ 通りです。"
            ],
            "notes_remarks": [
              "順番を区別しないのが組合せです。",
              "${}_n C_r = {}_n C_{n-r}$ の性質がよく使われます。"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "math2",
    "name": "数学II",
    "units": [
      {
        "name": "三角関数",
        "formulas": [
          {
            "title": "三角関数の加法定理",
            "latex": [
              "\\sin(\\alpha \\pm \\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta",
              "\\cos(\\alpha \\pm \\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta",
              "\\tan(\\alpha \\pm \\beta) = \\frac{\\tan\\alpha \\pm \\tan\\beta}{1 \\mp \\tan\\alpha\\tan\\beta}"
            ],
            "explanation": "2つの角の和や差の三角関数を、それぞれの角の三角関数で表す公式です。",
            "usage_example": [
              "$\\cos(75^\\circ) = \\cos(45^\\circ + 30^\\circ)$",
              "$= \\cos45^\\circ\\cos30^\\circ - \\sin45^\\circ\\sin30^\\circ$",
              "$= \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6}-\\sqrt{2}}{4}$"
            ],
            "notes_remarks": [
              "2倍角の公式や半角の公式は加法定理から導出できます。",
              "符号が複雑なので覚え方に注意が必要です（咲いたコスモス、コスモス咲いた...など）。"
            ]
          }
        ]
      }
    ]
  },
  { "id": "mathB", "name": "数学B", "units": [] },
  { "id": "math3", "name": "数学III", "units": [] },
  { "id": "mathC", "name": "数学C", "units": [] }
];

document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('subject-nav');
    const contentContainer = document.getElementById('content-container');
    const searchBox = document.getElementById('search-box');
    let activeNavButton = null;

    /**
     * KaTeXで数式をレンダリングする
     */
    function renderKatex() {
        if (window.renderMathInElement) {
            renderMathInElement(contentContainer, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false},
                ],
                throwOnError: false
            });
        }
    }

    /**
     * 指定された科目のコンテンツをHTMLとして生成し、表示する
     * @param {string} subjectId 表示する科目のID
     */
    function renderContent(subjectId) {
        const subject = mathData.find(s => s.id === subjectId);
        if (!subject) return;

        let html = `<h2 class="subject-title">${subject.name}</h2>`;

        if (subject.units.length === 0) {
            html += '<p>この科目のコンテンツは準備中です。</p>';
        } else {
            html += subject.units.map(unit => `
                <div class="unit-accordion">
                    <button class="unit-header" aria-expanded="false">
                        <h3 class="unit-title">${unit.name}</h3>
                        <i class="fa-solid fa-chevron-right accordion-icon" aria-hidden="true"></i>
                    </button>
                    <div class="unit-content">
                        <div class="formula-list">
                            ${unit.formulas.map(formula => `
                                <div class="formula-item" data-formula-content="${(formula.title + ' ' + formula.explanation + ' ' + formula.latex.join(' ')).toLowerCase()}">
                                    <button class="formula-header" aria-expanded="false">
                                        <h4 class="formula-title">${formula.title}</h4>
                                        <i class="fa-solid fa-chevron-right accordion-icon" aria-hidden="true"></i>
                                    </button>
                                    <div class="formula-content">
                                        <div class="formula-details">
                                            <div class="detail-section">
                                                <h5 class="detail-title"><i class="fa-solid fa-square-root-variable fa-fw"></i> 公式 / 定義</h5>
                                                <div class="formula-display">${formula.latex.map(line => `<div>$${line}$</div>`).join('')}</div>
                                            </div>
                                            <div class="detail-section">
                                                <h5 class="detail-title"><i class="fa-solid fa-circle-info fa-fw"></i> 説明</h5>
                                                <p>${formula.explanation}</p>
                                            </div>
                                            <div class="detail-section">
                                                <h5 class="detail-title"><i class="fa-solid fa-pen-ruler fa-fw"></i> 使用例</h5>
                                                <div class="formula-display">${formula.usage_example.map(line => `<div>$${line}$</div>`).join('')}</div>
                                            </div>
                                            <div class="detail-section">
                                                <h5 class="detail-title"><i class="fa-solid fa-triangle-exclamation fa-fw"></i> 注意点・備考</h5>
                                                <ul>${formula.notes_remarks.map(line => `<li>${line}</li>`).join('')}</ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
        }

        contentContainer.innerHTML = html;
        renderKatex();
    }

    /**
     * ナビゲーションボタンを生成する
     */
    function createNavButtons() {
        mathData.forEach(subject => {
            const button = document.createElement('button');
            button.className = 'nav-button';
            button.textContent = subject.name;
            button.dataset.subjectId = subject.id;
            navContainer.appendChild(button);
        });
    }

    /**
     * アコーディオンの開閉を処理する
     * @param {HTMLButtonElement} header クリックされたヘッダー要素
     */
    function toggleAccordion(header) {
        const item = header.parentElement;
        const content = header.nextElementSibling;
        const isOpening = !item.classList.contains('open');
        
        header.setAttribute('aria-expanded', isOpening);
        item.classList.toggle('open', isOpening);

        if (isOpening) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0';
        }
    }

    /**
     * 検索処理
     */
    function handleSearch() {
        const searchTerm = searchBox.value.toLowerCase().trim();
        const allFormulas = document.querySelectorAll('.formula-item');

        allFormulas.forEach(formula => {
            const content = formula.dataset.formulaContent;
            const isVisible = content.includes(searchTerm);
            formula.style.display = isVisible ? '' : 'none';
        });
    }

    /**
     * 初期化処理
     */
    function init() {
        createNavButtons();
        const navButtons = document.querySelectorAll('.nav-button');

        if (navButtons.length > 0) {
            const initialSubjectId = navButtons[0].dataset.subjectId;
            renderContent(initialSubjectId);
            navButtons[0].classList.add('active');
            activeNavButton = navButtons[0];
        }
        
        navContainer.addEventListener('click', (e) => {
            if (e.target.matches('.nav-button')) {
                const subjectId = e.target.dataset.subjectId;
                renderContent(subjectId);
                if (activeNavButton) {
                    activeNavButton.classList.remove('active');
                }
                e.target.classList.add('active');
                activeNavButton = e.target;
            }
        });
        
        contentContainer.addEventListener('click', (e) => {
            const header = e.target.closest('.unit-header, .formula-header');
            if (header) {
                toggleAccordion(header);
            }
        });

        searchBox.addEventListener('input', handleSearch);
    }

    init();
});```

### 導入とデプロイの手順

1.  **ファイルの作成**: 上記の3つのコードブロックを、それぞれ `index.html`、`style.css`、`script.js` という名前のファイルとして保存します。これら3つのファイルは同じフォルダに配置してください。
2.  **ローカルでの確認**: `index.html` ファイルをウェブブラウザで開くと、ローカル環境でサイトの動作を確認できます。
3.  **GitHub Pagesへのデプロイ**:
    *   GitHub上で新しいリポジトリを作成します。
    *   作成した3つのファイルを、そのリポジトリにアップロード（または`git push`）します。
    *   リポジトリの `Settings` > `Pages` に移動します。
    *   `Source` を `Deploy from a branch` に設定し、`Branch` を `main` (またはコードをアップロードしたブランチ) の `/(root)` フォルダに設定して `Save` をクリックします。
    *   数分待つと、サイトが公開され、URLが表示されます。

これで、保守が容易で、高速に動作し、どのデバイスでも美しく表示される高校数学公式集サイトが完成します。