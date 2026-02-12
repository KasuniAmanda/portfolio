import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const passUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <MailchimpSubscribe
      url={passUrl}
      render={({ subscribe, status, message }) => (
        <Newsletter
          subscribe={subscribe}
          status={status}
          message={message}
        />
      )}
    />
  );
};
