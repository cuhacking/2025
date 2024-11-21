import inquirer from 'inquirer'
import { scheduleHybrid } from '../hybrid'

(async function getInputAndRunPlaywright() {
  const answers = await inquirer.prompt([
    { type: 'input', name: 'EVENT_TITLE', message: 'Enter the event title:' },
    { type: 'input', name: 'EVENT_DATE', message: 'Enter the event date (YYYY/MM/DD):' },
    { type: 'input', name: 'EVENT_START_TIME', message: 'Enter the event start time (e.g., 10:00 AM):' },
    { type: 'input', name: 'EVENT_END_TIME', message: 'Enter the event end time (e.g., 12:00 PM):' },
    { type: 'input', name: 'EVENT_DESCRIPTION', message: 'Enter the event description:' },
    { type: 'input', name: 'EVENT_LOCATION', message: 'Enter the event location:' },
    { type: 'input', name: 'EVENT_EXPECTED_ATTENDEES', message: 'Enter the expected number of attendees:' },
    { type: 'input', name: 'ONLINE_PLATFORM', message: 'Enter the online platform used:' },
    { type: 'input', name: 'ONLINE_TOPICS', message: 'Enter the online topics discussed:' },
    { type: 'input', name: 'ONLINE_LOCATION', message: 'Enter the online broadcast origin location:' },
    { type: 'input', name: 'ONLINE_ORGANIZERS', message: 'Enter number of online organizers:' },
    { type: 'input', name: 'ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN', message: 'Enter number of organizers attending from origin of broadcast:' },
    { type: 'input', name: 'RISK_SPEAKER_TOPICS', message: 'Enter speaker topics:' },
  ])

  await scheduleHybrid(
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
    answers.ONLINE_PLATFORM,
    answers.ONLINE_TOPICS,
    answers.ONLINE_LOCATION,
    answers.ONLINE_ORGANIZERS,
    answers.ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN,
    answers.RISK_SPEAKER_TOPICS,
    'Raef Sarofiem, Ajaan Nalliah',
    'https://cuhacking.ca/',
    'None',
    'None',
    'The organizers',
    'None',
  )
})()
