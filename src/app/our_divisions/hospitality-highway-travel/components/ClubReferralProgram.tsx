"use client";

import { useState } from "react";

export default function ClubReferralProgram() {
  const [referralCount, setReferralCount] = useState(2);
  const rewardPerReferral = 25000; // BDT credit per successful referral
  const totalRewardBDT = referralCount * rewardPerReferral;

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-200">
            Member Referral Rewards
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#071d13]">
            SAGCL Member Referral Program
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Invite fellow business leaders and family friends to join SAGCL. Earn dining credits, complimentary villa nights, and annual dues waivers.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#071d13] to-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-emerald-700/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Calculator */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl font-bold font-serif text-amber-400">
                Interactive Referral Reward Calculator
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                For every successful member referral, receive <strong className="text-white">25,000 BDT</strong> in resort dining, spa, and villa credits.
              </p>

              <div>
                <label className="block text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2">
                  Select Expected Referrals per Year:
                </label>
                <div className="flex items-center gap-3">
                  {[1, 2, 3, 5, 10].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setReferralCount(num)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                        referralCount === num
                          ? "bg-amber-400 text-emerald-950 border-amber-300 shadow-md"
                          : "bg-emerald-900/50 text-white border-emerald-700 hover:bg-emerald-800"
                      }`}
                    >
                      {num} {num === 1 ? "Referral" : "Referrals"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-800/40 text-xs space-y-2 text-emerald-200">
                <div>✓ Credits applicable towards annual membership renewal dues</div>
                <div>✓ Complimentary VVIP Villa weekend stay for 3+ referrals</div>
                <div>✓ VIP Recognition plaque at annual Member Gala</div>
              </div>
            </div>

            {/* Right Display */}
            <div className="lg:col-span-5 bg-emerald-900/40 border border-emerald-700/40 rounded-2xl p-6 text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Estimated Annual Reward Credit
              </span>
              <div className="text-4xl sm:text-5xl font-bold font-serif text-amber-400">
                {totalRewardBDT.toLocaleString()} BDT
              </div>
              <p className="text-xs text-emerald-100/70">
                Earned with {referralCount} successful member onboarding(s).
              </p>
              <a
                href="#club-signup"
                className="block w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
              >
                Submit Member Referral
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
