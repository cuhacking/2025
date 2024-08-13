import React from "react";
import { useConfetti } from "./Confetti";
import { FrostedPanel } from "../../../components/FrostedPanel";
import { Text, Typo } from "../../../components/Typography";

export const EmailSignup = (props: { id?: string; className?: string }) => {
  return (
    <FrostedPanel className={props.className} id={props.id}>
      <div className="flex flex-col items-center justify-center space-y-5">
        <Text typo={Typo.TITLE_3}>Coming February 2025!</Text>
        <Text typo={Typo.TITLE}>cuHacking</Text>
        <Text typo={Typo.SUBTITLE} className="text-center">
          Carleton University's Official Hackathon
        </Text>
        <EmailSubscriptionForm />
        <a href="https://forms.gle/D6vV4SJKjyLbWXsX7" target="_blank" >
          <Text typo={Typo.SUBTITLE} className="underline font-bold text-shadow-white">Early Hacker Application Form</Text>
        </a>
      </div>
    </FrostedPanel>
  );
};

export const SponsorEmailSignup = (props: { id?: string; className?: string })=> {
  return (
    <FrostedPanel className={props.className} id={props.id}>
      <div className="flex flex-col items-center justify-center space-y-5 mx-auto">
        <Text typo={Typo.TITLE_4}>Interested in becoming a sponsor?</Text>
        <SponsorEmailSubscriptionForm />
      </div>
    </FrostedPanel>
  );
};

export const EmailSubscriptionForm = () => {
  const [value, setValue] = React.useState("");
  const [prevSubmissions, setPrevSubmissions] = React.useState([] as string[]);
  const { activate } = useConfetti();

  const submitEmail = () => {
    const payload = {
      email: value,
      emailType: "email-subscription",
    };
    if (prevSubmissions.includes(value)) {
      return;
    }
    fetch("https://hooks.zapier.com/hooks/catch/18464353/3p8hlfr/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify(payload),
    });

    setPrevSubmissions([...prevSubmissions, value]);
    activate();
  };

  return (
    <div className="flex mt-5 w-full gap-4 flex-col md:flex-row">
      <input
        type="text"
        placeholder="Email"
        className="input input-bordered rounded-full w-full "
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") submitEmail();
        }}
      />
      <button
        className="btn btn-secondary rounded-full"
        onClick={() => {
          submitEmail();
        }}
      >
        SUBSCRIBE
      </button>
    </div>
  );
};

export const SponsorEmailSubscriptionForm = () => {
  const [value, setValue] = React.useState("");
  const [prevSubmissions, setPrevSubmissions] = React.useState([] as string[]);
  const { activate } = useConfetti();

  const submitEmail = () => {
    const payload = {
      email: value,
      emailType: "sponsor",
    };
    if (prevSubmissions.includes(value)) {
      return;
    }
    fetch("https://hooks.zapier.com/hooks/catch/18464353/3p8hlfr/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify(payload),
    });

    setPrevSubmissions([...prevSubmissions, value]);
    activate();
  };

  return (
    <div className="flex mt-5 w-full flex-col gap-4 sm:flex-row">
      <input
        type="text"
        placeholder="Email"
        className="input input-bordered rounded-full w-full "
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") submitEmail();
        }}
      />
      <button
        className="btn btn-outline btn-secondary rounded-full"
        onClick={() => {
          submitEmail();
        }}
      >
        SIGN UP
      </button>
    </div>
  );
};
