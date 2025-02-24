import { endsWith, Ensure, not } from '@serenity-js/assertions'
import { actorCalled, Duration, Wait } from '@serenity-js/core'
import { Click, Enter, isEnabled, Page } from '@serenity-js/web'
// import { Navigate, Enter, Click, SelectOption } from '@serenity-js/web';
import { accordions, buttons, checkbox, date, inputs, radioGroup, select } from './questions'

export async function createProfile() {
  await actorCalled('Hacker').attemptsTo(
    Wait.for(Duration.ofSeconds(1)),
    // ============================
    // =======  PERSONAL  =========
    // ============================
    Click.on(accordions.PERSONAL),
    Click.on(select.GENDER.button),
    Click.on(select.GENDER.options.female),
    Enter.theValue('19').into(inputs.AGE),
    Enter.theValue('https://drive.google.com/file/d/1mchFDm7D8lqmVO7Y8H3WOvE2yYwNWUOm/view').into(inputs.RESUME),

    // ====================================
    // ==========   EDUCATION   ===========
    // ====================================
    Click.on(accordions.EDUCATION),
    Click.on(checkbox.EDUCATION),
    Click.on(date.MONTH.button),
    Click.on(date.MONTH.options.may),
    Click.on(date.YEAR.button),
    Click.on(date.YEAR.options['2027']),
    Click.on(select.INSTITUTION.button),
    Click.on(select.INSTITUTION.options.acadiaUniversity),
    Click.on(select.DEGREE.button),
    Click.on(select.DEGREE.options.undergraduateUniversity3Year),
    Click.on(select.FIELD_OF_STUDY.button),
    Click.on(select.FIELD_OF_STUDY.options.naturalScience),
    Click.on(radioGroup.YEAR_STANDINGS['3']),

    // ===================================
    // ========  RESTRICTIONS  ============
    // ===================================
    Click.on(accordions.RESTRICTIONS),

    // ===================================
    // ==========  CONTACT  ==============
    // ===================================
    Click.on(accordions.CONTACT),
    Enter.theValue('16139996633').into(inputs.PHONE_NUMBER),

    // ====================================
    // ========= SOCIAL MEDIA  ============
    // ====================================
    Click.on(accordions.SOCIAL_MEDIA),
    Enter.theValue('https://hasithdev.com').into(inputs.WEBSITE),

    // ====================================
    // ======   EMERGENCY CONTACT   =======
    // ====================================
    Click.on(accordions.PERSONAL),
    // avoid conflicts with same input labels
    Click.on(accordions.EMERGENCY_CONTACT),
    Click.on(accordions.CONTACT),
    Enter.theValue('Jane Doe').into(inputs.EMERGENCY_FULL_NAME),
    Enter.theValue('janedoe@janedoe.ca').into(inputs.EMERGENCY_EMAIL),
    Click.on(select.EMERGENCY_RELATIONSHIP.button),
    Click.on(select.EMERGENCY_RELATIONSHIP.options.grandparent),
    Enter.theValue('16136130000').into(inputs.EMERGENCY_PHONE_NUMBER),

    Click.on(buttons.SAVE),
    Wait.for(Duration.ofSeconds(1)),
    Ensure.that(Page.current().url().href, endsWith('/dashboard')),
  )
}

export async function createProfileNoSchool() {
  await actorCalled('Hacker').attemptsTo(
    Wait.for(Duration.ofSeconds(1)),
    // ============================
    // =======  PERSONAL  =========
    // ============================
    Click.on(accordions.PERSONAL),
    Click.on(select.GENDER.button),
    Click.on(select.GENDER.options.female),
    Enter.theValue('19').into(inputs.AGE),
    Enter.theValue('https://drive.google.com/file/d/1mchFDm7D8lqmVO7Y8H3WOvE2yYwNWUOm/view').into(inputs.RESUME),

    // ===================================
    // ========  RESTRICTIONS  ============
    // ===================================
    Click.on(accordions.RESTRICTIONS),

    // ===================================
    // ==========  CONTACT  ==============
    // ===================================
    Click.on(accordions.CONTACT),
    Enter.theValue('16139996633').into(inputs.PHONE_NUMBER),

    // ====================================
    // ========= SOCIAL MEDIA  ============
    // ====================================
    Click.on(accordions.SOCIAL_MEDIA),
    Enter.theValue('https://hasithdev.com').into(inputs.WEBSITE),

    // ====================================
    // ======   EMERGENCY CONTACT   =======
    // ====================================
    Click.on(accordions.PERSONAL),
    // avoid conflicts with same input labels
    Click.on(accordions.EMERGENCY_CONTACT),
    Click.on(accordions.CONTACT),
    Enter.theValue('Jane Doe').into(inputs.EMERGENCY_FULL_NAME),
    Enter.theValue('janedoe@janedoe.ca').into(inputs.EMERGENCY_EMAIL),
    Click.on(select.EMERGENCY_RELATIONSHIP.button),
    Click.on(select.EMERGENCY_RELATIONSHIP.options.grandparent),
    Enter.theValue('16136130000').into(inputs.EMERGENCY_PHONE_NUMBER),

    Click.on(buttons.SAVE),
    Wait.for(Duration.ofSeconds(1)),
    Ensure.that(Page.current().url().href, endsWith('/dashboard')),
  )
}

export async function createInvalidProfile() {
  // THIS FORM IS MISSING ENTERING CONTACT INFO
  await actorCalled('Hacker').attemptsTo(
    Wait.for(Duration.ofSeconds(1)),
    // ============================
    // =======  PERSONAL  =========
    // ============================
    Click.on(accordions.PERSONAL),
    Click.on(select.GENDER.button),
    Click.on(select.GENDER.options.female),
    Enter.theValue('19').into(inputs.AGE),
    Enter.theValue('https://drive.google.com/file/d/1mchFDm7D8lqmVO7Y8H3WOvE2yYwNWUOm/view').into(inputs.RESUME),
    Click.on(accordions.PERSONAL),

    // ===================================
    // ========  RESTRICTIONS  ============
    // ===================================
    Click.on(accordions.RESTRICTIONS),

    // ====================================
    // ========= SOCIAL MEDIA  ============
    // ====================================
    Click.on(accordions.SOCIAL_MEDIA),
    Enter.theValue('https://hasithdev.com').into(inputs.WEBSITE),

    // ====================================
    // ======   EMERGENCY CONTACT   =======
    // ====================================
    Click.on(accordions.EMERGENCY_CONTACT),
    Enter.theValue('Jane Doe').into(inputs.EMERGENCY_FULL_NAME),
    Enter.theValue('janedoe@janedoe.ca').into(inputs.EMERGENCY_EMAIL),
    Click.on(select.EMERGENCY_RELATIONSHIP.button),
    Click.on(select.EMERGENCY_RELATIONSHIP.options.grandparent),
    Wait.for(Duration.ofSeconds(0.4)),
    Enter.theValue('16136130000').into(inputs.EMERGENCY_PHONE_NUMBER),

    Ensure.that(buttons.SAVE, not(isEnabled())),
  )
}
