import React from 'react';

const Rationale: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Document Header */}
        <div className="border-b-2 border-editorial-text pb-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-editorial-text mb-4">
            Digital Marketing Campaign Rationale: <br />
            <span className="text-editorial-accent italic">Utipro Plus AF – The Power to Prevent</span>
          </h1>
          <p className="text-editorial-muted font-sans text-sm uppercase tracking-widest">
            Academic Assessment Project • 2025
          </p>
        </div>

        {/* Content Body */}
        <article className="prose prose-stone prose-lg max-w-none font-sans text-editorial-slate">
          
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-editorial-text mb-4">1.0 Introduction and Campaign Focus</h2>
            <p>
              This document presents the strategic rationale for the digital marketing campaign developed for Utipro
              Plus AF, a non-prescription medical device for the control and prevention of urinary tract infections
              (UTIs). The campaign, titled <strong>"The Power to Prevent,"</strong> is designed to address the unique challenges
              associated with marketing a sensitive health product while expanding brand reach, boosting social
              engagement, and strengthening customer loyalty (Project Brief, 2025). The strategy is anchored in a
              comprehensive understanding of the regulatory landscape and guided by the theoretical concepts of digital
              marketing strategy, particularly those outlined by Dahl (2021). The campaign aims to reposition Utipro
              Plus AF as the <strong>trusted, evidence-based, non-antibiotic solution</strong> that restores control to those affected by
              UTIs.
            </p>
            <p>
              The central challenge is overcoming the stigma often associated with UTIs while remaining compliant
              with stringent advertising standards for medical devices (HPRA, 2024). Consequently, the campaign’s
              core messaging strategy is built on the pillars of <strong>Empathy, Empowerment, and Normalisation</strong>. This
              rationale will justify the strategic decisions relating to competitor positioning, platform selection, content
              integration, and the explicit application of relevant marketing theory (Dahl, 2021).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-editorial-text mb-4">2.0 Product, Regulatory Compliance, and Messaging Strategy</h2>
            
            <h3 className="text-xl font-bold text-editorial-text mt-6 mb-3">2.1 The Utipro Plus AF Product and Unique Selling Proposition (USP)</h3>
            <p>
              Utipro Plus AF is marketed as a medical device intended for the control and prevention of recurring UTIs.
              Its differentiating factor is its <strong>dual mode of action</strong>, achieved through its primary components:
              Xyloglucan, which creates a protective film in the intestine to prevent bacterial proliferation (the source
              of 90% of uncomplicated UTIs), and Propolis/Hibiscus, which acidify the urine to alleviate acute
              symptoms (Utipro.ie). This mechanism grants Utipro a significant competitive advantage over simple
              food supplements.
            </p>

            <h3 className="text-xl font-bold text-editorial-text mt-6 mb-3">2.2 Mandatory Regulatory Compliance</h3>
            <p>
              For a sensitive product like Utipro, compliance is the non-negotiable foundation of the campaign. As a
              medical device in the EU, its promotion is governed by the Medical Device Regulation (MDR) and
              monitored by the Health Products Regulatory Authority (HPRA) in Ireland (HPRA, 2024). The campaign
              must adhere strictly to two critical rules:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Non-Misleading Claims:</strong> All claims regarding symptom improvement or recurrence reduction
                must be directly verifiable and consistent with clinical data. Exaggerated or unsubstantiated
                claims are prohibited (ASAI, 2024).
              </li>
              <li>
                <strong>Evidence-Based Justification:</strong> Unlike food supplements, Utipro has clinical trials. The campaign
                must leverage this advantage, ensuring that claims are <strong>referenced for substantiation</strong>.
              </li>
            </ol>
            <p className="mt-4">
              This regulatory necessity directly shapes the content strategy, necessitating an emphasis on factual,
              educational material (like the Infographic) over purely emotional advertising. Trust, therefore, becomes
              the key currency of this campaign.
            </p>

            <h3 className="text-xl font-bold text-editorial-text mt-6 mb-3">2.3 Messaging Strategy: Empathy, Empowerment, Normalisation</h3>
            <p>The campaign’s tone directly mirrors the suggestions for sensitive product communication (Project Brief, 2025):</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Empathy and Normalisation:</strong> Content will use "ordinary" Direct-to-Consumer (DTC) language,
                avoiding excessive medical jargon to reduce intimidation. It will normalise the condition by
                explaining common causes (e.g., women’s anatomy) in a matter-of-fact, supportive way,
                removing the perceived shame associated with UTIs.
              </li>
              <li>
                <strong>Empowerment:</strong> The core message is shifting from treating a problem to <strong>controlling and
                preventing</strong> it. The tagline, "The Power to Prevent," directly speaks to the user’s ability to take
                proactive control over their health, leading to a better quality of life. This narrative positions
                Utipro Plus AF as the tool for self-efficacy.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-editorial-text mb-4">3.0 Competitive Landscape and Positioning</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm border-collapse my-6">
                <thead>
                  <tr className="bg-stone-100 border-b border-stone-300">
                    <th className="p-4 font-bold">Competitor Type</th>
                    <th className="p-4 font-bold">Examples & Positioning</th>
                    <th className="p-4 font-bold">Strategic Implication for Utipro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr>
                    <td className="p-4 font-semibold">Antibiotics</td>
                    <td className="p-4">Prescription-only, fast-acting treatment for acute infection.</td>
                    <td className="p-4">Indirect competitor; positioned as the crisis solution. Utipro is positioned as the <strong>proactive, antibiotic-sparing solution</strong>.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">D-Mannose Brands</td>
                    <td className="p-4">OTC supplement; focuses on preventing bacterial adhesion in the bladder.</td>
                    <td className="p-4">Direct competitor. Utipro has the <strong>dual-action advantage (intestine + bladder)</strong>, scientifically superior for recurrent UTIs.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Cranberry Supplements</td>
                    <td className="p-4">Traditional, low-cost. Claims often lack robust clinical evidence.</td>
                    <td className="p-4">Alternative. Utipro is a <strong>clinically-proven Medical Device</strong>, contrasting with unregulated supplements.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-bold text-editorial-text mt-6 mb-3">3.2 Utipro’s Differentiated Positioning</h3>
            <p>
              Utipro Plus AF occupies a valuable niche: <strong>The Clinically Proven, Non-Antibiotic Preventative Medical Device.</strong>
              The campaign will highlight three key differentiators: Dual-Action Superiority, Antibiotic-Sparing nature, and Regulatory Trust (EAU recognition).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-editorial-text mb-4">4.0 Target Audience Segmentation and Platform Strategy</h2>
            <p>The campaign targets two distinct groups, requiring a channel strategy that reflects their digital behaviours (Dahl, 2021).</p>
            
            <h3 className="text-xl font-bold text-editorial-text mt-6 mb-3">4.1 Audience Profiles</h3>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Females Aged 25-40:</strong> Motivated by prevention and quality of life. Requires substantiated evidence. Platforms: Facebook, YouTube, Google Search.</li>
                <li><strong>Males/Females Aged 18-24 (Students):</strong> Motivated by acute relief and normalisation. Requires DTC tone and speed. Platforms: TikTok, Instagram.</li>
            </ul>

            <h3 className="text-xl font-bold text-editorial-text mt-6 mb-3">4.2 Platform Selection and Dahl’s Framework</h3>
            <p>
                <strong>TikTok/Reels (18-24):</strong> Critical for Reach and Awareness. Focus on normalisation. <br/>
                <strong>Facebook (25-40):</strong> Leveraged for Engagement and Loyalty via community building. <br/>
                <strong>Project Website (All):</strong> The central hub for Persuasion and Conversion.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-editorial-text mb-4">5.0 Theoretical Application (Dahl, 2021)</h2>
            <h3 className="text-xl font-bold text-editorial-text mt-6 mb-3">5.1 Integrated Customer Communications (ICC)</h3>
            <p>
                We ensure brand consistency across all touchpoints. The core theme "The Power to Prevent" remains constant, whether in a 30-second TikTok or this 2,000-word rationale. Content funneling drives traffic from social to the website for conversion.
            </p>
            <h3 className="text-xl font-bold text-editorial-text mt-6 mb-3">5.2 Social Commerce</h3>
            <p>
                Shoppable posts reduce friction. Predictive targeting ensures compliant messages reach the right audience segments.
            </p>
             <h3 className="text-xl font-bold text-editorial-text mt-6 mb-3">5.3 Google as an Answer Machine</h3>
            <p>
                The Infographic acts as the authoritative answer for "Why do I get recurrent UTIs?", capturing high-intent traffic.
            </p>
          </section>

           <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-editorial-text mb-4">7.0 Conclusion</h2>
            <p>
                The "Power to Prevent" campaign provides a theoretically grounded and creatively compelling digital marketing strategy. By applying Dahl’s (2021) principles and adhering to MDR compliance, we effectively reposition Utipro Plus AF from a symptom treatment to an empowering, trusted preventative health solution.
            </p>
          </section>

        </article>
      </div>
    </div>
  );
};

export default Rationale;