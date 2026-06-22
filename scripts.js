document.addEventListener('alpine:init', () => {
    Alpine.data('infoVerse', () => ({
        lang: localStorage.getItem('lang') || 'ar',
        searchTerm: '',
        showSuggestions: false,
        
        init() {
            document.documentElement.lang = this.lang;
            document.documentElement.dir = this.lang === 'ar' ? 'rtl' : 'ltr';
            if (this.isArticlePage()) {
                window.addEventListener('scroll', this.updateProgressBar);
            }
        },

        toggleLang() {
            this.lang = this.lang === 'ar' ? 'en' : 'ar';
            localStorage.setItem('lang', this.lang);
            location.reload();
        },

        t(key) {
            return this.dictionary[this.lang][key] || key;
        },

        get filteredSuggestions() {
            if (this.searchTerm.length < 2) return [];
            const list = this.lang === 'ar' ? this.data.suggestionsAr : this.data.suggestionsEn;
            return list.filter(item => item.toLowerCase().includes(this.searchTerm.toLowerCase()));
        },

        updateProgressBar() {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            const bar = document.getElementById("reading-progress");
            if (bar) bar.style.width = scrolled + "%";
        },

        isArticlePage() {
            return window.location.pathname.includes('article.html');
        },

        data: {
            suggestionsAr: ['الذكاء الاصطناعي', 'ChatGPT', 'الاستثمار', 'تسلا', 'اليابان', 'الألعاب', 'التقنية'],
            suggestionsEn: ['Artificial Intelligence', 'ChatGPT', 'Investment', 'Tesla', 'Japan', 'Gaming', 'Technology']
        },

        dictionary: {
            ar: {
                brand: 'إنفو فيرس هب',
                heroTitle: 'استكشف عالم المعرفة والتقنية',
                searchPlaceholder: 'ابحث عن المقالات أو التصنيفات...',
                categoriesTitle: 'استكشف حسب القسم',
                latest: 'أحدث المقالات',
                trending: 'رائج الآن',
                home: 'الرئيسية',
                aboutTitle: 'من نحن',
                contactTitle: 'اتصل بنا',
                privacyTitle: 'سياسة الخصوصية',
                termsTitle: 'شروط الاستخدام',
                footerDesc: 'منصة معرفية رائدة لتقديم محتوى عالي الجودة باللغتين العربية والإنجليزية.',
                published: 'نشر في',
                updated: 'آخر تحديث',
                toc: 'محتويات المقال',
                faq: 'الأسئلة الشائعة',
                related: 'مقالات ذات صلة',
                emailLabel: 'راسلنا مباشرة',
                back: 'العودة',
                links: 'روابط سريعة',
                legal: 'قانوني',
                aboutBody: 'إنفو فيرس هب هي منصة معرفية رائدة ثنائية اللغة، تسعى لتقديم محتوى نوعي يجمع بين الدقة والتحليل المعمق في مجالات الذكاء الاصطناعي، التقنية، والعلوم.',
                contactDesc: 'نحن هنا للإجابة على استفساراتكم. تواصلوا معنا مباشرة عبر البريد الإلكتروني.',
                legalIntro: 'نحن نلتزم بأعلى معايير الخصوصية وحماية بيانات مستخدمينا وفق القوانين الدولية.',
                legalP1: 'جميع المواد المنشورة محمية بحقوق الملكية الخاصة بإنفو فيرس هب.'
            },
            en: {
                brand: 'InfoVerse Hub',
                heroTitle: 'Explore the World of Knowledge',
                searchPlaceholder: 'Search articles or categories...',
                categoriesTitle: 'Explore by Category',
                latest: 'Latest Articles',
                trending: 'Trending Now',
                home: 'Home',
                aboutTitle: 'About Us',
                contactTitle: 'Contact Us',
                privacyTitle: 'Privacy Policy',
                termsTitle: 'Terms of Use',
                footerDesc: 'A leading knowledge platform delivering high-quality content in both Arabic and English.',
                published: 'Published',
                updated: 'Updated',
                toc: 'Table of Contents',
                faq: 'FAQ',
                related: 'Related Articles',
                emailLabel: 'Email Us Directly',
                back: 'Back',
                links: 'Quick Links',
                legal: 'Legal',
                aboutBody: 'InfoVerse Hub is a premier bilingual knowledge platform providing high-quality content across AI, technology, and science.',
                contactDesc: 'We are here to answer your questions. Contact us directly via email.',
                legalIntro: 'We commit to the highest standards of privacy and data protection according to international laws.',
                legalP1: 'All published materials are protected by InfoVerse Hub intellectual property rights.'
            }
        }
    }));
});
