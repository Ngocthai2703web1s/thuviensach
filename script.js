// Các biến toàn cục
let currentPage = 1;
const BOOKS_PER_PAGE = 20;
let currentFilter = '';
let currentSearchTerm = '';

/**
 * Cập nhật năm hiện tại trong footer
 */
function updateCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Mở liên kết tải sách kèm một link affiliate ngẫu nhiên.
 * @param {string} downloadLink Link tải sách.
 */
function openBookDownload(downloadLink) {
    if (downloadLink && !downloadLink.startsWith('#')) {
        // Mở link tải sách
        window.open(downloadLink, '_blank', 'noopener,noreferrer');
        // Mở link affiliate ngẫu nhiên (nếu có hàm)
        if (typeof getRandomAffiliateLink === 'function') {
            window.open(getRandomAffiliateLink(), '_blank', 'noopener,noreferrer');
        }
    }
}

/**
 * Mở liên kết mua sách kèm một link affiliate ngẫu nhiên.
 * @param {string} buyLink Link mua sách.
 */
function openBuyLink(buyLink) {
    if (buyLink && !buyLink.startsWith('#')) {
        // Mở link mua sách
        window.open(buyLink, '_blank', 'noopener,noreferrer');
        // Mở link affiliate ngẫu nhiên
        if (typeof getRandomAffiliateLink === 'function') {
            window.open(getRandomAffiliateLink(), '_blank', 'noopener,noreferrer');
        }
    }
}

/**
 * Reset toàn bộ bộ lọc và cuộn lên đầu trang.
 */
