// --- Localisation ---
var l10n = {
	"be": {
		'title': 'Артаґрафічны Слоўнік Нашай Нівы',
		'langToggle': "Eng",
		'searchLabel': 'Пошук:',
		'searchPlaceholder': 'Пачніце ўводзіць...',
		'searchBtn': 'Пошук',
		'ggLabel': 'Іґнараваць розьніцу між ґ/г',
		'substrLabel': 'Пошук усярэдзіне слова',
		'seeAlso': 'Таксама:',
		'notUsed': 'Глядзіце:',
		'source': 'ад',
		'variations': 'Варыянты:',
		'but': 'але',
		'footer': 'Гэты сайт — адноўленая электронная вэрсія артаґрафічнага слоўніка «Нашае Нівы», які шырока выкарыстоўваўся на прасторах інтэрнэту, але быў згублены. Слоўнік рэканструяваны на ґрунце файлаў, укладзеных Уладзімерам Каткоўскім, і адлюстроўвае нормы клясычнае беларускае артаґрафіі (тарашкевіцы).',
		'classification': {
			// Short label localisation (for inner <i>text</i>)
			'labels': {
				'<i>адз. няма</i>': 'адз. няма',
				'<i>анат.</i>': 'анат.',
				'<i>архіт.</i>': 'архіт.',
				'<i>бат.</i>': 'бат.',
				'<i>выкл.</i>': 'выкл.',
				'<i>дзеепрым.</i>': 'дзеепрым.',
				'<i>дзеепрысл. з часьціцай</i>': 'дзеепрысл. з часьціцай',
				'<i>ж.</i>': 'ж.',
				'<i>заал.</i>': 'заал.',
				'<i>зак. і незак.</i>': 'зак. і незак.',
				'<i>зак.</i>': 'зак.',
				'<i>зборн.</i>': 'зборн.',
				'<i>злучн.</i>': 'злучн.',
				'<i>кат. і нерэліґ.</i>': 'кат. і нерэліґ.',
				'<i>кат.</i>': 'кат.',
				'<i>літ.</i>': 'літ.',
				'<i>м. і ж.</i>': 'м. і ж.',
				'<i>м.</i>': 'м.',
				'<i>мат.</i>': 'мат.',
				'<i>мн. няма</i>': 'мн. няма',
				'<i>мн.</i>': 'мн.',
				'<i>муз.</i>': 'муз.',
				'<i>мін.</i>': 'мін.',
				'<i>н.</i>': 'н.',
				'<i>незак.</i>': 'незак.',
				'<i>н. і м.</i>': 'н. і м.',
				'<i>нязьм.</i>': 'нязьм.',
				'<i>параўн. прым.</i>': 'параўн. прым.',
				'<i>параўн.</i>': 'параўн.',
				'<i>прав.</i>': 'прав.',
				'<i>прыназ.</i>': 'прыназ.',
				'<i>прысл.</i>': 'прысл.',
				'<i>рэліґ.</i>': 'рэліґ.',
				'<i>мус.</i>': 'мус.',
				'<i>с.-г.</i>': 'с.-г.',
				'<i>фарм.</i>': 'фарм.',
				'<i>эм.</i>': 'эм.',
				'<i>ґеал.</i>': 'ґеал.',
				'<i>ґеаґр.</i>': 'ґеаґр.',
				'<i>ґрам.</i>': 'ґрам.',
			},
			// Explanation localisation (for tooltip)
			'explanations': {
				'<i>адз. няма</i>': 'няма адзіночнага ліку',
				'<i>анат.</i>': 'анатомія',
				'<i>архіт.</i>': 'архітэктура',
				'<i>бат.</i>': 'батаніка',
				'<i>выкл.</i>': 'выклічнік',
				'<i>дзеепрым.</i>': 'дзеепрыметнік',
				'<i>дзеепрысл. з часьціцай</i>': 'дзеепрыслоўе з часьціцай',
				'<i>ж.</i>': 'жаночы род',
				'<i>заал.</i>': 'заалёґія',
				'<i>зак. і незак.</i>': 'закончаны і незакончаны від',
				'<i>зак.</i>': 'закончаны від',
				'<i>зборн.</i>': 'зборнае',
				'<i>злучн.</i>': 'злучнік',
				'<i>кат. і нерэліґ.</i>': 'каталіцкае і нерэліґійнае',
				'<i>кат.</i>': 'каталіцкае',
				'<i>літ.</i>': 'літаратурнае',
				'<i>м. і ж.</i>': 'мужчынскі і жаночы род',
				'<i>м.</i>': 'мужчынскі род',
				'<i>мат.</i>': 'матэматыка',
				'<i>мн. няма</i>': 'няма множнага ліку',
				'<i>мн.</i>': 'множны лік',
				'<i>муз.</i>': 'музыка',
				'<i>мін.</i>': 'мінэрал',
				'<i>н.</i>': 'ніякі род',
				'<i>незак.</i>': 'незакончаны від',
				'<i>н. і м.</i>': 'ніякі і мужчынскі род',
				'<i>нязьм.</i>': 'нязьменнае',
				'<i>параўн. прым.</i>': 'параўнальны прыметнік',
				'<i>параўн.</i>': 'параўнальны',
				'<i>прав.</i>': 'праваслаўнае',
				'<i>прыназ.</i>': 'прыназоўнік',
				'<i>прысл.</i>': 'прыслоўе',
				'<i>рэліґ.</i>': 'рэліґійнае',
				'<i>мус.</i>': 'мусульманскае',
				'<i>с.-г.</i>': 'сельскагаспадарчае',
				'<i>фарм.</i>': 'фармакалёґія',
				'<i>эм.</i>': 'эміґрацыйнае',
				'<i>ґеал.</i>': 'ґеалёґія',
				'<i>ґеаґр.</i>': 'ґеаґрафія',
				'<i>ґрам.</i>': 'ґраматыка',
			}
		}
	},
	"en": {
		'title': 'Naša Niva Orthographic Dictionary',
		'langToggle': 'Бел',
		'searchLabel': 'Search:',
		'searchPlaceholder': 'Start typing...',
		'searchBtn': 'Search',
		'ggLabel': 'Ignore difference between ґ/г',
		'substrLabel': 'Search within words',
		'seeAlso': 'Also:',
		'notUsed': 'See:',
		'source': 'from',
		'variations': 'Variants:',
		'but': 'but',
		'footer': 'This site is a restored electronic version of the orthographic dictionary of Naša Niva, which was widely used on the internet but got lost. The dictionary is reconstructed based on files compiled by Uładzimier Katkoŭski and reflects the norms of the classical Belarusian orthography (Taraškievica).',
		'classification': {
			'labels': {
				'<i>адз. няма</i>': 'no sg.',
				'<i>анат.</i>': 'anat.',
				'<i>архіт.</i>': 'arch.',
				'<i>бат.</i>': 'bot.',
				'<i>выкл.</i>': 'interj.',
				'<i>дзеепрым.</i>': 'partic.',
				'<i>дзеепрысл. з часьціцай</i>': 'gerund w/ particle',
				'<i>ж.</i>': 'f.',
				'<i>заал.</i>': 'zool.',
				'<i>зак. і незак.</i>': 'perf. & imperf.',
				'<i>зак.</i>': 'perf.',
				'<i>зборн.</i>': 'collect.',
				'<i>злучн.</i>': 'conj.',
				'<i>кат. і нерэліґ.</i>': 'Cath. & non-relig.',
				'<i>кат.</i>': 'Cath.',
				'<i>літ.</i>': 'lit.',
				'<i>м. і ж.</i>': 'm. & f.',
				'<i>м.</i>': 'm.',
				'<i>мат.</i>': 'math.',
				'<i>мн. няма</i>': 'no pl.',
				'<i>мн.</i>': 'pl.',
				'<i>муз.</i>': 'mus.',
				'<i>мін.</i>': 'min.',
				'<i>н.</i>': 'n.',
				'<i>незак.</i>': 'imperf.',
				'<i>н. і м.</i>': 'n. & m.',
				'<i>нязьм.</i>': 'indecl.',
				'<i>параўн. прым.</i>': 'compar. adj.',
				'<i>параўн.</i>': 'compar.',
				'<i>прав.</i>': 'Orth.',
				'<i>прыназ.</i>': 'prep.',
				'<i>прысл.</i>': 'adv.',
				'<i>рэліґ.</i>': 'relig.',
				'<i>мус.</i>': 'Mus.',
				'<i>с.-г.</i>': 'agric.',
				'<i>фарм.</i>': 'pharm.',
				'<i>эм.</i>': 'em.',
				'<i>ґеал.</i>': 'geol.',
				'<i>ґеаґр.</i>': 'geogr.',
				'<i>ґрам.</i>': 'gram.',
			},
			'explanations': {
				'<i>адз. няма</i>': 'no singular form',
				'<i>анат.</i>': 'anatomy',
				'<i>архіт.</i>': 'architecture',
				'<i>бат.</i>': 'botany',
				'<i>выкл.</i>': 'interjection',
				'<i>дзеепрым.</i>': 'participle',
				'<i>дзеепрысл. з часьціцай</i>': 'gerund with particle',
				'<i>ж.</i>': 'feminine',
				'<i>заал.</i>': 'zoology',
				'<i>зак. і незак.</i>': 'perfective and imperfective',
				'<i>зак.</i>': 'perfective',
				'<i>зборн.</i>': 'collective',
				'<i>злучн.</i>': 'conjunction',
				'<i>кат. і нерэліґ.</i>': 'Catholic and non-religious',
				'<i>кат.</i>': 'Catholic',
				'<i>літ.</i>': 'literary',
				'<i>м. і ж.</i>': 'masculine and feminine',
				'<i>м.</i>': 'masculine',
				'<i>мат.</i>': 'mathematics',
				'<i>мн. няма</i>': 'no plural form',
				'<i>мн.</i>': 'plural',
				'<i>муз.</i>': 'music',
				'<i>мін.</i>': 'mineral',
				'<i>н.</i>': 'neuter',
				'<i>незак.</i>': 'imperfective',
				'<i>н. і м.</i>': 'neuter and masculine',
				'<i>нязьм.</i>': 'indeclinable',
				'<i>параўн. прым.</i>': 'comparative adjective',
				'<i>параўн.</i>': 'comparative',
				'<i>прав.</i>': 'Orthodox',
				'<i>прыназ.</i>': 'preposition',
				'<i>прысл.</i>': 'adverb',
				'<i>рэліґ.</i>': 'religious',
				'<i>мус.</i>': 'Muslim',
				'<i>с.-г.</i>': 'agricultural',
				'<i>фарм.</i>': 'pharmacology',
				'<i>эм.</i>': 'emigré',
				'<i>ґеал.</i>': 'geology',
				'<i>ґеаґр.</i>': 'geography',
				'<i>ґрам.</i>': 'grammar',
			}
		}
	}
};

