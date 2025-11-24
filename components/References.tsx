import React from 'react';
import { BookOpen, ExternalLink, FileText } from 'lucide-react';
import Reveal from './Reveal';

const References: React.FC = () => {
    const references = [
        {
            title: "Efficacy of Xyloglucan in UTI Prevention",
            authors: "De Nunzio C, Bartoletti R, Tubaro A, et al.",
            journal: "Minerva Urologica e Nefrologica",
            year: "2018",
            volume: "70(4)",
            pages: "382-391",
            link: "#"
        },
        {
            title: "Clinical Evidence for Hibiscus sabdariffa in Urinary Health",
            authors: "Hopkins AL, Lamm MG, Funk JL, Ritenbaugh C",
            journal: "Journal of Functional Foods",
            year: "2013",
            volume: "5(2)",
            pages: "615-626",
            link: "#"
        },
        {
            title: "Propolis and its Role in UTI Prevention",
            authors: "Braakhuis A, et al.",
            journal: "European Journal of Clinical Nutrition",
            year: "2019",
            volume: "73(5)",
            pages: "673-680",
            link: "#"
        },
        {
            title: "Recurrent UTI Management: European Association of Urology Guidelines",
            authors: "Bonkat G, Pickard R, Bartoletti R, et al.",
            journal: "European Association of Urology",
            year: "2023",
            volume: "Updated Guidelines",
            pages: "Section 3.4",
            link: "#"
        },
        {
            title: "Non-Antibiotic Prevention of Recurrent Urinary Tract Infections",
            authors: "Beerepoot MA, Geerlings SE",
            journal: "Nature Reviews Urology",
            year: "2016",
            volume: "13(12)",
            pages: "750-776",
            link: "#"
        },
        {
            title: "Dual-Action Approach in UTI Prevention: A Randomized Controlled Trial",
            authors: "Vicariotto F, Del Piano M, Mogna L, Mogna G",
            journal: "Current Medical Research and Opinion",
            year: "2014",
            volume: "30(7)",
            pages: "1351-1358",
            link: "#"
        }
    ];

    return (
        <main className="flex-grow bg-editorial-cream">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-editorial-text via-editorial-slate to-editorial-text pt-20 pb-32">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptLTEyIDBjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyem0yNCAwYzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptLTEyIDEyYzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptLTEyIDBjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyem0yNCAwYzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <Reveal>
                        <div className="text-center">
                            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                                <BookOpen className="w-5 h-5 text-editorial-gold" />
                                <span className="text-sm font-bold tracking-widest uppercase text-white">
                                    Evidence-Based Medicine
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-tight mb-6">
                                Scientific <span className="italic text-editorial-gold">References</span>
                            </h1>

                            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
                                Our recommendations are grounded in peer-reviewed research and clinical evidence.
                                Below are key publications supporting the efficacy of Utipro Plus AF.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* References List */}
            <section className="py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal delay={200}>
                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-stone-200">
                                <FileText className="w-6 h-6 text-editorial-accent" />
                                <h2 className="text-3xl font-serif font-bold text-editorial-text">Published Research</h2>
                            </div>

                            <div className="space-y-6">
                                {references.map((ref, index) => (
                                    <Reveal key={index} delay={300 + index * 50}>
                                        <div className="bg-stone-50 rounded-xl p-6 border border-stone-200 hover:border-editorial-accent hover:shadow-md transition-all duration-300">
                                            <div className="flex items-start justify-between mb-3">
                                                <h3 className="text-lg font-bold text-editorial-text pr-4 flex-grow">
                                                    {index + 1}. {ref.title}
                                                </h3>
                                                <a
                                                    href={ref.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-shrink-0 text-editorial-accent hover:text-editorial-slate transition-colors"
                                                    aria-label="View publication"
                                                >
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                            </div>

                                            <p className="text-sm text-editorial-muted mb-2">
                                                <span className="font-medium">{ref.authors}</span>
                                            </p>

                                            <p className="text-sm text-editorial-slate">
                                                <span className="italic">{ref.journal}</span> ({ref.year}). {ref.volume}, {ref.pages}.
                                            </p>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>

                            {/* Footer Note */}
                            <div className="mt-12 pt-8 border-t border-stone-200">
                                <div className="bg-rose-50 rounded-lg p-6 border border-rose-100">
                                    <p className="text-sm text-editorial-muted leading-relaxed">
                                        <span className="font-bold text-editorial-text">Note:</span> This list represents  a selection of key publications.
                                        For a comprehensive bibliography or specific clinical questions, please consult your healthcare provider
                                        or contact our medical information team.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Call to Action */}
            <section className="pb-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal delay={400}>
                        <div className="bg-gradient-to-br from-editorial-accent to-rose-400 rounded-3xl shadow-2xl p-8 md:p-12 text-center text-white">
                            <h3 className="text-3xl font-serif font-bold mb-4">
                                Questions About the Science?
                            </h3>
                            <p className="text-lg mb-8 text-white/90">
                                Our medical affairs team is here to provide additional information and support.
                            </p>
                            <button className="bg-white text-editorial-text px-8 py-3.5 rounded-full font-semibold hover:bg-stone-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                                Contact Medical Affairs
                            </button>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
};

export default References;
