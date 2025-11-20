declare module 'react-mailchimp-subcribe' {
  interface MailchimpFormProps {
    url?: string;
    render?: (props: unknown) => JSX.Element;
  }

  // Minimal stub to satisfy TypeScript when the package is used.
  export default function ReactMailchimpSubscribe(props: MailchimpFormProps): JSX.Element;
}

export {};
