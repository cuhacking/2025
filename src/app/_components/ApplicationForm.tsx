"use client";
import React, { FormEvent, useState } from 'react';
import { UserInformation } from '@prisma/client';
import { api } from "~/trpc/react"


interface ApplicationFormProps {
    session: {
      user: {
        id: string;
      };
    };
}

export function ApplicationForm (props: ApplicationFormProps){

    const [formData, setFormData] = useState<UserInformation>({
        id: '',
        email: '',
        first_name: '',
        last_name: '',
        levels_of_study: '',
        major: '',
        date_of_birth: new Date(0),
        gender: '',
        phone_number: '',
        school: '',
        userId: props.session?.user.id || '' 
    });

    const submitApplicationForm = api.post.submitApplicationForm.useMutation();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            await submitApplicationForm.mutateAsync(formData);
            console.log('Form submitted successfully');
          } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    id="firstName" 
                    value={formData.first_name || ''} 
                    onChange={(e)=> setFormData({ ...formData, first_name: e.target.value})} 
                />

                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    id="lastName" 
                    value={formData.last_name || ''} 
                    onChange={(e)=> setFormData({ ...formData, last_name: e.target.value})} 
                />

                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    value={formData.email || ''} 
                    onChange={(e)=> setFormData({ ...formData, email: e.target.value})} 
                />

                <label htmlFor="school">School</label>
                <input 
                    type="text" 
                    id="school" 
                    value={formData.school || ''} 
                    onChange={(e)=> setFormData({ ...formData, school: e.target.value})} 
                />

                <label htmlFor="major">Major</label>
                <input 
                    type="text" 
                    id="major" 
                    value={formData.major || ''} 
                    onChange={(e)=> setFormData({ ...formData, major: e.target.value})} 
                />

                <label htmlFor="yearOfStudy">Year of Study</label>
                <input 
                    type="text" 
                    id="yearOfStudy" 
                    value={formData.levels_of_study || ''} 
                    onChange={(e)=> setFormData({ ...formData, levels_of_study: e.target.value})} 
                />

                <label htmlFor="gender">Gender</label>
                <input 
                    type="text" 
                    id="gender" 
                    value={formData.gender || ''} 
                    onChange={(e)=> setFormData({ ...formData, gender: e.target.value})} 
                />

                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input 
                    type="date" 
                    id="dateOfBirth" 
                    value={formData.date_of_birth ? formData.date_of_birth.toISOString().split('T')[0] : ''} 
                    onChange={(e)=> setFormData({ ...formData, date_of_birth: new Date(e.target.value)})} 
                />

                <label htmlFor="phoneNumber">Phone Number</label>
                <input 
                    type="tel" 
                    id="phoneNumber" 
                    value={formData.phone_number || ''} 
                    onChange={(e)=> setFormData({ ...formData, phone_number: e.target.value})} 
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ApplicationForm;