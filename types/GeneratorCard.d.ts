export type CardProps = {
  title: string;
  variant: string;
  text: string;
  buttons: {
    link: string;
    disabled: boolean;
    btnText: string;
  }[];
};
