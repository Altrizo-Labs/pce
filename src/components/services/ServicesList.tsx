import React from 'react';
import { CheckCircle2 } from 'lucide-react'; // Import a checkmark icon

const ServicesList: React.FC = () => {
  const preContractServices = [
    'Design',
    'Cost Plan/Cost Estimate throughout design stages',
    'Tender Documents (Bills of Quantities & Prime Document)',
    'Tender Packaging Strategy',
    'Design Queries, Addendums, Post-Tender Clarifications',
    'Tender Evaluations and Report',
    'Contract Documentation',
    'Value Engineering',
    'Risk Management',
  ];

  const postContractServices = [
    'Supervision',
    'Managing Variations/Change Order',
    'Cost Control and Monitoring',
    'Prepare Engineer Instruction',
    'Variation Order',
    'Maintain Variation Log',
    'Risk Registry',
    'Payment Certificate',
    'Monthly Financial Statement',
    'Final Account',
    'As-Built drawings',
  ];

  const ServiceItem: React.FC<{ service: string }> = ({ service }) => (
    <li className="flex items-start space-x-3 py-2">
      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
      <span className="text-gray-700 font-ibm-plex-sans text-base">
        {service}
      </span>
    </li>
  );

  return (
    <section className="py-8 lg:py-12"> {/* Adjusted padding as the main title is removed */}
      <div className="container mx-auto px-4">
        {/* The main title "Our Comprehensive Services" is removed from here */}
        {/* It's now handled in the parent ServicesPage.tsx */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          <div className="bg-slate-50 p-6 md:p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-lato font-bold text-[#181D27] mb-6 text-center md:text-left">
              Pre-Contract Services
            </h3>
            <ul className="space-y-3">
              {preContractServices.map((service, index) => (
                <ServiceItem key={index} service={service} />
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-lato font-bold text-[#181D27] mb-6 text-center md:text-left">
              Post-Contract Services
            </h3>
            <ul className="space-y-3">
              {postContractServices.map((service, index) => (
                <ServiceItem key={index} service={service} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
