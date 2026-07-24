import React from 'react';

export default function Resume() {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 font-['Inter'] text-black antialiased">
      <main className="max-w-[850px] mx-auto bg-white p-8 md:p-12 shadow-xl border border-gray-200">
        
        {/* Header - Name */}
        <header class="text-center pb-6 mb-8 border-b border-gray-300">
          <h1 className="font-['Montserrat'] text-3xl md:text-4xl font-extrabold tracking-wider uppercase">
            KRISHNA RATHWA
          </h1>
        </header>

        {/* Top Section: Summary & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-8 mb-8 border-b border-gray-200">
          
          {/* Professional Summary */}
          <div className="md:col-span-7">
            <h2 className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs leading-relaxed text-gray-800">
              MCA candidate specializing in Artificial Intelligence with enterprise internship experience at Western Railway. Interested in backend development, business analysis, data analytics, technical consulting, project coordination, and enterprise IT solutions.
            </p>
          </div>
          
          {/* Contact Details */}
          <div className="md:col-span-5 text-xs space-y-2.5 md:border-l md:border-gray-200 md:pl-6 flex flex-col justify-center">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-black shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.37 2.4z"/>
              </svg>
              <span className="font-medium">+91 91061 70271</span>
            </div>
            
            {/* Email */}
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-black shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <a href="mailto:krishnarathwa04@gmail.com" className="underline hover:text-blue-600 transition">
                krishnarathwa04@gmail.com
              </a>
            </div>
            
            {/* LinkedIn */}
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-black shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z"/>
              </svg>
              <a href="https://www.linkedin.com/in/rathwa-krishna" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 transition">
                www.linkedin.com/in/rathwa-krishna
              </a>
            </div>
          </div>
        </div>

        {/* Main 2-Column Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN */}
          <div className="md:col-span-5 space-y-7">
            
            {/* Education */}
            <section>
              <h2 className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-gray-700 pb-1 mb-3 border-b border-gray-300">
                EDUCATION
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-xs">MCA (Artificial Intelligence)</h3>
                  <p className="text-xs text-gray-700">Parul University | 2026</p>
                  <p className="text-xs text-gray-600 italic">First Class with Distinction</p>
                </div>
                <div>
                  <h3 className="font-bold text-xs">BCA (Full Stack Web Development)</h3>
                  <p className="text-xs text-gray-700">Parul University | 2024</p>
                  <p className="text-xs text-gray-600 italic">First Class with Distinction</p>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-gray-700 pb-1 mb-3 border-b border-gray-300">
                CERTIFICATIONS
              </h2>
              <div className="space-y-2 text-xs">
                <div>
                  <p className="font-bold">NVIDIA Deep Learning Institute</p>
                  <p className="text-gray-700">Fundamentals of Accelerated Computing with CUDA Python (In Progress)</p>
                </div>
                <div className="pt-1">
                  <p className="font-bold">IIT Bombay</p>
                  <p className="text-gray-700">- Java Programming Fundamentals</p>
                  <p className="text-gray-700">- Python Programming Essentials</p>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-gray-700 pb-1 mb-2 border-b border-gray-300">
                LANGUAGES
              </h2>
              <p className="text-xs text-gray-800">English • Hindi • Gujarati</p>
            </section>

            {/* Professional Skills */}
            <section>
              <h2 className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-gray-700 pb-1 mb-3 border-b border-gray-300">
                PROFESSIONAL SKILLS
              </h2>
              <ul className="list-disc list-inside text-xs text-gray-800 space-y-1">
                <li>Analytical Thinking</li>
                <li>Business Analysis</li>
                <li>Requirement Analysis</li>
                <li>Project Coordination</li>
                <li>Process Improvement</li>
                <li>Data Modeling & Schema Design</li>
                <li>Stakeholder Communication</li>
                <li>Documentation</li>
              </ul>
            </section>

          </div>

          {/* RIGHT COLUMN */}
          <div className="md:col-span-7 space-y-7">
            
            {/* Technical Skills */}
            <section>
              <h2 className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-gray-700 pb-1 mb-3 border-b border-gray-300">
                TECHNICAL SKILLS
              </h2>
              <div className="space-y-2 text-xs">
                <p><span className="font-bold">Languages :</span> Python • Java • PHP • JavaScript</p>
                <p><span className="font-bold">Web & Database :</span> React • HTML • CSS • REST APIs • PostgreSQL • MySQL • MongoDB • Firebase</p>
                <p><span className="font-bold">Software Engineering :</span> RBAC • Database Design • MVC Architecture • SDLC • Multi-User Systems</p>
              </div>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-gray-700 pb-1 mb-4 border-b border-gray-300">
                WORK EXPERIENCE
              </h2>

              <div className="space-y-6">
                
                {/* Experience 1 */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-1.5">
                      {/* Railway Emblem Icon */}
                      <svg className="w-4 h-4 text-black shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zm0 2c3.71 0 5.83.42 6 2H6c.17-1.58 2.29-2 6-2zm-4.5 11c-.83 0-1.5-.67-1.5-1.5S6.67 12 7.5 12s1.5.67 1.5 1.5S8.33 15 7.5 15zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-5H6V8h12v2z"/>
                      </svg>
                      <h3 className="font-bold text-xs">Western Railway</h3>
                    </div>
                    <span className="text-xs text-gray-600">Vadodara | Oct 2023 - April 2024</span>
                  </div>
                  <p className="text-xs font-semibold text-gray-800 mb-1">Full Stack Developer Intern</p>
                  <p className="text-xs mb-1"><span className="font-bold">Project :</span> WRSIMS (Western Railway Station Asset Information Management System)</p>
                  <p className="text-xs mb-2"><span class="font-bold">Tech Stack :</span> PHP • MySQL • HTML • CSS • JavaScript</p>
                  
                  <ul className="list-disc list-outside pl-4 text-xs text-gray-800 space-y-1 leading-relaxed">
                    <li>Developed, tested, and deployed <span className="font-bold">WRSIMS</span> for <span className="font-bold">Western Railway.</span></li>
                    <li>Digitized manual paper-based asset management workflows into a centralized web platform.</li>
                    <li>Implemented <span className="font-bold">RBAC</span> for 4 organizational user roles.</li>
                    <li>Designed a relational database schema to manage station assets, user roles, and operational records.</li>
                  </ul>
                </div>

                {/* Experience 2 */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-1.5">
                      {/* Railway Emblem Icon */}
                      <svg className="w-4 h-4 text-black shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zm0 2c3.71 0 5.83.42 6 2H6c.17-1.58 2.29-2 6-2zm-4.5 11c-.83 0-1.5-.67-1.5-1.5S6.67 12 7.5 12s1.5.67 1.5 1.5S8.33 15 7.5 15zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-5H6V8h12v2z"/>
                      </svg>
                      <h3 className="font-bold text-xs">Western Railway</h3>
                    </div>
                    <span className="text-xs text-gray-600">Vadodara | Dec 2025 - May 2026</span>
                  </div>
                  <p className="text-xs font-semibold text-gray-800 mb-1">SDE Intern</p>
                  <p className="text-xs mb-1"><span className="font-bold">Project :</span> NOCC ROOT (Centralized Data Storing & Management System)</p>
                  <p className="text-xs mb-2"><span className="font-bold">Tech Stack :</span> React • Python • FastAPI • PostgreSQL • Docker • Git</p>
                  
                  <ul className="list-disc list-outside pl-4 text-xs text-gray-800 space-y-1 leading-relaxed">
                    <li>Developed NOCC ROOT, a centralized enterprise platform for managing operational data and digitizing workflows at the Network Operations Control Center (NOCC).</li>
                    <li>Designed a configurable admin dashboard that enables administrators to create dynamic modules with automatically generated database tables, schemas, and forms based on operational requirements.</li>
                    <li>Implemented Role-Based Access Control (RBAC), secure session management, and automated maintenance workflows to strengthen security, simplify administration, and support the complete data lifecycle.</li>
                  </ul>
                </div>

              </div>
            </section>

          </div>

        </div>
      </main>
    </div>
  );
}
