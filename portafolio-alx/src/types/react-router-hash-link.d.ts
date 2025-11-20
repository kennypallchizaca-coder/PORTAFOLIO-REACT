declare module 'react-router-hash-link' {
  import * as React from 'react';

  export interface HashLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    smooth?: boolean;
    to: string;
  }

  export const HashLink: React.FC<HashLinkProps>;
}

export {};
