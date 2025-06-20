// global.d.ts
export {};

declare global {
  var newCustomPrivacyOption: {
    id: string;
    name: string;
    mode: 'exclude' | 'include';
    selectedContacts: {
      id: string;
      name: string;
      isSelected: boolean;
    }[];
    count: number;
  } | null;
}