// --- Belarusian Alphabet ---
const BELARUSIAN_ALPHABET = [
	'А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Ё', 'Ж', 'З', 'І', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ў', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Ы', 'Ь', 'Э', 'Ю', 'Я'
];

function renderAlphabetButtons() {
	let html = '<div class="d-flex justify-content-center"><div class="d-flex flex-wrap gap-1 justify-content-center">';
	BELARUSIAN_ALPHABET.forEach(letter => {
		html += `<button type="button"
			class="alphaBtn btn btn-outline-danger d-flex align-items-center justify-content-center p-0 fs-5"
			data-letter="${letter}"
			style="width:2rem;height:2rem;flex:0 0 auto;">
			${letter}
		</button>`;
	});
	html += '</div></div>';
	document.getElementById('alphabetButtons').innerHTML = html;
}
// Robust CSV parser for semicolon-delimited files with quoted fields
function parseCSV(text) {
	const rows = [];
	const lines = text.split(/\r?\n/);
	for (let line of lines) {
		if (!line.trim()) continue;
		const row = [];
		let field = '';
		let inQuotes = false;
		for (let i = 0; i < line.length; ++i) {
			const char = line[i];
			if (char === '"') {
				if (inQuotes && line[i + 1] === '"') {
					field += '"';
					++i;
				} else {
					inQuotes = !inQuotes;
				}
			} else if (char === ';' && !inQuotes) {
				row.push(field);
				field = '';
			} else {
				field += char;
			}
		}
		row.push(field);
		rows.push(row);
	}
	return rows;
}

