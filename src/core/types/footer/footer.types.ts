export type linkType = { link: string; name: string };

export interface INavProps {
  title: string;
  pages: linkType[];
}
export interface ISMIconsProps {
  links: string;
  icons: React.JSX.Element;
}
