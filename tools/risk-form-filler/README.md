# Workflow Execution Guide

To run the script, use either one of these commands in the CLI to run a specific workflow:

1. `pnpm nx run risk-form-filler:online` --> for submitting online events
2. `pnpm nx run risk-form-filler:in-person` --> for submitting in-person events
3. `pnpm nx run risk-form-filler:hybrid` --> for submitting hybrid events

This will compile and automatically run a workflow for that specifc type of form.

Be sure to change the input for that according workflow (for instance, change your hybrid input answers in src/input/hybrid-input.ts to something that is to your liking)

Note that although these forms automate answers, please make a review to ensure that all the information on the form is filled completely and accurate before submission.

Don't forget to end your session by pressing `CTRL C`.
