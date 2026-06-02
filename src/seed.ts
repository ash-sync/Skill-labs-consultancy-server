import mongoose from 'mongoose';
import dotenv from 'dotenv';


import { Service } from './app/modules/Service/service.model';
import { Destination } from './app/modules/Destination/destination.model';
import { Faq } from './app/modules/Faq/faq.model';
import { Testimonial } from './app/modules/Testimonial/testimonial.model';
import { Expert } from './app/modules/Expert/expert.model';

dotenv.config();

const seedData = async () => {
  try {

    const dbUrl = process.env.DB_URL;
    if (!dbUrl) {
      throw new Error('DB_URL not found in .env');
    }

    await mongoose.connect(dbUrl);
    console.log('Connected to MongoDB for seeding');








    const services = [
      {
        title: 'School Programs',
        category: 'Education',
        description: 'International and local school programs tailored for multiple levels.',
        icon: 'https://cdn-icons-png.flaticon.com/512/2941/2941490.png'
      },
      {
        title: 'Bachelor Programs',
        category: 'Education',
        description: 'Undergraduate degree programs spanning various fields of study.',
        icon: 'https://cdn-icons-png.flaticon.com/512/3344/3344211.png'
      },
      {
        title: 'Master Programs',
        category: 'Education',
        description: 'Postgraduate degree programs to advance your academic career.',
        icon: 'https://cdn-icons-png.flaticon.com/512/2941/2941551.png'
      },
      {
        title: 'Vocational Training',
        category: 'Training',
        description: 'Career-focused training programs for hands-on skills.',
        icon: 'https://cdn-icons-png.flaticon.com/512/3067/3067347.png'
      },
      {
        title: 'Worker Programs',
        category: 'Work',
        description: 'Work and study programs tailored for experienced professionals.',
        icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
      },
      {
        title: 'PhD Programs',
        category: 'Education',
        description: 'Research-focused doctoral degrees for the highest academic level.',
        icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046777.png'
      }
    ];

    for (const s of services) {
      await Service.findOneAndUpdate({ title: s.title }, s, { upsert: true, new: true });
    }


    const destinations = [
      {
        country: 'Australia',
        description: 'Study in Australia, known for its diverse culture and top-tier education system.',
        imageUrl: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1530&auto=format&fit=crop',
        processingTime: '20 days',
        livingCost: 'AUD $14,000-$30,000',
        topInstitutes: [{ name: 'University of Sydney', estimatedFees: '45000' }],
        isDeleted: false
      },
      {
        country: 'Malaysia',
        description: 'Experience Malaysia with affordable world-class education and a multicultural environment.',
        imageUrl: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f0a?q=80&w=1436&auto=format&fit=crop',
        processingTime: '25 days',
        livingCost: 'MYR 15,000-25,000',
        topInstitutes: [{ name: 'University of Malaya', estimatedFees: '15000' }],
        isDeleted: false
      }
    ];

    for (const d of destinations) {
      await Destination.findOneAndUpdate({ country: d.country }, d, { upsert: true, new: true });
    }


    const faqs = [
      { question: 'What are the visa requirements?', answer: 'Visa requirements depend on the destination country. Generally, you need a valid passport, acceptance letter from the institution, and proof of financial support.' },
      { question: 'How long does the processing take?', answer: 'Processing times vary from 15 to 45 days depending on the country and type of visa.' },
      { question: 'Do you provide scholarships?', answer: 'Yes, we assist students in finding and applying for various scholarships offered by universities and governments.' },
      { question: 'What tests are required?', answer: 'Commonly required tests include IELTS, TOEFL, PTE, or specific entrance exams like GRE or GMAT depending on the program.' }
    ];

    for (const f of faqs) {
      await Faq.findOneAndUpdate({ question: f.question }, f, { upsert: true, new: true });
    }


    const testimonials = [
      {
        name: 'Clara Johnson',
        role: 'Student',
        text: 'Skill-labs team has been very helpful to guide me to secure a spot for my dream university! Highly Recommended!',
        rating: 5,
        status: 'approved'
      },
      {
        name: 'Steve Mathew',
        role: 'Student',
        text: 'Skill-labs team has been very helpful to guide me to secure a spot for my dream university! Highly Recommended!',
        rating: 5,
        status: 'approved'
      },
      {
        name: 'Clara Johnson',
        role: 'Student',
        text: 'Skill-labs team has been very helpful to guide me to secure a spot for my dream university! Highly Recommended!',
        rating: 5,
        status: 'approved'
      }
    ];

    for (const t of testimonials) {
      await Testimonial.findOneAndUpdate({ name: t.name, role: t.role, text: t.text }, t, { upsert: true, new: true });
    }


    const experts = [

      {
        name: "Ahmed Al-Sayed",
        role: "MANAGING DIRECTOR",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
        description: "Expert in UK and European admission strategies with 15 years experience.",
        category: "Meet Our Experts",
        tags: []
      },
      {
        name: "Sarah Rohman",
        role: "SENIOR ADMISSIONS LEAD",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
        description: "Specializing in North American university placements and scholarship guidance.",
        category: "Meet Our Experts",
        tags: []
      },
      {
        name: "Tanvir Ahmed",
        role: "VISA SPECIALIST",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
        description: "Deep expertise in Australian and Canadian visa compliance and documentation.",
        category: "Meet Our Experts",
        tags: []
      },
      {
        name: "Laila Hossain",
        role: "HEAD OF TRAINING",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
        description: "Certified IELTS trainer dedicated to preparing students for language excellence.",
        category: "Meet Our Experts",
        tags: []
      },

      {
        name: "Dr. Sarah Chen",
        role: "Senior Academic Advisor",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
        description: "Ex-Admissions Officer with 15+ years experience in Ivy League placements and research grants.",
        category: "Our Global Consultants",
        tags: ["STEM", "PhD Programs"]
      },
      {
        name: "Marcus Thorne",
        role: "Visa & Immigration Lead",
        image: "https://images.unsplash.com/photo-1566492031523-874015d6d05f?q=80&w=600&auto=format&fit=crop",
        description: "Specializing in Tier 1 and O-1 visa categories for high-skilled professionals and founders.",
        category: "Our Global Consultants",
        tags: ["Immigration", "Legal"]
      },
      {
        name: "Elena Rodriguez",
        role: "Career Strategist",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
        description: "Helping international graduates secure Fortune 500 placements through strategic networking.",
        category: "Our Global Consultants",
        tags: ["Placement", "Global Tips"]
      }
    ];

    for (const e of experts) {
      await Expert.findOneAndUpdate({ name: e.name, category: e.category }, e, { upsert: true, new: true });
    }

    console.log('Seeding completed successfully');
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed', err);
    process.exit(1);
  }
};

seedData();
