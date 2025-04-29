import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="bg-white text-black py-20 px-4 sm:px-6 lg:px-8"> {/* Increased py, changed bg to white, text to black */}
      <div className="max-w-6xl mx-auto">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-10 space-x-4">
          <button className="bg-[#1E3A8A] text-white px-6 py-2 rounded-full font-semibold"> {/* Keep blue for active */}
            Monthly
          </button>
          <button className="border border-gray-300 text-gray-500 px-6 py-2 rounded-full font-semibold hover:border-gray-500 hover:text-black transition"> {/* Adjusted for white bg */}
            Annually
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Free Card */}
          <div className="bg-white text-black rounded-xl p-6 flex flex-col justify-between border border-gray-200 shadow-lg min-h-[560px]"> {/* Added min-height */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Free</h3>
              <p className="text-4xl font-bold mb-1">$0</p>
              <p className="text-sm text-gray-500 mb-4">Per user/month, billed annually</p>
              <p className="font-semibold mb-4">For your hobby projects</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-center"><span className="bg-gray-100 p-1 rounded-md mr-2 inline-flex items-center justify-center"><Check className="h-3 w-3 text-gray-600" /></span> Free e-mail alerts</li>
                <li className="flex items-center"><span className="bg-gray-100 p-1 rounded-md mr-2 inline-flex items-center justify-center"><Check className="h-3 w-3 text-gray-600" /></span> 3-minute checks</li>
                <li className="flex items-center"><span className="bg-gray-100 p-1 rounded-md mr-2 inline-flex items-center justify-center"><Check className="h-3 w-3 text-gray-600" /></span> Automatic data enrichment</li>
                <li className="flex items-center"><span className="bg-gray-100 p-1 rounded-md mr-2 inline-flex items-center justify-center"><Check className="h-3 w-3 text-gray-600" /></span> 10 monitors</li>
                <li className="flex items-center"><span className="bg-gray-100 p-1 rounded-md mr-2 inline-flex items-center justify-center"><Check className="h-3 w-3 text-gray-600" /></span> Up to 3 seats</li>
              </ul>
            </div>
            <button className="bg-gray-100 text-black py-2 px-4 rounded-full font-semibold hover:bg-gray-200 transition w-full">
              Get started for free
            </button>
          </div>

          {/* Pro Card (Popular) */}
          <div className="bg-[#1E3A8A] text-white rounded-xl p-6 flex flex-col justify-between border border-blue-800 shadow-lg relative min-h-[560px]"> {/* Changed bg to #1E3A8A, added min-height */}
            {/* Removed absolute positioning span from here */}
            <div>
              <div className="flex items-center gap-2 mb-2"> {/* Added flex container for title and badge */} 
                <h3 className="text-xl font-semibold">Pro</h3>
                <span className="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1"> {/* Adjusted background opacity, ensured text is opaque */} 
                  🔥 
                  Popular
                </span>
              </div>
              <p className="text-4xl font-bold mb-1">$45</p>
              <p className="text-sm text-blue-200 mb-4">Per user/month, billed annually</p>
              <p className="font-semibold mb-4">For multiple teams</p>
              <ul className="space-y-2 text-sm text-blue-100 mb-6">
                <li className="flex items-center"><span className="bg-white/20 p-1 rounded-md mr-2 inline-flex items-center justify-center"><Check className="h-3 w-3 text-white" /></span> Everything in <span className="font-bold ml-1">Free</span></li> {/* Corrected feature reference */}
                <li className="flex items-center"><span className="bg-white/20 p-1 rounded-md mr-2 inline-flex items-center justify-center"><Check className="h-3 w-3 text-white" /></span> Up to 5 team members</li>
                <li className="flex items-center"><span className="bg-white/20 p-1 rounded-md mr-2 inline-flex items-center justify-center"><Check className="h-3 w-3 text-white" /></span> 100 monitors</li>
                <li className="flex items-center"><span className="bg-white/20 p-1 rounded-md mr-2 inline-flex items-center justify-center"><Check className="h-3 w-3 text-white" /></span> 15 status pages</li>
                <li className="flex items-center"><span className="bg-white/20 p-1 rounded-md mr-2 inline-flex items-center justify-center"><Check className="h-3 w-3 text-white" /></span> 200+ integrations</li>
              </ul>
            </div>
            <button className="bg-white text-[#1E3A8A] py-2 px-4 rounded-full font-semibold hover:bg-gray-100 transition w-full"> {/* Changed text color */}
              Get started with Pro
            </button>
          </div>

          {/* Pro 02 Card */}
          <div className="bg-white text-black rounded-xl p-6 flex flex-col justify-between border border-gray-200 shadow-lg min-h-[560px]"> {/* Added min-height */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Pro 02</h3>
              <p className="text-4xl font-bold mb-1">$85</p>
              <p className="text-sm text-gray-500 mb-4">Per user/month, billed annually</p>
              <p className="font-semibold mb-4">Great for small businesses</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-center"><span className="bg-gray-100 p-1 rounded-md mr-2 inline-flex items-center justify-center"><Check className="h-3 w-3 text-gray-600" /></span> Unlimited phone calls</li>
                <li className="flex items-center"><span className="bg-gray-100 p-1 rounded-md mr-2 inline-flex items-center justify-center"><Check className="h-3 w-3 text-gray-600" /></span> 30 second checks</li>
                <li className="flex items-center"><span className="bg-gray-100 p-1 rounded-md mr-2 inline-flex items-center justify-center"><Check className="h-3 w-3 text-gray-600" /></span> Single-user account</li>
                <li className="flex items-center"><span className="bg-gray-100 p-1 rounded-md mr-2 inline-flex items-center justify-center"><Check className="h-3 w-3 text-gray-600" /></span> 20 monitors</li>
                <li className="flex items-center"><span className="bg-gray-100 p-1 rounded-md mr-2 inline-flex items-center justify-center"><Check className="h-3 w-3 text-gray-600" /></span> Up to 6 seats</li>
              </ul>
            </div>
            <button className="bg-gray-100 text-black py-2 px-4 rounded-full font-semibold hover:bg-gray-200 transition w-full">
              Get started with Pro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;