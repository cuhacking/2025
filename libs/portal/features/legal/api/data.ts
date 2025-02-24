import type { LegalItem } from '@cuhacking/portal/types/legal'

export function getLegalData(): { legalData: LegalItem[] } {
  return {
    legalData: [
      {
        value: 'MLH Code of Conduct',
        title: 'MLH Code of Conduct',
        content: `
        TL;DR: Be respectful. Harassment and abuse are never tolerated. If you are in a situation that makes you uncomfortable at an MLH Member Event, or if the event itself creates an unsafe or inappropriate environment, please report it using the procedures below.

        MLH stands for inclusivity. We believe that every single person has the right to hack in a safe and welcoming environment.

        Harassment includes but is not limited to:
        - Offensive verbal or written comments related to gender, age, sexual orientation, disability, race, religion, or social status.
        - Sharing sexual images, violent depictions, or engaging in intimidation.
        - Inappropriate physical contact and unwelcome sexual attention.
        
        If you're making someone feel uncomfortable, that counts as harassment. Participants asked to stop any harassing behavior are expected to comply immediately.

        Reporting Procedures:
        If you feel uncomfortable or believe there's a violation of the code of conduct, report it immediately using one of these methods:

        - North America: +1 409 202 6060, incidents@mlh.io  
        - Canada: +1 343 453 4532, incidents@mlh.io  
        - Europe: +44 800 808 5675, incidents@mlh.io  
        - Asia-Pacific: +91 000 80004 02492, incidents@mlh.io  
        - India: 000 80004 02492, incidents@mlh.io  
        `,
        buttonContent: 'I have read MLH Code of Conduct',
      },
      {
        value: 'MLH Terms & Conditions',
        title: 'MLH Terms & Conditions',
        content: `
        MAJOR LEAGUE HACKING CONTEST TERMS AND CONDITIONS  
        Sponsored by Major League Hacking (Sponsor).  

        Term: July 1, 2024 - June 30, 2025.  

        Eligibility:  
        - The Contest is open to individuals who are at least 18 years old (or minors with parental permission).  
        - Employees of Sponsor and their respective affiliates, advertising agencies, and immediate family members are not eligible to participate.  

        How to Participate:  
        - Submit an application (the “Application”) at the Event related to the Theme.  
        - All work on your Application must be performed during the hackathon window.  

        Scoring Criteria:  
        - Originality/Creativity (25%)  
        - Technical Complexity (25%)  
        - Adherence to Theme (25%)  
        - Practical Implementation (25%)  

        Ownership of Applications:  
        - Participants retain ownership of their work but must ensure their project does not infringe on any third-party intellectual property rights.  

        Publicity:  
        - By participating, you consent to the use of your name, photo, and entry in MLH promotional materials.  

        Full contest rules can be found here:  
        Hackathon Rules: https://github.com/MLH/mlh-policies/blob/master/standard-hackathon-rules.md  
        `,
        buttonContent: 'I have read MLH Terms & Conditions',
      },
      {
        value: 'MLH Privacy Policy',
        title: 'MLH Privacy Policy',
        content: `
        Privacy & Data Usage  
        Major League Hacking, Inc (MLH, us, or we) respects the privacy of its users. This Privacy Policy describes how we collect, use, and protect your personal information.

        Information We Collect:  
        - Name, username, email, and contact details.  
        - Billing and shipping addresses (if applicable).  
        - Device details such as model, OS, browser type, and IP address.  

        How We Use Your Information:  
        - To provide and improve our services.  
        - To respond to inquiries and administrative requests.  
        - To send updates, promotions, and newsletters.  

        Information Sharing:  
        - We do not sell your data.  
        - We may share information with third-party services for event organization purposes.  
        - We comply with legal requests such as subpoenas.  

        Security Measures:  
        - We use industry-standard security to protect your personal data.  
        - However, no system is 100% secure, and we advise users to take precautions.  

        Contact Us:  
        If you have any concerns, email us at hi@mlh.io.  
        `,
        buttonContent: 'I have read MLH Privacy Policy',
      },
      {
        value: 'cuHacking Terms & Conditions',
        title: 'cuHacking Terms & Conditions',
        content: `
        1. Acceptance of Terms:  
        By registering for cuHacking, you agree to these Terms & Conditions.  

        2. Eligibility:  
        - Participants must be at least 18 years old.  
        - The Hackathon is open to students and recent graduates in the Ottawa Region.  

        3. Code of Conduct:  
        - Respect all attendees, volunteers, and organizers.  
        - No harassment, discrimination, or inappropriate behavior.  
        - No cheating, plagiarism, or intellectual property theft.  

        4. Registration & Participation:  
        - Participants must register before the deadline on the official cuHacking platform.  

        5. Intellectual Property & Ownership:  
        - Participants retain ownership of their projects.  
        - cuHacking and its sponsors may request a non-exclusive license to showcase winning projects.  

        6. Prizes & Disqualification:  
        - Prizes are awarded based on judges' criteria.  
        - Any rule violations may result in disqualification.  

        7. Liability & Indemnification:  
        - cuHacking is not responsible for lost, stolen, or damaged property during the event.  

        8. Privacy & Data Usage:  
        - By registering, you consent to cuHacking collecting and processing your information for event administration.  

        9. MLH Affiliation:  
        - cuHacking is officially affiliated with Major League Hacking (MLH).  
        - By participating, you also agree to MLH’s Code of Conduct: http://mlh.io/code-of-conduct  

        10. Contact Information:  
        - For any questions, contact us at info@cuhacking.ca.  
        `,
        buttonContent: 'I have read cuHacking Terms & Conditions',
      },
    ],
  }
}
