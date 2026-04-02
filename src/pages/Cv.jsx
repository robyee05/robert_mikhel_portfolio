import { useRef } from "react";
import CvDownloadButton from "../components/CvDownloadButton";

export default function Cv() {

const cvRef = useRef();

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-4">
      <div ref={cvRef} className="cv-container glass rounded-2xl p-10 border border-border space-y-5">

        <CvDownloadButton contentRef={cvRef}/>

        {/* HEADER */}
        <section className="relative">
          <h1 className="text-5xl font-bold tracking-wide">
            ROBERT <span className="text-primary">MIKHEL</span>
          </h1>
          <p className="text-muted-foreground mt-1">
            Frontend-focused Fullstack Developer
          </p>

          <span className="absolute text-[120px] font-bold opacity-5 top-0 right-0">
            CV
          </span>
        </section>

        {/* INTRO BLOCK */}
        <section className="grid grid-cols-3 gap-4 relative">

          {/* LEFT IMAGE */}
          <div className="col-span-1">
            <img
              src="/robert_mikhel.jpg"
              className="rounded-xl object-cover w-full h-[280px]"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-2 space-y-5">

            {/* ABOUT */}
            <div>
              <h2 className="text-xl font-semibold mb-2">About Me</h2>
              <p className="text-sm text-muted-foreground">
                Frontend-focused fullstack developer with 7 years of experience in web development. 
                Started as a freelancer building WordPress and JavaScript projects, and later transitioned into fullstack development.
                Currently working with Symfony on the backend and modern frameworks like React on the frontend. 
                Focused on building clean, responsive, and user-friendly interfaces.
                Experience with Angular, Node.js, MongoDB, and basic UI design using Figma and Photoshop. 
                Passionate about creating practical solutions and writing maintainable code.
              </p>
            </div>

            {/* CONTACT */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Contact</h2>
              <p className="text-sm">
                <span className="text-muted-foreground">Email:</span> robert.mikhel@gmail.com <br />
                <span className="text-muted-foreground">Phone:</span> +36 70 674 9668 <br />
                <span className="text-muted-foreground">Location:</span> Vác
              </p>
            </div>

          </div>

          {/* BACKGROUND TEXT */}
          {/* <span className="absolute text-[100px] font-bold opacity-5 bottom-0 right-0 pointer-events-none">
            INTRO
          </span> */}
        </section>

        {/* 4 BLOCK GRID */}
        <section className="grid gap-5 relative">

          {/* EDUCATION */}
          <div className="p-4 border border-border rounded-xl">
            <h3 className="font-semibold mb-2">Education</h3>
            <section className="flex flex-wrap gap-2 relative">
                <p className="text-sm text-muted-foreground">
                    <span className="text-sm text-primary font-medium">2021 - 2022</span> <br />
                    Webler Oktatóstúdió <br />
                    Jr. Frontend developer <br />
                </p>
                <p className="text-sm text-muted-foreground">
                    <span className="text-sm text-primary font-medium">2020- 2021</span> <br />
                    Webler Oktatóstúdió <br />
                    Webmaster course <br />
                </p>
                <p className="text-sm text-muted-foreground">
                    <span className="text-sm text-primary font-medium">2013 - 2017</span> <br />
                    ELTE BTK. <br />
                    Media & Communication <br />
                </p>
            </section>
            
          </div>

          {/* ORGANIZATION */}
         <div className="p-4 border border-border rounded-xl relative overflow-hidden">

  {/* BACKGROUND TEXT */}
  <span className="absolute text-[100px] font-bold opacity-[0.04] bottom-0 right-0 pointer-events-none">
    EXPERIENCE
  </span>

  <h3 className="font-semibold mb-4">Organization</h3>

  <div className="space-y-3">

    {/* JOB 1 */}
    <div className="grid grid-cols-[120px_1fr] gap-4">
      
      {/* LEFT (DATE) */}
      <div className="text-sm text-primary font-medium">
        2021 - Present
      </div>

      {/* RIGHT (CONTENT) */}
      <div>
        <p className="text-primary-foreground font-medium">
          Fullstack Web Developer
        </p>
        <p className="text-sm text-muted-foreground">
          Duna Autó Zrt.
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          Maintaining and developing Symfony-based web applications.
        </p>
      </div>

    </div>

    {/* JOB 2 */}
    <div className="grid grid-cols-[120px_1fr] gap-4">
      
      <div className="text-sm text-primary font-medium">
        2019 - Present
      </div>

      <div>
        <p className="text-primary-foreground font-medium">
          Freelance Developer
        </p>
        <p className="text-sm text-muted-foreground">
          Self-Employed
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          Building web applications using React and TypeScript.
        </p>
      </div>

    </div>

  </div>

</div>

          {/* STACK */}
          <div className="p-4 border border-border rounded-xl">
            <h3 className="font-semibold mb-2">Stack</h3>
            <section className="grid gap-6 relative">
                <p className="text-sm text-muted-foreground flex flex-wrap gap-2 ">
                    <span className="px-2 py-1 bg-surface text-xs rounded-full text-muted-foreground">Javascript</span> 
                    <span className="px-2 py-1 bg-surface text-xs rounded-full text-muted-foreground">React</span> 
                    <span className="px-2 py-1 bg-surface text-xs rounded-full text-muted-foreground">Angular</span> 
                    <span className="px-2 py-1 bg-surface text-xs rounded-full text-muted-foreground">Wordpress</span> 
                    <span className="px-2 py-1 bg-surface text-xs rounded-full text-muted-foreground">MYSQL</span> 
                    <span className="px-2 py-1 bg-surface text-xs rounded-full text-muted-foreground">Next.js</span> 
                    <span className="px-2 py-1 bg-surface text-xs rounded-full text-muted-foreground">TypeScript</span> 
                    <span className="px-2 py-1 bg-surface text-xs rounded-full text-muted-foreground">Tailwind CSS</span> 
                    <span className="px-2 py-1 bg-surface text-xs rounded-full text-muted-foreground">Bootstrap</span> 
                    <span className="px-2 py-1 bg-surface text-xs rounded-full text-muted-foreground">Mongo</span> 
                    <span className="px-2 py-1 bg-surface text-xs rounded-full text-muted-foreground">Vercel</span> 
                </p>
            </section>
            
          </div>
          
        </section>

        {/* SKILLS */}
        <section className="grid grid-cols-3 gap-6 relative mt-5 pb-10">

          <div>
            <h3 className="font-semibold mb-2">Personal</h3>
            <p className="text-sm text-muted-foreground">
              Problem solving, communication, team work, out fo the box
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Interests</h3>
            <p className="text-sm text-muted-foreground">
              Photography, Gym & Fitness, AI & Emerging Technologies, Web Design & UI Exploration
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Software Skills</h3>
            <p className="text-sm text-muted-foreground">
              Figma, Photoshop, VS Code, Git
            </p>
          </div>

          <span className="absolute text-[100px] font-bold opacity-5 top-0 left-0 pointer-events-none">
            SKILLS
          </span>
        </section>

      </div>
    </div>
  );
}