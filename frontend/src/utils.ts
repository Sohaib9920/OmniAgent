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
  prompt: "#7C7C7C",
  model: "#35ADAE",
  chain: "#FFDC35",
  agent: "#903BBE",
  tool: "#FF3434",
  memory: "#FF9135",
};

export const nodeIcons = {
  agent: RocketLaunchIcon,
  chain: LinkIcon,
  memory: CpuChipIcon,
  model: LightBulbIcon,
  prompt: CommandLineIcon,
  tool: WrenchScrewdriverIcon,
};
