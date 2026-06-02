import { Service } from "../modules/Service/service.model";
import { Destination } from "../modules/Destination/destination.model";
import { Country } from "../modules/Country/country.model";
import { Faq } from "../modules/Faq/faq.model";
import { Testimonial } from "../modules/Testimonial/testimonial.model";
import { Booking } from "../modules/Booking/booking.model";

export const seedDemoData = async () => {
  try {

    const serviceCount = await Service.countDocuments();
    if (serviceCount === 0) {
      await Service.create([
        {
          title: "Student Visa Consultancy",
          category: "Visa Support",
          description: "End-to-end guidance for foreign education visas, including document assembly, interview preparation, and financial profiling.",
          icon: "https://res.cloudinary.com/djt6bowuz/image/upload/v1717000001/student-visa.png",
          isDeleted: false,
        },
        {
          title: "IELTS Preparation Course",
          category: "Language Training",
          description: "Interactive lessons covering Speaking, Listening, Writing, and Reading tasks with mock testing and review sessions.",
          icon: "https://res.cloudinary.com/djt6bowuz/image/upload/v1717000002/ielts.png",
          isDeleted: false,
        },
        {
          title: "Work Permit & Skilled Migration",
          category: "Immigration",
          description: "Expert consultancy for skilled migration permits, permanent residency options, and employment sponsor profiles.",
          icon: "https://res.cloudinary.com/djt6bowuz/image/upload/v1717000003/work-permit.png",
          isDeleted: false,
        },
      ]);
      console.log("✅ Demo Services seeded successfully!");
    }


    const destCount = await Destination.countDocuments();
    if (destCount === 0) {
      await Destination.create([
        {
          country: "United Kingdom",
          description: "Known for world-class universities and rich history. Offers post-study work visa opportunities (Graduate Route) for international students.",
          processingTime: "3-4 Weeks",
          livingCost: "£10,000 - £12,000 / Year",
          imageUrl: "https://res.cloudinary.com/djt6bowuz/image/upload/v1717000004/uk.jpg",
          topInstitutes: [
            { name: "University of Oxford", estimatedFees: "£24,000/Yr" },
            { name: "Imperial College London", estimatedFees: "£22,000/Yr" },
            { name: "University of Manchester", estimatedFees: "£18,000/Yr" }
          ],
        },
        {
          country: "Canada",
          description: "One of the most welcoming nations for international students. Offers streamlined pathways to permanent residency via post-graduation work permits.",
          processingTime: "6-8 Weeks",
          livingCost: "$12,000 - $15,000 CAD / Year",
          imageUrl: "https://res.cloudinary.com/djt6bowuz/image/upload/v1717000005/canada.jpg",
          topInstitutes: [
            { name: "University of Toronto", estimatedFees: "$32,000/Yr" },
            { name: "University of British Columbia", estimatedFees: "$30,000/Yr" },
            { name: "McGill University", estimatedFees: "$28,000/Yr" }
          ],
        },
      ]);
      console.log("✅ Demo Destinations seeded successfully!");
    }


    const countryCount = await Country.countDocuments();
    if (countryCount === 0) {
      await Country.create([
        {
          name: "United Kingdom",
          image: "https://res.cloudinary.com/djt6bowuz/image/upload/v1717000006/uk-flag.png",
          fees: "£12,000 - £25,000 / Year",
          deadline: "Sept 30 for Winter Intake",
          institutes: ["University of Oxford", "Imperial College London", "University of Manchester"],
        },
        {
          name: "Canada",
          image: "https://res.cloudinary.com/djt6bowuz/image/upload/v1717000007/canada-flag.png",
          fees: "$15,000 - $30,000 CAD / Year",
          deadline: "Jan 15 for Fall Intake",
          institutes: ["University of Toronto", "University of British Columbia", "McGill University"],
        },
      ]);
      console.log("✅ Demo Countries seeded successfully!");
    }


    const faqCount = await Faq.countDocuments();
    if (faqCount === 0) {
      await Faq.create([
        {
          question: "What documents are required for a student visa?",
          answer: "Generally, you need an admission offer letter (CAS/COE), valid passport, academic transcripts, language test scores (IELTS/TOEFL), and proof of sufficient funds to cover tuition and living expenses.",
          order: 1,
        },
        {
          question: "How long does the student visa processing take?",
          answer: "Processing times vary by destination. For the UK, it takes 3-4 weeks. For Canada, it can range between 6 to 12 weeks depending on the application volume.",
          order: 2,
        },
      ]);
      console.log("✅ Demo FAQs seeded successfully!");
    }


    const testCount = await Testimonial.countDocuments();
    if (testCount === 0) {
      await Testimonial.create([
        {
          name: "Tariqul Islam",
          role: "Software Engineer, Skilled Migration",
          text: "Outstanding consultancy services for permanent residency guidance. Extremely professional, highly transparent, and prompt with communications.",
          rating: 5,
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          status: "approved",
        },
        {
          name: "Aasifur Rahman",
          role: "Student, MSc Computer Science",
          text: "Skill Labs made my UK student visa application completely painless! The team analyzed my financial documents and helped me prepare for the embassy interview successfully.",
          rating: 5,
          image: "https://randomuser.me/api/portraits/men/44.jpg",
          status: "approved",
        },
      ]);
      console.log("✅ Demo Testimonials seeded successfully!");
    }


    const bookingCount = await Booking.countDocuments();
    if (bookingCount === 0) {
      await Booking.create([
        {
          name: "Zahid Hasan",
          email: "zahid@gmail.com",
          service: "Student Visa Consultancy",
          time: "2026-06-05 at 10:30 AM",
          message: "I have received my CAS letter from Coventry University and need guidance on scheduling my biometric appointment.",
          status: "pending",
        },
        {
          name: "Nusrat Jahan",
          email: "nusrat@gmail.com",
          service: "IELTS Preparation Course",
          time: "2026-06-08 at 02:00 PM",
          message: "Want to enroll in the upcoming online batch and check the schedule details.",
          status: "approved",
        },
      ]);
      console.log("✅ Demo Bookings seeded successfully!");
    }

  } catch (error) {
    console.error("❌ Failed to seed demo data:", error);
  }
};
