"use client";

import { X } from "lucide-react";
import { useEffect, Fragment } from "react";

const priceData = [
  {
    category: "Couch and sofa",
    items: [
      { name: "2 seats", price: 89 },
      { name: "3 seats", price: 109 },
      { name: "4 seats", price: 119 },
      { name: "5 seats", price: 139 },
      { name: "6 seats", price: 149 },
      { name: "7 seats", price: 159 },
    ],
  },
  {
    category: "Mattress",
    items: [
      { name: "King", price: 99 },
      { name: "Queen", price: 89 },
      { name: "Full", price: 79 },
      { name: "Twin XL", price: 69 },
      { name: "Twin", price: 59 },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Loveseat", price: 89 },
      { name: "Armchair", price: 39 },
      { name: "Ottoman", price: 25 },
      { name: "Chairs / barstool", price: 19, unit: "each" },
    ],
  },
];

export default function ModalWindow({ isOpen, onClose }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
      role="presentation"
    >
      {/* Modal Container */}
      <div
        className="bg-white rounded-lg shadow-xl max-h-[90vh] overflow-y-auto w-full max-w-2xl transform transition-transform duration-300 scale-100 animate-scale-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 id="modal-title" className="text-2xl font-bold text-gray-800">
            Price List
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-8">
          {/* Desktop Version */}
          <div className="hidden md:block">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-amber-600">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Product
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">
                    Price
                  </th>
                </tr>
              </thead>

              {priceData.map((section, sectionIdx) => (
                <tbody key={`section-${sectionIdx}`}>
                  {/* Section Header */}
                  <tr className="bg-gray-50">
                    <td
                      colSpan="2"
                      className="py-4 px-4 font-bold text-lg text-amber-600 uppercase tracking-wide"
                    >
                      {section.category}
                    </td>
                  </tr>
                  {/* Section Items */}
                  {section.items.map((item, itemIdx) => (
                    <tr
                      key={`item-${sectionIdx}-${itemIdx}`}
                      className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-3 px-4 text-gray-700">
                        {item.name}
                        {item.unit && (
                          <span className="text-sm text-gray-500">
                            {" "}
                            ({item.unit})
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-right font-semibold text-gray-800">
                        ${item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>

          {/* Mobile Version */}
          <div className="md:hidden space-y-6">
            {priceData.map((section, sectionIdx) => (
              <div key={`mobile-section-${sectionIdx}`}>
                <h3 className="text-lg font-bold text-amber-600 uppercase tracking-wide mb-3">
                  {section.category}
                </h3>
                <div className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <div
                      key={`mobile-item-${sectionIdx}-${itemIdx}`}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-gray-700">
                        {item.name}
                        {item.unit && (
                          <span className="text-sm text-gray-500">
                            {" "}
                            ({item.unit})
                          </span>
                        )}
                      </span>
                      <span className="font-semibold text-gray-800">
                        ${item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
