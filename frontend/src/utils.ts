import {
  CommandLineIcon,
  CpuChipIcon,
  LightBulbIcon,
  LinkIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const nodeColors = {
  prompts: "#7C7C7C",
  llms: "#35ADAE",
  chains: "#FFDC35",
  agents: "#903BBE",
  tools: "#FF3434",
  memories: "#FF9135",
};

export const nodeIcons = {
  agents: RocketLaunchIcon,
  chains: LinkIcon,
  memories: CpuChipIcon,
  llms: LightBulbIcon,
  prompts: CommandLineIcon,
  tools: WrenchScrewdriverIcon,
};

export function toFirstUpperCase(str: string) {
  return str
    .split(" ")
    .map((word, index) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}
