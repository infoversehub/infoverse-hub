/* scripts.js */
document.addEventListener('alpine:init', () => {
    Alpine.data('infoVerse', () => ({
        lang: localStorage.getItem('lang') || 'ar',
        view: 'home',
        searchTerm: '',
        activeCategory: null,
        
        // Categories Configuration
        categories: [
            { id: 'ai', ar: 'الذكاء الاصطناعي', en: 'AI', icon: '🤖' },
            { id: 'tech', ar: 'التقنية', en: 'Technology', icon: '💻' },
            { id: 'finance', ar: 'المال والاستثمار', en: 'Finance', icon: '💰' },
            { id: 'cars', ar: 'السيارات', en: 'Cars', icon: '🚗' },
            { id: 'edu', ar: 'التعليم', en: 'Education', icon: '🎓' },
            { id: 'travel', ar: 'السفر', en: 'Travel', icon: '✈️' },
            { id: 'gaming', ar: 'الألعاب', en: 'Gaming', icon: '🎮' }
        ],

        // Articles Array (Initially Empty for Production)
        articles: [],

        init() {
            this.updateDirection();
            // Check for category in URL if needed
            const params = new URLSearchParams(window.location.search);
            if (params.has('cat')) {
                this.activeCategory = this.categories.find(c => c.id === params.get('cat'));
            }
        },

        toggleLang() {
            this.lang = this.lang === 'ar' ? 'en' : 'ar';
            localStorage.setItem('lang', this.lang);
            this.updateDirection();
        },

        updateDirection() {
            document.documentElement.lang = this.lang;
            document.documentElement.dir = this.lang === 'ar' ? 'rtl' : 'ltr';
        },

        t(key) {
            const dictionary = {
                ar: {
                    brand: 'إنفوفيرس هَب',
                    heroTitle: 'استكشف عالم المعرفة والتقنية',
                    searchPlaceholder: 'ابحث عن المقالات والمعلومات...',
                    categoriesTitle: 'تصفح حسب القسم',
                    latest: 'أحدث المقالات',
                    noArticles: 'سيتم نشر المقالات قريباً في هذا القسم.',
                    noLatest: 'لا توجد مقالات منشورة حالياً.',
                    home: 'الرئيسية',
                    about: 'من نحن',
                    contact: 'اتصل بنا',
                    privacy: 'سياسة الخصوصية',
                    terms: 'شروط الاستخدام',
                    published: 'نشر في',
                    updated: 'تحديث',
                    toc: 'محتويات المقال',
                    faq: 'الأسئلة الشائعة',
                    related: 'مقالات ذات صلة',
                    footerDesc: 'المنصة المعرفية الرائدة لتقديم محتوى عالي الجودة باللغتين العربية والإنجليزية.',
                    contactDesc: 'نحن هنا للإجابة على استفساراتكم. تواصلوا معنا مباشرة عبر البريد الإلكتروني.',
                    officialEmail: 'البريد الإلكتروني الرسمي:',
                    rights: 'جميع الحقوق محفوظة.'
                },
                en: {
                    brand: 'InfoVerse Hub',
                    heroTitle: 'Explore the World of Knowledge',
                    searchPlaceholder: 'Search articles and information...',
                    categoriesTitle: 'Browse by Category',
                    latest: 'Latest Articles',
                    noArticles: 'Articles will be published soon in this category.',
                    noLatest: 'No articles currently published.',
                    home: 'Home',
                    about: 'About Us',
                    contact: 'Contact Us',
                    privacy: 'Privacy Policy',
                    terms: 'Terms of Use',
                    published: 'Published on',
                    updated: 'Updated',
                    toc: 'Table of Contents',
                    faq: 'FAQ',
                    related: 'Related Articles',
                    footerDesc: 'The leading knowledge platform providing high-quality content in Arabic and English.',
                    contactDesc: 'We are here to help. Reach out to us directly via email.',
                    officialEmail: 'Official Email:',
                    rights: 'All rights reserved.'
                }
            };
            return dictionary[this.lang][key] || key;
        }
    }));
});
