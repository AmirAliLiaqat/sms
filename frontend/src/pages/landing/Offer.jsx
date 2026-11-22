import { useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Globe,
  LayoutDashboard,
  Users,
  UserCheck,
  Wallet,
  BookOpen,
  Library,
  UtensilsCrossed,
  Bus,
  ClipboardList,
  Bell,
  CalendarDays,
  Settings,
  ShieldCheck,
  Check,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Laptop,
  Palette,
  Megaphone,
  Search,
  FileText,
  Presentation,
  TrendingUp,
  Star,
  Crown,
  MonitorSmartphone,
  MessageCircle,
  Receipt,
  School,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  TaleemFlow Offer Pack for New Iqra Rauza Tul-Atfal Islamic School  */
/*  System. Prepared by DesignsToDeploy (Amir Ali Liaqat).             */
/* ------------------------------------------------------------------ */

const NAVY = "#101E42";
const NAVY_DARK = "#0B1533";
const BLUE = "#2E7CF6";

const landingPages = [
  { name: "Home", desc: "School ki pehchan, admissions banner, stats, news aur blog sections ke sath complete pehla page." },
  { name: "About", desc: "School ki tareekh, philosophy, alumni aur achievements wali maloomat." },
  { name: "Academics", desc: "Classes, subjects aur parhai ke nizam ki tafseel." },
  { name: "Admissions", desc: "Online admission form, 3 asaan steps: Student Info, Parent Details, Review." },
  { name: "News", desc: "School ki khabrein aur announcements jo admin khud update kar sakta hai." },
  { name: "Gallery", desc: "Campus, sports, events aur academic activities ki tasaveer." },
  { name: "Contact", desc: "Address, phone, email aur online rabta form." },
  { name: "Blogs", desc: "School ke articles aur educational posts." },
];

const portals = [
  {
    icon: LayoutDashboard,
    name: "Admin Portal",
    urdu: "Principal aur office ke liye markazi control room",
    color: "#2E7CF6",
    features: [
      "Overview Dashboard: students, faculty, applications aur monthly revenue ek nazar me",
      "Applications: online admission forms ki list, pending applications ki nishandehi",
      "Manage Students: har bachay ka record, class, section aur mukammal profile",
      "Manage Faculty: teachers ka record, subjects aur zimmedariyan",
      "Fee Ledger: fees ka pura hisaab, kis ne di, kis ki baqi hai, ek click par report",
      "Manage Users: kis ko konsa portal milega, ye admin tay karta hai",
      "Classrooms, Departments, Subjects: classes aur mazameen ki mukammal setting",
      "Timetable: har class ka time table banana aur tabdeel karna",
      "Attendance: students aur staff ki hazri ka record",
      "Exams and Results: imtihanat, number entry aur result cards",
      "Library aur Canteen: dono ki reports admin ke samne",
      "Announcements, News, Blogs: website ki khabrein khud update karein",
      "Settings: school ke naam, logo aur rangon ki tabdeeli",
    ],
  },
  {
    icon: BookOpen,
    name: "Faculty Portal",
    urdu: "Har teacher ke liye uski apni jagah",
    color: "#7A3FF2",
    features: [
      "My Classes: teacher ki apni classes aur subjects",
      "Student List: apni class ke tamam students",
      "Attendance: apni class ki rozana hazri mobile ya computer se",
      "Upload Results: apne subject ke numbers khud upload karein",
      "Assignments: homework aur assignments dena aur check karna",
      "Time Table: apna zaati time table har waqt samne",
      "Announcements: school ki hidayat aur notices foran milna",
      "My Profile: apni maloomat khud update karna",
    ],
  },
  {
    icon: GraduationCap,
    name: "Student Portal",
    urdu: "Har bachay ke liye uska apna account",
    color: "#0EA968",
    features: [
      "Dashboard: attendance, result aur pending assignments ek jagah",
      "Class Details aur Time Table: apni class ki mukammal maloomat",
      "Attendance: apni hazri ka record khud dekhna",
      "Exams and Results: result card online, kahin bhi, kabhi bhi",
      "Fee Status: fees jama hai ya baqi, due date ke sath",
      "Library: apne naam par issued books ki maloomat",
      "Notices: school ke tamam notices foran",
      "Submissions: assignments online jama karwana",
      "Profile aur Change Password: apna account khud manage karna",
    ],
  },
  {
    icon: Users,
    name: "Parent Portal",
    urdu: "Walidain ke liye sab se qeemti portal",
    color: "#F59E0B",
    features: [
      "Apne bachay ki rozana attendance ghar baithe dekhna",
      "Fee Status: fees ki maloomat aur due date, baghair school phone kiye",
      "Results aur Report Card online dekhna",
      "Class Time Table aur exam schedule",
      "Notices aur Announcements: chutti, meeting ya fee ki khabar foran",
      "Library books: bachay ne konsi kitab li, kab wapas karni hai",
      "Teacher se rabte ki sahulat aur bachay ki progress ka record",
    ],
  },
  {
    icon: Wallet,
    name: "Manager Portal",
    urdu: "Principal aur management ke liye finance control",
    color: "#E05299",
    features: [
      "Finance Summary: kul income, kharchay aur balance ek screen par",
      "Reports: fees, attendance aur staff ki monthly reports",
      "Approvals: kisi bhi darkhwast ya kharchay ki manzoori ek click par",
      "Staff Directory: tamam staff ki list aur maloomat",
      "Departments: har department ki karkardagi",
      "Overview: kul revenue, kul staff aur attendance rate samne",
    ],
  },
  {
    icon: ClipboardList,
    name: "Staff Portal",
    urdu: "Office staff ke rozana kaam ke liye",
    color: "#64748B",
    features: [
      "My Tasks: rozana ke kaamon ki list aur unki progress",
      "Profile: apni maloomat",
      "Attendance: apni hazri ka record",
      "Notices: management ki hidayat foran milna",
    ],
  },
  {
    icon: Library,
    name: "Library Portal",
    urdu: "Kitabon ka pura hisaab, baghair register ke",
    color: "#B45309",
    features: [
      "Book Management: tamam kitabon ki list, nayi kitab add karna",
      "Issue / Return: kitab dena aur wapas lena ek click par",
      "History and Fines: kis ke paas kitab hai, late par fine ka hisaab",
      "Dashboard: kul kitabein, issued, overdue aur new arrivals",
    ],
  },
  {
    icon: UtensilsCrossed,
    name: "Canteen Portal",
    urdu: "Canteen ki sales aur stock ka record",
    color: "#DC2626",
    features: [
      "Menu Items: canteen ki tamam cheezein aur unki prices",
      "Order History: har order ka record",
      "Dashboard: aaj ki sales, aaj ke orders, monthly revenue",
      "Low Stock Alert: jo cheez khatam honay wali ho, pehle se khabar",
    ],
  },
  {
    icon: Bus,
    name: "Transport Portal",
    urdu: "Routes, drivers aur gaariyon ka nizam",
    color: "#0891B2",
    features: [
      "Routes: tamam routes aur un par chalnay walay students",
      "Drivers and Vehicles: drivers aur gaariyon ki mukammal maloomat",
      "Dashboard: kul buses, active routes, transport use karnay walay students",
      "Route Status: konsi bus waqt par hai, konsi late, live maloomat",
    ],
  },
];

const scriptSteps = [
  {
    title: "Step 1: Opening, taaluq se shuru karein (2 minute)",
    points: [
      "Assalam o Alaikum se shuru karein, waqt dene ka shukriya ada karein.",
      "Purana taaluq yaad dilayen: Sir, main pehle bhi aapke school ke exam papers compose kar chuka hoon, mera dost yahan parhata hai, is liye ye school mere liye ajnabi nahi hai.",
      "Seedha price par na jayen. Pehle ye kahen: Aaj main sirf ek cheez dikhane aaya hoon jo aapke school ke rozana kaam ko bohat asaan kar degi. Pasand na aaye to koi baat nahi.",
    ],
  },
  {
    title: "Step 2: Pehle unki problems sunen (5 minute)",
    points: [
      "Sawal poochein: Fees ka record is waqt kahan rakha jata hai, register par ya Excel me?",
      "Poochein: Kisi bachay ki purani fee ya result nikalna ho to kitni dair lagti hai?",
      "Poochein: Walidain ko fees ya chutti ki khabar kaisay di jati hai?",
      "Poochein: Teachers ki hazri aur results banane me sab se zyada waqt kahan lagta hai?",
      "Unke jawab ghor se sunen. Jo takleef wo khud bolen, demo me sab se pehle usi ka hal dikhayen.",
    ],
  },
  {
    title: "Step 3: Demo ka order (10 se 15 minute)",
    points: [
      "1. Landing Pages: Ye aapke school ki apni website hogi. Admissions Open ka banner, online admission form, news aur gallery. Parent pehle website dekhta hai, wahi se school ka impression banta hai.",
      "2. Admin Portal: Students, Fees Ledger aur Results dikhayen. Ye woh teen cheezein hain jo unki rozana ki sab se bari tension hain.",
      "3. Faculty Portal: Teacher apne mobile se hazri lagayega aur numbers upload karega. Register aur files ka bojh khatam.",
      "4. Student aur Parent Portal: Parent ghar baithe bachay ki hazri, fees aur result dekhega. School par phone calls kam, aitemaad zyada.",
      "5. Manager Portal: Sir, ye aapke liye hai. Poore school ki income, kharcha aur reports ek screen par, kahin se bhi.",
      "6. Library, Canteen, Transport: Mukhtasir dikhayen. Kahen ke ye abhi chhote level par hain lekin jaise jaise school baray ga, yehi system sath baray ga. Dobara naya system nahi lena parega.",
      "Demo ke darmiyan price bilkul na bolen. Pehle value samne aaye, phir rate.",
    ],
  },
  {
    title: "Step 4: Price batane ka tareeka",
    points: [
      "Pehle market reference dein: Sir, yehi system agar aap kisi software company se banwayen to wo 4 se 6 lakh rupay se kam me nahi banayenge, aur phir bhi har tabdeeli ke alag paisay lenge.",
      "Phir apni wajah batayen: Meri apni company hai, DesignsToDeploy. Ye system mera pehle se bana hua hai, aur aap se taaluq ki wajah se main isay aapke school ke liye khaas rate par tayyar kar dunga.",
      "Phir Plans wale tab se one-time offer aur monthly plans dikhayen. Ek hi rate par na atken, choice dein. Choice dene se deal asaan hoti hai.",
      "Ye line lazmi bolen: 50 students par monthly plan ki cost per student sirf 100 rupay parti hai. Ek bachay ki fee ka bohat chhota hissa pure school ko digital kar deta hai.",
    ],
  },
  {
    title: "Step 5: Aitraaz ke jawab",
    points: [
      "Mehenga hai: Sir, is liye monthly plan rakha hai. Rs 5,000 mahine se shuru karein, jab faida nazar aaye to plan barha lein. Aur system aur data hamesha aapki property rahega, koi lock-in nahi.",
      "Hamara staff computer nahi janta: Isi liye training shamil hai. Main khud aakar aapke ek staff member ko pura system sekha dunga. Aur ye mobile par bhi chalta hai, hazri lagana WhatsApp chalane jaisa asaan hai.",
      "School abhi chhota hai: Bilkul sahi, isi liye price bhi chhoti rakhi hai. Lekin nizam chhote school ka hi acha banta hai. Jab admissions barhenge to system pehle se tayyar hoga, aur online admission form naye bachay lane me madad karega.",
      "Soach kar batayenge: Bilkul, koi jaldi nahi. Main demo ka link aapko bhej dunga, ghar par sakoon se dekhein. Ye khaas rate main 7 din tak aapke liye rakhoon ga, uske baad meri normal price lag jayegi.",
    ],
  },
  {
    title: "Step 6: Closing aur next step",
    points: [
      "Aakhir me do raaste dein: Sir, aap chahein to one-time me system aapki property ban jayega, chahein to monthly par baghair bari rakam ke shuru kar lein. Dono me shuruaat isi haftay ho sakti hai.",
      "Chhota sa commitment lein: Agar aap haan kehte hain to main pehle aapke tamam students ka data system me daal kar, school ke naam aur logo ke sath tayyar karke dikhaunga. Pasand aaye to aage barhenge.",
      "Jate jate Computer College wali baat ka sirf ishara dein: Ek aur khayal hai jo school ke liye extra income ka zariya ban sakta hai, wo bhi arz karunga. Phir uski tafseel Computer College tab se batayen.",
      "Private tip: Demo se pehle Parent Portal ka login khud check kar lein. Agar us waqt na khulay to Student Portal se hi attendance, fees aur result dikha kar parent wali baat samjha dein, rukawat na anay dein.",
    ],
  },
];

const oneTimeIncludes = [
  "Complete TaleemFlow system, school ke naam, logo aur rangon ke sath",
  "Tamam 8 portals: Admin, Faculty, Student, Parent, Manager, Staff, Library, Canteen, Transport",
  "Tamam 40 se 50 students aur staff ka data hum khud system me daal kar denge",
  "School ki apni website (landing pages) admissions, news aur gallery ke sath",
  "Ek mukammal training session: aapke staff ko pura system chalana sekhayenge",
  "30 din free support: koi masla ho, hum hazir",
  "System aur data 100% school ki property, koi monthly majboori nahi",
];

const monthlyPlans = [
  {
    name: "Monthly Basic",
    price: "Rs 5,000",
    per: "/month",
    setup: "Setup fee Rs 15,000 one-time. 12 mahine ki commitment par setup fee maaf.",
    tagline: "System hum bana kar denge, chalana aapka staff karega",
    features: [
      "Complete system bana kar deploy kar denge",
      "School ke ek staff member ko mukammal training, wo khud manage karega",
      "Hosting aur domain shamil, alag koi kharcha nahi",
      "WhatsApp support (office hours)",
      "Mahine me 2 chhoti changes free",
      "Tamam portals aur landing website shamil",
    ],
    highlighted: false,
  },
  {
    name: "Monthly Managed",
    price: "Rs 10,000",
    per: "/month",
    setup: "Setup fee Rs 10,000 one-time. 6 mahine ki commitment par setup fee maaf.",
    tagline: "System bhi humara, chalana bhi humara. Aap bas school chalain",
    features: [
      "Basic plan ki tamam cheezein shamil",
      "System hum manage karenge: fees entry, results, report cards",
      "Har mahine ki reports tayyar karke denge",
      "Naye admissions ka data hum daalenge",
      "Staff ko ongoing training, jab zarurat ho",
      "Priority WhatsApp support",
      "Unlimited chhoti changes",
    ],
    highlighted: true,
  },
  {
    name: "Monthly Premium",
    price: "Rs 15,000",
    per: "/month",
    setup: "Setup fee maaf.",
    tagline: "Poora digital department, ek chhoti team ki tarah",
    features: [
      "Managed plan ki tamam cheezein shamil",
      "Exam papers composing (jo hum pehle se karte aa rahe hain)",
      "School ki Facebook page par mahine ke 8 posts",
      "Admission season me landing page updates aur campaign support",
      "Har teen mahine me on-site visit aur staff training",
      "Sab se pehle support, sab se pehle naye features",
    ],
    highlighted: false,
  },
];

const courses = [
  {
    icon: Laptop,
    name: "Web Development",
    teacher: "Amir Ali Liaqat khud parhayenge",
    duration: "3 months",
    points: [
      "HTML, CSS, JavaScript, Bootstrap, Tailwind CSS",
      "React, Next.js, Node.js, Express.js, MongoDB",
      "Amir Ali ka 6 months ka tajurba: Frontend Mentor, Backend Mentor aur Web Instructor ke tor par parhaya hua",
      "Aakhir me har student ka apna live project aur certificate",
    ],
  },
  {
    icon: Palette,
    name: "Graphic Design",
    teacher: "Amir Ali ke dost, tajurbakar teacher",
    duration: "2 to 3 months",
    points: [
      "Photoshop, Illustrator aur Canva par practical kaam",
      "Logo, poster, social media design aur branding",
      "Freelancing ke liye portfolio tayyar karwana",
    ],
  },
  {
    icon: FileText,
    name: "MS Office",
    teacher: "Amir Ali ke dost, tajurbakar teacher",
    duration: "2 months",
    points: [
      "MS Word, Excel aur PowerPoint mukammal",
      "Office jobs aur data entry ke liye tayyari",
      "Chhote students aur beginners ke liye sab se pehla course",
    ],
  },
  {
    icon: Megaphone,
    name: "SEO and Digital Marketing",
    teacher: "Amir Ali ke dost, tajurbakar teacher",
    duration: "2 to 3 months",
    points: [
      "SEO, Google aur social media marketing",
      "Facebook aur Instagram ads chalana sekhna",
      "Local businesses ke liye practical projects",
    ],
  },
];

const collegeModels = [
  {
    name: "Model A: Revenue Share 50/50",
    badge: "Pehli peshkash",
    points: [
      "School ko ek rupay ki investment nahi karni",
      "Jaga aur bijli school ki, teachers, courses aur management humari",
      "Har student ki fees aadhi school ki, aadhi humari",
      "School ke liye baghair kharchay ke pakki extra income",
    ],
  },
  {
    name: "Model B: Fixed Monthly Rent",
    badge: "Dosra option",
    points: [
      "Hum school ko har mahine Rs 20,000 fixed rent denge",
      "Fees aur admissions ki zimmedari poori humari",
      "School ko har mahine tay shuda rakam, koi tension nahi",
    ],
  },
  {
    name: "Model C: Per Student Commission",
    badge: "Teesra option",
    points: [
      "Har admission par school ko tay shuda commission",
      "Jitne zyada students, utni zyada school ki income",
      "Academy ke students ko khaas discount, taake wo bhi join karein",
    ],
  },
];

const tabs = [
  { id: "system", label: "TaleemFlow System" },
  { id: "benefits", label: "Benefits" },
  { id: "script", label: "Meeting Script" },
  { id: "offers", label: "Offers" },
  { id: "plans", label: "Plans" },
  { id: "college", label: "Computer College" },
];

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="max-w-3xl">
      <span
        className="inline-block rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-widest"
        style={{ borderColor: "#BFD6FB", color: BLUE, background: "#EEF4FE" }}
      >
        {eyebrow}
      </span>
      <h2 className="mt-3 text-2xl font-bold sm:text-3xl" style={{ color: NAVY }}>
        {title}
      </h2>
      {desc ? <p className="mt-2 text-sm leading-relaxed text-neutral-500">{desc}</p> : null}
    </div>
  );
}

