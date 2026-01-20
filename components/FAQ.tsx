import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: "How is the collection curated?",
    answer: "Our curation process is rigorous and personal. We look for brands that balance avant-garde aesthetics with traditional craftsmanship. We prioritize narratives that challenge the status quo of fast fashion, focusing instead on timeless silhouettes and structural integrity."
  },
  {
    question: "What defines 'modern luxury' in your catalog?",
    answer: "We believe luxury is no longer defined by logos or heritage houses, but by transparency, material quality, and ethical labor. Modern luxury is the peace of mind knowing your garment was created with respect for both the artisan and the environment."
  },
  {
    question: "Do you prioritize sustainable materials?",
    answer: "Sustainability is a core pillar of ATELIER. Over 80% of our featured brands utilize deadstock fabrics, organic natural fibers, or innovative recycled textiles. We believe that responsible design is the only way forward for the industry."
  },
  {
    question: "How can I feature my brand?",
    answer: "We are always seeking new perspectives in design. If your atelier aligns with our values of craftsmanship and minimal waste, please direct your lookbook and manifesto to our curation team. We review submissions on a quarterly basis."
  },
  {
    question: "Are these pieces gender-specific?",
    answer: "Many of our designers operate under a 'post-gender' philosophy. We encourage you to explore the catalog based on silhouette and measurements rather than traditional gender categories. Fit is personal; labels are secondary."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 md:px-12 max-w-[1600px] mx-auto py-32 border-t border-black/10">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
        {/* Left Column: Header */}
        <div className="lg:w-1/3">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Common<br />Inquiries
          </h2>
          <p className="text-lg text-studio-gray leading-relaxed max-w-sm">
            Understanding our philosophy, our process, and the future of fashion we envision.
          </p>
        </div>

        {/* Right Column: Accordion */}
        <div className="lg:w-2/3">
          <div className="flex flex-col">
            {FAQ_ITEMS.map((item, index) => (
              <div 
                key={index} 
                className="border-b border-black/10 last:border-b-0"
              >
                <button 
                  onClick={() => toggleIndex(index)}
                  className="w-full py-8 flex items-start justify-between text-left group hover:opacity-70 transition-opacity"
                >
                  <span className="text-xl md:text-2xl font-medium tracking-tight pr-8">
                    {item.question}
                  </span>
                  <div className="mt-1 flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-studio-black" />
                    ) : (
                      <Plus className="w-5 h-5 text-studio-black" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    openIndex === index ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-lg text-studio-black/70 leading-relaxed max-w-2xl">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;