import inquirer from 'inquirer'
import { scheduleInPerson } from '../in-person'

(async function getInputAndRunPlaywright() {
  const answers = await inquirer.prompt([
    { type: 'input', name: 'EVENT_TITLE', message: 'Enter the event title:' },
    { type: 'input', name: 'EVENT_DATE', message: 'Enter the event date (YYYY/MM/DD):' },
    { type: 'input', name: 'EVENT_START_TIME', message: 'Enter the event start time (e.g., 10:00 AM):' },
    { type: 'input', name: 'EVENT_END_TIME', message: 'Enter the event end time (e.g., 12:00 PM):' },
    { type: 'input', name: 'EVENT_DESCRIPTION', message: 'Enter the event description:' },
    { type: 'input', name: 'EVENT_LOCATION', message: 'Enter the event location:' },
    { type: 'input', name: 'EVENT_EXPECTED_ATTENDEES', message: 'Enter the expected number of attendees:' },
    { type: 'input', name: 'RISK_SPEAKER_TOPICS', message: 'Enter speaker topics:' },
  ])

  await scheduleInPerson(
    'Raef',
    'Sarofiem',
    '101266475',
    'raefsarofiem@cmail.carleton.ca',
    'RAEF_PHONE_NUMBER',
    'Ajaan',
    'Nalliah',
    '101325463',
    'ajaannalliah@cmail.carleton.ca',
    '6478773250',
    answers.EVENT_TITLE,
    answers.EVENT_DATE,
    answers.EVENT_START_TIME,
    answers.EVENT_END_TIME,
    answers.EVENT_DESCRIPTION,
    answers.EVENT_LOCATION,
    answers.EVENT_EXPECTED_ATTENDEES,
    answers.RISK_SPEAKER_TOPICS,
    'Raef Sarofiem, Ajaan Nalliah',
    'https://cuhacking.ca/',
    'None',
    'None',
    'The organizers',
    'None',
  )
})()
