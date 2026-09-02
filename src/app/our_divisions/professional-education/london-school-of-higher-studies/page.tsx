import type { Metadata } from "next";
import LSHSHero from "../components/LSHSHero";
import LSHSCourseList from "../components/LSHSCourseList";
import LSHSAccreditationProof from "../components/LSHSAccreditationProof";
import LSHSEnquiryForm from "../components/LSHSEnquiryForm";
import LSHSContactDetails from "../components/LSHSContactDetails";
import LSHSBrochureDownload from "../components/LSHSBrochureDownload";
import LSHSTestimonials from "../components/LSHSTestimonials";
import LSHSCampusGallery from "../components/LSHSCampusGallery";
import LSHSFeeStructure from "../components/LSHSFeeStructure";
import LSHSVideoTour from "../components/LSHSVideoTour";
import LSHSIntakeCountdown from "../components/LSHSIntakeCountdown";
import LSHSAlumniStats from "../components/LSHSAlumniStats";
import LSHSLiveChatWidget from "../components/LSHSLiveChatWidget";

export const metadata: Metadata = {
  title: "London School of Higher Studies (LSHS) | CIPS Qualifications & UK Diplomas",
  description:
    "London School of Higher Studies (LSHS) is a CIPS accredited study centre offering UK recognized Procurement & Supply Chain (Level 2 to Level 6 MCIPS) and Hospitality Management qualifications.",
};

export default function LondonSchoolOfHigherStudiesPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#183b2b]">
      {/* SECTION 1: Hero Header & Quick Stats */}
      <LSHSHero
        title="London School of Higher Studies (LSHS)"
        subtitle="CIPS Accredited UK Procurement & Supply Chain, Hospitality & Professional Qualifications"
        description="Providing internationally recognized qualifications from CIPS Level 2 Certificate to Level 6 Professional Diploma (MCIPS Chartered Status) and Hospitality Management diplomas."
      />

      {/* SECTION 2: Course List (CIPS Level 2 - 6 & Hospitality) */}
      <LSHSCourseList />

      {/* SECTION 3: UK-Accreditation & Affiliation Proof */}
      <LSHSAccreditationProof />

      {/* SECTION 4: Fee Structure & 25% Discount Form */}
      <LSHSFeeStructure />

      {/* SECTION 5: Upcoming Intake Countdown & Calendar */}
      <LSHSIntakeCountdown />

      {/* SECTION 6: Alumni Outcomes & Placement Stats */}
      <LSHSAlumniStats />

      {/* SECTION 7: Student Testimonials & Success Stories */}
      <LSHSTestimonials />

      {/* SECTION 8: Campus & Facility Photos */}
      <LSHSCampusGallery />

      {/* SECTION 9: Video Campus Tour */}
      <LSHSVideoTour />

      {/* SECTION 10: Course Brochure Downloads */}
      <LSHSBrochureDownload />

      {/* SECTION 11: Contact Details Specific to LSHS */}
      <LSHSContactDetails />

      {/* SECTION 12: Enquiry & Enrollment CTA Form */}
      <LSHSEnquiryForm />

      {/* SECTION 13: Live Chat Support Widget */}
      <LSHSLiveChatWidget />
    </main>
  );
}