// Remove acute accent and <i>...</i> wrappers
function normalizeForSearch(str, ignoreGG) {
	if (!str) return '';
	// Remove <i>...</i> tags
	str = str.replace(/<i>.*?<\/i>/gi, '');
	// Remove acute accent (U+0301 and visually similar)
	str = str.replace(/\u0301|́/g, '');
	// Optionally treat ґ as г
	if (ignoreGG) str = str.replace(/ґ/gi, m => m === 'ґ' ? 'г' : 'Г');
	return str;
}

// --- Pagination ---
const PAGE_SIZE = 50;
let allRows = [];
let filteredRows = [];
let currentPage = 1;

document.addEventListener('click', function (e) {
	if (e.target.classList.contains('dict-source-link')) {
		e.preventDefault();

		const word = decodeURIComponent(e.target.getAttribute('data-word'));
		document.getElementById('searchBox').value = word;

		currentAlpha = '';
		updateFilter();
	}
});

function renderEntryBlock(row) {
	const L = l10n[currentLang];
	let html = `<div class="dict-entry card shadow-sm mb-4 border-0 rounded-4">
			<div class="card-body py-3 px-4 d-flex flex-column gap-2 fs-5">
				<div class="d-flex align-items-baseline gap-2">
					${row[0] ? `<span class="fw-bold fs-3 text-danger spectral">${row[0]}</span>` : ''}
					${row[2] ? (() => {
			// Split by comma, trim, and render each with its own tooltip and localised label
			return row[2].split(',').map(item => {
				let trimmed = item.trim();
				let expl = (L.classification.explanations && L.classification.explanations[trimmed]) || '';
				let label = (L.classification.labels && L.classification.labels[trimmed]) || trimmed;
				return `<u class="text-danger fst-italic" title="${expl}">${label}</u>`;
			}).join(', ');
		})() : ''}
				</div>
				${row[1] ? `<div><span class="fst-italic text-dark">(${row[1]})</span></div>` : ''}
				${row[3] ? `<div><span class="text-secondary">${row[3]}</span></div>` : ''}
				${row[4] ? `<div><span class="fw-semibold text-secondary">${L.seeAlso}</span> ${row[4]}</div>` : ''}
				${row[5] ? `<div><span class="fw-semibold text-secondary">${L.notUsed}</span> <a href=\"#\" class=\"dict-source-link link-danger link-offset-2 link-underline-opacity-0\" data-word=\"${encodeURIComponent(row[5])}\">${row[5]}</a></div>` : ''}
				${row[6] ? `<div><span class="fw-semibold text-secondary">${L.source}</span> ${row[6]}</div>` : ''}
				${row[7] ? `<div><span class="fw-semibold text-secondary">${L.variations}</span> ${row[7]}</div>` : ''}
				${row[8] ? `<div><span class="fw-semibold text-secondary">${L.but}</span> ${row[8]}</div>` : ''}
			</div>
		</div>`;
	return html;
}

function renderTablePage(page) {
	if (!filteredRows || filteredRows.length === 0) {
		document.getElementById('tableContainer').innerHTML = '';
		document.getElementById('pagination').innerHTML = '';
		return;
	}
	let html = '';
	const start = 1 + (page - 1) * PAGE_SIZE;
	const end = Math.min(filteredRows.length, start + PAGE_SIZE);
	for (let i = start; i < end; ++i) {
		html += renderEntryBlock(filteredRows[i]);
	}
	document.getElementById('tableContainer').innerHTML = html;
	renderPagination(page);
}

function renderPagination(page) {
	if (!filteredRows) filteredRows = [];

	const totalRows = filteredRows.length - 1;
	const totalPages = Math.ceil(totalRows / PAGE_SIZE);

	if (totalPages <= 1) {
		document.getElementById('pagination').innerHTML = '';
		return;
	}

	let start = Math.max(1, page - 2);
	let end = Math.min(totalPages, page + 2);

	if (end - start < 4) {
		if (start === 1) end = Math.min(totalPages, start + 4);
		else if (end === totalPages) start = Math.max(1, end - 4);
	}

	let html = `<div class="btn-group btn-group-md" role="group">`;

	// First
	html += `<button onclick="gotoPage(1)"  class="btn btn-danger" ${page === 1 ? 'disabled' : ''}>&laquo;</button>`;

	// Prev
	html += `<button onclick="gotoPage(${page - 1})" class="btn btn-outline-danger" ${page === 1 ? 'disabled' : ''}>&lt;</button>`;

	// Page numbers
	for (let i = start; i <= end; i++) {
		if (i === page) {
			html += `<button class="btn btn-danger active" disabled>${i}</button>`;
		} else {
			html += `<button onclick="gotoPage(${i})" class="btn btn-outline-secondary">${i}</button>`;
		}
	}

	// Next
	html += `<button onclick="gotoPage(${page + 1})" class="btn btn-outline-danger" ${page === totalPages ? 'disabled' : ''}>&gt;</button>`;

	// Last
	html += `<button onclick="gotoPage(${totalPages})" class="btn btn-danger" ${page === totalPages ? 'disabled' : ''}>&raquo;</button>`;

	html += `</div>`;

	document.getElementById('pagination').innerHTML = html;
}

window.gotoPage = function (page) {
	currentPage = page;
	renderTablePage(currentPage);
};

function filterRows(filter, ignoreGG, substrMatch, alphaLetter) {
	if (!allRows || allRows.length === 0) return [];
	if (!filter && !alphaLetter) return allRows;
	const header = allRows[0];
	const filtered = [header];
	const seen = new Set();
	let search = filter ? normalizeForSearch(filter.toLowerCase(), ignoreGG) : '';
	let alpha = alphaLetter ? normalizeForSearch(alphaLetter.toLowerCase(), ignoreGG) : '';

	if (alpha) {
		// Only match words in first column that start with the alpha letter
		for (let i = 1; i < allRows.length; ++i) {
			let cell = normalizeForSearch(allRows[i][0].toLowerCase(), ignoreGG);
			if (cell.startsWith(alpha)) {
				filtered.push(allRows[i]);
			}
		}
		return filtered;
	}

	// 1. First column, prefix matches (search)
	for (let i = 1; i < allRows.length; ++i) {
		let cell = normalizeForSearch(allRows[i][0].toLowerCase(), ignoreGG);
		if (search && cell.startsWith(search)) {
			filtered.push(allRows[i]);
			seen.add(i);
		}
	}
	// 2. First column, substring matches (not prefix)
	if (substrMatch && search) {
		for (let i = 1; i < allRows.length; ++i) {
			if (seen.has(i)) continue;
			let cell = normalizeForSearch(allRows[i][0].toLowerCase(), ignoreGG);
			if (cell.includes(search)) {
				filtered.push(allRows[i]);
				seen.add(i);
			}
		}
	}
	// 3. Other columns, only if not already included
	if (search) {
		for (let i = 1; i < allRows.length; ++i) {
			if (seen.has(i)) continue;
			for (let j = 1; j < allRows[i].length; ++j) {
				let cell = normalizeForSearch((allRows[i][j] || '').toLowerCase(), ignoreGG);
				if (cell.startsWith(search) || (substrMatch && cell.includes(search))) {
					filtered.push(allRows[i]);
					seen.add(i);
					break;
				}
			}
		}
	}
	return filtered;
}

// --- File Upload ---
document.getElementById('csvFile').addEventListener('change', function (e) {
	const file = e.target.files[0];
	if (!file) return;
	const reader = new FileReader();
	reader.onload = function (evt) {
		allRows = parseCSV(evt.target.result);
		filteredRows = allRows;
		currentPage = 1;
		renderTablePage(currentPage);
	};
	reader.readAsText(file, 'UTF-8');
});

// --- Search ---
let currentAlpha = '';
function updateFilter() {
	const filter = document.getElementById('searchBox').value;
	const ignoreGG = document.getElementById('ggToggle').checked;
	const substrMatch = document.getElementById('substrToggle').checked;
	filteredRows = filterRows(filter, ignoreGG, substrMatch, currentAlpha);
	currentPage = 1;
	renderTablePage(currentPage);
}

document.getElementById('searchBtn').addEventListener('click', function () {
	currentAlpha = '';
	// Blur the search box to close the mobile keyboard
	document.getElementById('searchBox').blur();
	// Update URL with ?search= param
	const val = document.getElementById('searchBox').value;
	if (history.replaceState) {
		const url = new URL(window.location);
		if (val) {
			url.searchParams.set('search', encodeURIComponent(val));
		} else {
			url.searchParams.delete('search');
		}
		// Use encodeURI to keep Cyrillic readable
		let urlStr = url.origin + url.pathname + (url.search ? '?' + url.searchParams.toString() : '');
		history.replaceState(null, '', encodeURI(urlStr));
	}
	updateFilter();
});
document.getElementById('ggToggle').addEventListener('change', updateFilter);
document.getElementById('substrToggle').addEventListener('change', updateFilter);

document.getElementById('alphabetButtons').addEventListener('click', function (e) {
	if (e.target.classList.contains('alphaBtn')) {
		currentAlpha = e.target.getAttribute('data-letter');
		document.getElementById('searchBox').value = '';
		updateFilter();
	}
});

// --- Auto-load dict.csv if present ---
window.addEventListener('DOMContentLoaded', function () {
	setLocale('be');
	// If ?search= param is present, prefill and search
	const params = new URLSearchParams(window.location.search);
	let searchVal = params.get('search');
	if (searchVal) {
		// Decode once
		try {
			let decoded = decodeURIComponent(searchVal);
			// If still looks like %XX, decode again
			if (/^%[0-9A-Fa-f]{2}/.test(decoded)) {
				decoded = decodeURIComponent(decoded);
			}
			searchVal = decoded;
		} catch (e) { }
		document.getElementById('searchBox').value = searchVal;
	}
	fetch('dict.csv').then(resp => {
		if (!resp.ok) throw new Error('No dict.csv');
		return resp.text();
	}).then(text => {
		allRows = parseCSV(text);
		filteredRows = allRows;
		currentPage = 1;
		// If search param present, trigger filter
		if (searchVal) {
			updateFilter();
		} else {
			renderTablePage(currentPage);
		}
	}).catch(() => { });
});

let currentLang = 'be';

document.getElementById('langToggle').onclick = function () {
	currentLang = (currentLang === 'be') ? 'en' : 'be';
	setLocale(currentLang);
};

function setLocale(currentLang) {
	// Update elements with data-l10n (innerHTML)
	var nodes = document.querySelectorAll('[data-l10n]');
	for (var i = 0; i < nodes.length; i++) {
		var key = nodes[i].getAttribute('data-l10n');
		if (l10n[currentLang][key]) {
			nodes[i].innerHTML = l10n[currentLang][key];
		}
	}

	// Update elements with data-l10n-placeholder (placeholder attribute)
	var phNodes = document.querySelectorAll('[data-l10n-placeholder]');
	for (var j = 0; j < phNodes.length; j++) {
		var phKey = phNodes[j].getAttribute('data-l10n-placeholder');
		if (l10n[currentLang][phKey]) {
			phNodes[j].setAttribute('placeholder', l10n[currentLang][phKey]);
		}
	}

	// Update the page <title> to match the current language
	if (l10n[currentLang] && l10n[currentLang].title) {
		document.title = l10n[currentLang].title;
	}

	renderTablePage(currentPage);
	renderAlphabetButtons();
}