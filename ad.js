// Danh sách các link affiliate (có thể thay bằng link thật)
const affiliateLinks = [
    "#",
    "#",
    "#",
    "#",
    "#"
];

/**
 * Trả về một link affiliate ngẫu nhiên từ danh sách
 * @returns {string} Link affiliate
 */
function getRandomAffiliateLink() {
    const randomIndex = Math.floor(Math.random() * affiliateLinks.length);
    return affiliateLinks[randomIndex];
}