function resetAppAndScroll() {
    currentFilter = '';
    currentSearchTerm = '';
    currentPage = 1;

    document.getElementById('search-input').value = '';
    populateCategories();
    renderBooks();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Trích xuất và trả về danh sách các thể loại kèm số lượng.
 */
function extractCategoriesWithCount() {
    const counts = {};
    let total = 0;
    mockBookData.forEach(book => {
        if (book.bookName !== '#' && Array.isArray(book.categories)) {
            total++;
            book.categories.forEach(cat => {
                if (cat !== '#') {
                    counts[cat] = (counts[cat] || 0) + 1;
                }
            });
        }
    });
    return { counts, total };
}

/**
 * Cập nhật Đám Mây Thể Loại.
 */
function populateCategories() {
    const { counts, total } = extractCategoriesWithCount();
    const cloudContainer = document.getElementById('category-cloud');
    cloudContainer.innerHTML = '';

    const allActive = currentFilter === '' ?
        'bg-primary text-white ring-2 ring-offset-2 ring-primary' :
        'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 hover:text-primary';
    cloudContainer.innerHTML += `<button onclick="applyFilter('')" class="px-4 py-2 rounded-full text-sm font-medium transition duration-150 shadow-sm ${allActive}">Tất Cả (${total})</button>`;

    const sortedCategories = Object.keys(counts).sort();
    sortedCategories.forEach(cat => {
        const count = counts[cat];
        const isActive = currentFilter === cat ?
            'bg-primary text-white ring-2 ring-offset-2 ring-primary' :
            'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 hover:text-primary';
        cloudContainer.innerHTML += `<button onclick="applyFilter('${cat}')" class="px-4 py-2 rounded-full text-sm font-medium transition duration-150 shadow-sm ${isActive}">${cat} (${count})</button>`;
    });
}

/**
 * Áp dụng bộ lọc thể loại và render lại sách.
 * @param {string} category Tên thể loại cần lọc.
 */
function applyFilter(category) {
    currentFilter = category;
    currentPage = 1;
    populateCategories();
    if (!currentSearchTerm) {
        document.getElementById('search-input').value = '';
    }
    renderBooks();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Xử lý tìm kiếm và lọc kết hợp, sau đó render lại sách.
 */
function handleFilter() {
    currentSearchTerm = document.getElementById('search-input').value.toLowerCase();
    currentPage = 1;
    renderBooks();
}

/**
 * Render danh sách sách, bao gồm sắp xếp A-Z, lọc, tìm kiếm và phân trang.
 */
function renderBooks() {
    let filteredBooks = mockBookData.filter(book => book.bookName !== '#');

    if (currentFilter) {
        filteredBooks = filteredBooks.filter(book => book.categories.includes(currentFilter));
    }

    if (currentSearchTerm) {
        filteredBooks = filteredBooks.filter(book =>
            book.bookName.toLowerCase().includes(currentSearchTerm)
        );
    }

    filteredBooks.sort((a, b) => a.bookName.localeCompare(b.bookName, 'vi', { sensitivity: 'base' }));

    const totalPages = Math.ceil(filteredBooks.length / BOOKS_PER_PAGE);
    const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
    const endIndex = startIndex + BOOKS_PER_PAGE;
    const booksToDisplay = filteredBooks.slice(startIndex, endIndex);

    const bookListElement = document.getElementById('book-list');
    const noResultsElement = document.getElementById('no-results');

    if (booksToDisplay.length === 0) {
        bookListElement.innerHTML = '';
        noResultsElement.classList.remove('hidden');
        document.getElementById('pagination-controls').innerHTML = '';
        return;
    } else {
        noResultsElement.classList.add('hidden');
    }

    bookListElement.innerHTML = booksToDisplay.map(book => {
        const isUpdating = !book.downloadLink || book.downloadLink.startsWith('#');
        const buttonText = isUpdating ? 'Đang Cập Nhật' : 'Tải Về';
        const buttonClass = isUpdating ?
            'bg-gray-400 cursor-not-allowed text-gray-700 opacity-80' :
            'bg-primary text-white hover:bg-secondary transition duration-150 transform hover:scale-[1.02] shadow-md active:scale-95';

        const onClickAction = isUpdating ? 'disabled' : `onclick="openBookDownload('${book.downloadLink}')"`;

        const isBuyLinkValid = book.buyLink && !book.buyLink.startsWith('#');
        const buyButtonClass = !isBuyLinkValid ?
            'bg-gray-300 cursor-not-allowed text-gray-500' :
            'bg-accent text-white hover:bg-orange-600 transition duration-150 shadow-md transform hover:scale-[1.02] active:scale-95';

        const buyAction = isBuyLinkValid ? `onclick="openBuyLink('${book.buyLink}')"` : 'disabled';

        return `
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 overflow-hidden flex flex-col">
                <div class="aspect-[2/3] bg-gray-200 overflow-hidden">
                    <img src="${book.imageLink}"
                         onerror="this.onerror=null;this.src='https://placehold.co/300x450/e5e7eb/333333?text=Book+Cover';"
                         alt="${book.bookName}" class="w-full h-full object-cover">
                </div>
                <div class="p-3 sm:p-4 flex flex-col justify-between flex-grow">
                    <div class="flex items-start justify-between mb-2">
                        <h3 class="text-lg font-semibold text-gray-800 line-clamp-2 mr-2" title="${book.bookName}">${book.bookName}</h3>
                    </div>
                    <p class="text-xs text-gray-500 mb-3 line-clamp-1">Thể loại: ${book.categories.join(', ')}</p>
                    <button ${buyAction} class="block w-full text-center py-2 rounded-lg font-medium mb-3 ${buyButtonClass}">
                        ${isBuyLinkValid ? 'Mua Sách' : 'Hết Hàng'}
                    </button>
                    <button ${onClickAction === 'disabled' ? 'disabled' : onClickAction} class="w-full text-center py-2 rounded-lg font-medium shadow-md ${buttonClass}">
                        ${buttonText}
                    </button>
                </div>
            </div>
        `;
    }).join('');

    renderPagination(totalPages);
}

/**
 * Render các nút phân trang.
 * @param {number} totalPages Tổng số trang.
 */
function renderPagination(totalPages) {
    const container = document.getElementById('pagination-controls');
    container.innerHTML = '';

    container.innerHTML += `<button onclick="changePage(-1)" ${currentPage === 1 ? 'disabled' : ''} class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 transition duration-150">Trước</button>`;

    for (let i = 1; i <= totalPages; i++) {
        const activeClass = i === currentPage ? 'bg-primary text-white border-primary hover:bg-primary' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100';
        container.innerHTML += `<button onclick="goToPage(${i})" class="px-4 py-2 text-sm font-medium border rounded-lg ${activeClass} transition duration-150">${i}</button>`;
    }

    container.innerHTML += `<button onclick="changePage(1)" ${currentPage === totalPages ? 'disabled' : ''} class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 transition duration-150">Sau</button>`;
}

/**
 * Thay đổi trang (trước/sau).
 * @param {number} direction -1 cho trước, 1 cho sau.
 */
function changePage(direction) {
    const totalPages = Math.ceil(mockBookData.length / BOOKS_PER_PAGE);
    const newPage = currentPage + direction;
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        renderBooks();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

/**
 * Chuyển đến trang cụ thể.
 * @param {number} page Số trang.
 */
function goToPage(page) {
    currentPage = page;
    renderBooks();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- Logic cho Modal Đa Dụng ---
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(event, modalId) {
    const modal = document.getElementById(modalId);
    if (!event || event.target.id === modalId) {
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = '';
        }
    }
}

// --- Khởi tạo trang ---
document.addEventListener('DOMContentLoaded', () => {
    populateCategories();
    renderBooks();
    updateCurrentYear();

    document.getElementById('mobile-menu-button').addEventListener('click', () => {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    });
});