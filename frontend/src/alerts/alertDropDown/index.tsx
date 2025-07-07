export type alertDropdownItem = {
  type: "notice" | "error" | "success";
  title: string;
  link?: string;
  list?: Array<string>;
  id: string;
};