function SystemTab() {
  return (
    <div className="space-y-12">
      <div>
        <SectionTitle
          eyebrow="TaleemFlow kya hai"
          title="Ek system, poora school digital"
          desc="TaleemFlow ek complete School Management System hai jo DesignsToDeploy ne banaya hai. Register, files aur Excel ki jagah ab har cheez ek jagah: admissions, fees, hazri, results, library, canteen aur transport. Mobile aur computer, dono par chalta hai. Neeche har portal ki mukammal tafseel hai, bilkul waisi jaisi live demo me mojood hai."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Globe, t: "School ki apni website", d: "Landing pages ke sath: Home, About, Academics, Online Admissions, News, Gallery, Contact." },
            { icon: MonitorSmartphone, t: "Mobile par bhi mukammal", d: "Teacher hazri mobile se lagaye, parent result mobile par dekhe. Koi app install nahi karna." },
            { icon: ShieldCheck, t: "Har kisi ka apna login", d: "Har portal ka alag login. Parent sirf apne bachay ka record dekhta hai, kisi aur ka nahi." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
              <c.icon className="h-6 w-6" style={{ color: BLUE }} />
              <h3 className="mt-3 font-semibold" style={{ color: NAVY }}>{c.t}</h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500">{c.d}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionTitle
          eyebrow="Public Website"
          title="Landing Pages: school ka pehla impression"
          desc="Parent admission se pehle school ki website dekhta hai. Ye tamam pages admin khud update kar sakta hai, kisi developer ki zarurat nahi."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {landingPages.map((p) => (
            <div key={p.name} className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <h3 className="font-semibold" style={{ color: NAVY }}>{p.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionTitle
          eyebrow="8 Portals"
          title="Har shakhs ke liye uska apna portal"
          desc="Har portal me kya kya manage ho sakta hai, uski mukammal list. Super Admin portal sirf DesignsToDeploy ke apne use ke liye hai, wo school ko nahi dikhana."
        />
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {portals.map((portal) => (
            <div key={portal.name} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl text-white" style={{ background: portal.color }}>
                  <portal.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: NAVY }}>{portal.name}</h3>
                  <p className="text-xs font-medium text-neutral-500">{portal.urdu}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {portal.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm leading-relaxed text-neutral-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: portal.color }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScriptTab() {
  return (
    <div className="space-y-8">
      <SectionTitle
        eyebrow="Meeting Script"
        title="Wahan ja kar kya bolna hai"
        desc="Ye script meeting se pehle ek dafa parh lein. Alfaaz asaan rakhe hain taake bilkul isi tarah baat ho sakay. Sab se ahem usool: pehle value, phir price. Aur pehle unki problems sunna, apni features sunana baad me."
      />
      <div className="space-y-5">
        {scriptSteps.map((step, i) => (
          <div key={step.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: BLUE }}>
                {i + 1}
              </span>
              <h3 className="font-bold" style={{ color: NAVY }}>{step.title}</h3>
            </div>
            <ul className="mt-4 space-y-2.5">
              {step.points.map((p) => (
                <li key={p} className="flex gap-2 text-sm leading-relaxed text-neutral-600">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BLUE }} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="rounded-2xl p-6 text-white" style={{ background: NAVY }}>
        <h3 className="flex items-center gap-2 font-bold">
          <Sparkles className="h-5 w-5" /> Meeting wale din ki checklist
        </h3>
        <ul className="mt-3 grid gap-2 text-sm text-blue-100 sm:grid-cols-2">
          <li>Laptop ya mobile par demo pehle se khol kar rakhein: campus-sms.vercel.app</li>
          <li>Har portal ka demo login login page par ek click se khulta hai</li>
          <li>Price hamesha Plans tab khol kar dikhayen, zubani rate na dein</li>
          <li>Aakhir me sirf ek sawal: One-time pasand hai ya monthly se shuruaat karein?</li>
        </ul>
      </div>
    </div>
  );
}

function OffersTab() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Offers"
        title="Kya kya offer dena hai"
        desc="Meeting me teen offers is order me rakhein: pehle one-time ownership, phir monthly plans, aur sab se aakhir me Computer College ka khayal. Har offer ke sath wajah lazmi batayen ke ye rate khaas kyun hai: taaluq ki wajah se, aur kyunke system pehle se bana hua hai."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
          <span className="text-[11px] font-bold uppercase tracking-widest text-red-500">Bahir market ka rate</span>
          <div className="mt-2 text-4xl font-extrabold text-red-600">Rs 400,000 to 600,000</div>
          <p className="mt-2 text-sm leading-relaxed text-red-900/70">
            Koi bhi software house ya agency 8 se 9 portals wala ye complete custom system is se kam me nahi banati. Us par bhi annual maintenance alag, aur har chhoti tabdeeli ke alag charges. Ready-made per-student software bhi 50 students par saal ka Rs 60,000 se 120,000 tak par jata hai, aur wo system kabhi school ki property nahi banta.
          </p>
        </div>
        <div className="rounded-2xl p-6 text-white shadow-lg" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1D3469 100%)` }}>
          <span className="text-[11px] font-bold uppercase tracking-widest text-blue-300">Aapki khaas offer, sirf is school ke liye</span>
          <div className="mt-2 flex flex-wrap items-end gap-3">
            <span className="text-4xl font-extrabold">Rs 85,000</span>
            <span className="pb-1 text-lg text-blue-200 line-through">Rs 150,000</span>
            <span className="mb-1 rounded-full bg-white/15 px-2.5 py-1 text-xs font-bold">One-Time</span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-blue-100">
            Amir Ali ki normal price Rs 150,000 hai. Jaan-pehchan aur purane taaluq ki wajah se is school ke liye sirf Rs 85,000 one-time. Ek dafa dein, system hamesha ke liye school ka.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h3 className="font-bold" style={{ color: NAVY }}>One-Time offer me shamil hai</h3>
        <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {oneTimeIncludes.map((f) => (
            <li key={f} className="flex gap-2 text-sm leading-relaxed text-neutral-600">
              <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BLUE }} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 grid gap-4 border-t border-neutral-100 pt-5 sm:grid-cols-3">
          {[
            { t: "40% Advance", d: "Kaam shuru karne par" },
            { t: "40% Delivery par", d: "System tayyar, data daal kar live" },
            { t: "20% Training ke baad", d: "Staff ko sekha kar, jab school mutmaeen ho" },
          ].map((s) => (
            <div key={s.t} className="rounded-xl bg-neutral-50 p-4 text-center">
              <div className="font-bold" style={{ color: NAVY }}>{s.t}</div>
              <div className="mt-0.5 text-xs text-neutral-500">{s.d}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-neutral-500">
          One-time ke baad koi monthly majboori nahi. Agar school chahe to optional support sirf Rs 3,000/month me mil sakta hai, ya jab zarurat ho per-task rate par.
        </p>
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h3 className="font-bold" style={{ color: NAVY }}>Agar one-time na manen to?</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          Koi baat nahi, yahi system monthly par bhi mil sakta hai. Kam monthly par hum system bana kar aur staff ko sekha kar de denge, chalana school khud karega. Zyada monthly par chalana bhi humari zimmedari: fees, results, reports aur data entry sab hum karenge. Tafseel Plans tab me hai.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {["Monthly Basic: Rs 5,000/month", "Monthly Managed: Rs 10,000/month", "Monthly Premium: Rs 15,000/month"].map((chip) => (
            <span key={chip} className="rounded-full px-3.5 py-1.5 text-sm font-semibold text-white" style={{ background: BLUE }}>
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlansTab() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Plans"
        title="Tamam plans ek nazar me"
        desc="Sari prices PKR me hain aur khaas tor par is chhote school (40 se 50 students) ke budget ke hisab se rakhi gayi hain. Har plan me tamam portals aur school ki website shamil hai. Farq sirf itna hai ke system kon chalaye ga: aapka staff, ya hum."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {monthlyPlans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border bg-white p-6 shadow-sm ${plan.highlighted ? "ring-2" : "border-neutral-200"}`}
            style={plan.highlighted ? { borderColor: BLUE, ["--tw-ring-color"]: BLUE } : {}}
          >
            {plan.highlighted ? (
              <span className="absolute -top-3 left-5 flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ background: BLUE }}>
                <Star className="h-3.5 w-3.5" /> Recommended
              </span>
            ) : null}
            <h3 className="font-bold" style={{ color: NAVY }}>{plan.name}</h3>
            <p className="mt-1 text-xs leading-relaxed text-neutral-500">{plan.tagline}</p>
            <div className="mt-4 flex items-end gap-1">
              <span className="text-3xl font-extrabold" style={{ color: NAVY }}>{plan.price}</span>
              <span className="pb-1 text-sm text-neutral-400">{plan.per}</span>
            </div>
            <ul className="mt-4 space-y-2">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm leading-relaxed text-neutral-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BLUE }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-lg bg-neutral-50 p-3 text-xs leading-relaxed text-neutral-500">{plan.setup}</p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
        <div className="border-b border-neutral-100 p-5">
          <h3 className="font-bold" style={{ color: NAVY }}>One-Time vs Monthly: seedha muqabla</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="bg-neutral-50 text-xs uppercase tracking-wide text-neutral-500">
                <th className="px-5 py-3 font-semibold">Cheez</th>
                <th className="px-5 py-3 font-semibold">One-Time Rs 85,000</th>
                <th className="px-5 py-3 font-semibold">Monthly Basic Rs 5,000</th>
                <th className="px-5 py-3 font-semibold">Monthly Managed Rs 10,000</th>
                <th className="px-5 py-3 font-semibold">Monthly Premium Rs 15,000</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 text-neutral-600">
              {[
                ["Complete system aur tamam portals", "Yes", "Yes", "Yes", "Yes"],
                ["School ki website (landing pages)", "Yes", "Yes", "Yes", "Yes"],
                ["Students ka data entry", "Hum karenge", "Shuruaat me hum", "Hum karenge", "Hum karenge"],
                ["Staff training", "1 session", "1 staff ko mukammal", "Ongoing", "Ongoing + on-site visit"],
                ["System chalana (fees, results, reports)", "School khud", "School khud", "Hum karenge", "Hum karenge"],
                ["Hosting aur domain", "Pehla saal shamil", "Shamil", "Shamil", "Shamil"],
                ["Support", "30 din free, phir optional Rs 3,000/month", "WhatsApp (office hours)", "Priority WhatsApp", "Sab se pehle"],
                ["Exam papers composing", "Nahi", "Nahi", "Nahi", "Shamil"],
                ["Facebook posts (8/month)", "Nahi", "Nahi", "Nahi", "Shamil"],
              ].map((row) => (
                <tr key={row[0]}>
                  <td className="px-5 py-3 font-medium" style={{ color: NAVY }}>{row[0]}</td>
                  {row.slice(1).map((cell, idx) => (
                    <td key={idx} className="px-5 py-3">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: ShieldCheck, t: "Koi lock-in nahi", d: "System aur tamam data hamesha school ki property. Jab chahein monthly se one-time par switch kar sakte hain." },
          { icon: Receipt, t: "Per student hisaab", d: "50 students par Basic plan per student sirf Rs 100/month, Managed Rs 200/month parta hai." },
          { icon: TrendingUp, t: "School ke sath growth", d: "Students barhen to bhi yehi system chalega. Naya software dobara nahi lena parega." },
        ].map((c) => (
          <div key={c.t} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
            <c.icon className="h-6 w-6" style={{ color: BLUE }} />
            <h3 className="mt-3 font-semibold" style={{ color: NAVY }}>{c.t}</h3>
            <p className="mt-1 text-sm leading-relaxed text-neutral-500">{c.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CollegeTab() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Dosri Offer"
        title="Computer College: school ke liye extra income"
        desc="School is waqt Nursery se Class 8 tak Islamic school system hai, aur second time academy chalti hai. Wahi building, wahi time, ek aur kaam ke liye behtareen hai: Computer College. Ye baat system wali deal ke baad aaram se rakhein, pehli deal par bojh na dalen."
      />

      <div className="rounded-2xl p-6 text-white" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1D3469 100%)` }}>
        <h3 className="flex items-center gap-2 text-lg font-bold">
          <Presentation className="h-5 w-5" /> Amir Ali ka teaching tajurba
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-blue-100">
          Amir Ali 6 months tak Frontend Mentor, Backend Mentor aur Web Instructor ke tor par parha chuke hain. Ye tamam technologies wo mukammal parha chuke hain: HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React, Next.js, Node.js, Express.js aur MongoDB. Unke 2 dost teachers Graphic Design, MS Office, SEO aur Digital Marketing parhate hain, wo bhi sath join kar sakte hain.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS", "React", "Next.js", "Node.js", "Express.js", "MongoDB"].map((s) => (
            <span key={s} className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold text-white">{s}</span>
          ))}
        </div>
      </div>

      <div>
        <SectionTitle eyebrow="Courses" title="2 to 3 months ke short courses" desc="Har course practical, certificate ke sath. Student fees ki suggestion: per course Rs 12,000 to 18,000 kul, ya Rs 5,000/month per student. Academy ke students ko khaas discount diya ja sakta hai." />
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {courses.map((course) => (
            <div key={course.name} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl text-white" style={{ background: BLUE }}>
                  <course.icon className="h-5 w-5" />
                </span>
                <span className="flex items-center gap-1 rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-600">
                  <Clock className="h-3.5 w-3.5" /> {course.duration}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-bold" style={{ color: NAVY }}>{course.name}</h3>
              <p className="text-xs font-medium text-neutral-500">{course.teacher}</p>
              <ul className="mt-3 space-y-2">
                {course.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm leading-relaxed text-neutral-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BLUE }} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionTitle eyebrow="Business Models" title="Teen tareeqay, school jo chun le" desc="Pehle Model A pesh karein: school ko baghair ek rupay lagaye extra income. Yahi sab se asaan haan hai." />
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {collegeModels.map((model) => (
            <div key={model.name} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <span className="rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white" style={{ background: BLUE }}>{model.badge}</span>
              <h3 className="mt-3 font-bold" style={{ color: NAVY }}>{model.name}</h3>
              <ul className="mt-3 space-y-2">
                {model.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm leading-relaxed text-neutral-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BLUE }} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="flex items-center gap-2 font-bold" style={{ color: NAVY }}>
            <School className="h-5 w-5" style={{ color: BLUE }} /> School ko faida
          </h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-neutral-600">
            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BLUE }} /> Baghair investment ke har mahine extra income</li>
            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BLUE }} /> School ka naam area me computer education ke sath mashhoor hoga</li>
            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BLUE }} /> Academy ke students bhi courses me aayenge, academy bhi baray gi</li>
            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BLUE }} /> Bari classes (5 to 8) ke students ke liye bhi computer sekhne ka mauqa</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="flex items-center gap-2 font-bold text-amber-900">
            <MessageCircle className="h-5 w-5" /> Discussion points
          </h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-amber-900/80">
            <li className="flex gap-2"><ArrowRight className="mt-0.5 h-4 w-4 shrink-0" /> Lab ke liye 10 to 15 computers chahiye honge, ye kharcha kis ka hoga, ye pehle tay karna hai</li>
            <li className="flex gap-2"><ArrowRight className="mt-0.5 h-4 w-4 shrink-0" /> Classes ka time academy ke baad, sham 3 se 6 baje ki tajweez hai</li>
            <li className="flex gap-2"><ArrowRight className="mt-0.5 h-4 w-4 shrink-0" /> Pehli batch chhoti rakhein: 15 to 20 students, ek course se shuruaat (MS Office ya Web Development)</li>
            <li className="flex gap-2"><ArrowRight className="mt-0.5 h-4 w-4 shrink-0" /> Certificates DesignsToDeploy ki taraf se diye jayenge</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const benefitGroups = [
  {
    title: "Principal aur Owner ke faide",
    color: "#2E7CF6",
    items: [
      { t: "Poora school ek nazar me", d: "Kitne bachay hain, kitni fees aayi, kitne teacher hazir hain: sab kuch apne mobile par, school aaye baghair bhi." },
      { t: "Fees ka ek ek rupay ka hisaab", d: "Kis ne fees di, kis ki baqi hai, kitni dair se baqi hai: ek click par list. Paisa gum honay ya bhool janay ka sawal hi paida nahi hota." },
      { t: "Koi record gum nahi ho sakta", d: "Register gum ho jaye, bhar jaye ya kharab ho jaye to saalon ka record khatam. System me record hamesha mehfooz rehta hai." },
      { t: "Purana record ek minute me", d: "Teen saal purane bachay ki fees ya result chahiye? Naam likhein, record samne. Files ke dhair me dhundna khatam." },
      { t: "Staff ki karkardagi samne", d: "Konsa teacher waqt par aata hai, kis class ka result acha hai: sab reports me wazeh. Faislay andazay se nahi, maloomat se." },
      { t: "Ghar baithe bhi nazar", d: "Chutti wale din ya sheher se bahir hon, school ki poori report mobile par hazir." },
      { t: "Monthly report khud tayyar", d: "Mahine ke aakhir par income, kharcha aur hazri ki report khud ban jati hai. Ghanton ka kaam minutes me." },
      { t: "School ki izzat aur pehchan", d: "Apni website aur online system wala school walidain ki nazar me bara aur professional lagta hai. Yahi cheez naye admissions lati hai." },
    ],
  },
  {
    title: "Teachers ke faide",
    color: "#7A3FF2",
    items: [
      { t: "Hazri mobile se, register khatam", d: "Subah class me kharay kharay mobile se hazri lag jayegi. Register uthaye phirna aur baad me total karna khatam." },
      { t: "Result banana asaan", d: "Numbers daalein, result card khud ban jata hai. Total, percentage aur position khud calculate. Ghanton ki mehnat khatam." },
      { t: "Homework ki tension khatam", d: "Assignment system me de dein, jo bacha ghair hazir tha usay bhi ghar par mil jayega." },
      { t: "Apna time table hamesha samne", d: "Konsa period kis class me hai, mobile par foran maloom. Kisi se poochna nahi parta." },
      { t: "Notices foran milna", d: "Meeting hai, chutti hai ya schedule badla: khabar foran har teacher tak, kisi ko alag se batana nahi parta." },
    ],
  },
  {
    title: "Parents (Walidain) ke faide",
    color: "#F59E0B",
    items: [
      { t: "Bacha school pohncha ya nahi", d: "Hazri dekh kar walidain ko sukoon: mera bacha aaj school gaya hai. Ye ek cheez parents ko sab se zyada khush karti hai." },
      { t: "Fees ki maloomat baghair phone kiye", d: "Fees jama hai ya baqi, due date kab hai: parent khud dekh lega. School par baar baar phone calls khatam." },
      { t: "Result ghar baithe", d: "Result wale din school ke chakkar nahi. Report card mobile par hazir." },
      { t: "Har khabar waqt par", d: "Chutti, parent meeting, fee ki aakhri tareekh: koi khabar reh nahi jayegi, koi bahana nahi bane ga." },
      { t: "School par aitemaad barhta hai", d: "Jis school ka nizam itna saaf ho, walidain wahan apne doosre bachay bhi bhejte hain aur doosron ko bhi mashwara dete hain." },
    ],
  },
  {
    title: "Students ke faide",
    color: "#0EA968",
    items: [
      { t: "Apna result aur hazri khud dekhna", d: "Bacha apni progress khud dekhta hai to parhai me dilchaspi barhti hai." },
      { t: "Homework kabhi miss nahi", d: "Ghair hazri wale din ka kaam bhi portal par mil jata hai." },
      { t: "Time table aur exam schedule samne", d: "Kal konsa paper hai, tayyari pehle se. Koi confusion nahi." },
      { t: "Library ki kitab ka record", d: "Konsi kitab li, kab wapas karni hai: late fine se bachna asaan." },
    ],
  },
  {
    title: "Paisay, waqt aur sukoon ki bachat",
    color: "#E05299",
    items: [
      { t: "Registers aur printing ka kharcha kam", d: "Hazri register, fee register, result ki files: ye sab kharchay bohat kam ho jate hain." },
      { t: "Galti ka chance taqreeban khatam", d: "Total, percentage aur hisaab machine karti hai. Insani galti se honay walay jhagray khatam." },
      { t: "Fees waqt par ana shuru", d: "Jab har cheez record me ho aur parents ko due date nazar aaye, fees late honay ki sharah kam ho jati hai." },
      { t: "Naye admissions me madad", d: "Online admission form aur professional website dekh kar naye parents mutasir hotay hain. School grow karta hai." },
      { t: "School jitna baray ga, system sath baray ga", d: "Aaj 50 bachay hain, kal 200 ho jayen to bhi yehi system chalega. Dobara naya system khareedna nahi parega." },
      { t: "Sab kuch ek jagah", d: "Fees alag file me, hazri alag register me, result alag jagah: ye bikhra hua nizam khatam. Poora school ek hi jagah." },
    ],
  },
];

const allBenefitsQuick = [
  "Fees ka mukammal hisaab", "Ek click par purana record", "Mobile se hazri", "Khud bannay wala result card",
  "Parents ko har khabar waqt par", "Fees ki due date parents ko nazar", "Record gum honay ka dar khatam", "Galti ka chance khatam",
  "Monthly reports khud tayyar", "Ghar baithe school ki report", "Online admission form", "School ki apni website",
  "Teachers ka waqt bachta hai", "Registers ka kharcha kam", "Staff ki karkardagi wazeh", "Library ki kitabein mehfooz",
  "Transport ka record", "Canteen ka hisaab", "Naye admissions me izafa", "Walidain ka aitemaad",
  "Har kisi ka apna login", "Data 100% school ki property", "Mobile aur computer dono par", "School ke sath barhnay wala system",
];

function BenefitsTab() {
  return (
    <div className="space-y-12">
      <div>
        <SectionTitle
          eyebrow="Benefits: Faide"
          title="Ye system asal me faida kya dega?"
          desc="Technical baaton ko ek taraf rakhein. Seedhi si baat ye hai: ye system wohi kaam karta hai jo is waqt registers, files aur Excel me hota hai, bas tez, mehfooz aur baghair galti ke. Jaise poora school ek mobile ke andar aa jaye: fees, hazri, result, har cheez ek jagah, ek click par."
        />
        <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <div className="grid sm:grid-cols-2">
            <div className="border-b border-neutral-100 bg-red-50 p-6 sm:border-b-0 sm:border-r">
              <h3 className="font-bold text-red-600">Pehle: Register wala nizam</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-red-900/70">
                <li>Fees dhundne ke liye purane register ke pages palatna</li>
                <li>Result banane me teachers ke kayi din lagna</li>
                <li>Parent ko khabar dene ke liye phone ya bachay ke hath paighaam</li>
                <li>Register gum ya kharab ho to saalon ka record khatam</li>
                <li>Principal ko har baat ke liye kisi se poochna parta hai</li>
              </ul>
            </div>
            <div className="bg-emerald-50 p-6">
              <h3 className="font-bold text-emerald-700">Ab: TaleemFlow ke sath</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-emerald-900/80">
                <li>Naam likhein, fees ka pura record ek minute me samne</li>
                <li>Numbers daalein, result card khud tayyar</li>
                <li>Har notice foran tamam parents ke mobile par</li>
                <li>Record hamesha mehfooz, saalon purana bhi ek click par</li>
                <li>Principal apne mobile par poora school dekh sakta hai</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {benefitGroups.map((group) => (
        <div key={group.title}>
          <SectionTitle eyebrow="Faida" title={group.title} />
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {group.items.map((item) => (
              <div key={item.t} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                <h3 className="flex items-start gap-2 font-semibold" style={{ color: NAVY }}>
                  <Check className="mt-0.5 h-5 w-5 shrink-0" style={{ color: group.color }} />
                  {item.t}
                </h3>
                <p className="mt-1.5 pl-7 text-sm leading-relaxed text-neutral-500">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="rounded-2xl p-6 text-white" style={{ background: NAVY }}>
        <h3 className="flex items-center gap-2 font-bold">
          <Sparkles className="h-5 w-5" /> Ek nazar me tamam faide
        </h3>
        <p className="mt-1.5 text-sm text-blue-200">Meeting me ye list parh kar sunayen ya screen par dikhayen. Har line ek mukammal faida hai.</p>
        <div className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {allBenefitsQuick.map((b) => (
            <span key={b} className="flex items-start gap-2 text-sm text-blue-50">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" /> {b}
            </span>
          ))}
        </div>
        <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-relaxed text-blue-100">
          Sab se bari baat: ye faide sirf bare schools ke liye nahi hain. Chhota school hi in se sab se zyada faida uthata hai, kyunke wahan ek hi shakhs par tamam kaamon ka bojh hota hai. Ye system wohi bojh halka karta hai.
        </p>
      </div>
    </div>
  );
}

export default function Offer() {
  const [active, setActive] = useState("system");

  return (
    <div className="min-h-screen bg-[#F7F9FC]" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Header */}
      <header className="text-white" style={{ background: `linear-gradient(135deg, ${NAVY_DARK} 0%, ${NAVY} 55%, #1D3469 100%)` }}>
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/12">
                <GraduationCap className="h-6 w-6" />
              </span>
              <div>
                <div className="text-lg font-extrabold leading-tight">TaleemFlow</div>
                <div className="text-[11px] font-medium uppercase tracking-widest text-blue-300">School Management System</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link to="/" className="rounded-full bg-white px-4 py-2 text-sm font-semibold transition hover:bg-blue-50" style={{ color: NAVY }}>
                Live Demo Dekhein
              </Link>
              <Link to="/login" className="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
                Portals Login
              </Link>
            </div>
          </div>

          <div className="mt-10 max-w-3xl">
            <span className="inline-block rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-blue-200">
              Khaas Peshkash
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-[42px] sm:leading-[1.15]">
              New Iqra Rauza Tul-Atfal Islamic School System ke liye mukammal digital system
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base">
              Admissions, fees, hazri, results, library, canteen aur transport: poora school ek hi system se. Ye page meeting ke liye tayyar kiya gaya hai: system ki tafseel, offers, plans aur Computer College ki tajweez, sab ek jagah.
            </p>
          </div>

          <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3">
            {[
              { v: "8", l: "Portals" },
              { v: "40 to 50", l: "Students ke liye khaas rate" },
              { v: "Rs 5,000", l: "Se monthly shuruaat" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-white/15 bg-white/8 p-4">
                <div className="text-xl font-extrabold sm:text-2xl">{s.v}</div>
                <div className="mt-0.5 text-[11px] font-medium text-blue-200">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="sticky top-0 z-20" style={{ background: NAVY_DARK }}>
          <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2.5 sm:px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active === tab.id ? "text-white" : "text-blue-200 hover:bg-white/10 hover:text-white"
                }`}
                style={active === tab.id ? { background: BLUE } : {}}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {active === "system" && <SystemTab />}
        {active === "benefits" && <BenefitsTab />}
        {active === "script" && <ScriptTab />}
        {active === "offers" && <OffersTab />}
        {active === "plans" && <PlansTab />}
        {active === "college" && <CollegeTab />}
      </main>

      {/* Footer CTA */}
      <footer className="text-white" style={{ background: NAVY_DARK }}>
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="flex items-center gap-2 text-xl font-bold">
                <Crown className="h-5 w-5 text-amber-400" /> DesignsToDeploy
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-200">
                Design. Develop. Deploy. Deliver. TaleemFlow DesignsToDeploy ka banaya hua school management system hai. Shuruaat isi haftay ho sakti hai: pehle data, phir training, phir live.
              </p>
              <div className="mt-4 space-y-1.5 text-sm text-blue-100">
                <div className="flex items-center gap-2"><UserCheck className="h-4 w-4" /> Amir Ali Liaqat, Founder and CEO</div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> WhatsApp: +92 309 0886518</div>
                <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> designstodeploy@gmail.com</div>
                <div className="flex items-center gap-2"><CalendarDays className="h-4 w-4" /> Ye khaas rates is school ke liye 7 din tak valid hain</div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <Link to="/" className="rounded-full bg-white px-5 py-2.5 text-center text-sm font-semibold" style={{ color: NAVY }}>
                Live Demo
              </Link>
              <Link to="/login" className="rounded-full px-5 py-2.5 text-center text-sm font-semibold text-white" style={{ background: BLUE }}>
                Portals ka Demo Login
              </Link>
              <span className="flex items-center gap-1.5 text-xs text-blue-300">
                <Bell className="h-3.5 w-3.5" /> Login page par har portal ek click se khulta hai
              </span>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-xs text-blue-300">
            <span className="flex items-center gap-1.5"><Settings className="h-3.5 w-3.5" /> TaleemFlow by DesignsToDeploy</span>
            <span>New Iqra Rauza Tul-Atfal Islamic School System ke liye khaas tayyar karda</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
